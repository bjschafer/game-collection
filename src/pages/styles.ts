export const getSharedStyles = () => `
  <style>
    :root {
      --paper: #f3efe6;
      --paper-deep: #e7dfd0;
      --ink: #1d211d;
      --ink-soft: #596057;
      --ink-faint: #858a80;
      --accent: #b9472e;
      --accent-dark: #84301f;
      --rule: rgba(29, 33, 29, 0.17);
      --rule-strong: rgba(29, 33, 29, 0.32);
      --white: #fffdf8;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      min-height: 100vh;
      color: var(--ink);
      background: radial-gradient(circle at 12% 0%, rgba(185, 71, 46, 0.07), transparent 27rem), var(--paper);
      font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }
    a { color: inherit; }
    button, input, select { font: inherit; }

    .header {
      position: sticky;
      top: 0;
      z-index: 20;
      background: rgba(243, 239, 230, 0.94);
      border-bottom: 1px solid var(--rule);
      backdrop-filter: blur(16px);
    }
    .nav {
      width: min(1400px, calc(100% - 48px));
      min-height: 72px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }
    .nav h1 { margin: 0; font-size: 1rem; }
    .brand {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      font-weight: 720;
      letter-spacing: -0.02em;
    }
    .site-logo {
      width: 34px;
      height: 34px;
      display: grid;
      place-items: center;
      color: var(--paper);
      background: var(--ink);
      font-family: Georgia, "Times New Roman", serif;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 1.75rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .nav-links a {
      position: relative;
      padding: 1.55rem 0 1.45rem;
      color: var(--ink-soft);
      text-decoration: none;
      font-size: 0.82rem;
      font-weight: 650;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nav-links a:hover, .nav-links a.active { color: var(--ink); }
    .nav-links a.active::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: -1px;
      left: 0;
      height: 3px;
      background: var(--accent);
    }

    .container {
      width: min(1400px, calc(100% - 48px));
      margin: 0 auto;
      padding: 3.5rem 0 5rem;
    }
    .page-intro {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(260px, 420px);
      gap: 3rem;
      align-items: end;
      padding-bottom: 2.25rem;
      border-bottom: 1px solid var(--rule-strong);
    }
    .eyebrow {
      margin: 0 0 0.7rem;
      color: var(--accent-dark);
      font-size: 0.74rem;
      font-weight: 750;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }
    .page-title {
      max-width: 880px;
      margin: 0;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(3.2rem, 7vw, 6.8rem);
      font-weight: 400;
      letter-spacing: -0.065em;
      line-height: 0.9;
    }
    .page-description {
      margin: 0;
      color: var(--ink-soft);
      font-size: 1rem;
      line-height: 1.75;
    }

    .stats { margin: 0; padding: 1.2rem 0; border-bottom: 1px solid var(--rule); }
    .stats-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .stat-item { padding: 0.3rem 1.4rem; border-left: 1px solid var(--rule); }
    .stat-item:first-child { padding-left: 0; border-left: 0; }
    .stat-number {
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.65rem;
      line-height: 1;
      font-variant-numeric: tabular-nums;
    }
    .stat-label {
      margin-top: 0.4rem;
      color: var(--ink-faint);
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .loading {
      padding: 1rem 0;
      color: var(--ink-soft);
      font-family: Georgia, "Times New Roman", serif;
      font-style: italic;
    }

    .filters {
      position: sticky;
      top: 72px;
      z-index: 10;
      display: grid;
      grid-template-columns: minmax(240px, 1fr) minmax(180px, 0.45fr) minmax(150px, 0.3fr) auto;
      gap: 0.75rem;
      align-items: end;
      margin: 0 -12px;
      padding: 1rem 12px;
      background: rgba(243, 239, 230, 0.95);
      border-bottom: 1px solid var(--rule);
      backdrop-filter: blur(16px);
    }
    .filters.without-platform { grid-template-columns: minmax(240px, 1fr) minmax(150px, 0.3fr) auto; }
    .filter-group { display: grid; gap: 0.35rem; }
    .filter-group label {
      color: var(--ink-faint);
      font-size: 0.66rem;
      font-weight: 750;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .filter-group input, .filter-group select {
      width: 100%;
      height: 42px;
      padding: 0 0.8rem;
      color: var(--ink);
      background: var(--white);
      border: 1px solid var(--rule-strong);
      border-radius: 0;
    }
    .filter-group input:focus, .filter-group select:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
    .filter-info {
      min-width: 150px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.65rem;
      color: var(--ink-soft);
      font-size: 0.76rem;
      white-space: nowrap;
    }
    .clear-filters-btn {
      padding: 0;
      color: var(--accent-dark);
      background: none;
      border: 0;
      cursor: pointer;
      font-size: 0.76rem;
      font-weight: 700;
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    .collection-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
      gap: 0;
      margin-top: 1.75rem;
      background: var(--rule);
      border: 1px solid var(--rule);
    }
    .item-card {
      position: relative;
      min-width: 0;
      min-height: 288px;
      display: flex;
      flex-direction: column;
      padding: 1.4rem;
      background: var(--white);
      box-shadow: inset -1px -1px 0 var(--rule);
      transition: background 150ms ease;
    }
    .item-card:hover { background: #fffaf0; }
    .item-index {
      margin-bottom: 1.3rem;
      color: var(--ink-faint);
      font-size: 0.67rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      font-variant-numeric: tabular-nums;
    }
    .item-title {
      margin: 0 0 1rem;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.45rem;
      font-weight: 400;
      letter-spacing: -0.025em;
      line-height: 1.1;
    }
    .item-details { display: grid; gap: 0.55rem; }
    .item-detail {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      color: var(--ink-soft);
      font-size: 0.78rem;
    }
    .item-detail > span:last-child { text-align: right; }
    .item-detail-label {
      color: var(--ink-faint);
      font-size: 0.64rem;
      font-weight: 750;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .platform-info { display: inline-flex; align-items: center; gap: 0.45rem; min-width: 0; }
    .platform-name { overflow: hidden; max-width: 160px; text-overflow: ellipsis; white-space: nowrap; }
    .platform-icon { width: 22px; height: 22px; object-fit: contain; }
    .quality-indicator {
      display: inline-block;
      width: 7px;
      height: 7px;
      margin-left: 5px;
      border-radius: 50%;
      vertical-align: 1px;
    }
    .quality-excellent { background: #3c7550; }
    .quality-good { background: #b47b28; }
    .quality-fair { background: #b9472e; }
    .item-note {
      margin: 1rem 0 0;
      padding-left: 0.8rem;
      color: var(--ink-soft);
      border-left: 2px solid var(--accent);
      font-family: Georgia, "Times New Roman", serif;
      font-size: 0.86rem;
      font-style: italic;
    }
    .item-actions { margin-top: auto; padding-top: 1.25rem; }
    .external-link {
      color: var(--ink);
      font-size: 0.72rem;
      font-weight: 750;
      letter-spacing: 0.08em;
      text-decoration-color: var(--accent);
      text-underline-offset: 4px;
      text-transform: uppercase;
    }
    .empty-state { grid-column: 1 / -1; padding: 5rem 2rem; text-align: center; background: var(--white); }
    .empty-state strong { display: block; font-family: Georgia, serif; font-size: 1.6rem; font-weight: 400; }
    .empty-state span { color: var(--ink-soft); font-size: 0.85rem; }

    .home-hero { padding-top: 2rem; }
    .home-hero .page-intro { min-height: 440px; }
    .home-sections {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 2rem;
      background: var(--rule);
      border: 1px solid var(--rule);
    }
    .section-card {
      min-height: 300px;
      display: flex;
      flex-direction: column;
      padding: 1.6rem;
      background: var(--white);
      box-shadow: inset -1px 0 0 var(--rule);
      text-decoration: none;
      transition: background 150ms ease;
    }
    .section-card:hover { background: #fffaf0; }
    .section-number { color: var(--accent-dark); font-size: 0.7rem; font-weight: 750; letter-spacing: 0.14em; }
    .section-card h2 {
      margin: auto 0 0.55rem;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 2.3rem;
      font-weight: 400;
      letter-spacing: -0.045em;
    }
    .section-card p { max-width: 28ch; margin: 0; color: var(--ink-soft); font-size: 0.85rem; }
    .section-count { margin-top: 1.25rem; font-size: 0.7rem; font-weight: 750; letter-spacing: 0.1em; text-transform: uppercase; }
    .site-footer {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.5rem 0 0;
      color: var(--ink-faint);
      font-size: 0.74rem;
    }
    .site-footer a { text-underline-offset: 3px; }

    @media (max-width: 900px) {
      .page-intro { grid-template-columns: 1fr; gap: 1.5rem; }
      .home-hero .page-intro { min-height: 360px; }
      .filters, .filters.without-platform { grid-template-columns: 1fr 1fr; }
      .filter-info { justify-content: flex-start; }
      .home-sections { grid-template-columns: 1fr; }
      .section-card { min-height: 220px; box-shadow: inset 0 -1px 0 var(--rule); }
    }
    @media (max-width: 680px) {
      .nav { width: min(100% - 28px, 1400px); min-height: 62px; align-items: flex-start; flex-direction: column; gap: 0.25rem; padding-top: 0.75rem; }
      .nav-links { width: 100%; gap: 1.1rem; overflow-x: auto; }
      .nav-links a { display: block; padding: 0.65rem 0 0.8rem; font-size: 0.68rem; }
      .container { width: min(100% - 28px, 1400px); padding: 2.5rem 0 4rem; }
      .page-title { font-size: clamp(3rem, 17vw, 4.8rem); }
      .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem 0; }
      .stat-item:nth-child(3) { padding-left: 0; border-left: 0; }
      .filters, .filters.without-platform { position: static; grid-template-columns: 1fr; margin: 0; padding: 1rem 0; }
      .filter-info { height: auto; }
      .collection-grid { grid-template-columns: 1fr; }
      .item-card { min-height: 260px; }
      .site-footer { flex-direction: column; }
    }
    @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
  </style>
`;
