import React from 'react';
import { ArrowUp, Phone, Mail, FolderKanban } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <h3 className="footer-logo">SRIHARAN M.</h3>
            <p className="footer-title">VIDEO EDITOR • VIDEOGRAPHER • PHOTOGRAPHER</p>
            <p className="footer-desc">Creating visual stories that connect.</p>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-links-group">
            <h4 className="footer-heading">NAVIGATION</h4>
            <ul className="footer-links">
              <li><a href="#hero">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#work">WORK</a></li>
              <li><a href="#services">SERVICES</a></li>
              <li><a href="#skills">SKILLS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-contact-group">
            <h4 className="footer-heading">CONNECT</h4>
            <div className="footer-contact-items">
              <a href="tel:+918778544173" className="footer-contact-item">
                <Phone size={14} className="f-icon" />
                <span>+91 87785 44173</span>
              </a>
              <a href="mailto:sriharan1528@gmail.com" className="footer-contact-item">
                <Mail size={14} className="f-icon" />
                <span>sriharan1528@gmail.com</span>
              </a>
              <a
                href="https://drive.google.com/drive/folders/1PA1XJM46ZComYXFzsQFXhGbj3Yop8wIe"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <FolderKanban size={14} className="f-icon" />
                <span>Google Drive Portfolio</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            © 2026 Thanga Pandiyan. All rights reserved.
          </p>

          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <span>BACK TO TOP</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: #040404;
          border-top: 1px solid var(--border-color);
          padding: 80px 0 40px 0;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 60px;
        }

        .footer-logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          background: linear-gradient(135deg, #ffffff 60%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 6px;
        }

        .footer-title {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--accent);
          margin-bottom: 12px;
        }

        .footer-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          max-width: 320px;
        }

        .footer-heading {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--text-primary);
          margin-bottom: 20px;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links a {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--accent);
        }

        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .footer-contact-item:hover {
          color: var(--accent);
        }

        .f-icon {
          color: var(--accent);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 32px;
          border-top: 1px solid var(--border-color);
        }

        .copyright {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .back-to-top {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .back-to-top:hover {
          color: var(--accent);
        }

        @media (max-width: 900px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
