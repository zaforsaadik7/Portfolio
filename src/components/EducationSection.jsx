import React from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export default function EducationSection({ educationList, isAdmin, onAdd, onEdit, onDelete }) {
  return (
    <section id="education" className="section-card">
      <div className="section-header">
        <div className="section-heading">
          <span className="section-label">Background</span>
          <h2 className="section-title">Education</h2>
        </div>
        {isAdmin && (
          <button className="btn btn-secondary btn-sm" onClick={onAdd}>
            <Plus size={14} /> Add
          </button>
        )}
      </div>

      <div>
        {educationList && educationList.map((edu) => (
          <div key={edu.id} className="education-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
              <div>
                <h3 className="education-degree">{edu.degree}</h3>
                <div className="education-institute">{edu.institute}</div>
                {edu.result && <div className="education-meta">{edu.result}</div>}
                {edu.highlights && <div className="education-meta">{edu.highlights}</div>}
                {(edu.startDate || edu.endDate) && (
                  <div className="education-dates">
                    {edu.startDate} – {edu.endDate}
                  </div>
                )}
              </div>

              {isAdmin && (
                <div className="admin-actions">
                  <button className="admin-edit-btn" onClick={() => onEdit(edu)} title="Edit Education">
                    <Edit2 size={12} />
                  </button>
                  <button className="admin-delete-btn" onClick={() => onDelete(edu.id)} title="Delete Education">
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
