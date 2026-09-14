import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="section education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">BACKGROUND</span>
          <h2 className="section-title">
            <span className="gold-text">EDUCATION</span>
          </h2>
        </div>

        <div className="education-grid">
          <div className="education-card card-glow">
            <div className="edu-icon-box">
              <GraduationCap size={28} />
            </div>

            <div className="edu-info">
              <span className="edu-tag">ACADEMIC FIELD</span>
              <h3 className="edu-degree">AI-DS</h3>
              <p className="edu-sub">Artificial Intelligence & Data Science</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .education-section {
          background-color: var(--bg-main);
          border-top: 1px solid var(--border-color);
        }

        .education-grid {
          max-width: 600px;
        }

        .education-card {
          padding: 28px 32px;
          display: flex;
          align-items: center;
          gap: 24px;
          border-radius: 10px;
        }

        .edu-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 10px;
          background: rgba(201, 168, 106, 0.1);
          border: 1px solid var(--accent);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .edu-tag {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--accent);
        }

        .edu-degree {
          font-size: 1.6rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          margin-top: 2px;
          margin-bottom: 2px;
        }

        .edu-sub {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
