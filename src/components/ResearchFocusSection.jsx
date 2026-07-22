import React from 'react';
import { Plus, Edit2, Trash2, ExternalLink } from 'lucide-react';

export default function ResearchFocusSection({ researchItems, isAdmin, onAdd, onEdit, onDelete }) {
  return (
    <section id="research" className="section-card">
      <div className="section-header">
        <div className="section-heading">
          <span className="section-label">Publications & work</span>
          <h2 className="section-title">Research Focus</h2>
        </div>
        {isAdmin && (
          <button className="btn btn-secondary btn-sm" onClick={onAdd}>
            <Plus size={14} /> Add
          </button>
        )}
      </div>

      <div className="cards-list">
        {researchItems && researchItems.map((item) => (
          <div key={item.id} className="item-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <h3 className="item-title">
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-link" style={{ marginTop: 0 }}>
                        {item.title} <ExternalLink size={13} />
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  {item.status && <span className="status-badge">{item.status}</span>}
                </div>

                {(item.venue || item.year) && (
                  <div className="item-date" style={{ marginTop: '6px' }}>
                    {item.venue}{item.year ? ` · ${item.year}` : ''}
                  </div>
                )}
              </div>

              {isAdmin && (
                <div className="admin-actions">
                  <button className="admin-edit-btn" onClick={() => onEdit(item)} title="Edit Research Item">
                    <Edit2 size={14} />
                  </button>
                  <button className="admin-delete-btn" onClick={() => onDelete(item.id)} title="Delete Research Item">
                    <Trash2 size={14} />
                  </button>
                </div>
              )}
            </div>

            <p className="item-description">{item.description}</p>

            {item.keywords && item.keywords.length > 0 && (
              <div className="tags-row">
                {item.keywords.map((kw, idx) => (
                  <span key={idx} className="tag-pill">{kw}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
