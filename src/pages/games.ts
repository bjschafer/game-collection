import { getSharedStyles } from './styles';
import { getCollectionIntro, getFilters, getJavaScript, getNavigation } from './common';

export function getGamesPage(): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Games - Braxton's Game Collection</title>
      ${getSharedStyles()}
    </head>
    <body>
      ${getNavigation('games')}
      
      <main class="container">
        ${getCollectionIntro('Games', 'Browse the games I own. Search by title, filter by platform, or sort by when I added them.')}
        <div id="stats" class="stats">
          <div class="loading">Loading totals…</div>
        </div>
        ${getFilters('games')}
        <div id="content">
          <div class="loading">Loading games…</div>
        </div>
        <div id="items" class="collection-grid"></div>
      </main>
      
      ${getJavaScript('/api/games')}
    </body>
    </html>
  `;
}
