import React from 'react';
import { Video, Film, Heart, Megaphone, Palette, Camera } from 'lucide-react';

export default function Services() {
  const services = [
    {
      num: '01',
      title: 'VIDEO EDITING',
      desc: 'Instagram Reels, YouTube videos, Shorts, montage videos and long-form content.',
      icon: Video,
    },
    {
      num: '02',
      title: 'CINEMATIC EDITING',
      desc: 'Cinematic storytelling, pacing, transitions, speed ramping and visual enhancement.',
      icon: Film,
    },
    {
      num: '03',
      title: 'WEDDING VIDEOGRAPHY',
      desc: 'Wedding filming and emotional cinematic wedding edits.',
      icon: Heart,
    },
    {
      num: '04',
      title: 'PROMOTIONAL CONTENT',
      desc: 'Engaging promotional videos for businesses, brands and social media.',
      icon: Megaphone,
    },
    {
      num: '05',
      title: 'COLOR GRADING',
      desc: 'Professional colour correction and cinematic colour grading.',
      icon: Palette,
    },
    {
      num: '06',
      title: 'VIDEOGRAPHY & PHOTOGRAPHY',
      desc: 'Creative shooting, photography, mobile videography and cinematic camera work.',
      icon: Camera,
    },
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">SERVICES</span>
          <h2 className="section-title">
            WHAT <span className="gold-text">I DO</span>
          </h2>
          <p className="section-subtitle">
            Tailored visual production and post-production solutions to elevate your brand and digital presence.
          </p>
        </div>

        <div className="services-grid">
          {services.map((srv) => {
            const IconComponent = srv.icon;
            return (
              <div key={srv.num} className="service-card card-glow">
                <div className="service-card-top">
                  <span className="service-num">{srv.num}</span>
                  <div className="service-icon-box">
                    <IconComponent size={22} />
                  </div>
                </div>

                <h3 className="service-title">{srv.title}</h3>
                <p className="service-desc">{srv.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-section {
          background-color: var(--bg-main);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .service-card {
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
        }

        .service-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .service-num {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 800;
          color: var(--accent);
          letter-spacing: 0.1em;
        }

        .service-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .service-card:hover .service-icon-box {
          background: var(--accent);
          color: #080808;
          border-color: var(--accent);
        }

        .service-title {
          font-size: 1.15rem;
          margin-bottom: 12px;
          letter-spacing: 0.05em;
        }

        .service-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
