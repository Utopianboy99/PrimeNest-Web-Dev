import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <h3>PrimeNest</h3>
            </div>
            <p className="footer-tagline">Premium web design for South African businesses</p>
          </div>

          {/* Links Section */}
          <div className="footer-section footer-links">
            <div className="footer-col">
              <h4>Company</h4>
              <nav className="footer-nav">
                <a href="#about">About</a>
                <a href="#templates">Templates</a>
                <a href="#pricing">Pricing</a>
              </nav>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <nav className="footer-nav">
                <a href="#contact">Contact</a>
                <a href="#contact">Get Started</a>
                <a href="#templates">View Templates</a>
              </nav>
            </div>

            <div className="footer-col">
              <h4>Connect</h4>
              <nav className="footer-nav">
                <a href="mailto:hello@primenest.com">Email</a>
                <a href="https://wa.me/27123456789" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a href="#contact">Contact Form</a>
              </nav>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} PrimeNest Web Studio. All rights reserved.
          </p>
          <div className="footer-credits">
            <a href="#privacy">Privacy Policy</a>
            <span className="divider">•</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
