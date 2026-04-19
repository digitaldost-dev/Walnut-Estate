import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-brand">
            <img src="/main-logo.png" alt="Walnut Estate" className="footer-logo-img" />
            <div className="footer-logo">Walnut Estate</div>
          </div>
          <p className="footer-tagline">The evolution of the estate</p>
          <div className="footer-contact">
            <a href="tel:7234000088"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>72340 00088</a>
            <a href="mailto:info@walnutestate.com"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>info@walnutestate.com</a>
          </div>
          <div className="footer-socials">
            <a href="https://www.instagram.com/walnutestate/" target="_blank" rel="noopener noreferrer" className="social-btn" title="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
            <a href="https://www.facebook.com/walnutestate" target="_blank" rel="noopener noreferrer" className="social-btn" title="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
            <a href="https://x.com/WalnutEstate" target="_blank" rel="noopener noreferrer" className="social-btn" title="X"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="https://www.linkedin.com/company/walnut-estate/" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Properties</div>
          <ul className="footer-links">
            <li><a href="#">Luxury Villas</a></li>
            <li><a href="#">Penthouses</a></li>
            <li><a href="#">Golf Residences</a></li>
            <li><a href="#">Farmhouses</a></li>
            <li><a href="#">Investment Plots</a></li>
            <li><a href="#">New Launches</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            <li><a href="#">Property Curation</a></li>
            <li><a href="#">Investment Advisory</a></li>
            <li><a href="#">Interior Concierge</a></li>
            <li><a href="#">Private Sales</a></li>
            <li><a href="#">NRI Services</a></li>
            <li><a href="#">Legal Assistance</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            <li><Link href="/about">Our Story</Link></li>
            <li><a href="#">The Team</a></li>
            <li><a href="#">Press &amp; Media</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Journal</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2026 Walnut Estate. All Rights Reserved. RERA Reg. No. UP/RERA/2019/12345</div>
        <div className="footer-legal"><a href="#">Privacy Policy</a><a href="#">Terms of Use</a><a href="#">Cookie Settings</a></div>
      </div>
    </footer>
  );
}
