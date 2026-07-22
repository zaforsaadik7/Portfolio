import React from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export default function ResearchInterestsSection({ interests, isAdmin, onAdd, onEdit, onDelete }) {
  return (
    <section className="section-card">
      <div className="section-header">
        <div className="section-heading">
          <span className="section-label">Focus areas</span>
          <h2 className="section-title">Research Interests</h2>
        </div>
        {isAdmin && (
          <button className="btn btn-secondary btn-sm" onClick={onAdd}>
            <Plus size={14} /> Add
          </button>
        )}
      </div>

      <div className="interest-list">
        {interests && interests.map((interest, idx) => (
          <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <span className="interest-tag">{interest}</span>
            {isAdmin && (
              <div className="admin-actions">
                <button className="admin-edit-btn" onClick={() => onEdit(interest, idx)} title="Edit Interest">
                  <Edit2 size={10} />
                </button>
                <button className="admin-delete-btn" onClick={() => onDelete(idx)} title="Delete Interest">
                  <Trash2 size={10} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
