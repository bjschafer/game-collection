# GAMEYE snapshot import

Decision: treat each `.ged` export as the complete source of truth for the four
collection tables (`ownership`, `backlog`, `tags`, `owned_items_tags`). Replace
those tables on import instead of merging rows.

- The previous `INSERT OR IGNORE` recipe preserved stale versions of existing
  UUIDs and never reflected deletions. It could report success without syncing.
- `scripts/import-gameye.mjs` checks the ZIP member, SQLite integrity, required
  tables/columns, and a non-empty ownership table before generating SQL.
- Local D1 is the default target. Production requires the explicit `--remote`
  flag and gets a timestamped `wrangler d1 export` backup before replacement.
- Account and sync-internal GAMEYE tables are intentionally excluded. The viewer
  does not use them, and importing them would copy private or device-specific
  state without a product reason.
- A snapshot replacement also absorbs upstream GAMEYE schema additions in the
  selected tables. The importer keeps a small required-column guard for fields
  the viewer depends on.
- `--prepare-only` is the escape hatch for inspecting or manually applying the
  generated D1-compatible SQL.
