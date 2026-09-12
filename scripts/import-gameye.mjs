#!/usr/bin/env node

import { closeSync, mkdtempSync, openSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const COLLECTION_TABLES = ['ownership', 'backlog', 'tags', 'owned_items_tags'];
const REQUIRED_OWNERSHIP_COLUMNS = [
  'item_id',
  'platform_id',
  'country_id',
  'category_id',
  'title',
  'uuid',
];

function fail(message) {
  console.error(`\nImport stopped: ${message}`);
  process.exit(1);
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { encoding: 'utf8', ...options });
  if (result.error)
    fail(`${command} is required but could not be started (${result.error.message})`);
  if (result.status !== 0) {
    fail(`${command} failed${result.stderr ? `:\n${String(result.stderr).trim()}` : ''}`);
  }
  return result.stdout ?? '';
}

function parseArguments(argv) {
  const options = { target: 'local', database: 'games_owned', prepareOnly: false, output: null };
  let source = null;

  for (const argument of argv) {
    if (argument === '--remote') options.target = 'remote';
    else if (argument === '--local') options.target = 'local';
    else if (argument === '--prepare-only') options.prepareOnly = true;
    else if (argument.startsWith('--database='))
      options.database = argument.slice('--database='.length);
    else if (argument.startsWith('--output='))
      options.output = resolve(argument.slice('--output='.length));
    else if (argument.startsWith('-')) fail(`unknown option ${argument}`);
    else if (source) fail('provide exactly one .ged file');
    else source = resolve(argument);
  }

  if (!source) {
    fail('provide a GAMEYE export, for example: npm run import:gameye -- collection.ged');
  }
  if (!source.toLowerCase().endsWith('.ged')) fail('the input file must end in .ged');
  return { ...options, source };
}

function sqlite(database, statement) {
  return run('sqlite3', [database, statement]).trim();
}

function makeD1Dump(database) {
  const dropStatements = [...COLLECTION_TABLES]
    .reverse()
    .map((table) => `DROP TABLE IF EXISTS ${table};`)
    .join('\n');

  const dumps = COLLECTION_TABLES.map((table) => run('sqlite3', [database, `.dump ${table}`]))
    .join('\n')
    .split('\n')
    .filter((line) => {
      const sql = line.trim().toUpperCase();
      return (
        sql !== 'BEGIN TRANSACTION;' &&
        sql !== 'COMMIT;' &&
        sql !== 'PRAGMA FOREIGN_KEYS=OFF;' &&
        !sql.startsWith('PRAGMA WRITABLE_SCHEMA')
      );
    })
    .join('\n');

  return [
    '-- Generated from a validated GAMEYE export. Do not edit by hand.',
    'PRAGMA foreign_keys = OFF;',
    dropStatements,
    dumps.trim(),
    'PRAGMA foreign_keys = ON;',
    '',
  ].join('\n\n');
}

function timestamp() {
  return new Date()
    .toISOString()
    .replaceAll(':', '-')
    .replace(/\.\d{3}Z$/, 'Z');
}

const options = parseArguments(process.argv.slice(2));
const workDirectory = mkdtempSync(`${tmpdir()}/gameye-import-`);
const databasePath = resolve(workDirectory, 'ownership_database.db');

try {
  console.log(`Checking ${basename(options.source)}…`);
  const archiveListing = run('unzip', ['-Z1', options.source]).split('\n');
  if (!archiveListing.includes('ownership_database.db')) {
    fail('the archive does not contain ownership_database.db');
  }

  const databaseFile = openSync(databasePath, 'w');
  try {
    run('unzip', ['-p', options.source, 'ownership_database.db'], {
      encoding: null,
      stdio: ['ignore', databaseFile, 'pipe'],
    });
  } finally {
    closeSync(databaseFile);
  }

  const integrity = sqlite(databasePath, 'PRAGMA quick_check;');
  if (integrity !== 'ok') fail(`SQLite integrity check returned: ${integrity}`);

  const tableNames = new Set(
    sqlite(databasePath, "SELECT name FROM sqlite_master WHERE type='table';").split('\n'),
  );
  const missingTables = COLLECTION_TABLES.filter((table) => !tableNames.has(table));
  if (missingTables.length) fail(`the export is missing tables: ${missingTables.join(', ')}`);

  const ownershipColumns = new Set(
    sqlite(databasePath, "SELECT name FROM pragma_table_info('ownership');").split('\n'),
  );
  const missingColumns = REQUIRED_OWNERSHIP_COLUMNS.filter(
    (column) => !ownershipColumns.has(column),
  );
  if (missingColumns.length) fail(`ownership is missing columns: ${missingColumns.join(', ')}`);

  const counts = Object.fromEntries(
    COLLECTION_TABLES.map((table) => [
      table,
      Number(sqlite(databasePath, `SELECT COUNT(*) FROM ${table};`)),
    ]),
  );
  if (!counts.ownership) fail('the export contains no collection items');

  const categorySummary = sqlite(
    databasePath,
    "SELECT 'games=' || SUM(category_id = 0) || ', consoles=' || SUM(category_id = 1) || ', accessories=' || SUM(category_id IN (2, 5)) FROM ownership;",
  );
  console.log(`Validated ${counts.ownership} items (${categorySummary}).`);

  const outputPath = options.output ?? resolve(workDirectory, 'gameye-import.sql');
  writeFileSync(outputPath, makeD1Dump(databasePath));
  if (!readFileSync(outputPath, 'utf8').includes('CREATE TABLE ownership')) {
    fail('the generated import did not contain the ownership schema');
  }

  if (options.prepareOnly) {
    const preparedPath = options.output ?? resolve(`gameye-import-${timestamp()}.sql`);
    if (!options.output) writeFileSync(preparedPath, readFileSync(outputPath));
    console.log(`Prepared ${preparedPath}`);
  } else if (options.target === 'remote') {
    const backupPath = resolve(`games-owned-backup-${timestamp()}.sql`);
    console.log(`Backing up remote D1 to ${basename(backupPath)}…`);
    run(
      'npx',
      [
        'wrangler',
        'd1',
        'export',
        options.database,
        '--remote',
        '--output',
        backupPath,
        '--skip-confirmation',
      ],
      { stdio: 'inherit' },
    );
  }

  if (!options.prepareOnly) {
    console.log(`Replacing collection tables in ${options.target} D1…`);
    run(
      'npx',
      [
        'wrangler',
        'd1',
        'execute',
        options.database,
        `--${options.target}`,
        '--file',
        outputPath,
        '--yes',
      ],
      { stdio: 'inherit' },
    );

    const verification = run('npx', [
      'wrangler',
      'd1',
      'execute',
      options.database,
      `--${options.target}`,
      '--command',
      'SELECT COUNT(*) AS imported_items FROM ownership;',
    ]);
    console.log(verification.trim());
    console.log(
      `Import complete: ${counts.ownership} source items loaded into ${options.target} D1.`,
    );
  }
} finally {
  rmSync(workDirectory, { recursive: true, force: true });
}
