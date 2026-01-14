import React, { useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import './Home.css'

function Home() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <main>
                {/* Hero Section */}
                <section className="hero" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
                    <div className="hero-background">
                        <Spline
                            scene="https://prod.spline.design/jMy6W1oeXJsw8aCS/scene.splinecode"
                        />
                    </div>
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <h1 className="hero-title">Premium Websites for South African Businesses</h1>
                        <p className="hero-subtitle">
                            Professional web design and development by PrimeNest. We build beautiful, converting websites that elevate your brand.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn btn-primary" onClick={() => document.querySelector('.templates').scrollIntoView({ behavior: 'smooth' })}>
                                View Templates
                            </button>
                            <button className="btn btn-outline" onClick={() => document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' })}>
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="about">
                    <div className="about-wrapper">
                        <div className="about-content">
                            <div className="about-text">
                                <h2 className="section-title">Why Choose PrimeNest?</h2>
                                <p className="section-lead">
                                    We're not another DIY website builder. PrimeNest is a professional web studio that specializes in building high-converting websites for real businesses.
                                </p>
                                <div className="about-features">
                                    <div className="feature">
                                        <div className="feature-icon">✓</div>
                                        <div className="feature-text">
                                            <h3>Bespoke Design</h3>
                                            <p>Custom websites built to match your brand and goals</p>
                                        </div>
                                    </div>
                                    <div className="feature">
                                        <div className="feature-icon">✓</div>
                                        <div className="feature-text">
                                            <h3>Convert Visitors to Clients</h3>
                                            <p>Strategic design optimized for sales and lead generation</p>
                                        </div>
                                    </div>
                                    <div className="feature">
                                        <div className="feature-icon">✓</div>
                                        <div className="feature-text">
                                            <h3>SEO & Performance</h3>
                                            <p>Fast, secure websites optimized for search engines</p>
                                        </div>
                                    </div>
                                    <div className="feature">
                                        <div className="feature-icon">✓</div>
                                        <div className="feature-text">
                                            <h3>Full Ownership</h3>
                                            <p>Pay once, own your website forever</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="about-visual">
                                <div className="visual-placeholder">
                                    <div className="visual-gradient"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Templates Section */}
                <section className="templates">
                    <div className="templates-container">
                        <div className="section-header">
                            <h2 className="section-title">Website Templates</h2>
                            <p className="section-subtitle">Specialized solutions for different businesses</p>
                        </div>
                        <div className="templates-grid">
                            <div className="template-card">
                                <div className="template-image template-salon"></div>
                                <div className="template-content">
                                    <h3>Salon & Beauty</h3>
                                    <p>Showcase your services with elegance. Perfect for salons, spas, and beauty studios.</p>
                                    <button className="btn btn-tertiary">View Demo</button>
                                </div>
                            </div>
                            <div className="template-card">
                                <div className="template-image template-school"></div>
                                <div className="template-content">
                                    <h3>Creche & School</h3>
                                    <p>Build parent confidence with a professional online presence for your school.</p>
                                    <button className="btn btn-tertiary">View Demo</button>
                                </div>
                            </div>
                            <div className="template-card">
                                <div className="template-image template-church"></div>
                                <div className="template-content">
                                    <h3>Church & Non-Profit</h3>
                                    <p>Connect with your community online with a dedicated platform.</p>
                                    <button className="btn btn-tertiary">View Demo</button>
                                </div>
                            </div>
                            <div className="template-card">
                                <div className="template-image template-business"></div>
                                <div className="template-content">
                                    <h3>Small Business</h3>
                                    <p>Everything you need to establish and grow your business online.</p>
                                    <button className="btn btn-tertiary">View Demo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="pricing">
                    <div className="pricing-container">
                        <div className="section-header pricing-header">
                            <h2 className="section-title">Simple, Transparent Pricing</h2>
                            <p className="section-subtitle">No subscriptions. Pay once. Own your website forever.</p>
                        </div>
                        <div className="pricing-grid">
                            <div className="pricing-card">
                                <div className="pricing-header-card">
                                    <h3>Starter Website</h3>
                                    <p className="pricing-subtitle">Perfect for getting started</p>
                                </div>
                                <div className="pricing-price">
                                    <span className="currency">R</span>
                                    <span className="amount">1,500</span>
                                </div>
                                <ul className="pricing-features">
                                    <li>1–3 pages</li>
                                    <li>Responsive design</li>
                                    <li>Contact form</li>
                                    <li>Basic SEO</li>
                                    <li>Mobile optimized</li>
                                </ul>
                                <button className="btn btn-secondary full-width">Choose Plan</button>
                            </div>
                            <div className="pricing-card popular">
                                <div className="popular-badge">Most Popular</div>
                                <div className="pricing-header-card">
                                    <h3>Business Website</h3>
                                    <p className="pricing-subtitle">Best for growing businesses</p>
                                </div>
                                <div className="pricing-price">
                                    <span className="currency">R</span>
                                    <span className="amount">3,500</span>
                                </div>
                                <ul className="pricing-features">
                                    <li>5–7 pages</li>
                                    <li>Modern, custom UI</li>
                                    <li>Contact + WhatsApp integration</li>
                                    <li>Full SEO optimization</li>
                                    <li>Speed optimized</li>
                                    <li>Analytics setup</li>
                                </ul>
                                <button className="btn btn-primary full-width">Choose Plan</button>
                            </div>
                            <div className="pricing-card">
                                <div className="pricing-header-card">
                                    <h3>Custom Website</h3>
                                    <p className="pricing-subtitle">For advanced requirements</p>
                                </div>
                                <div className="pricing-price">
                                    <span className="currency">From R</span>
                                    <span className="amount">6,000</span>
                                </div>
                                <ul className="pricing-features">
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

                {/* Contact Section */}
                <section className="contact">
                    <div className="contact-container">
                        <div className="contact-content">
                            <div className="contact-form">
                                <form>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            placeholder="Your Phone (Optional)"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            placeholder="Tell us about your project..."
                                            rows="4"
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary full-width">
                                        Start Your Project
                                    </button>
                                </form>
                            </div>
                            <div className="contact-methods">
                                <h2 className="contact-title">Ready to Elevate Your Online Presence?</h2>
                                <p className="contact-subtitle">Let's create something amazing together</p>
                                {/* <p>Or reach out directly:</p>
                                <div className="contact-links">
                                    <a href="mailto:hello@primenest.com" className="contact-link">📧 hello@primenest.com</a>
                                    <a href="https://wa.me/27123456789" target="_blank" rel="noopener noreferrer" className="contact-link">📱 WhatsApp</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home