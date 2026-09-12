import { getNavigation } from './common';
import { getSharedStyles } from './styles';

export function getHomePage(): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="Braxton's personal collection of video games, consoles, and accessories.">
      <title>Braxton's Game Collection</title>
      ${getSharedStyles()}
    </head>
    <body>
      ${getNavigation('home')}
      <main class="container home-hero">
        <section class="page-intro">
          <div>
            <p class="eyebrow">Braxton's game collection</p>
            <h2 class="page-title">The collection.</h2>
          </div>
          <p class="page-description">The games and hardware I own, organized by type and platform. Collection data comes from GAMEYE.</p>
        </section>

        <div class="home-sections">
          <a href="/games" class="section-card">
            <span class="section-number">01 / Games</span>
            <h2>Games</h2>
            <p>Every game in the collection, with platform, region, condition, and notes.</p>
            <span class="section-count" data-count-endpoint="/api/games">View games →</span>
          </a>
          <a href="/consoles" class="section-card">
            <span class="section-number">02 / Consoles</span>
            <h2>Consoles</h2>
            <p>Home consoles, handhelds, and other game systems.</p>
            <span class="section-count" data-count-endpoint="/api/consoles">View consoles →</span>
          </a>
          <a href="/accessories" class="section-card">
            <span class="section-number">03 / Accessories</span>
            <h2>Accessories</h2>
            <p>Controllers, adapters, cables, and other accessories.</p>
            <span class="section-count" data-count-endpoint="/api/accessories">View accessories →</span>
          </a>
        </div>

        <footer class="site-footer">
          <span>Collection data exported from GAMEYE.</span>
          <a href="https://github.com/bjschafer/game-collection" target="_blank" rel="noopener noreferrer">Source on GitHub ↗</a>
        </footer>
      </main>
      <script>
        document.querySelectorAll('[data-count-endpoint]').forEach(async element => {
          try {
            const response = await fetch(element.dataset.countEndpoint);
            if (!response.ok) return;
            const items = await response.json();
            element.textContent = items.length + ' items · View →';
          } catch { /* The navigation remains useful without counts. */ }
        });
      </script>
    </body>
    </html>
  `;
}
