'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function TestimonialSlider() {
  const [cur, setCur] = useState(0);
  const timerRef = useRef(null);

  const testimonials = [
    {
      quote: "\"Walnut Estate didn't just sell us a home — they understood us. They knew before we did that we needed a garden-facing study and a kitchen that caught the evening light. Palazzo Aurelia is not just where we live; it's who we are.\"",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      name: "Priya Malhotra",
      role: "Author · Lucknow"
    },
    {
      quote: "\"As an NRI investing from Singapore, I needed a team I could trust completely. Walnut Estate handled every detail — legal, interior, even the building committee introduction. Flawless from start to finish.\"",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      name: "Arjun Mehta",
      role: "Finance Director · Singapore"
    },
    {
      quote: "\"Three investments through Walnut Estate, each one outperforming projections. Their market intelligence is genuinely unparalleled in Lucknow — they operate at a category all their own.\"",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
      name: "Shreya Kapoor",
      role: "Entrepreneur · Lucknow"
    }
  ];

  const setSlide = useCallback((n) => {
    setCur(n);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCur(prev => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timerRef.current);
  }, [testimonials.length]);

  return (
    <section className="testimonials">
      <div className="testi-inner">
        <div className="testi-eyebrow">Client Stories</div>
        <div className="testi-slider">
          {testimonials.map((t, i) => (
            <div key={i} className={`testi-slide${i === cur ? ' active' : ''}`}>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-avatar" style={{ backgroundImage: `url('${t.avatar}')` }}></div>
              <div className="testi-name">{t.name}</div>
              <div className="testi-role">{t.role}</div>
            </div>
          ))}
        </div>
        <div className="testi-nav">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testi-dot${i === cur ? ' active' : ''}`}
              onClick={() => setSlide(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
