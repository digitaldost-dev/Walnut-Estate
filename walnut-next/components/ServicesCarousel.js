'use client';
import { useEffect, useRef } from 'react';

export default function ServicesCarousel() {
  const trackRef = useRef(null);
  const dotsRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const dotsEl = dotsRef.current;
    if (!track || !dotsEl) return;

    const cardW = 276;
    const total = track.querySelectorAll('.svc-card').length;

    // Create dots
    dotsEl.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const d = document.createElement('button');
      d.className = 'svc-dot' + (i === 0 ? ' active' : '');
      d.addEventListener('click', () => {
        track.scrollTo({ left: i * cardW, behavior: 'smooth' });
      });
      dotsEl.appendChild(d);
    }

    const onScroll = () => {
      const idx = Math.round(track.scrollLeft / cardW);
      dotsEl.querySelectorAll('.svc-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
    };
    track.addEventListener('scroll', onScroll);
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  const svcScroll = (dir) => {
    const t = trackRef.current;
    if (t) t.scrollBy({ left: dir * 552, behavior: 'smooth' });
  };

  const services = [
    { num: '01', title: 'Property Curation', desc: 'Hand-selected homes vetted through our 60-point excellence framework before they reach you.' },
    { num: '02', title: 'Investment Advisory', desc: 'Data-backed insights to identify high-yield opportunities and build a resilient property portfolio.' },
    { num: '03', title: 'Interior Concierge', desc: 'From furniture sourcing to turnkey design — your new residence, perfectly tailored to you.' },
    { num: '04', title: 'Private Sales', desc: 'Off-market listings transacted discreetly, with full confidentiality and white-glove handling.' },
    { num: '05', title: 'Legal & Due Diligence', desc: 'Title searches, documentation, and regulatory compliance — secured from first call to final signature.' },
    { num: '06', title: 'NRI Property Services', desc: 'Full-spectrum support for Non-Resident Indians — search, manage, repatriate, FEMA-compliant.' },
  ];

  return (
    <section className="services-compact">
      <div className="services-compact-inner">
        <div className="services-compact-header reveal">
          <div>
            <div className="services-eyebrow">What We Do</div>
            <h2 className="section-heading">Services for the <em>Discerning</em></h2>
          </div>
          <div className="services-controls">
            <button className="svc-nav-btn" onClick={() => svcScroll(-1)} aria-label="Previous">←</button>
            <div className="svc-dots" ref={dotsRef}></div>
            <button className="svc-nav-btn" onClick={() => svcScroll(1)} aria-label="Next">→</button>
          </div>
        </div>
        <div className="services-track-wrap reveal d2">
          <div className="services-track" ref={trackRef}>
            {services.map((s) => (
              <div key={s.num} className="svc-card">
                <div className="svc-num">{s.num}</div>
                <div className="svc-title">{s.title}</div>
                <p className="svc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
