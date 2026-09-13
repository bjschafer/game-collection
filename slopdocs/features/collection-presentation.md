# Collection presentation

Decision: present the site as a personal archive, not a generic dark dashboard
or a clone of GAMEYE's cover-first viewer.

- Shared typography, color, navigation, filters, stats, and cards live in
  `src/pages/styles.ts` and `src/pages/common.ts`. The home page uses the same
  system; do not restore a second copy of the CSS in `src/index.ts`.
- The visual system is warm paper, dark ink, restrained rust accent, serif
  display type, square rules, and dense catalog cards. Avoid neon gradients,
  glow effects, emoji feature icons, and decorative hover motion.
- Collection controls are consistent across shelves: search, optional platform
  filter, and title/date/platform sort. Stats describe the current result set.
- API-derived strings are HTML escaped before rendering. Keep that invariant for
  any new metadata added to cards.
- Cover art remains out of the primary browse path. The prior per-item GAMEYE
  lookup was disabled because it was rate-limited and would turn one page load
  into hundreds of upstream calls. Add covers only with a bulk/cache strategy.

## Platform artwork

- Use sourced platform logos, not hand-drawn console approximations. The prior
  24px hardware outlines collapsed distinct platforms into similar shapes.
- `src/assets/platforms/` holds 35 source SVGs, a generic question mark, an
  explicit import map, source URLs/hashes, and third-party notices. SVG is the
  delivery format; the geometry comes from established artwork. Preserve it.
- Review the actual image when selecting an upstream variant. Dan Patrick's
  `Nintendo DS-01`, `Nintendo 3DS-01`, and `Sony Playstation 4-01` filenames
  actually show DS Lite, New 3DS XL, and PS4 Pro. Current choices show the base
  platforms. PS2 uses its blue PS2 mark; PS3 uses its readable PS3 mark.
- Wrangler imports SVG files as Text modules (`wrangler.toml`, `assets.d.ts`).
  `/icons/:filename` serves these local assets with SVG MIME and a one-day
  cache. API URLs use `?v=4` to bypass earlier year-long immutable icon caches.
  Old `.png` URL aliases still return an image with the correct SVG MIME.
- Card headers give the logos a 120x48 contained area, right aligned beside
  the item index. Do not squeeze wide wordmarks back into square 24px slots
  or recolor them to match the rust accent. Keep the visible platform name in
  the metadata; it also makes unlisted platforms and failed images readable.
  Names wrap instead of being ellipsized. Logo alt text is empty because the
  same platform is already named in the card.
- Visual verification used one fixture per mapped platform plus an unknown
  platform on games, consoles, and accessories at 1440, 390, and 320px. All
  artwork decoded, with no page overflow or clipped platform names. Search
  was exercised. Live collection API requests returned 403, so no claim of
  live-data validation. Typecheck, changed-file lint, and Worker dry-run build
  passed; repository lint still has six pre-existing no-explicit-any errors
  in cloudflare-images.ts, gameye.ts, and router.ts.
