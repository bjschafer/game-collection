export const getNavigation = (activePage: string = '') => `
  <header class="header">
    <nav class="nav">
      <h1><a href="/"><span class="site-logo">GC</span> Braxton's Collection</a></h1>
      <ul class="nav-links">
        <li><a href="/" ${activePage === 'home' ? 'class="active"' : ''}>Home</a></li>
        <li><a href="/games" ${activePage === 'games' ? 'class="active"' : ''}>Games</a></li>
        <li><a href="/consoles" ${activePage === 'consoles' ? 'class="active"' : ''}>Consoles</a></li>
        <li><a href="/accessories" ${activePage === 'accessories' ? 'class="active"' : ''}>Accessories</a></li>
      </ul>
    </nav>
  </header>
`;

export const getQualityIndicator = (quality: number | null): string => {
  if (quality === null || quality === 0)
    return '<span class="quality-indicator quality-unknown"></span>';
  if (quality >= 0.8) return '<span class="quality-indicator quality-excellent"></span>';
  if (quality >= 0.5) return '<span class="quality-indicator quality-good"></span>';
  return '<span class="quality-indicator quality-fair"></span>';
};

export const getJavaScript = (apiEndpoint: string, itemType: string) => `
  <script>
    let allItems = [];
    let filteredItems = [];
    let gameyeData = {};
    
    async function loadCollection() {
      try {
        const response = await fetch('${apiEndpoint}');
        allItems = await response.json();
        filteredItems = [...allItems];
        
        // Clear loading state
        document.getElementById('content').innerHTML = '';
        
        // Setup filters if this is the games page
        if ('${itemType}' === 'games') {
          setupFilters();
        }
        
        displayStats(filteredItems);
        displayItems(filteredItems);
        
        // Initialize filter info
        if ('${itemType}' === 'games') {
          updateFilterInfo();
        }
        
        // GAMEYE integration disabled for now due to rate limiting issues
        // await loadGameyeData();
      } catch (error) {
        console.error('Error loading ${itemType}:', error);
        document.getElementById('content').innerHTML = 
          '<div class="loading">Error loading ${itemType}. Please try again.</div>';
      }
    }
    
    async function loadGameyeData() {
      // Process items in batches to avoid overwhelming the API
      const batchSize = 5;
      const batches = [];
      
      for (let i = 0; i < allItems.length; i += batchSize) {
        batches.push(allItems.slice(i, i + batchSize));
      }
      
      let processedCount = 0;
      const totalCount = allItems.length;
      
      for (const batch of batches) {
        const promises = batch.map(async item => {
          try {
            const response = await fetch(\`/api/gameye/\${item.item_id}\`);
            if (response.ok) {
              gameyeData[item.item_id] = await response.json();
              processedCount++;
              
              // Update progress
              const progress = Math.round((processedCount / totalCount) * 100);
              console.log(\`Loading GAMEYE data: \${progress}% (\${processedCount}/\${totalCount})\`);
              
              // Update just this specific item instead of re-rendering everything
              updateSingleItem(item);
            }
          } catch (error) {
            console.error(\`Error loading GAMEYE data for item \${item.item_id}:\`, error);
            processedCount++;
          }
        });
        
        await Promise.all(promises);
        
        // Add a small delay between batches to be respectful to the API
        if (batches.indexOf(batch) < batches.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
      
      console.log('GAMEYE data loading completed');
    }
    
    function updateSingleItem(item) {
      // Only update if this item is currently visible (in filtered results)
      if (!filteredItems.some(filteredItem => filteredItem.item_id === item.item_id)) {
        return;
      }
      
      const itemElement = document.querySelector(\`[data-item-id="\${item.item_id}"]\`);
      if (!itemElement) return;
      
      const gameye = gameyeData[item.item_id];
      let coverArt = null;
      
      if (gameye && gameye.images && gameye.images["0"] && gameye.images["0"].length > 0) {
        const originalUrl = \`https://dt.gameye.app/data/streaming/images/items/v1/thumbs/large/\${gameye.images["0"][0].File}\`;
        coverArt = \`/api/image-proxy?url=\${encodeURIComponent(originalUrl)}\`;
      }
      
      // Find the cover placeholder and update it
      const coverContainer = itemElement.querySelector('.item-cover-container');
      if (coverContainer && coverArt) {
        coverContainer.innerHTML = \`<div class="item-cover"><img src="\${coverArt}" alt="\${item.title} cover" loading="lazy" /></div>\`;
      }
    }
    
    function setupFilters() {
      const platformFilter = document.getElementById('platform-filter');
      const searchInput = document.getElementById('search');
      
      if (!platformFilter || !searchInput) return;
      
      // Populate platform filter
      const platforms = [...new Set(allItems.map(item => item.platform_name))]
        .sort()
        .map(platform => \`<option value="\${platform}">\${platform}</option>\`)
        .join('');
      
      platformFilter.innerHTML = '<option value="">All Platforms</option>' + platforms;
      
      // Add event listeners
      searchInput.addEventListener('input', applyFilters);
      platformFilter.addEventListener('change', applyFilters);
      
      const clearButton = document.getElementById('clear-filters');
      if (clearButton) {
        clearButton.addEventListener('click', clearFilters);
      }
    }
    
    function applyFilters() {
      const searchTerm = document.getElementById('search')?.value.toLowerCase() || '';
      const selectedPlatform = document.getElementById('platform-filter')?.value || '';
      
      filteredItems = allItems.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm);
        const matchesPlatform = !selectedPlatform || item.platform_name === selectedPlatform;
        
        return matchesSearch && matchesPlatform;
      });
      
      displayStats(filteredItems);
      displayItems(filteredItems);
      updateFilterInfo();
    }
    
    function clearFilters() {
      const searchInput = document.getElementById('search');
      const platformFilter = document.getElementById('platform-filter');
      
      if (searchInput) searchInput.value = '';
      if (platformFilter) platformFilter.value = '';
      
      applyFilters();
    }
    
    function updateFilterInfo() {
      const filterCount = document.getElementById('filter-count');
      const clearButton = document.getElementById('clear-filters');
      if (!filterCount) return;
      
      const total = allItems.length;
      const showing = filteredItems.length;
      const hasActiveFilters = showing !== total;
      
      if (showing === total) {
        filterCount.textContent = \`Showing all \${total} games\`;
      } else {
        filterCount.textContent = \`Showing \${showing} of \${total} games\`;
      }
      
      // Show/hide clear button based on active filters
      if (clearButton) {
        clearButton.style.display = hasActiveFilters ? 'block' : 'none';
      }
    }
    
    function displayStats(items) {
      const totalItems = items.length;
      const withNotes = items.filter(item => item.note && item.note.trim()).length;
      const withQuality = items.filter(item => item.item_quality !== null && item.item_quality !== 0).length;
      const avgQuality = items.filter(item => item.item_quality !== null && item.item_quality !== 0)
        .reduce((sum, item, _, arr) => sum + item.item_quality / arr.length, 0);
      
      document.getElementById('stats').innerHTML = \`
        <h2>${itemType.charAt(0).toUpperCase() + itemType.slice(1)} Collection Stats</h2>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">\${totalItems}</div>
            <div class="stat-label">Total Items</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">\${withQuality}</div>
            <div class="stat-label">With Quality</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">\${withNotes}</div>
            <div class="stat-label">With Notes</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">\${avgQuality ? (avgQuality * 100).toFixed(0) + '%' : 'N/A'}</div>
            <div class="stat-label">Avg Quality</div>
          </div>
        </div>
      \`;
    }
    
    function displayItems(items) {
      const html = items.map(item => {
        const encyclopediaUrl = \`https://www.gameye.app/encylopedia/\${item.item_id}\`;
        
        return \`
        <div class="item-card" data-item-id="\${item.item_id}">
          <div class="item-content">
            <div class="item-title">\${item.title}</div>
            <div class="item-details">
              \${'${itemType}' !== 'consoles' ? \`
              <div class="item-detail">
                <span class="item-detail-label">Platform:</span>
                <span class="platform-info">
                  <img src="\${item.platform_icon}" alt="\${item.platform_name}" class="platform-icon" loading="lazy" />
                  <span class="platform-name" title="\${item.platform_name}">\${item.platform_name_short}</span>
                </span>
              </div>\` : ''}
              <div class="item-detail">
                <span class="item-detail-label">Region:</span>
                <span>\${item.country_flag} \${item.country_name}</span>
              </div>
              \${item.item_quality !== null && item.item_quality !== 0 ? \`
              <div class="item-detail">
                <span class="item-detail-label">Quality:</span>
                <span>
                  \${(item.item_quality * 100).toFixed(0)}%
                  \${getQualityIndicator(item.item_quality)}
                </span>
              </div>\` : ''}
              <div class="item-detail">
                <span class="item-detail-label">Added:</span>
                <span>\${new Date(item.created_at * 1000).toLocaleDateString()}</span>
              </div>
            </div>
            \${item.note && item.note.trim() ? \`<div class="item-note">\${item.note}</div>\` : ''}
            <div class="item-actions">
              <a href="\${encyclopediaUrl}" target="_blank" rel="noopener noreferrer" class="gameye-link">
                View in GAMEYE →
              </a>
            </div>
          </div>
        </div>
      \`;
      }).join('');
      
      document.getElementById('items').innerHTML = html;
    }
    
    function getQualityIndicator(quality) {
      if (quality === null || quality === 0) return '<span class="quality-indicator quality-unknown"></span>';
      if (quality >= 0.8) return '<span class="quality-indicator quality-excellent"></span>';
      if (quality >= 0.5) return '<span class="quality-indicator quality-good"></span>';
      return '<span class="quality-indicator quality-fair"></span>';
    }
    
    
    // Load collection when page loads
    loadCollection();
  </script>
`;
