import { inject } from '@vercel/analytics';

inject();

const escapeHTML = (str) => {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

const products = [
  {
    id: 10,
    title: "Apple Mac mini (M4)",
    category: "Computer",
    image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25717370/DSC_1249.jpg?quality=90&strip=all&crop=16.666666666667,0,66.666666666667,100",
    link: "https://www.amazon.com/Apple-2024-Desktop-Computer-10%E2%80%91core/dp/B0DLBTPDCS?th=1&linkCode=ll1&tag=jamalshop0f-20&linkId=5246b69944c8dfc444889137a64a0cdc&language=en_US&ref_=as_li_ss_tl",
    badge: "Flagship",
    keyword: "Best mini PC",
    platform: ["Mac"],
    description: "The smallest, most powerful brain for your desk. With the M4 chip, this is the ultimate budget-to-pro transition for developers who need speed without the bulk.",
    whyThisPick: "Unmatched performance-per-watt for coding workflows",
    notIdealFor: ["You need Windows-native development", "You require extensive GPU expansion"]
  },
  {
    id: 1,
    title: "Dell UltraSharp 4K",
    category: "Monitor",
    image: "https://i.dell.com/sites/csimages/Video_Imagery/all/ultrasharp-monitor-u3223qe-u2722qe-1280.jpg",
    link: "https://amzn.to/3NJ3HeX",
    badge: "Editor's Choice",
    keyword: "Best 4K monitor",
    description: "The gold standard for coding displays. Crisp text, perfect color accuracy, and built-in USB-C hub connectivity.",
    platform: ["Mac", "Windows"],
    whyThisPick: "Best text clarity for long coding sessions",
    notIdealFor: ["You need ultra-wide displays", "You want high refresh rate gaming"]
  },
  {
    id: 2,
    title: "Divoom Ditoo-Pro",
    category: "Viral",
    image: "https://i1.wp.com/techacute.com/wp-content/uploads/2020/06/PSX_20200603_011735.jpg?resize=696%2C522&quality=95&strip=all&ssl=1",
    link: "https://amzn.to/4jVQ605",
    badge: "Viral Hit",
    keyword: "Viral desk gadget",
    description: "More than just a speaker. It's a pixel art display, a mini-game console, and the ultimate retro desk accessory.",
    platform: ["Mac", "Windows"],
    whyThisPick: "Doubles as desk decor and functional Bluetooth speaker",
    notIdealFor: ["You need audiophile-grade sound", "You prefer minimal desk aesthetics"]
  },
  {
    id: 3,
    title: "Sony WH-1000XM5",
    category: "Audio",
    image: "https://highxtar.com/wp-content/uploads/2023/06/IMG_5175.jpg",
    link: "https://amzn.to/4pVypyY",
    badge: "Deep Work",
    keyword: "Best focus headphones",
    platform: ["Mac", "Windows"],
    description: "Block out the noise in a busy cafe or dorm. These are the only headphones that let me code in deep focus for 4 hours straight.",
    whyThisPick: "Industry-leading ANC for deep work sessions",
    notIdealFor: ["You prefer wired-only setups", "You need open-back soundstage"]
  },
  {
    id: 4,
    title: "Anker Prime 27k",
    category: "Power",
    image: "https://cdn.mos.cms.futurecdn.net/Jqkrpqzc5E27MRQdyhH2h3.jpg",
    link: "https://amzn.to/4ra5PLd",
    badge: "Pro Choice",
    keyword: "Best power bank",
    description: "Massive capacity that can charge a MacBook Pro repeatedly. The smart display lets you monitor input/output in real-time.",
    platform: ["Mac", "Windows"]
  },
  {
    id: 5,
    title: "CalDigit TS4",
    category: "Dock",
    image: "https://www.caldigit.com/wp-content/uploads/2021/12/TS4_Thunderbolt-4-Dock_Laptop-Charging1000px_Version04.jpg",
    link: "https://amzn.to/4jTup0o",
    keyword: "Best Thunderbolt 4 dock",
    description: "The King of Docks. 18 ports to connect everything from monitors to SD cards with a single Thunderbolt cable.",
    platform: ["Mac", "Windows"]
  },
  {
    id: 6,
    title: "Keychron Q1 HE",
    category: "Keyboard",
    image: "https://www.keychron.com/cdn/shop/files/Keychron-Q1-HE-QMK-Wireless-Custom-Keyboard-Shell-White.jpg?v=1754623218&width=1214",
    link: "https://amzn.to/4tdI86K",
    badge: "New Tech",
    keyword: "Best programming keyboard",
    description: "Hall Effect magnetic switches allow for rapid trigger and adjustable actuation. The ultimate custom keyboard experience.",
    platform: ["Mac", "Windows"],
    whyThisPick: "Magnetic switches for precise, customizable keystrokes",
    notIdealFor: ["You're new to mechanical keyboards", "You need built-in numpad"]
  },
  {
    id: 7,
    title: "BenQ ScreenBar Halo",
    category: "Light",
    image: "https://techjioblog.com/wp-content/uploads/2023/09/BenQ-Screenbar-Halo-monitor-lightbar-cover.jpg",
    link: "https://amzn.to/3ZtHtQG",
    keyword: "Best light bar",
    description: "Saves desk space and eliminates screen glare. The wireless controller and backlighting make it the premium choice.",
    platform: ["Mac", "Windows"]
  },
  {
    id: 8,
    title: "Logitech MX Master 3S",
    category: "Mouse",
    image: "https://www.logitech.com/content/dam/logitech/en/products/mice/mx-master-3s/mx-master-3s-graphite-ident.jpg", // Official Logitech asset
    link: "https://amzn.to/3LMFfJc",
    badge: "Essential",
    keyword: "Best ergonomic mouse",
    platform: ["Mac", "Windows"],
    description: "The industry standard for productivity. Once you use the horizontal scroll for your code, you can never go back."
  },
  {
    id: 9,
    title: "SIHOO M57 Ergonomic Mesh Office Chair",
    category: "Chair",
    image: "https://www.kzchair.com/cdn/shop/products/H5d13d89beeee483b816e7b38b577c4adT.png_960x960_0bad36c7-456a-4e1e-aab6-99392650aa71_1800x1800.png?v=1664608353",
    link: "https://amzn.to/4sXROC3",
    badge: "Comfort",
    keyword: "Best budget chair",
    platform: ["Mac", "Windows"],
    description: "The best budget ergonomic chair for long coding nights. Essential for back health when you're at the desk for 10+ hours."
  },
  // --- New Budget Products ($500 Tier) ---
  {
    id: 11,
    title: "Creative Pebble V3",
    category: "Audio",
    image: "/assets/pebble.jpg", // Local asset
    link: "https://amzn.to/3O2Iugd",
    badge: "Best Value",
    keyword: "Best budget speakers",
    platform: ["Mac", "Windows"],
    description: "Minimalist USB-C speakers that look great and sound surprisingly full. Perfect for a clean, wire-free desk."
  },
  {
    id: 12,
    title: "Logitech G305 Lightspeed",
    category: "Mouse",
    image: "/assets/g305.jpg", // Local asset
    link: "https://amzn.to/4khfSfs",
    badge: "Top Seller",
    keyword: "Best budget mouse",
    platform: ["Mac", "Windows"],
    description: "The undisputed king of budget wireless mice. Zero latency, months of battery life, and a clean shape."
  },
  {
    id: 13,
    title: "Keychron V1 QMK",
    category: "Keyboard",
    image: "/assets/keychron.jpg", // Local asset
    link: "https://amzn.to/3M6MPyf",
    badge: "Entry Custom",
    keyword: "Best budget keyboard",
    platform: ["Mac", "Windows"],
    description: "Your gateway to the custom keyboard hobby. Hot-swappable, programmable, and feels incredible out of the box."
  },
  {
    id: 14,
    title: "KOORUI 24N1A Monitor",
    category: "Monitor",
    image: "/assets/koorui.jpg", // Local asset
    link: "https://amzn.to/4qcdXdc",
    badge: "Bestseller",
    keyword: "Best budget screen",
    platform: ["Mac", "Windows"],
    description: "An IPS panel with 99% sRGB coverage for ~$100. The perfect secondary vertical monitor or budget main screen."
  }
];

const handleImageError = (img) => {
  img.onerror = null; // Prevent infinite loop
  img.src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop'; // Technical dark placeholder
  img.style.opacity = '0.5';
};

const renderHero = () => {
  const heroContainer = document.querySelector('#hero-container');
  if (!heroContainer) return;

  heroContainer.innerHTML = `
    <div class="hero-section group">
      <img 
        src="/hero-mesh.png" 
        alt="Deep Dark Gradient Mesh" 
        class="hero-img"
        onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2000';"
        loading="lazy"
      />
      <div class="hero-overlay">
        <h1 class="hero-h1">
          <span class="text-transparent bg-clip-text bg-gradient-hero">Build Your Dream</span><br>
          <span class="text-white">Desk Setup Today.</span>
        </h1>
        <p class="hero-subtitle">
          I’m a 22yo developer and student building DevGear in public. I curate the high-performance tools I actually use to survive 10-hour coding marathons and university projects. No corporate fluff—just gear I've manually verified for 2026 developer workflows so you can stop scrolling and start shipping. Secure checkout via Amazon.
        </p>
        <div class="hero-bottom-badge" style="margin-top: 1.5rem; margin-bottom: 2rem; display: none;">
          <span class="secure-checkout-tag" style="position: relative; top: 0;">✓ Secure Amazon Checkout</span>
        </div>
        <div class="founder-badge">
          <span class="founder-icon">✓</span>
          <span class="founder-text">Curated by a developer, not a store</span>
        </div>
        <div class="hero-trust">
          <span>✅ Verified for Mac & PC</span>
          <span class="pulse-dot"></span>
        </div>
        <a href="#developer-guide" class="hero-curation-link">How we choose our gear →</a>
      </div>
    </div>
  `;
};

const renderGrid = (containerId = '#grid-container', filterFn = null) => {
  const gridContainer = document.querySelector(containerId);
  if (!gridContainer) return;

  const filteredProducts = filterFn ? products.filter(filterFn) : products;

  if (!filteredProducts || filteredProducts.length === 0) {
    gridContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Curating latest hardware...</p>';
    return;
  }

  gridContainer.innerHTML = filteredProducts.map(product => `
    <a href="${product.link || '#'}" target="_self" class="product-card" aria-label="View ${escapeHTML(product.title)} on Amazon">
      ${product.badge ? `<div class="badge-top-pick">${escapeHTML(product.badge)}</div>` : ''}
      <div class="card-img-container">
        <img 
          src="${product.image || ''}" 
          alt="${escapeHTML(product.title || 'Product')}" 
          class="card-img" 
          loading="lazy"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000&opacity=0.3';"
        />
        ${product.keyword ? `<div class="badge-keyword">${escapeHTML(product.keyword)}</div>` : ''}
      </div>
      <div class="card-content">
        <div class="card-category">${escapeHTML(product.category || 'Gear')}</div>
        <h3 class="card-title">${escapeHTML(product.title || 'Untitled Hardware')}</h3>
        ${product.description ? `<p class="card-description">${escapeHTML(product.description)}</p>` : ''}
        ${product.whyThisPick ? `
          <div class="why-this-pick">
            <span class="why-label">Why this pick:</span>
            <span class="why-text">${escapeHTML(product.whyThisPick)}</span>
          </div>
        ` : ''}
        ${product.notIdealFor && product.notIdealFor.length > 0 ? `
          <div class="not-ideal-section">
            <span class="not-ideal-label">Not ideal if:</span>
            <ul class="not-ideal-list">
              ${product.notIdealFor.map(reason => `<li>– ${escapeHTML(reason)}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
          <div class="card-footer-wrap">
            <div class="verification-badge">✓ Mac & Windows Verified</div>
            <div class="card-footer">
              <div class="platform-tags">
                ${(product.platform || []).map(p => `<span class="platform-tag ${p.toLowerCase()}">${escapeHTML(p)}</span>`).join('')}
              </div>
              <span class="card-cta">Check Price on Amazon</span>
            </div>
          </div>
      </div>
    </a>
  `).join('');
};

const bundles = {
  500: [
    {
      title: "Keychron C3 Pro",
      link: "https://amzn.to/3B4HjA7",
      category: "Keyboard",
      image: "https://m.media-amazon.com/images/I/61hn0-nLw+L._AC_SL1500_.jpg",
      badge: "Value King"
    },
    {
      title: "Logitech G305 Wireless",
      link: "https://amzn.to/4t6V7B2",
      category: "Mouse",
      image: "https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g305/g305-gallery-1.png?v=1",
      badge: "Best Seller"
    },
    {
      title: "KOORUI 24\" 1080p Monitor",
      link: "https://amzn.to/3ZtHtQG",
      category: "Monitor",
      image: "https://m.media-amazon.com/images/I/71Xyg-d6BFL._AC_SL1500_.jpg",
      badge: "165Hz"
    }
  ],
  1500: [
    {
      title: "Apple Mac mini (M4)",
      link: "https://amzn.to/3LOdy2J",
      category: "Computer",
      image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25717370/DSC_1249.jpg?quality=90&strip=all&crop=16.666666666667,0,66.666666666667,100",
      badge: "Flagship"
    },
    {
      title: "Dell UltraSharp 4K",
      link: "https://amzn.to/3NJ3HeX",
      category: "Monitor",
      image: "https://i.dell.com/sites/csimages/Video_Imagery/all/ultrasharp-monitor-u3223qe-u2722qe-1280.jpg",
      badge: "Crisp Text"
    },
    {
      title: "Logitech MX Master 3S",
      link: "https://amzn.to/3LMFfJc",
      category: "Mouse",
      image: "https://www.logitech.com/content/dam/logitech/en/products/mice/mx-master-3s/mx-master-3s-graphite-ident.jpg",
      badge: "Productivity"
    },
    {
      title: "Sony WH-1000XM5",
      link: "https://amzn.to/4pVypyY",
      category: "Audio",
      image: "https://highxtar.com/wp-content/uploads/2023/06/IMG_5175.jpg",
      badge: "Silence"
    }
  ],
  5000: [
    {
      title: "Apple Mac mini (M4)",
      link: "https://amzn.to/3LOdy2J",
      category: "Computer",
      image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25717370/DSC_1249.jpg?quality=90&strip=all&crop=16.666666666667,0,66.666666666667,100",
      badge: "Flagship"
    },
    {
      title: "Samsung Odyssey OLED G9",
      link: "https://amzn.to/3NJ3HeX",
      category: "Monitor",
      image: "https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming/06072023/Odyssey_OLED_G9_G95SC_Front_Silver_RGB.jpg?$product-details-jpg$",
      badge: "Endgame"
    },
    {
      title: "Herman Miller Aeron",
      link: "https://amzn.to/4sXROC3",
      category: "Chair",
      image: "https://s7d2.scene7.com/is/image/hermanmiller/20220202_AERON_Gaming_B_Black_Front_Mid?$1000$",
      badge: "Buy It For Life"
    },
    {
      title: "CalDigit TS4 Dock",
      link: "https://amzn.to/4jTup0o",
      category: "Dock",
      image: "https://www.caldigit.com/wp-content/uploads/2021/12/TS4_Thunderbolt-4-Dock_Laptop-Charging1000px_Version04.jpg",
      badge: "The Hub"
    }
  ]
};

const renderBundle = (tier) => {
  const container = document.querySelector('#bundle-results');
  if (!container) return;

  const items = bundles[tier] || [];
  container.innerHTML = items.map(item => `
    <a href="${item.link}" target="_blank" class="product-card" aria-label="View ${escapeHTML(item.title)} on Amazon">
      ${item.badge ? `<div class="badge-top-pick">${escapeHTML(item.badge)}</div>` : ''}
      <div class="card-img-container">
        <img 
          src="${item.image || ''}" 
          alt="${escapeHTML(item.title)}" 
          class="card-img" 
          loading="lazy"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000&opacity=0.3';"
        />
      </div>
      <div class="card-content">
        <div class="card-category">${escapeHTML(item.category)}</div>
        <h3 class="card-title">${escapeHTML(item.title)}</h3>
        <div class="card-footer">
          <span class="card-cta">Check Price on Amazon</span>
        </div>
      </div>
    </a>
  `).join('');

  // Re-attach GA tracking
  container.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const product = card.getAttribute('aria-label');
      if (typeof gtag === 'function') {
        gtag('event', 'click', {
          'event_category': 'affiliate_link',
          'event_label': product,
          'value': 1
        });
      }
    });
  });
};

const initCalculator = () => {
  const buttons = document.querySelectorAll('.bundle-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderBundle(btn.dataset.tier);
    });
  });

  // Render default bundle
  renderBundle(1500);
};

const init = () => {
  try {
    const heroContainer = document.querySelector('#hero-container');
    const gridContainer = document.querySelector('#grid-container');
    const focusGrid = document.querySelector('#focus-grid');
    const checklistGrid = document.querySelector('#checklist-grid');
    const appContainer = document.querySelector('#app');

    // Detect page and render accordingly
    if (focusGrid) {
      // Focus page: ONLY products that enhance focus (Audio for noise cancellation, Monitor for visual clarity, Light for eye comfort)
      const focusFilter = (p) => ['Monitor', 'Audio', 'Light'].includes(p.category);
      renderGrid('#focus-grid', focusFilter);
    } else if (checklistGrid) {
      // Checklist page: render all products as "Recommended Picks"
      renderGrid('#checklist-grid');
    } else {
      // Homepage: render all default
      if (heroContainer) renderHero();
      if (gridContainer) renderGrid(); // Initial render

      // Smart Gear Filter Logic
      const filterPills = document.querySelectorAll('.filter-pill');
      if (filterPills.length > 0) {
        filterPills.forEach(pill => {
          pill.addEventListener('click', () => {
            // 1. Visual state
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            // 2. Filter logic
            const filterValue = pill.dataset.filter;

            // Add fade-out effect for smooth transition
            const grid = document.querySelector('#grid-container');
            if (grid) {
              grid.style.opacity = '0';

              setTimeout(() => {
                if (filterValue === 'all') {
                  renderGrid();
                } else if (filterValue === '500') {
                  // Budget Tier (~$500): G305 mouse, V1 keyboard, KOORUI monitor, Pebble speakers, Divoom, SIHOO chair
                  const budgetIds = [12, 13, 14, 11, 2, 9]; // IDs: 12=G305, 13=V1, 14=KOORUI, 11=Pebble, 2=Divoom, 9=SIHOO
                  renderGrid('#grid-container', (p) => budgetIds.includes(p.id));
                } else if (filterValue === '1500') {
                  // Professional Tier (~$1,500): MX Master, Q1 HE, Dell 4K, Sony XM5, SIHOO chair, ScreenBar
                  const proIds = [8, 6, 1, 3, 9, 7]; // IDs: 8=MX Master 3S, 6=Q1 HE, 1=Dell 4K, 3=Sony XM5, 9=SIHOO, 7=ScreenBar
                  renderGrid('#grid-container', (p) => proIds.includes(p.id));
                } else if (filterValue === '5000') {
                  // Elite Tier (~$5,000): Mac mini, Dell 4K, Sony XM5, CalDigit TS4, Q1 HE, MX Master, ScreenBar
                  const eliteIds = [10, 1, 3, 5, 6, 8, 7]; // IDs: 10=Mac mini, 1=Dell 4K, 3=Sony XM5, 5=CalDigit, 6=Q1 HE, 8=MX Master, 7=ScreenBar
                  renderGrid('#grid-container', (p) => eliteIds.includes(p.id));
                }

                // Fade back in
                grid.style.opacity = '1';
              }, 200);
            }
          });
        });

        // Set "Show All" as active initially
        const allBtn = document.querySelector('[data-filter="all"]');
        if (allBtn) allBtn.classList.add('active');
      }
    }

    // Final check to ensure app shows up even if parts failed
    if (appContainer) {
      setTimeout(() => appContainer.classList.add('loaded'), 50);
    }
  } catch (error) {
    console.error('Initialization error:', error);
    const appContainer = document.querySelector('#app');
    if (appContainer) appContainer.classList.add('loaded'); // Force show so user isn't stuck on white screen
  }
};

// Global Catch-all to prevent silent failures
window.addEventListener('error', (event) => {
  console.warn('Recovered from global error:', event.message);
  const appContainer = document.querySelector('#app');
  if (appContainer && !appContainer.classList.contains('loaded')) {
    appContainer.classList.add('loaded');
  }
});

// Header Scroll Effect
const handleScroll = () => {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', handleScroll);

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  init();
  handleScroll(); // Check scroll position immediately
});
