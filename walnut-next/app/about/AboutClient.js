'use client';
import { useEffect } from 'react';
import './about.css';

export default function AboutClient() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const values = [
    { num: '01', title: 'Uncompromising Curation', desc: 'Every listing is hand-selected. We represent fewer properties — but each one meets our rigorous 60-point excellence framework.' },
    { num: '02', title: 'Client-First Philosophy', desc: 'Your timeline, your vision, your terms. We adapt our expertise to fit your life — never the other way around.', delay: 'd1' },
    { num: '03', title: 'Transparent Partnership', desc: 'No hidden agendas. No inflated valuations. Just honest guidance backed by data, experience, and genuine care for your outcome.', delay: 'd2' },
    { num: '04', title: 'Design Intelligence', desc: 'We bring an architectural eye to every recommendation — helping you see the potential others miss and the value others overlook.', delay: 'd3' },
    { num: '05', title: 'Legacy Thinking', desc: "A great home isn't just for today. We evaluate properties through the lens of long-term value, lifestyle evolution, and generational wealth.", delay: 'd4' },
    { num: '06', title: 'Local Mastery', desc: 'Lucknow is in our DNA. We know every corridor, every micro-market, every upcoming development — and use that intelligence for your benefit.', delay: 'd5' },
  ];

  const timeline = [
    { year: '2005', title: 'The Beginning', desc: 'Founded as a boutique property consultancy in Gomti Nagar, Lucknow — with a vision to bring integrity and quality to luxury real estate.' },
    { year: '2010', title: 'Market Leadership', desc: "Crossed 200 successful transactions and established ourselves as the preferred partner for Lucknow's most discerning buyers and sellers." },
    { year: '2016', title: 'Design-Led Expansion', desc: 'Launched our interior concierge service and design advisory — bringing end-to-end lifestyle curation under one roof.' },
    { year: '2020', title: 'Digital Transformation', desc: "Pioneered virtual viewings and AI-driven property matching for Lucknow's premium segment, reaching NRI buyers across 12 countries." },
    { year: '2025', title: 'The Walnut Standard', desc: 'Crossed ₹2,100 Crore in total transaction value. Today, the Walnut name is synonymous with trust, taste, and transformative living in Lucknow.' },
  ];

  const team = [
    { name: 'Arjun Verma', role: 'Managing Director', img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80" },
    { name: 'Priya Srivastava', role: 'Head of Sales', img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80", delay: 'd1' },
    { name: 'Rohan Kapoor', role: 'Design Concierge', img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80", delay: 'd2' },
    { name: 'Ananya Mishra', role: 'Client Relations', img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80", delay: 'd3' },
  ];

  const ecosystem = [
    { num: '01', title: 'Property Curation', desc: 'Every listing passes our rigorous 60-point quality framework before it reaches you. We represent fewer properties — but each is exceptional.' },
    { num: '02', title: 'Investment Intelligence', desc: 'Data-driven market insights, corridor-level analysis, and yield projections that help you make decisions with confidence.', delay: 'd1' },
    { num: '03', title: 'Walnut Studios', desc: 'Our in-house creative arm produces cinematic property films, architectural photography, and immersive virtual experiences.', delay: 'd2' },
  ];

  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content reveal">
          <div className="about-hero-eyebrow">Our Story</div>
          <h1>Redefining How<br />Lucknow <em>Lives</em></h1>
          <p className="about-hero-sub">We don&apos;t just sell properties. We curate lifestyles, craft legacies, and redefine what it means to call Lucknow home.</p>
        </div>
        <div className="scroll-cue"><div className="scroll-cue-line"></div><div className="scroll-cue-text">Scroll</div></div>
      </section>

      {/* MANIFESTO */}
      <section className="about-manifesto">
        <div className="about-manifesto-inner">
          <div className="manifesto-left reveal">
            <div className="section-eyebrow">Our Manifesto</div>
            <h2>Built on<br />Craft, Not<br /><em>Convention</em></h2>
          </div>
          <div className="manifesto-text reveal d2">
            <p>Walnut Estate was born from a simple conviction: that finding a home should feel as extraordinary as the home itself. In a market flooded with transactions, we chose a different path — one paved with intention, expertise, and an unwavering commitment to quality.</p>
            <p>Every property we represent has passed through our editorial lens. We see beyond square footage and price tags. We see the morning light that fills a study. The way a courtyard breathes life into an afternoon. The silence that a well-designed space protects.</p>
            <p>We don&apos;t compete on volume. We compete on vision. And in Lucknow&apos;s most discerning circles, that distinction has made all the difference.</p>
            <div className="manifesto-sig">
              <div className="manifesto-sig-line"></div>
              <div className="manifesto-sig-name">The Walnut Estate Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="about-values-inner">
          <div className="values-header reveal">
            <div className="section-eyebrow" style={{ color: 'var(--cream-dk)', opacity: '.6', justifyContent: 'center' }}>What We Stand For</div>
            <h2>Core <em>Values</em></h2>
          </div>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.num} className={`value-card reveal ${v.delay || ''}`}>
                <div className="value-num">{v.num}</div>
                <div className="value-title">{v.title}</div>
                <div className="value-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="about-founder">
        <div className="about-founder-inner">
          <div className="founder-img reveal"></div>
          <div className="founder-content reveal d2">
            <div className="section-eyebrow">Leadership</div>
            <h2>Led by <em>Vision</em>,<br />Driven by <em>Purpose</em></h2>
            <blockquote className="founder-quote">&ldquo;Real estate is not a transaction — it&apos;s a transformation. Every key we hand over unlocks a new chapter in someone&apos;s story.&rdquo;</blockquote>
            <p className="founder-bio">With over two decades of experience navigating Lucknow&apos;s luxury property market, our founding team brings a rare combination of market intelligence, design sensibility, and relentless client advocacy. What began as a boutique consultancy has grown into the city&apos;s most trusted name in premium real estate — without ever compromising the personal touch that defines us.</p>
            <div className="founder-name">Walnut Estate Leadership</div>
            <div className="founder-role">Founders · Lucknow</div>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <div className="about-stats reveal">
        <div className="about-stat"><div className="about-stat-num">20<sup>+</sup></div><div className="about-stat-label">Years of Trust</div></div>
        <div className="about-stat"><div className="about-stat-num">840</div><div className="about-stat-label">Homes Delivered</div></div>
        <div className="about-stat"><div className="about-stat-num">₹2.1K</div><div className="about-stat-label">Crore in Transactions</div></div>
        <div className="about-stat"><div className="about-stat-num">98%</div><div className="about-stat-label">Client Satisfaction</div></div>
      </div>

      {/* JOURNEY */}
      <section className="about-journey">
        <div className="about-journey-inner">
          <div className="journey-header reveal">
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Our Journey</div>
            <h2>Two Decades of<br /><em>Excellence</em></h2>
          </div>
          <div className="timeline">
            {timeline.map(t => (
              <div key={t.year} className="timeline-item reveal">
                <div className="timeline-dot"></div>
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-title">{t.title}</div>
                <div className="timeline-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team">
        <div className="about-team-inner">
          <div className="team-header reveal">
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>The People</div>
            <h2>Meet Our <em>Team</em></h2>
          </div>
          <div className="team-grid">
            {team.map(t => (
              <div key={t.name} className={`team-card reveal ${t.delay || ''}`}>
                <div className="team-photo" style={{ backgroundImage: `url('${t.img}')` }}></div>
                <div className="team-name">{t.name}</div>
                <div className="team-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="about-ecosystem">
        <div className="about-ecosystem-inner">
          <div className="ecosystem-header reveal">
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Our Ecosystem</div>
            <h2>More Than a Brokerage —<br />A Complete <em>Platform</em></h2>
          </div>
          <div className="ecosystem-grid">
            {ecosystem.map(e => (
              <div key={e.num} className={`eco-card reveal ${e.delay || ''}`}>
                <div className="eco-num">{e.num}</div>
                <div className="eco-title">{e.title}</div>
                <div className="eco-desc">{e.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </>
  );
}
