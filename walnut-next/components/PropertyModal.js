'use client';
import { useState, useEffect, useCallback } from 'react';

const propertyData = {
  'arcadia-penthouse': {
    tag: 'Featured', name: 'The Arcadia Penthouse', location: 'Gomti Nagar Extension, Lucknow',
    price: '₹ 8.4 Crore', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=90',
    specs: { beds: '4', baths: '4', area: '4,200', parking: '2' },
    coords: { lat: 26.8567, lng: 81.0281 },
    description: "Perched atop one of Gomti Nagar's most prestigious towers, The Arcadia Penthouse is a masterclass in elevated living. Floor-to-ceiling windows frame sweeping views of the Gomti river and the city skyline. The open-plan living area flows seamlessly into a private terrace garden, while the chef's kitchen features imported Italian marble countertops and Gaggenau appliances.",
    amenities: ['Private Terrace', 'Italian Marble', 'Modular Kitchen', 'River View', 'Smart Home', 'Private Lift', 'Home Theatre', 'Wine Cellar', 'Infinity Pool Access', 'Concierge']
  },
  'villa-serenova': {
    tag: 'New', name: 'Villa Serenova', location: 'Indira Nagar, Lucknow',
    price: '₹ 4.2 Crore', image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=1200&q=90',
    specs: { beds: '3', baths: '3', area: '2,800', parking: '2' },
    coords: { lat: 26.8788, lng: 80.9910 },
    description: "Villa Serenova embodies the art of modern tropical living, tucked away in one of Indira Nagar's most sought-after lanes. The double-height living room opens to a landscaped courtyard, creating a seamless indoor-outdoor experience.",
    amenities: ['Double-Height Living', 'Courtyard Garden', 'Teak Flooring', 'Rooftop Lounge', 'Solar Powered', 'Rainwater Harvest', 'Modular Kitchen', 'Study Room']
  },
  'meridian-heights': {
    tag: 'Exclusive', name: 'Meridian Heights', location: 'Aliganj, Lucknow',
    price: '₹ 6.1 Crore', image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&q=90',
    specs: { beds: '4', baths: '5', area: '3,600', parking: '3' },
    coords: { lat: 26.8950, lng: 80.9462 },
    description: "Meridian Heights is a rare find in Aliganj — a contemporary duplex apartment that challenges convention. Spanning two floors connected by a sculptural floating staircase, the residence offers a lifestyle typically reserved for independent homes.",
    amenities: ['Duplex Layout', 'Floating Staircase', '12-ft Ceilings', 'Wraparound Balcony', 'VRV AC', 'Italian Bath Fittings', 'Club Access', 'Gym', 'Swimming Pool', "Children's Area"]
  },
  'the-courtyard': {
    tag: '', name: 'The Courtyard', location: 'Koyal Vihar, Lucknow',
    price: '₹ 3.8 Crore', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=90',
    specs: { beds: '3', baths: '3', area: '2,400', parking: '1' },
    coords: { lat: 26.8400, lng: 80.9950 },
    description: "Inspired by the havelis of Lucknow and reimagined for modern life, The Courtyard is an architectural love letter to the city. The central open-air courtyard serves as the home's breathing heart.",
    amenities: ['Central Courtyard', 'Jali Screens', 'Handcrafted Details', 'Private Garden', 'Vastu Compliant', 'Servant Quarter', 'Puja Room', 'Terrace Garden']
  },
  'greens-pavilion': {
    tag: 'Golf View', name: 'Greens Pavilion', location: 'Alambagh, Lucknow',
    price: '₹ 5.5 Crore', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90',
    specs: { beds: '4', baths: '4', area: '3,800', parking: '2' },
    coords: { lat: 26.8252, lng: 80.9115 },
    description: "Greens Pavilion sits at the edge of Lucknow's premier golf course, offering a lifestyle where mornings begin with mist rolling across manicured fairways.",
    amenities: ['Golf Course View', 'East-West Orientation', 'Natural Stone', 'Private Garden', 'Smart Lighting', 'Home Automation', 'Club Membership', 'Jogging Track', 'Spa Access', 'Utility Room']
  }
};

export default function PropertyModal() {
  const [active, setActive] = useState(null);

  const openModal = useCallback((id) => {
    const p = propertyData[id];
    if (p) {
      setActive({ id, ...p });
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const closeModal = useCallback(() => {
    setActive(null);
    document.body.style.overflow = '';
  }, []);

  // Attach click listeners to prop-cards
  useEffect(() => {
    const cards = document.querySelectorAll('.prop-card[data-property]');
    const handlers = [];
    cards.forEach(card => {
      const handler = () => openModal(card.dataset.property);
      card.addEventListener('click', handler);
      handlers.push({ card, handler });
    });

    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', onKey);

    return () => {
      handlers.forEach(({ card, handler }) => card.removeEventListener('click', handler));
      document.removeEventListener('keydown', onKey);
    };
  }, [openModal, closeModal]);

  if (!active) return null;

  const p = active;
  return (
    <>
      <div className={`prop-modal-overlay active`} onClick={closeModal}></div>
      <div className={`prop-modal active`}>
        <div className="prop-modal-img" style={{ backgroundImage: `url('${p.image}')` }}></div>
        <div className="prop-modal-body">
          <button className="prop-modal-close" onClick={closeModal}>✕</button>
          {p.tag && <div className="pm-tag">{p.tag}</div>}
          <div className="pm-name">{p.name}</div>
          <div className="pm-loc">
            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {p.location}
          </div>
          <div className="pm-price">{p.price}</div>
          <div className="pm-price-note">Price indicative — contact us for current availability</div>
          <div className="pm-divider"></div>
          <div className="pm-section-title">Property Details</div>
          <div className="pm-specs">
            <div className="pm-spec"><div className="pm-spec-val">{p.specs.beds}</div><div className="pm-spec-key">Bedrooms</div></div>
            <div className="pm-spec"><div className="pm-spec-val">{p.specs.baths}</div><div className="pm-spec-key">Bathrooms</div></div>
            <div className="pm-spec"><div className="pm-spec-val">{p.specs.area}</div><div className="pm-spec-key">Sq. Ft.</div></div>
            <div className="pm-spec"><div className="pm-spec-val">{p.specs.parking}</div><div className="pm-spec-key">Parking</div></div>
          </div>
          <div className="pm-divider"></div>
          <div className="pm-section-title">About This Property</div>
          <p className="pm-description">{p.description}</p>
          <div className="pm-divider"></div>
          <div className="pm-section-title">Features &amp; Amenities</div>
          <div className="pm-amenities">
            {p.amenities.map(a => <span key={a} className="pm-amenity">{a}</span>)}
          </div>
          {p.coords && (
            <>
              <div className="pm-divider"></div>
              <div className="pm-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', display: 'inline-block', verticalAlign: 'middle', marginRight: '8px', opacity: 0.6 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Location on Map
              </div>
              <div className="pm-map-wrap">
                <iframe
                  className="pm-map"
                  title={`Map - ${p.name}`}
                  seamless
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5891917629254!2d${p.coords.lng}!3d${p.coords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${p.coords.lat},${p.coords.lng}!5e0!3m2!1sen!2sin!4v1234567890123`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  style={{ width: '100%', height: '240px', border: 'none' }}
                />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${p.coords.lat},${p.coords.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pm-map-link"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '14px', height: '14px' }}><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Open in Google Maps
                </a>
              </div>
            </>
          )}
          <div className="pm-actions">
            <a href="tel:+917234000088" className="btn btn-primary">Schedule Viewing</a>
            <a href={`https://wa.me/+917234000088?text=Hi, I'm interested in ${encodeURIComponent(p.name)} (${p.price})`} target="_blank" rel="noopener noreferrer" className="btn btn-outline">WhatsApp</a>
          </div>
        </div>
      </div>
    </>
  );
}
