import React from 'react';
import { Sliders, Zap, SunMedium } from 'lucide-react';

export default function Software() {
  const tools = [
    {
      name: 'DAVINCI RESOLVE',
      category: 'POST-PRODUCTION & COLOR GRADING',
      desc: 'Video editing, colour grading, transitions, effects and cinematic post-production.',
      icon: Sliders,
      badge: 'PRO INDUSTRY STANDARD'
    },
    {
      name: 'CAPCUT',
      category: 'FAST-PACED SOCIAL CONTENT',
      desc: 'Reels, Shorts, social media content, effects, transitions, captions and fast-paced editing.',
      icon: Zap,
      badge: 'VIRAL CONTENT'
    },
    {
      name: 'ADOBE LIGHTROOM',
      category: 'PHOTO ENHANCEMENT & RETOUCHING',
      desc: 'Photo enhancement, colour correction, colour grading and image retouching.',
      icon: SunMedium,
      badge: 'IMAGE MASTERY'
    }
  ];

  return (
    <section className="section software-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">SOFTWARE</span>
          <h2 className="section-title">
            TOOLS OF THE <span className="gold-text">CRAFT</span>
          </h2>
          <p className="section-subtitle">
            Professional editing software utilized for pixel-perfect grading, precision cuts, and social media optimization.
          </p>
        </div>

        <div className="software-grid">
          {tools.map((tool) => {
            const IconComp = tool.icon;
            return (
              <div key={tool.name} className="software-card card-glow">
                <div className="sw-card-header">
                  <div className="sw-icon-wrap">
                    <IconComp size={24} />
                  </div>
                  <span className="sw-badge">{tool.badge}</span>
                </div>

                <span className="sw-category">{tool.category}</span>
                <h3 className="sw-name">{tool.name}</h3>
                <p className="sw-desc">{tool.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .software-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .software-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .software-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
        }

        .sw-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .sw-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          background: rgba(201, 168, 106, 0.1);
          border: 1px solid var(--accent);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sw-badge {
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          color: var(--text-secondary);
        }

        .sw-category {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--accent);
          margin-bottom: 6px;
        }

        .sw-name {
          font-size: 1.4rem;
          margin-bottom: 12px;
        }

        .sw-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
