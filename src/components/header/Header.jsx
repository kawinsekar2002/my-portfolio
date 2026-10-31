
import React, { useState } from 'react'
import './Header.scss'
import { Download } from 'lucide-react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // Scroll to the selected section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }

    // Close mobile menu after clicking
    setMenuOpen(false)
  }

  return (
    <header className="header">

      {/* Logo */}
      <div className="logo">
        <img src="/rk_logo_animation.gif" alt="RK Logo" />
      </div>

      <h1>Kawin R</h1>

      {/* Desktop Navigation */}
      <div className="nav-buttons">
        <button onClick={() => scrollToSection('home')}>
          Home
        </button>

        <button onClick={() => scrollToSection('skills')}>
          Skills
        </button>

        <button onClick={() => scrollToSection('projects')}>
          Projects
        </button>

        <button onClick={() => scrollToSection('experience')}>
          Experience
        </button>

        <button onClick={() => scrollToSection('contact')}>
          Contact
        </button>

        <button
          className="download-resume"
          onClick={() => {
            setMenuOpen(false)
            window.open('/resume.pdf', '_blank')
          }}
        >
          <Download size={22} />
          Download Resume
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Vertical Menu */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>

        <button onClick={() => scrollToSection('home')}>
          Home
        </button>

        <button onClick={() => scrollToSection('skills')}>
          Skills
        </button>

        <button onClick={() => scrollToSection('projects')}>
          Projects
        </button>

        <button onClick={() => scrollToSection('experience')}>
          Experience
        </button>

        <button onClick={() => scrollToSection('contact')}>
          Contact
        </button>

        <button
          className="download-resume"
          onClick={() => {
            setMenuOpen(false)
            window.open('/resume.pdf', '_blank')
          }}
        >
          <Download size={20} />
          Download Resume
        </button>

      </div>

    </header>
  )
}

export default Header
