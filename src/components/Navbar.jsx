import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#work' },
    { name: 'SERVICES', href: '#services' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, '#hero')}>
          <span className="logo-text">SRIHARAN M.</span>
          <span className="logo-badge">PRO</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTA */}
        <div className="nav-actions">
          <a
            href="#contact"
            className="btn-primary nav-cta"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>LET'S WORK</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary mobile-cta"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>LET'S WORK</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          z-index: 1000;
          transition: background-color var(--transition-normal), border-color var(--transition-normal), backdrop-filter var(--transition-normal);
          border-bottom: 1px solid transparent;
        }

        .navbar.scrolled {
          background-color: var(--bg-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom-color: var(--border-color);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: 0.12em;
          color: var(--text-primary);

        }

        .logo-text {
          background: linear-gradient(135deg, #ffffff 60%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .logo-badge {
          font-size: 0.65rem;
          padding: 2px 6px;
          background: var(--accent-muted);
          color: var(--accent);
          border: 1px solid var(--accent-glow);
          border-radius: 4px;
          letter-spacing: 0.1em;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          position: relative;
          padding: 6px 0;
          transition: color var(--transition-fast);
        }

        .nav-link:hover, .nav-link.active {
          color: var(--text-primary);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--accent);
          border-radius: 2px;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .nav-cta {
          padding: 10px 20px;
          font-size: 0.75rem;
        }

        .mobile-toggle {
          display: none;
          color: var(--text-primary);
          padding: 8px;
        }

        .mobile-menu {
          position: fixed;
          top: var(--header-height);
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(8, 8, 8, 0.98);
          backdrop-filter: blur(20px);
          z-index: 999;
          display: flex;
          flex-direction: column;
          padding: 40px 24px;
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--transition-normal);
        }

        .mobile-menu.open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-menu-inner {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 20px;
        }

        .mobile-nav-link {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: var(--accent);
        }

        .mobile-cta {
          margin-top: 20px;
          width: 100%;
        }

        @media (max-width: 900px) {
          .desktop-nav, .nav-cta {
            display: none;
          }
          .mobile-toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
