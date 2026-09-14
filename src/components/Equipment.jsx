import React from 'react';
import { Smartphone, Camera, Laptop } from 'lucide-react';

export default function Equipment() {
  const gearList = [
    {
      name: 'iPhone 16 Pro',
      role: 'Photography & Videography',
      desc: 'High-bitrate mobile videography, 4K ProRes capture, and versatile multi-lens shooting.',
      icon: Smartphone
    },
    {
      name: 'DJI OSMO 8P',
      role: 'Stabilized Motion Cinematography',
      desc: 'Smooth gimbal stabilization for cinematic tracking shots and fluid camera movement.',
      icon: Camera
    },
    {
      name: 'MacBook',
      role: 'Video Editing & Post-Production Workstation',
      desc: 'High-speed render engine for 4K video editing, color grading, and heavy timeline playback.',
      icon: Laptop
    }
  ];

  return (
    <section className="section equipment-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">EQUIPMENT</span>
          <h2 className="section-title">
            MY <span className="gold-text">GEAR</span>
          </h2>
          <p className="section-subtitle">
            Reliable capture devices and post-production workstation for smooth, steady, high-quality deliverables.
          </p>
        </div>

        <div className="gear-grid">
          {gearList.map((gear) => {
            const IconComp = gear.icon;
            return (
              <div key={gear.name} className="gear-card card-glow">
                <div className="gear-icon-box">
                  <IconComp size={24} />
                </div>
                <h3 className="gear-name">{gear.name}</h3>
                <span className="gear-role">{gear.role}</span>
                <p className="gear-desc">{gear.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .equipment-section {
          background-color: var(--bg-main);
          border-top: 1px solid var(--border-color);
        }

        .gear-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .gear-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
        }

        .gear-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .gear-name {
          font-size: 1.3rem;
          margin-bottom: 4px;
        }

        .gear-role {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--accent);
          margin-bottom: 12px;
        }

        .gear-desc {
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
