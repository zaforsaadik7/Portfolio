import React from 'react';
import { Download, Lock, LogOut, ShieldCheck, Edit2 } from 'lucide-react';

export default function Header({ isAdmin, onOpenLogin, onLogout, downloadCvData, onEditCv }) {
  return (
    <>
      {isAdmin && (
        <div className="admin-banner">
          <div className="container admin-banner-content">
            <div className="admin-status">
              <span className="admin-dot"></span>
              <span>Admin mode — editing enabled</span>
            </div>
            <button className="btn btn-secondary btn-sm" onClick={onLogout}>
              <LogOut size={14} /> Exit
            </button>
          </div>
        </div>
      )}

      <header className="site-header">
        <div className="container header-nav">
          <a href="#" className="logo">
            <span className="logo-mark">ZS</span>
            <span>Zafor Saadik</span>
          </a>

          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#research" className="nav-link">Research</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#education" className="nav-link">Education</a></li>
          </ul>

          <div className="header-actions">
            {downloadCvData?.fileUrl && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <a
                  href={downloadCvData.fileUrl}
                  download={downloadCvData.fileName || "Zafor_Saadik_CV.pdf"}
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={15} /> {downloadCvData.buttonText || "Download CV"}
                </a>
                {isAdmin && (
                  <button
                    className="admin-edit-btn"
                    onClick={onEditCv}
                    title="Edit CV Download Settings"
                  >
                    <Edit2 size={14} />
                  </button>
                )}
              </div>
            )}

            {!isAdmin ? (
              <button
                className="btn btn-ghost btn-sm"
                onClick={onOpenLogin}
                title="Admin Login to Edit Portfolio"
              >
                <Lock size={15} />
              </button>
            ) : (
              <span title="Admin Authenticated" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--color-badge-green-text)', fontSize: '0.82rem', fontWeight: 600 }}>
                <ShieldCheck size={16} /> Admin
              </span>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
