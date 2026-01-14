import React from 'react'
import './PricePlans.css'

function PricePlans() {
  return (
    <main className="pricing-page">
      {/* Hero */}
      <section className="pricing-page-hero">
        <div className="pricing-hero-content">
          <h1>Website Pricing</h1>
          <p>No subscriptions. Pay once. Own your website forever.</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-page-section">
        <div className="pricing-page-container">
          <div className="pricing-page-grid">
            {/* Starter */}
            <div className="pricing-page-card">
              <div className="pricing-page-header">
                <h3>Starter Website</h3>
                <p className="pricing-page-subtitle">Perfect for getting started</p>
              </div>
              <div className="pricing-page-price">
                <span className="currency">R</span>
                <span className="amount">1,500</span>
              </div>
              <ul className="pricing-page-features">
                <li>1–3 pages</li>
                <li>Responsive design</li>
                <li>Contact form</li>
                <li>Basic SEO</li>
                <li>Mobile optimized</li>
              </ul>
              <button className="btn btn-secondary full-width">Choose Plan</button>
            </div>

            {/* Business - Popular */}
            <div className="pricing-page-card popular">
              <div className="popular-badge">Most Popular</div>
              <div className="pricing-page-header">
                <h3>Business Website</h3>
                <p className="pricing-page-subtitle">Best for growing businesses</p>
              </div>
              <div className="pricing-page-price">
                <span className="currency">R</span>
                <span className="amount">3,500</span>
              </div>
              <ul className="pricing-page-features">
                <li>5–7 pages</li>
                <li>Modern, custom UI</li>
                <li>Contact + WhatsApp integration</li>
                <li>Full SEO optimization</li>
                <li>Speed optimized</li>
                <li>Analytics setup</li>
              </ul>
              <button className="btn btn-primary full-width">Choose Plan</button>
            </div>

            {/* Custom */}
            <div className="pricing-page-card">
              <div className="pricing-page-header">
                <h3>Custom Website</h3>
                <p className="pricing-page-subtitle">For advanced requirements</p>
              </div>
              <div className="pricing-page-price">
                <span className="currency">From R</span>
                <span className="amount">6,000</span>
              </div>
              <ul className="pricing-page-features">
                <li>Unlimited pages</li>
                <li>Custom features</li>
                <li>Admin dashboard</li>
                <li>Payment processing</li>
                <li>Booking system</li>
                <li>Priority support</li>
              </ul>
              <button className="btn btn-secondary full-width">Let's Talk</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pricing-page-faq">
        <div className="pricing-page-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Do I own the website?</h4>
              <p>Yes! You own your website completely. We build it for you, and it's yours to keep forever.</p>
            </div>
            <div className="faq-item">
              <h4>Are there any hidden fees?</h4>
              <p>No. Our pricing is transparent and one-time. No subscriptions, no recurring charges.</p>
            </div>
            <div className="faq-item">
              <h4>Can I upgrade later?</h4>
              <p>Absolutely. If you start with a Starter Website and want more features, we can upgrade it.</p>
            </div>
            <div className="faq-item">
              <h4>What if I need custom features?</h4>
              <p>Our Custom Website package is perfect for that. We'll build exactly what you need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pricing-page-cta">
        <div className="pricing-cta-content">
          <h2>Ready to Get Your Website?</h2>
          <p>Choose a plan and start building your online presence today</p>
          <button className="btn btn-primary btn-large">Start Your Project</button>
        </div>
      </section>
    </main>
  )
}

export default PricePlans
