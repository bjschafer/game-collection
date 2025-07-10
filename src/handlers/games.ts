import { Environment, OwnershipRecord, OwnershipRecordWithPlatform } from '../types/database';
import { getPlatformName, getPlatformIcon, getAllPlatforms } from '../utils/platforms';
import { getCountryName, getCountryFlag } from '../utils/countries';
import { getGameyeItem } from '../utils/gameye';

export async function getGames(env: Environment): Promise<Response> {
  try {
    const result = await env.DB.prepare(
      'SELECT * FROM ownership WHERE category_id = 0 ORDER BY title ASC'
    ).all<OwnershipRecord>();

    const gamesWithPlatforms: OwnershipRecordWithPlatform[] = result.results.map(game => ({
      ...game,
      platform_name: getPlatformName(game.platform_id),
      platform_icon: getPlatformIcon(game.platform_id),
      country_name: getCountryName(game.country_id),
      country_flag: getCountryFlag(game.country_id),
    }));

    return new Response(JSON.stringify(gamesWithPlatforms), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Database error:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to fetch games', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function getConsoles(env: Environment): Promise<Response> {
  try {
    const result = await env.DB.prepare(
      'SELECT * FROM ownership WHERE category_id = 1 ORDER BY title ASC'
    ).all<OwnershipRecord>();

    const consolesWithPlatforms: OwnershipRecordWithPlatform[] = result.results.map(console => ({
      ...console,
      platform_name: getPlatformName(console.platform_id),
      platform_icon: getPlatformIcon(console.platform_id),
      country_name: getCountryName(console.country_id),
      country_flag: getCountryFlag(console.country_id),
    }));

    return new Response(JSON.stringify(consolesWithPlatforms), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Database error:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to fetch consoles', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function getAccessories(env: Environment): Promise<Response> {
  try {
    const result = await env.DB.prepare(
      'SELECT * FROM ownership WHERE category_id IN (2, 5) ORDER BY title ASC'
    ).all<OwnershipRecord>();

    const accessoriesWithPlatforms: OwnershipRecordWithPlatform[] = result.results.map(accessory => ({
      ...accessory,
      platform_name: getPlatformName(accessory.platform_id),
      platform_icon: getPlatformIcon(accessory.platform_id),
      country_name: getCountryName(accessory.country_id),
      country_flag: getCountryFlag(accessory.country_id),
    }));

    return new Response(JSON.stringify(accessoriesWithPlatforms), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Database error:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to fetch accessories', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function getGameById(env: Environment, id: string): Promise<Response> {
  try {
    const result = await env.DB.prepare(
      'SELECT * FROM ownership WHERE id = ?'
    ).bind(id).first<OwnershipRecord>();

    if (!result) {
      return new Response(JSON.stringify({ error: 'Item not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const itemWithPlatform: OwnershipRecordWithPlatform = {
      ...result,
      platform_name: getPlatformName(result.platform_id),
      platform_icon: getPlatformIcon(result.platform_id),
      country_name: getCountryName(result.country_id),
      country_flag: getCountryFlag(result.country_id),
    };

    return new Response(JSON.stringify(itemWithPlatform), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Database error:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to fetch item', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function getPlatforms(): Promise<Response> {
  try {
    const platforms = getAllPlatforms();
    
    return new Response(JSON.stringify(platforms), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching platforms:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to fetch platforms', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function getGameyeItemData(env: Environment, itemId: string): Promise<Response> {
  try {
    const itemIdNum = parseInt(itemId, 10);
    if (isNaN(itemIdNum)) {
      return new Response(JSON.stringify({ error: 'Invalid item ID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const gameyeData = await getGameyeItem(env, itemIdNum);
    
    if (!gameyeData) {
      return new Response(JSON.stringify({ error: 'Item not found in GAMEYE' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(gameyeData), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching GAMEYE item:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to fetch GAMEYE item', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}