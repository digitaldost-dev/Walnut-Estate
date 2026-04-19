'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };

    function animRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      rafId = requestAnimationFrame(animRing);
    }
    rafId = requestAnimationFrame(animRing);

    document.addEventListener('mousemove', onMove);

    const hoverEls = document.querySelectorAll('a, button, .prop-card, .nbr-card, .article-card, .service-card, .svc-card, .seg-card, .callout-panel');

    const onEnter = () => {
      cursor.style.width = '18px';
      cursor.style.height = '18px';
      ring.style.width = '56px';
      ring.style.height = '56px';
      ring.style.opacity = '.25';
    };
    const onLeave = () => {
      cursor.style.width = '10px';
      cursor.style.height = '10px';
      ring.style.width = '38px';
      ring.style.height = '38px';
      ring.style.opacity = '.5';
    };

    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
}
