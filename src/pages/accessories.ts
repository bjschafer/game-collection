import { getSharedStyles } from './styles';
import { getCollectionIntro, getFilters, getJavaScript, getNavigation } from './common';

export function getAccessoriesPage(): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Accessories - Braxton's Game Collection</title>
      ${getSharedStyles()}
    </head>
    <body>
      ${getNavigation('accessories')}
      
      <main class="container">
        ${getCollectionIntro('Accessories', 'Controllers, adapters, cables, and other accessories in my collection.')}
        <div id="stats" class="stats">
          <div class="loading">Loading totals…</div>
        </div>
        ${getFilters('accessories')}
        <div id="content">
          <div class="loading">Loading accessories…</div>
        </div>
        <div id="items" class="collection-grid"></div>
      </main>
      
      ${getJavaScript('/api/accessories')}
    </body>
    </html>
  `;
}
