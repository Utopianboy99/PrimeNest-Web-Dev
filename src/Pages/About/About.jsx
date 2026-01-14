import React from 'react'
import './About.css'
import aboutImg from '../../assets/about.png' // put any nice workspace image here

function About() {

  
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1>About PrimeNest Web Studio</h1>
        <p>
          We help small businesses build modern, high-converting, and professional websites that actually grow their brand.
        </p>
      </section>

      {/* IMAGE + TEXT */}
      <section className="about-intro">
        <div className="about-image">
          <img src={aboutImg} alt="Working together" />
        </div>
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            PrimeNest Web Studio is a South Africa-based web design studio focused on helping small businesses, startups,
            and entrepreneurs build a strong online presence.
          </p>
          <p>
            We don’t just make websites look good — we design them to convert visitors into customers.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div>
          <h3>20+</h3>
          <p>Projects Built</p>
        </div>
        <div>
          <h3>100%</h3>
          <p>Client Satisfaction</p>
        </div>
        <div>
          <h3>3+</h3>
          <p>Years Experience</p>
        </div>
        <div>
          <h3>24/7</h3>
          <p>Support</p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="about-values">
        <div>
          <h2>Our Vision</h2>
          <p>
            To become the go-to web studio for small businesses who want premium websites without insane prices.
          </p>
        </div>
        <div>
          <h2>Our Mission</h2>
          <p>
            To empower businesses with clean, fast, and modern websites that help them grow and look professional online.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="about-process">
        <h2>How We Work</h2>
        <div className="process-steps">
          <div className="step">01<br /><span>Discovery & Planning</span></div>
          <div className="step">02<br /><span>Design & Structure</span></div>
          <div className="step">03<br /><span>Development</span></div>
          <div className="step">04<br /><span>Launch & Support</span></div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Ready to build something powerful?</h2>
        <p><a href="/contact">Let’s work together →</a></p>
      </section>

    </main>
  )
}

export default About
