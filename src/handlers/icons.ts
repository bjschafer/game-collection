// Professional SVG icons for gaming platforms - based on actual brand logos and design language
const PLATFORM_ICONS: Record<string, string> = {
  // Nintendo Entertainment System - Classic gray with red cartridge slot
  'nes.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="10" width="28" height="16" rx="2" fill="#b8b8b8"/><rect x="3" y="11" width="26" height="14" rx="1" fill="#d4d4d4"/><rect x="4" y="12" width="10" height="8" rx="1" fill="#1a1a1a"/><rect x="16" y="12" width="12" height="12" rx="1" fill="#c41e3a"/><rect x="18" y="14" width="8" height="8" rx=".5" fill="#8b0000"/><rect x="5" y="21" width="8" height="2" rx=".5" fill="#666"/><circle cx="9" cy="16" r="2" fill="#333"/></svg>`,

  // Super Nintendo - Gray with colorful buttons
  'snes.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="10" width="28" height="14" rx="3" fill="#9ca3af"/><rect x="3" y="11" width="26" height="12" rx="2" fill="#d1d5db"/><rect x="5" y="13" width="10" height="8" rx="1" fill="#4b5563"/><circle cx="19" cy="17" r="1.5" fill="#22c55e"/><circle cx="23" cy="17" r="1.5" fill="#ef4444"/><circle cx="21" cy="15" r="1.5" fill="#3b82f6"/><circle cx="21" cy="19" r="1.5" fill="#eab308"/><rect x="4" y="19" width="4" height="1.5" rx=".5" fill="#6b21a8"/><rect x="9" y="19" width="4" height="1.5" rx=".5" fill="#6b21a8"/></svg>`,

  // Nintendo 64 - Iconic 3D N logo
  'n64.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 4l12 6v12l-12 6-12-6V10z" fill="#1a1a1a"/><path d="M16 6l10 5v10l-10 5-10-5V11z" fill="#2d2d2d"/><path d="M16 8l-6 3v6l6 3 6-3v-6z" fill="#22c55e"/><path d="M16 10l-4 2v4l4 2 4-2v-4z" fill="#15803d"/><path d="M8 13l4 2v4l-4-2z" fill="#ef4444"/><path d="M24 13l-4 2v4l4-2z" fill="#3b82f6"/><path d="M16 14l-2 1v2l2 1 2-1v-2z" fill="#eab308"/></svg>`,

  // GameCube - Purple cube with G cutout
  'gamecube.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="4" y="6" width="24" height="24" rx="4" fill="#5b21b6"/><rect x="6" y="8" width="20" height="20" rx="3" fill="#7c3aed"/><path d="M16 12a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8v4h4a4 4 0 01-4 4z" fill="#a78bfa"/><rect x="18" y="10" width="6" height="4" rx="1" fill="#ddd6fe"/></svg>`,

  // Nintendo Switch - Joy-Con design
  'switch.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="6" width="8" height="20" rx="4" fill="#0ea5e9"/><rect x="22" y="6" width="8" height="20" rx="4" fill="#ef4444"/><rect x="8" y="8" width="16" height="16" rx="2" fill="#1f2937"/><rect x="9" y="9" width="14" height="14" rx="1" fill="#000"/><circle cx="6" cy="12" r="2.5" fill="#0284c7"/><circle cx="26" cy="12" r="2.5" fill="#dc2626"/><rect x="4" y="18" width="4" height="4" rx="1" fill="#0284c7"/><circle cx="26" cy="20" r="1.5" fill="#dc2626"/></svg>`,

  // PlayStation - Gray with classic shapes
  'ps1.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="8" width="28" height="18" rx="2" fill="#a0a0a0"/><rect x="3" y="9" width="26" height="16" rx="1" fill="#d4d4d4"/><circle cx="16" cy="17" r="5" fill="#1f2937"/><circle cx="16" cy="17" r="3" fill="#374151"/><path d="M8 14l2-2 2 2-2 2z" fill="#de3163"/><path d="M22 12l2 2-2 2-2-2z" fill="#6bafe4"/><rect x="20" y="18" width="4" height="4" rx=".5" fill="#a855f7"/><circle cx="10" cy="20" r="2" fill="#22c55e"/></svg>`,

  // PlayStation 2 - Black with blue accents
  'ps2.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="8" width="28" height="18" rx="2" fill="#1a1a1a"/><rect x="3" y="9" width="26" height="16" rx="1" fill="#2d2d2d"/><rect x="4" y="10" width="10" height="4" rx="1" fill="#1a1a1a"/><circle cx="20" cy="17" r="4" fill="#0ea5e9"/><circle cx="20" cy="17" r="2" fill="#1a1a1a"/><rect x="4" y="20" width="8" height="2" rx=".5" fill="#404040"/><text x="8" y="13" font-size="4" fill="#0ea5e9" font-weight="bold" font-family="sans-serif">PS2</text></svg>`,

  // PlayStation 3 - Sleek black
  'ps3.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="8" width="28" height="18" rx="3" fill="#0a0a0a"/><rect x="3" y="9" width="26" height="16" rx="2" fill="#1a1a1a"/><path d="M4 12h24" stroke="#333" stroke-width=".5"/><circle cx="20" cy="17" r="4" fill="#333"/><circle cx="20" cy="17" r="2" fill="#1a1a1a"/><text x="6" y="18" font-size="5" fill="#e5e5e5" font-weight="bold" font-style="italic" font-family="sans-serif">PS3</text><rect x="24" y="20" width="3" height="3" rx=".5" fill="#2563eb"/></svg>`,

  // PlayStation 4 - Angular blue
  'ps4.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M2 12l2-2h24l2 2v12l-2 2H4l-2-2z" fill="#003087"/><path d="M3 13l2-2h22l2 2v10l-2 2H5l-2-2z" fill="#00439c"/><rect x="4" y="14" width="8" height="8" rx="1" fill="#001f5c"/><circle cx="20" cy="18" r="4" fill="#fff"/><circle cx="20" cy="18" r="2" fill="#003087"/><text x="6" y="20" font-size="4" fill="#fff" font-weight="bold" font-family="sans-serif">PS4</text></svg>`,

  // PlayStation 5 - White futuristic
  'ps5.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M6 6l2-2h16l2 2v20l-2 2H8l-2-2z" fill="#fff" stroke="#e5e5e5"/><path d="M8 6h16v2H8zM8 24h16v2H8z" fill="#000"/><rect x="10" y="10" width="12" height="12" rx="1" fill="#f5f5f5"/><circle cx="16" cy="16" r="4" fill="#000"/><circle cx="16" cy="16" r="2" fill="#0ea5e9"/><text x="11" y="22" font-size="3" fill="#000" font-weight="bold" font-family="sans-serif">PS5</text></svg>`,

  // PSP - Black widescreen
  'psp.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="1" y="10" width="30" height="12" rx="6" fill="#1a1a1a"/><rect x="2" y="11" width="28" height="10" rx="5" fill="#2d2d2d"/><rect x="8" y="13" width="16" height="6" rx="1" fill="#000"/><circle cx="5" cy="16" r="2" fill="#404040"/><rect x="24" y="14" width="4" height="4" rx="1" fill="#404040"/><circle cx="25" cy="15" r=".5" fill="#22c55e"/><circle cx="27" cy="15" r=".5" fill="#ef4444"/><circle cx="25" cy="17" r=".5" fill="#a855f7"/><circle cx="27" cy="17" r=".5" fill="#3b82f6"/></svg>`,

  // PS Vita - Black OLED
  'psp-go.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="1" y="9" width="30" height="14" rx="4" fill="#1a1a1a"/><rect x="2" y="10" width="28" height="12" rx="3" fill="#2d2d2d"/><rect x="8" y="12" width="16" height="8" rx="1" fill="#000"/><circle cx="5" cy="14" r="1.5" fill="#404040"/><circle cx="27" cy="18" r="1.5" fill="#404040"/><rect x="24" y="12" width="4" height="4" rx=".5" fill="#333"/><circle cx="5" cy="18" r="1" fill="#404040"/></svg>`,

  // Xbox Original - Black and green
  'xbox.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="8" width="28" height="18" rx="3" fill="#1a1a1a"/><rect x="3" y="9" width="26" height="16" rx="2" fill="#2d2d2d"/><circle cx="16" cy="17" r="6" fill="#107c10"/><path d="M12 14l4-3 4 3-4 9z" fill="#fff"/><path d="M13 14.5l3-2.5 3 2.5" stroke="#107c10" stroke-width="1"/><rect x="4" y="11" width="6" height="4" rx="1" fill="#1a1a1a"/></svg>`,

  // Xbox 360 - White with green ring
  'xbox360.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><ellipse cx="16" cy="16" rx="14" ry="10" fill="#f5f5f5"/><ellipse cx="16" cy="16" rx="12" ry="8" fill="#e5e5e5"/><circle cx="16" cy="16" r="5" fill="#107c10"/><circle cx="16" cy="16" r="3" fill="#22c55e"/><circle cx="16" cy="16" r="1.5" fill="#fff"/><rect x="6" y="12" width="4" height="2" rx=".5" fill="#d4d4d4"/><rect x="22" y="12" width="4" height="2" rx=".5" fill="#d4d4d4"/></svg>`,

  // Xbox One - Black angular
  'xbox-one.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="10" width="28" height="14" rx="2" fill="#1a1a1a"/><rect x="3" y="11" width="26" height="12" rx="1" fill="#2d2d2d"/><rect x="4" y="12" width="10" height="4" rx=".5" fill="#1a1a1a"/><circle cx="20" cy="17" r="5" fill="#107c10"/><path d="M17 15l3-2 3 2-3 6z" fill="#fff"/><rect x="4" y="18" width="8" height="3" rx=".5" fill="#404040"/></svg>`,

  // Xbox Series X|S - Tall monolith
  'xbox-series.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="8" y="2" width="16" height="28" rx="2" fill="#1a1a1a"/><rect x="9" y="3" width="14" height="26" rx="1" fill="#2d2d2d"/><circle cx="16" cy="8" r="4" fill="#107c10"/><path d="M13.5 6.5l2.5-1.5 2.5 1.5-2.5 5z" fill="#fff"/><rect x="10" y="14" width="12" height="1" fill="#404040"/><rect x="10" y="16" width="12" height="10" rx=".5" fill="#1a1a1a"/></svg>`,

  // Dreamcast - White with orange swirl
  'dreamcast.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="10" width="28" height="16" rx="3" fill="#f5f5f5"/><rect x="3" y="11" width="26" height="14" rx="2" fill="#fff"/><circle cx="20" cy="18" r="5" fill="#f97316"/><path d="M20 13a5 5 0 00-5 5" stroke="#fff" stroke-width="2" fill="none"/><path d="M20 15a3 3 0 00-3 3" stroke="#ea580c" stroke-width="1.5" fill="none"/><rect x="5" y="14" width="8" height="6" rx="1" fill="#e5e5e5"/><rect x="6" y="21" width="6" height="2" rx=".5" fill="#d4d4d4"/></svg>`,

  // Saturn - Black with CD
  'saturn.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="10" width="28" height="16" rx="2" fill="#2d2d2d"/><rect x="3" y="11" width="26" height="14" rx="1" fill="#404040"/><circle cx="18" cy="18" r="5" fill="#1a1a1a"/><circle cx="18" cy="18" r="3" fill="#333"/><circle cx="18" cy="18" r="1" fill="#1a1a1a"/><rect x="5" y="14" width="8" height="6" rx="1" fill="#333"/><rect x="6" y="15" width="6" height="1" rx=".5" fill="#0ea5e9"/><text x="8" y="19" font-size="3" fill="#fff" font-family="sans-serif">SEGA</text></svg>`,

  // Genesis/Mega Drive - Black with gold
  'genesis.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="10" width="28" height="14" rx="2" fill="#1a1a1a"/><rect x="3" y="11" width="26" height="12" rx="1" fill="#2d2d2d"/><rect x="4" y="12" width="10" height="10" rx="1" fill="#1a1a1a"/><rect x="16" y="12" width="12" height="6" rx="1" fill="#d4a574"/><rect x="17" y="13" width="10" height="4" rx=".5" fill="#c4956a"/><rect x="5" y="19" width="8" height="2" rx=".5" fill="#404040"/><text x="5" y="17" font-size="3" fill="#0ea5e9" font-family="sans-serif">SEGA</text></svg>`,

  // Game Gear - Black widescreen handheld
  'gamegear.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="1" y="8" width="30" height="16" rx="3" fill="#1a1a1a"/><rect x="2" y="9" width="28" height="14" rx="2" fill="#2d2d2d"/><rect x="8" y="11" width="16" height="10" rx="1" fill="#000"/><circle cx="5" cy="16" r="2" fill="#404040"/><rect x="24" y="13" width="4" height="6" rx="1" fill="#404040"/><circle cx="25" cy="15" r=".7" fill="#ef4444"/><circle cx="27" cy="15" r=".7" fill="#3b82f6"/><circle cx="25" cy="17" r=".7" fill="#3b82f6"/><circle cx="27" cy="17" r=".7" fill="#ef4444"/><rect x="9" y="21" width="4" height="1" rx=".5" fill="#0ea5e9"/></svg>`,

  // Master System - Black/red
  'mastersystem.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="10" width="28" height="14" rx="2" fill="#1a1a1a"/><rect x="3" y="11" width="26" height="12" rx="1" fill="#2d2d2d"/><rect x="4" y="12" width="10" height="10" rx="1" fill="#dc2626"/><rect x="5" y="13" width="8" height="8" rx=".5" fill="#b91c1c"/><rect x="16" y="14" width="12" height="6" rx="1" fill="#1a1a1a"/><rect x="17" y="15" width="10" height="4" rx=".5" fill="#333"/><text x="5" y="18" font-size="2.5" fill="#fff" font-family="sans-serif">SEGA</text></svg>`,

  // Game Boy - Classic gray with green screen
  'gameboy.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="6" y="2" width="20" height="28" rx="3" fill="#c4b8a8"/><rect x="7" y="3" width="18" height="26" rx="2" fill="#d4c8b8"/><rect x="9" y="5" width="14" height="10" rx="1" fill="#4b5320"/><rect x="10" y="6" width="12" height="8" rx=".5" fill="#9baa5c"/><circle cx="11" cy="20" r="3" fill="#1a1a1a"/><rect x="17" y="18" width="6" height="2" rx="1" fill="#8b1538"/><rect x="17" y="21" width="6" height="2" rx="1" fill="#8b1538"/><rect x="10" y="25" width="3" height="1" rx=".5" fill="#6b7280"/><rect x="14" y="25" width="3" height="1" rx=".5" fill="#6b7280"/></svg>`,

  // Game Boy Color - Atomic Purple
  'gbc.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="6" y="2" width="20" height="28" rx="3" fill="#7c3aed"/><rect x="7" y="3" width="18" height="26" rx="2" fill="#8b5cf6"/><rect x="9" y="5" width="14" height="10" rx="1" fill="#1f2937"/><rect x="10" y="6" width="12" height="8" rx=".5" fill="#10b981"/><circle cx="11" cy="20" r="3" fill="#1a1a1a"/><rect x="17" y="18" width="6" height="2" rx="1" fill="#dc2626"/><rect x="17" y="21" width="6" height="2" rx="1" fill="#dc2626"/><rect x="10" y="25" width="3" height="1" rx=".5" fill="#a78bfa"/><rect x="14" y="25" width="3" height="1" rx=".5" fill="#a78bfa"/></svg>`,

  // Game Boy Advance - Purple horizontal
  'gba.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="1" y="10" width="30" height="12" rx="3" fill="#5b21b6"/><rect x="2" y="11" width="28" height="10" rx="2" fill="#7c3aed"/><rect x="9" y="13" width="14" height="6" rx="1" fill="#000"/><circle cx="5" cy="16" r="2" fill="#4c1d95"/><rect x="24" y="14" width="4" height="4" rx="1" fill="#4c1d95"/><circle cx="25" cy="15" r=".6" fill="#a78bfa"/><circle cx="27" cy="15" r=".6" fill="#a78bfa"/><circle cx="25" cy="17" r=".6" fill="#a78bfa"/><circle cx="27" cy="17" r=".6" fill="#a78bfa"/></svg>`,

  // Nintendo DS - Blue clamshell
  'ds.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="6" y="2" width="20" height="13" rx="2" fill="#1e40af"/><rect x="6" y="17" width="20" height="13" rx="2" fill="#1e40af"/><rect x="8" y="4" width="16" height="9" rx="1" fill="#3b82f6"/><rect x="9" y="5" width="14" height="7" fill="#000"/><rect x="8" y="19" width="16" height="9" rx="1" fill="#3b82f6"/><rect x="9" y="20" width="14" height="7" fill="#93c5fd"/><circle cx="12" cy="24" r="2" fill="#1e40af"/><rect x="17" y="22" width="4" height="4" rx=".5" fill="#1e40af"/></svg>`,

  // Nintendo 3DS - Aqua blue
  '3ds.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="6" y="2" width="20" height="13" rx="2" fill="#0ea5e9"/><rect x="6" y="17" width="20" height="13" rx="2" fill="#0ea5e9"/><rect x="8" y="4" width="16" height="9" rx="1" fill="#38bdf8"/><rect x="9" y="5" width="14" height="7" fill="#000"/><rect x="8" y="19" width="16" height="9" rx="1" fill="#38bdf8"/><rect x="9" y="20" width="14" height="7" fill="#7dd3fc"/><circle cx="12" cy="24" r="2" fill="#0284c7"/><circle cx="21" cy="24" r="1.5" fill="#0284c7"/><rect x="15" y="3" width="2" height="1" rx=".5" fill="#0284c7"/></svg>`,

  // Wii - White with blue slot
  'wii.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="10" y="2" width="12" height="28" rx="2" fill="#f5f5f5" stroke="#e5e5e5"/><rect x="11" y="3" width="10" height="26" rx="1" fill="#fff"/><rect x="13" y="5" width="6" height="2" rx=".5" fill="#0ea5e9"/><circle cx="16" cy="12" r="2" fill="#a3a3a3"/><rect x="14" y="18" width="4" height="1" rx=".5" fill="#d4d4d4"/><rect x="14" y="20" width="4" height="1" rx=".5" fill="#d4d4d4"/><rect x="14" y="22" width="4" height="1" rx=".5" fill="#d4d4d4"/></svg>`,

  // Wii U - Black tablet controller
  'wiiu.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="8" width="28" height="16" rx="3" fill="#1a1a1a"/><rect x="3" y="9" width="26" height="14" rx="2" fill="#2d2d2d"/><rect x="8" y="11" width="16" height="10" rx="1" fill="#000"/><circle cx="5" cy="14" r="1.5" fill="#404040"/><circle cx="27" cy="18" r="1.5" fill="#404040"/><rect x="24" y="12" width="4" height="4" rx=".5" fill="#404040"/><circle cx="5" cy="18" r="1" fill="#404040"/></svg>`,

  // Atari 2600 - Wood grain classic
  'atari2600.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="12" width="28" height="12" rx="1" fill="#1a1a1a"/><rect x="3" y="13" width="26" height="10" rx=".5" fill="#8b4513"/><rect x="4" y="14" width="24" height="8" fill="#a0522d"/><rect x="5" y="15" width="22" height="1" fill="#cd853f"/><rect x="5" y="17" width="22" height="1" fill="#cd853f"/><rect x="5" y="19" width="22" height="1" fill="#cd853f"/><rect x="22" y="15" width="5" height="5" rx=".5" fill="#1a1a1a"/><rect x="4" y="15" width="6" height="5" rx=".5" fill="#808080"/></svg>`,

  // Neo Geo - Gold/black arcade
  'neogeo.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="10" width="28" height="14" rx="2" fill="#1a1a1a"/><rect x="3" y="11" width="26" height="12" rx="1" fill="#2d2d2d"/><rect x="4" y="12" width="12" height="10" rx="1" fill="#fbbf24"/><rect x="5" y="13" width="10" height="8" rx=".5" fill="#f59e0b"/><circle cx="10" cy="17" r="2" fill="#1a1a1a"/><rect x="18" y="14" width="10" height="6" rx="1" fill="#333"/><circle cx="20" cy="17" r="1" fill="#ef4444"/><circle cx="23" cy="17" r="1" fill="#22c55e"/><circle cx="26" cy="17" r="1" fill="#3b82f6"/></svg>`,

  // Commodore 64 - Beige computer
  'c64.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="8" width="28" height="18" rx="2" fill="#c4956a"/><rect x="3" y="9" width="26" height="16" rx="1" fill="#d4a574"/><rect x="4" y="10" width="24" height="8" rx="1" fill="#333"/><rect x="5" y="11" width="22" height="6" fill="#000"/><rect x="4" y="20" width="24" height="4" rx=".5" fill="#a0522d"/><text x="8" y="15" font-size="3" fill="#6bafe4" font-family="sans-serif">C64</text><rect x="22" y="21" width="4" height="2" rx=".5" fill="#f5deb3"/></svg>`,

  // Amiibo - Gold figure base
  'amiibo.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><ellipse cx="16" cy="26" rx="10" ry="4" fill="#f59e0b"/><ellipse cx="16" cy="24" rx="8" ry="3" fill="#fbbf24"/><path d="M12 24v-8a4 4 0 018 0v8" fill="#fcd34d"/><circle cx="16" cy="12" r="4" fill="#fde68a"/><circle cx="14" cy="11" r="1" fill="#1a1a1a"/><circle cx="18" cy="11" r="1" fill="#1a1a1a"/><path d="M14 14h4" stroke="#1a1a1a" stroke-width=".5"/><text x="13" y="27" font-size="3" fill="#92400e" font-family="sans-serif">NFC</text></svg>`,

  // PC - Monitor and tower
  'pc.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="6" y="4" width="16" height="14" rx="1" fill="#374151"/><rect x="7" y="5" width="14" height="11" fill="#000"/><rect x="8" y="6" width="12" height="9" fill="#1e3a5f"/><rect x="12" y="18" width="4" height="2" fill="#374151"/><rect x="8" y="20" width="12" height="2" rx=".5" fill="#4b5563"/><rect x="24" y="4" width="6" height="18" rx="1" fill="#1f2937"/><rect x="25" y="5" width="4" height="2" rx=".5" fill="#22c55e"/><rect x="25" y="8" width="4" height="1" fill="#374151"/><rect x="25" y="10" width="4" height="1" fill="#374151"/></svg>`,

  // Switch 2 - Updated Joy-Con design
  'switch2.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="6" width="8" height="20" rx="4" fill="#1f2937"/><rect x="22" y="6" width="8" height="20" rx="4" fill="#1f2937"/><rect x="8" y="8" width="16" height="16" rx="2" fill="#0a0a0a"/><rect x="9" y="9" width="14" height="14" rx="1" fill="#000"/><circle cx="6" cy="12" r="2.5" fill="#374151"/><circle cx="26" cy="12" r="2.5" fill="#374151"/><rect x="4" y="18" width="4" height="4" rx="1" fill="#374151"/><circle cx="26" cy="20" r="1.5" fill="#374151"/><rect x="14" y="5" width="4" height="2" rx="1" fill="#f97316"/></svg>`,

  // Generic fallback - Game controller shape
  'generic.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="4" y="10" width="24" height="14" rx="3" fill="#6366f1"/><rect x="5" y="11" width="22" height="12" rx="2" fill="#818cf8"/><circle cx="10" cy="16" r="2" fill="#4f46e5"/><rect x="19" y="14" width="6" height="6" rx="1" fill="#4f46e5"/><circle cx="20" cy="15" r=".8" fill="#c7d2fe"/><circle cx="24" cy="15" r=".8" fill="#c7d2fe"/><circle cx="20" cy="19" r=".8" fill="#c7d2fe"/><circle cx="24" cy="19" r=".8" fill="#c7d2fe"/><rect x="13" y="14" width="4" height="1" rx=".5" fill="#4f46e5"/><rect x="13" y="17" width="4" height="1" rx=".5" fill="#4f46e5"/></svg>`,
};

/**
 * Get an SVG icon for a platform
 * Returns the SVG as a data URL or inline SVG content
 */
export function getIcon(filename: string): Response {
  const svg = PLATFORM_ICONS[filename];

  if (svg) {
    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  // Return generic icon if specific one not found
  const genericSvg = PLATFORM_ICONS['generic.png'];
  return new Response(genericSvg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
