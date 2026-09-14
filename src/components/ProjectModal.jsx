import React, { useEffect, useRef, useState } from 'react';
import { X, ExternalLink, Maximize, Wrench, Sparkles, FolderKanban, Play, Film } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const { title, category, description, videoType, videoUrl, software = [], techniques = [] } = project;

  const requestFullscreen = () => {
    if (modalRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        modalRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container card-glow"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-category">{category}</span>
            <h3 className="modal-title">{title}</h3>
          </div>
          <div className="modal-actions">
            <button className="icon-btn" onClick={requestFullscreen} title="Fullscreen">
              <Maximize size={18} />
            </button>
            <button className="icon-btn close-btn" onClick={onClose} title="Close Modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Video Player Display */}
        <div className="modal-video-wrapper">
          {(videoType === 'local' || videoType === 'external' || !videoType) && (
            <>
              <video
                ref={videoRef}
                className="modal-video"
                controls
                autoPlay
                playsInline
                preload="auto"
                src={videoUrl}
                onError={() => setVideoError(true)}
              >
                <source src={videoUrl} type="video/quicktime" />
                <source src={videoUrl} type="video/mp4" />
              </video>

              {videoError && (
                <div className="codec-warning-overlay">
                  <div className="warning-card">
                    <Film size={44} className="warning-icon" />
                    <h4>APPLE HEVC / MOV VIDEO FORMAT</h4>
                    <p>
                      If your browser shows a blank frame for this raw iPhone video, click below to open and play the video file directly.
                    </p>
                    <a
                      href={videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <Play size={16} fill="currentColor" />
                      <span>OPEN / PLAY VIDEO FILE</span>
                    </a>
                  </div>
                </div>
              )}
            </>
          )}

          {videoType === 'drive' && (
            <div className="drive-fallback-card">
              <div className="drive-card-content">
                <FolderKanban size={56} className="drive-icon" />
                <h4>GOOGLE DRIVE PORTFOLIO VAULT</h4>
                <p>
                  This project is hosted directly in Sriharan M.'s official Google Drive portfolio folder.
                </p>
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary drive-btn"
                >
                  <span>OPEN ORIGINAL IN GOOGLE DRIVE</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Action Toolbar under Video Player */}
        {videoType === 'local' && (
          <div className="player-quick-bar">
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-play-link"
            >
              <ExternalLink size={14} />
              <span>Click here if video does not display (Open raw .MOV file in new tab)</span>
            </a>
          </div>
        )}

        {/* Modal Info Details */}
        <div className="modal-body">
          <div className="modal-desc-block">
            <h4>PROJECT OVERVIEW</h4>
            <p>{description}</p>
          </div>

          <div className="modal-meta-grid">
            {/* Software Tags */}
            {software.length > 0 && (
              <div className="meta-block">
                <div className="meta-header">
                  <Wrench size={14} className="meta-icon" />
                  <span>EDITING SOFTWARE</span>
                </div>
                <div className="tag-list">
                  {software.map((sw) => (
                    <span key={sw} className="badge-sw">
                      {sw}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Techniques Tags */}
            {techniques.length > 0 && (
              <div className="meta-block">
                <div className="meta-header">
                  <Sparkles size={14} className="meta-icon" />
                  <span>EDITING TECHNIQUES</span>
                </div>
                <div className="tag-list">
                  {techniques.map((tech) => (
                    <span key={tech} className="badge-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(0, 0, 0, 0.88);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-container {
          width: 100%;
          max-width: 960px;
          max-height: 90vh;
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          animation: scaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.9), 0 0 40px rgba(201, 168, 106, 0.15);
        }

        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }

        .modal-category {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--accent);
        }

        .modal-title {
          font-size: 1.2rem;
          margin-top: 4px;
        }

        .modal-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .icon-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: var(--accent);
          color: var(--accent);
        }

        .close-btn:hover {
          background: rgba(255, 75, 75, 0.2);
          color: #ff4b4b;
          border-color: #ff4b4b;
        }

        .modal-video-wrapper {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
          background-color: #000000;
        }

        .modal-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .player-quick-bar {
          padding: 10px 24px;
          background-color: #0d0d0d;
          border-bottom: 1px solid var(--border-color);
        }

        .quick-play-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--accent);
          text-decoration: underline;
        }

        .codec-warning-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 10, 0.92);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          z-index: 5;
        }

        .warning-card {
          max-width: 480px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        .warning-icon {
          color: var(--accent);
        }

        .warning-card h4 {
          font-size: 1.1rem;
          letter-spacing: 0.05em;
        }

        .warning-card p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .drive-fallback-card {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #111111 0%, #1a1a1a 100%);
          padding: 30px;
          text-align: center;
        }

        .drive-card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          max-width: 480px;
        }

        .drive-icon {
          color: var(--accent);
        }

        .drive-card-content h4 {
          font-size: 1.1rem;
          letter-spacing: 0.1em;
        }

        .drive-card-content p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .modal-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          background-color: var(--bg-card);
        }

        .modal-desc-block h4 {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          color: var(--accent);
          margin-bottom: 8px;
        }

        .modal-desc-block p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-primary);
        }

        .modal-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          border-top: 1px solid var(--border-color);
          padding-top: 20px;
        }

        .meta-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }

        .meta-icon {
          color: var(--accent);
        }

        .tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .badge-sw {
          font-size: 0.75rem;
          padding: 4px 12px;
          background: rgba(201, 168, 106, 0.1);
          border: 1px solid var(--accent);
          color: var(--accent);
          border-radius: 4px;
        }

        .badge-tech {
          font-size: 0.75rem;
          padding: 4px 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .modal-backdrop {
            padding: 12px;
          }
          .modal-meta-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
