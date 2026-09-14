import React from 'react';
import { Play, ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Dynamic Background Effects */}
      <div className="hero-bg-grid" />
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="container hero-container">
        <div className="hero-content">
          {/* Tagline Badge */}
          <div className="hero-tag">
            <Sparkles size={14} className="hero-sparkle" />
            <span>VIDEO EDITOR • VIDEOGRAPHER • PHOTOGRAPHER</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-heading">
            CREATING <br />
            <span className="gold-text">VISUAL STORIES</span> <br />
            THAT CONNECT.
          </h1>

          {/* Supporting Statement */}
          <p className="hero-subtext">
            I transform raw footage into cinematic, engaging and meaningful visual experiences.
          </p>

          {/* Call to Action Buttons */}
          <div className="hero-buttons">
            <a
              href="#showreel"
              className="btn-primary"
              onClick={(e) => scrollToSection(e, '#showreel')}
            >
              <Play size={16} fill="currentColor" />
              <span>WATCH SHOWREEL</span>
            </a>

            <a
              href="#work"
              className="btn-secondary"
              onClick={(e) => scrollToSection(e, '#work')}
            >
              <span>VIEW MY WORK</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#showreel"
          className="scroll-indicator"
          onClick={(e) => scrollToSection(e, '#showreel')}
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown size={18} className="scroll-chevron" />
        </a>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: var(--header-height);
          background-color: var(--bg-main);
          overflow: hidden;
        }

        .hero-bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }

        .hero-glow-1 {
          top: 20%;
          left: 15%;
          width: 400px;
          height: 400px;
          background: rgba(183, 215, 176, 0.12);
          animation: pulseGlow 8s infinite alternate ease-in-out;
        }

        .hero-glow-2 {
          bottom: 15%;
          right: 15%;
          width: 450px;
          height: 450px;
          background: rgba(120, 100, 60, 0.08);
          animation: pulseGlow 10s infinite alternate-reverse ease-in-out;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding-top: 40px;
          padding-bottom: 80px;
        }

        .hero-content {
          max-width: 900px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(183, 215, 176, 0.08);
          border: 1px solid var(--border-color);
          border-radius: 100px;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: var(--accent);
          margin-bottom: 28px;
          backdrop-filter: blur(8px);
        }

        .hero-sparkle {
          color: var(--accent);
        }

        .hero-heading {
          font-size: clamp(2.5rem, 6.5vw, 5.2rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
        }

        .hero-subtext {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          max-width: 640px;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          color: var(--text-muted);
          transition: color var(--transition-fast);
        }

        .scroll-indicator:hover {
          color: var(--accent);
        }

        .scroll-chevron {
          animation: floatSlow 2s infinite ease-in-out;
        }

        @media (max-width: 640px) {
          .hero-buttons {
            width: 100%;
            flex-direction: column;
          }
          .hero-buttons .btn-primary,
          .hero-buttons .btn-secondary {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
