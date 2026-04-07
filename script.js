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
