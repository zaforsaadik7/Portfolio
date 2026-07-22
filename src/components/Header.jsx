import React from 'react';
import { Lock, LogOut, ShieldCheck, Copy } from 'lucide-react';

export default function Header({ isAdmin, onOpenLogin, onLogout, onExportData }) {
  return (
    <>
      {isAdmin && (
        <div className="admin-banner">
          <div className="container admin-banner-content">
            <div className="admin-status">
              <span className="admin-dot"></span>
              <span>Admin mode — editing enabled</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button className="btn btn-primary btn-sm" onClick={onExportData} title="Copy updated portfolio JSON to clipboard">
                <Copy size={14} /> Export / Copy JSON
              </button>
              <button className="btn btn-secondary btn-sm" onClick={onLogout}>
                <LogOut size={14} /> Exit
              </button>
            </div>
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
