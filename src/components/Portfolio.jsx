import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { PROJECTS, CATEGORIES } from '../data/projects';
import { ExternalLink, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toUpperCase() === activeCategory);

  return (
    <section id="work" className="section portfolio-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">SELECTED WORK</span>
          <h2 className="section-title">
            VISUALS THAT <span className="gold-text">SPEAK.</span>
          </h2>
          <p className="section-subtitle">
            A collection of cinematic edits, social content and visual stories.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="filter-tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Sparkles size={36} className="empty-icon" />
            <h3>NO PROJECTS IN THIS CATEGORY YET</h3>
            <p>Check back soon or explore the main Google Drive portfolio vault.</p>
          </div>
        )}

        {/* Google Drive Direct Vault CTA */}
        <div className="drive-vault-banner card-glow">
          <div className="vault-content">
            <div className="vault-tag">FULL REPOSITORY</div>
            <h3>EXPLORE ALL RAW & FINISHED FILES IN GOOGLE DRIVE</h3>
            <p>
              Access Sriharan M.'s complete production vault including uncompressed videos, photo galleries, and client archives.
            </p>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1PA1XJM46ZComYXFzsQFXhGbj3Yop8wIe"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary vault-btn"
          >
            <span>OPEN DRIVE PORTFOLIO</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Project Modal Overlay */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        .portfolio-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .filter-tabs {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .filter-btn {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          padding: 8px 18px;
          border-radius: 100px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .filter-btn.active {
          background: var(--accent);
          color: #080808;
          border-color: var(--accent);
          box-shadow: 0 4px 15px rgba(183, 215, 176, 0.3);
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
        }

        .empty-state {
          text-align: center;
          padding: 60px 20px;
          background: var(--bg-card);
          border: 1px border var(--border-color);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .empty-icon {
          color: var(--accent);
        }

        .drive-vault-banner {
          margin-top: 60px;
          padding: 36px 40px;
          background: linear-gradient(135deg, #151515 0%, #1c1914 100%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          border-color: var(--accent-glow);
        }

        .vault-tag {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--accent);
          margin-bottom: 8px;
        }

        .vault-content h3 {
          font-size: 1.3rem;
          margin-bottom: 6px;
        }

        .vault-content p {
          font-size: 0.9rem;
          max-width: 650px;
        }

        .vault-btn {
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .drive-vault-banner {
            flex-direction: column;
            align-items: flex-start;
            padding: 24px;
          }
          .vault-btn {
            width: 100%;
          }
          .portfolio-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
