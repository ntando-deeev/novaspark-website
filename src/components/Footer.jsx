import { NavLink } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span>⚡</span> Nova<strong>Spark</strong>
          </div>
          <p>Building digital experiences that spark growth. Based in Gweru, Zimbabwe. Serving clients worldwide.</p>
          <div className="footer__social">
            <a href="mailto:ntandoyenkosi@novaspark.dev" aria-label="Email">✉</a>
            <a href="https://wa.me/263" aria-label="WhatsApp">📱</a>
            <a href="https://github.com" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
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
          </ul>
        </div>

        <div className="footer__links-group">
          <h4>Services</h4>
          <ul>
            <li><a href="/services">Web Development</a></li>
            <li><a href="/services">Mobile Apps</a></li>
            <li><a href="/services">UI/UX Design</a></li>
            <li><a href="/services">E-commerce</a></li>
            <li><a href="/services">IT Consulting</a></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Get In Touch</h4>
          <p>📍 Gweru, Zimbabwe</p>
          <p>✉ ntandoyenkosi@novaspark.dev</p>
          <p>📞 +263 000 000 000</p>
          <NavLink to="/contact" className="btn btn-outline" style={{ marginTop: '16px', fontSize: '11px', padding: '10px 20px' }}>
            Start a Project
          </NavLink>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} NovaSpark Developers. All rights reserved.</span>
          <span>Built with ⚡ in Gweru, Zimbabwe</span>
        </div>
      </div>
    </footer>
  );
}
