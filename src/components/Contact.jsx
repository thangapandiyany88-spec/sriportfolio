import React, { useState } from 'react';
import { Phone, Mail, FolderKanban, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Create mailto fallback
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:sriharan1528@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section contact-section">
      {/* Final Call to Action Pre-Banner */}
      <div className="container mb-80">
        <div className="cta-banner card-glow">
          <div className="cta-content">
            <span className="section-tag mb-0">START A PROJECT</span>
            <h2 className="cta-title">
              READY TO BRING YOUR <br />
              <span className="gold-text">VISION TO LIFE?</span>
            </h2>
            <p className="cta-sub">Let's create something worth watching.</p>
          </div>
          <a href="#contact-details" className="btn-primary cta-btn">
            <span>START A PROJECT</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Main Contact Section */}
      <div id="contact-details" className="container">
        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info">
            <span className="section-tag">GET IN TOUCH</span>
            <h2 className="section-title">
              LET'S CREATE SOMETHING <br />
              <span className="gold-text">GREAT TOGETHER.</span>
            </h2>
            <p className="section-subtitle">
              Have a project in mind? Let's turn your footage or idea into something worth watching.
            </p>

            <div className="contact-methods">
              {/* Phone */}
              <a href="tel:+918778544173" className="method-card card-glow">
                <div className="method-icon-box">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="method-label">PHONE</span>
                  <h4 className="method-value">+91 87785 44173</h4>
                </div>
                <ArrowUpRight size={18} className="method-arrow" />
              </a>

              {/* Email */}
              <a href="mailto:sriharan1528@gmail.com" className="method-card card-glow">
                <div className="method-icon-box">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="method-label">EMAIL</span>
                  <h4 className="method-value">sriharan1528@gmail.com</h4>
                </div>
                <ArrowUpRight size={18} className="method-arrow" />
              </a>

              {/* Google Drive Portfolio */}
              <a
                href="https://drive.google.com/drive/folders/1PA1XJM46ZComYXFzsQFXhGbj3Yop8wIe"
                target="_blank"
                rel="noopener noreferrer"
                className="method-card card-glow"
              >
                <div className="method-icon-box">
                  <FolderKanban size={22} />
                </div>
                <div>
                  <span className="method-label">PORTFOLIO VAULT</span>
                  <h4 className="method-value">Google Drive Master Folder</h4>
                </div>
                <ArrowUpRight size={18} className="method-arrow" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="contact-form-card card-glow">
            <h3 className="form-title">SEND A DIRECT MESSAGE</h3>
            <p className="form-sub">Fill in the details below to discuss your project requirements.</p>

            <form onSubmit={handleSubmit} className="form-body">
              <div className="form-group">
                <label htmlFor="name">YOUR NAME</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">YOUR EMAIL</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">PROJECT DETAILS & VISION</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Tell me about your video editing, videography, or photography project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn-primary submit-btn">
                <span>SEND MESSAGE</span>
                <Send size={16} />
              </button>

              {submitted && (
                <div className="success-msg">
                  <CheckCircle2 size={18} />
                  <span>Opening mail app with your project details!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .mb-80 {
          margin-bottom: 80px;
        }

        .cta-banner {
          padding: 48px;
          background: linear-gradient(135deg, #151515 0%, #1c1914 100%);
          border-color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .cta-title {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          line-height: 1.1;
          margin-top: 8px;
          margin-bottom: 8px;
        }

        .cta-sub {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: flex-start;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 32px;
        }

        .method-card {
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          border-radius: 8px;
          transition: transform var(--transition-fast), border-color var(--transition-fast);
        }

        .method-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 8px;
          background: rgba(183, 215, 176, 0.1);
          border: 1px solid var(--accent);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .method-label {
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--accent);
        }

        .method-value {
          font-size: 1rem;
          margin-top: 2px;
        }

        .method-arrow {
          margin-left: auto;
          color: var(--text-muted);
          transition: color var(--transition-fast), transform var(--transition-fast);
        }

        .method-card:hover .method-arrow {
          color: var(--accent);
          transform: translate(2px, -2px);
        }

        .contact-form-card {
          padding: 36px;
          background-color: var(--bg-card);
          border-radius: 12px;
        }

        .form-title {
          font-size: 1.25rem;
          margin-bottom: 6px;
        }

        .form-sub {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .form-body {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--text-secondary);
        }

        .form-group input,
        .form-group textarea {
          font-family: var(--font-body);
          font-size: 0.9rem;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          color: var(--text-primary);
          outline: none;
          transition: border-color var(--transition-fast);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--accent);
          background: rgba(255, 255, 255, 0.07);
        }

        .submit-btn {
          width: 100%;
          margin-top: 10px;
        }

        .success-msg {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px;
          background: rgba(183, 215, 176, 0.15);
          border: 1px solid var(--accent);
          border-radius: 6px;
          color: var(--accent);
          font-size: 0.85rem;
        }

        @media (max-width: 900px) {
          .cta-banner {
            flex-direction: column;
            align-items: flex-start;
            padding: 24px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
