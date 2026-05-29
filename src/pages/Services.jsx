import { NavLink } from 'react-router-dom';
import './Services.css';

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'From simple landing pages to complex web applications, we build fast, responsive, and SEO-optimised websites that work flawlessly on every device.',
    features: ['React, Vue, Next.js', 'Node.js & PHP backends', 'REST & GraphQL APIs', 'SEO optimisation', 'CMS integration'],
    price: 'From $200',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile apps for Android and iOS built with React Native and Flutter. One codebase, two platforms, no compromise on quality.',
    features: ['Android & iOS', 'React Native / Flutter', 'Offline functionality', 'Push notifications', 'App Store deployment'],
    price: 'From $500',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Beautiful, intuitive designs that put your users first. We prototype, test, and refine until every interaction feels effortless.',
    features: ['Wireframing & prototyping', 'Figma design files', 'User research', 'Responsive design', 'Brand consistency'],
    price: 'From $150',
  },
  {
    icon: '🛒',
    title: 'E-commerce Solutions',
    desc: 'Full-featured online stores that sell. We integrate payments, inventory management, and analytics so you can focus on growing your business.',
    features: ['Shopify & WooCommerce', 'Payment gateways', 'Inventory systems', 'Order management', 'Analytics dashboards'],
    price: 'From $350',
  },
  {
    icon: '🔐',
    title: 'Custom Software & Systems',
    desc: 'Management systems, portals, dashboards, and internal tools — built to your exact requirements and designed to save you time and money.',
    features: ['School & church systems', 'HR & payroll tools', 'Inventory management', 'Booking systems', 'CRM development'],
    price: 'From $400',
  },
  {
    icon: '☁️',
    title: 'Cloud, Hosting & Maintenance',
    desc: 'We deploy, configure, and maintain your applications on reliable cloud platforms. SSL, backups, monitoring — all handled.',
    features: ['AWS, Render, Vercel', 'Domain setup', 'SSL certificates', 'Automated backups', 'Monthly maintenance'],
    price: 'From $30/mo',
  },
  {
    icon: '📊',
    title: 'Digital Marketing',
    desc: 'SEO, social media strategy, and content that drives real traffic and real conversions — not vanity metrics.',
    features: ['SEO audits & strategy', 'Google Ads setup', 'Social media content', 'Email campaigns', 'Analytics reporting'],
    price: 'From $100/mo',
  },
  {
    icon: '🧠',
    title: 'IT Consulting',
    desc: 'Not sure what technology stack to choose? We advise businesses on the right tools, platforms, and digital strategies.',
    features: ['Tech stack advice', 'System audits', 'Digital transformation', 'Cost optimisation', 'Team training'],
    price: 'From $50/hr',
  },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We listen to your idea, goals, and constraints. Free 30-minute call, no pressure.' },
  { step: '02', title: 'Proposal', desc: 'Fixed-price quote, timeline, and tech plan delivered within 24 hours.' },
  { step: '03', title: 'Design', desc: 'UI mockups and prototypes you approve before a single line of code is written.' },
  { step: '04', title: 'Build', desc: 'Weekly progress updates. You see it growing in real time.' },
  { step: '05', title: 'Launch', desc: 'Deployment, testing, and handover with full documentation.' },
  { step: '06', title: 'Support', desc: '3 months free support after launch. We don\'t disappear.' },
];

export default function Services() {
  return (
    <main className="services-page">
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="section-label">What We Offer</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px' }}>
            Services Built for <span className="gradient-text">Real Business</span>
          </h1>
          <p className="page-hero__sub">
            Everything you need to build, launch, and grow your digital presence —
            at prices that make sense for the Zimbabwean market.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map(s => (
              <div key={s.title} className="svc-card">
                <div className="svc-card__top">
                  <div className="svc-card__icon">{s.icon}</div>
                  <span className="svc-card__price">{s.price}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="svc-card__features">
                  {s.features.map(f => (
                    <li key={f}><span>→</span> {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="container">
          <div className="section-label">How We Work</div>
          <h2 className="section-title" style={{ marginBottom: '56px' }}>
            Our <span className="gradient-text">Process</span>
          </h2>
          <div className="process-grid">
            {process.map(p => (
              <div key={p.step} className="process-item">
                <div className="process-item__num">{p.step}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-banner__glow" />
        <div className="container cta-banner__inner">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Tell us your problem. We'll figure out the right solution together.</p>
          <NavLink to="/contact" className="btn btn-primary">⚡ Book a Free Call</NavLink>
        </div>
      </section>
    </main>
  );
}
