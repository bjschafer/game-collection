// VGPriceCharting platform slugs (used to build pricecharting.com URLs)
export const VGPC_PLATFORM_SLUGS: Record<number, string> = {
  1: 'pc',
  2: 'gamecube',
  3: 'nintendo-64',
  4: 'game-boy',
  5: 'game-boy-advance',
  6: 'super-nintendo',
  7: 'nes',
  8: 'nintendo-ds',
  9: 'wii',
  10: 'playstation',
  11: 'playstation-2',
  12: 'playstation-3',
  13: 'psp',
  14: 'xbox',
  15: 'xbox-360',
  16: 'sega-dreamcast',
  17: 'sega-saturn',
  18: 'sega-genesis',
  19: 'game-gear',
  20: 'neo-geo',
  21: 'atari-2600',
  32: 'sega-32x',
  34: 'sega-master-system',
  36: 'wii-u',
  37: 'playstation-vita',
  38: 'commodore-64',
  39: 'game-boy-color',
  41: 'nintendo-3ds',
  46: 'playstation-4',
  47: 'xbox-one',
  97: 'nintendo-switch',
  105: 'playstation-5',
  106: 'xbox-series-x',
  178: 'nintendo-switch-2',
};

export function getVgpcPlatformSlug(platformId: number | null): string | null {
  if (platformId === null || platformId === undefined) return null;
  return VGPC_PLATFORM_SLUGS[platformId] ?? null;
}

// Platform mapping data with corrected official names
export const PLATFORM_MAPPINGS: Record<number, string> = {
  2: 'Nintendo GameCube',
  3: 'Nintendo 64',
  4: 'Game Boy',
  5: 'Game Boy Advance',
  6: 'Super Nintendo Entertainment System',
  7: 'Nintendo Entertainment System',
  8: 'Nintendo DS',
  9: 'Nintendo Wii',
  10: 'PlayStation',
  11: 'PlayStation 2',
  12: 'PlayStation 3',
  13: 'PlayStation Portable',
  15: 'Xbox 360',
  16: 'Sega Dreamcast',
  17: 'Sega Saturn',
  18: 'Sega Genesis',
  19: 'Sega Game Gear',
  21: 'Atari 2600',
  32: 'Sega 32X',
  34: 'Sega Master System',
  36: 'Nintendo Wii U',
  37: 'PlayStation Vita',
  38: 'Commodore 64',
  39: 'Game Boy Color',
  41: 'Nintendo 3DS',
  46: 'PlayStation 4',
  47: 'Xbox One',
  97: 'Nintendo Switch',
  105: 'PlayStation 5',
  106: 'Xbox Series X/S',
  178: 'Nintendo Switch 2',
  1: 'PC', // Common platform that might be missing
  118: 'Amiibo', // For collectible figures
  14: 'Xbox', // Original Xbox
  20: 'Neo Geo', // Classic platform
};

/**
 * Get the platform name for a given platform ID
 */
export function getPlatformName(platformId: number | null): string {
  if (platformId === null || platformId === undefined) {
    return 'Unknown Platform';
  }

  return PLATFORM_MAPPINGS[platformId] || `Platform ${platformId}`;
}

/**
 * Get a short platform name for display in limited space
 */
export function getShortPlatformName(platformId: number | null): string {
  const fullName = getPlatformName(platformId);

  // Create shorter versions for common platforms
  const shortNames: Record<string, string> = {
    'Nintendo Entertainment System': 'NES',
    'Super Nintendo Entertainment System': 'SNES',
    'Nintendo GameCube': 'GameCube',
    'PlayStation Portable': 'PSP',
    'PlayStation Vita': 'PS Vita',
    'Xbox Series X/S': 'Xbox Series X|S',
    'Nintendo Switch 2': 'Switch 2',
    'Game Boy Advance': 'GBA',
    'Game Boy Color': 'GBC',
    'Sega Master System': 'Master System',
    'Sega Game Gear': 'Game Gear',
  };

  return shortNames[fullName] || fullName;
}

/**
 * Get all available platforms
 */
export function getAllPlatforms(): Array<{ id: number; name: string }> {
  return Object.entries(PLATFORM_MAPPINGS)
    .map(([id, name]) => ({
      id: parseInt(id),
      name,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Get platform icon URL for visual representation
 */
export function getPlatformIcon(platformId: number | null): string {
  if (platformId === null || platformId === undefined) {
    return '/icons/generic.svg?v=4';
  }

  const iconUrls: Record<number, string> = {
    1: '/icons/pc.svg', // PC
    2: '/icons/gamecube.svg', // GameCube
    3: '/icons/n64.svg', // N64
    4: '/icons/gameboy.svg', // Game Boy
    5: '/icons/gba.svg', // GBA
    6: '/icons/snes.svg', // SNES
    7: '/icons/nes.svg', // NES
    8: '/icons/ds.svg', // DS
    9: '/icons/wii.svg', // Wii
    10: '/icons/ps1.svg', // PlayStation
    11: '/icons/ps2.svg', // PS2
    12: '/icons/ps3.svg', // PS3
    13: '/icons/psp.svg', // PSP
    14: '/icons/xbox.svg', // Xbox
    15: '/icons/xbox360.svg', // Xbox 360
    16: '/icons/dreamcast.svg', // Dreamcast
    17: '/icons/saturn.svg', // Saturn
    18: '/icons/genesis.svg', // Genesis
    19: '/icons/gamegear.svg', // Game Gear
    20: '/icons/neogeo.svg', // Neo Geo
    21: '/icons/atari2600.svg', // Atari 2600
    32: '/icons/32x.svg', // Sega 32X
    34: '/icons/mastersystem.svg', // Master System
    36: '/icons/wiiu.svg', // Wii U
    37: '/icons/vita.svg', // PS Vita
    38: '/icons/c64.svg', // C64
    39: '/icons/gbc.svg', // GBC
    41: '/icons/3ds.svg', // 3DS
    46: '/icons/ps4.svg', // PS4
    47: '/icons/xbox-one.svg', // Xbox One
    97: '/icons/switch.svg', // Switch
    105: '/icons/ps5.svg', // PS5
    106: '/icons/xbox-series.svg', // Xbox Series
    118: '/icons/amiibo.svg', // Amiibo
    178: '/icons/switch2.svg', // Switch 2
  };

  return `${iconUrls[platformId] || '/icons/generic.svg'}?v=4`;
}
