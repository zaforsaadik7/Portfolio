import React from 'react';

export default function Footer({ name, socialMedia }) {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-name">{name}</div>
        <div>© {new Date().getFullYear()} · All rights reserved</div>
        <div className="footer-links">
          {socialMedia && socialMedia.map((s) => (
            <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer">
              {s.label || s.platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
