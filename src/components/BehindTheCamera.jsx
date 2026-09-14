import React from 'react';
import { Camera, Aperture } from 'lucide-react';

export default function BehindTheCamera() {
  const cameraSkills = [
    "Wedding Shoots",
    "Cinematic Videography",
    "Social Media Video Shoots",
    "Promotional Shoots",
    "Photography",
    "Mobile Videography",
    "Gimbal Cinematography",
    "Creative Camera Angles",
    "Shot Composition",
    "Lighting Awareness",
    "Cinematic Movement",
    "Content Planning"
  ];

  return (
    <section className="section behind-camera-section">
      <div className="container">
        <div className="section-header text-center mx-auto">
          <span className="section-tag">VIDEOGRAPHY & PHOTOGRAPHY</span>
          <h2 className="section-title">
            BEHIND THE <span className="gold-text">CAMERA</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Combining production technique, dynamic framing, and lighting awareness to capture raw emotion and high-impact visual footage.
          </p>
        </div>

        <div className="camera-grid">
          {cameraSkills.map((item) => (
            <div key={item} className="camera-card card-glow">
              <div className="camera-card-inner">
                <div className="aperture-icon-wrap">
                  <Aperture size={20} className="aperture-icon" />
                </div>
                <span className="camera-item-title">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .behind-camera-section {
          background-color: var(--bg-main);
          border-top: 1px solid var(--border-color);
        }

        .camera-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }

        .camera-card {
          padding: 24px;
          border-radius: 8px;
          background: linear-gradient(135deg, #151515 0%, #1a1a1a 100%);
        }

        .camera-card-inner {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .aperture-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(183, 215, 176, 0.1);
          border: 1px solid var(--accent);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.4s ease;
        }

        .camera-card:hover .aperture-icon-wrap {
          transform: rotate(90deg);
        }

        .camera-item-title {
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--text-primary);
        }
      `}</style>
    </section>
  );
}
