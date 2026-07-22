import React from 'react';
import { Plus, Edit2, Trash2, Heart, ExternalLink } from 'lucide-react';
import { formatUrl } from '../utils/urlHelper';

export default function HobbiesSection({ hobbies, isAdmin, onAdd, onEdit, onDelete }) {
  return (
    <section id="hobbies" className="section-card">
      <div className="section-header">
        <div className="section-heading">
          <span className="section-label">Personal</span>
          <h2 className="section-title">Hobbies</h2>
        </div>
        {isAdmin && (
          <button className="btn btn-secondary btn-sm" onClick={onAdd}>
            <Plus size={14} /> Add
          </button>
        )}
      </div>

      <div>
        {(!hobbies || hobbies.length === 0) && (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>
            No hobbies added yet. {isAdmin && "Click 'Add' above to add your first hobby!"}
          </p>
        )}

        {hobbies && hobbies.map((hobby) => (
          <div key={hobby.id} className="education-item" style={{ marginBottom: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ flex: 1 }}>
                <h3 className="education-degree" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Heart size={15} color="var(--color-primary)" /> {hobby.name}
                </h3>
                {hobby.description && (
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-color)', marginTop: '4px', lineHeight: 1.5 }}>
                    {hobby.description}
                  </p>
                )}
                {hobby.link && (
                  <div style={{ marginTop: '6px' }}>
                    <a
                      href={formatUrl(hobby.link)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                      style={{ fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      Visit link <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>

              {isAdmin && (
                <div className="admin-actions">
                  <button className="admin-edit-btn" onClick={() => onEdit(hobby)} title="Edit Hobby">
                    <Edit2 size={12} />
                  </button>
                  <button className="admin-delete-btn" onClick={() => onDelete(hobby.id)} title="Delete Hobby">
                    <Trash2 size={12} />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
