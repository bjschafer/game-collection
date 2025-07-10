export const getSharedStyles = () => `
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      color: #333;
    }
    
    .header {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
      color: #667eea;
      font-size: 1.8rem;
      font-weight: 700;
    }
    
    .nav h1 a {
      text-decoration: none;
      color: inherit;
      transition: opacity 0.3s ease;
    }
    
    .nav h1 a:hover {
      opacity: 0.8;
    }
    
    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
    }
    
    .nav-links a {
      text-decoration: none;
      color: #555;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    
    .nav-links a:hover, .nav-links a.active {
      background: #667eea;
      color: white;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    .loading {
      text-align: center;
      padding: 4rem;
      color: white;
      font-size: 1.2rem;
    }
    
    .loading::after {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-top: 3px solid white;
      border-radius: 50%;
      margin-left: 10px;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .collection-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }
    
    .item-card {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
    }
    
    .item-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    }
    
    .item-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #333;
      margin-bottom: 0.5rem;
      line-height: 1.3;
    }
    
    .item-details {
      display: grid;
      gap: 0.3rem;
      font-size: 0.9rem;
      color: #666;
    }
    
    .item-detail {
      display: flex;
      justify-content: space-between;
    }
    
    .item-detail-label {
      font-weight: 500;
      color: #555;
    }
    
    .item-note {
      margin-top: 0.8rem;
      padding: 0.8rem;
      background: rgba(102, 126, 234, 0.1);
      border-radius: 6px;
      font-size: 0.85rem;
      color: #555;
      font-style: italic;
    }
    
    .quality-indicator {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-left: 5px;
    }
    
    .quality-excellent { background: #10b981; }
    .quality-good { background: #f59e0b; }
    .quality-fair { background: #ef4444; }
    .quality-unknown { background: #6b7280; }
    
    .stats {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .stats h2 {
      color: #667eea;
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
    }
    
    .stat-item {
      text-align: center;
      padding: 1rem;
      background: rgba(102, 126, 234, 0.1);
      border-radius: 8px;
    }
    
    .stat-number {
      font-size: 2rem;
      font-weight: 700;
      color: #667eea;
    }
    
    .stat-label {
      font-size: 0.9rem;
      color: #666;
      margin-top: 0.5rem;
    }
    
    .filters {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      display: grid;
      grid-template-columns: 1fr 1fr auto;
      gap: 1.5rem;
      align-items: end;
    }
    
    .filter-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .filter-group label {
      font-weight: 500;
      color: #555;
      font-size: 0.9rem;
    }
    
    .filter-group input,
    .filter-group select {
      padding: 0.75rem;
      border: 2px solid rgba(102, 126, 234, 0.2);
      border-radius: 8px;
      font-size: 1rem;
      background: white;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
    
    .filter-group input:focus,
    .filter-group select:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    .filter-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 0.9rem;
      color: #666;
      font-weight: 500;
    }
    
    .clear-filters-btn {
      padding: 0.5rem 1rem;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 500;
      transition: background 0.3s ease;
    }
    
    .clear-filters-btn:hover {
      background: #5a6fd8;
    }
    
    @media (max-width: 768px) {
      .nav {
        flex-direction: column;
        gap: 1rem;
      }
      
      .nav-links {
        gap: 1rem;
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
        justify-self: start;
      }
    }
  </style>
`;