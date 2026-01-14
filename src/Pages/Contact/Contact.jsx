import React from 'react';
import Spline from '@splinetool/react-spline';
import './Contact.css';

function Contact() {
  return (
    <main className="contact-page">

      {/* HERO INTRO */}
      <section className="contact-hero">
        <h1>Let’s Build Something That Works For Your Business</h1>
        <p>
          Whether you need a new website, a redesign, or want to sell online — tell us about your project and we’ll guide you.
        </p>
      </section>

      {/* CONTACT METHODS */}
      <section className="contact-cards">
        <div className="contact-card">
          <h3>📧 Email</h3>
          <p>primenestwebstudio@gmail.com</p>
        </div>
        <div className="contact-card">
          <h3>📱 WhatsApp</h3>
          <p>+27 67 761 8360</p>
        </div>
        <div className="contact-card">
          <h3>📍 Location</h3>
          <p>South Africa</p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="contact-container">

        {/* FORM */}
        <div className="contact-form">
          <h2>Start Your Project</h2>
          <p>Tell us what you need and we’ll get back to you within 24 hours.</p>

          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Business Name (optional)" />
            <select required>
              <option value="">What do you need?</option>
              <option>New Website</option>
              <option>Redesign</option>
              <option>Online Store</option>
              <option>Other</option>
            </select>
            <textarea placeholder="Describe your project..." rows="5" required></textarea>
            <button type="submit" className='contact-button'>Send Message</button>
          </form>
        </div>

        {/* SPLINE */}
        <div className="contact-spline">
          <Spline scene="https://prod.spline.design/gb1aeMtjzUTFlWXj/scene.splinecode" />
        </div>

      </section>

      {/* HOW IT WORKS */}
      {/* <section className="contact-process">
        <h2>How It Works</h2>
        <div className="process-steps">
          <div className="step">1️⃣ You send your request</div>
          <div className="step">2️⃣ We discuss your needs</div>
          <div className="step">3️⃣ We design & build</div>
          <div className="step">4️⃣ You launch & grow</div>
        </div>
      </section> */}

      {/* TRUST MESSAGE */}
      {/* <section className="contact-trust">
        <h2>No Pressure. No Tech Jargon. Just Results.</h2>
        <p>
          We work with small businesses, churches, schools and startups. We guide you step-by-step and handle everything for you.
        </p>
      </section> */}

    </main>
  );
}

export default Contact;
