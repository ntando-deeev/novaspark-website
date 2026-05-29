import { useAdmin } from '../AdminContext';

export default function AdminDashboard() {
  const { applications, messages, projects, members, setActiveSection } = useAdmin();

  const stats = [
    { icon: '📋', label: 'Total Applications', value: applications.length, sub: `${applications.filter(a=>a.status==='pending').length} pending`, color: '#ffe500', section: 'applications' },
    { icon: '💬', label: 'Contact Messages', value: messages.length, sub: `${messages.filter(m=>!m.read).length} unread`, color: '#00d4ff', section: 'messages' },
    { icon: '🗂️', label: 'Portfolio Projects', value: projects.length, sub: `${projects.filter(p=>p.visible).length} visible`, color: '#7b2fff', section: 'projects' },
    { icon: '👥', label: 'Team Members', value: members.length, sub: `${members.filter(m=>m.status==='active').length} active`, color: '#00ff88', section: 'members' },
  ];

  const recentApps = applications.slice(0, 4);
  const recentMsgs = messages.slice(0, 4);

  return (
    <div className="admin-section">
      <div className="admin-section__header">
        <div>
          <h2>Dashboard</h2>
          <p>Overview of NovaSpark operations</p>
        </div>
        <span className="admin-date">{new Date().toLocaleDateString('en-ZW', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}</span>
      </div>

      <div className="admin-stats-grid">
        {stats.map(s => (
          <div key={s.label} className="admin-stat-card" style={{ '--sc': s.color }} onClick={() => setActiveSection(s.section)}>
            <div className="admin-stat-card__top">
              <span className="admin-stat-card__icon">{s.icon}</span>
              <span className="admin-stat-card__value">{s.value}</span>
            </div>
            <div className="admin-stat-card__label">{s.label}</div>
            <div className="admin-stat-card__sub">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="admin-panels">
        <div className="admin-panel">
          <div className="admin-panel__header">
            <h3>Recent Applications</h3>
            <button className="admin-link-btn" onClick={() => setActiveSection('applications')}>View all →</button>
          </div>
          <table className="admin-table">
            <thead>
              <tr><th>Name</th><th>Role</th><th>Country</th><th>Status</th></tr>
            </thead>
            <tbody>
              {recentApps.map(a => (
                <tr key={a.id}>
                  <td>{a.name}</td>
                  <td className="td-muted">{a.role}</td>
                  <td className="td-muted">{a.country}</td>
                  <td><span className={`status-pill status-pill--${a.status}`}>{a.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="admin-panel">
          <div className="admin-panel__header">
            <h3>Recent Messages</h3>
            <button className="admin-link-btn" onClick={() => setActiveSection('messages')}>View all →</button>
          </div>
          <div className="admin-msg-list">
            {recentMsgs.map(m => (
              <div key={m.id} className={`admin-msg-row ${!m.read ? 'unread' : ''}`}>
                <div className="admin-msg-row__dot" />
                <div className="admin-msg-row__info">
                  <strong>{m.name}</strong>
                  <span>{m.service}</span>
                </div>
                <span className="admin-msg-row__date">{m.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
