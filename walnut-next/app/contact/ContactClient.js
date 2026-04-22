'use client';
import { useEffect, useState } from 'react';
import './contact.css';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can connect to a backend service here)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const offices = [
    {
      name: 'Headquarters',
      address: 'Gomti Nagar, Lucknow',
      phone: '+91 72340 00088',
      email: 'hello@walnutestate.com',
      hours: 'Mon – Fri: 10 AM – 6 PM | Sat: 10 AM – 4 PM'
    },
    {
      name: 'Design Studio',
      address: 'Indira Nagar, Lucknow',
      phone: '+91 72340 00088',
      email: 'design@walnutestate.com',
      hours: 'By Appointment'
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero contact-hero">
        <div className="hero-bg hero-bg-contact"></div>
        <div className="hero-overlay"></div>
        <div className="hero-vignette"></div>
        <div className="hero-deco-ring"></div>
        <div className="hero-deco-ring-2"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">Get In Touch</div>
          <h1 className="hero-headline">Let's start a <br /><em>conversation</em></h1>
          <p className="hero-tagline">Connect with our team to explore properties, discuss your lifestyle goals, or learn more about working with Walnut Estate.</p>
        </div>
        <div className="scroll-cue"><div className="scroll-cue-line"></div><div className="scroll-cue-text">Scroll</div></div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="contact-section">
        <div className="contact-inner">
          <div className="contact-form-wrapper reveal">
            <div className="contact-form-header">
              <div className="section-eyebrow">Contact Form</div>
              <h2 className="section-heading">Reach out to our team</h2>
              <p className="section-copy">Whether you're looking to buy, sell, or simply explore possibilities, we're here to guide you with personalized expertise and attention to detail.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="property-inquiry">Property Inquiry</option>
                  <option value="buying">Looking to Buy</option>
                  <option value="selling">Looking to Sell</option>
                  <option value="design-services">Design Services</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your inquiry..."
                  rows="6"
                ></textarea>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Send Message</button>
                {submitted && <span className="form-success">Message sent successfully!</span>}
              </div>
            </form>
          </div>

          <div className="contact-info reveal d2">
            <div className="info-header">
              <div className="section-eyebrow">Direct Contact</div>
              <h3 style={{ fontSize: '28px', fontFamily: "'Cormorant Garamond', serif", fontWeight: '600', marginTop: '8px', color: 'var(--ink)' }}>Connect with us</h3>
            </div>

            <div className="contact-quick">
              <div className="quick-item">
                <div className="quick-label">Phone</div>
                <a href="tel:+917234000088" className="quick-value">+91 72340 00088</a>
              </div>
              <div className="quick-item">
                <div className="quick-label">Email</div>
                <a href="mailto:hello@walnutestate.com" className="quick-value">hello@walnutestate.com</a>
              </div>
              <div className="quick-item">
                <div className="quick-label">Enquire</div>
                <a href="#" className="quick-value">Book a consultation</a>
              </div>
            </div>

            <div className="office-cards">
              {offices.map((office, idx) => (
                <div key={idx} className="office-card">
                  <h4 className="office-name">{office.name}</h4>
                  <div className="office-detail">
                    <span className="office-icon">📍</span>
                    <p>{office.address}</p>
                  </div>
                  <div className="office-detail">
                    <span className="office-icon">📞</span>
                    <a href={`tel:${office.phone}`}>{office.phone}</a>
                  </div>
                  <div className="office-detail">
                    <span className="office-icon">✉️</span>
                    <a href={`mailto:${office.email}`}>{office.email}</a>
                  </div>
                  <div className="office-detail">
                    <span className="office-icon">🕐</span>
                    <p>{office.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="contact-cta">
        <div className="contact-cta-inner reveal">
          <h2>Have questions about our services?</h2>
          <p>Our team of specialists is ready to help you find the perfect property or discuss your real estate goals in detail.</p>
          <a href="tel:+917234000088" className="btn btn-primary">Request a Call Back</a>
        </div>
      </section>
    </>
  );
}
