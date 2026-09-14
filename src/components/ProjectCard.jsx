import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  const { title, category, description, thumbnail, software = [], videoType } = project;

  return (
    <div className="project-card card-glow" onClick={() => onSelect(project)}>
      <div className="thumbnail-container">
        <img
          src={thumbnail}
          alt={title}
          className="thumbnail-img"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80';
          }}
        />

        {/* Hover Overlay */}
        <div className="card-overlay">
          <div className="play-button-circle">
            {videoType === 'drive' ? (
              <ExternalLink size={24} className="play-icon" />
            ) : (
              <Play size={24} fill="currentColor" className="play-icon" />
            )}
          </div>
          <span className="overlay-cta">
            {videoType === 'drive' ? 'OPEN DRIVE VAULT' : 'WATCH PROJECT'}
          </span>
        </div>

        {/* Top Badges */}
        <div className="card-top-bar">
          <span className="category-badge">{category}</span>
          <span className="type-badge">{videoType.toUpperCase()}</span>
        </div>
      </div>

      {/* Card Info Content */}
      <div className="card-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>

        {/* Software Badges */}
        {software.length > 0 && (
          <div className="software-tags">
            {software.map((sw) => (
              <span key={sw} className="sw-tag">
                {sw}
              </span>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          cursor: pointer;
        }

        .thumbnail-container {
          position: relative;
          width: 100%;
          padding-top: 56.25%; /* 16:9 ratio */
          overflow: hidden;
          background-color: #0d0d0d;
        }

        .thumbnail-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
        }

        .project-card:hover .thumbnail-img {
          transform: scale(1.08);
          filter: brightness(0.7);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(2px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }

        .project-card:hover .card-overlay {
          opacity: 1;
        }

        .play-button-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--accent);
          color: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 25px rgba(183, 215, 176, 0.6);
          transform: scale(0.8);
          transition: transform var(--transition-fast);
        }

        .project-card:hover .play-button-circle {
          transform: scale(1);
        }

        .overlay-cta {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #ffffff;
        }

        .card-top-bar {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 2;
        }

        .category-badge {
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 4px 10px;
          background: rgba(8, 8, 8, 0.8);
          backdrop-filter: blur(8px);
          color: var(--accent);
          border: 1px solid rgba(183, 215, 176, 0.3);
          border-radius: 4px;
        }

        .type-badge {
          font-family: var(--font-heading);
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          padding: 3px 8px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          color: var(--text-secondary);
          border-radius: 4px;
        }

        .card-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-title {
          font-size: 1.1rem;
          margin-bottom: 8px;
          transition: color var(--transition-fast);
        }

        .project-card:hover .project-title {
          color: var(--accent);
        }

        .project-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .software-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
        }

        .sw-tag {
          font-size: 0.7rem;
          padding: 2px 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
}
