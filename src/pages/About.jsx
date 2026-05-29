import { NavLink } from 'react-router-dom';
import './About.css';

const team = [
  {
    name: 'Ntandoyenkosi',
    role: 'Founder & Lead Developer',
    bio: 'Full-stack developer and founder of NovaSpark. Passionate about using technology to solve real problems for Zimbabwean businesses.',
    skills: ['React', 'Node.js', 'MongoDB', 'System Design'],
    initials: 'NK',
    color: '#00d4ff',
  },
  {
    name: 'Dev Team',
    role: 'Software Engineers',
    bio: 'A talented group of Zimbabwean developers, designers, and digital strategists — all committed to delivering exceptional digital products.',
    skills: ['Flutter', 'Django', 'UI/UX', 'Cloud'],
    initials: 'DT',
    color: '#7b2fff',
  },
];

const values = [
  { icon: '⚡', title: 'Speed', desc: 'We move fast without cutting corners. Fast delivery is a feature, not a bonus.' },
  { icon: '🎯', title: 'Precision', desc: 'We build exactly what you need. No bloat, no guesswork, no surprises on the bill.' },
  { icon: '🤝', title: 'Integrity', desc: 'We say what we mean and deliver what we promise. That\'s it.' },
  { icon: '🌍', title: 'Local Roots', desc: 'Built in Zimbabwe. We understand the market, the infrastructure, and the people.' },
  { icon: '📈', title: 'Growth-Focused', desc: 'Every decision we make is aimed at growing your business, not just completing a ticket.' },
  { icon: '🔁', title: 'Long-term Partners', desc: 'We\'re not a one-and-done agency. We grow with our clients.' },
];

export default function About() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="section-label">About NovaSpark</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px' }}>
            Zimbabwe's Digital <span className="gradient-text">Development Studio</span>
          </h1>
          <p className="page-hero__sub">
            We are a team of developers, designers, and digital strategists based in Gweru, Zimbabwe —
            on a mission to make world-class software accessible to African businesses.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="story-section">
        <div className="container story-section__inner">
          <div className="story-section__left">
            <div className="section-label">Our Story</div>
            <h2 className="section-title">
              Started in <span className="gradient-text">Gweru.</span><br />
              Built for <span className="gradient-text">Zimbabwe.</span>
            </h2>
          </div>
          <div className="story-section__right">
            <p>
              NovaSpark Developers was founded with one clear goal: to make high-quality software development
              accessible and affordable for Zimbabwean businesses. For too long, local businesses were forced
              to either pay inflated prices to foreign agencies or settle for low-quality local solutions.
            </p>
            <p>
              We changed that. Based in Gweru, we combine global coding standards with deep local knowledge —
              understanding the infrastructure challenges, payment realities, and business environment that
              only a local team can truly appreciate.
            </p>
            <p>
              Today, we serve clients from Gweru to Harare to Bulawayo, and internationally. Every project
              we take on is an opportunity to prove that world-class software can be built right here at home.
            </p>
            <div className="story-section__stats">
              {[
                { v: '3+', l: 'Years in Business' },
                { v: '50+', l: 'Projects Delivered' },
                { v: '30+', l: 'Satisfied Clients' },
                { v: '5', l: 'Cities Served' },
              ].map(s => (
                <div key={s.l} className="story-stat">
                  <span>{s.v}</span>
                  <small>{s.l}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section">
        <div className="container">
          <div className="section-label">The Team</div>
          <h2 className="section-title" style={{ marginBottom: '48px' }}>
            People Behind the <span className="gradient-text">Spark</span>
          </h2>
          <div className="team-grid">
            {team.map(m => (
              <div key={m.name} className="team-card" style={{ '--tc': m.color }}>
                <div className="team-card__avatar" style={{ background: `linear-gradient(135deg, ${m.color}44, ${m.color}22)`, border: `1px solid ${m.color}44` }}>
                  <span style={{ color: m.color }}>{m.initials}</span>
                </div>
                <div className="team-card__info">
                  <h3>{m.name}</h3>
                  <span className="team-card__role">{m.role}</span>
                  <p>{m.bio}</p>
                  <div className="team-card__skills">
                    {m.skills.map(s => <span key={s}>{s}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="container">
          <div className="section-label">What We Stand For</div>
          <h2 className="section-title" style={{ marginBottom: '48px' }}>
            Our <span className="gradient-text">Values</span>
          </h2>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <span className="value-card__icon">{v.icon}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="location-section">
        <div className="container location-section__inner">
          <div>
            <div className="section-label">Where We Are</div>
            <h2 className="section-title">
              Gweru, <span className="gradient-text">Zimbabwe 📍</span>
            </h2>
            <p>
              The Midlands capital. Heart of Zimbabwe. Our home base. We work remotely with clients
              across Zimbabwe and internationally — but our roots and our pride are firmly in Gweru.
            </p>
            <NavLink to="/contact" className="btn btn-primary" style={{ marginTop: '32px' }}>
              Visit Us or Get in Touch
            </NavLink>
          </div>
          <div className="location-map">
            <div className="location-map__inner">
              <span>📍</span>
              <p>Gweru, Midlands Province</p>
              <p>Zimbabwe</p>
              <span className="location-map__dot" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner__glow" />
        <div className="container cta-banner__inner">
          <h2>Join the NovaSpark <span className="gradient-text">Family</span></h2>
          <p>Whether you're a client or a developer wanting to join the team — we'd love to hear from you.</p>
          <NavLink to="/contact" className="btn btn-primary">⚡ Get In Touch</NavLink>
        </div>
      </section>
    </main>
  );
}
