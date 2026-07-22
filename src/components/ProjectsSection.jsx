import React from 'react';
import { Plus, Edit2, Trash2, ExternalLink, Code, Droplet, Eye, Globe, MessageSquare } from 'lucide-react';

export default function ProjectsSection({ projects, isAdmin, onAdd, onEdit, onDelete }) {
  const getProjectIcon = (iconName) => {
    switch (iconName) {
      case 'droplet': return <Droplet size={17} />;
      case 'eye': return <Eye size={17} />;
      case 'globe': return <Globe size={17} />;
      case 'message-square': return <MessageSquare size={17} />;
      default: return <Code size={17} />;
    }
  };

  return (
    <section id="projects" className="section-card">
      <div className="section-header">
        <div className="section-heading">
          <span className="section-label">Builds</span>
          <h2 className="section-title">Engineering Projects</h2>
        </div>
        {isAdmin && (
          <button className="btn btn-secondary btn-sm" onClick={onAdd}>
            <Plus size={14} /> Add
          </button>
        )}
      </div>

      <div className="project-grid">
        {projects && projects.map((proj) => (
          <div key={proj.id} className="item-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div className="item-card-header">
                <div className="icon-box">
                  {getProjectIcon(proj.icon)}
                </div>
                <h3 className="item-title" style={{ fontSize: '1rem' }}>
                  {proj.link ? (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                      {proj.title}
                    </a>
                  ) : (
                    proj.title
                  )}
                </h3>
              </div>

              {isAdmin && (
                <div className="admin-actions">
                  <button className="admin-edit-btn" onClick={() => onEdit(proj)} title="Edit Project">
                    <Edit2 size={12} />
                  </button>
                  <button className="admin-delete-btn" onClick={() => onDelete(proj.id)} title="Delete Project">
                    <Trash2 size={12} />
                  </button>
                </div>
              )}
            </div>

            <p className="item-description">{proj.description}</p>

            {proj.demoLink && (
              <a href={proj.demoLink} target="_blank" rel="noopener noreferrer" className="text-link">
                Live demo <ExternalLink size={12} />
              </a>
            )}

            {proj.techStack && proj.techStack.length > 0 && (
              <div className="tags-row">
                {proj.techStack.map((tech, idx) => (
                  <span key={idx} className="tag-pill">{tech}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
