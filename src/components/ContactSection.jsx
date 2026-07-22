import React from 'react';
import { Mail, Phone, MapPin, Plus, Edit2, Trash2, Clock } from 'lucide-react';

export default function ContactSection({ contactList, responseTime, isAdmin, onAdd, onEdit, onDelete, onEditResponseTime }) {
  const getContactIcon = (type) => {
    switch (type) {
      case 'phone': return <Phone size={15} />;
      case 'location': return <MapPin size={15} />;
      default: return <Mail size={15} />;
    }
  };

  return (
    <section className="section-card">
      <div className="section-header">
        <div className="section-heading">
          <span className="section-label">Reach out</span>
          <h2 className="section-title">Contact</h2>
        </div>
        {isAdmin && (
          <button className="btn btn-secondary btn-sm" onClick={onAdd}>
            <Plus size={14} /> Add
          </button>
        )}
      </div>

      <div>
        {contactList && contactList.map((c) => (
          <div key={c.id} className="contact-row">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--text-muted)' }}>{getContactIcon(c.type)}</span>
              <span className="contact-value">{c.value}</span>
            </div>

            {isAdmin && (
              <div className="admin-actions">
                <button className="admin-edit-btn" onClick={() => onEdit(c)} title="Edit Contact">
                  <Edit2 size={12} />
                </button>
                <button className="admin-delete-btn" onClick={() => onDelete(c.id)} title="Delete Contact">
                  <Trash2 size={12} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {responseTime && (
        <div className="response-note">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={14} /> {responseTime}
          </div>
          {isAdmin && (
            <button className="admin-edit-btn" onClick={onEditResponseTime} title="Edit Response Time">
              <Edit2 size={12} />
            </button>
          )}
        </div>
      )}
    </section>
  );
}
