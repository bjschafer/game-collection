import {
  getAccessories,
  getConsoles,
  getGameById,
  getGames,
  getGameyeItemData,
  getPlatforms,
} from './handlers/games';
import { getIcon } from './handlers/icons';
import { getImageProxy } from './handlers/images';
import { getAccessoriesPage } from './pages/accessories';
import { getConsolesPage } from './pages/consoles';
import { getGamesPage } from './pages/games';
import { getHomePage } from './pages/home';
import { Environment } from './types/database';
import { Router } from './utils/router';

const router = new Router();
const html = (body: string) =>
  new Response(body, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });

router.get('/api/games', async (_request: Request, env: Environment) => getGames(env));
router.get('/api/consoles', async (_request: Request, env: Environment) => getConsoles(env));
router.get('/api/accessories', async (_request: Request, env: Environment) => getAccessories(env));

router.get(
  '/api/games/:id',
  async (_request: Request, env: Environment, params: Record<string, string>) =>
    getGameById(env, params.id),
);

router.get('/api/platforms', async () => getPlatforms());

router.get(
  '/api/gameye/:itemId',
  async (_request: Request, env: Environment, params: Record<string, string>) =>
    getGameyeItemData(env, params.itemId),
);

router.get('/api/image-proxy', async (request: Request, env: Environment) =>
  getImageProxy(request, env),
);

router.get(
  '/icons/:filename',
  async (_request: Request, _env: Environment, params: Record<string, string>) =>
    getIcon(params.filename),
);

router.get('/games', async () => html(getGamesPage()));
router.get('/consoles', async () => html(getConsolesPage()));
router.get('/accessories', async () => html(getAccessoriesPage()));
router.get('/', async () => html(getHomePage()));

export default {
  async fetch(request: Request, env: Environment): Promise<Response> {
    return router.handle(request, env);
  },
};
