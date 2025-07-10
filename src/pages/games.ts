import { getSharedStyles } from './styles';
import { getNavigation, getJavaScript } from './common';

export function getGamesPage(): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Games Collection</title>
      ${getSharedStyles()}
    </head>
    <body>
      ${getNavigation('games')}
      
      <div class="container">
        <div id="stats" class="stats">
          <div class="loading">Loading statistics...</div>
        </div>
        
        <div id="content">
          <div class="loading">Loading games collection...</div>
        </div>
        
        <div id="filters" class="filters">
          <div class="filter-group">
            <label for="search">Search Games:</label>
            <input type="text" id="search" placeholder="Search by title..." />
          </div>
          
          <div class="filter-group">
            <label for="platform-filter">Filter by Platform:</label>
            <select id="platform-filter">
              <option value="">All Platforms</option>
            </select>
          </div>
          
          <div class="filter-info">
            <span id="filter-count">Showing all games</span>
            <button id="clear-filters" class="clear-filters-btn" style="display: none;">Clear Filters</button>
          </div>
        </div>
        
        <div id="items" class="collection-grid"></div>
      </div>
      
      ${getJavaScript('/api/games', 'games')}
    </body>
    </html>
  `;
}