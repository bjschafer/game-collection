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
