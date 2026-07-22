import React from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export default function SkillStackSection({ skills, isAdmin, onAdd, onEdit, onDelete }) {
  return (
    <section className="section-card">
      <div className="section-header">
        <div className="section-heading">
          <span className="section-label">Toolkit</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>
        {isAdmin && (
          <button className="btn btn-secondary btn-sm" onClick={onAdd}>
            <Plus size={14} /> Add
          </button>
        )}
      </div>

      <div>
        {skills && skills.map((skillGroup, idx) => (
          <div key={idx} className="skill-category">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="skill-category-name">{skillGroup.category}</div>
              {isAdmin && (
                <div className="admin-actions">
                  <button className="admin-edit-btn" onClick={() => onEdit(skillGroup, idx)} title="Edit Skill Group">
                    <Edit2 size={12} />
                  </button>
                  <button className="admin-delete-btn" onClick={() => onDelete(idx)} title="Delete Skill Group">
                    <Trash2 size={12} />
                  </button>
                </div>
              )}
            </div>

            <div className="skill-pills">
              {skillGroup.items && skillGroup.items.map((item, itemIdx) => (
                <span key={itemIdx} className="skill-badge">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
