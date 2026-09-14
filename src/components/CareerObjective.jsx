import React from 'react';
import { Target } from 'lucide-react';

export default function CareerObjective() {
  return (
    <section className="section objective-section">
      <div className="container">
        <div className="objective-card card-glow">
          <div className="objective-header">
            <Target size={24} className="objective-icon" />
            <span className="section-tag mb-0">CAREER OBJECTIVE</span>
          </div>

          <h2 className="objective-title">
            THE <span className="gold-text">GOAL</span>
          </h2>

          <div className="objective-content">
            <p className="objective-lead">
              "To build a successful career as a professional freelance Video Editor, Photographer and Videographer, work with brands, creators, businesses and clients, and create high-quality visual content that connects with audiences."
            </p>
            <p>
              "I aim to continuously strengthen my skills in cinematic storytelling, videography, photography, colour grading and professional video editing while building a strong creative portfolio."
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .objective-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .objective-card {
          padding: 48px 40px;
          background: linear-gradient(135deg, #151515 0%, #1c1914 100%);
          border-color: var(--accent-glow);
        }

        .objective-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .objective-icon {
          color: var(--accent);
        }

        .mb-0 {
          margin-bottom: 0 !important;
        }

        .objective-title {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 24px;
        }

        .objective-content {
          max-width: 900px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .objective-lead {
          font-size: 1.2rem;
          color: var(--text-primary);
          font-weight: 500;
          line-height: 1.6;
          font-style: italic;
        }

        .objective-content p:last-child {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .objective-card {
            padding: 32px 20px;
          }
        }
      `}</style>
    </section>
  );
}
