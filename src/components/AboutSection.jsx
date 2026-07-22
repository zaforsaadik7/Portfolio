import React from 'react';
import { Edit2 } from 'lucide-react';

export default function AboutSection({ aboutText, isAdmin, onEdit }) {
  return (
    <section id="about" className="section-card">
      <div className="section-header">
        <div className="section-heading">
          <span className="section-label">Profile</span>
          <h2 className="section-title">About</h2>
        </div>
        {isAdmin && (
          <button className="admin-edit-btn" onClick={onEdit} title="Edit About Section">
            <Edit2 size={16} />
          </button>
        )}
      </div>

      <p className="section-body-text">{aboutText}</p>
    </section>
  );
}
