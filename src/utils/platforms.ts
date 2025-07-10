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
 * Get platform emoji/icon for visual representation
 */
export function getPlatformIcon(platformId: number | null): string {
  if (platformId === null || platformId === undefined) {
    return '🎮';
  }

  const icons: Record<number, string> = {
    1: '💻', // PC
    2: '🟣', // GameCube
    3: '🟩', // N64
    4: '🔲', // Game Boy
    5: '🔳', // GBA
    6: '🟪', // SNES
    7: '⬜', // NES
    8: '📱', // DS
    9: '🤍', // Wii
    10: '🔘', // PlayStation
    11: '⚫', // PS2
    12: '⚫', // PS3
    13: '📱', // PSP
    15: '🟢', // Xbox 360
    16: '🟠', // Dreamcast
    17: '🟫', // Saturn
    18: '⚫', // Genesis
    19: '🔲', // Game Gear
    21: '🟫', // Atari 2600
    32: '⚫', // 32X
    34: '⬜', // Master System
    36: '🤍', // Wii U
    37: '⚫', // PS Vita
    38: '🟫', // C64
    39: '🟨', // GBC
    41: '🔵', // 3DS
    46: '🔵', // PS4
    47: '🟢', // Xbox One
    97: '🔴', // Switch
    105: '🔵', // PS5
    106: '🟢', // Xbox Series
    118: '🧸', // Amiibo
    178: '🔴', // Switch 2
  };

  return icons[platformId] || '🎮';
}