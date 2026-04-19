'use client';
import { useEffect } from 'react';
import PropertyModal from '../../components/PropertyModal';
import './buy.css';

export default function BuyClient() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg hero-bg-buy"></div>
        <div className="hero-overlay"></div>
        <div className="hero-vignette"></div>
        <div className="hero-deco-ring"></div>
        <div className="hero-deco-ring-2"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">Buy with Walnut Estate</div>
          <h1 className="hero-headline">Find your next<br /><em>legacy home</em></h1>
          <p className="hero-tagline">Browse curated residences, guided viewings, and premium purchase support for discerning buyers.</p>
        </div>
        <div className="scroll-cue"><div className="scroll-cue-line"></div><div className="scroll-cue-text">Scroll</div></div>
      </section>

      {/* BUYER SERVICES */}
      <section className="buy-sell-page">
        <div className="buy-sell-inner">
          <div className="buy-sell-copy reveal">
            <div className="section-eyebrow">Buyer Services</div>
            <h2 className="section-heading">A curated buying experience for ambitious homeowners.</h2>
            <p className="section-copy">Access handpicked luxury properties, private previews, and expert market guidance.</p>
            <div className="buy-sell-actions">
              <a href="tel:+917234000088" className="btn btn-primary">Request a Call</a>
              <a href="#" className="btn btn-outline">View Buyer Guide</a>
            </div>
          </div>
          <div className="buy-sell-grid reveal d2">
            <article className="buy-card">
              <div className="card-label">Featured</div>
              <h3>Signature residences</h3>
              <p>Discover exceptional homes that combine design, location, and value.</p>
              <ul className="card-features">
                <li>Curated premium listings</li>
                <li>Private viewing experiences</li>
                <li>Fast decision support</li>
              </ul>
              <a href="#featured-properties" className="card-link">See featured homes</a>
            </article>
            <article className="buy-card">
              <div className="card-label">Advisor</div>
              <h3>Personal guidance</h3>
              <p>Navigate the market with dedicated advisors and a tailored purchase plan.</p>
              <ul className="card-features">
                <li>Market intelligence</li>
                <li>Negotiation support</li>
                <li>Closing coordination</li>
              </ul>
              <a href="tel:+917234000088" className="card-link">Meet our team</a>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="properties-section" id="featured-properties">
        <div className="section-header reveal">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--cream-dk)', opacity: '.7', marginBottom: '16px', fontWeight: '600' }}>
              <span style={{ width: '28px', height: '1.5px', background: 'var(--cream-dk)', opacity: '.5', borderRadius: '2px', display: 'block' }}></span>
              Featured Properties
            </div>
            <h2 className="section-heading-light">Handpicked <em>Selections</em></h2>
          </div>
          <a href="tel:+917234000088" className="view-all">Enquire About Any →</a>
        </div>
        <div className="properties-grid reveal">
          <div className="prop-card tall" data-property="arcadia-penthouse">
            <div className="prop-bg i-p1"></div><div className="prop-overlay"></div>
            <div className="prop-info"><div className="prop-tag">Featured</div><div className="prop-name">The Arcadia Penthouse</div><div className="prop-loc">📍 Gomti Nagar, Lucknow</div><div className="prop-price">₹ 8.4 Crore</div><div className="prop-meta"><span>🛏 4 Beds</span><span>🛁 4 Baths</span><span>📐 4,200 sqft</span></div></div>
          </div>
          <div className="prop-card" data-property="villa-serenova"><div className="prop-bg i-p2"></div><div className="prop-overlay"></div><div className="prop-info"><div className="prop-tag">New</div><div className="prop-name">Villa Serenova</div><div className="prop-loc">📍 Indira Nagar, Lucknow</div><div className="prop-price">₹ 4.2 Crore</div></div></div>
          <div className="prop-card" data-property="meridian-heights"><div className="prop-bg i-p3"></div><div className="prop-overlay"></div><div className="prop-info"><div className="prop-tag">Exclusive</div><div className="prop-name">Meridian Heights</div><div className="prop-loc">📍 Aliganj, Lucknow</div><div className="prop-price">₹ 6.1 Crore</div></div></div>
          <div className="prop-card" data-property="the-courtyard"><div className="prop-bg i-p4"></div><div className="prop-overlay"></div><div className="prop-info"><div className="prop-name">The Courtyard</div><div className="prop-loc">📍 Koyal Vihar, Lucknow</div><div className="prop-price">₹ 3.8 Crore</div></div></div>
          <div className="prop-card" data-property="greens-pavilion"><div className="prop-bg i-p5"></div><div className="prop-overlay"></div><div className="prop-info"><div className="prop-tag">Golf View</div><div className="prop-name">Greens Pavilion</div><div className="prop-loc">📍 Alambagh, Lucknow</div><div className="prop-price">₹ 5.5 Crore</div></div></div>
        </div>
      </section>

      {/* PROPERTY SEGMENTS */}
      <section className="segments-section">
        <div className="section-header reveal">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--cream-dk)', opacity: '.7', marginBottom: '16px', fontWeight: '600' }}>
              <span style={{ width: '28px', height: '1.5px', background: 'var(--cream-dk)', opacity: '.5', borderRadius: '2px', display: 'block' }}></span>
              Property Types
            </div>
            <h2 className="section-heading-light">Browse by <em>Category</em></h2>
          </div>
          <a href="tel:+917234000088" className="view-all">Find Your Type →</a>
        </div>
        <div className="segments-grid-new reveal">
          {[
            { bg: 'seg-bg-land', title: 'Land', count: '38 Plots Available' },
            { bg: 'seg-bg-house', title: 'House', count: '64 Properties' },
            { bg: 'seg-bg-flat', title: 'Flat', count: '112 Apartments' },
            { bg: 'seg-bg-villa', title: 'Villa', count: '29 Villas' },
            { bg: 'seg-bg-pent', title: 'Penthouse', count: '17 Penthouses' },
          ].map(seg => (
            <div key={seg.title} className="seg-card">
              <div className={`seg-bg ${seg.bg}`}></div>
              <div className="seg-overlay"></div>
              <div className="seg-info">
                <div className="seg-icon-line"></div>
                <div className="seg-title">{seg.title}</div>
                <div className="seg-count">{seg.count}</div>
                <a href="tel:+917234000088" className="seg-cta">Explore <span>→</span></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg"></div>
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <div className="cta-eyebrow">Ready to Buy?</div>
          <h2 className="cta-heading">Let&apos;s Find Your<br /><em>Perfect Home</em></h2>
          <p className="cta-sub">Our advisors are ready to guide you through every step — from shortlisting to keys in hand.</p>
          <div className="cta-btns">
            <a href="tel:7234000088" className="btn btn-primary">Call 72340 00088</a>
            <a href="https://wa.me/+917234000088/" className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          </div>
        </div>
      </section>

      <PropertyModal />
    </>
  );
}
