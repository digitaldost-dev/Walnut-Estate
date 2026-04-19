'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function SearchDropdown({ label, placeholder, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const wrapRef = useRef(null);
  const panelRef = useRef(null);

  const positionPanel = useCallback(() => {
    const wrap = wrapRef.current;
    const panel = panelRef.current;
    if (!wrap || !panel) return;

    const rect = wrap.getBoundingClientRect();
    const panelHeight = panel.offsetHeight || 240;
    const panelGap = 6;
    const viewport = window.innerHeight;
    const padding = 10;

    // Check if dropdown fits below trigger
    const fitsBelow = rect.bottom + panelGap + panelHeight < viewport - padding;
    const fitsAbove = rect.top - panelGap - panelHeight > padding;

    panel.style.position = 'fixed';
    panel.style.width = Math.max(rect.width, 180) + 'px';
    panel.style.left = rect.left + 'px';

    if (fitsBelow) {
      panel.style.top = (rect.bottom + panelGap) + 'px';
    } else if (fitsAbove) {
      panel.style.top = (rect.top - panelGap - panelHeight) + 'px';
    } else {
      // Default to below but allow scrolling within panel
      panel.style.top = (rect.bottom + panelGap) + 'px';
    }
  }, []);

  const handleToggle = useCallback((e) => {
    e.stopPropagation();
    setIsOpen(prev => {
      if (!prev) {
        // Position before opening
        setTimeout(positionPanel, 0);
      }
      return !prev;
    });
  }, [positionPanel]);

  const handleSelect = useCallback((option) => {
    setSelected(option);
    setIsOpen(false);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target) &&
          panelRef.current && !panelRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen]);

  // Reposition panel on scroll (stay responsive)
  useEffect(() => {
    if (!isOpen) return;
    
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      positionPanel();
      
      // Close if trigger element is out of viewport
      scrollTimeout = setTimeout(() => {
        const wrap = wrapRef.current;
        if (!wrap) return;
        const rect = wrap.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) {
          setIsOpen(false);
        }
      }, 100);
    };
    
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      clearTimeout(scrollTimeout);
    };
  }, [isOpen, positionPanel]);

  // Reposition on window resize for responsive behavior
  useEffect(() => {
    if (!isOpen) return;
    
    const handleResize = () => {
      positionPanel();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, positionPanel]);

  // Position panel when open
  useEffect(() => {
    if (isOpen) positionPanel();
  }, [isOpen, positionPanel]);

  // Portal: move panel to body when open
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    if (isOpen) {
      document.body.appendChild(panel);
    } else {
      // Move back into wrapper
      if (wrapRef.current && panel.parentNode !== wrapRef.current) {
        wrapRef.current.appendChild(panel);
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={wrapRef}
      className={`search-input-wrap search-dropdown-wrap${isOpen ? ' open' : ''}`}
    >
      <div className="search-input-label">{label}</div>
      <div className="search-dropdown-trigger" onClick={handleToggle}>
        <span
          className={`search-dropdown-value${selected === options[0] ? ' is-placeholder' : ''}`}
          data-placeholder={placeholder}
        >
          {selected}
        </span>
        <svg className="search-dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      <div ref={panelRef} className={`search-dropdown-panel${isOpen ? ' panel-open' : ''}`}>
        {options.map((opt) => (
          <div
            key={opt}
            className={`search-dropdown-option${opt === selected ? ' active' : ''}`}
            onClick={() => handleSelect(opt)}
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
}
