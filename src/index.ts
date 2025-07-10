import { Router } from './utils/router';
import { getGames, getConsoles, getAccessories, getGameById, getPlatforms } from './handlers/games';
import { Environment } from './types/database';
import { getGamesPage } from './pages/games';
import { getConsolesPage } from './pages/consoles';
import { getAccessoriesPage } from './pages/accessories';

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

router.get('/api/games/:id', async (request: Request, env: Environment, params: Record<string, string>) => {
  return getGameById(env, params.id);
});

router.get('/api/platforms', async () => {
  return getPlatforms();
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
  return new Response(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Braxton's Game Collection</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          color: #333;
        }
        
        .header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
          color: #667eea;
          font-size: 1.8rem;
          font-weight: 700;
        }
        
        .nav h1 a {
          text-decoration: none;
          color: inherit;
          transition: opacity 0.3s ease;
        }
        
        .nav h1 a:hover {
          opacity: 0.8;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        
        .nav-links a {
          text-decoration: none;
          color: #555;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .nav-links a:hover, .nav-links a.active {
          background: #667eea;
          color: white;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem;
          text-align: center;
        }
        
        .hero {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          padding: 3rem;
          margin-bottom: 3rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .hero h2 {
          color: #667eea;
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .hero p {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 2rem;
        }
        
        .collection-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .collection-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
        }
        
        .collection-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }
        
        .collection-card h3 {
          color: #667eea;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .collection-card p {
          color: #666;
          margin-bottom: 1rem;
        }
        
        
        @media (max-width: 768px) {
          .nav {
            flex-direction: column;
            gap: 1rem;
          }
          
          .nav-links {
            gap: 1rem;
          }
          
          .container {
            padding: 2rem 1rem;
          }
          
          .hero h2 {
            font-size: 2rem;
          }
          
          .collection-cards {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
      <header class="header">
        <nav class="nav">
          <h1><a href="/">🎮 Braxton's Game Collection</a></h1>
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
          <h2>Welcome to Braxton's Collection</h2>
          <p>Explore and discover Braxton's curated video game, console, and accessory collection</p>
        </div>
        
        <div class="collection-cards">
          <a href="/games" class="collection-card">
            <h3>🎮 Games</h3>
            <p>Browse Braxton's complete games library with detailed information about each title</p>
          </a>
          
          <a href="/consoles" class="collection-card">
            <h3>🖥️ Consoles</h3>
            <p>View all of Braxton's gaming consoles and systems from retro to modern</p>
          </a>
          
          <a href="/accessories" class="collection-card">
            <h3>🎯 Accessories</h3>
            <p>Check out Braxton's controllers, cables, and other gaming accessories</p>
          </a>
        </div>
        
        <footer style="margin-top: 2rem; padding: 1rem; text-align: center; color: rgba(255, 255, 255, 0.8);">
          <a href="https://github.com/bschafer/game-collection" style="color: rgba(255, 255, 255, 0.9); text-decoration: none; font-size: 0.9rem;">View source code on GitHub</a>
        </footer>
        
      </div>
    </body>
    </html>
  `, {
    headers: { 'Content-Type': 'text/html' },
  });
});

export default {
  async fetch(request: Request, env: Environment): Promise<Response> {
    return router.handle(request, env);
  },
};