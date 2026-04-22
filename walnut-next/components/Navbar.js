'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const navRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const navbar = navRef.current;
    const logoImg = logoRef.current;

    // Scroll handler
    const onScroll = () => {
      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();

    // Logo cleanup (transparent bg + walnut logo mark)
    if (logoImg) {
      function buildLogoVariant(color) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return null;
        canvas.width = logoImg.naturalWidth;
        canvas.height = logoImg.naturalHeight;
        ctx.drawImage(logoImg, 0, 0);
        const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = image.data;
        const bgTarget = { r: 217, g: 200, b: 173 };
        const bgTolerance = 26;
        for (let i = 0; i < data.length; i += 4) {
          const dr = Math.abs(data[i] - bgTarget.r);
          const dg = Math.abs(data[i + 1] - bgTarget.g);
          const db = Math.abs(data[i + 2] - bgTarget.b);
          if (dr <= bgTolerance && dg <= bgTolerance && db <= bgTolerance) {
            data[i + 3] = 0;
          } else if (data[i + 3] > 0) {
            data[i] = color.r;
            data[i + 1] = color.g;
            data[i + 2] = color.b;
          }
        }
        ctx.putImageData(image, 0, 0);
        return canvas.toDataURL('image/png');
      }

      const processLogo = () => {
        const walnutLogo = buildLogoVariant({ r: 75, g: 46, b: 46 });
        if (walnutLogo) logoImg.src = walnutLogo;
      };

      if (logoImg.complete && logoImg.naturalWidth > 0) {
        processLogo();
      } else {
        logoImg.addEventListener('load', processLogo, { once: true });
      }
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav id="navbar" ref={navRef}>
      <Link href="/home" className="nav-logo">
        <div className="logo-mark">
          <img ref={logoRef} src="/main-logo.png" alt="Walnut Estate Logo" />
        </div>
        <div className="logo-text">
          <span className="logo-text-main">Walnut Estate</span>
          <span className="logo-text-sub">The evolution of the estate</span>
        </div>
      </Link>
      <ul className="nav-links">
        <li><Link href="/buy">Buy</Link></li>
        <li><Link href="/sell">Sell</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><a href="tel:+917234000088" className="nav-phone">+91 72340 00088</a></li>
        <li><a href="#" className="nav-cta">Enquire Now</a></li>
      </ul>
      <button className="nav-hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
