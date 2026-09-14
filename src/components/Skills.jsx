import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Skills() {
  const skills = [
    "Instagram Reels Editing",
    "Short-Form Video Editing",
    "Long-Form Video Editing",
    "Montage Video Editing",
    "Cinematic Video Editing",
    "Wedding Video Editing",
    "Promotional Video Editing",
    "Social Media Content Editing",
    "Speed Ramping",
    "Music & Beat Synchronization",
    "Creative Transitions",
    "Visual Effects",
    "Colour Grading",
    "Visual Storytelling",
    "4K Video Editing & Export",
    "Pacing & Rhythm Control",
    "Audio & Sound FX Design"
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">VIDEO EDITING SKILLS</span>
          <h2 className="section-title">
            EDITING <span className="gold-text">EXPERTISE</span>
          </h2>
          <p className="section-subtitle">
            Technical mastery in post-production workflows, music synchronization, and cinematic storytelling.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill} className="skill-chip card-glow">
              <span className="skill-index">{String(index + 1).padStart(2, '0')}</span>
              <CheckCircle size={16} className="skill-icon" />
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 16px;
        }

        .skill-chip {
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: 6px;
          background: var(--bg-card);
        }

        .skill-index {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent);
        }

        .skill-icon {
          color: var(--text-muted);
          transition: color var(--transition-fast);
        }

        .skill-chip:hover .skill-icon {
          color: var(--accent);
        }

        .skill-name {
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }
      `}</style>
    </section>
  );
}
