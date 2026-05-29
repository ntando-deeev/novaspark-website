import { useAdmin } from './AdminContext';
import './Admin.css';

const navItems = [
  { id: 'dashboard', icon: '🏠', label: 'Dashboard' },
  { id: 'applications', icon: '📋', label: 'Applications' },
  { id: 'messages', icon: '💬', label: 'Messages' },
  { id: 'projects', icon: '🗂️', label: 'Portfolio' },
  { id: 'members', icon: '👥', label: 'Team Members' },
  { id: 'settings', icon: '⚙️', label: 'Settings' },
];

export default function AdminLayout({ children }) {
  const { logout, activeSection, setActiveSection, applications, messages } = useAdmin();

  const pendingApps = applications.filter(a => a.status === 'pending').length;
  const unreadMsgs = messages.filter(m => !m.read).length;

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar__logo">
          <span>⚡</span> Nova<strong>Spark</strong>
          <span className="admin-badge-pill">ADMIN</span>
        </div>

        <nav className="admin-sidebar__nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`admin-nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <span className="admin-nav-item__icon">{item.icon}</span>
              <span>{item.label}</span>
              {item.id === 'applications' && pendingApps > 0 && (
                <span className="admin-nav-badge">{pendingApps}</span>
              )}
              {item.id === 'messages' && unreadMsgs > 0 && (
                <span className="admin-nav-badge admin-nav-badge--blue">{unreadMsgs}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="admin-sidebar__footer">
          <div className="admin-sidebar__user">
            <div className="admin-avatar">AD</div>
            <div>
              <strong>Admin</strong>
              <span>admin@novaspark.ntando</span>
            </div>
          </div>
          <button className="admin-logout-btn" onClick={logout}>
            ↩ Sign Out
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <div className="admin-topbar">
          <div className="admin-topbar__breadcrumb">
            <span>NovaSpark Admin</span>
            <span>/</span>
            <span>{navItems.find(n => n.id === activeSection)?.label}</span>
          </div>
          <div className="admin-topbar__right">
            <span className="admin-topbar__status">
              <span className="admin-status-dot" />
              System Online
            </span>
          </div>
        </div>
        <div className="admin-content">
          {children}
        </div>
      </main>
    </div>
  );
}
