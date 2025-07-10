import { getSharedStyles } from './styles';
import { getNavigation, getJavaScript } from './common';

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
      
      <div class="container">
        <div id="stats" class="stats">
          <div class="loading">Loading statistics...</div>
        </div>
        
        <div id="content">
          <div class="loading">Loading accessories collection...</div>
        </div>
        
        <div id="items" class="collection-grid"></div>
      </div>
      
      ${getJavaScript('/api/accessories', 'accessories')}
    </body>
    </html>
  `;
}