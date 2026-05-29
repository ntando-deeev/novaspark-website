import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="logo-spark">⚡</span>
          <span>Nova<strong>Spark</strong></span>
        </NavLink>

        <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map(l => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/join" className={({ isActive }) => `nav-join ${isActive ? 'active' : ''}`} onClick={() => setOpen(false)}>
              Join Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/members" className={({ isActive }) => `nav-members ${isActive ? 'active' : ''}`} onClick={() => setOpen(false)}>
              🔒 Members
            </NavLink>
          </li>
        </ul>

        <NavLink to="/contact" className="btn btn-primary navbar__cta" onClick={() => setOpen(false)}>Hire Us</NavLink>

        <button className={`navbar__burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
