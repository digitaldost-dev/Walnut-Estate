'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import SearchDropdown from '../../components/SearchDropdown';
import TestimonialSlider from '../../components/TestimonialSlider';
import ServicesCarousel from '../../components/ServicesCarousel';
import PropertyModal from '../../components/PropertyModal';

export default function HomeClient() {
  const [activeTab, setActiveTab] = useState('Buy');

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
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-vignette"></div>
        <div className="hero-deco-ring"></div>
        <div className="hero-deco-ring-2"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">Lucknow&apos;s Finest Residences</div>
          <h1 className="hero-headline">Where <em>Craft</em><br />Meets <em>Home</em></h1>
          <p className="hero-tagline">Curating extraordinary living spaces for discerning individuals across Lucknow.</p>
          <div className="hero-search">
            <div className="hero-search-tabs">
              {['Buy', 'Commercial', 'New Projects'].map(tab => (
                <button key={tab} className={`search-tab${activeTab === tab ? ' active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
              ))}
            </div>
            <div className="hero-search-row">
              <div className="search-input-wrap">
                <div className="search-input-label">Location</div>
                <input className="search-input-field" type="text" placeholder="Lucknow, Gomti Nagar, Indira Nagar…" />
              </div>
              <SearchDropdown
                label="Property Type"
                placeholder="Any Type"
                options={['Any Type', 'Villa', 'Penthouse', 'Apartment', 'Plot', 'Farmhouse']}
              />
              <SearchDropdown
                label="Budget"
                placeholder="Any Budget"
                options={['Any Budget', '₹ 1Cr – 3Cr', '₹ 3Cr – 7Cr', '₹ 7Cr – 15Cr', '₹ 15Cr+']}
              />
              <button className="hero-search-btn">
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="hero-stats-strip">
          <div className="hero-stat" style={{ '--d': '0s' }}><div className="hero-stat-num">20<sup>+</sup></div><div className="hero-stat-label">Years of Trust</div></div>
          <div className="hero-stat" style={{ '--d': '.1s' }}><div className="hero-stat-num">840</div><div className="hero-stat-label">Homes Delivered</div></div>
          <div className="hero-stat" style={{ '--d': '.2s' }}><div className="hero-stat-num">₹2.1K</div><div className="hero-stat-label">Crore in Deals</div></div>
          <div className="hero-stat" style={{ '--d': '.3s' }}><div className="hero-stat-num">98%</div><div className="hero-stat-label">Client Satisfaction</div></div>
        </div>
        <div className="scroll-cue"><div className="scroll-cue-line"></div><div className="scroll-cue-text">Scroll</div></div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track" id="marqueeTrack">
          {['Luxury Villas', 'Penthouse Living', 'Golf Course Residences', 'Bespoke Interiors', 'Investment Advisory', 'Private Estates', 'Smart Homes', 'Waterfront Properties'].map((item, i) => (
            <div key={`a${i}`} className="marquee-item">{item}</div>
          ))}
          {['Luxury Villas', 'Penthouse Living', 'Golf Course Residences', 'Bespoke Interiors', 'Investment Advisory', 'Private Estates', 'Smart Homes', 'Waterfront Properties'].map((item, i) => (
            <div key={`b${i}`} className="marquee-item">{item}</div>
          ))}
        </div>
      </div>

      {/* BUY / SELL CALLOUT */}
      <section className="buysell-callout">
        <div className="buysell-callout-inner">
          <div className="callout-panel callout-panel-buy reveal">
            <div className="callout-bg"></div>
            <div className="callout-overlay"></div>
            <div className="callout-content">
              <div className="callout-tag">For Buyers</div>
              <h2 className="callout-title">Find your next<br /><em>legacy home</em></h2>
              <p className="callout-desc">Browse curated residences, private viewings, and expert guidance — designed for those who know exactly what they want.</p>
              <Link href="/buy" className="callout-cta">Explore Properties <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
            </div>
          </div>
          <div className="callout-panel callout-panel-sell reveal d2">
            <div className="callout-bg"></div>
            <div className="callout-overlay"></div>
            <div className="callout-content">
              <div className="callout-tag">For Sellers</div>
              <h2 className="callout-title">List with<br /><em>confidence</em></h2>
              <p className="callout-desc">Premium exposure, strategic pricing, and white-glove support from first call to closing day.</p>
              <Link href="/sell" className="callout-cta">Sell Your Property <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ background: 'var(--parchment)' }}>
        <div className="intro">
          <div className="reveal">
            <div className="section-eyebrow">Our Philosophy</div>
            <h2 className="section-heading">Beyond Property —<br />We Find You a<br /><em>Home for the Soul</em></h2>
            <p className="intro-body">At Walnut Estate, we believe the finest address is not merely an asset — it is an experience. Every detail, from morning light through a well-placed window to the quiet hum of a perfectly engineered space, shapes the life you inhabit.<br /><br />With expertise curating Lucknow&apos;s most coveted residences, we bring an editorial lens to real estate — one that sees beyond square footage into the soul of a space.</p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#" className="btn btn-primary">Discover Our Approach</a>
              <a href="tel:7234000088" className="text-link">72340 00088</a>
            </div>
          </div>
          <div className="intro-img-grid reveal d2">
            <div className="intro-img i-intro1" style={{ borderRadius: '20px' }}></div>
            <div className="intro-img i-intro2 offset" style={{ borderRadius: '20px' }}></div>
            <div className="intro-img i-intro3 span2" style={{ borderRadius: '20px' }}></div>
          </div>
        </div>
      </section>

      {/* THE COLLECTION */}
      <section className="properties-section">
        <div className="section-header reveal">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--cream-dk)', opacity: '.7', marginBottom: '16px', fontWeight: '600' }}>
              <span style={{ width: '28px', height: '1.5px', background: 'var(--cream-dk)', opacity: '.5', borderRadius: '2px', display: 'block' }}></span>
              Curated Selection
            </div>
            <h2 className="section-heading-light">The <em>Collection</em></h2>
          </div>
          <Link href="/buy" className="view-all">View All Properties →</Link>
        </div>
        <div className="properties-grid reveal">
          <div className="prop-card tall" data-property="arcadia-penthouse">
            <div className="prop-bg i-p1"></div>
            <div className="prop-overlay"></div>
            <div className="prop-info">
              <div className="prop-tag">Featured</div>
              <div className="prop-name">The Arcadia Penthouse</div>
              <div className="prop-loc">📍 Gomti Nagar, Lucknow</div>
              <div className="prop-price">₹ 8.4 Crore</div>
              <div className="prop-meta"><span>🛏 4 Beds</span><span>🛁 4 Baths</span><span>📐 4,200 sqft</span></div>
            </div>
          </div>
          <div className="prop-card" data-property="villa-serenova">
            <div className="prop-bg i-p2"></div><div className="prop-overlay"></div>
            <div className="prop-info"><div className="prop-tag">New</div><div className="prop-name">Villa Serenova</div><div className="prop-loc">📍 Indira Nagar, Lucknow</div><div className="prop-price">₹ 4.2 Crore</div></div>
          </div>
          <div className="prop-card" data-property="meridian-heights">
            <div className="prop-bg i-p3"></div><div className="prop-overlay"></div>
            <div className="prop-info"><div className="prop-tag">Exclusive</div><div className="prop-name">Meridian Heights</div><div className="prop-loc">📍 Aliganj, Lucknow</div><div className="prop-price">₹ 6.1 Crore</div></div>
          </div>
          <div className="prop-card" data-property="the-courtyard">
            <div className="prop-bg i-p4"></div><div className="prop-overlay"></div>
            <div className="prop-info"><div className="prop-name">The Courtyard</div><div className="prop-loc">📍 Koyal Vihar, Lucknow</div><div className="prop-price">₹ 3.8 Crore</div></div>
          </div>
          <div className="prop-card" data-property="greens-pavilion">
            <div className="prop-bg i-p5"></div><div className="prop-overlay"></div>
            <div className="prop-info"><div className="prop-tag">Golf View</div><div className="prop-name">Greens Pavilion</div><div className="prop-loc">📍 Alambagh, Lucknow</div><div className="prop-price">₹ 5.5 Crore</div></div>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTY */}
      <section className="featured">
        <div className="featured-img">
          <div className="featured-badge">Property of the Month</div>
        </div>
        <div className="featured-content reveal">
          <div className="section-eyebrow">Featured Estate</div>
          <h2 className="featured-title">Palazzo<br /><em>Aurelia</em></h2>
          <div className="featured-loc">
            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
            Gomti Nagar Peninsula, Lucknow · Uttar Pradesh
          </div>
          <div className="featured-specs">
            <div><div className="spec-val">5</div><div className="spec-key">Bedrooms</div></div>
            <div><div className="spec-val">6,400</div><div className="spec-key">Sq. Ft.</div></div>
            <div><div className="spec-val">5</div><div className="spec-key">Bathrooms</div></div>
            <div><div className="spec-val">3</div><div className="spec-key">Car Parking</div></div>
          </div>
          <div className="featured-price">₹ 14.5 Crore<small>Price negotiable — contact us</small></div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="tel:7234000088" className="btn btn-primary">Schedule Viewing</a>
            <a href="#" className="btn btn-outline">Virtual Tour</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <ServicesCarousel />

      {/* NEIGHBOURHOOD */}
      <section className="neighbourhood">
        <div className="neighbourhood-inner">
          <div className="neighbourhood-header">
            <div className="reveal">
              <div className="section-eyebrow">Explore Areas</div>
              <h2 className="section-heading">Prime <em>Neighbourhoods</em><br />We Serve</h2>
            </div>
            <p className="nbr-body reveal d2">From the upscale localities of Gomti Nagar to the vibrant neighbourhoods of Indira Nagar — we know every pocket of Lucknow intimately, offering unparalleled local expertise in the markets that matter most.</p>
          </div>
          <div className="nbr-grid">
            <div className="nbr-card reveal"><div className="nbr-bg i-n1"></div><div className="nbr-overlay"></div><div className="nbr-info"><div className="nbr-name">Gomti Nagar</div><div className="nbr-count">142 Properties</div></div></div>
            <div className="nbr-card reveal d1"><div className="nbr-bg i-n2"></div><div className="nbr-overlay"></div><div className="nbr-info"><div className="nbr-name">Indira Nagar</div><div className="nbr-count">98 Properties</div></div></div>
            <div className="nbr-card reveal d2"><div className="nbr-bg i-n3"></div><div className="nbr-overlay"></div><div className="nbr-info"><div className="nbr-name">Aliganj</div><div className="nbr-count">76 Properties</div></div></div>
            <div className="nbr-card reveal d3"><div className="nbr-bg i-n4"></div><div className="nbr-overlay"></div><div className="nbr-info"><div className="nbr-name">Koyal Vihar</div><div className="nbr-count">54 Properties</div></div></div>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="journal">
        <div className="journal-inner">
          <div className="journal-header reveal">
            <div><div className="section-eyebrow">The Journal</div><h2 className="section-heading">Thoughts on Living <em>Well</em></h2></div>
            <a href="#" className="text-link">All Articles →</a>
          </div>
          <div className="journal-grid">
            <div className="article-card featured-art reveal">
              <div className="art-img"><div className="art-img-inner i-a1"></div></div>
              <div className="art-tag">Architecture</div>
              <h3 className="art-title">Luxury Living in Gomti Nagar: How Post-Pandemic Living Redefined the Modern Home</h3>
              <p className="art-excerpt">A deep look at how four years have transformed what luxury means in the Indian capital.</p>
              <div className="art-meta">March 2026 <span>·</span> 8 min read</div>
            </div>
            <div className="article-card reveal d1">
              <div className="art-img"><div className="art-img-inner i-a2"></div></div>
              <div className="art-tag">Investment</div>
              <h3 className="art-title">Kanpur Road: The Corridor That Rewrote Lucknow&apos;s Property Map</h3>
              <p className="art-excerpt">Why savvy investors are shifting focus westward and what infrastructure corridors mean for capital appreciation.</p>
              <div className="art-meta">Feb 2026 <span>·</span> 6 min read</div>
            </div>
            <div className="article-card reveal d2">
              <div className="art-img"><div className="art-img-inner i-a3"></div></div>
              <div className="art-tag">Design</div>
              <h3 className="art-title">Japandi in Lucknow: How Wabi-Sabi Found a Home in Modern Interiors</h3>
              <p className="art-excerpt">The minimalist aesthetic dominating luxury interiors and what it says about affluent urban Indian living in 2026.</p>
              <div className="art-meta">Jan 2026 <span>·</span> 5 min read</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialSlider />

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg"></div>
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <div className="cta-eyebrow">Begin Your Journey</div>
          <h2 className="cta-heading">Your <em>Extraordinary</em><br />Home Awaits</h2>
          <p className="cta-sub">Speak with a Walnut Estate advisor today — no obligation, just a conversation about what home means to you.</p>
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
