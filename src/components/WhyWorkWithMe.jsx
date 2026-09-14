import React from 'react';
import { Target, Compass, Music, Palette, Wand2, UserCheck, Clock, TrendingUp } from 'lucide-react';

export default function WhyWorkWithMe() {
  const points = [
    {
      title: 'QUALITY-FOCUSED',
      desc: 'I focus on producing clean, sharp and professional-looking videos with high-quality exports, including 4K when suitable for the project.',
      icon: Target
    },
    {
      title: 'VISUAL STORYTELLING',
      desc: "I don't just combine clips — I focus on creating a flow that helps the footage communicate a story, emotion or message.",
      icon: Compass
    },
    {
      title: 'MUSIC SYNCHRONIZATION',
      desc: 'Cuts, transitions and important visual moments are synchronized carefully with the music to create engaging videos.',
      icon: Music
    },
    {
      title: 'PROFESSIONAL COLOUR GRADING',
      desc: 'I use colour correction and grading to improve the overall visual quality and maintain a consistent cinematic look.',
      icon: Palette
    },
    {
      title: 'CREATIVE EDITING',
      desc: 'I use transitions, speed ramping, effects and motion techniques only where they improve the video rather than distracting from it.',
      icon: Wand2
    },
    {
      title: 'CLIENT-FOCUSED APPROACH',
      desc: 'I listen carefully to client requirements and work toward delivering an output that matches their vision.',
      icon: UserCheck
    },
    {
      title: 'RELIABLE DELIVERY',
      desc: 'I aim to complete most editing projects within 3 days, depending on the length and complexity of the project.',
      icon: Clock
    },
    {
      title: 'CONTINUOUS IMPROVEMENT',
      desc: 'I take feedback seriously, learn from mistakes and use every project as an opportunity to improve my creative and technical skills.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="section why-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">VALUE PROPOSITION</span>
          <h2 className="section-title">
            WHY WORK <span className="gold-text">WITH ME</span>
          </h2>
          <p className="section-subtitle">
            Dedicated commitment to technical excellence, clear communication, and fast turnaround times.
          </p>
        </div>

        <div className="why-grid">
          {points.map((pt) => {
            const IconComponent = pt.icon;
            return (
              <div key={pt.title} className="why-card card-glow">
                <div className="why-icon-wrap">
                  <IconComponent size={22} />
                </div>
                <h3 className="why-title">{pt.title}</h3>
                <p className="why-desc">"{pt.desc}"</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .why-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .why-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
        }

        .why-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 8px;
          background: rgba(201, 168, 106, 0.1);
          border: 1px solid var(--accent);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .why-title {
          font-size: 1rem;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
        }

        .why-desc {
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--text-secondary);
          font-style: italic;
        }
      `}</style>
    </section>
  );
}
