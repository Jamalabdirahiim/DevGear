console.log('DevGear: main.js loaded');

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
    platform: ["Mac", "Windows"],
    whyThisPick: "27,650mAh capacity with real-time power monitoring display",
    notIdealFor: ["You rarely work away from outlets", "You need ultra-lightweight portability"]
  },
  {
    id: 5,
    title: "CalDigit TS4",
    category: "Dock",
    image: "https://www.caldigit.com/wp-content/uploads/2021/12/TS4_Thunderbolt-4-Dock_Laptop-Charging1000px_Version04.jpg",
    link: "https://amzn.to/4jTup0o",
    keyword: "Best Thunderbolt 4 dock",
    description: "The King of Docks. 18 ports to connect everything from monitors to SD cards with a single Thunderbolt cable.",
    platform: ["Mac", "Windows"],
    whyThisPick: "18 ports including dual 4K displays via single cable",
    notIdealFor: ["You don't have Thunderbolt 4 devices", "You prefer wireless connectivity"]
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
    platform: ["Mac", "Windows"],
    whyThisPick: "Zero desk footprint with wireless dimming control",
    notIdealFor: ["You prefer traditional desk lamps", "Your monitor is curved"]
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
    description: "The industry standard for productivity. Once you use the horizontal scroll for your code, you can never go back.",
    whyThisPick: "Horizontal scroll wheel perfect for wide code files",
    notIdealFor: ["You prefer lightweight gaming mice", "You need left-handed ergonomics"]
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
    description: "The best budget ergonomic chair for long coding nights. Essential for back health when you're at the desk for 10+ hours.",
    whyThisPick: "Full lumbar support at budget price for long sessions",
    notIdealFor: ["You're over 6'2\\\" tall", "You want Herman Miller quality"]
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
    description: "Minimalist USB-C speakers that look great and sound surprisingly full. Perfect for a clean, wire-free desk.",
    whyThisPick: "USB-C powered with zero desk clutter for under $30",
    notIdealFor: ["You need bass-heavy audio", "You podcast/stream professionally"]
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
    description: "The undisputed king of budget wireless mice. Zero latency, months of battery life, and a clean shape.",
    whyThisPick: "Gaming-grade wireless sensor at $40",
    notIdealFor: ["You need ergonomic hand support", "You want RGB lighting"]
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
    description: "Your gateway to the custom keyboard hobby. Hot-swappable, programmable, and feels incredible out of the box.",
    whyThisPick: "QMK programmable with hot-swap at entry price",
    notIdealFor: ["You need wireless connectivity", "You want pre-lubed switches"]
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
    description: "An IPS panel with 99% sRGB coverage for ~$100. The perfect secondary vertical monitor or budget main screen.",
    whyThisPick: "99% sRGB color accuracy for under $100",
    notIdealFor: ["You need 4K resolution", "You want high refresh rate gaming"]
  }
];

const handleImageError = (img) => {
  img.onerror = null; // Prevent infinite loop
  img.src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop'; // Technical dark placeholder
  img.style.opacity = '0.5';
};

const renderNavbar = () => `
  <nav class="navbar sticky-header">
    <div class="nav-wrap">
      <a href="/" class="logo-link">
        <img src="/logo-transparent.png" alt="DevGear Logo" class="logo-img" />
        <span class="logo-version">v1.2</span>
      </a>
      
      <!-- Desktop Navigation -->
      <div class="nav-links">
        <a href="/" class="nav-pill active">Home</a>
        <a href="/focus.html" class="nav-pill">Focus</a>
        <a href="/checklist.html" class="nav-pill">Checklist</a>
      </div>

      <div class="filter-pills-container" style="display: flex; gap: 0.5rem; margin-left: auto; padding-left: 2rem;">
         <button class="nav-badge-pill filter-pill" data-filter="all">Show All</button>
      </div>

      <!-- Hamburger Menu Button -->
      <button class="mobile-menu-toggle" aria-label="Toggle Menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>

    <!-- Mobile Navigation Overlay -->
    <div class="mobile-nav">
      <a href="/" class="mobile-nav-link active">Home</a>
      <a href="/focus.html" class="mobile-nav-link">Focus</a>
      <a href="/checklist.html" class="mobile-nav-link">Checklist</a>
      <div class="mobile-nav-divider"></div>
      <div class="mobile-filter-title">Quick Filters</div>
      <button class="mobile-nav-link filter-pill" data-filter="500">Budget ($500)</button>
      <button class="mobile-nav-link filter-pill" data-filter="1500">Professional ($1,500)</button>
      <button class="mobile-nav-link filter-pill" data-filter="5000">Elite ($5,000)</button>
    </div>
  </nav>
`;

const renderApp = () => {
  const app = document.querySelector('#app');
  if (!app) return;

  app.innerHTML = `
    ${renderNavbar()}
    <div id="hero-container"></div>
    <div id="spline-section"></div>
    <div class="container mx-auto px-4 py-8">
      <div id="grid-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
    </div>
    ${renderFooter()}
  `;

  renderHero();
  renderSpline();
  renderGrid();
  setupFilters(); // Re-attach event listeners after DOM update
};

const renderHero = () => {
  const heroContainer = document.querySelector('#hero-container');
  if (!heroContainer) return;

  heroContainer.innerHTML = `
    <div style="position:relative;background-color:#0D0F1E;min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;overflow:hidden;padding:110px 40px 100px;">

      <!-- Ambient glow orbs -->
      <div style="position:absolute;top:15%;left:5%;width:420px;height:420px;background:radial-gradient(circle,rgba(124,58,237,0.18) 0%,transparent 70%);pointer-events:none;z-index:1;"></div>
      <div style="position:absolute;bottom:20%;right:5%;width:350px;height:350px;background:radial-gradient(circle,rgba(6,182,212,0.13) 0%,transparent 70%);pointer-events:none;z-index:1;"></div>

      <!-- Main two-column grid -->
      <div style="display:grid;grid-template-columns:1fr 1fr;align-items:stretch;gap:0;width:100%;max-width:1300px;position:relative;z-index:2;flex:1;">

        <!-- Text Content -->
        <div style="display:flex;flex-direction:column;justify-content:center;padding-right:3rem;">

          <!-- Trust pills -->
          <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1.6rem;">
            <span style="display:inline-flex;align-items:center;gap:0.35rem;padding:0.35rem 0.9rem;border-radius:9999px;font-size:0.72rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;background:rgba(139,92,246,0.15);color:#a78bfa;border:1px solid rgba(139,92,246,0.3);">✦ Verified for Mac &amp; PC</span>
            <span style="display:inline-flex;align-items:center;gap:0.35rem;padding:0.35rem 0.9rem;border-radius:9999px;font-size:0.72rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;background:rgba(45,212,191,0.1);color:#2dd4bf;border:1px solid rgba(45,212,191,0.25);">⚡ Curated by a Developer</span>
          </div>

          <!-- Gradient headline -->
          <h1 style="font-size:clamp(2.6rem,4.2vw,4rem);font-weight:900;line-height:1.07;letter-spacing:-0.03em;margin:0 0 1.3rem;background:linear-gradient(135deg,#e879f9 0%,#a855f7 28%,#6366f1 55%,#22d3ee 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Build Your Dream<br>Desk Setup Today.</h1>

          <!-- Subtitle -->
          <p style="font-size:1.05rem;line-height:1.75;color:#94a3b8;margin:0 0 2rem;max-width:90%;">
            I'm a 22yo developer, and I built <span style="color:#c4b5fd;font-weight:600;">DevGear</span> to solve a simple problem: finding gear that actually survives a <span style="color:#22d3ee;font-weight:600;">10-hour coding sprint</span>. No fluff, no paid reviews—just code-verified tools for deep focus.
          </p>

          <!-- CTA button -->
          <div style="margin-bottom:2.5rem;">
            <button
              onclick="document.querySelector('#grid-container').scrollIntoView({behavior:'smooth'})"
              style="display:inline-flex;align-items:center;gap:0.6rem;padding:0.9rem 2.1rem;font-size:0.95rem;font-weight:700;letter-spacing:0.03em;border:none;border-radius:9999px;cursor:pointer;background:linear-gradient(135deg,#7c3aed,#4f46e5,#0891b2);color:#fff;box-shadow:0 0 22px rgba(124,58,237,0.45),0 4px 16px rgba(0,0,0,0.3);transition:all 0.3s ease;"
              onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 0 38px rgba(124,58,237,0.65),0 8px 26px rgba(0,0,0,0.4)';"
              onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 0 22px rgba(124,58,237,0.45),0 4px 16px rgba(0,0,0,0.3)';"
            >
              Explore Gear
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>

          <!-- Stats row -->
          <div style="display:flex;gap:2rem;align-items:center;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,0.07);">
            <div style="display:flex;flex-direction:column;gap:0.2rem;">
              <span style="font-size:1.6rem;font-weight:800;background:linear-gradient(90deg,#a855f7,#6366f1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;">50+</span>
              <span style="font-size:0.72rem;color:#64748b;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;">Products Tested</span>
            </div>
            <div style="width:1px;height:36px;background:rgba(255,255,255,0.08);"></div>
            <div style="display:flex;flex-direction:column;gap:0.2rem;">
              <span style="font-size:1.6rem;font-weight:800;background:linear-gradient(90deg,#22d3ee,#6366f1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;">2.4k+</span>
              <span style="font-size:0.72rem;color:#64748b;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;">Dev Setups Built</span>
            </div>
            <div style="width:1px;height:36px;background:rgba(255,255,255,0.08);"></div>
            <div style="display:flex;flex-direction:column;gap:0.2rem;">
              <span style="font-size:1.6rem;font-weight:800;background:linear-gradient(90deg,#f59e0b,#ef4444);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;">4.9★</span>
              <span style="font-size:0.72rem;color:#64748b;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;">Community Score</span>
            </div>
          </div>

        </div>

        <!-- 3D Headphone Spline (Right side) -->
        <div style="position:relative;width:100%;height:100%;min-height:520px;overflow:hidden;">
          <iframe
            src="https://my.spline.design/techinspired3dassetsheadphone-ZYOPMQGoJace0HIXR0gN4yTR/"
            frameborder="0"
            style="position:absolute;top:-8%;left:-5%;width:110%;height:132%;border:none;background:transparent;"
            title="3D Headphone"
            allowfullscreen
          ></iframe>
        </div>

      </div>

      <!-- Scroll cue — pinned to very bottom -->
      <div style="display:flex;flex-direction:column;align-items:center;gap:0.4rem;padding:1.8rem 0 1.4rem;z-index:3;position:relative;animation:heroCueFade 2.5s ease-in-out infinite;">
        <span style="font-size:0.68rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(148,163,184,0.45);">Scroll to explore</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(148,163,184,0.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation:heroBounce 1.6s ease-in-out infinite;">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>

    </div>

    <style>
      @keyframes heroCueFade { 0%,100%{opacity:0.45} 50%{opacity:1} }
      @keyframes heroBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }
    </style>
  `;
};



const renderSpline = () => {
  // Spline 3D scene removed
  const section = document.querySelector('#spline-section');
  if (section) section.innerHTML = '';
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

const renderFooter = () => `
  <footer style="position:relative;background:#080A14;overflow:hidden;">

    <!-- ===== LIGHT BEAM ===== -->
    <div style="
      pointer-events:none;
      position:absolute;
      bottom:0;
      left:50%;
      transform:translateX(-50%);
      width:700px;
      height:580px;
      background:conic-gradient(from 270deg at 50% 100%, transparent 30%, rgba(124,58,237,0.28) 43%, rgba(99,102,241,0.22) 50%, rgba(124,58,237,0.28) 57%, transparent 70%);
      filter:blur(2px);
      z-index:0;
    "></div>
    <!-- soft inner glow core -->
    <div style="
      pointer-events:none;
      position:absolute;
      bottom:0;
      left:50%;
      transform:translateX(-50%);
      width:320px;
      height:340px;
      background:radial-gradient(ellipse at 50% 100%, rgba(139,92,246,0.35) 0%, transparent 70%);
      z-index:0;
    "></div>

    <!-- ===== CTA STRIPE ===== -->
    <div style="position:relative;z-index:2;text-align:center;padding:5rem 2rem 3.5rem;">
      <p style="font-size:0.72rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#6366f1;margin-bottom:1rem;">Ready to upgrade?</p>
      <h2 style="font-size:clamp(1.8rem,3vw,2.6rem);font-weight:900;letter-spacing:-0.03em;margin:0 0 0.6rem;background:linear-gradient(135deg,#e879f9,#a855f7,#6366f1,#22d3ee);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Build. Ship. Code in Flow.</h2>
      <p style="color:#475569;font-size:0.95rem;max-width:480px;margin:0 auto;">Every product on DevGear was tested on a real dev setup — no sponsored noise.</p>
    </div>

    <!-- ===== 3-COL FOOTER GRID ===== -->
    <div style="position:relative;z-index:2;max-width:1100px;margin:0 auto;padding:0 2rem 4rem;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:2.5rem;">

      <!-- Brand col -->
      <div>
        <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:1.1rem;">
          <img src="/logo-transparent.png" alt="DevGear" style="height:32px;width:auto;" />
          <span style="font-size:0.65rem;font-weight:700;letter-spacing:0.12em;color:#4f46e5;text-transform:uppercase;background:rgba(79,70,229,0.12);padding:0.2rem 0.55rem;border-radius:999px;border:1px solid rgba(99,102,241,0.3);">v1.2</span>
        </div>
        <p style="color:#475569;font-size:0.88rem;line-height:1.7;margin:0 0 1.4rem;max-width:260px;">A curated gear list built by a 22-year-old developer who cares deeply about focus, ergonomics, and clean setups.</p>
        <div style="display:flex;gap:0.7rem;">
          <span style="padding:0.3rem 0.8rem;border-radius:999px;font-size:0.7rem;font-weight:700;letter-spacing:0.06em;background:rgba(139,92,246,0.12);color:#a78bfa;border:1px solid rgba(139,92,246,0.25);">✦ Curated by a Developer</span>
        </div>
      </div>

      <!-- Nav col -->
      <div>
        <p style="font-size:0.7rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#334155;margin-bottom:1.1rem;">Navigate</p>
        <div style="display:flex;flex-direction:column;gap:0.6rem;">
          <a href="/" style="color:#64748b;font-size:0.9rem;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#a78bfa'" onmouseout="this.style.color='#64748b'">Home</a>
          <a href="/focus.html" style="color:#64748b;font-size:0.9rem;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#a78bfa'" onmouseout="this.style.color='#64748b'">Focus Mode</a>
          <a href="/checklist.html" style="color:#64748b;font-size:0.9rem;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#a78bfa'" onmouseout="this.style.color='#64748b'">Checklist</a>
        </div>
      </div>

      <!-- Trust col -->
      <div>
        <p style="font-size:0.7rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#334155;margin-bottom:1.1rem;">Trust & Security</p>
        <p style="color:#475569;font-size:0.85rem;line-height:1.65;margin:0 0 1rem;">Orders go through Amazon directly. We never see or store your payment details.</p>
        <div style="display:flex;flex-direction:column;gap:0.55rem;">
          <span style="color:#22d3ee;font-size:0.82rem;font-weight:600;">🔒 SSL Encrypted</span>
          <span style="color:#22c55e;font-size:0.82rem;font-weight:600;">✓ Amazon Verified</span>
        </div>
      </div>

    </div>

    <!-- ===== BOTTOM BAR ===== -->
    <div style="position:relative;z-index:2;border-top:1px solid rgba(255,255,255,0.05);padding:1.2rem 2rem;display:flex;justify-content:space-between;align-items:center;max-width:1100px;margin:0 auto;flex-wrap:wrap;gap:0.8rem;">
      <p style="color:#334155;font-size:0.8rem;margin:0;">&copy; 2026 DevGear. Independently Curated.</p>
      <p style="color:#1e293b;font-size:0.75rem;margin:0;">As an Amazon Associate, I earn from qualifying purchases. &nbsp;<a href="/privacy.html" style="color:#475569;text-decoration:none;" onmouseover="this.style.color='#a78bfa'" onmouseout="this.style.color='#475569'">Privacy</a> &nbsp;|&nbsp; <a href="/terms.html" style="color:#475569;text-decoration:none;" onmouseover="this.style.color='#a78bfa'" onmouseout="this.style.color='#475569'">Terms</a></p>
    </div>

  </footer>
`;

// --- Unified Event Delegation System ---
// Using top-level delegation for better performance and reliability

const initEventListeners = () => {
  console.log('DevGear: Initializing Event Delegation...');

  document.addEventListener('click', (e) => {
    // 1. Mobile Menu Toggle
    const toggle = e.target.closest('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (toggle && mobileNav) {
      console.log('DevGear: Mobile menu toggled');
      toggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
      return;
    }

    // 2. Navigation / Page Links (Close mobile nav on click)
    const isNavLink = e.target.closest('.mobile-nav-link');
    if (isNavLink && mobileNav && mobileNav.classList.contains('active')) {
      console.log('DevGear: Closing mobile menu');
      const realToggle = document.querySelector('.mobile-menu-toggle');
      if (realToggle) realToggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.classList.remove('no-scroll');
      // If it's a filter pill in the mobile nav, don't return, let the next check handle it
    }

    // 3. Smart Gear Filters
    const pill = e.target.closest('.filter-pill');
    if (pill) {
      const filterValue = pill.dataset.filter;
      console.log('DevGear: Filter clicked:', filterValue);

      // Sync visual state for ALL pills with this filter across UI
      document.querySelectorAll('.filter-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.filter === filterValue);
      });

      // Find the appropriate grid container for the current page
      const gridId = document.querySelector('#focus-grid') ? '#focus-grid' :
        document.querySelector('#checklist-grid') ? '#checklist-grid' :
          '#grid-container';

      const grid = document.querySelector(gridId);
      if (grid) {
        grid.style.opacity = '0';
        grid.style.transform = 'translateY(10px)';

        setTimeout(() => {
          if (filterValue === 'all') {
            renderGrid(gridId);
          } else if (filterValue === '500') {
            const budgetIds = [12, 13, 14, 11, 2, 9];
            renderGrid(gridId, (p) => budgetIds.includes(p.id));
          } else if (filterValue === '1500') {
            const proIds = [8, 6, 1, 3, 9, 7];
            renderGrid(gridId, (p) => proIds.includes(p.id));
          } else if (filterValue === '5000') {
            const eliteIds = [10, 1, 3, 5, 6, 8, 7];
            renderGrid(gridId, (p) => eliteIds.includes(p.id));
          }

          grid.style.opacity = '1';
          grid.style.transform = 'translateY(0)';
        }, 250);
      }
    }
  });
};


const init = () => {
  try {
    const focusGrid = document.querySelector('#focus-grid');
    const checklistGrid = document.querySelector('#checklist-grid');
    const appContainer = document.querySelector('#app');

    // Detect page and render accordingly
    if (focusGrid) {
      const focusFilter = (p) => ['Monitor', 'Audio', 'Light'].includes(p.category);
      renderGrid('#focus-grid', focusFilter);
    } else if (checklistGrid) {
      renderGrid('#checklist-grid');
    } else {
      // Homepage
      renderHero();
      renderSpline();
      renderGrid();
    }

    // Initialize Event System once
    initEventListeners();

    // Final check to ensure app shows up even if parts failed
    if (appContainer) {
      setTimeout(() => appContainer.classList.add('loaded'), 50);
    }
  } catch (error) {
    console.error('Initialization error:', error);
    const appContainer = document.querySelector('#app');
    if (appContainer) appContainer.classList.add('loaded');
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
