import { Environment } from '../types/database';
import { GameyeItem } from '../types/gameye';

// Cache duration: 24 hours (86400 seconds)
const CACHE_DURATION = 86400;

// Rate limiting: max 10 requests per minute
const RATE_LIMIT_KEY = 'gameye_rate_limit';
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW = 60; // seconds

async function checkRateLimit(env: Environment): Promise<boolean> {
  const currentTime = Math.floor(Date.now() / 1000);
  const windowStart = currentTime - RATE_LIMIT_WINDOW;
  
  // Get current request timestamps
  const requestsData = await env.GAMEYE_CACHE.get(RATE_LIMIT_KEY);
  let requests: number[] = requestsData ? JSON.parse(requestsData) : [];
  
  // Filter out requests older than the window
  requests = requests.filter(timestamp => timestamp > windowStart);
  
  // Check if we've exceeded the limit
  if (requests.length >= RATE_LIMIT_MAX) {
    return false;
  }
  
  // Add current request and save
  requests.push(currentTime);
  await env.GAMEYE_CACHE.put(RATE_LIMIT_KEY, JSON.stringify(requests), {
    expirationTtl: RATE_LIMIT_WINDOW,
  });
  
  return true;
}

export async function getGameyeItem(env: Environment, itemId: number): Promise<GameyeItem | null> {
  const cacheKey = `gameye_item_${itemId}`;
  
  try {
    // Check cache first
    const cachedData = await env.GAMEYE_CACHE.get(cacheKey);
    if (cachedData) {
      return JSON.parse(cachedData) as GameyeItem;
    }
    
    // Check rate limit
    const canMakeRequest = await checkRateLimit(env);
    if (!canMakeRequest) {
      console.warn(`Rate limit exceeded for GAMEYE API request ${itemId}`);
      return null;
    }
    
    // Fetch from GAMEYE API
    const response = await fetch(`https://www.gameye.app/api/items/${itemId}`, {
      headers: {
        'User-Agent': 'Braxton-Game-Collection/1.0',
      },
    });
    
    if (!response.ok) {
      if (response.status === 429) {
        console.warn(`GAMEYE API rate limited for item ${itemId}`);
      } else {
        console.error(`GAMEYE API error: ${response.status} ${response.statusText}`);
      }
      return null;
    }
    
    const data = await response.json() as GameyeItem;
    
    // Cache the response
    await env.GAMEYE_CACHE.put(cacheKey, JSON.stringify(data), {
      expirationTtl: CACHE_DURATION,
    });
    
    return data;
  } catch (error) {
    console.error('Error fetching GAMEYE item:', error);
    return null;
  }
}

export function getGameyeCoverArt(gameyeItem: GameyeItem): string | null {
  // Look for front cover art (type "0")
  if (gameyeItem.images["0"] && gameyeItem.images["0"].length > 0) {
    const frontCover = gameyeItem.images["0"][0];
    return `https://dt.gameye.app/data/streaming/images/items/v1/thumbs/large/${frontCover.File}`;
  }
  
  // Fallback to 3D box art (type "13")
  if (gameyeItem.images["13"] && gameyeItem.images["13"].length > 0) {
    const boxArt = gameyeItem.images["13"][0];
    return `https://dt.gameye.app/data/streaming/images/items/v1/thumbs/large/${boxArt.File}`;
  }
  
  return null;
}

export function getGameyeEncyclopediaUrl(itemId: number): string {
  return `https://www.gameye.app/encylopedia/${itemId}`;
}