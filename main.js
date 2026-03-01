// ══════════════════════════════════════════
//  BRŪN Coffee — main.js
// ══════════════════════════════════════════

// ── DATA ──
const products = [
  { id:1, name:'Ethiopia Yirgacheffe', origin:'Ethiopia', type:'single', roast:'light', roastLevel:25, price:22, badge:'Best Seller', img:'images/pic1.jpg', notes:'Jasmine · Bergamot · Stone Fruit', desc:'A clean, bright light roast with exceptional floral complexity. Notes of bergamot, jasmine, and ripe stone fruit with a silky finish.' },
  { id:2, name:'Colombia Huila', origin:'Colombia', type:'single', roast:'medium', roastLevel:50, price:20, badge:'', img:'images/pic2.jpg', notes:'Caramel · Plum · Brown Sugar', desc:'A beautifully balanced medium roast from the high-altitude Huila region. Sweet and fruit-forward with a long caramel finish.' },
  { id:3, name:'Guatemala Antigua', origin:'Guatemala', type:'single', roast:'dark', roastLevel:80, price:21, badge:'', img:'images/pic3.jpg', notes:'Smoky · Dark Chocolate · Almond', desc:'A rich, full-bodied dark roast from volcanic Antigua soil. Deep chocolate and subtle smoke give way to a clean, dry finish.' },
  { id:4, name:'Brazil Cerrado', origin:'Brazil', type:'single', roast:'medium', roastLevel:55, price:18, badge:'New', img:'images/pic4.jpg', notes:'Hazelnut · Milk Chocolate · Honey', desc:'A smooth, nutty medium roast beloved for its everyday drinkability. Sweet and approachable with no sharp edges.' },
  { id:5, name:'Sumatra Mandheling', origin:'Indonesia', type:'single', roast:'dark', roastLevel:90, price:23, badge:'', img:'images/pic5.jpg', notes:'Cedar · Dark Earth · Herbal', desc:'An intense, earthy dark roast from the highlands of Sumatra. Full-bodied with a distinctive low-acid, almost syrupy character.' },
  { id:6, name:'Midnight Blend', origin:'Multi-Origin', type:'blend', roast:'dark', roastLevel:85, price:19, badge:'Staff Pick', img:'images/pic6.jpg', notes:'Dark Chocolate · Molasses · Walnut', desc:'Our signature espresso blend — bold, complex, and deeply satisfying. A mix of Brazil, Guatemala, and Sumatra for classic depth.' },
  { id:7, name:'Kenya AA', origin:'Kenya', type:'single', roast:'light', roastLevel:30, price:25, badge:'Limited', img:'images/pic7.jpg', notes:'Blackcurrant · Red Wine · Bright', desc:'An extraordinary light roast with a vibrant, wine-like acidity. One of the most distinctive and prized coffees in the world.' },
  { id:8, name:'Morning Ritual Blend', origin:'Multi-Origin', type:'blend', roast:'medium', roastLevel:50, price:17, badge:'', img:'images/pic8.jpg', notes:'Honey · Toasted Nut · Mild', desc:'The perfect everyday cup — smooth, mellow, and endlessly drinkable. Blended from Colombia and Brazil for reliable morning comfort.' },
];

const brewData = {
  espresso: {
    name: 'Espresso',
    specs: [
      { icon:'⚖️', val:'18g',     label:'Coffee' },
      { icon:'💧', val:'36ml',    label:'Yield' },
      { icon:'⏱️', val:'25–30s',  label:'Extraction' },
      { icon:'🌡️', val:'93°C',    label:'Water Temp' }
    ],
    steps: [
      '<strong>Dose</strong> 18g of finely ground coffee into a clean, dry portafilter.',
      '<strong>Distribute & tamp</strong> evenly with 30 lbs of pressure. The surface should be perfectly level.',
      '<strong>Lock in</strong> the portafilter and start extraction immediately. First drops should appear within 7 seconds.',
      '<strong>Collect</strong> 36ml of espresso in 25–30 seconds. Stop when you see blonding (pale yellow liquid).',
      '<strong>Enjoy</strong> immediately while the crema is fresh and the temperature is at its peak.'
    ]
  },
  pourover: {
    name: 'Pour-Over',
    specs: [
      { icon:'⚖️', val:'25g',     label:'Coffee' },
      { icon:'💧', val:'400ml',   label:'Water' },
      { icon:'⏱️', val:'3–4 min', label:'Total Time' },
      { icon:'🌡️', val:'96°C',    label:'Water Temp' }
    ],
    steps: [
      '<strong>Grind</strong> 25g of coffee to a medium consistency — like coarse sand.',
      '<strong>Rinse</strong> the paper filter with hot water to remove papery flavor and pre-warm the vessel.',
      '<strong>Bloom:</strong> Pour 50ml of water over the grounds and wait 45 seconds. Watch them swell and release CO₂.',
      '<strong>Pour in circles,</strong> starting at the center and spiraling out. Add water in 3–4 pours, maintaining a consistent water level.',
      '<strong>Drawdown</strong> should complete in about 3–4 minutes total from first pour.'
    ]
  },
  french: {
    name: 'French Press',
    specs: [
      { icon:'⚖️', val:'30g',     label:'Coffee' },
      { icon:'💧', val:'500ml',   label:'Water' },
      { icon:'⏱️', val:'4 min',   label:'Steep Time' },
      { icon:'🌡️', val:'92°C',    label:'Water Temp' }
    ],
    steps: [
      '<strong>Grind</strong> 30g of coffee coarsely — like rough sand. Fine grinds will create a muddy, bitter cup.',
      '<strong>Add grounds</strong> to your clean French press and pour in all 500ml of water in one slow pour.',
      '<strong>Stir gently</strong> to ensure all grounds are saturated. Place the lid on but do not press.',
      '<strong>Wait 4 minutes.</strong> Set a timer — over-extraction will make it bitter.',
      '<strong>Press slowly</strong> and steadily — aim for 20–30 seconds. Pour immediately to stop extraction.'
    ]
  },
  aeropress: {
    name: 'AeroPress',
    specs: [
      { icon:'⚖️', val:'17g',       label:'Coffee' },
      { icon:'💧', val:'220ml',     label:'Water' },
      { icon:'⏱️', val:'1.5 min',   label:'Total Time' },
      { icon:'🌡️', val:'85°C',      label:'Water Temp' }
    ],
    steps: [
      '<strong>Set up</strong> the AeroPress in inverted position. Add 17g of medium-fine ground coffee.',
      '<strong>Add water</strong> quickly and stir vigorously for 10 seconds. Leave 1cm of space at the top.',
      '<strong>Steep</strong> for 1 minute — shorter for more clarity, longer for more body.',
      '<strong>Flip carefully</strong> onto your cup, then press with steady pressure for 20–30 seconds. Stop when you hear a hiss.',
      '<strong>Dilute</strong> to taste with hot water, or drink as-is for a concentrated coffee.'
    ]
  },
  cold: {
    name: 'Cold Brew',
    specs: [
      { icon:'⚖️', val:'100g',        label:'Coffee' },
      { icon:'💧', val:'800ml',        label:'Water' },
      { icon:'⏱️', val:'12–18 hrs',    label:'Steep Time' },
      { icon:'🌡️', val:'4°C (cold)',   label:'Temperature' }
    ],
    steps: [
      '<strong>Grind</strong> 100g of your favorite coffee coarsely — even coarser than French press.',
      '<strong>Combine</strong> grounds and cold filtered water in a jar or pitcher. Stir to ensure all grounds are wet.',
      '<strong>Cover</strong> and place in the refrigerator. Steep for 12–18 hours depending on desired strength.',
      '<strong>Filter</strong> through a fine mesh strainer, then through a paper filter for a cleaner result.',
      '<strong>Store</strong> refrigerated for up to 2 weeks. Dilute 1:1 with water or milk when serving over ice.'
    ]
  }
};

const flavors = [
  { name:'Floral',  desc:'Jasmine, rose, hibiscus',       color:'#e8a5b8' },
  { name:'Fruity',  desc:'Citrus, berries, stone fruit',  color:'#f7a256' },
  { name:'Sweet',   desc:'Caramel, honey, chocolate',     color:'#c8922a' },
  { name:'Nutty',   desc:'Almond, hazelnut, pecan',       color:'#a0742a' },
  { name:'Earthy',  desc:'Cedar, tobacco, mushroom',      color:'#7a5a3a' },
  { name:'Spicy',   desc:'Cinnamon, cardamom, pepper',    color:'#c44a2a' },
  { name:'Roasty',  desc:'Dark chocolate, smoky, charred',color:'#3d2010' },
  { name:'Winey',   desc:'Fermented, grape, vinegar',     color:'#8a2040' },
];

// ── STATE ──
let cart = [];
let modalProduct = null;
let modalQty = 1;
let modalSizeAdj = 0;
let selectedBundleIds = new Set();
let quizStep = 1;
const totalSteps = 4;

// ══════════════════════════════════════════
//  CURSOR
// ══════════════════════════════════════════
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});
document.querySelectorAll('button, a, .product-card, .quiz-option, .map-pin').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// ══════════════════════════════════════════
//  NAV — scroll behaviour
// ══════════════════════════════════════════
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// ══════════════════════════════════════════
//  DARK / LIGHT ROAST TOGGLE
// ══════════════════════════════════════════
document.getElementById('modeToggle').addEventListener('click', function () {
  document.body.classList.toggle('light-roast');
  this.textContent = document.body.classList.contains('light-roast') ? '🌑' : '☀️';
});

// ══════════════════════════════════════════
//  TOAST
// ══════════════════════════════════════════
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ══════════════════════════════════════════
//  PRODUCTS
// ══════════════════════════════════════════
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  const filtered = filter === 'all'
    ? products
    : products.filter(p => p.type === filter || p.roast === filter);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy"/>
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <button class="wishlist-btn" onclick="toggleWishlist(this, event)">♡</button>
      </div>
      <div class="product-info">
        <p class="product-origin">${p.origin} · ${p.roast.charAt(0).toUpperCase() + p.roast.slice(1)} Roast</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-notes">${p.notes}</p>
        <div class="roast-bar">
          <div class="roast-label"><span>Light</span><span>Dark</span></div>
          <div class="roast-track"><div class="roast-fill" style="width:${p.roastLevel}%"></div></div>
        </div>
        <div class="product-footer">
          <span class="product-price">$${p.price}</span>
          <div style="display:flex;gap:0.5rem">
            <button class="add-to-cart" style="background:var(--foam);color:var(--text);border:1.5px solid var(--latte)" onclick="openQuickView(${p.id})">Quick View</button>
            <button class="add-to-cart" onclick="addToCart(${p.id})">+ Cart</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProducts(type, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(type);
}

function toggleWishlist(btn, e) {
  e.stopPropagation();
  btn.classList.toggle('active');
  btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
  showToast(btn.classList.contains('active') ? 'Added to wishlist! ❤️' : 'Removed from wishlist');
}

// ══════════════════════════════════════════
//  CART
// ══════════════════════════════════════════
function addToCart(id, qty = 1, grind = 'Whole Bean', size = '250g') {
  const p = products.find(x => x.id === id);
  const existing = cart.find(x => x.id === id && x.grind === grind && x.size === size);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...p, qty, grind, size });
  }
  updateCartUI();
  showToast(`${p.name} added to cart! ☕`);
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((a, b) => a + b.qty, 0);
  document.getElementById('cartCount').textContent = count;

  const total = cart.reduce((a, b) => a + b.price * b.qty, 0);
  document.getElementById('cartTotal').textContent = '$' + total.toFixed(2);

  const container = document.getElementById('cartItems');
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">☕</div>
        <p>Your cart is empty.</p>
        <p style="font-size:0.8rem;color:var(--muted);margin-top:0.5rem">Add some coffee to get started!</p>
      </div>`;
    return;
  }
  container.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-sub">${item.grind} · ${item.size} · Qty: ${item.qty}</div>
        <div class="cart-item-footer">
          <span class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</span>
          <button class="cart-item-remove" onclick="removeFromCart(${i})">Remove</button>
        </div>
      </div>
    </div>
  `).join('');
}

function openCart()  { document.getElementById('cartOverlay').classList.add('open'); }
function closeCart() { document.getElementById('cartOverlay').classList.remove('open'); }
function closeCartOutside(e) {
  if (e.target === document.getElementById('cartOverlay')) closeCart();
}

// ══════════════════════════════════════════
//  QUICK VIEW MODAL
// ══════════════════════════════════════════
function openQuickView(id) {
  const p = products.find(x => x.id === id);
  modalProduct = p;
  modalQty     = 1;
  modalSizeAdj = 0;

  document.getElementById('modalImg').src          = p.img;
  document.getElementById('modalOrigin').textContent = p.origin + ' · ' + p.roast.charAt(0).toUpperCase() + p.roast.slice(1) + ' Roast';
  document.getElementById('modalName').textContent   = p.name;
  document.getElementById('modalDesc').textContent   = p.desc;
  document.getElementById('modalPrice').textContent  = '$' + p.price;
  document.getElementById('modalQty').textContent    = '1';
  document.getElementById('bagCalc').textContent     = 'Approx. 16–20 cups per bag';

  document.querySelectorAll('.grind-opt')[0].classList.add('active');
  document.querySelectorAll('.size-opt')[0].classList.add('active');
  document.getElementById('quickModal').classList.add('open');
}

function closeQuickView() { document.getElementById('quickModal').classList.remove('open'); }
function closeModal(e)    { if (e.target.classList.contains('modal-overlay')) closeQuickView(); }

function selectGrind(btn) {
  document.querySelectorAll('.grind-opt').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function selectSize(btn, size, adj) {
  document.querySelectorAll('.size-opt').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  modalSizeAdj = adj;
  const cups = size === '250g' ? '16–20' : size === '500g' ? '32–40' : '65–80';
  document.getElementById('bagCalc').textContent = `Approx. ${cups} cups per bag`;
  if (modalProduct) document.getElementById('modalPrice').textContent = '$' + (modalProduct.price + adj);
}

function changeQty(delta) {
  modalQty = Math.max(1, modalQty + delta);
  document.getElementById('modalQty').textContent = modalQty;
}

function addFromModal() {
  if (!modalProduct) return;
  const grind = document.querySelector('.grind-opt.active')?.textContent || 'Whole Bean';
  const size  = document.querySelector('.size-opt.active')?.textContent  || '250g';
  addToCart(modalProduct.id, modalQty, grind, size);
  closeQuickView();
}

// ══════════════════════════════════════════
//  COFFEE QUIZ
// ══════════════════════════════════════════
function selectOpt(btn, val) {
  btn.closest('.quiz-options').querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  btn.dataset.val = val;
}

function quizNext() {
  if (quizStep <= totalSteps) {
    document.getElementById('step' + quizStep).classList.remove('active');
    quizStep++;
    const nextEl = document.getElementById('step' + quizStep) || document.getElementById('stepResult');
    nextEl.classList.add('active');
    document.getElementById('quizBar').style.width = Math.min((quizStep - 1) / totalSteps * 100, 100) + '%';

    if (quizStep > totalSteps) {
      document.getElementById('quizNext').style.display = 'none';
      const results = {
        fruity:    'Ethiopia Yirgacheffe',
        chocolate: 'Guatemala Antigua',
        nutty:     'Brazil Cerrado',
        earthy:    'Sumatra Mandheling',
        black:     'Kenya AA',
        milk:      'Colombia Huila',
        sweet:     'Morning Ritual Blend',
        iced:      'Cold Brew Ethiopia Blend'
      };
      const picked = document.querySelector('#step2 .quiz-option.selected');
      const val    = picked ? picked.dataset.val : 'fruity';
      const coffee = results[val] || 'Ethiopia Yirgacheffe';
      document.getElementById('resultCoffee').textContent = coffee;
      document.getElementById('resultDesc').textContent   = `Based on your preferences, ${coffee} is your ideal match — freshly roasted and ready to ship.`;
    }
  }
}

function quizBack() {
  if (quizStep === 1) return;
  (document.getElementById('step' + quizStep) || document.getElementById('stepResult')).classList.remove('active');
  quizStep--;
  document.getElementById('step' + quizStep).classList.add('active');
  document.getElementById('quizBar').style.width = ((quizStep - 1) / totalSteps * 100) + '%';
  document.getElementById('quizNext').style.display = '';
}

// ══════════════════════════════════════════
//  FLAVOR WHEEL
// ══════════════════════════════════════════
function drawFlavorWheel() {
  const canvas = document.getElementById('flavorCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cx = 190, cy = 190, outerR = 180, innerR = 80;
  const angleStep = (Math.PI * 2) / flavors.length;

  flavors.forEach((f, i) => {
    const startAngle = i * angleStep - Math.PI / 2;
    const endAngle   = startAngle + angleStep;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, outerR, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle   = f.color;
    ctx.fill();
    ctx.strokeStyle = '#f5f0e8';
    ctx.lineWidth   = 2;
    ctx.stroke();

    const midAngle = startAngle + angleStep / 2;
    const lx = cx + (outerR * 0.65) * Math.cos(midAngle);
    const ly = cy + (outerR * 0.65) * Math.sin(midAngle);
    ctx.fillStyle     = '#fff';
    ctx.font          = 'bold 11px DM Sans, sans-serif';
    ctx.textAlign     = 'center';
    ctx.textBaseline  = 'middle';
    ctx.fillText(f.name, lx, ly);
  });

  // Centre circle
  ctx.beginPath();
  ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
  ctx.fillStyle = '#f5f0e8';
  ctx.fill();
  ctx.fillStyle    = '#3d1f00';
  ctx.font         = 'bold 14px Playfair Display, serif';
  ctx.textAlign    = 'center';
  ctx.fillText('BRŪN', cx, cy);
}

function renderFlavorLegend() {
  document.getElementById('flavorLegend').innerHTML = flavors.map(f => `
    <div class="flavor-item" onclick="showToast('Showing ${f.name} coffees...')">
      <div class="flavor-swatch" style="background:${f.color}"></div>
      <div>
        <div class="flavor-name">${f.name}</div>
        <div class="flavor-desc">${f.desc}</div>
      </div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════
//  BREWING GUIDE
// ══════════════════════════════════════════
function renderBrewContents() {
  document.getElementById('brewContents').innerHTML = Object.entries(brewData).map(([key, brew]) => `
    <div class="brew-content" id="brew-${key}">
      <div>
        <div class="brew-specs">
          ${brew.specs.map(s => `
            <div class="brew-spec">
              <div class="brew-spec-icon">${s.icon}</div>
              <div class="brew-spec-val">${s.val}</div>
              <div class="brew-spec-label">${s.label}</div>
            </div>`).join('')}
        </div>
      </div>
      <div class="brew-steps">
        ${brew.steps.map((s, i) => `
          <div class="brew-step">
            <div class="step-num">${i + 1}</div>
            <div class="step-text">${s}</div>
          </div>`).join('')}
      </div>
    </div>
  `).join('');
  document.getElementById('brew-espresso').classList.add('active');
}

function selectBrew(key, btn) {
  document.querySelectorAll('.brew-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.brew-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('brew-' + key).classList.add('active');
}

// ══════════════════════════════════════════
//  BUNDLE BUILDER
// ══════════════════════════════════════════
function renderBundle() {
  document.getElementById('bundleItems').innerHTML = products.map(p => `
    <div class="bundle-item" id="bi-${p.id}" onclick="toggleBundle(${p.id})">
      <img src="${p.img}" alt="${p.name}"/>
      <div class="bundle-item-info">
        <div class="bundle-item-name">${p.name}</div>
        <div class="bundle-item-sub">${p.origin} · $${p.price}</div>
      </div>
      <div class="bundle-check" id="bc-${p.id}">✓</div>
    </div>
  `).join('');
}

function toggleBundle(id) {
  if (selectedBundleIds.has(id)) selectedBundleIds.delete(id);
  else selectedBundleIds.add(id);
  document.getElementById('bi-' + id).classList.toggle('selected', selectedBundleIds.has(id));
  updateBundleSummary();
}

function updateBundleSummary() {
  const selected  = products.filter(p => selectedBundleIds.has(p.id));
  const count     = selected.length;
  const discount  = count >= 5 ? 0.20 : count >= 3 ? 0.15 : 0;
  const subtotal  = selected.reduce((a, p) => a + p.price, 0);
  const total     = subtotal * (1 - discount);

  document.getElementById('bundleSelectedList').innerHTML = selected.length
    ? selected.map(p => `<div class="bundle-sel-item"><span>${p.name}</span><span>$${p.price}</span></div>`).join('')
    : '<p style="color:rgba(245,240,232,0.4);font-size:0.85rem">No coffees selected yet.</p>';

  document.getElementById('bundleTotal').textContent = '$' + total.toFixed(2);

  const discountEl = document.getElementById('bundleDiscount');
  if (discount > 0)       discountEl.textContent = `🎉 ${discount * 100}% bundle discount applied!`;
  else if (count === 2)   discountEl.textContent = 'Add 1 more for 15% off!';
  else if (count === 1)   discountEl.textContent = 'Add 2 more for 15% off!';
  else                    discountEl.textContent = '';
}

// ══════════════════════════════════════════
//  SHIPPING TRACKER
// ══════════════════════════════════════════
function animateTracker() {
  setTimeout(() => {
    document.getElementById('trackerProgress').style.width = '40%';
  }, 500);
}

// ══════════════════════════════════════════
//  LOYALTY BAR
// ══════════════════════════════════════════
function animateLoyalty() {
  const pts = 2450, target = 3000;
  setTimeout(() => {
    document.getElementById('loyaltyBar').style.width = (pts / target * 100) + '%';
  }, 600);
}

// ══════════════════════════════════════════
//  GIFT CARD
// ══════════════════════════════════════════
function setGiftAmt(btn, amt) {
  document.querySelectorAll('.gift-amt').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('giftAmountDisplay').textContent = amt;
}

function updateGiftMsg() {
  const msg = document.getElementById('giftMessage').value;
  document.getElementById('giftMsgDisplay').textContent = msg || 'Enjoy a perfect cup, on us. ☕';
}

// ══════════════════════════════════════════
//  INTERSECTION OBSERVER (scroll animations)
// ══════════════════════════════════════════
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.id === 'tracker') animateTracker();
      if (entry.target.id === 'loyalty') animateLoyalty();
    }
  });
}, { threshold: 0.3 });

// ══════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  drawFlavorWheel();
  renderFlavorLegend();
  renderBrewContents();
  renderBundle();
  document.querySelectorAll('#tracker, #loyalty').forEach(el => observer.observe(el));
});
