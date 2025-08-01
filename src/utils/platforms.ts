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
  return Object.entries(PLATFORM_MAPPINGS).map(([id, name]) => ({
    id: parseInt(id),
    name,
  })).sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Get platform icon URL for visual representation
 */
export function getPlatformIcon(platformId: number | null): string {
  if (platformId === null || platformId === undefined) {
    return '/icons/generic.png';
  }

  const iconUrls: Record<number, string> = {
    1: '/icons/pc.png', // PC
    2: '/icons/gamecube.png', // GameCube
    3: '/icons/n64.png', // N64
    4: '/icons/gameboy.png', // Game Boy
    5: '/icons/gba.png', // GBA
    6: '/icons/snes.png', // SNES
    7: '/icons/nes.png', // NES
    8: '/icons/ds.png', // DS
    9: '/icons/wii.png', // Wii
    10: '/icons/ps1.png', // PlayStation
    11: '/icons/ps2.png', // PS2
    12: '/icons/ps3.png', // PS3
    13: '/icons/psp.png', // PSP
    14: '/icons/xbox.png', // Xbox
    15: '/icons/xbox360.png', // Xbox 360
    16: '/icons/dreamcast.png', // Dreamcast
    17: '/icons/saturn.png', // Saturn
    18: '/icons/genesis.png', // Genesis
    19: '/icons/gamegear.png', // Game Gear
    20: '/icons/neogeo.png', // Neo Geo
    21: '/icons/atari2600.png', // Atari 2600
    32: '/icons/genesis.png', // 32X (using Genesis icon)
    34: '/icons/mastersystem.png', // Master System
    36: '/icons/wiiu.png', // Wii U
    37: '/icons/psp-go.png', // PS Vita
    38: '/icons/c64.png', // C64
    39: '/icons/gbc.png', // GBC
    41: '/icons/3ds.png', // 3DS
    46: '/icons/ps4.png', // PS4
    47: '/icons/xbox-one.png', // Xbox One
    97: '/icons/switch.png', // Switch
    105: '/icons/ps5.png', // PS5
    106: '/icons/xbox-series.png', // Xbox Series
    118: '/icons/amiibo.png', // Amiibo
    178: '/icons/switch2.png', // Switch 2
  };

  return iconUrls[platformId] || '/icons/generic.png';
}