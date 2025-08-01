// Detailed SVG icons for gaming platforms - designed to match actual console appearance
const PLATFORM_ICONS: Record<string, string> = {
  'nes.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="12" width="26" height="14" rx="2" fill="#DDDDDD"/>
    <rect x="4" y="13" width="24" height="12" rx="1" fill="#F5F5F5"/>
    <rect x="22" y="15" width="6" height="8" rx="1" fill="#BBBBBB"/>
    <rect x="5" y="20" width="4" height="4" rx="0.5" fill="#AA0000"/>
    <circle cx="13" cy="18" r="1.5" fill="#333"/>
    <circle cx="17" cy="18" r="1.5" fill="#333"/>
    <rect x="5" y="15" width="12" height="2" rx="1" fill="#CCCCCC"/>
  </svg>`,
  
  'snes.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="26" height="16" rx="3" fill="#D1D5DB" stroke="#9CA3AF" stroke-width="1"/>
    <rect x="4" y="12" width="24" height="14" rx="2" fill="#E5E7EB"/>
    <rect x="22" y="16" width="6" height="6" rx="1" fill="#9CA3AF"/>
    <circle cx="8" cy="19" r="2" fill="#6B46C1"/>
    <circle cx="13" cy="19" r="2" fill="#DC2626"/>
    <circle cx="18" cy="19" r="2" fill="#059669"/>
    <circle cx="23" cy="19" r="2" fill="#FBBF24"/>
    <rect x="5" y="15" width="10" height="1" rx="0.5" fill="#9CA3AF"/>
  </svg>`,
  
  'n64.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="13" width="24" height="12" rx="2" fill="#2A2A2A"/>
    <rect x="5" y="14" width="22" height="10" rx="1" fill="#404040"/>
    <rect x="12" y="11" width="8" height="4" rx="1" fill="#1A1A1A"/>
    <circle cx="10" cy="18" r="1" fill="#FFD700"/>
    <circle cx="14" cy="18" r="1" fill="#00AA00"/>
    <circle cx="18" cy="18" r="1" fill="#FF0000"/>
    <circle cx="22" cy="18" r="1" fill="#0066FF"/>
    <polygon points="16,8 20,11 12,11" fill="#333"/>
  </svg>`,
  
  'gamecube.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="14" width="20" height="12" rx="2" fill="#5B21B6"/>
    <rect x="7" y="15" width="18" height="10" rx="1" fill="#7C3AED"/>
    <rect x="12" y="12" width="8" height="4" rx="1" fill="#4C1D95"/>
    <circle cx="16" cy="20" r="3" fill="#8B5CF6"/>
    <circle cx="16" cy="20" r="1.5" fill="#A78BFA"/>
    <rect x="11" y="17" width="2" height="2" rx="0.5" fill="#DDD6FE"/>
    <rect x="19" y="17" width="2" height="2" rx="0.5" fill="#DDD6FE"/>
  </svg>`,
  
  'switch.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="20" height="16" rx="2" fill="#1F2937"/>
    <rect x="7" y="9" width="18" height="14" rx="1" fill="#374151"/>
    <rect x="9" y="11" width="14" height="8" rx="1" fill="#000"/>
    <circle cx="4" cy="14" r="2" fill="#0EA5E9"/>
    <circle cx="28" cy="14" r="2" fill="#EF4444"/>
    <rect x="2" y="10" width="4" height="8" rx="2" fill="#6B7280"/>
    <rect x="26" y="10" width="4" height="8" rx="2" fill="#6B7280"/>
  </svg>`,
  
  'ps1.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="24" height="14" rx="2" fill="#D1D5DB"/>
    <rect x="5" y="13" width="22" height="12" rx="1" fill="#F3F4F6"/>
    <rect x="20" y="15" width="8" height="8" rx="1" fill="#E5E7EB"/>
    <circle cx="16" cy="20" r="2" fill="#374151"/>
    <rect x="6" y="18" width="6" height="3" rx="1" fill="#6B7280"/>
    <text x="16" y="23" text-anchor="middle" font-size="6" fill="#111827">PS</text>
  </svg>`,
  
  'ps2.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="24" height="14" rx="2" fill="#1F2937"/>
    <rect x="5" y="13" width="22" height="12" rx="1" fill="#374151"/>
    <rect x="20" y="15" width="8" height="8" rx="1" fill="#4B5563"/>
    <circle cx="16" cy="20" r="2" fill="#0EA5E9"/>
    <rect x="6" y="18" width="6" height="3" rx="1" fill="#6B7280"/>
    <text x="16" y="23" text-anchor="middle" font-size="5" fill="#F3F4F6">PS2</text>
  </svg>`,
  
  'ps3.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="24" height="14" rx="2" fill="#111827"/>
    <rect x="5" y="13" width="22" height="12" rx="1" fill="#1F2937"/>
    <rect x="20" y="15" width="8" height="8" rx="1" fill="#374151"/>
    <circle cx="16" cy="20" r="2" fill="#F3F4F6"/>
    <rect x="6" y="18" width="6" height="3" rx="1" fill="#4B5563"/>
    <text x="16" y="23" text-anchor="middle" font-size="5" fill="#F3F4F6">PS3</text>
  </svg>`,
  
  'xbox.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="24" height="14" rx="2" fill="#1F2937"/>
    <rect x="5" y="13" width="22" height="12" rx="1" fill="#374151"/>
    <circle cx="16" cy="19" r="4" fill="#22C55E"/>
    <circle cx="16" cy="19" r="2" fill="#16A34A"/>
    <text x="16" y="22" text-anchor="middle" font-size="4" fill="#F3F4F6">X</text>
    <rect x="6" y="15" width="4" height="2" rx="1" fill="#6B7280"/>
    <rect x="22" y="15" width="4" height="2" rx="1" fill="#6B7280"/>
  </svg>`,
  
  'xbox360.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="16" cy="19" rx="12" ry="8" fill="#F3F4F6"/>
    <ellipse cx="16" cy="19" rx="10" ry="6" fill="#E5E7EB"/>
    <circle cx="16" cy="17" r="3" fill="#22C55E"/>
    <circle cx="16" cy="17" r="1.5" fill="#16A34A"/>
    <rect x="6" y="15" width="4" height="2" rx="1" fill="#9CA3AF"/>
    <rect x="22" y="15" width="4" height="2" rx="1" fill="#9CA3AF"/>
    <rect x="14" y="10" width="4" height="3" rx="1" fill="#D1D5DB"/>
  </svg>`,
  
  'dreamcast.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="13" width="24" height="12" rx="3" fill="#E2E8F0" stroke="#9CA3AF" stroke-width="1"/>
    <rect x="5" y="14" width="22" height="10" rx="2" fill="#F8FAFC"/>
    <circle cx="20" cy="19" r="3" fill="#F97316"/>
    <circle cx="20" cy="19" r="1.5" fill="#EA580C"/>
    <rect x="8" y="17" width="6" height="4" rx="1" fill="#CBD5E1"/>
    <text x="16" y="26" text-anchor="middle" font-size="4" fill="#4B5563">DC</text>
  </svg>`,
  
  'gameboy.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="6" width="16" height="20" rx="3" fill="#8B9E5A"/>
    <rect x="10" y="8" width="12" height="8" rx="1" fill="#A8B57E"/>
    <rect x="11" y="9" width="10" height="6" rx="0.5" fill="#9CA67C"/>
    <circle cx="12" cy="19" r="1.5" fill="#6B7B47"/>
    <circle cx="20" cy="19" r="1.5" fill="#6B7B47"/>
    <rect x="14" y="17" width="4" height="1" rx="0.5" fill="#6B7B47"/>
  </svg>`,
  
  'gba.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="20" height="16" rx="3" fill="#7C3AED"/>
    <rect x="8" y="10" width="16" height="8" rx="1" fill="#8B5CF6"/>
    <rect x="9" y="11" width="14" height="6" rx="0.5" fill="#A78BFA"/>
    <circle cx="10" cy="21" r="1" fill="#DDD6FE"/>
    <circle cx="14" cy="21" r="1" fill="#DDD6FE"/>
    <circle cx="22" cy="19" r="1.5" fill="#DDD6FE"/>
  </svg>`,
  
  'gbc.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="6" width="16" height="20" rx="3" fill="#FBBF24"/>
    <rect x="10" y="8" width="12" height="8" rx="1" fill="#FCD34D"/>
    <rect x="11" y="9" width="10" height="6" rx="0.5" fill="#FDE68A"/>
    <circle cx="12" cy="19" r="1.5" fill="#D97706"/>
    <circle cx="20" cy="19" r="1.5" fill="#D97706"/>
    <rect x="14" y="17" width="4" height="1" rx="0.5" fill="#D97706"/>
  </svg>`,
  
  'ds.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="20" height="8" rx="2" fill="#1E40AF"/>
    <rect x="6" y="18" width="20" height="8" rx="2" fill="#1E40AF"/>
    <rect x="8" y="8" width="16" height="4" rx="1" fill="#3B82F6"/>
    <rect x="8" y="20" width="16" height="4" rx="1" fill="#3B82F6"/>
    <circle cx="10" cy="16" r="1" fill="#60A5FA"/>
    <circle cx="22" cy="16" r="1" fill="#60A5FA"/>
  </svg>`,
  
  '3ds.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="20" height="8" rx="2" fill="#0EA5E9"/>
    <rect x="6" y="18" width="20" height="8" rx="2" fill="#0EA5E9"/>
    <rect x="8" y="8" width="16" height="4" rx="1" fill="#38BDF8"/>
    <rect x="8" y="20" width="16" height="4" rx="1" fill="#38BDF8"/>
    <circle cx="10" cy="15" r="1.5" fill="#7DD3FC"/>
    <circle cx="22" cy="15" r="1.5" fill="#7DD3FC"/>
    <rect x="16" y="7" width="2" height="1" rx="0.5" fill="#0284C7"/>
  </svg>`,
  
  'wii.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="24" height="16" rx="2" fill="#E5E7EB" stroke="#9CA3AF" stroke-width="1"/>
    <rect x="5" y="9" width="22" height="14" rx="1" fill="#F3F4F6"/>
    <rect x="12" y="11" width="8" height="6" rx="1" fill="#CBD5E1"/>
    <circle cx="16" cy="19" r="2" fill="#0EA5E9"/>
    <rect x="8" y="17" width="4" height="2" rx="1" fill="#9CA3AF"/>
    <rect x="20" y="17" width="4" height="2" rx="1" fill="#9CA3AF"/>
  </svg>`,
  
  'wiiu.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="10" width="24" height="14" rx="2" fill="#374151"/>
    <rect x="5" y="11" width="22" height="12" rx="1" fill="#4B5563"/>
    <rect x="8" y="13" width="16" height="8" rx="1" fill="#1F2937"/>
    <circle cx="8" cy="17" r="1.5" fill="#6B7280"/>
    <circle cx="24" cy="17" r="1.5" fill="#6B7280"/>
    <rect x="12" y="15" width="8" height="4" rx="1" fill="#9CA3AF"/>
  </svg>`,
  
  'ps4.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 14 Q4 12 6 12 L26 12 Q28 12 28 14 L28 22 Q28 24 26 24 L6 24 Q4 24 4 22 Z" fill="#0EA5E9"/>
    <rect x="5" y="13" width="22" height="10" rx="1" fill="#38BDF8"/>
    <rect x="20" y="15" width="6" height="6" rx="1" fill="#0284C7"/>
    <circle cx="16" cy="18" r="2" fill="#075985"/>
    <rect x="6" y="17" width="6" height="2" rx="1" fill="#0284C7"/>
    <text x="16" y="21" text-anchor="middle" font-size="4" fill="#F0F9FF">PS4</text>
  </svg>`,
  
  'ps5.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12 Q4 12 4 14 L4 22 Q4 24 6 24 L26 24 Q28 24 28 22 L28 14 Q28 12 26 12 L22 12 L22 10 Q22 8 20 8 L12 8 Q10 8 10 10 L10 12 Z" fill="#E2E8F0" stroke="#9CA3AF" stroke-width="1"/>
    <rect x="5" y="13" width="22" height="10" rx="1" fill="#F3F4F6"/>
    <rect x="20" y="15" width="6" height="6" rx="1" fill="#CBD5E1"/>
    <circle cx="16" cy="18" r="2" fill="#1F2937"/>
    <rect x="6" y="17" width="6" height="2" rx="1" fill="#9CA3AF"/>
    <text x="16" y="21" text-anchor="middle" font-size="4" fill="#1F2937">PS5</text>
  </svg>`,
  
  'psp.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="10" width="24" height="12" rx="3" fill="#1F2937"/>
    <rect x="5" y="11" width="22" height="10" rx="2" fill="#374151"/>
    <rect x="8" y="13" width="16" height="6" rx="1" fill="#000000"/>
    <circle cx="6" cy="16" r="1.5" fill="#6B7280"/>
    <circle cx="26" cy="16" r="1.5" fill="#6B7280"/>
    <rect x="22" y="14" width="4" height="4" rx="0.5" fill="#4B5563"/>
  </svg>`,
  
  'psp-go.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="24" height="10" rx="2" fill="#E2E8F0" stroke="#9CA3AF" stroke-width="1"/>
    <rect x="5" y="13" width="22" height="8" rx="1" fill="#F8FAFC"/>
    <rect x="8" y="15" width="16" height="4" rx="1" fill="#000000"/>
    <circle cx="6" cy="17" r="1" fill="#CBD5E1"/>
    <circle cx="26" cy="17" r="1" fill="#CBD5E1"/>
    <rect x="22" y="16" width="3" height="2" rx="0.5" fill="#9CA3AF"/>
  </svg>`,
  
  'xbox-one.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="24" height="14" rx="2" fill="#15803D"/>
    <rect x="5" y="13" width="22" height="12" rx="1" fill="#16A34A"/>
    <circle cx="16" cy="19" r="4" fill="#22C55E"/>
    <circle cx="16" cy="19" r="2" fill="#15803D"/>
    <text x="16" y="22" text-anchor="middle" font-size="3" fill="#F0FDF4">XBOX</text>
    <rect x="6" y="15" width="4" height="2" rx="1" fill="#4ADE80"/>
    <rect x="22" y="15" width="4" height="2" rx="1" fill="#4ADE80"/>
  </svg>`,
  
  'xbox-series.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="11" width="24" height="16" rx="3" fill="#166534"/>
    <rect x="5" y="12" width="22" height="14" rx="2" fill="#15803D"/>
    <circle cx="16" cy="19" r="4" fill="#22C55E"/>
    <circle cx="16" cy="19" r="2" fill="#166534"/>
    <text x="16" y="22" text-anchor="middle" font-size="2.5" fill="#F0FDF4">X|S</text>
    <rect x="6" y="15" width="4" height="2" rx="1" fill="#4ADE80"/>
    <rect x="22" y="15" width="4" height="2" rx="1" fill="#4ADE80"/>
  </svg>`,
  
  'saturn.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="13" width="24" height="12" rx="2" fill="#78716C"/>
    <rect x="5" y="14" width="22" height="10" rx="1" fill="#A8A29E"/>
    <circle cx="20" cy="19" r="3" fill="#57534E"/>
    <circle cx="20" cy="19" r="1.5" fill="#292524"/>
    <rect x="8" y="17" width="6" height="4" rx="1" fill="#D6D3D1"/>
    <text x="16" y="26" text-anchor="middle" font-size="4" fill="#44403C">SAT</text>
  </svg>`,
  
  'genesis.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="24" height="14" rx="2" fill="#1F2937"/>
    <rect x="5" y="13" width="22" height="12" rx="1" fill="#374151"/>
    <rect x="20" y="15" width="6" height="8" rx="1" fill="#4B5563"/>
    <circle cx="10" cy="18" r="1.5" fill="#6B7280"/>
    <circle cx="14" cy="18" r="1.5" fill="#6B7280"/>
    <circle cx="18" cy="18" r="1.5" fill="#6B7280"/>
    <rect x="6" y="20" width="8" height="3" rx="1" fill="#6B7280"/>
  </svg>`,
  
  'gamegear.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="20" height="16" rx="3" fill="#1F2937"/>
    <rect x="7" y="9" width="18" height="14" rx="2" fill="#374151"/>
    <rect x="10" y="12" width="12" height="8" rx="1" fill="#000000"/>
    <circle cx="4" cy="16" r="2" fill="#4B5563"/>
    <circle cx="28" cy="16" r="2" fill="#4B5563"/>
    <rect x="9" y="22" width="14" height="1" rx="0.5" fill="#6B7280"/>
  </svg>`,
  
  'mastersystem.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="24" height="14" rx="2" fill="#E2E8F0" stroke="#9CA3AF" stroke-width="1"/>
    <rect x="5" y="13" width="22" height="12" rx="1" fill="#F8FAFC"/>
    <rect x="20" y="15" width="6" height="8" rx="1" fill="#CBD5E1"/>
    <circle cx="10" cy="18" r="1.5" fill="#DC2626"/>
    <circle cx="14" cy="18" r="1.5" fill="#DC2626"/>
    <rect x="6" y="20" width="8" height="3" rx="1" fill="#9CA3AF"/>
    <text x="16" y="23" text-anchor="middle" font-size="4" fill="#1F2937">SMS</text>
  </svg>`,
  
  'atari2600.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="13" width="24" height="12" rx="2" fill="#92400E"/>
    <rect x="5" y="14" width="22" height="10" rx="1" fill="#B45309"/>
    <rect x="20" y="16" width="6" height="6" rx="1" fill="#78350F"/>
    <circle cx="10" cy="19" r="1.5" fill="#FBBF24"/>
    <circle cx="14" cy="19" r="1.5" fill="#FBBF24"/>
    <rect x="6" y="17" width="6" height="4" rx="1" fill="#D97706"/>
    <text x="16" y="22" text-anchor="middle" font-size="3" fill="#FED7AA">2600</text>
  </svg>`,
  
  'neogeo.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="24" height="14" rx="2" fill="#FBBF24"/>
    <rect x="5" y="13" width="22" height="12" rx="1" fill="#FCD34D"/>
    <rect x="20" y="15" width="6" height="8" rx="1" fill="#F59E0B"/>
    <circle cx="10" cy="18" r="1.5" fill="#DC2626"/>
    <circle cx="14" cy="18" r="1.5" fill="#0EA5E9"/>
    <circle cx="18" cy="18" r="1.5" fill="#059669"/>
    <rect x="6" y="20" width="8" height="3" rx="1" fill="#D97706"/>
  </svg>`,
  
  'c64.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="10" width="24" height="16" rx="2" fill="#92400E"/>
    <rect x="5" y="11" width="22" height="14" rx="1" fill="#B45309"/>
    <rect x="8" y="13" width="16" height="6" rx="1" fill="#78350F"/>
    <rect x="6" y="20" width="20" height="4" rx="1" fill="#D97706"/>
    <text x="16" y="16" text-anchor="middle" font-size="3" fill="#FBBF24">C64</text>
    <circle cx="24" cy="22" r="1" fill="#FED7AA"/>
  </svg>`,
  
  'amiibo.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="20" r="8" fill="#F59E0B"/>
    <circle cx="16" cy="20" r="6" fill="#FBBF24"/>
    <circle cx="16" cy="20" r="4" fill="#FCD34D"/>
    <rect x="14" y="8" width="4" height="8" rx="2" fill="#D97706"/>
    <circle cx="16" cy="20" r="2" fill="#FFFFFF"/>
    <text x="16" y="22" text-anchor="middle" font-size="3" fill="#92400E">A</text>
  </svg>`,
  
  'pc.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="24" height="16" rx="2" fill="#4F46E5"/>
    <rect x="5" y="9" width="22" height="14" rx="1" fill="#6366F1"/>
    <rect x="7" y="11" width="18" height="10" rx="1" fill="#FFFFFF"/>
    <rect x="8" y="12" width="16" height="8" rx="0.5" fill="#E0E7FF"/>
    <rect x="14" y="23" width="4" height="2" rx="1" fill="#4F46E5"/>
    <rect x="10" y="25" width="12" height="1" rx="0.5" fill="#6366F1"/>
  </svg>`,
  
  'switch2.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="20" height="16" rx="2" fill="#1F2937"/>
    <rect x="7" y="9" width="18" height="14" rx="1" fill="#374151"/>
    <rect x="9" y="11" width="14" height="8" rx="1" fill="#000"/>
    <circle cx="4" cy="14" r="2" fill="#F97316"/>
    <circle cx="28" cy="14" r="2" fill="#0EA5E9"/>
    <rect x="2" y="10" width="4" height="8" rx="2" fill="#6B7280"/>
    <rect x="26" y="10" width="4" height="8" rx="2" fill="#6B7280"/>
    <rect x="15" y="7" width="2" height="2" rx="1" fill="#F97316"/>
  </svg>`,
  
  'generic.png': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="24" height="14" rx="2" fill="#667eea"/>
    <circle cx="16" cy="19" r="4" fill="white"/>
    <circle cx="16" cy="19" r="2" fill="#667eea"/>
  </svg>`,
};

export async function getIcon(filename: string): Promise<Response> {
  const iconSVG = PLATFORM_ICONS[filename];
  
  if (!iconSVG) {
    // Return generic gaming icon for unknown platforms
    const genericIcon = PLATFORM_ICONS['generic.png'];
    return new Response(genericIcon, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  }
  
  return new Response(iconSVG, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}