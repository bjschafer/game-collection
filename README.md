# Game Collection viewer

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https%3A%2F%2Fgithub.com%2Fbjschafer%2Fgame-collection)

This is a game collection viewer designed to run on Cloudflare Workers and D1.

It gets the collection data from a GAMEYE export and loads it into D1.

## Importing from GAMEYE

Export your collection from GAMEYE and copy the resulting `.ged` file to your computer.
The importer validates the archive and SQLite database before changing D1.

Import into the local development database:

```bash
npm run import:gameye -- ./GAMEYE_export.ged
```

When the local collection looks right, import it into the production database:

```bash
npm run import:gameye -- ./GAMEYE_export.ged --remote
```

Remote imports first write a timestamped D1 backup in the project directory. The
import replaces the `ownership`, `backlog`, `tags`, and `owned_items_tags` tables
as one GAMEYE snapshot, so edits and deletions are reflected instead of being
silently skipped. Use `--prepare-only` to validate an export and write the D1 SQL
without applying it.

## Note

I'm not a web dev, so pretty much all of the web-ish bits were written by AI.

I did the reverse engineering (if you can call it that) of the GAMEYE collection export.
So it may be missing info on e.g. consoles I don't have in my collection. Feel free to
open an issue and help me improve it.
