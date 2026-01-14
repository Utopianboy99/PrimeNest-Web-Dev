import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../../public/Logo.svg?url'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentPath = location.pathname

  const isHome = currentPath === '/'

  return (
    <nav className={`nav-block ${scrolled ? 'scrolled' : ''}`}>
      
      {/* LEFT LINKS */}
      <div className="nav-links">
        {!isHome && <Link to="/" className="nav-link">Home</Link>}
        {currentPath !== '/about' && <Link to="/about" className="nav-link">About</Link>}
        {currentPath !== '/templates' && <Link to="/templates" className="nav-link">Templates</Link>}
      </div>

      {/* LOGO */}
      <div className="nav-logo-container">
        <Link to="/">
          <img src={Logo} alt="PrimeNest Logo" className="nav-logo" />
        </Link>
        <span className="nav-brand">PrimeNest</span>
      </div>

      {/* RIGHT LINKS */}
      <div className="nav-links">
        {currentPath !== '/pricing-plans' && <Link to="/pricing-plans" className="nav-link">Pricing</Link>}
        {currentPath !== '/contact' && <Link to="/contact" className="nav-link">Contact</Link>}
      </div>

    </nav>
  )
}

export default Navbar
