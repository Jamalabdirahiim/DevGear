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
    image: "https://divoom.com/cdn/shop/products/Ditoo-Pro-Green_1024x1024.jpg?v=1683617870",
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
    platform: ["Mac", "Windows"]
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

const renderGrid = () => {
  const gridContainer = document.querySelector('#grid-container');
  if (!gridContainer) return;
  if (!products || products.length === 0) {
    gridContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Curating latest hardware...</p>';
    return;
  }

  gridContainer.innerHTML = products.map(product => `
    <a href="${product.link || '#'}" target="_blank" rel="noopener noreferrer" class="product-card" aria-label="View ${escapeHTML(product.title)} on Amazon">
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
        <div class="card-footer">
          <div class="platform-tags">
            ${(product.platform || []).map(p => `<span class="platform-tag ${p.toLowerCase()}">${escapeHTML(p)}</span>`).join('')}
          </div>
          <span class="card-cta">View on Amazon →</span>
        </div>
      </div>
    </a>
  `).join('');
};

const init = () => {
  try {
    const heroContainer = document.querySelector('#hero-container');
    const gridContainer = document.querySelector('#grid-container');
    const appContainer = document.querySelector('#app');

    if (heroContainer) renderHero();
    if (gridContainer) renderGrid();

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
