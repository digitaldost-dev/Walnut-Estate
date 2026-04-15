// ── Custom Cursor ──
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animRing() {
  rx += (mx - rx) * .12;
  ry += (my - ry) * .12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
})();

document.querySelectorAll('a, button, .prop-card, .nbr-card, .article-card, .service-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width  = '18px';
    cursor.style.height = '18px';
    ring.style.width    = '56px';
    ring.style.height   = '56px';
    ring.style.opacity  = '.25';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width  = '10px';
    cursor.style.height = '10px';
    ring.style.width    = '38px';
    ring.style.height   = '38px';
    ring.style.opacity  = '.5';
  });
});

// ── Navbar scroll ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  syncLogoVariant();
});

// ── Logo cleanup (transparent bg + walnut logo mark) ──
(function removeLogoCreamBackground() {
  const logoImg = document.querySelector('.logo-mark img');
  const navbar  = document.getElementById('navbar');
  if (!logoImg) return;

  function buildLogoVariant(color) {
    const canvas = document.createElement('canvas');
    const ctx    = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return null;

    canvas.width  = logoImg.naturalWidth;
    canvas.height = logoImg.naturalHeight;
    ctx.drawImage(logoImg, 0, 0);

    const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data  = image.data;

    const bgTarget    = { r: 217, g: 200, b: 173 };
    const bgTolerance = 26;

    for (let i = 0; i < data.length; i += 4) {
      const dr = Math.abs(data[i]     - bgTarget.r);
      const dg = Math.abs(data[i + 1] - bgTarget.g);
      const db = Math.abs(data[i + 2] - bgTarget.b);
      if (dr <= bgTolerance && dg <= bgTolerance && db <= bgTolerance) {
        data[i + 3] = 0; // transparent
      } else if (data[i + 3] > 0) {
        data[i]     = color.r;
        data[i + 1] = color.g;
        data[i + 2] = color.b;
      }
    }

    ctx.putImageData(image, 0, 0);
    return canvas.toDataURL('image/png');
  }

  window.syncLogoVariant = function syncLogoVariant() {
    if (!logoImg.dataset.logoWalnut) return;
    logoImg.src = logoImg.dataset.logoWalnut;
  };

  const processLogo = () => {
    const walnutLogo = buildLogoVariant({ r: 75, g: 46, b: 46 });
    if (!walnutLogo) return;
    logoImg.dataset.logoWalnut = walnutLogo;
    syncLogoVariant();
  };

  if (logoImg.complete) {
    processLogo();
  } else {
    logoImg.addEventListener('load', processLogo, { once: true });
  }
})();

// ── Reveal on scroll ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: .1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ── Testimonials ──
let cur = 0;
const slides = document.querySelectorAll('.testi-slide');
const dots   = document.querySelectorAll('.testi-dot');

function setSlide(n) {
  slides[cur].classList.remove('active');
  dots[cur].classList.remove('active');
  cur = n;
  slides[cur].classList.add('active');
  dots[cur].classList.add('active');
}

setInterval(() => setSlide((cur + 1) % slides.length), 5500);

// ── Search tabs ──
function setTab(el) {
  document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

// ── Services carousel ──
function scrollServices(direction) {
  const grid = document.querySelector('.services-grid');
  const cardWidth = 320; // 300px + 20px gap
  grid.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}

// ══════════════════════════════════════
// PROPERTY DETAIL MODAL
// ══════════════════════════════════════
(function() {
  const propertyData = {
    'arcadia-penthouse': {
      tag: 'Featured',
      name: 'The Arcadia Penthouse',
      location: 'Gomti Nagar Extension, Lucknow',
      price: '₹ 8.4 Crore',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=90',
      specs: { beds: '4', baths: '4', area: '4,200', parking: '2' },
      description: 'Perched atop one of Gomti Nagar\'s most prestigious towers, The Arcadia Penthouse is a masterclass in elevated living. Floor-to-ceiling windows frame sweeping views of the Gomti river and the city skyline. The open-plan living area flows seamlessly into a private terrace garden, while the chef\'s kitchen features imported Italian marble countertops and Gaggenau appliances. Each of the four bedrooms is a private retreat, with the master suite boasting a walk-in wardrobe and a spa-inspired bathroom with a freestanding soaking tub.',
      amenities: ['Private Terrace', 'Italian Marble', 'Modular Kitchen', 'River View', 'Smart Home', 'Private Lift', 'Home Theatre', 'Wine Cellar', 'Infinity Pool Access', 'Concierge']
    },
    'villa-serenova': {
      tag: 'New',
      name: 'Villa Serenova',
      location: 'Indira Nagar, Lucknow',
      price: '₹ 4.2 Crore',
      image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=1200&q=90',
      specs: { beds: '3', baths: '3', area: '2,800', parking: '2' },
      description: 'Villa Serenova embodies the art of modern tropical living, tucked away in one of Indira Nagar\'s most sought-after lanes. Behind its minimalist facade lies an explosion of natural light and curated greenery. The double-height living room opens to a landscaped courtyard, creating a seamless indoor-outdoor experience. Designed by a leading Lucknow architect, each space has been crafted with handpicked natural materials — teak, travertine, and linen — creating a warmth that photographs simply cannot capture.',
      amenities: ['Double-Height Living', 'Courtyard Garden', 'Teak Flooring', 'Rooftop Lounge', 'Solar Powered', 'Rainwater Harvest', 'Modular Kitchen', 'Study Room']
    },
    'meridian-heights': {
      tag: 'Exclusive',
      name: 'Meridian Heights',
      location: 'Aliganj, Lucknow',
      price: '₹ 6.1 Crore',
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&q=90',
      specs: { beds: '4', baths: '5', area: '3,600', parking: '3' },
      description: 'Meridian Heights is a rare find in Aliganj — a contemporary duplex apartment that challenges convention. Spanning two floors connected by a sculptural floating staircase, the residence offers a lifestyle typically reserved for independent homes. The lower level houses expansive entertaining spaces with 12-foot ceilings, while the upper floor is a private family sanctuary. The wraparound balcony provides panoramic views of the Aliganj skyline, making every evening feel like a private event.',
      amenities: ['Duplex Layout', 'Floating Staircase', '12-ft Ceilings', 'Wraparound Balcony', 'VRV AC', 'Italian Bath Fittings', 'Club Access', 'Gym', 'Swimming Pool', 'Children\'s Area']
    },
    'the-courtyard': {
      tag: '',
      name: 'The Courtyard',
      location: 'Koyal Vihar, Lucknow',
      price: '₹ 3.8 Crore',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=90',
      specs: { beds: '3', baths: '3', area: '2,400', parking: '1' },
      description: 'Inspired by the havelis of Lucknow and reimagined for modern life, The Courtyard is an architectural love letter to the city. The central open-air courtyard — ringed by mature jasmine and neem trees — serves as the home\'s breathing heart, flooding every room with filtered light and fragrant air. Hand-chiselled jali screens reference Nawabi craftsmanship while maintaining complete privacy. The master suite opens directly onto a private sit-out overlooking the courtyard, creating a retreat within a retreat.',
      amenities: ['Central Courtyard', 'Jali Screens', 'Handcrafted Details', 'Private Garden', 'Vastu Compliant', 'Servant Quarter', 'Puja Room', 'Terrace Garden']
    },
    'greens-pavilion': {
      tag: 'Golf View',
      name: 'Greens Pavilion',
      location: 'Alambagh, Lucknow',
      price: '₹ 5.5 Crore',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90',
      specs: { beds: '4', baths: '4', area: '3,800', parking: '2' },
      description: 'Greens Pavilion sits at the edge of Lucknow\'s premier golf course, offering a lifestyle where mornings begin with mist rolling across manicured fairways. The residence has been designed with an east-west orientation to capture the course\'s most dramatic views from every principal room. The interiors channel a refined resort aesthetic — think whitewashed walls, statement lighting, and an abundance of natural stone. The private garden backs directly onto the 7th hole, creating a sense of endless green space.',
      amenities: ['Golf Course View', 'East-West Orientation', 'Natural Stone', 'Private Garden', 'Smart Lighting', 'Home Automation', 'Club Membership', 'Jogging Track', 'Spa Access', 'Utility Room']
    }
  };

  // Inject modal HTML
  const modalHTML = `
    <div class="prop-modal-overlay" id="propModalOverlay"></div>
    <div class="prop-modal" id="propModal">
      <div class="prop-modal-img" id="propModalImg"></div>
      <div class="prop-modal-body" id="propModalBody">
        <button class="prop-modal-close" id="propModalClose">✕</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const overlay = document.getElementById('propModalOverlay');
  const modal   = document.getElementById('propModal');
  const modalImg = document.getElementById('propModalImg');
  const modalBody = document.getElementById('propModalBody');
  const closeBtn = document.getElementById('propModalClose');

  function openModal(id) {
    const p = propertyData[id];
    if (!p) return;

    modalImg.style.backgroundImage = `url('${p.image}')`;

    const specsHTML = `
      <div class="pm-spec"><div class="pm-spec-val">${p.specs.beds}</div><div class="pm-spec-key">Bedrooms</div></div>
      <div class="pm-spec"><div class="pm-spec-val">${p.specs.baths}</div><div class="pm-spec-key">Bathrooms</div></div>
      <div class="pm-spec"><div class="pm-spec-val">${p.specs.area}</div><div class="pm-spec-key">Sq. Ft.</div></div>
      <div class="pm-spec"><div class="pm-spec-val">${p.specs.parking}</div><div class="pm-spec-key">Parking</div></div>
    `;

    const amenitiesHTML = p.amenities.map(a => `<span class="pm-amenity">${a}</span>`).join('');

    modalBody.innerHTML = `
      <button class="prop-modal-close" onclick="closePropertyModal()">✕</button>
      ${p.tag ? `<div class="pm-tag">${p.tag}</div>` : ''}
      <div class="pm-name">${p.name}</div>
      <div class="pm-loc">
        <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        ${p.location}
      </div>
      <div class="pm-price">${p.price}</div>
      <div class="pm-price-note">Price indicative — contact us for current availability</div>

      <div class="pm-divider"></div>

      <div class="pm-section-title">Property Details</div>
      <div class="pm-specs">${specsHTML}</div>

      <div class="pm-divider"></div>

      <div class="pm-section-title">About This Property</div>
      <p class="pm-description">${p.description}</p>

      <div class="pm-divider"></div>

      <div class="pm-section-title">Features & Amenities</div>
      <div class="pm-amenities">${amenitiesHTML}</div>

      <div class="pm-actions">
        <a href="tel:+917234000088" class="btn btn-primary">Schedule Viewing</a>
        <a href="https://wa.me/+917234000088?text=Hi, I'm interested in ${encodeURIComponent(p.name)} (${p.price})" target="_blank" class="btn btn-outline">WhatsApp</a>
      </div>
    `;

    requestAnimationFrame(() => {
      overlay.classList.add('active');
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeModal() {
    overlay.classList.remove('active');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Expose globally
  window.closePropertyModal = closeModal;

  // Attach click to all prop-cards
  document.querySelectorAll('.prop-card[data-property]').forEach(card => {
    card.addEventListener('click', () => {
      openModal(card.dataset.property);
    });
  });

  // Close on overlay click
  overlay.addEventListener('click', closeModal);

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
})();
