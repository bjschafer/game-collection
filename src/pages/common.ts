export const getNavigation = (activePage: string = '') => `
  <header class="header">
    <nav class="nav" aria-label="Primary navigation">
      <h1><a class="brand" href="/"><span class="site-logo" aria-hidden="true">bjs</span> Braxton's Collection</a></h1>
      <ul class="nav-links">
        <li><a href="/" ${activePage === 'home' ? 'class="active" aria-current="page"' : ''}>Index</a></li>
        <li><a href="/games" ${activePage === 'games' ? 'class="active" aria-current="page"' : ''}>Games</a></li>
        <li><a href="/consoles" ${activePage === 'consoles' ? 'class="active" aria-current="page"' : ''}>Consoles</a></li>
        <li><a href="/accessories" ${activePage === 'accessories' ? 'class="active" aria-current="page"' : ''}>Accessories</a></li>
      </ul>
    </nav>
  </header>
`;

export const getCollectionIntro = (title: string, description: string) => `
  <section class="page-intro">
    <div>
      <p class="eyebrow">Collection / ${title}</p>
      <h2 class="page-title">${title}</h2>
    </div>
    <p class="page-description">${description}</p>
  </section>
`;

export const getFilters = (itemType: string, includePlatform: boolean = true) => `
  <div id="filters" class="filters${includePlatform ? '' : ' without-platform'}">
    <div class="filter-group">
      <label for="search">Find ${itemType}</label>
      <input type="search" id="search" placeholder="Search by title…" autocomplete="off" />
    </div>
    ${
      includePlatform
        ? `<div class="filter-group">
      <label for="platform-filter">Platform</label>
      <select id="platform-filter"><option value="">Every platform</option></select>
    </div>`
        : ''
    }
    <div class="filter-group">
      <label for="sort">Order</label>
      <select id="sort">
        <option value="title">Title, A–Z</option>
        <option value="newest">Recently added</option>
        <option value="oldest">Oldest additions</option>
        ${includePlatform ? '<option value="platform">Platform</option>' : ''}
      </select>
    </div>
    <div class="filter-info" aria-live="polite">
      <span id="filter-count">Loading…</span>
      <button id="clear-filters" class="clear-filters-btn" type="button" hidden>Reset</button>
    </div>
  </div>
`;

export const getJavaScript = (apiEndpoint: string) => `
  <script>
    let allItems = [];
    let filteredItems = [];

    const escapeHtml = value => String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');

    async function loadCollection() {
      try {
        const response = await fetch('${apiEndpoint}');
        if (!response.ok) throw new Error('Request failed with status ' + response.status);
        allItems = await response.json();
        document.getElementById('content').remove();
        setupControls();
        applyFilters();
      } catch (error) {
        console.error('Error loading collection:', error);
        document.getElementById('content').innerHTML =
          '<div class="loading">Could not load the collection. Please try again.</div>';
      }
    }

    function setupControls() {
      const platformFilter = document.getElementById('platform-filter');
      if (platformFilter) {
        const platforms = [...new Set(allItems.map(item => item.platform_name))]
          .sort((a, b) => a.localeCompare(b));
        platformFilter.insertAdjacentHTML(
          'beforeend',
          platforms.map(platform => '<option value="' + escapeHtml(platform) + '">' + escapeHtml(platform) + '</option>').join(''),
        );
      }

      document.getElementById('search').addEventListener('input', applyFilters);
      document.getElementById('sort').addEventListener('change', applyFilters);
      platformFilter?.addEventListener('change', applyFilters);
      document.getElementById('clear-filters').addEventListener('click', clearFilters);
    }

    function applyFilters() {
      const searchTerm = document.getElementById('search').value.trim().toLocaleLowerCase();
      const selectedPlatform = document.getElementById('platform-filter')?.value || '';
      const sort = document.getElementById('sort').value;

      filteredItems = allItems.filter(item =>
        item.title.toLocaleLowerCase().includes(searchTerm) &&
        (!selectedPlatform || item.platform_name === selectedPlatform),
      );

      filteredItems.sort((a, b) => {
        if (sort === 'newest') return b.created_at - a.created_at;
        if (sort === 'oldest') return a.created_at - b.created_at;
        if (sort === 'platform') {
          return a.platform_name.localeCompare(b.platform_name) || a.title.localeCompare(b.title);
        }
        return a.title.localeCompare(b.title);
      });

      displayStats(filteredItems);
      displayItems(filteredItems);
      updateFilterInfo(Boolean(searchTerm || selectedPlatform));
    }

    function clearFilters() {
      document.getElementById('search').value = '';
      const platformFilter = document.getElementById('platform-filter');
      if (platformFilter) platformFilter.value = '';
      applyFilters();
      document.getElementById('search').focus();
    }

    function updateFilterInfo(hasActiveFilters) {
      const showing = filteredItems.length;
      document.getElementById('filter-count').textContent = showing === allItems.length
        ? allItems.length + ' items'
        : showing + ' of ' + allItems.length;
      document.getElementById('clear-filters').hidden = !hasActiveFilters;
    }

    function displayStats(items) {
      const platforms = new Set(items.map(item => item.platform_id)).size;
      const regions = new Set(items.map(item => item.country_id)).size;
      const newestTimestamp = items.reduce((newest, item) => Math.max(newest, item.created_at), 0);
      const newestYear = newestTimestamp ? new Date(newestTimestamp * 1000).getFullYear() : '—';

      document.getElementById('stats').innerHTML = '<div class="stats-grid">' +
        stat(items.length, 'Items') + stat(platforms, 'Platforms') +
        stat(regions, 'Regions') + stat(newestYear, 'Latest addition') + '</div>';
    }

    function stat(value, label) {
      return '<div class="stat-item"><div class="stat-number">' + escapeHtml(value) +
        '</div><div class="stat-label">' + label + '</div></div>';
    }

    function displayItems(items) {
      const itemsElement = document.getElementById('items');
      if (!items.length) {
        itemsElement.innerHTML = '<div class="empty-state"><strong>No matches.</strong>' +
          '<span>Try another title or clear the platform filter.</span></div>';
        return;
      }

      itemsElement.innerHTML = items.map((item, index) => {
        const platform = '<div class="item-detail"><span class="item-detail-label">Platform</span>' +
          '<span class="platform-info"><span class="platform-name" title="' +
          escapeHtml(item.platform_name) + '">' + escapeHtml(item.platform_name_short) + '</span></span></div>';
        const condition = item.item_quality
          ? '<div class="item-detail"><span class="item-detail-label">Condition</span><span>' +
            Math.round(item.item_quality * 100) + '% ' + qualityIndicator(item.item_quality) + '</span></div>'
          : '';
        const note = item.note?.trim()
          ? '<p class="item-note">' + escapeHtml(item.note) + '</p>'
          : '';
        const priceGuide = item.vgpc_url
          ? '<div class="item-actions"><a href="' + escapeHtml(item.vgpc_url) +
            '" target="_blank" rel="noopener noreferrer" class="external-link">Price guide ↗</a></div>'
          : '';
        const added = new Date(item.created_at * 1000)
          .toLocaleDateString(undefined, { month: 'short', year: 'numeric' });

        return '<article class="item-card"><div class="item-heading"><div class="item-index">' +
          String(index + 1).padStart(3, '0') + '</div><img src="' + escapeHtml(item.platform_icon) +
          '" alt="" class="platform-icon" width="120" height="48" loading="lazy" decoding="async" /></div><h3 class="item-title">' +
          escapeHtml(item.title) + '</h3><div class="item-details">' + platform +
          '<div class="item-detail"><span class="item-detail-label">Region</span><span>' +
          escapeHtml(item.country_flag) + ' ' + escapeHtml(item.country_name) + '</span></div>' +
          condition + '<div class="item-detail"><span class="item-detail-label">Added</span><span>' +
          added + '</span></div></div>' + note + priceGuide + '</article>';
      }).join('');
    }

    function qualityIndicator(quality) {
      const level = quality >= 0.8 ? 'excellent' : quality >= 0.5 ? 'good' : 'fair';
      return '<span class="quality-indicator quality-' + level + '" aria-hidden="true"></span>';
    }

    loadCollection();
  </script>
`;
