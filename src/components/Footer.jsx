import { NavLink } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo"><span>⚡</span> Nova<strong>Spark</strong></div>
          <p>Full-spectrum ICT solutions from Gweru, Zimbabwe. Web, mobile, systems, networking, CCTV and more — serving clients worldwide.</p>
          <div className="footer__social">
            <a href="mailto:ntandoyenkosi@novaspark.ntando" aria-label="Email">✉</a>
            <a href="https://wa.me/263772000000?text=Hi%20NovaSpark%2C%20I%20need%20ICT%20help" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">💬</a>
            <a href="https://github.com/ntando-deeev" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer__links-group">
          <h4>Navigation</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/join">Join NovaSpark</NavLink></li>
            <li><NavLink to="/members">Members Portal</NavLink></li>
          </ul>
        </div>

        <div className="footer__links-group">
          <h4>ICT Services</h4>
          <ul>
            <li><NavLink to="/services">Web Development</NavLink></li>
            <li><NavLink to="/services">Mobile Apps</NavLink></li>
            <li><NavLink to="/services">School Systems</NavLink></li>
            <li><NavLink to="/services">CCTV Installation</NavLink></li>
            <li><NavLink to="/services">Networking & IT</NavLink></li>
            <li><NavLink to="/services">POS Systems</NavLink></li>
            <li><NavLink to="/services">Cloud & Hosting</NavLink></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Get In Touch</h4>
          <p>📍 Gweru, Midlands, Zimbabwe</p>
          <p>✉ ntandoyenkosi@novaspark.ntando</p>
          <a href="https://wa.me/263772000000?text=Hi%20NovaSpark%2C%20I%20need%20ICT%20help"
            target="_blank" rel="noopener noreferrer"
            style={{ display:'flex', gap:'8px', alignItems:'center', color:'#00c864', fontFamily:'var(--font-mono)', fontSize:'12px', marginTop:'8px', marginBottom:'16px' }}>
            💬 WhatsApp Us
          </a>
          <NavLink to="/contact" className="btn btn-outline" style={{ fontSize:'11px', padding:'10px 20px' }}>
            Start a Project
          </NavLink>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} NovaSpark Developers. Gweru, Zimbabwe. All rights reserved.</span>
          <span>Built with ⚡ by Ntandoyenkosi</span>
        </div>
      </div>
    </footer>
  );
}
