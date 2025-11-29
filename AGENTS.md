## Project Overview

This is a video game collection visualization and sharing project built on Cloudflare Workers with D1 database. The project allows users to display and share their video game, console, and accessory collections.

## Data Source

The project uses data exported from the GAMEYE mobile app:
- Export comes as a `.ged` file (actually a zip file)
- Contains SQLite database `ownership_database.db`
- Database includes game ownership records with detailed metadata

## Database Schema

The main database tables include:
- `ownership`: Core table containing game ownership records with item_id, platform_id, country_id, ownership_mask, quality ratings, notes, and timestamps
- `backlog`: Game backlog/play status tracking with play_status_id, duration, and progress notes
- `tags`: User-defined tags for organizing games
- `owned_items_tags`: Junction table linking ownership records to tags

## Database Migration Commands

To import GAMEYE data into D1 database:

```bash
# Extract SQLite dump from GAMEYE export
sqlite3 ownership_database.db .dump > db.sql

# Clean up SQL for D1 compatibility
sed -i \
    -e 's/BEGIN TRANSACTION//g' \
    -e 's/COMMIT;//g' \
    db.sql

# Upload to D1 database named 'games_owned'
npx wrangler d1 execute games_owned --remote --file=db.sql
```

## Development Commands

```bash
# Install dependencies
npm install

# Run in development mode (uses remote database)
npm run dev

# Build TypeScript
npm run build

# Type check
npm run typecheck

# Lint code
npm run lint

# Format code
npm run format

# Deploy to Cloudflare Workers
npm run deploy
```

## Platform Mapping

The application includes comprehensive platform mapping with official names and visual icons:

- Platform mappings are defined in `src/utils/platforms.ts`
- Each platform has an official name, short name, and emoji icon
- API responses automatically include `platform_name` and `platform_icon` fields
- Frontend displays platform names with icons instead of raw IDs
- New endpoint: `/api/platforms` - Lists all supported platforms

Platform examples:
- ID 7 → "Nintendo Entertainment System" (⬜)
- ID 97 → "Nintendo Switch" (🔴)
- ID 105 → "PlayStation 5" (🔵)

## Development Environment

This is a TypeScript project built on Cloudflare Workers with D1 database. The project structure includes:

- `src/index.ts`: Main Worker entry point with routing
- `src/handlers/`: API endpoint handlers
- `src/types/`: TypeScript type definitions
- `src/utils/`: Utility functions like router

Key development notes:
1. Update `wrangler.toml` with your actual D1 database ID
2. The project uses a custom router for handling API routes
3. TypeScript types are defined for all database tables
4. The `ownership` table is the primary data source with rich metadata about each game

## Frontend Pages

The application includes user-friendly web pages for browsing collections:

- `/` - Homepage with navigation and overview
- `/games` - Games collection page with filtering and statistics
- `/consoles` - Consoles collection page with details
- `/accessories` - Accessories collection page with details

Each collection page features:
- Collection statistics (total items, total value, quality metrics)
- Grid layout of item cards with detailed information
- Quality indicators (color-coded dots)
- Price formatting and notes display
- Responsive design for mobile devices

## Key Data Points

Each ownership record includes:
- Game identification (item_id, title, platform_id, country_id)
- Category filtering (category_id: 0=games, 1=consoles, 2&5=accessories, 3=ignored)
- Ownership status (ownership_mask)
- Condition ratings (item_quality, manual_quality, box_quality)
- Financial data (paid, sold prices)
- User notes and timestamps
- UUID for unique identification across syncs
