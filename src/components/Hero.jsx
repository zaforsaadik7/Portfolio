import React from 'react';
import { MapPin, Phone, Edit2, Plus, Trash2 } from 'lucide-react';

export default function Hero({ data, isAdmin, onEditSection, onAddSocial, onEditSocial, onDeleteSocial }) {
  const { coverPhoto, profilePhoto, bio, socialMedia } = data;

  return (
    <div className="hero-card">
      <div className="cover-photo-wrapper">
        <img src={coverPhoto} alt="Cover Banner" className="cover-photo" />
        {isAdmin && (
          <button
            className="btn btn-secondary btn-sm cover-edit-btn"
            onClick={() => onEditSection('coverPhoto')}
          >
            <Edit2 size={14} /> Change Cover
          </button>
        )}
      </div>

      <div className="hero-body">
        <div className="hero-top-row">
          <div className="profile-photo-wrapper">
            <img src={profilePhoto} alt={bio.fullName} className="profile-photo" />
            {isAdmin && (
              <button
                className="admin-edit-btn profile-edit-btn"
                onClick={() => onEditSection('profilePhoto')}
                title="Edit Profile Photo"
              >
                <Edit2 size={14} />
              </button>
            )}
          </div>

          <div className="social-actions-group">
            {socialMedia && socialMedia.map((social, index) => (
              <React.Fragment key={social.id}>
                {index > 0 && <span className="social-divider" aria-hidden="true">·</span>}
                <div className="social-link-item">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    {social.label || social.platform}
                  </a>
                  {isAdmin && (
                    <div className="admin-actions">
                      <button className="admin-edit-btn" onClick={() => onEditSocial(social)} title="Edit Social Link">
                        <Edit2 size={11} />
                      </button>
                      <button className="admin-delete-btn" onClick={() => onDeleteSocial(social.id)} title="Delete Social Link">
                        <Trash2 size={11} />
                      </button>
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}

            {isAdmin && (
              <button className="btn btn-ghost btn-sm" onClick={onAddSocial}>
                <Plus size={14} /> Add link
              </button>
            )}
          </div>
        </div>

        <div className="hero-details-row">
          <div>
            <div className="hero-name-row">
              <h1 className="hero-name">{bio.fullName}</h1>
              {isAdmin && (
                <button className="admin-edit-btn" onClick={() => onEditSection('bio')} title="Edit Bio Info">
                  <Edit2 size={16} />
                </button>
              )}
            </div>

            <h2 className="hero-title">{bio.title}</h2>

            {bio.shortBio && (
              <p className="hero-lede">{bio.shortBio}</p>
            )}

            <div className="hero-meta">
              {bio.location && (
                <span className="hero-meta-item">
                  <MapPin size={14} /> {bio.location}
                </span>
              )}
              {bio.phone && (
                <span className="hero-meta-item">
                  <Phone size={14} /> {bio.phone}
                </span>
              )}
              {bio.statusBadge && (
                <span className="hero-status">{bio.statusBadge}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
