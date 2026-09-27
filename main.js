/* SkipIt — Main JavaScript (Glass UI Redesign) */

// ============================================================
// SCROLL REVEAL (INTERSECTION OBSERVER)
// ============================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ============================================================
// FLOATING NAVBAR — SCROLL STATE
// ============================================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 24) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
}, { passive: true });

// ============================================================
// HAMBURGER / MOBILE DRAWER
// ============================================================
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger?.addEventListener('click', () => {
  const isOpen = mobileNav.classList.contains('open');
  mobileNav.classList.toggle('open');
  document.body.style.overflow = isOpen ? '' : 'hidden';

  const spans = hamburger.querySelectorAll('span');
  if (!isOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav?.classList.remove('open');
    document.body.style.overflow = '';
    const spans = hamburger?.querySelectorAll('span');
    spans?.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// ============================================================
// PRODUCT DATA
// ============================================================
const products = [
  {
    id: 'camera',
    title: 'Sony Alpha Mirrorless Camera',
    category: 'Photography',
    catKey: 'photography',
    location: 'Bengaluru, KA',
    cityKey: 'bengaluru',
    price: '₹799',
    rawPrice: 799,
    deposit: '₹5,000',
    rawDeposit: 5000,
    rating: '4.9',
    reviews: 34,
    owner: 'Rahul M.',
    image: 'images/product_camera.jpg',
    status: 'Available',
    description: 'Sony Alpha mirrorless camera with 28-70mm kit lens. Perfect for photography projects, weddings, travel shoots. Includes dual batteries, fast charger, 128GB memory card, and water-resistant carry bag.',
  },
  {
    id: 'ps5',
    title: 'PlayStation 5 Console + 2 Controllers',
    category: 'Gaming',
    catKey: 'gaming',
    location: 'Mumbai, MH',
    cityKey: 'mumbai',
    price: '₹599',
    rawPrice: 599,
    deposit: '₹8,000',
    rawDeposit: 8000,
    rating: '4.8',
    reviews: 22,
    owner: 'Priya K.',
    image: 'images/product_ps5.jpg',
    status: 'Available',
    description: 'PlayStation 5 Disc Edition with two DualSense wireless controllers. Pre-loaded with popular titles. Includes ultra-high speed HDMI cable and power adapter. Ideal for weekend tournaments.',
  },
  {
    id: 'projector',
    title: 'Portable Smart Mini Projector HD',
    category: 'Electronics',
    catKey: 'electronics',
    location: 'Pune, MH',
    cityKey: 'pune',
    price: '₹349',
    rawPrice: 349,
    deposit: '₹2,500',
    rawDeposit: 2500,
    rating: '4.7',
    reviews: 18,
    owner: 'Aditya S.',
    image: 'images/product_projector.jpg',
    status: 'Available',
    description: 'Ultra-compact 1080p portable projector with built-in Harman Kardon speakers, Wi-Fi streaming, and HDMI/USB-C inputs. Ideal for rooftop cinema nights or client pitch meetings.',
  },
  {
    id: 'bike',
    title: 'Mountain Bike — Carbon Fiber Frame',
    category: 'Vehicles',
    catKey: 'vehicles',
    location: 'Delhi, DL',
    cityKey: 'delhi',
    price: '₹449',
    rawPrice: 449,
    deposit: '₹3,000',
    rawDeposit: 3000,
    rating: '4.6',
    reviews: 12,
    owner: 'Neha R.',
    image: 'images/product_bike.jpg',
    status: 'Available',
    description: 'High-performance carbon frame mountain bike with 21-speed Shimano gearing, front suspension, and hydraulic disc brakes. Includes certified helmet and heavy-duty combination lock.',
  },
  {
    id: 'drill',
    title: 'Cordless Power Drill & Tool Kit',
    category: 'Tools',
    catKey: 'tools',
    location: 'Hyderabad, TS',
    cityKey: 'hyderabad',
    price: '₹199',
    rawPrice: 199,
    deposit: '₹1,500',
    rawDeposit: 1500,
    rating: '4.8',
    reviews: 41,
    owner: 'Suresh P.',
    image: 'images/product_drill.jpg',
    status: 'Available',
    description: 'Professional 18V brushless cordless drill kit with two lithium-ion batteries, full masonry and wood bit sets, carrying hardcase, and magnetic bit extensions. Great for DIY & renovation.',
  },
  {
    id: 'speaker',
    title: 'DJ Concert Speaker System (1000W)',
    category: 'Events',
    catKey: 'events',
    location: 'Chennai, TN',
    cityKey: 'chennai',
    price: '₹1,299',
    rawPrice: 1299,
    deposit: '₹6,000',
    rawDeposit: 6000,
    rating: '4.9',
    reviews: 29,
    owner: 'Arjun V.',
    image: 'images/product_speaker.jpg',
    status: 'Available',
    description: 'Professional high-output 1000W powered party speaker with Bluetooth, dual XLR mic inputs, deep bass boost, and integrated carrying handles. Perfect for gatherings, parties, and acoustic gigs.',
  },
  {
    id: 'monitor',
    title: 'Curved Ultrawide Gaming Monitor 34"',
    category: 'Gaming',
    catKey: 'gaming',
    location: 'Bengaluru, KA',
    cityKey: 'bengaluru',
    price: '₹499',
    rawPrice: 499,
    deposit: '₹4,000',
    rawDeposit: 4000,
    rating: '4.7',
    reviews: 15,
    owner: 'Dev T.',
    image: 'images/product_monitor.jpg',
    status: 'Available',
    description: '34" WQHD curved ultrawide gaming monitor featuring 165Hz refresh rate, 1ms response, HDR400, and adjustable ergonomic desk stand. Outstanding for development, editing, or sim racing.',
  },
  {
    id: 'tent',
    title: '4-Person Waterproof Camping Tent',
    category: 'Sports',
    catKey: 'sports',
    location: 'Jaipur, RJ',
    cityKey: 'jaipur',
    price: '₹299',
    rawPrice: 299,
    deposit: '₹2,000',
    rawDeposit: 2000,
    rating: '4.6',
    reviews: 37,
    owner: 'Kavya L.',
    image: 'images/product_tent.jpg',
    status: 'Available',
    description: 'Weatherproof 4-person dome camping tent with double-wall rainfly, fiberglass poles, gear loft, and compact carrying bag. Quick 10-minute setup for weekend treks and outdoor camping.',
  },
  {
    id: 'chair',
    title: 'Ergonomic Mesh Executive Chair',
    category: 'Furniture',
    catKey: 'furniture',
    location: 'Bengaluru, KA',
    cityKey: 'bengaluru',
    price: '₹189',
    rawPrice: 189,
    deposit: '₹1,500',
    rawDeposit: 1500,
    rating: '4.8',
    reviews: 19,
    owner: 'Rohan G.',
    image: 'images/hero_collage.jpg',
    status: 'Available',
    description: 'High-back ergonomic mesh office chair with adjustable 3D armrests, lumbar support, and smooth multi-tilt recline. Excellent for temporary work setups and project sprints.',
  }
];

// Global lookup
window._products = {};
products.forEach(p => { window._products[p.id] = p; });

// Wishlist storage
let wishlist = new Set();
try {
  const saved = JSON.parse(localStorage.getItem('skipit_wishlist') || '[]');
  wishlist = new Set(saved);
} catch (e) {}

function toggleWishlist(productId, e) {
  e?.stopPropagation();
  if (wishlist.has(productId)) {
    wishlist.delete(productId);
    showAuthToast('Removed from Saved Items');
  } else {
    wishlist.add(productId);
    showAuthToast('Saved to your Wishlist ❤️');
  }
  try {
    localStorage.setItem('skipit_wishlist', JSON.stringify([...wishlist]));
  } catch (e) {}

  // Update card heart icon state
  const btn = document.querySelector(`.wishlist-btn-${productId}`);
  if (btn) btn.classList.toggle('active', wishlist.has(productId));
}
window.toggleWishlist = toggleWishlist;

// ============================================================
// RENDER PRODUCT CARDS
// ============================================================
function renderProductCard(p) {
  const initials = p.owner.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  const isWished = wishlist.has(p.id);

  return `
    <div class="product-card reveal" data-category="${p.catKey}" data-city="${p.cityKey}" onclick="openListingModal(window._products['${p.id}'])">
      <div class="product-card-image">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        <div class="product-card-status">
          <span class="badge badge--green">
            <svg viewBox="0 0 8 8" fill="currentColor" style="width:7px;height:7px"><circle cx="4" cy="4" r="3"/></svg>
            ${p.status}
          </span>
        </div>
        <button class="product-card-wishlist wishlist-btn-${p.id} ${isWished ? 'active' : ''}" 
                aria-label="Save listing" 
                onclick="toggleWishlist('${p.id}', event)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="product-card-body">
        <div class="product-card-meta">
          <div class="product-card-location">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${p.location}
          </div>
          <div class="product-card-rating">
            <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ${p.rating}
          </div>
        </div>
        <div class="product-card-title">${p.title}</div>
        <div class="product-card-owner">
          <div class="owner-avatar">${initials}</div>
          <span class="product-card-owner-name">${p.owner}</span>
          <div class="owner-verified">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Verified
          </div>
        </div>
        <div class="product-card-footer">
          <div class="product-card-price">
            <div class="product-price-main">${p.price}</div>
            <div class="product-price-per">per day</div>
          </div>
          <button class="btn btn--primary btn--sm" onclick="event.stopPropagation(); openListingModal(window._products['${p.id}'])">
            View Details
          </button>
        </div>
      </div>
    </div>
  `;
}

// Initial render
const listingsGrid = document.getElementById('listingsGrid');
function renderGrid(items) {
  if (!listingsGrid) return;
  if (!items || items.length === 0) {
    listingsGrid.innerHTML = `
      <div class="marketplace-empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <h3>No rentals found matching your criteria</h3>
        <p>Try searching with another keyword or explore other rental categories.</p>
        <button class="btn btn--outline btn--sm" onclick="resetFilters()">View All Rentals</button>
      </div>
    `;
    return;
  }
  listingsGrid.innerHTML = items.map(renderProductCard).join('');
  listingsGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

renderGrid(products);

// ============================================================
// FILTERING & SEARCH CONTROLLER
// ============================================================
let activeCategory = 'all';
let activeSearchQuery = '';
let activeLocation = 'all';

function applyFilters() {
  const q = activeSearchQuery.toLowerCase().trim();
  const loc = activeLocation.toLowerCase();

  const filtered = products.filter(p => {
    const matchCat = (activeCategory === 'all' || p.catKey === activeCategory);
    const matchText = !q || p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    const matchLoc = (loc === 'all' || p.cityKey.includes(loc) || p.location.toLowerCase().includes(loc));
    return matchCat && matchText && matchLoc;
  });

  renderGrid(filtered);
}

function resetFilters() {
  activeCategory = 'all';
  activeSearchQuery = '';
  activeLocation = 'all';
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
  const heroInput = document.getElementById('heroSearchInput');
  const heroLoc = document.getElementById('heroLocationSelect');
  if (heroInput) heroInput.value = '';
  if (heroLoc) heroLoc.value = 'all';
  applyFilters();
}
window.resetFilters = resetFilters;

// Category pill buttons
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.cat || 'all';
    applyFilters();
  });
});

// Hero Glass Search Form
document.getElementById('heroSearchForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  activeSearchQuery = document.getElementById('heroSearchInput')?.value || '';
  activeLocation = document.getElementById('heroLocationSelect')?.value || 'all';
  applyFilters();
  document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' });
});

// Modal Search Form
document.getElementById('searchForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const val = searchInput?.value || '';
  activeSearchQuery = val;
  applyFilters();
  closeSearch();
  document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' });
});

// Quick search categories in modal
document.querySelectorAll('.search-quick-cat').forEach(cat => {
  cat.addEventListener('click', () => {
    if (searchInput) searchInput.value = cat.textContent;
    activeSearchQuery = cat.textContent;
    applyFilters();
    closeSearch();
    document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' });
  });
});

// ============================================================
// PRODUCT DETAIL MODAL & DURATION CALCULATOR
// ============================================================
const listingOverlay = document.getElementById('listingOverlay');
let currentModalProduct = products[0];
let selectedRentalDays = 1;
let selectedProtectionFeePerDay = 49;

function updateModalPricing() {
  if (!currentModalProduct) return;
  const baseTotal = currentModalProduct.rawPrice * selectedRentalDays;
  const protectionTotal = selectedProtectionFeePerDay * selectedRentalDays;
  const totalAmount = baseTotal + protectionTotal + currentModalProduct.rawDeposit;

  const proceedBtn = document.getElementById('lmProceedBtn');
  if (proceedBtn) {
    proceedBtn.innerHTML = `
      <span>Proceed to Rent · ₹${baseTotal + protectionTotal}</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:16px;height:16px"><path d="m5 12h14M12 5l7 7-7 7"/></svg>
    `;
  }
}

function openListingModal(data) {
  if (!listingOverlay || !data) return;
  currentModalProduct = data;
  selectedRentalDays = 1;

  const img = document.getElementById('lmImage');
  const title = document.getElementById('lmTitle');
  const catBadge = document.getElementById('lmCategoryBadge');
  const location = document.getElementById('lmLocation');
  const price = document.getElementById('lmPrice');
  const desc = document.getElementById('lmDesc');
  const ownerName = document.getElementById('lmOwnerName');
  const ownerInitial = document.getElementById('lmOwnerInitial');
  const deposit = document.getElementById('lmDeposit');

  if (img) img.src = data.image;
  if (title) title.textContent = data.title;
  if (catBadge) catBadge.textContent = data.category;
  if (location) location.textContent = data.location;
  if (price) price.textContent = data.price;
  if (desc) desc.textContent = data.description;
  if (ownerName) ownerName.textContent = data.owner;
  if (ownerInitial) ownerInitial.textContent = data.owner.charAt(0).toUpperCase();
  if (deposit) deposit.textContent = data.deposit;

  // Reset duration chips to 1 day
  document.querySelectorAll('#lmDurationSelector .duration-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.days === '1');
  });

  updateModalPricing();

  listingOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeListingModal() {
  listingOverlay?.classList.remove('open');
  document.body.style.overflow = '';
}

window.openListingModal = openListingModal;
window.closeListingModal = closeListingModal;

// Duration chips click listener
document.querySelectorAll('#lmDurationSelector .duration-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('#lmDurationSelector .duration-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    selectedRentalDays = parseInt(chip.dataset.days || '1', 10);
    updateModalPricing();
  });
});

// Protection plan selector
document.querySelectorAll('#lmProtectionPlanSelector .duration-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('#lmProtectionPlanSelector .duration-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const radio = chip.querySelector('input');
    if (radio) {
      radio.checked = true;
      selectedProtectionFeePerDay = radio.value === 'premium' ? 99 : 49;
    }
    updateModalPricing();
  });
});

// Close button & backdrop for listing modal
document.getElementById('lmClose')?.addEventListener('click', closeListingModal);
listingOverlay?.addEventListener('click', (e) => {
  if (e.target === listingOverlay) closeListingModal();
});

// Proceed to payment button
document.getElementById('lmProceedBtn')?.addEventListener('click', () => {
  closeListingModal();
  openPaymentModal(currentModalProduct, selectedRentalDays, selectedProtectionFeePerDay);
});

// ============================================================
// GLASS PAYMENT & CHECKOUT MODAL
// ============================================================
const paymentOverlay = document.getElementById('paymentOverlay');
let checkoutItem = null;

function openPaymentModal(item, days = 1, protectionFee = 49) {
  if (!paymentOverlay) return;
  checkoutItem = item || currentModalProduct || products[0];

  const payImg = document.getElementById('payItemImage');
  const payTitle = document.getElementById('payItemTitle');
  const payDur = document.getElementById('payItemDuration');
  const payDays = document.getElementById('payDaysCount');
  const payBase = document.getElementById('payBaseRental');
  const payProt = document.getElementById('payProtectionAmount');
  const payDep = document.getElementById('payDepositAmount');
  const payTotal = document.getElementById('payTotalAmount');

  const baseRental = checkoutItem.rawPrice * days;
  const protTotal = protectionFee * days;
  const total = baseRental + protTotal + checkoutItem.rawDeposit;

  if (payImg) payImg.src = checkoutItem.image;
  if (payTitle) payTitle.textContent = checkoutItem.title;
  if (payDur) payDur.textContent = `Rental duration: ${days} ${days === 1 ? 'Day' : 'Days'}`;
  if (payDays) payDays.textContent = days;
  if (payBase) payBase.textContent = `₹${baseRental.toLocaleString('en-IN')}`;
  if (payProt) payProt.textContent = `₹${protTotal.toLocaleString('en-IN')}`;
  if (payDep) payDep.textContent = `₹${checkoutItem.rawDeposit.toLocaleString('en-IN')}`;
  if (payTotal) payTotal.textContent = `₹${total.toLocaleString('en-IN')}`;

  paymentOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePaymentModal() {
  paymentOverlay?.classList.remove('open');
  document.body.style.overflow = '';
}

window.openPaymentModal = openPaymentModal;
window.closePaymentModal = closePaymentModal;

document.getElementById('payClose')?.addEventListener('click', closePaymentModal);
paymentOverlay?.addEventListener('click', (e) => {
  if (e.target === paymentOverlay) closePaymentModal();
});

// Pay Confirm button
document.getElementById('payConfirmBtn')?.addEventListener('click', () => {
  const btn = document.getElementById('payConfirmBtn');
  if (btn) {
    btn.innerHTML = `<span style="display:inline-block;animation:pulse-dot 1s infinite">Processing Escrow Payment...</span>`;
    btn.disabled = true;
  }

  setTimeout(() => {
    if (btn) {
      btn.innerHTML = `<span>✓ Payment Completed</span>`;
      btn.disabled = false;
    }
    closePaymentModal();
    showAuthToast(`🎉 Payment Confirmed! Rental booked for ${checkoutItem?.title}.`);
    
    // Add to dashboard list and show dashboard
    addActiveRentalToDashboard(checkoutItem, selectedRentalDays);
    setTimeout(() => openDashboardModal(), 800);
  }, 1000);
});

// ============================================================
// GLASS USER & OWNER DASHBOARD MODAL
// ============================================================
const dashboardOverlay = document.getElementById('dashboardOverlay');
const tabRenterView = document.getElementById('tabRenterView');
const tabOwnerView = document.getElementById('tabOwnerView');
const renterDashboardPanel = document.getElementById('renterDashboardPanel');
const ownerDashboardPanel = document.getElementById('ownerDashboardPanel');

function openDashboardModal() {
  if (!dashboardOverlay) return;
  // Update name if logged in
  try {
    const user = JSON.parse(localStorage.getItem('skipit_user') || '{}');
    const name = user.name ? user.name.split(' ')[0] : 'Rahul';
    const greet = document.getElementById('dashGreeting');
    if (greet) greet.textContent = `Welcome back, ${name}`;
  } catch (e) {}

  dashboardOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDashboardModal() {
  dashboardOverlay?.classList.remove('open');
  document.body.style.overflow = '';
}

window.openDashboardModal = openDashboardModal;
window.closeDashboardModal = closeDashboardModal;

document.getElementById('dashClose')?.addEventListener('click', closeDashboardModal);
dashboardOverlay?.addEventListener('click', (e) => {
  if (e.target === dashboardOverlay) closeDashboardModal();
});

tabRenterView?.addEventListener('click', () => {
  tabRenterView.classList.add('active');
  tabOwnerView.classList.remove('active');
  if (renterDashboardPanel) renterDashboardPanel.style.display = 'block';
  if (ownerDashboardPanel) ownerDashboardPanel.style.display = 'none';
});

tabOwnerView?.addEventListener('click', () => {
  tabOwnerView.classList.add('active');
  tabRenterView.classList.remove('active');
  if (ownerDashboardPanel) ownerDashboardPanel.style.display = 'block';
  if (renterDashboardPanel) renterDashboardPanel.style.display = 'none';
});

function addActiveRentalToDashboard(item, days) {
  const list = document.getElementById('dashRentalsList');
  if (!list || !item) return;

  const itemHtml = `
    <div class="dash-list-item">
      <div style="display:flex;align-items:center;gap:14px">
        <div style="width:48px;height:48px;border-radius:12px;background:rgba(255,255,255,0.06);overflow:hidden">
          <img src="${item.image}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover">
        </div>
        <div>
          <div style="font-weight:700;color:#fff">${item.title}</div>
          <div style="font-size:.8125rem;color:var(--text-secondary)">Owner: ${item.owner} · ${days} Days Duration</div>
        </div>
      </div>
      <div style="text-align:right">
        <div style="font-weight:800;color:#fff">${item.price}/day</div>
        <span class="badge badge--green" style="margin-top:4px">Active Escrow</span>
      </div>
    </div>
  `;
  list.insertAdjacentHTML('afterbegin', itemHtml);
}

function approveRequest(requestId) {
  const req = document.getElementById(requestId);
  if (req) {
    req.innerHTML = `
      <div style="padding:10px;color:#4ade80;font-weight:600;display:flex;align-items:center;gap:8px">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:18px;height:18px"><polyline points="20 6 9 17 4 12"/></svg>
        Rental Approved! Coordinate pickup with Renter.
      </div>
    `;
    const pendingCount = document.getElementById('dashPendingCount');
    if (pendingCount) pendingCount.textContent = '0';
    showAuthToast('Rental request approved! Owner escrow unlocked.');
  }
}
window.approveRequest = approveRequest;

function declineRequest(requestId) {
  const req = document.getElementById(requestId);
  if (req) {
    req.remove();
    const pendingCount = document.getElementById('dashPendingCount');
    if (pendingCount) pendingCount.textContent = '0';
    showAuthToast('Request declined.');
  }
}
window.declineRequest = declineRequest;

// ============================================================
// GLASS KYC VERIFICATION MODAL
// ============================================================
const kycOverlay = document.getElementById('kycOverlay');

function openKycModal() {
  if (!kycOverlay) return;
  kycOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeKycModal() {
  kycOverlay?.classList.remove('open');
  document.body.style.overflow = '';
}

window.openKycModal = openKycModal;
window.closeKycModal = closeKycModal;

document.getElementById('kycClose')?.addEventListener('click', closeKycModal);
kycOverlay?.addEventListener('click', (e) => {
  if (e.target === kycOverlay) closeKycModal();
});

document.getElementById('kycDropzone')?.addEventListener('click', () => {
  showAuthToast('Document selected: government_id_front_back.pdf');
});

document.getElementById('kycForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  closeKycModal();
  showAuthToast('✓ KYC Documents Submitted! Your profile is now Verified.');
});

// ============================================================
// AUTH MODAL & CONTROLLER
// ============================================================
const authOverlay = document.getElementById('authOverlay');
const tabSignIn = document.getElementById('tabSignIn');
const tabSignUp = document.getElementById('tabSignUp');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const authClose = document.getElementById('authClose');
const authToast = document.getElementById('authToast');
const authToastMsg = document.getElementById('authToastMsg');
const navLoginBtn = document.getElementById('navLoginBtn');
const mobileNavLoginBtn = document.getElementById('mobileNavLoginBtn');
const navUserProfile = document.getElementById('navUserProfile');
const navUserName = document.getElementById('navUserName');
const navUserAvatar = document.getElementById('navUserAvatar');
const navLogoutBtn = document.getElementById('navLogoutBtn');

let authToastTimeout = null;

function showAuthToast(msg) {
  if (!authToast || !authToastMsg) return;
  authToastMsg.textContent = msg;
  authToast.classList.add('show');
  clearTimeout(authToastTimeout);
  authToastTimeout = setTimeout(() => {
    authToast.classList.remove('show');
  }, 3500);
}
window.showAuthToast = showAuthToast;

function setAuthMode(mode) {
  if (mode === 'signin') {
    tabSignIn?.classList.add('active');
    tabSignIn?.setAttribute('aria-selected', 'true');
    tabSignUp?.classList.remove('active');
    tabSignUp?.setAttribute('aria-selected', 'false');
    if (signInForm) signInForm.style.display = 'flex';
    if (signUpForm) signUpForm.style.display = 'none';
  } else {
    tabSignUp?.classList.add('active');
    tabSignUp?.setAttribute('aria-selected', 'true');
    tabSignIn?.classList.remove('active');
    tabSignIn?.setAttribute('aria-selected', 'false');
    if (signInForm) signInForm.style.display = 'none';
    if (signUpForm) signUpForm.style.display = 'flex';
  }
}

function openAuthModal(mode = 'signin') {
  if (!authOverlay) return;
  setAuthMode(mode);
  authOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  const activeForm = mode === 'signin' ? signInForm : signUpForm;
  setTimeout(() => activeForm?.querySelector('input')?.focus(), 150);
}

function closeAuthModal() {
  if (!authOverlay) return;
  authOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;

tabSignIn?.addEventListener('click', () => setAuthMode('signin'));
tabSignUp?.addEventListener('click', () => setAuthMode('signup'));

document.getElementById('switchToSignUp')?.addEventListener('click', (e) => {
  e.preventDefault();
  setAuthMode('signup');
});

document.getElementById('switchToSignIn')?.addEventListener('click', (e) => {
  e.preventDefault();
  setAuthMode('signin');
});

authClose?.addEventListener('click', closeAuthModal);
authOverlay?.addEventListener('click', (e) => {
  if (e.target === authOverlay) closeAuthModal();
});

document.querySelectorAll('.js-open-auth').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    openAuthModal('signin');
  });
});

// Password visibility toggle
document.querySelectorAll('.auth-eye-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const input = document.getElementById(targetId);
    if (!input) return;
    const isPass = input.type === 'password';
    input.type = isPass ? 'text' : 'password';
    btn.innerHTML = isPass ? `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>
      </svg>
    ` : `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    `;
  });
});

// User session management helper
function setUserSession(userName) {
  const initial = userName.trim().charAt(0).toUpperCase() || 'U';
  if (navLoginBtn) navLoginBtn.style.display = 'none';
  if (mobileNavLoginBtn) mobileNavLoginBtn.textContent = 'Account (' + userName.split(' ')[0] + ')';
  if (navUserProfile) navUserProfile.style.display = 'flex';
  if (navUserName) navUserName.textContent = userName.split(' ')[0];
  if (navUserAvatar) navUserAvatar.textContent = initial;
  try {
    localStorage.setItem('skipit_user', JSON.stringify({ name: userName, initial }));
  } catch (e) {}
}

function clearUserSession() {
  if (navLoginBtn) navLoginBtn.style.display = '';
  if (mobileNavLoginBtn) mobileNavLoginBtn.textContent = 'Log in';
  if (navUserProfile) navUserProfile.style.display = 'none';
  try {
    localStorage.removeItem('skipit_user');
  } catch (e) {}
  showAuthToast('Logged out successfully');
}

navLogoutBtn?.addEventListener('click', clearUserSession);

// Restore session on load
try {
  const savedUser = JSON.parse(localStorage.getItem('skipit_user'));
  if (savedUser && savedUser.name) {
    setUserSession(savedUser.name);
  }
} catch (e) {}

// Google continue click
document.getElementById('googleAuthBtn')?.addEventListener('click', () => {
  setUserSession('Ashish Kumar');
  closeAuthModal();
  showAuthToast('Signed in with Google as Ashish Kumar');
});

// Forgot password click
document.getElementById('authForgotBtn')?.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('siEmail')?.value.trim();
  if (email) {
    showAuthToast(`Password reset link sent to ${email}`);
  } else {
    showAuthToast('Please enter your email address first');
    document.getElementById('siEmail')?.focus();
  }
});

// Form Submissions
signInForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('siEmail')?.value.trim();
  const displayName = email.split('@')[0];
  const capitalized = displayName.charAt(0).toUpperCase() + displayName.slice(1);
  setUserSession(capitalized);
  closeAuthModal();
  showAuthToast(`Welcome back, ${capitalized}!`);
});

signUpForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('suName')?.value.trim() || 'New Member';
  setUserSession(name);
  closeAuthModal();
  showAuthToast(`Account created! Welcome to SkipIt, ${name.split(' ')[0]}!`);
});

// ============================================================
// SEARCH MODAL CONTROLLER
// ============================================================
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');

function openSearch() {
  if (!searchOverlay) return;
  searchOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => searchInput?.focus(), 200);
}

function closeSearch() {
  searchOverlay?.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.js-open-search').forEach(btn => {
  btn.addEventListener('click', openSearch);
});

searchOverlay?.addEventListener('click', (e) => {
  if (e.target === searchOverlay) closeSearch();
});

// ============================================================
// GLOBAL ESCAPE & SHORTCUT HANDLER
// ============================================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSearch();
    closeListingModal();
    closeAuthModal();
    closeKycModal();
    closeDashboardModal();
    closePaymentModal();
  }
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    openSearch();
  }
});

// ============================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href === '#' || href.length <= 1) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
