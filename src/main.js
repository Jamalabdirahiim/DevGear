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
    id: 1,
    title: "Dell UltraSharp 4K",
    category: "Monitor",
    image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u2723qe/media-gallery/monitor-u2723qe-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=872&qlt=100,1&resMode=sharp2&size=872,804&chrss=full",
    link: "https://amzn.to/3NJ3HeX",
    badge: "Editor's Choice",
    keyword: "Best 4K monitor",
    platform: ["Mac", "Windows"]
  },
  {
    id: 2,
    title: "Divoom Ditoo-Pro",
    category: "Viral",
    image: "https://divoom.com/cdn/shop/files/gempages_512109010883707816-4bb47ddc-be67-450f-8efb-4ef8b26c402d.png?v=14376486518071211302",
    link: "https://amzn.to/4jVQ605",
    badge: "Viral Hit",
    keyword: "Viral desk gadget",
    platform: ["Mac", "Windows"]
  },
  {
    id: 3,
    title: "Sony WH-1000XM5",
    category: "Audio",
    image: "https://d1ncau8tqf99kp.cloudfront.net/converted/103364_original_local_1200x1050_v3_converted.webp",
    link: "https://amzn.to/4pVypyY",
    badge: "Deep Work",
    keyword: "Best focus headphones",
    platform: ["Mac", "Windows"],
    description: "Block out the noise in a busy cafe or dorm. These are the only headphones that let me code in deep focus for 4 hours straight."
  },
  {
    id: 4,
    title: "Anker Prime 27k",
    category: "Power",
    image: "https://cdn.shopify.com/s/files/1/0493/9834/9974/files/Rectangle1_885945a5-b5d8-439f-bc99-54bf72715ff4_1600x.png?v=1762766510",
    link: "https://amzn.to/4ra5PLd",
    badge: "Pro Choice",
    keyword: "Best power bank",
    platform: ["Mac", "Windows"]
  },
  {
    id: 5,
    title: "CalDigit TS4",
    category: "Dock",
    image: "https://www.caldigit.com/wp-content/uploads/2021/12/TS4_Thunderbolt-4-Dock_Laptop-Charging1000px_Version04.jpg",
    link: "https://amzn.to/4jTup0o",
    keyword: "Best Thunderbolt 4 dock",
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
    platform: ["Mac", "Windows"]
  },
  {
    id: 7,
    title: "BenQ ScreenBar Halo",
    category: "Light",
    image: "https://image.benq.com/is/image/benqco/together45?$ResponsivePreset$&fmt=png-alpha",
    link: "https://amzn.to/3ZtHtQG",
    keyword: "Best light bar",
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
    keyword: "Best office chair",
    platform: ["Mac", "Windows"],
    description: "The best budget ergonomic chair for long coding nights. Essential for back health when you're at the desk for 10+ hours."
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
    <div class="hero group">
      <img 
        src="/hero-mesh.png" 
        alt="Deep Dark Gradient Mesh" 
        class="hero-img"
        onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2000';"
        loading="lazy"
      />
      <div class="hero-overlay">
        <h1 class="hero-h1">
          The Best <span class="text-transparent bg-clip-text bg-gradient-hero">Developer Desk Setup</span>.
        </h1>
        <p class="hero-p">
          Curated gear for focus and aesthetics. Compatible with Mac & Windows.
        </p>
        <div class="hero-trust">
          <span>✅ Verified for Mac & PC</span>
        </div>
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
        <div class="card-footer">
          <div class="platform-tags">
            ${(product.platform || []).map(p => `<span class="platform-tag ${p.toLowerCase()}">${escapeHTML(p)}</span>`).join('')}
          </div>
          <span class="card-cta">Check Price on Amazon</span>
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
      title: "Dell UltraSharp 4K",
      link: "https://amzn.to/3NJ3HeX",
      category: "Monitor",
      image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u2723qe/media-gallery/monitor-u2723qe-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=872&qlt=100,1&resMode=sharp2&size=872,804&chrss=full",
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
      image: "https://d1ncau8tqf99kp.cloudfront.net/converted/103364_original_local_1200x1050_v3_converted.webp",
      badge: "Silence"
    }
  ],
  5000: [
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
      // Focus page: render only focus-related products
      const focusFilter = (p) => ['Monitor', 'Audio', 'Keyboard', 'Light', 'Dock'].includes(p.category);
      renderGrid('#focus-grid', focusFilter);
    } else if (checklistGrid) {
      // Checklist page: render all products as "Recommended Picks"
      renderGrid('#checklist-grid');
    } else {
      // Homepage: render all
      if (heroContainer) renderHero();
      if (gridContainer) renderGrid();
      // initCalculator(); // Temporarily removed
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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
