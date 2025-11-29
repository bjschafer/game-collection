import { getAccessories, getConsoles, getGameById, getGames, getGameyeItemData, getPlatforms } from './handlers/games';
import { getIcon } from './handlers/icons';
import { getImageProxy } from './handlers/images';
import { getAccessoriesPage } from './pages/accessories';
import { getConsolesPage } from './pages/consoles';
import { getGamesPage } from './pages/games';
import { Environment } from './types/database';
import { Router } from './utils/router';

const router = new Router();

router.get('/api/games', async (request: Request, env: Environment) => {
  return getGames(env);
});

router.get('/api/consoles', async (request: Request, env: Environment) => {
  return getConsoles(env);
});

router.get('/api/accessories', async (request: Request, env: Environment) => {
  return getAccessories(env);
});

router.get(
  '/api/games/:id',
  async (request: Request, env: Environment, params: Record<string, string>) => {
    return getGameById(env, params.id);
  },
);

router.get('/api/platforms', async () => {
  return getPlatforms();
});

router.get('/api/gameye/:itemId', async (request: Request, env: Environment, params: Record<string, string>) => {
  return getGameyeItemData(env, params.itemId);
});

router.get('/api/image-proxy', async (request: Request, env: Environment) => {
  return getImageProxy(request, env);
});

router.get('/icons/:filename', async (request: Request, env: Environment, params: Record<string, string>) => {
  return getIcon(params.filename);
});


router.get('/games', async () => {
  return new Response(getGamesPage(), {
    headers: { 'Content-Type': 'text/html' },
  });
});

router.get('/consoles', async () => {
  return new Response(getConsolesPage(), {
    headers: { 'Content-Type': 'text/html' },
  });
});

router.get('/accessories', async () => {
  return new Response(getAccessoriesPage(), {
    headers: { 'Content-Type': 'text/html' },
  });
});

router.get('/', async () => {
  return new Response(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Braxton's Game Collection</title>
      <style>
        :root {
          --bg-primary: #0f0f13;
          --bg-secondary: #1a1a23;
          --bg-card: #22222d;
          --bg-card-hover: #2a2a38;
          --accent-primary: #00d4aa;
          --accent-secondary: #ff6b35;
          --accent-tertiary: #7c5cff;
          --text-primary: #f0f0f5;
          --text-secondary: #a0a0b0;
          --text-muted: #6a6a7a;
          --border-subtle: rgba(255, 255, 255, 0.08);
          --border-accent: rgba(0, 212, 170, 0.3);
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif;
          background: var(--bg-primary);
          min-height: 100vh;
          color: var(--text-primary);
          line-height: 1.6;
        }
        
        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 0;
        }
        
        .header {
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-subtle);
          padding: 1rem 0;
        }
        
        .nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .nav h1 {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        
        .nav h1 a {
          text-decoration: none;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.2s ease;
        }
        
        .nav h1 a:hover {
          color: var(--accent-primary);
        }
        
        .site-logo {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-tertiary) 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
        }
        
        .nav-links {
          display: flex;
          gap: 0.5rem;
          list-style: none;
        }
        
        .nav-links a {
          text-decoration: none;
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.9rem;
          padding: 0.6rem 1rem;
          border-radius: 8px;
          transition: all 0.2s ease;
          position: relative;
        }
        
        .nav-links a:hover {
          color: var(--text-primary);
          background: var(--bg-card);
        }
        
        .nav-links a.active {
          color: var(--accent-primary);
          background: rgba(0, 212, 170, 0.1);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem;
          position: relative;
          z-index: 1;
        }
        
        .hero {
          text-align: center;
          margin-bottom: 4rem;
          padding: 2rem 0;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-primary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto;
        }
        
        .collection-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .collection-card {
          background: var(--bg-card);
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid var(--border-subtle);
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          position: relative;
          overflow: hidden;
        }
        
        .collection-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--card-accent, var(--accent-primary)), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .collection-card:hover {
          background: var(--bg-card-hover);
          border-color: var(--border-accent);
          transform: translateY(-4px);
        }
        
        .collection-card:hover::before {
          opacity: 1;
        }
        
        .collection-card:nth-child(1) { --card-accent: var(--accent-primary); }
        .collection-card:nth-child(2) { --card-accent: var(--accent-tertiary); }
        .collection-card:nth-child(3) { --card-accent: var(--accent-secondary); }
        
        .card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          font-size: 1.5rem;
          background: rgba(0, 212, 170, 0.1);
          border: 1px solid var(--border-subtle);
        }
        
        .collection-card:nth-child(1) .card-icon {
          background: rgba(0, 212, 170, 0.1);
        }
        
        .collection-card:nth-child(2) .card-icon {
          background: rgba(124, 92, 255, 0.1);
        }
        
        .collection-card:nth-child(3) .card-icon {
          background: rgba(255, 107, 53, 0.1);
        }
        
        .collection-card h3 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }
        
        .collection-card p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }
        
        .card-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        
        .collection-card:hover .card-link {
          color: var(--card-accent);
        }
        
        .card-link svg {
          width: 16px;
          height: 16px;
          transition: transform 0.2s ease;
        }
        
        .collection-card:hover .card-link svg {
          transform: translateX(4px);
        }
        
        footer {
          text-align: center;
          padding: 2rem 0;
          border-top: 1px solid var(--border-subtle);
          margin-top: 2rem;
        }
        
        footer a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.2s ease;
        }
        
        footer a:hover {
          color: var(--accent-primary);
        }
        
        @media (max-width: 900px) {
          .collection-cards {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .nav {
            flex-direction: column;
            gap: 1rem;
          }
          
          .nav-links {
            gap: 0.25rem;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .container {
            padding: 2rem 1rem;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
        }
      </style>
    </head>
    <body>
      <header class="header">
        <nav class="nav">
          <h1><a href="/"><span class="site-logo">GC</span> Braxton's Collection</a></h1>
          <ul class="nav-links">
            <li><a href="/" class="active">Home</a></li>
            <li><a href="/games">Games</a></li>
            <li><a href="/consoles">Consoles</a></li>
            <li><a href="/accessories">Accessories</a></li>
          </ul>
        </nav>
      </header>
      
      <div class="container">
        <div class="hero">
          <h2 class="hero-title">Game Collection</h2>
          <p class="hero-subtitle">A curated catalog of video games, consoles, and accessories</p>
        </div>
        
        <div class="collection-cards">
          <a href="/games" class="collection-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-primary)"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
            </div>
            <h3>Games</h3>
            <p>Browse the complete library with platform details, quality ratings, and notes</p>
            <span class="card-link">
              View collection
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </a>
          
          <a href="/consoles" class="collection-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-tertiary)"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/></svg>
            </div>
            <h3>Consoles</h3>
            <p>Explore gaming hardware from classic systems to modern platforms</p>
            <span class="card-link">
              View collection
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </a>
          
          <a href="/accessories" class="collection-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-secondary)"><path d="M12 20h.01"/><path d="M5 9.5a7 7 0 0 1 14 0"/><path d="M7.5 12a4.5 4.5 0 0 1 9 0"/></svg>
            </div>
            <h3>Accessories</h3>
            <p>Controllers, cables, peripherals and everything in between</p>
            <span class="card-link">
              View collection
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </a>
        </div>
        
        <footer>
          <a href="https://github.com/bjschafer/game-collection" target="_blank" rel="noopener noreferrer">View source on GitHub</a>
        </footer>
      </div>
    </body>
    </html>
  `,
    {
      headers: { 'Content-Type': 'text/html' },
    },
  );
});

export default {
  async fetch(request: Request, env: Environment): Promise<Response> {
    return router.handle(request, env);
  },
};

