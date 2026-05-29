import { NavLink } from 'react-router-dom';
import './Home.css';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '3+', label: 'Years Experience' },
  { value: '24/7', label: 'Support' },
];

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Fast, responsive websites and web applications built with modern frameworks.',
    tag: 'React · Node.js · PHP',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile apps for Android and iOS that users love.',
    tag: 'React Native · Flutter',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Clean, intuitive interfaces that convert visitors into customers.',
    tag: 'Figma · Prototyping',
  },
  {
    icon: '🛒',
    title: 'E-commerce',
    desc: 'Full-featured online stores with payments, inventory, and analytics.',
    tag: 'Shopify · WooCommerce',
  },
  {
    icon: '🔐',
    title: 'System Development',
    desc: 'Custom management systems, portals, and automation tools.',
    tag: 'MERN · Django · Laravel',
  },
  {
    icon: '☁️',
    title: 'Cloud & Hosting',
    desc: 'Deployment, hosting, and maintenance — we keep your systems running.',
    tag: 'AWS · Render · Vercel',
  },
];

const testimonials = [
  {
    name: 'Chiedza Moyo',
    role: 'Business Owner, Bulawayo',
    quote: 'NovaSpark built our online store in two weeks. Sales went up 60% in the first month. These guys are the real deal.',
    avatar: 'CM',
  },
  {
    name: 'Tatenda Ncube',
    role: 'Founder, TechStart ZW',
    quote: "Professional, fast, and they actually understand what you're trying to build. Best developers in Zimbabwe.",
    avatar: 'TN',
  },
  {
    name: 'Rutendo Dube',
    role: 'Marketing Manager, Gweru',
    quote: 'Our company website went from embarrassing to stunning. NovaSpark delivered beyond expectations.',
    avatar: 'RD',
  },
];

export default function Home() {
  return (
    <main className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__orbs" aria-hidden="true">
          <div className="orb orb--1" />
          <div className="orb orb--2" />
          <div className="orb orb--3" />
        </div>

        <div className="container hero__inner">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span>Available for new projects</span>
          </div>

          <h1 className="hero__title">
            We Build Digital<br />
            <span className="gradient-text">Experiences That</span><br />
            <span className="hero__title-spark">Spark ⚡</span> Growth
          </h1>

          <p className="hero__sub">
            NovaSpark Developers — Gweru's leading software house. We craft websites,
            mobile apps, and custom systems that help businesses across Zimbabwe and beyond
            compete in the digital economy.
          </p>

          <div className="hero__actions">
            <NavLink to="/contact" className="btn btn-primary">Start Your Project →</NavLink>
            <NavLink to="/portfolio" className="btn btn-outline">View Our Work</NavLink>
          </div>

          <div className="hero__stats">
            {stats.map(s => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__scroll">
          <span />
          <span className="hero__scroll-text">Scroll</span>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="home-services">
        <div className="container">
          <div className="section-label">What We Do</div>
          <div className="home-services__header">
            <h2 className="section-title">
              Full-Stack <span className="gradient-text">Digital Solutions</span>
            </h2>
            <NavLink to="/services" className="btn btn-outline">All Services →</NavLink>
          </div>

          <div className="home-services__grid">
            {services.map(s => (
              <div key={s.title} className="service-card">
                <div className="service-card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-card__tag">{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NOVASPARK ── */}
      <section className="why">
        <div className="container">
          <div className="why__inner">
            <div className="why__left">
              <div className="section-label">Why NovaSpark</div>
              <h2 className="section-title">
                Local Knowledge.<br />
                <span className="gradient-text">Global Standards.</span>
              </h2>
              <p>
                We are Zimbabwean developers who understand the local market, pricing realities,
                and the unique challenges businesses face here — while delivering software to
                international quality benchmarks.
              </p>
              <NavLink to="/about" className="btn btn-outline" style={{ marginTop: '32px' }}>
                Meet The Team →
              </NavLink>
            </div>
            <div className="why__right">
              {[
                { n: '01', t: 'Fast Turnaround', d: 'Most projects delivered in 2–6 weeks, not months.' },
                { n: '02', t: 'Transparent Pricing', d: 'No hidden fees. Fixed quotes before we start.' },
                { n: '03', t: 'Post-Launch Support', d: '3 months free support on every project.' },
                { n: '04', t: 'Built to Scale', d: 'Code that grows with your business.' },
              ].map(i => (
                <div key={i.n} className="why__item">
                  <span className="why__num">{i.n}</span>
                  <div>
                    <h4>{i.t}</h4>
                    <p>{i.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials">
        <div className="container">
          <div className="section-label">Client Feedback</div>
          <h2 className="section-title" style={{ marginBottom: '48px' }}>
            What Our Clients <span className="gradient-text">Say</span>
          </h2>
          <div className="testimonials__grid">
            {testimonials.map(t => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-card__stars">★★★★★</div>
                <p>"{t.quote}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.avatar}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="cta-banner__glow" />
        <div className="container cta-banner__inner">
          <h2>Ready to Build Something <span className="gradient-text">Brilliant?</span></h2>
          <p>Tell us your idea. We'll make it real — fast, clean, and built to last.</p>
          <NavLink to="/contact" className="btn btn-primary">
            ⚡ Get a Free Quote
          </NavLink>
        </div>
      </section>
    </main>
  );
}
