import React from 'react';
import { Film, Video, Camera, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  const pillars = [
    { title: 'VIDEO EDITING', icon: Film, desc: 'Pacing, beat sync, speed ramping & cinematic cuts' },
    { title: 'VIDEOGRAPHY', icon: Video, desc: 'Gimbal movement, lighting & dynamic composition' },
    { title: 'PHOTOGRAPHY', icon: Camera, desc: 'Portrait, event & product photography retouching' },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Bio & Statements */}
          <div className="about-content">
            <span className="section-tag">ABOUT ME</span>
            <h2 className="section-title">
              TURNING RAW FOOTAGE INTO <span className="gold-text">VISUAL STORIES.</span>
            </h2>

            <div className="bio-paragraphs">
              <p className="bio-lead">
                Creative and detail-oriented Video Editor, Videographer and Photographer with 1 year of hands-on experience creating engaging digital content for social media, YouTube, weddings, promotional projects and cinematic videos.
              </p>
              
              <p>
                Skilled in transforming raw footage into visually engaging stories through music synchronization, colour grading, creative transitions, speed ramping and cinematic editing techniques.
              </p>

              <p>
                Comfortable handling both video production and post-production, with a strong focus on understanding client requirements and delivering polished, high-quality content.
              </p>

              <p>
                My goal is to continuously improve my creative skills and establish myself as a professional freelance video editor and content creator.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="pillars-grid">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={pillar.title} className="pillar-card">
                    <div className="pillar-icon">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="pillar-title">{pillar.title}</h4>
                      <span className="pillar-desc">{pillar.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Experience Badge & Stats */}
          <div className="about-visual">
            <div className="visual-frame">
              <div className="visual-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80"
                  alt="Sriharan M. Video Editor Workflow"
                  className="visual-img"
                  loading="lazy"
                />
                <div className="visual-overlay" />
              </div>

              {/* Stat Highlight Badge */}
              <div className="stat-badge card-glow">
                <div className="stat-number">01+</div>
                <div className="stat-label">
                  <Award size={16} className="stat-icon" />
                  <span>YEAR OF PRACTICAL EXPERIENCE</span>
                </div>
              </div>

              {/* Quality Checklist Card */}
              <div className="checklist-card">
                <div className="checklist-item">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>4K Export Ready</span>
                </div>
                <div className="checklist-item">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Music & Beat Sync</span>
                </div>
                <div className="checklist-item">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Color Correction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--bg-main);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .bio-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
        }

        .bio-lead {
          font-size: 1.15rem;
          color: var(--text-primary);
          font-weight: 500;
          line-height: 1.6;
        }

        .pillars-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .pillar-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px 20px;
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          transition: border-color var(--transition-fast);
        }

        .pillar-card:hover {
          border-color: var(--accent);
        }

        .pillar-icon {
          width: 40px;
          height: 40px;
          border-radius: 6px;
          background: rgba(183, 215, 176, 0.1);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pillar-title {
          font-size: 0.9rem;
          letter-spacing: 0.08em;
          margin-bottom: 4px;
        }

        .pillar-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .about-visual {
          position: relative;
        }

        .visual-frame {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          background-color: var(--bg-card);
        }

        .visual-image-wrapper {
          position: relative;
          width: 100%;
          height: 520px;
        }

        .visual-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%) contrast(105%);
        }

        .visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8, 8, 8, 0.85) 0%, transparent 60%);
        }

        .stat-badge {
          position: absolute;
          bottom: 24px;
          left: 24px;
          padding: 20px 24px;
          background: rgba(17, 17, 17, 0.9);
          backdrop-filter: blur(12px);
          border-radius: 10px;
          border: 1px solid var(--accent);
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 800;
          color: var(--accent);
          line-height: 1;
          margin-bottom: 6px;
        }

        .stat-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        .stat-icon {
          color: var(--accent);
        }

        .checklist-card {
          position: absolute;
          top: 24px;
          right: 24px;
          padding: 16px;
          background: rgba(17, 17, 17, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .checklist-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--text-primary);
        }

        .check-icon {
          color: var(--accent);
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .visual-image-wrapper {
            height: 380px;
          }
        }
      `}</style>
    </section>
  );
}
