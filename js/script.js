/**
 * ==========================================================================
 * VELORA LUXURY FASHION E-COMMERCE
 * Pure Vanilla JavaScript (ES6+)
 * Architecture: Clean State-driven UI, Event Delegation, LocalStorage Sync
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ------------------------------------------------------------------------
     1. Product Catalog Data
     ------------------------------------------------------------------------ */
  const PRODUCTS = [
    {
      id: 1,
      name: "Classic Oversized T-Shirt",
      category: "clothing",
      categoryLabel: "Clothing",
      price: 999,
      originalPrice: 1299,
      isNew: true,
      isSale: true,
      rating: 4.8,
      reviews: 142,
      popularity: 95,
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      description: "Crafted from 240 GSM heavy combed organic cotton with dropped shoulders and a boxy silhouette for effortless everyday style.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#171717", "#F5F1EB", "#6B7280"]
    },
    {
      id: 2,
      name: "Premium Cotton Hoodie",
      category: "clothing",
      categoryLabel: "Clothing",
      price: 1799,
      originalPrice: 2399,
      isNew: true,
      isSale: true,
      rating: 4.9,
      reviews: 210,
      popularity: 98,
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      description: "Ultra-soft 450 GSM French terry fleece with ribbed cuffs, double-lined hood, and seamless kangaroo pocket.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["#2B2B2B", "#C2B29F", "#3A4D39"]
    },
    {
      id: 3,
      name: "Relaxed Fit Denim Jeans",
      category: "clothing",
      categoryLabel: "Clothing",
      price: 1499,
      originalPrice: 1999,
      isNew: false,
      isSale: true,
      rating: 4.7,
      reviews: 89,
      popularity: 88,
      image: "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
      description: "13.5oz selvedge-inspired rigid cotton denim with a vintage stone wash finish and tailored relaxed-straight leg cut.",
      sizes: ["30", "32", "34", "36"],
      colors: ["#3D5A80", "#1D2D44", "#E0FBFC"]
    },
    {
      id: 4,
      name: "Minimalist White Sneakers",
      category: "footwear",
      categoryLabel: "Footwear",
      price: 2499,
      originalPrice: 3299,
      isNew: true,
      isSale: true,
      rating: 4.9,
      reviews: 312,
      popularity: 99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
      description: "Full-grain calfskin leather upper paired with durable Italian Margom rubber cupsole and memory foam cushioned insole.",
      sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
      colors: ["#FFFFFF", "#F0EDE6", "#171717"]
    },
    {
      id: 5,
      name: "Everyday Casual Shirt",
      category: "clothing",
      categoryLabel: "Clothing",
      price: 1299,
      originalPrice: 1699,
      isNew: false,
      isSale: true,
      rating: 4.6,
      reviews: 75,
      popularity: 82,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      description: "Breathable pure linen-cotton blend shirt with mother-of-pearl buttons, curved hemline, and modern relaxed collar.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#FFFFFF", "#7E909A", "#B58B63"]
    },
    {
      id: 6,
      name: "Essential Black Jacket",
      category: "clothing",
      categoryLabel: "Clothing",
      price: 2499,
      originalPrice: 3499,
      isNew: true,
      isSale: true,
      rating: 4.9,
      reviews: 184,
      popularity: 96,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      description: "Windproof and water-resistant tailored bomber jacket lined with silky cupro fabric and gunmetal hardware.",
      sizes: ["M", "L", "XL"],
      colors: ["#171717", "#2E282A"]
    },
    {
      id: 7,
      name: "Urban Cargo Pants",
      category: "clothing",
      categoryLabel: "Clothing",
      price: 1699,
      originalPrice: 2199,
      isNew: true,
      isSale: true,
      rating: 4.7,
      reviews: 98,
      popularity: 89,
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      description: "Tactical cotton ripstop trousers featuring articulated knees, deep gusseted pockets, and adjustable ankle cinch cords.",
      sizes: ["30", "32", "34", "36"],
      colors: ["#4A5320", "#171717", "#9E907B"]
    },
    {
      id: 8,
      name: "Premium Leather Wallet",
      category: "accessories",
      categoryLabel: "Accessories",
      price: 899,
      originalPrice: 1199,
      isNew: false,
      isSale: true,
      rating: 4.8,
      reviews: 160,
      popularity: 91,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
      description: "Hand-stitched vegetable-tanned Italian leather bifold wallet with 8 card slots, RFID blocking layer, and cash sleeve.",
      sizes: ["One Size"],
      colors: ["#582F0E", "#171717", "#7F4F24"]
    },
    {
      id: 9,
      name: "Classic Analog Watch",
      category: "accessories",
      categoryLabel: "Accessories",
      price: 2199,
      originalPrice: 2999,
      isNew: true,
      isSale: true,
      rating: 5.0,
      reviews: 240,
      popularity: 97,
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
      description: "Surgical-grade 316L stainless steel timepiece with sapphire crystal glass, Japanese quartz movement, and top-grain leather strap.",
      sizes: ["40mm"],
      colors: ["#D4AF37", "#C0C0C0", "#171717"]
    },
    {
      id: 10,
      name: "Casual Running Shoes",
      category: "footwear",
      categoryLabel: "Footwear",
      price: 2799,
      originalPrice: 3499,
      isNew: false,
      isSale: true,
      rating: 4.8,
      reviews: 115,
      popularity: 90,
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      description: "Lightweight engineered flyknit upper with responsive EVA midsole cushioning and grippy carbon rubber outsoles.",
      sizes: ["UK 7", "UK 8", "UK 9", "UK 10"],
      colors: ["#1F2937", "#E5E7EB", "#D97706"]
    },
    {
      id: 11,
      name: "Minimalist Shoulder Bag",
      category: "accessories",
      categoryLabel: "Accessories",
      price: 1499,
      originalPrice: 1999,
      isNew: true,
      isSale: true,
      rating: 4.9,
      reviews: 190,
      popularity: 94,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
      description: "Structured architectural leather shoulder bag with magnetic flap closure and adjustable gold-tone buckle strap.",
      sizes: ["One Size"],
      colors: ["#B58B63", "#171717", "#F5F1EB"]
    },
    {
      id: 12,
      name: "Premium Summer Sunglasses",
      category: "accessories",
      categoryLabel: "Accessories",
      price: 999,
      originalPrice: 1399,
      isNew: true,
      isSale: true,
      rating: 4.7,
      reviews: 82,
      popularity: 87,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
      description: "Handcrafted Mazzucchelli acetate frame with polarized UV400 protective lenses and custom barrel hinges.",
      sizes: ["One Size"],
      colors: ["#6F4E37", "#171717", "#A89F91"]
    },
    {
      id: 13,
      name: "Italian Suede Chelsea Boots",
      category: "footwear",
      categoryLabel: "Footwear",
      price: 3899,
      originalPrice: 4999,
      isNew: true,
      isSale: true,
      rating: 5.0,
      reviews: 77,
      popularity: 93,
      image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=800&q=80",
      description: "Supple water-repellent Tuscan suede with Goodyear welt construction and durable natural crepe sole.",
      sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
      colors: ["#795548", "#171717", "#BCAAA4"]
    },
    {
      id: 14,
      name: "Cashmere Knit Sweater",
      category: "clothing",
      categoryLabel: "Clothing",
      price: 2899,
      originalPrice: 3599,
      isNew: true,
      isSale: true,
      rating: 4.9,
      reviews: 94,
      popularity: 92,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
      description: "100% Grade-A Mongolian cashmere with ribbed crew collar and thermal self-regulating knit structure.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#E8D8C8", "#4A4036", "#2B2D42"]
    },
    {
      id: 15,
      name: "Leather Weekender Duffel",
      category: "accessories",
      categoryLabel: "Accessories",
      price: 3499,
      originalPrice: 4499,
      isNew: false,
      isSale: true,
      rating: 4.8,
      reviews: 62,
      popularity: 88,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      description: "Spacious 42L carry-on weekender handcrafted in rugged full-grain leather with antique brass hardware and shoe compartment.",
      sizes: ["42L"],
      colors: ["#5D4037", "#212121"]
    },
    {
      id: 16,
      name: "Heritage Oxford Brogues",
      category: "footwear",
      categoryLabel: "Footwear",
      price: 3199,
      originalPrice: 3999,
      isNew: false,
      isSale: true,
      rating: 4.9,
      reviews: 108,
      popularity: 91,
      image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
      description: "Burnished calf leather with intricate brogue punching, closed lacing system, and Goodyear-welted leather soles.",
      sizes: ["UK 7", "UK 8", "UK 9", "UK 10"],
      colors: ["#3E2723", "#171717"]
    }
  ];

  /* ------------------------------------------------------------------------
     2. Application State & Storage
     ------------------------------------------------------------------------ */
  const STATE = {
    cart: JSON.parse(localStorage.getItem('velora_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('velora_wishlist')) || [],
    theme: localStorage.getItem('velora_theme') || 'light',
    activeFilter: 'all', // 'all', 'clothing', 'footwear', 'accessories', 'new', 'sale'
    sortOrder: 'popular', // 'low-high', 'high-low', 'newest', 'popular'
    searchQuery: '',
    discountCode: '',
    discountPercent: 0
  };

  const FREE_SHIPPING_THRESHOLD = 2000;

  // Persist State Helpers
  function saveCart() {
    localStorage.setItem('velora_cart', JSON.stringify(STATE.cart));
    updateCartUI();
  }

  function saveWishlist() {
    localStorage.setItem('velora_wishlist', JSON.stringify(STATE.wishlist));
    updateWishlistUI();
  }

  function saveTheme() {
    localStorage.setItem('velora_theme', STATE.theme);
  }

  /* ------------------------------------------------------------------------
     3. DOM Selectors
     ------------------------------------------------------------------------ */
  const dom = {
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    mobileThemeToggleBtn: document.getElementById('mobile-theme-toggle-btn'),
    hamburgerBtn: document.getElementById('hamburger-btn'),
    mobileDrawer: document.getElementById('mobile-drawer'),
    drawerBackdrop: document.getElementById('drawer-backdrop'),
    mobileDrawerClose: document.getElementById('mobile-drawer-close'),
    
    // Header Counters
    cartCountBadge: document.getElementById('header-cart-count'),
    wishlistCountBadge: document.getElementById('header-wishlist-count'),
    cartBtn: document.getElementById('cart-toggle-btn'),
    wishlistBtn: document.getElementById('wishlist-toggle-btn'),
    
    // Cart Drawer
    cartDrawer: document.getElementById('cart-drawer'),
    cartDrawerClose: document.getElementById('cart-drawer-close'),
    cartItemsList: document.getElementById('cart-items-list'),
    cartSubtotal: document.getElementById('cart-subtotal'),
    cartDiscountRow: document.getElementById('cart-discount-row'),
    cartDiscountVal: document.getElementById('cart-discount-val'),
    cartTotal: document.getElementById('cart-total'),
    shippingProgress: document.getElementById('shipping-progress-fill'),
    shippingNotice: document.getElementById('shipping-tracker-notice'),
    couponInput: document.getElementById('cart-coupon-input'),
    couponApplyBtn: document.getElementById('cart-coupon-apply-btn'),
    cartCheckoutBtn: document.getElementById('cart-checkout-btn'),
    
    // Wishlist Drawer
    wishlistDrawer: document.getElementById('wishlist-drawer'),
    wishlistDrawerClose: document.getElementById('wishlist-drawer-close'),
    wishlistItemsList: document.getElementById('wishlist-items-list'),
    
    // Filter Toolbar
    filterTabs: document.querySelectorAll('.filter-tab'),
    searchInput: document.getElementById('search-input'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    sortSelect: document.getElementById('sort-select'),
    productsCount: document.getElementById('products-count'),
    productsGrid: document.getElementById('products-grid'),
    
    // Dedicated Sale Grid
    saleProductsGrid: document.getElementById('sale-products-grid'),
    
    // Modals
    quickViewModal: document.getElementById('quick-view-modal'),
    quickViewClose: document.getElementById('quick-view-close'),
    quickViewContent: document.getElementById('quick-view-dialog-content'),
    
    checkoutModal: document.getElementById('checkout-modal'),
    checkoutClose: document.getElementById('checkout-close'),
    checkoutForm: document.getElementById('checkout-form'),
    checkoutModalBody: document.getElementById('checkout-modal-body'),
    
    // Newsletter
    newsletterForm: document.getElementById('newsletter-form'),
    newsletterEmail: document.getElementById('newsletter-email'),
    newsletterFeedback: document.getElementById('newsletter-feedback'),
    
    // Back to top
    backToTopBtn: document.getElementById('back-to-top-btn'),
    
    // Announcement Bar
    announcementBar: document.getElementById('announcement-bar'),
    announcementClose: document.getElementById('announcement-close'),
    announcementCountdown: document.getElementById('announcement-countdown'),
    saleCountdownHours: document.getElementById('sale-hours'),
    saleCountdownMins: document.getElementById('sale-mins'),
    saleCountdownSecs: document.getElementById('sale-secs'),
    copyCouponBtns: document.querySelectorAll('.copy-coupon-btn')
  };

  /* ------------------------------------------------------------------------
     4. Theme Initialization & Toggle
     ------------------------------------------------------------------------ */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    STATE.theme = theme;
    saveTheme();
    
    // Update theme toggle icons
    const isDark = theme === 'dark';
    const moonIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    const sunIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

    if (dom.themeToggleBtn) {
      dom.themeToggleBtn.innerHTML = isDark ? sunIcon : moonIcon;
      dom.themeToggleBtn.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    }
    if (dom.mobileThemeToggleBtn) {
      dom.mobileThemeToggleBtn.innerHTML = isDark ? sunIcon : moonIcon;
    }
  }

  applyTheme(STATE.theme);

  if (dom.themeToggleBtn) {
    dom.themeToggleBtn.addEventListener('click', () => {
      applyTheme(STATE.theme === 'dark' ? 'light' : 'dark');
      showToast(`Switched to ${STATE.theme} mode`);
    });
  }
  if (dom.mobileThemeToggleBtn) {
    dom.mobileThemeToggleBtn.addEventListener('click', () => {
      applyTheme(STATE.theme === 'dark' ? 'light' : 'dark');
      showToast(`Switched to ${STATE.theme} mode`);
    });
  }

  /* ------------------------------------------------------------------------
     5. Sticky Header & Back to Top Scroll
     ------------------------------------------------------------------------ */
  const headerEl = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (headerEl) {
      if (scrollPos > 40) {
        headerEl.classList.add('scrolled');
      } else {
        headerEl.classList.remove('scrolled');
      }
    }

    if (dom.backToTopBtn) {
      if (scrollPos > 400) {
        dom.backToTopBtn.classList.add('visible');
      } else {
        dom.backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (dom.backToTopBtn) {
    dom.backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------------
     6. Mobile Navigation Drawer
     ------------------------------------------------------------------------ */
  function toggleMobileMenu(open) {
    if (open) {
      dom.mobileDrawer.classList.add('open');
      dom.drawerBackdrop.classList.add('active');
      dom.hamburgerBtn.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      dom.mobileDrawer.classList.remove('open');
      dom.drawerBackdrop.classList.remove('active');
      dom.hamburgerBtn.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (dom.hamburgerBtn) {
    dom.hamburgerBtn.addEventListener('click', () => {
      const isOpen = dom.mobileDrawer.classList.contains('open');
      toggleMobileMenu(!isOpen);
    });
  }

  if (dom.mobileDrawerClose) {
    dom.mobileDrawerClose.addEventListener('click', () => toggleMobileMenu(false));
  }

  // Close drawers when clicking backdrop
  if (dom.drawerBackdrop) {
    dom.drawerBackdrop.addEventListener('click', () => {
      toggleMobileMenu(false);
      closeCart();
      closeWishlist();
    });
  }

  // Links inside mobile menu
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const filter = link.getAttribute('data-filter');
      if (filter) {
        e.preventDefault();
        setCategoryFilter(filter);
        toggleMobileMenu(false);
        const section = document.getElementById('shop-section');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      } else {
        toggleMobileMenu(false);
      }
    });
  });

  /* ------------------------------------------------------------------------
     7. Live Countdown Timers (Announcement bar & Sale section)
     ------------------------------------------------------------------------ */
  // Create an expiration 9 hours and 42 minutes from now, persistent in sessionStorage
  let targetTime = sessionStorage.getItem('velora_sale_timer');
  if (!targetTime) {
    targetTime = Date.now() + (9 * 3600 + 42 * 60 + 15) * 1000;
    sessionStorage.setItem('velora_sale_timer', targetTime);
  } else {
    targetTime = parseInt(targetTime, 10);
  }

  function updateCountdowns() {
    const now = Date.now();
    let diff = Math.max(0, targetTime - now);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const format = (n) => String(n).padStart(2, '0');

    if (dom.announcementCountdown) {
      dom.announcementCountdown.textContent = `${format(hours)}h ${format(mins)}m ${format(secs)}s`;
    }
    if (dom.saleCountdownHours) dom.saleCountdownHours.textContent = format(hours);
    if (dom.saleCountdownMins) dom.saleCountdownMins.textContent = format(mins);
    if (dom.saleCountdownSecs) dom.saleCountdownSecs.textContent = format(secs);
  }

  setInterval(updateCountdowns, 1000);
  updateCountdowns();

  // Dismiss Announcement
  if (dom.announcementClose) {
    dom.announcementClose.addEventListener('click', () => {
      if (dom.announcementBar) {
        dom.announcementBar.style.display = 'none';
      }
    });
  }

  // Copy coupon buttons
  dom.copyCouponBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-code') || 'VELORA20';
      navigator.clipboard.writeText(code).then(() => {
        showToast(`Promo code "${code}" copied to clipboard!`);
        if (dom.couponInput) {
          dom.couponInput.value = code;
        }
      }).catch(() => {
        showToast(`Promo code: ${code}`);
      });
    });
  });

  /* ------------------------------------------------------------------------
     8. Product Filtering, Search, and Sorting
     ------------------------------------------------------------------------ */
  function getFilteredAndSortedProducts() {
    let result = [...PRODUCTS];

    // 1. Filter by category
    if (STATE.activeFilter === 'clothing') {
      result = result.filter(p => p.category === 'clothing');
    } else if (STATE.activeFilter === 'footwear') {
      result = result.filter(p => p.category === 'footwear');
    } else if (STATE.activeFilter === 'accessories') {
      result = result.filter(p => p.category === 'accessories');
    } else if (STATE.activeFilter === 'new') {
      result = result.filter(p => p.isNew);
    } else if (STATE.activeFilter === 'sale') {
      result = result.filter(p => p.isSale);
    }

    // 2. Search query filter
    if (STATE.searchQuery.trim() !== '') {
      const query = STATE.searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.categoryLabel.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    // 3. Sort Order
    if (STATE.sortOrder === 'low-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (STATE.sortOrder === 'high-low') {
      result.sort((a, b) => b.price - a.price);
    } else if (STATE.sortOrder === 'newest') {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else {
      // Default: Popularity
      result.sort((a, b) => b.popularity - a.popularity);
    }

    return result;
  }

  function setCategoryFilter(filterKey) {
    STATE.activeFilter = filterKey;
    dom.filterTabs.forEach(tab => {
      if (tab.getAttribute('data-filter') === filterKey) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Also update desktop nav links active status
    document.querySelectorAll('.nav-link').forEach(link => {
      const linkFilter = link.getAttribute('data-filter');
      if (linkFilter && linkFilter === filterKey) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    renderProductsGrid();
  }

  // Filter Tabs Event Listeners
  dom.filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');
      setCategoryFilter(filter);
    });
  });

  // Desktop Nav Links that have data-filter
  document.querySelectorAll('.nav-link[data-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.getAttribute('data-filter');
      setCategoryFilter(filter);
      const section = document.getElementById('shop-section');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Category Cards in "Featured Categories" section
  document.querySelectorAll('.category-card[data-filter]').forEach(card => {
    card.addEventListener('click', () => {
      const filter = card.getAttribute('data-filter');
      setCategoryFilter(filter);
      const section = document.getElementById('shop-section');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Search input live handler
  if (dom.searchInput) {
    dom.searchInput.addEventListener('input', (e) => {
      STATE.searchQuery = e.target.value;
      if (dom.searchClearBtn) {
        dom.searchClearBtn.style.display = STATE.searchQuery.length > 0 ? 'block' : 'none';
      }
      renderProductsGrid();
    });
  }

  if (dom.searchClearBtn) {
    dom.searchClearBtn.addEventListener('click', () => {
      STATE.searchQuery = '';
      if (dom.searchInput) dom.searchInput.value = '';
      dom.searchClearBtn.style.display = 'none';
      renderProductsGrid();
    });
  }

  // Sort dropdown
  if (dom.sortSelect) {
    dom.sortSelect.addEventListener('change', (e) => {
      STATE.sortOrder = e.target.value;
      renderProductsGrid();
    });
  }

  /* ------------------------------------------------------------------------
     9. Product Card HTML Generator & Grid Rendering
     ------------------------------------------------------------------------ */
  function createProductCardHTML(p) {
    const isWishlisted = STATE.wishlist.includes(p.id);
    const discountPct = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
    
    return `
      <article class="product-card" data-product-id="${p.id}">
        <div class="product-media">
          <img 
            src="${p.image}" 
            alt="${p.name}" 
            class="product-image" 
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80'"
          />
          
          <div class="badge-stack">
            ${p.isSale ? `<span class="sale-discount-tag">-${discountPct}%</span>` : ''}
            ${p.isNew ? `<span class="new-arrival-tag">NEW</span>` : ''}
          </div>

          <button 
            type="button" 
            class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
            aria-label="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
            data-action="toggle-wishlist" 
            data-id="${p.id}"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <button 
            type="button" 
            class="quick-view-overlay-btn" 
            data-action="quick-view" 
            data-id="${p.id}"
          >
            Quick View
          </button>

          <button 
            type="button" 
            class="quick-add-btn" 
            data-action="quick-add" 
            data-id="${p.id}"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Quick Add
          </button>
        </div>

        <div class="product-info">
          <div class="product-category-row">
            <span class="product-category">${p.categoryLabel}</span>
            <div class="product-rating" title="${p.rating} out of 5 stars">
              <span>★</span>
              <span>${p.rating}</span>
              <span class="rating-count">(${p.reviews})</span>
            </div>
          </div>

          <h3 class="product-title" data-action="quick-view" data-id="${p.id}" style="cursor: pointer;">
            ${p.name}
          </h3>

          <div class="product-pricing">
            <span class="current-price">₹${p.price.toLocaleString('en-IN')}</span>
            ${p.originalPrice ? `<span class="original-price">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
            ${p.isSale ? `<span class="discount-rate">Save ${discountPct}%</span>` : ''}
          </div>
        </div>
      </article>
    `;
  }

  function renderProductsGrid() {
    if (!dom.productsGrid) return;
    const items = getFilteredAndSortedProducts();

    if (dom.productsCount) {
      dom.productsCount.textContent = `Showing ${items.length} ${items.length === 1 ? 'product' : 'products'}`;
    }

    if (items.length === 0) {
      dom.productsGrid.innerHTML = `
        <div class="no-products-state">
          <h3>No matching products found</h3>
          <p class="section-desc" style="margin: 0 auto 20px;">We couldn't find any products matching "${STATE.searchQuery}". Try searching for something else or reset your filters.</p>
          <button type="button" class="btn btn-primary" id="reset-filters-btn">View All Products</button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          STATE.searchQuery = '';
          if (dom.searchInput) dom.searchInput.value = '';
          if (dom.searchClearBtn) dom.searchClearBtn.style.display = 'none';
          setCategoryFilter('all');
        });
      }
      return;
    }

    dom.productsGrid.innerHTML = items.map(createProductCardHTML).join('');
  }

  function renderSaleSection() {
    if (!dom.saleProductsGrid) return;
    const saleItems = PRODUCTS.filter(p => p.isSale).slice(0, 4);
    dom.saleProductsGrid.innerHTML = saleItems.map(createProductCardHTML).join('');
  }

  // Initial renders
  renderProductsGrid();
  renderSaleSection();

  /* ------------------------------------------------------------------------
     10. Delegated Product Card Clicks (Quick View, Add, Wishlist)
     ------------------------------------------------------------------------ */
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    const action = target.getAttribute('data-action');
    const productId = parseInt(target.getAttribute('data-id'), 10);
    const product = PRODUCTS.find(p => p.id === productId);

    if (action === 'toggle-wishlist' && product) {
      toggleWishlist(product);
    } else if (action === 'quick-add' && product) {
      addToCart(product, product.sizes[0], product.colors[0], 1);
      showToast(`Added "${product.name}" (${product.sizes[0]}) to your bag`);
    } else if (action === 'quick-view' && product) {
      openQuickView(product);
    }
  });

  /* ------------------------------------------------------------------------
     11. Wishlist Functionality
     ------------------------------------------------------------------------ */
  function toggleWishlist(product) {
    const index = STATE.wishlist.indexOf(product.id);
    if (index > -1) {
      STATE.wishlist.splice(index, 1);
      showToast(`Removed "${product.name}" from wishlist`);
    } else {
      STATE.wishlist.push(product.id);
      showToast(`Saved "${product.name}" to wishlist`);
    }
    saveWishlist();
    renderProductsGrid();
    renderSaleSection();
  }

  function updateWishlistUI() {
    const count = STATE.wishlist.length;
    if (dom.wishlistCountBadge) {
      dom.wishlistCountBadge.textContent = count;
      dom.wishlistCountBadge.style.display = count > 0 ? 'flex' : 'none';
    }

    if (!dom.wishlistItemsList) return;
    if (count === 0) {
      dom.wishlistItemsList.innerHTML = `
        <div class="cart-empty-message">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <p style="font-weight: 600; margin-bottom: 8px;">Your wishlist is empty</p>
          <p style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 20px;">Save pieces you love to build your personal capsule.</p>
          <button type="button" class="btn btn-primary" onclick="document.getElementById('wishlist-drawer').classList.remove('open'); document.getElementById('drawer-backdrop').classList.remove('active'); document.body.style.overflow='';">Explore Collection</button>
        </div>
      `;
      return;
    }

    const items = PRODUCTS.filter(p => STATE.wishlist.includes(p.id));
    dom.wishlistItemsList.innerHTML = items.map(p => `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}" class="cart-item-img" />
        <div class="cart-item-details">
          <h4 class="cart-item-title">${p.name}</h4>
          <span class="cart-item-variant">${p.categoryLabel}</span>
          <span class="cart-item-price">₹${p.price.toLocaleString('en-IN')}</span>
          <div style="display: flex; gap: 12px; margin-top: 10px;">
            <button type="button" class="btn btn-primary" style="padding: 6px 14px; font-size: 0.75rem;" data-action="quick-add" data-id="${p.id}">
              Add to Bag
            </button>
            <button type="button" class="cart-item-remove" data-action="toggle-wishlist" data-id="${p.id}">
              Remove
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  function openWishlist() {
    dom.wishlistDrawer.classList.add('open');
    dom.drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateWishlistUI();
  }

  function closeWishlist() {
    dom.wishlistDrawer.classList.remove('open');
    dom.drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (dom.wishlistBtn) dom.wishlistBtn.addEventListener('click', openWishlist);
  if (dom.wishlistDrawerClose) dom.wishlistDrawerClose.addEventListener('click', closeWishlist);

  /* ------------------------------------------------------------------------
     12. Shopping Cart Functionality
     ------------------------------------------------------------------------ */
  function addToCart(product, size, color, qty = 1) {
    const existingIndex = STATE.cart.findIndex(
      item => item.id === product.id && item.size === size && item.color === color
    );

    if (existingIndex > -1) {
      STATE.cart[existingIndex].quantity += qty;
    } else {
      STATE.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: size,
        color: color,
        quantity: qty
      });
    }

    saveCart();
  }

  function updateCartItemQty(index, delta) {
    if (STATE.cart[index]) {
      STATE.cart[index].quantity += delta;
      if (STATE.cart[index].quantity <= 0) {
        STATE.cart.splice(index, 1);
        showToast('Item removed from your bag');
      }
      saveCart();
    }
  }

  function removeCartItem(index) {
    if (STATE.cart[index]) {
      const removed = STATE.cart.splice(index, 1);
      showToast(`Removed "${removed[0].name}" from your bag`);
      saveCart();
    }
  }

  function calculateCartTotals() {
    const subtotal = STATE.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = Math.round(subtotal * (STATE.discountPercent / 100));
    const total = Math.max(0, subtotal - discountAmount);
    return { subtotal, discountAmount, total };
  }

  function updateCartUI() {
    const totalItems = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);

    // Update Header Badges
    if (dom.cartCountBadge) {
      dom.cartCountBadge.textContent = totalItems;
      dom.cartCountBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    const { subtotal, discountAmount, total } = calculateCartTotals();

    // Free shipping progress tracker
    if (dom.shippingProgress && dom.shippingNotice) {
      const progress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      dom.shippingProgress.style.width = `${progress}%`;
      if (subtotal >= FREE_SHIPPING_THRESHOLD) {
        dom.shippingNotice.innerHTML = `🎉 <strong>Congratulations!</strong> You qualify for Free Express Shipping.`;
      } else {
        const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
        dom.shippingNotice.innerHTML = `Add <strong>₹${remaining.toLocaleString('en-IN')}</strong> more to unlock <strong>Free Express Delivery</strong>!`;
      }
    }

    // Totals
    if (dom.cartSubtotal) dom.cartSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (dom.cartTotal) dom.cartTotal.textContent = `₹${total.toLocaleString('en-IN')}`;

    if (dom.cartDiscountRow && dom.cartDiscountVal) {
      if (STATE.discountPercent > 0) {
        dom.cartDiscountRow.style.display = 'flex';
        dom.cartDiscountVal.textContent = `-₹${discountAmount.toLocaleString('en-IN')} (${STATE.discountPercent}%)`;
      } else {
        dom.cartDiscountRow.style.display = 'none';
      }
    }

    // Cart Items List
    if (!dom.cartItemsList) return;

    if (STATE.cart.length === 0) {
      dom.cartItemsList.innerHTML = `
        <div class="cart-empty-message">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <p style="font-weight: 600; margin-bottom: 8px;">Your shopping bag is empty</p>
          <p style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 20px;">Discover curated wardrobe staples and statement garments.</p>
          <button type="button" class="btn btn-primary" onclick="document.getElementById('cart-drawer').classList.remove('open'); document.getElementById('drawer-backdrop').classList.remove('active'); document.body.style.overflow='';">Start Shopping</button>
        </div>
      `;
      if (dom.cartCheckoutBtn) dom.cartCheckoutBtn.disabled = true;
      return;
    }

    if (dom.cartCheckoutBtn) dom.cartCheckoutBtn.disabled = false;

    dom.cartItemsList.innerHTML = STATE.cart.map((item, index) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <span class="cart-item-variant">Size: ${item.size} · Color: <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background-color:${item.color}; border:1px solid #ccc; vertical-align:middle;"></span></span>
          
          <div class="cart-item-footer">
            <div class="qty-control">
              <button type="button" class="qty-btn" data-cart-qty="-1" data-index="${index}" aria-label="Decrease quantity">−</button>
              <span class="qty-display">${item.quantity}</span>
              <button type="button" class="qty-btn" data-cart-qty="1" data-index="${index}" aria-label="Increase quantity">+</button>
            </div>
            <span class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
          </div>

          <button type="button" class="cart-item-remove" data-cart-remove="${index}">Remove</button>
        </div>
      </div>
    `).join('');

    // Attach quantity and remove listeners
    dom.cartItemsList.querySelectorAll('[data-cart-qty]').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'), 10);
        const delta = parseInt(btn.getAttribute('data-cart-qty'), 10);
        updateCartItemQty(index, delta);
      });
    });

    dom.cartItemsList.querySelectorAll('[data-cart-remove]').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-cart-remove'), 10);
        removeCartItem(index);
      });
    });
  }

  function openCart() {
    dom.cartDrawer.classList.add('open');
    dom.drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateCartUI();
  }

  function closeCart() {
    dom.cartDrawer.classList.remove('open');
    dom.drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (dom.cartBtn) dom.cartBtn.addEventListener('click', openCart);
  if (dom.cartDrawerClose) dom.cartDrawerClose.addEventListener('click', closeCart);

  // Apply Coupon in Cart
  if (dom.couponApplyBtn && dom.couponInput) {
    dom.couponApplyBtn.addEventListener('click', () => {
      const code = dom.couponInput.value.trim().toUpperCase();
      if (!code) {
        showToast('Please enter a promo code');
        return;
      }
      if (code === 'VELORA20') {
        STATE.discountCode = 'VELORA20';
        STATE.discountPercent = 20;
        showToast('Success! 20% discount applied to your order.');
        updateCartUI();
      } else if (code === 'VIP10') {
        STATE.discountCode = 'VIP10';
        STATE.discountPercent = 10;
        showToast('Success! 10% VIP discount applied.');
        updateCartUI();
      } else {
        showToast('Invalid promo code. Use VELORA20 for 20% off.');
      }
    });
  }

  // Initial UI updates
  updateCartUI();
  updateWishlistUI();

  /* ------------------------------------------------------------------------
     13. Quick Product View Modal
     ------------------------------------------------------------------------ */
  function openQuickView(product) {
    let selectedSize = product.sizes[0];
    let selectedColor = product.colors[0];
    let quantity = 1;
    const discountPct = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    dom.quickViewContent.innerHTML = `
      <div class="quick-view-grid">
        <div class="quick-view-media">
          <img src="${product.image}" alt="${product.name}" class="quick-view-img" />
        </div>
        <div class="quick-view-info">
          <span class="qv-category">${product.categoryLabel}</span>
          <h2 class="qv-title">${product.name}</h2>
          
          <div class="qv-rating-row">
            <span style="color: #E5A93C;">★★★★★</span>
            <span style="font-weight: 700;">${product.rating}</span>
            <span style="color: var(--text-muted);">(${product.reviews} customer reviews)</span>
          </div>

          <div class="qv-price-row">
            <span class="qv-current-price">₹${product.price.toLocaleString('en-IN')}</span>
            ${product.originalPrice ? `<span class="qv-original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
            <span class="sale-discount-tag">-${discountPct}% OFF</span>
          </div>

          <p class="qv-description">${product.description}</p>

          <!-- Size Options -->
          <div class="option-group">
            <div class="option-title">
              <span>Select Size</span>
              <span style="font-size: 0.75rem; text-decoration: underline; cursor: pointer;" onclick="alert('Size Guide: Regular tailored fit. Fits true to standard European sizing.')">Size Guide</span>
            </div>
            <div class="size-selector" id="qv-size-selector">
              ${product.sizes.map((s, idx) => `
                <button type="button" class="size-pill ${idx === 0 ? 'selected' : ''}" data-size="${s}">${s}</button>
              `).join('')}
            </div>
          </div>

          <!-- Color Options -->
          <div class="option-group">
            <div class="option-title">
              <span>Color Shade</span>
            </div>
            <div class="color-selector" id="qv-color-selector">
              ${product.colors.map((c, idx) => `
                <button type="button" class="color-dot ${idx === 0 ? 'selected' : ''}" data-color="${c}" style="background-color: ${c};" aria-label="Color ${c}"></button>
              `).join('')}
            </div>
          </div>

          <!-- Quantity & Action -->
          <div class="qv-action-row">
            <div class="qty-control" style="background-color: var(--background);">
              <button type="button" class="qty-btn" id="qv-qty-minus">−</button>
              <span class="qty-display" id="qv-qty-val">1</span>
              <button type="button" class="qty-btn" id="qv-qty-plus">+</button>
            </div>
            <button type="button" class="btn btn-primary qv-add-btn" id="qv-submit-add-btn">
              Add To Bag · ₹${product.price.toLocaleString('en-IN')}
            </button>
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--surface-border); display: flex; gap: 20px; font-size: 0.75rem; color: var(--text-muted);">
            <span>✓ 100% Genuine Luxury Guarantee</span>
            <span>✓ Complimentary 14-Day Returns</span>
          </div>
        </div>
      </div>
    `;

    // Size Selection Handlers
    const sizePills = dom.quickViewContent.querySelectorAll('.size-pill');
    sizePills.forEach(pill => {
      pill.addEventListener('click', () => {
        sizePills.forEach(p => p.classList.remove('selected'));
        pill.classList.add('selected');
        selectedSize = pill.getAttribute('data-size');
      });
    });

    // Color Selection Handlers
    const colorDots = dom.quickViewContent.querySelectorAll('.color-dot');
    colorDots.forEach(dot => {
      dot.addEventListener('click', () => {
        colorDots.forEach(d => d.classList.remove('selected'));
        dot.classList.add('selected');
        selectedColor = dot.getAttribute('data-color');
      });
    });

    // Quantity Handlers
    const qtyMinus = dom.quickViewContent.querySelector('#qv-qty-minus');
    const qtyPlus = dom.quickViewContent.querySelector('#qv-qty-plus');
    const qtyDisplay = dom.quickViewContent.querySelector('#qv-qty-val');
    const submitBtn = dom.quickViewContent.querySelector('#qv-submit-add-btn');

    qtyMinus.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        qtyDisplay.textContent = quantity;
        submitBtn.innerHTML = `Add To Bag · ₹${(product.price * quantity).toLocaleString('en-IN')}`;
      }
    });

    qtyPlus.addEventListener('click', () => {
      quantity++;
      qtyDisplay.textContent = quantity;
      submitBtn.innerHTML = `Add To Bag · ₹${(product.price * quantity).toLocaleString('en-IN')}`;
    });

    // Submit Add to Bag
    submitBtn.addEventListener('click', () => {
      addToCart(product, selectedSize, selectedColor, quantity);
      showToast(`Added ${quantity} × "${product.name}" (${selectedSize}) to bag`);
      closeQuickView();
      openCart();
    });

    dom.quickViewModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    dom.quickViewModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (dom.quickViewClose) dom.quickViewClose.addEventListener('click', closeQuickView);
  if (dom.quickViewModal) {
    dom.quickViewModal.addEventListener('click', (e) => {
      if (e.target === dom.quickViewModal) closeQuickView();
    });
  }

  /* ------------------------------------------------------------------------
     14. Simulated Checkout Flow Modal
     ------------------------------------------------------------------------ */
  if (dom.cartCheckoutBtn) {
    dom.cartCheckoutBtn.addEventListener('click', () => {
      if (STATE.cart.length === 0) return;
      closeCart();
      openCheckoutModal();
    });
  }

  function openCheckoutModal() {
    const { subtotal, discountAmount, total } = calculateCartTotals();
    const orderNumber = 'VEL-' + Math.floor(100000 + Math.random() * 900000);

    dom.checkoutModalBody.innerHTML = `
      <div class="checkout-steps-indicator">
        <span class="step-node active">1. Shipping</span>
        <span style="color: var(--text-light);">—</span>
        <span class="step-node">2. Payment</span>
        <span style="color: var(--text-light);">—</span>
        <span class="step-node">3. Confirmation</span>
      </div>

      <div style="margin-bottom: 24px; padding: 16px; background-color: var(--surface); border-radius: var(--radius-sm); border: 1px solid var(--surface-border);">
        <div style="display:flex; justify-content:space-between; font-size:0.875rem; margin-bottom:6px;">
          <span>Items Subtotal:</span>
          <strong>₹${subtotal.toLocaleString('en-IN')}</strong>
        </div>
        ${discountAmount > 0 ? `
          <div style="display:flex; justify-content:space-between; font-size:0.875rem; color:var(--sale-badge); margin-bottom:6px;">
            <span>Discount (${STATE.discountPercent}%):</span>
            <strong>-₹${discountAmount.toLocaleString('en-IN')}</strong>
          </div>
        ` : ''}
        <div style="display:flex; justify-content:space-between; font-size:0.875rem; margin-bottom:6px;">
          <span>Express Shipping:</span>
          <strong>${subtotal >= FREE_SHIPPING_THRESHOLD ? '<span style="color:var(--success);">FREE</span>' : '₹199'}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:1.1rem; font-weight:700; border-top:1px solid var(--surface-border); padding-top:8px; margin-top:8px;">
          <span>Grand Total:</span>
          <span style="color:var(--accent);">₹${(total + (subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 199)).toLocaleString('en-IN')}</span>
        </div>
      </div>

      <form id="simulated-checkout-form">
        <div class="checkout-form-grid">
          <div>
            <label style="font-size:0.75rem; text-transform:uppercase; font-weight:600; margin-bottom:6px; display:block;">First Name *</label>
            <input type="text" class="checkout-input" required placeholder="Alex" value="Rohan" />
          </div>
          <div>
            <label style="font-size:0.75rem; text-transform:uppercase; font-weight:600; margin-bottom:6px; display:block;">Last Name *</label>
            <input type="text" class="checkout-input" required placeholder="Sharma" value="Verma" />
          </div>
          <div class="form-full">
            <label style="font-size:0.75rem; text-transform:uppercase; font-weight:600; margin-bottom:6px; display:block;">Email Address *</label>
            <input type="email" class="checkout-input" required placeholder="name@example.com" value="rohan.verma@example.com" />
          </div>
          <div class="form-full">
            <label style="font-size:0.75rem; text-transform:uppercase; font-weight:600; margin-bottom:6px; display:block;">Delivery Street Address *</label>
            <input type="text" class="checkout-input" required placeholder="Apartment, suite, street" value="402, Highline Avenue, Indiranagar" />
          </div>
          <div>
            <label style="font-size:0.75rem; text-transform:uppercase; font-weight:600; margin-bottom:6px; display:block;">City *</label>
            <input type="text" class="checkout-input" required value="Bengaluru" />
          </div>
          <div>
            <label style="font-size:0.75rem; text-transform:uppercase; font-weight:600; margin-bottom:6px; display:block;">PIN Code *</label>
            <input type="text" class="checkout-input" required value="560038" />
          </div>
          <div class="form-full">
            <label style="font-size:0.75rem; text-transform:uppercase; font-weight:600; margin-bottom:6px; display:block;">Payment Method</label>
            <div style="display:flex; gap:12px; flex-wrap:wrap;">
              <label style="display:flex; align-items:center; gap:8px; padding:10px 16px; border:1px solid var(--surface-border); border-radius:var(--radius-sm); cursor:pointer; flex:1;">
                <input type="radio" name="payment" value="card" checked />
                <span>UPI / Net Banking / Cards</span>
              </label>
              <label style="display:flex; align-items:center; gap:8px; padding:10px 16px; border:1px solid var(--surface-border); border-radius:var(--radius-sm); cursor:pointer; flex:1;">
                <input type="radio" name="payment" value="cod" />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-primary" style="width:100%; padding:14px;">
          Place Order · ₹${(total + (subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 199)).toLocaleString('en-IN')}
        </button>
      </form>
    `;

    const form = document.getElementById('simulated-checkout-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Render Order Success State
        dom.checkoutModalBody.innerHTML = `
          <div class="order-success-card">
            <div class="success-check-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style="font-family: var(--font-serif); font-size: 2rem; margin-bottom: 8px;">Order Placed Successfully!</h3>
            <p style="color: var(--accent); font-weight: 700; letter-spacing: 0.1em; margin-bottom: 16px;">ORDER #${orderNumber}</p>
            <p class="section-desc" style="margin: 0 auto 24px;">Thank you for shopping with VELORA. We have dispatched a confirmation receipt with tracking details to your email.</p>
            <button type="button" class="btn btn-primary" id="checkout-finish-btn">Continue Exploring</button>
          </div>
        `;

        // Clear cart
        STATE.cart = [];
        saveCart();

        document.getElementById('checkout-finish-btn').addEventListener('click', () => {
          closeCheckoutModal();
        });
      });
    }

    dom.checkoutModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCheckoutModal() {
    dom.checkoutModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (dom.checkoutClose) dom.checkoutClose.addEventListener('click', closeCheckoutModal);
  if (dom.checkoutModal) {
    dom.checkoutModal.addEventListener('click', (e) => {
      if (e.target === dom.checkoutModal) closeCheckoutModal();
    });
  }

  /* ------------------------------------------------------------------------
     15. Newsletter Subscription with Validation
     ------------------------------------------------------------------------ */
  if (dom.newsletterForm && dom.newsletterEmail) {
    dom.newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = dom.newsletterEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        dom.newsletterEmail.classList.add('error');
        dom.newsletterFeedback.className = 'newsletter-feedback error';
        dom.newsletterFeedback.textContent = 'Please provide a valid email address.';
        return;
      }

      // Success
      dom.newsletterEmail.classList.remove('error');
      dom.newsletterFeedback.className = 'newsletter-feedback success';
      dom.newsletterFeedback.innerHTML = `✓ Welcome to the VELORA circle! Check your inbox for your 20% discount code: <strong>VELORA20</strong>`;
      dom.newsletterEmail.value = '';
      showToast('Thank you for subscribing to VELORA!');
    });
  }

  /* ------------------------------------------------------------------------
     16. Toast Notifications Utility
     ------------------------------------------------------------------------ */
  function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent); flex-shrink: 0;">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-remove');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // Expose global helpers if needed
  window.VELORA = {
    setCategoryFilter,
    openCart,
    openWishlist,
    showToast
  };
});
