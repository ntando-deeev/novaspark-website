import { useState } from 'react';
import { useAdmin } from '../AdminContext';

export default function AdminApplications() {
  const { applications, updateAppStatus } = useAdmin();
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'all' ? applications : applications.filter(a => a.status === filter);

  return (
    <div className="admin-section">
      <div className="admin-section__header">
        <div>
          <h2>Join Applications</h2>
          <p>Review and manage applications to join NovaSpark</p>
        </div>
        <div className="admin-filter-pills">
          {['all','pending','approved','rejected'].map(f => (
            <button key={f} className={`admin-filter-pill ${filter===f?'active':''}`} onClick={() => setFilter(f)}>
              {f.charAt(0).toUpperCase()+f.slice(1)}
              <span className="pill-count">{f==='all' ? applications.length : applications.filter(a=>a.status===f).length}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Applicant</th><th>Role</th><th>Level</th><th>Country</th><th>Date</th><th>Status</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(a => (
              <tr key={a.id}>
                <td>
                  <div className="td-person">
                    <div className="td-avatar">{a.name.slice(0,2).toUpperCase()}</div>
                    <div>
                      <strong>{a.name}</strong>
                      <span>{a.email}</span>
                    </div>
                  </div>
                </td>
                <td className="td-muted">{a.role}</td>
                <td className="td-muted">{a.level}</td>
                <td>{a.country}</td>
                <td className="td-muted">{a.date}</td>
                <td><span className={`status-pill status-pill--${a.status}`}>{a.status}</span></td>
                <td>
                  <div className="td-actions">
                    <button className="admin-btn-sm admin-btn-sm--view" onClick={() => setSelected(a)}>View</button>
                    {a.status !== 'approved' && (
                      <button className="admin-btn-sm admin-btn-sm--approve" onClick={() => updateAppStatus(a.id, 'approved')}>✓ Approve</button>
                    )}
                    {a.status !== 'rejected' && (
                      <button className="admin-btn-sm admin-btn-sm--reject" onClick={() => updateAppStatus(a.id, 'rejected')}>✗ Reject</button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="admin-modal-overlay" onClick={() => setSelected(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal__header">
              <div className="td-avatar" style={{ width:52, height:52, fontSize:16 }}>{selected.name.slice(0,2).toUpperCase()}</div>
              <div>
                <h3>{selected.name}</h3>
                <span>{selected.email}</span>
              </div>
              <button className="admin-modal__close" onClick={() => setSelected(null)}>✕</button>
            </div>
            <div className="admin-modal__body">
              <div className="admin-modal__row"><strong>Country</strong><span>{selected.country}</span></div>
              <div className="admin-modal__row"><strong>Role</strong><span>{selected.role}</span></div>
              <div className="admin-modal__row"><strong>Level</strong><span>{selected.level}</span></div>
              <div className="admin-modal__row"><strong>Skills</strong><span>{selected.skills}</span></div>
              <div className="admin-modal__row"><strong>Applied</strong><span>{selected.date}</span></div>
              <div className="admin-modal__row"><strong>Status</strong><span className={`status-pill status-pill--${selected.status}`}>{selected.status}</span></div>
              {selected.github && <div className="admin-modal__row"><strong>GitHub</strong><a href={selected.github} target="_blank" rel="noopener noreferrer">{selected.github}</a></div>}
            </div>
            <div className="admin-modal__footer">
              <button className="admin-btn-sm admin-btn-sm--approve" onClick={() => { updateAppStatus(selected.id,'approved'); setSelected(null); }}>✓ Approve</button>
              <button className="admin-btn-sm admin-btn-sm--reject" onClick={() => { updateAppStatus(selected.id,'rejected'); setSelected(null); }}>✗ Reject</button>
              <button className="admin-btn-sm" onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
