'use client';
import { useEffect } from 'react';
import './sell.css';

export default function SellClient() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const handleSubmit = (e) => {
    const btn = e.currentTarget;
    btn.textContent = 'Request Received ✓';
    btn.style.background = '#2e7d32';
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg hero-bg-sell"></div>
        <div className="hero-overlay"></div>
        <div className="hero-vignette"></div>
        <div className="hero-deco-ring"></div>
        <div className="hero-deco-ring-2"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">Sell with Walnut Estate</div>
          <h1 className="hero-headline">Your property<br />deserves<br /><em>the best</em></h1>
          <p className="hero-tagline">Premium marketing, strategic pricing, and a seamless seller journey — from listing to closing.</p>
          <div style={{ marginTop: '36px' }}>
            <a href="#sell-form" className="btn btn-primary" style={{ fontSize: '13px', padding: '16px 40px' }}>List Your Property</a>
          </div>
        </div>
        <div className="scroll-cue"><div className="scroll-cue-line"></div><div className="scroll-cue-text">Scroll</div></div>
      </section>

      {/* SELL STATS */}
      <div className="sell-stats reveal">
        <div className="sell-stat"><div className="sell-stat-num">₹2.1K<sup>Cr</sup></div><div className="sell-stat-label">Total Sales Volume</div></div>
        <div className="sell-stat"><div className="sell-stat-num">840<sup>+</sup></div><div className="sell-stat-label">Successful Closings</div></div>
        <div className="sell-stat"><div className="sell-stat-num">98%</div><div className="sell-stat-label">Seller Satisfaction</div></div>
        <div className="sell-stat"><div className="sell-stat-num">28</div><div className="sell-stat-label">Avg. Days to Sell</div></div>
      </div>

      {/* WHY WALNUT */}
      <section className="sell-why">
        <div className="sell-why-img"></div>
        <div className="sell-why-content">
          <div className="section-eyebrow">Why Walnut Estate</div>
          <h2 className="section-heading">We don&apos;t just list —<br />we <em>elevate</em> your property.</h2>
          <p>Our approach to selling is built on precision, presentation, and performance. Every listing receives the same editorial care we&apos;d give a Vogue cover — because first impressions are everything.</p>
          <ul className="sell-why-points">
            <li><span className="sell-why-num">01</span><span>Luxury campaign design with professional photography, cinematic video, and digital staging</span></li>
            <li><span className="sell-why-num">02</span><span>Access to our private buyer network — qualified, pre-vetted, high-intent purchasers</span></li>
            <li><span className="sell-why-num">03</span><span>Data-driven pricing strategy that maximises value without leaving money on the table</span></li>
            <li><span className="sell-why-num">04</span><span>End-to-end legal and documentation support — from title to registration</span></li>
          </ul>
          <a href="#sell-form" className="btn btn-primary">Get Your Free Valuation</a>
        </div>
      </section>

      {/* SELLER SERVICES */}
      <section className="buy-sell-page" style={{ background: 'var(--parchment)' }}>
        <div className="buy-sell-inner">
          <div className="buy-sell-copy reveal">
            <div className="section-eyebrow">Seller Services</div>
            <h2 className="section-heading">A premium experience built for top-tier properties.</h2>
            <p className="section-copy">Partner with Walnut Estate for curated marketing, expert negotiation, and polished presentation that delivers results.</p>
            <div className="buy-sell-actions">
              <a href="#sell-form" className="btn btn-primary">List Your Property</a>
              <a href="tel:+917234000088" className="btn btn-outline">Seller Strategy Call</a>
            </div>
          </div>
          <div className="buy-sell-grid reveal d2">
            <article className="buy-card">
              <div className="card-label">Market</div>
              <h3>Premium Exposure</h3>
              <p>Reach an affluent audience with elevated digital and private marketing campaigns.</p>
              <ul className="card-features"><li>Luxury campaign design</li><li>Private buyer outreach</li><li>Selective presentations</li></ul>
              <a href="#sell-form" className="card-link">Get Started</a>
            </article>
            <article className="buy-card">
              <div className="card-label">Value</div>
              <h3>Strategic Pricing</h3>
              <p>Maximise return with intelligent price positioning backed by live market data.</p>
              <ul className="card-features"><li>Market benchmarking</li><li>Value-led messaging</li><li>Offer management</li></ul>
              <a href="#sell-form" className="card-link">Value Your Home</a>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sell-process">
        <div className="sell-process-inner">
          <div className="process-header reveal">
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Our Process</div>
            <h2 className="section-heading" style={{ textAlign: 'center' }}>How We Sell Your <em>Property</em></h2>
          </div>
          <div className="process-grid reveal d1">
            {[
              { num: '01', title: 'Valuation', desc: 'We assess your property with a comprehensive market analysis and provide a data-backed pricing strategy.' },
              { num: '02', title: 'Presentation', desc: 'Professional photography, cinematic video, and luxury campaign design that commands attention.' },
              { num: '03', title: 'Marketing', desc: 'Strategic exposure across premium digital channels and our private buyer network of qualified purchasers.' },
              { num: '04', title: 'Closing', desc: 'Expert negotiation, documentation, and end-to-end legal support until the keys change hands.' },
            ].map(s => (
              <div key={s.num} className="process-step">
                <div className="process-num-wrap">{s.num}</div>
                <div className="process-title">{s.title}</div>
                <p className="process-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELLER TESTIMONIALS */}
      <section className="sell-testi">
        <div className="sell-testi-inner">
          <div className="sell-testi-header reveal">
            <div className="section-eyebrow">Seller Stories</div>
            <h2 className="section-heading">What Our Sellers <em>Say</em></h2>
          </div>
          <div className="sell-testi-grid">
            {[
              { quote: '"We listed with Walnut Estate after a disappointing year with another agency. Within 18 days, they found us the right buyer at a price that exceeded our expectations. Exceptional."', name: 'Rajesh & Neha Gupta', role: 'Sellers · Gomti Nagar, Lucknow' },
              { quote: '"The photography and marketing they did for our villa was extraordinary — it looked like it belonged in an architecture magazine. We received four offers in the first week."', name: 'Vikram Sinha', role: 'Seller · Indira Nagar, Lucknow', delay: 'd1' },
              { quote: '"As an NRI selling my Lucknow property remotely, I needed a team I could completely trust. Walnut Estate handled everything — legally, financially, and professionally. Seamless."', name: 'Ananya Sharma', role: 'Seller · London / Lucknow', delay: 'd2' },
            ].map((t, i) => (
              <div key={i} className={`sell-review-card reveal ${t.delay || ''}`}>
                <div className="sell-review-stars">★★★★★</div>
                <p className="sell-review-quote">{t.quote}</p>
                <div className="sell-review-name">{t.name}</div>
                <div className="sell-review-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELL FORM */}
      <section className="sell-form-section" id="sell-form">
        <div className="sell-form-inner">
          <div className="sell-form-left reveal">
            <div className="section-eyebrow" style={{ color: 'var(--cream-dk)' }}>Get In Touch</div>
            <h2 className="section-heading" style={{ color: 'var(--cream-lt)' }}>Ready to list your<br /><em>property</em>?</h2>
            <p>Fill in the form and one of our senior advisors will be in touch within 24 hours to discuss your property and get the process started.</p>
            <ul className="sell-form-contact-list">
              <li>
                <div className="contact-icon"><svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg></div>
                <div><div style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', opacity: '.5', marginBottom: '3px' }}>Call Us</div><a href="tel:+917234000088">+91 72340 00088</a></div>
              </li>
              <li>
                <div className="contact-icon"><svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" /></svg></div>
                <div><div style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', opacity: '.5', marginBottom: '3px' }}>Email Us</div><a href="mailto:info@walnutestate.com">info@walnutestate.com</a></div>
              </li>
              <li>
                <div className="contact-icon"><svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                <div><div style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', opacity: '.5', marginBottom: '3px' }}>Office</div><span>Gomti Nagar, Lucknow, UP 226010</span></div>
              </li>
            </ul>
          </div>
          <div className="sell-form reveal d2">
            <div className="form-heading">List Your Property</div>
            <p className="form-subhead">Tell us about your property. No obligations — just a conversation.</p>
            <div className="form-row">
              <div className="form-group"><label className="form-label">Your Name *</label><input type="text" className="form-input" placeholder="Full name" /></div>
              <div className="form-group"><label className="form-label">Mobile Number *</label><input type="tel" className="form-input" placeholder="+91 00000 00000" /></div>
            </div>
            <div className="form-group"><label className="form-label">Email Address</label><input type="email" className="form-input" placeholder="you@example.com" /></div>
            <div className="form-row">
              <div className="form-group"><label className="form-label">Property Type *</label>
                <select className="form-select"><option value="">Select type</option><option>Land / Plot</option><option>Independent House</option><option>Apartment / Flat</option><option>Villa</option><option>Penthouse</option><option>Farmhouse</option><option>Commercial</option></select>
              </div>
              <div className="form-group"><label className="form-label">Expected Price</label>
                <select className="form-select"><option value="">Select range</option><option>Under ₹1 Crore</option><option>₹1 Cr – ₹3 Cr</option><option>₹3 Cr – ₹7 Cr</option><option>₹7 Cr – ₹15 Cr</option><option>₹15 Cr+</option></select>
              </div>
            </div>
            <div className="form-group"><label className="form-label">Property Location</label><input type="text" className="form-input" placeholder="Area, locality — e.g. Gomti Nagar, Lucknow" /></div>
            <div className="form-group"><label className="form-label">Tell Us More</label><textarea className="form-textarea" placeholder="Size, configuration, any unique features, current status…"></textarea></div>
            <button className="form-submit" onClick={handleSubmit}>Submit Listing Request</button>
            <p className="form-note">We typically respond within 24 hours. All enquiries are handled with complete confidentiality.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg"></div>
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <div className="cta-eyebrow">Don&apos;t Wait</div>
          <h2 className="cta-heading">Every Day Matters<br />in <em>Real Estate</em></h2>
          <p className="cta-sub">The right buyer for your property is out there. Let&apos;s find them together — with precision and care.</p>
          <div className="cta-btns">
            <a href="tel:7234000088" className="btn btn-primary">Call 72340 00088</a>
            <a href="#sell-form" className="btn btn-outline-light">List Your Property</a>
          </div>
        </div>
      </section>
    </>
  );
}
