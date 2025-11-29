export const getSharedStyles = () => `
  <style>
    :root {
      --bg-primary: #0f0f13;
      --bg-secondary: #1a1a23;
      --bg-card: #22222d;
      --bg-card-hover: #2a2a38;
      --accent-primary: #00d4aa;
      --accent-secondary: #ff6b35;
      --accent-tertiary: #7c5cff;
      --text-primary: #f0f0f5;
      --text-secondary: #a0a0b0;
      --text-muted: #6a6a7a;
      --border-subtle: rgba(255, 255, 255, 0.08);
      --border-accent: rgba(0, 212, 170, 0.3);
      --glow-primary: rgba(0, 212, 170, 0.15);
      --glow-secondary: rgba(255, 107, 53, 0.15);
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif;
      background: var(--bg-primary);
      min-height: 100vh;
      color: var(--text-primary);
      line-height: 1.6;
    }
    
    /* Subtle grid pattern overlay */
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
      background-size: 50px 50px;
      pointer-events: none;
      z-index: 0;
    }
    
    .header {
      background: var(--bg-secondary);
      border-bottom: 1px solid var(--border-subtle);
      padding: 1rem 0;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    .nav {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .nav h1 {
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: -0.02em;
    }
    
    .nav h1 a {
      text-decoration: none;
      color: var(--text-primary);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: color 0.2s ease;
    }
    
    .nav h1 a:hover {
      color: var(--accent-primary);
    }
    
    .site-logo {
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-tertiary) 100%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
    }
    
    .nav-links {
      display: flex;
      gap: 0.5rem;
      list-style: none;
    }
    
    .nav-links a {
      text-decoration: none;
      color: var(--text-secondary);
      font-weight: 500;
      font-size: 0.9rem;
      padding: 0.6rem 1rem;
      border-radius: 8px;
      transition: all 0.2s ease;
      position: relative;
    }
    
    .nav-links a:hover {
      color: var(--text-primary);
      background: var(--bg-card);
    }
    
    .nav-links a.active {
      color: var(--accent-primary);
      background: rgba(0, 212, 170, 0.1);
    }
    
    .nav-links a.active::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background: var(--accent-primary);
      border-radius: 1px;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      position: relative;
      z-index: 1;
    }
    
    .loading {
      text-align: center;
      padding: 4rem;
      color: var(--text-secondary);
      font-size: 1.1rem;
    }
    
    .loading::after {
      content: '';
      display: inline-block;
      width: 18px;
      height: 18px;
      border: 2px solid var(--bg-card);
      border-top: 2px solid var(--accent-primary);
      border-radius: 50%;
      margin-left: 12px;
      animation: spin 0.8s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .collection-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.25rem;
      margin-top: 1.5rem;
    }
    
    .item-card {
      background: var(--bg-card);
      border-radius: 12px;
      padding: 1.25rem;
      border: 1px solid var(--border-subtle);
      transition: all 0.25s ease;
      position: relative;
      overflow: hidden;
    }
    
    .item-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--accent-primary), var(--accent-tertiary));
      opacity: 0;
      transition: opacity 0.25s ease;
    }
    
    .item-card:hover {
      background: var(--bg-card-hover);
      border-color: var(--border-accent);
      transform: translateY(-2px);
    }
    
    .item-card:hover::before {
      opacity: 1;
    }
    
    .item-cover-container {
      flex-shrink: 0;
      width: 80px;
      height: 112px;
    }
    
    .item-cover {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 6px;
      background: var(--bg-secondary);
    }
    
    .item-cover img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .item-content {
      flex: 1;
      min-width: 0;
    }
    
    .item-title {
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.75rem;
      line-height: 1.4;
      letter-spacing: -0.01em;
    }
    
    .item-details {
      display: grid;
      gap: 0.5rem;
      font-size: 0.875rem;
    }
    
    .item-detail {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      min-height: 32px;
      color: var(--text-secondary);
    }
    
    .item-detail > span:last-child {
      text-align: right;
      color: var(--text-primary);
    }
    
    .item-detail-label {
      font-weight: 500;
      color: var(--text-muted);
      flex-shrink: 0;
      min-width: 60px;
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
    }
    
    .item-note {
      margin-top: 1rem;
      padding: 0.875rem;
      background: rgba(0, 212, 170, 0.05);
      border-left: 2px solid var(--accent-primary);
      border-radius: 0 6px 6px 0;
      font-size: 0.85rem;
      color: var(--text-secondary);
      font-style: italic;
    }
    
    .quality-indicator {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-left: 6px;
      box-shadow: 0 0 8px currentColor;
    }
    
    .quality-excellent { background: #10b981; color: #10b981; }
    .quality-good { background: #f59e0b; color: #f59e0b; }
    .quality-fair { background: #ef4444; color: #ef4444; }
    .quality-unknown { background: var(--text-muted); color: var(--text-muted); }
    
    .platform-info {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      min-width: 0;
    }
    
    .platform-name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
      max-width: 150px;
    }
    
    .platform-icon {
      width: 28px;
      height: 28px;
      object-fit: contain;
      border-radius: 4px;
      background: var(--bg-secondary);
      border: 1px solid var(--border-subtle);
      padding: 3px;
      flex-shrink: 0;
    }
    
    .stats {
      background: var(--bg-card);
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      border: 1px solid var(--border-subtle);
    }
    
    .stats h2 {
      color: var(--text-primary);
      margin-bottom: 1.25rem;
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: -0.01em;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .stats h2::before {
      content: '';
      width: 4px;
      height: 20px;
      background: var(--accent-primary);
      border-radius: 2px;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 1rem;
    }
    
    .stat-item {
      text-align: center;
      padding: 1.25rem 1rem;
      background: var(--bg-secondary);
      border-radius: 10px;
      border: 1px solid var(--border-subtle);
      transition: all 0.2s ease;
    }
    
    .stat-item:hover {
      border-color: var(--border-accent);
      background: rgba(0, 212, 170, 0.03);
    }
    
    .stat-number {
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--accent-primary);
      letter-spacing: -0.02em;
    }
    
    .stat-label {
      font-size: 0.8rem;
      color: var(--text-muted);
      margin-top: 0.4rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .filters {
      background: var(--bg-card);
      border-radius: 12px;
      padding: 1.25rem;
      margin-bottom: 1.5rem;
      border: 1px solid var(--border-subtle);
      display: grid;
      grid-template-columns: 1fr 1fr auto;
      gap: 1.25rem;
      align-items: end;
    }
    
    .filter-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .filter-group label {
      font-weight: 500;
      color: var(--text-muted);
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .filter-group input,
    .filter-group select {
      padding: 0.75rem 1rem;
      border: 1px solid var(--border-subtle);
      border-radius: 8px;
      font-size: 0.95rem;
      background: var(--bg-secondary);
      color: var(--text-primary);
      transition: all 0.2s ease;
    }
    
    .filter-group input::placeholder {
      color: var(--text-muted);
    }
    
    .filter-group input:focus,
    .filter-group select:focus {
      outline: none;
      border-color: var(--accent-primary);
      box-shadow: 0 0 0 3px var(--glow-primary);
    }
    
    .filter-group select {
      cursor: pointer;
    }
    
    .filter-group select option {
      background: var(--bg-secondary);
      color: var(--text-primary);
    }
    
    .filter-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 0.875rem;
      color: var(--text-muted);
      font-weight: 500;
    }
    
    .clear-filters-btn {
      padding: 0.5rem 1rem;
      background: transparent;
      color: var(--accent-secondary);
      border: 1px solid var(--accent-secondary);
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      transition: all 0.2s ease;
    }
    
    .clear-filters-btn:hover {
      background: var(--accent-secondary);
      color: var(--bg-primary);
    }
    
    .item-actions {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border-subtle);
    }
    
    .gameye-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.875rem;
      background: transparent;
      color: var(--text-muted);
      text-decoration: none;
      border: 1px solid var(--border-subtle);
      border-radius: 6px;
      font-size: 0.8rem;
      font-weight: 500;
      transition: all 0.2s ease;
    }
    
    .gameye-link:hover {
      border-color: var(--accent-primary);
      color: var(--accent-primary);
    }
    
    @media (max-width: 768px) {
      .nav {
        flex-direction: column;
        gap: 1rem;
      }
      
      .nav-links {
        gap: 0.25rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      
      .container {
        padding: 1rem;
      }
      
      .collection-grid {
        grid-template-columns: 1fr;
      }
      
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .filters {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      
      .filter-info {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
      }
    }
  </style>
`;