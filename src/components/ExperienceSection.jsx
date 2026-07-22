import React from 'react';
import { Plus, Edit2, Trash2, ExternalLink } from 'lucide-react';

export default function ExperienceSection({ experiences, isAdmin, onAdd, onEdit, onDelete }) {
  return (
    <section id="experience" className="section-card">
      <div className="section-header">
        <div className="section-heading">
          <span className="section-label">Work</span>
          <h2 className="section-title">Experience</h2>
        </div>
        {isAdmin && (
          <button className="btn btn-secondary btn-sm" onClick={onAdd}>
            <Plus size={14} /> Add
          </button>
        )}
      </div>

      <div className="timeline">
        {experiences && experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="item-title-row">
                <div>
                  <div className="item-title">{exp.position}</div>
                  <div className="item-company">{exp.company}</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="item-date">
                    {exp.startDate}
                    {exp.isCurrent ? ' – Present' : exp.endDate ? ` – ${exp.endDate}` : ''}
                  </span>
                  {isAdmin && (
                    <div className="admin-actions">
                      <button className="admin-edit-btn" onClick={() => onEdit(exp)} title="Edit Experience">
                        <Edit2 size={14} />
                      </button>
                      <button className="admin-delete-btn" onClick={() => onDelete(exp.id)} title="Delete Experience">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <p className="item-description">{exp.description}</p>

              {exp.link && (
                <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-link">
                  Visit website <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
