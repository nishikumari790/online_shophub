// ── PRODUCT DATA ──
const products = [
  { id:1,  name:"Sony WH-1000XM5 Headphones",      category:"Electronics",      price:279,  rating:4.9, reviews:2841,  image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",  badge:"sale", origPrice:349  },
  { id:2,  name:'Samsung 65" 4K QLED TV',           category:"Electronics",      price:899,  rating:4.7, reviews:1203,  image:"https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&q=80",  badge:null,   origPrice:null },
  { id:3,  name:"Apple MacBook Air M3",             category:"Electronics",      price:1099, rating:4.8, reviews:984,   image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",  badge:"new",  origPrice:null },
  { id:4,  name:"Logitech MX Master 3S",            category:"Electronics",      price:89,   rating:4.6, reviews:3201,  image:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",  badge:"sale", origPrice:119  },
  { id:5,  name:"Kindle Paperwhite 11th Gen",       category:"Electronics",      price:129,  rating:4.7, reviews:7823,  image:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80",  badge:null,   origPrice:null },
  { id:6,  name:'iPad Pro 12.9" M4',                category:"Electronics",      price:1099, rating:4.9, reviews:542,   image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80",  badge:"new",  origPrice:null },
  { id:7,  name:"Bose QuietComfort 45",             category:"Electronics",      price:249,  rating:4.5, reviews:1876,  image:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80",  badge:"sale", origPrice:329  },
  { id:8,  name:"Mechanical Gaming Keyboard",       category:"Electronics",      price:149,  rating:4.4, reviews:2134,  image:"https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&q=80",  badge:null,   origPrice:null },
  { id:9,  name:"Linen Oversized Blazer",           category:"Fashion",          price:119,  rating:4.6, reviews:834,   image:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80",  badge:"new",  origPrice:null },
  { id:10, name:"Vintage Denim Jacket",             category:"Fashion",          price:89,   rating:4.5, reviews:1243,  image:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80",  badge:"sale", origPrice:129  },
  { id:11, name:"Merino Wool Sweater",              category:"Fashion",          price:75,   rating:4.7, reviews:623,   image:"https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80",  badge:null,   origPrice:null },
  { id:12, name:"Leather Chelsea Boots",            category:"Fashion",          price:199,  rating:4.8, reviews:410,   image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80",  badge:"sale", origPrice:269  },
  { id:13, name:"Minimalist Watch — Silver",        category:"Fashion",          price:145,  rating:4.6, reviews:892,   image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",  badge:null,   origPrice:null },
  { id:14, name:"Sunglasses Polarized UV400",       category:"Fashion",          price:58,   rating:4.3, reviews:2041,  image:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",  badge:"sale", origPrice:78   },
  { id:15, name:"Dyson V15 Detect Vacuum",          category:"Home Appliances",  price:649,  rating:4.8, reviews:3421,  image:"https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&q=80",  badge:null,   origPrice:null },
  { id:16, name:"Instant Pot Duo 7-in-1",           category:"Home Appliances",  price:89,   rating:4.7, reviews:9812,  image:"https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&q=80",  badge:"sale", origPrice:119  },
  { id:17, name:"KitchenAid Stand Mixer",           category:"Home Appliances",  price:379,  rating:4.9, reviews:5621,  image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80",  badge:null,   origPrice:null },
  { id:18, name:"Nespresso Vertuo Next",            category:"Home Appliances",  price:159,  rating:4.6, reviews:4231,  image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",  badge:"new",  origPrice:null },
  { id:19, name:"Philips Air Purifier AC2887",      category:"Home Appliances",  price:249,  rating:4.5, reviews:1843,  image:"https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=400&q=80",  badge:null,   origPrice:null },
  { id:20, name:"Atomic Habits — James Clear",      category:"Books",            price:14,   rating:4.9, reviews:48231, image:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80",  badge:"sale", origPrice:19   },
  { id:21, name:"The Psychology of Money",          category:"Books",            price:16,   rating:4.8, reviews:22410, image:"https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80",  badge:null,   origPrice:null },
  { id:22, name:"Dune — Frank Herbert",             category:"Books",            price:12,   rating:4.7, reviews:31200, image:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",  badge:null,   origPrice:null },
  { id:23, name:"Deep Work — Cal Newport",          category:"Books",            price:15,   rating:4.6, reviews:18900, image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80",  badge:"new",  origPrice:null },
  { id:24, name:"The Design of Everyday Things",   category:"Books",            price:18,   rating:4.5, reviews:8340,  image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",  badge:null,   origPrice:null },
];

// ── APP STATE ──
let state = {
  category:  'all',
  maxPrice:  500,
  minRating: 0,
  sort:      'default',
  search:    '',
  cart:      0,
  liked:     new Set()
};

// ── HELPERS ──

/**
 * Build a star-string like ★★★★½ from a numeric rating.
 * @param {number} rating
 * @returns {string}
 */
function starsHTML(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5;
  const empty = 5 - Math.ceil(rating);
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

// ── RENDER ──

/**
 * Inject product cards into the grid element.
 * @param {Array} list - filtered & sorted product array
 */
function renderCards(list) {
  const grid = document.getElementById('productGrid');

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <span class="icon">🔍</span>
        No products match your filters.<br/>
        Try adjusting the search or filter options.
      </div>`;
    return;
  }

  grid.innerHTML = list.map((p, i) => `
    <div class="product-card" style="animation-delay:${i * 40}ms">
      ${p.badge === 'sale' ? '<span class="badge-sale">Sale</span>' : ''}
      ${p.badge === 'new'  ? '<span class="badge-new">New</span>'  : ''}
      <span
        class="wishlist-btn ${state.liked.has(p.id) ? 'liked' : ''}"
        onclick="toggleLike(event, ${p.id})"
        title="Add to Wishlist"
      >${state.liked.has(p.id) ? '❤️' : '🤍'}</span>

      <div class="card-image-wrap">
        <img class="card-image" src="${p.image}" alt="${p.name}" loading="lazy" />
      </div>

      <div class="card-body">
        <span class="card-category-tag">${p.category}</span>
        <div class="card-name">${p.name}</div>
        <div class="card-rating">
          <span class="stars">${starsHTML(p.rating)}</span>
          <span>${p.rating} (${p.reviews.toLocaleString()})</span>
        </div>
        <div class="card-footer">
          <div>
            <span class="card-price">$${p.price}</span>
            ${p.origPrice ? `<span class="card-price-original">$${p.origPrice}</span>` : ''}
          </div>
          <button class="add-cart-btn" onclick="addToCart(event, '${p.name}')">+ Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}


function applyFilters() {
  state.sort   = document.getElementById('sortSelect').value;
  state.search = document.getElementById('searchInput').value.toLowerCase();

  let list = products.filter(p => {
    if (state.category !== 'all' && p.category !== state.category) return false;
    if (p.price > state.maxPrice) return false;
    if (p.rating < state.minRating) return false;
    if (state.search &&
        !p.name.toLowerCase().includes(state.search) &&
        !p.category.toLowerCase().includes(state.search)) return false;
    return true;
  });

  if (state.sort === 'price-asc')    list.sort((a, b) => a.price  - b.price);
  if (state.sort === 'price-desc')   list.sort((a, b) => b.price  - a.price);
  if (state.sort === 'rating-desc')  list.sort((a, b) => b.rating - a.rating);

  const catName = state.category === 'all' ? 'All Products' : state.category;
  document.getElementById('productsTitle').textContent    = catName;
  document.getElementById('productsSubtitle').textContent =
    `Showing ${list.length} product${list.length !== 1 ? 's' : ''}`;

  renderCards(list);
}

// ── CATEGORY HANDLERS ──

/*
 * @param {HTMLElement} el - the clicked <li>
 */
function setSidebarCat(el) {
  document.querySelectorAll('#sidebarCatList li').forEach(li => li.classList.remove('active'));
  el.classList.add('active');
  state.category = el.dataset.cat;

  // Keep top tab pills in sync
  document.querySelectorAll('.cat-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === state.category);
  });

  applyFilters();
  closeSidebar();
}

/*
 * @param {HTMLElement} el - the clicked button
 */
function setTabCat(el) {
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  state.category = el.dataset.cat;

  // Keep sidebar list in sync
  document.querySelectorAll('#sidebarCatList li').forEach(li => {
    li.classList.toggle('active', li.dataset.cat === state.category);
  });

  applyFilters();
}

// ── PRICE RANGE ──

/*
 * @param {string|number} val - current slider value
 */
function updatePrice(val) {
  state.maxPrice = parseInt(val, 10);
  document.getElementById('priceLabel').textContent = '$' + val;
  applyFilters();
}

// ── RATING FILTER ──

/**
 * Handle clicks on the rating option rows.
 * @param {HTMLElement} el - the clicked row
 */
function setRating(el) {
  document.querySelectorAll('.rating-opt').forEach(r => r.classList.remove('active'));
  el.classList.add('active');
  state.minRating = parseFloat(el.dataset.rating);
  applyFilters();
}

// ── CLEAR ALL ──

/** Reset every filter and sort control back to defaults. */
function clearFilters() {
  state.category  = 'all';
  state.maxPrice  = 500;
  state.minRating = 0;
  state.sort      = 'default';
  state.search    = '';

  document.getElementById('priceSlider').value        = 500;
  document.getElementById('priceLabel').textContent   = '$500';
  document.getElementById('sortSelect').value         = 'default';
  document.getElementById('searchInput').value        = '';

  document.querySelectorAll('.rating-opt').forEach((r, i) => r.classList.toggle('active', i === 0));
  document.querySelectorAll('#sidebarCatList li').forEach((li, i) => li.classList.toggle('active', i === 0));
  document.querySelectorAll('.cat-tab').forEach((t, i) => t.classList.toggle('active', i === 0));

  applyFilters();
}

// ── CART ──

/**
 * Increment cart counter and show a toast message.
 * @param {Event} e
 * @param {string} name - product name
 */
function addToCart(e, name) {
  e.stopPropagation();
  state.cart++;
  document.getElementById('cartCount').textContent = state.cart;
  showToast(`"${name.substring(0, 30)}…" added to cart!`);
}

// ── WISHLIST ──

/**
 * Toggle the liked state for a product and re-render.
 * @param {Event} e
 * @param {number} id - product id
 */
function toggleLike(e, id) {
  e.stopPropagation();
  if (state.liked.has(id)) {
    state.liked.delete(id);
  } else {
    state.liked.add(id);
  }
  applyFilters();
}

// ── TOAST ──
let toastTimer;

/**
 
 * @param {string} msg
 */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── MOBILE SIDEBAR ──

/** Open the filter sidebar overlay on mobile. */
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('overlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

/** Close the filter sidebar overlay on mobile. */
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
  document.body.style.overflow = '';
}

// ── SEARCH WITH DEBOUNCE ──
let searchTimer;
document.getElementById('searchInput').addEventListener('input', function () {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(applyFilters, 280);
});

// ── INIT ──
applyFilters();
