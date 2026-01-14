import React from 'react'
import './Templates.css'

function Templates() {
  const templates = [
    {
      id: 1,
      name: 'Salon & Beauty',
      description: 'Showcase your services with elegance. Perfect for salons, spas, and beauty studios.',
      image: 'salon',
      features: ['Service showcase', 'Booking system', 'Portfolio', 'Team profiles']
    },
    {
      id: 2,
      name: 'Creche & School',
      description: 'Build parent confidence with a professional online presence for your school.',
      image: 'school',
      features: ['Curriculum info', 'Gallery', 'Staff directory', 'Announcements']
    },
    {
      id: 3,
      name: 'Church & Non-Profit',
      description: 'Connect with your community online with a dedicated platform.',
      image: 'church',
      features: ['Events calendar', 'Sermons/Updates', 'Donation system', 'Community info']
    },
    {
      id: 4,
      name: 'Small Business',
      description: 'Everything you need to establish and grow your business online.',
      image: 'business',
      features: ['Service showcase', 'Portfolio', 'Blog/News', 'Contact forms']
    }
  ]

  return (
    <main className="templates-page">
      {/* Hero */}
      <section className="templates-hero">
        <div className="templates-hero-content">
          <h1>Website Templates</h1>
          <p>Choose the perfect template for your business and get started today</p>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="templates-showcase">
        <div className="templates-container">
          <div className="templates-grid">
            {templates.map((template) => (
              <div key={template.id} className="template-showcase-card">
                <div className={`template-showcase-image template-${template.image}`}></div>
                <div className="template-showcase-content">
                  <h3>{template.name}</h3>
                  <p className="template-description">{template.description}</p>
                  <div className="template-features">
                    {template.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">✓ {feature}</span>
                    ))}
                  </div>
                  <button className="btn btn-primary">View Demo</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="templates-cta">
        <div className="templates-cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Choose a template and let's build something amazing for your business</p>
          <button className="btn btn-primary btn-large">Start Your Project</button>
        </div>
      </section>
    </main>
  )
}

export default Templates
