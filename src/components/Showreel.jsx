import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Film, AlertCircle } from 'lucide-react';
import { SHOWREEL_CONFIG } from '../data/projects';

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  const playerContainerRef = useRef(null);

  const { videoUrl, fallbackText, title, subtitle } = SHOWREEL_CONFIG;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) => {
          console.error("Video play error:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (playerContainerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        playerContainerRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="showreel" className="section showreel-section">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <span className="section-tag">FEATURED SHOWCASE</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle mx-auto">{subtitle}</p>
        </div>

        {/* Video Player Frame */}
        <div className="showreel-wrapper" ref={playerContainerRef}>
          <div className="showreel-aspect-ratio">
            {videoUrl ? (
              <>
                <video
                  ref={videoRef}
                  className="showreel-video"
                  poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1600&q=80"
                  controls
                  playsInline
                  preload="auto"
                  src={videoUrl}
                  muted={isMuted}
                  onError={() => setVideoError(true)}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={videoUrl} type="video/mp4" />
                  <source src={videoUrl} type="video/quicktime" />
                </video>

                {videoError && (
                  <div className="codec-warning-overlay">
                    <div className="warning-card">
                      <AlertCircle size={40} className="warning-icon" />
                      <h4>CANNOT PLAY THIS .MOV FILE IN BROWSER?</h4>
                      <p>
                        This raw QuickTime video uses Apple HEVC codec. 
                        Click below to open and play the video in a new browser tab or system media player.
                      </p>
                      <a
                        href={videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <Play size={16} fill="currentColor" />
                        <span>OPEN / PLAY VIDEO IN NEW TAB</span>
                      </a>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Fallback coming soon visual */
              <div className="showreel-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon-wrap">
                    <Film size={48} className="placeholder-icon" />
                  </div>
                  <h3>{fallbackText}</h3>
                  <p>Place your video file inside <code>public/videos/</code> to display your live showcase video.</p>
                </div>
              </div>
            )}
          </div>

          {/* Custom Controls Bar */}
          <div className="showreel-controls">
            <button className="control-btn" onClick={togglePlay} aria-label="Toggle Play">
              {isPlaying ? <Pause size={20} /> : <Play size={20} fill="currentColor" />}
            </button>
            
            <div className="controls-label">
              <span>SRIHARAN M. — VISUAL SHOWCASE</span>
            </div>

            <div className="controls-right">
              <button className="control-btn" onClick={toggleMute} aria-label="Toggle Mute">
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <button className="control-btn" onClick={toggleFullscreen} aria-label="Toggle Fullscreen">
                <Maximize size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .showreel-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .text-center {
          text-align: center;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        .showreel-wrapper {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          background-color: #000000;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(183, 215, 176, 0.1);
        }

        .showreel-aspect-ratio {
          position: relative;
          width: 100%;
          padding-top: 56.25%; /* 16:9 Aspect Ratio */
          background-color: #050505;
        }

        .showreel-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
          object-fit: cover;
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

        .showreel-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0d0d0d 0%, #171717 100%);
          text-align: center;
          padding: 30px;
        }

        .placeholder-content {
          max-width: 540px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .placeholder-icon-wrap {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(183, 215, 176, 0.1);
          border: 1px solid var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
        }

        .placeholder-content h3 {
          font-size: 1.5rem;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        .placeholder-content p {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .showreel-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          background-color: #0d0d0d;
          border-top: 1px solid var(--border-color);
        }

        .controls-label {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
        }

        .controls-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .control-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .control-btn:hover {
          background: var(--accent);
          color: #000000;
          border-color: var(--accent);
        }

        @media (max-width: 640px) {
          .controls-label {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
