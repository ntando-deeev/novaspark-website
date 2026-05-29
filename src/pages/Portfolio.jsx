import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Portfolio.css';

const projects = [
  {
    title: 'DWIM Church Management System',
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB'],
    desc: 'Full-stack church management system for Destiny Word International Ministries. Manages sermons, events, gallery, announcements, and users with role-based access.',
    year: '2024',
    color: '#7b2fff',
  },
  {
    title: 'AgriConnect Zimbabwe',
    category: 'web',
    tags: ['React', 'Express', 'PostgreSQL'],
    desc: 'B2B marketplace connecting Zimbabwean farmers directly with buyers. Features price discovery, order management, and logistics tracking.',
    year: '2024',
    color: '#00d4ff',
  },
  {
    title: 'SchoolPro Dashboard',
    category: 'system',
    tags: ['Next.js', 'Prisma', 'MySQL'],
    desc: 'School administration system for a Gweru secondary school. Student records, timetables, fee management, and report cards — all in one place.',
    year: '2024',
    color: '#ff6b35',
  },
  {
    title: 'ZimFashion Store',
    category: 'ecommerce',
    tags: ['Shopify', 'Liquid', 'Klaviyo'],
    desc: 'Custom Shopify theme and full e-commerce setup for a Zimbabwean fashion brand. Mobile-first design, local payment integration.',
    year: '2023',
    color: '#ffe500',
  },
  {
    title: 'MediBook Clinic Portal',
    category: 'system',
    tags: ['React', 'Django', 'PostgreSQL'],
    desc: 'Patient appointment booking and management system for a private medical clinic. SMS notifications, doctor availability, and billing.',
    year: '2023',
    color: '#00ff88',
  },
  {
    title: 'GweruEats Delivery App',
    category: 'mobile',
    tags: ['React Native', 'Firebase', 'Stripe'],
    desc: 'Food delivery app for restaurants in Gweru. Real-time order tracking, driver dashboard, and customer rating system.',
    year: '2023',
    color: '#ff3d71',
  },
  {
    title: 'PropZim Real Estate',
    category: 'web',
    tags: ['Vue.js', 'Laravel', 'MySQL'],
    desc: 'Property listing and management platform for Zimbabwean real estate agents. Advanced search filters, virtual tours, and enquiry management.',
    year: '2023',
    color: '#7b2fff',
  },
  {
    title: 'NovaSpark Design System',
    category: 'design',
    tags: ['Figma', 'Storybook', 'React'],
    desc: 'Internal component library and design system built by NovaSpark. Used across all client projects for consistent, high-quality UI.',
    year: '2024',
    color: '#00d4ff',
  },
  {
    title: 'Inventory Pro — SME Tool',
    category: 'system',
    tags: ['React', 'Node.js', 'MongoDB'],
    desc: 'Inventory and stock management system for small and medium businesses in Zimbabwe. Barcode scanning, low-stock alerts, and financial reports.',
    year: '2024',
    color: '#ff6b35',
  },
];

const filters = ['all', 'web', 'mobile', 'ecommerce', 'system', 'design'];

export default function Portfolio() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active);

  return (
    <main className="portfolio-page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="section-label">Our Work</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px' }}>
            Projects That <span className="gradient-text">Speak for Themselves</span>
          </h1>
          <p className="page-hero__sub">
            From church systems to e-commerce stores to mobile apps — here's what we've built for clients across Zimbabwe.
          </p>
        </div>
      </section>

      <section className="portfolio-content">
        <div className="container">
          <div className="portfolio-filters">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-btn ${active === f ? 'active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f === 'all' ? 'All Projects' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filtered.map(p => (
              <div key={p.title} className="project-card" style={{ '--card-color': p.color }}>
                <div className="project-card__preview">
                  <div className="project-card__dots">
                    <span /><span /><span />
                  </div>
                  <div className="project-card__mockup">
                    <span className="project-card__icon">
                      {p.category === 'web' && '🌐'}
                      {p.category === 'mobile' && '📱'}
                      {p.category === 'ecommerce' && '🛒'}
                      {p.category === 'system' && '🔐'}
                      {p.category === 'design' && '🎨'}
                    </span>
                    <span className="project-card__title-preview">{p.title}</span>
                  </div>
                </div>
                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span className="project-card__year">{p.year}</span>
                    <span className="project-card__cat">{p.category}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="project-card__tags">
                    {p.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner__glow" />
        <div className="container cta-banner__inner">
          <h2>Want Your Project Here?</h2>
          <p>Let's add your success story to this list.</p>
          <NavLink to="/contact" className="btn btn-primary">⚡ Start a Project</NavLink>
        </div>
      </section>
    </main>
  );
}
