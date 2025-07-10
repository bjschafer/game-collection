# Game Collection viewer

This is a game collection viewer designed to run on Cloudflare Workers and D1.

It gets the collection data by manually importing data from GAMEYE into D1.

## Importing from GAMEYE

You'll need to export your collection from the GAMEYE app and get it onto your computer.
It will come as a `.ged` file. This is actually a zip file in disguise. Extract the zipfile
and you'll be left with a sqlite database file called `ownership_database.db`.

Now, we need to get this into a D1 database:

```bash
sqlite3 ownership_database.db .dump > db.sql
sed -i \
    -e 's/BEGIN TRANSACTION;//g' \
    -e 's/COMMIT;//g' \
    db.sql

npx wrangler d1 execute games_owned --remote --file=db.sql
```

## Note

I'm not a web dev, so pretty much all of the web-ish bits were written by AI.
