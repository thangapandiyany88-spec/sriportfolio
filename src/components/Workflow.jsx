import React from 'react';

export default function Workflow() {
  const steps = [
    {
      num: '01',
      title: 'UNDERSTAND',
      desc: "Understand the client's vision, requirements and purpose."
    },
    {
      num: '02',
      title: 'PLAN',
      desc: 'Plan the visual style, footage, music and editing direction.'
    },
    {
      num: '03',
      title: 'EDIT',
      desc: 'Transform raw footage using pacing, music synchronization, transitions, colour grading and storytelling.'
    },
    {
      num: '04',
      title: 'DELIVER',
      desc: 'Deliver a polished, high-quality final video based on the agreed requirements.'
    }
  ];

  return (
    <section className="section workflow-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">WORKFLOW</span>
          <h2 className="section-title">
            THE PRODUCTION <span className="gold-text">PROCESS</span>
          </h2>
          <p className="section-subtitle">
            A structured 4-step editing timeline ensuring high precision from concept to final export.
          </p>
        </div>

        <div className="timeline-grid">
          {steps.map((step, idx) => (
            <div key={step.num} className="timeline-card card-glow">
              <div className="timeline-step-header">
                <span className="timeline-num">{step.num}</span>
                {idx < steps.length - 1 && <div className="timeline-line" />}
              </div>
              <h3 className="timeline-title">{step.title}</h3>
              <p className="timeline-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .workflow-section {
          background-color: var(--bg-main);
          border-top: 1px solid var(--border-color);
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .timeline-card {
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .timeline-step-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .timeline-num {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--accent);
        }

        .timeline-line {
          height: 2px;
          flex-grow: 1;
          margin-left: 16px;
          background: linear-gradient(to right, var(--accent), transparent);
        }

        .timeline-title {
          font-size: 1.1rem;
          margin-bottom: 10px;
          letter-spacing: 0.08em;
        }

        .timeline-desc {
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        @media (max-width: 992px) {
          .timeline-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .timeline-line {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .timeline-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
