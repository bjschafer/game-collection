import { getSharedStyles } from './styles';
import { getNavigation, getJavaScript } from './common';

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
      
      <div class="container">
        <div id="stats" class="stats">
          <div class="loading">Loading statistics...</div>
        </div>
        
        <div id="content">
          <div class="loading">Loading consoles collection...</div>
        </div>
        
        <div id="items" class="collection-grid"></div>
      </div>
      
      ${getJavaScript('/api/consoles', 'consoles')}
    </body>
    </html>
  `;
}