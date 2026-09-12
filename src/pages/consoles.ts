import { getSharedStyles } from './styles';
import { getCollectionIntro, getFilters, getJavaScript, getNavigation } from './common';

export function getConsolesPage(): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Consoles - Braxton's Game Collection</title>
      ${getSharedStyles()}
    </head>
    <body>
      ${getNavigation('consoles')}
      
      <main class="container">
        ${getCollectionIntro('Consoles', 'The home consoles, handhelds, and other game systems in my collection.')}
        <div id="stats" class="stats">
          <div class="loading">Loading totals…</div>
        </div>
        ${getFilters('consoles', false)}
        <div id="content">
          <div class="loading">Loading consoles…</div>
        </div>
        <div id="items" class="collection-grid"></div>
      </main>
      
      ${getJavaScript('/api/consoles')}
    </body>
    </html>
  `;
}
