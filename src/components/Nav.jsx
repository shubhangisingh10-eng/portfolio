import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__name">
          Shubhangi Singh
        </Link>

        <div className="nav__center">
          <NavLink
            to="/"
            className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
            end
          >
            Works
          </NavLink>
          <a href="/#about" className="nav__link">About</a>
        </div>

        <div className="nav__right">
          <a href="/#contact" className="nav__link">Contact</a>
          <a
            href="https://www.linkedin.com/in/shubhangisingh10/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__link nav__link--external"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </nav>
  )
}
