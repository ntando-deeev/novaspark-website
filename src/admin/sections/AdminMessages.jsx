import { useState } from 'react';
import { useAdmin } from '../AdminContext';

export default function AdminMessages() {
  const { messages, markRead, deleteMessage } = useAdmin();
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? messages : filter === 'unread' ? messages.filter(m => !m.read) : messages.filter(m => m.read);

  const open = (m) => {
    markRead(m.id);
    setSelected(m);
  };

  return (
    <div className="admin-section">
      <div className="admin-section__header">
        <div>
          <h2>Contact Messages</h2>
          <p>Enquiries submitted through the website contact form</p>
        </div>
        <div className="admin-filter-pills">
          {['all','unread','read'].map(f => (
            <button key={f} className={`admin-filter-pill ${filter===f?'active':''}`} onClick={() => setFilter(f)}>
              {f.charAt(0).toUpperCase()+f.slice(1)}
              <span className="pill-count">{f==='all' ? messages.length : f==='unread' ? messages.filter(m=>!m.read).length : messages.filter(m=>m.read).length}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="admin-messages-list">
        {filtered.map(m => (
          <div key={m.id} className={`admin-message-card ${!m.read ? 'unread' : ''}`}>
            <div className="admin-message-card__left">
              {!m.read && <div className="unread-dot" />}
              <div className="td-avatar">{m.name.slice(0,2).toUpperCase()}</div>
              <div className="admin-message-card__info">
                <strong>{m.name}</strong>
                <span>{m.email}{m.phone ? ` · ${m.phone}` : ''}</span>
                <p>{m.message.slice(0, 100)}{m.message.length > 100 ? '...' : ''}</p>
              </div>
            </div>
            <div className="admin-message-card__right">
              <span className="admin-service-tag">{m.service}</span>
              <span className="admin-budget-tag">{m.budget}</span>
              <span className="td-muted" style={{ fontSize:'11px' }}>{m.date}</span>
              <div className="td-actions">
                <button className="admin-btn-sm admin-btn-sm--view" onClick={() => open(m)}>Read</button>
                <a href={`mailto:${m.email}?subject=Re: ${m.service} Enquiry — NovaSpark`} className="admin-btn-sm admin-btn-sm--approve">Reply</a>
                {m.phone && <a href={`https://wa.me/${m.phone.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" className="admin-btn-sm" style={{ background:'rgba(0,200,100,0.1)', borderColor:'rgba(0,200,100,0.3)', color:'#00c864' }}>WhatsApp</a>}
                <button className="admin-btn-sm admin-btn-sm--reject" onClick={() => { deleteMessage(m.id); if(selected?.id===m.id) setSelected(null); }}>Delete</button>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <div className="admin-empty">No messages here.</div>}
      </div>

      {selected && (
        <div className="admin-modal-overlay" onClick={() => setSelected(null)}>
          <div className="admin-modal" style={{ maxWidth: 600 }} onClick={e => e.stopPropagation()}>
            <div className="admin-modal__header">
              <div className="td-avatar">{selected.name.slice(0,2).toUpperCase()}</div>
              <div>
                <h3>{selected.name}</h3>
                <span>{selected.email}</span>
              </div>
              <button className="admin-modal__close" onClick={() => setSelected(null)}>✕</button>
            </div>
            <div className="admin-modal__body">
              <div className="admin-modal__row"><strong>Service</strong><span>{selected.service}</span></div>
              <div className="admin-modal__row"><strong>Budget</strong><span>{selected.budget}</span></div>
              {selected.phone && <div className="admin-modal__row"><strong>Phone</strong><span>{selected.phone}</span></div>}
              <div className="admin-modal__row"><strong>Date</strong><span>{selected.date}</span></div>
              <div className="admin-modal__message">
                <strong>Message</strong>
                <p>{selected.message}</p>
              </div>
            </div>
            <div className="admin-modal__footer">
              <a href={`mailto:${selected.email}?subject=Re: ${selected.service} — NovaSpark`} className="admin-btn-sm admin-btn-sm--approve">✉ Reply via Email</a>
              {selected.phone && <a href={`https://wa.me/${selected.phone.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" className="admin-btn-sm" style={{ background:'rgba(0,200,100,0.1)', borderColor:'rgba(0,200,100,0.3)', color:'#00c864' }}>💬 WhatsApp</a>}
              <button className="admin-btn-sm" onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
