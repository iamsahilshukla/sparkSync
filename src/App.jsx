import { useCallback, useState, useEffect } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Get particle count based on viewport width
  const getParticleCount = () => {
    const width = window.innerWidth
    if (width < 480) return 30
    if (width < 768) return 50
    if (width < 1024) return 70
    return 100
  }

  const [particleCount, setParticleCount] = useState(getParticleCount())

  const particlesInit = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) setMobileMenuOpen(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileMenuOpen])

  // Update particle count on resize
  useEffect(() => {
    const handleResize = () => {
      setParticleCount(getParticleCount())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {/* Header */}
      <header role="banner">
        <div className="header-content">
          <div className="logo">spark<span>Sync</span></div>

          <button
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={mobileMenuOpen ? 'nav-open' : ''}>
            <ul>
              <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
              <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
              <li><a href="#packages" onClick={() => setMobileMenuOpen(false)}>Packages</a></li>
              <li><a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Hero */}
      <main role="main" id="main-content">
      <div className="hero" id="home">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            particles: {
              number: { value: particleCount, density: { enable: true, value_area: 800 } },
              color: { value: '#00D9FF' },
              shape: { type: 'circle' },
              opacity: { value: 0.3, random: true },
              size: { value: 3, random: true },
              links: { enable: false },
              move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                outModes: 'out',
                attract: { enable: true, rotateX: 300, rotateY: 1200 }
              }
            },
            interactivity: {
              detectsOn: 'canvas',
              events: {
                onHover: { enable: window.innerWidth >= 768, mode: 'grab' },
                onClick: { enable: window.innerWidth >= 768, mode: 'push' },
                resize: true
              },
              modes: {
                grab: { distance: 140, links: { opacity: 0.5 } },
                push: { quantity: window.innerWidth >= 768 ? 4 : 2 }
              }
            },
            detectRetina: true
          }}
        />
        <div className="hero-content">
          <div className="hero-tag">Digital Marketing & Technology</div>
          <h1>Where Marketing<br />Meets <span>Technology</span></h1>
          <p className="hero-description">End-to-end digital solutions for Shopify stores and growing businesses. We combine cutting-edge tech with proven marketing strategies to scale your online presence.</p>
          <div className="cta-group">
            <a href="#contact" className="btn btn-primary">Schedule a Call</a>
            <a href="#services" className="btn btn-secondary">Explore Services</a>
          </div>
        </div>
      </div>

      {/* About */}
      <section id="about">
        <div className="section-header">
          <div className="section-tag">Who We Are</div>
          <h2 className="section-title">Built for Shopify Stores & Business Owners</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h3>For Shopify Store Owners</h3>
            <p>Already running a store or planning to launch one? We handle everything from store optimization and product listings to driving traffic and increasing conversions. Low traffic, high cart abandonment, and inventory chaos? We fix that.</p>

            <h3>For New Business Setups</h3>
            <p>Starting from zero? We build your complete digital presence from the ground up—website, marketing strategy, AI automation, and ongoing support. No technical knowledge needed. Just bring your vision, we'll handle the execution.</p>
          </div>

          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3-6x</div>
              <div className="stat-label">Average ROI</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services">
        <div className="section-header">
          <div className="section-tag">What We Do</div>
          <h2 className="section-title">Complete Digital Solutions</h2>
          <p className="section-description">From website development to AI automation, we provide everything you need to grow your online business.</p>
        </div>

        <div className="services-container">
          <div className="service-row">
            <div className="service-item">
              <div className="service-number">01</div>
              <h3>Shopify Development</h3>
              <p>Custom store setup, theme customization, product optimization, and payment integration.</p>
              <ul className="service-features">
                <li>Store setup & migration</li>
                <li>Custom theme design</li>
                <li>Payment gateway integration</li>
                <li>Inventory management</li>
              </ul>
              <div className="service-price">From ₹25,000</div>
            </div>

            <div className="service-item">
              <div className="service-number">02</div>
              <h3>Website Development</h3>
              <p>Professional WordPress and Webflow sites with booking systems and lead capture.</p>
              <ul className="service-features">
                <li>5-15 page websites</li>
                <li>Mobile responsive</li>
                <li>SEO optimized</li>
                <li>Booking & forms</li>
              </ul>
              <div className="service-price">From ₹15,000</div>
            </div>

            <div className="service-item">
              <div className="service-number">03</div>
              <h3>SEO Services</h3>
              <p>Keyword research, on-page optimization, technical SEO, and backlink strategy.</p>
              <ul className="service-features">
                <li>Keyword research</li>
                <li>Technical SEO audit</li>
                <li>On-page optimization</li>
                <li>Monthly reporting</li>
              </ul>
              <div className="service-price">From ₹8,000/mo</div>
            </div>
          </div>

          <div className="service-row">
            <div className="service-item">
              <div className="service-number">04</div>
              <h3>Paid Advertising</h3>
              <p>Google Ads, Meta Ads, campaign management, and conversion tracking.</p>
              <ul className="service-features">
                <li>Google Search & Shopping</li>
                <li>Facebook & Instagram ads</li>
                <li>A/B testing</li>
                <li>Conversion tracking</li>
              </ul>
              <div className="service-price">15-20% of ad spend</div>
            </div>

            <div className="service-item">
              <div className="service-number">05</div>
              <h3>AI Automation</h3>
              <p>WhatsApp bots, website chatbots, Instagram DM automation, and CRM integration.</p>
              <ul className="service-features">
                <li>WhatsApp Business API</li>
                <li>24/7 website chatbots</li>
                <li>Instagram automation</li>
                <li>Lead qualification</li>
              </ul>
              <div className="service-price">From ₹5,000</div>
            </div>

            <div className="service-item">
              <div className="service-number">06</div>
              <h3>Tech Support</h3>
              <p>Monthly maintenance, security monitoring, performance optimization, and updates.</p>
              <ul className="service-features">
                <li>Website maintenance</li>
                <li>Security monitoring</li>
                <li>Speed optimization</li>
                <li>Plugin updates</li>
              </ul>
              <div className="service-price">From ₹5,000/mo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages">
        <div className="section-header">
          <div className="section-tag">Pricing</div>
          <h2 className="section-title">Choose Your Growth Plan</h2>
          <p className="section-description">Transparent pricing for businesses at every stage.</p>
        </div>

        <div className="packages-grid">
          <div className="package">
            <div className="package-name">Shopify Starter</div>
            <div className="package-price">₹40K</div>
            <div className="package-period">One-time + ₹8K/month retainer</div>
            <ul className="package-features">
              <li>Shopify store setup (20 products)</li>
              <li>Payment & shipping integration</li>
              <li>Basic SEO optimization</li>
              <li>WhatsApp bot setup</li>
              <li>Google Ads campaign setup</li>
              <li>Email & social media support</li>
            </ul>
            <a href="#contact" className="btn btn-secondary" style={{width: '100%', textAlign: 'center'}}>Get Started</a>
          </div>

          <div className="package featured">
            <div className="package-badge">Popular</div>
            <div className="package-name">Shopify Growth</div>
            <div className="package-price">₹98K</div>
            <div className="package-period">One-time + ₹15K/month retainer</div>
            <ul className="package-features">
              <li>Custom theme (100+ products)</li>
              <li>CRM & email integration</li>
              <li>Advanced SEO + speed optimization</li>
              <li>Website + WhatsApp AI chatbots</li>
              <li>Google & Meta Ads setup</li>
              <li>Full marketing management</li>
              <li>Priority support</li>
            </ul>
            <a href="#contact" className="btn btn-primary" style={{width: '100%', textAlign: 'center'}}>Get Started</a>
          </div>

          <div className="package">
            <div className="package-name">Business Setup</div>
            <div className="package-price">₹49K</div>
            <div className="package-period">One-time + ₹10K/month retainer</div>
            <ul className="package-features">
              <li>8-10 page professional website</li>
              <li>Basic branding (logo + guidelines)</li>
              <li>Google Business Profile setup</li>
              <li>WhatsApp bot (lead capture)</li>
              <li>Local Google Ads setup</li>
              <li>Social media management</li>
            </ul>
            <a href="#contact" className="btn btn-secondary" style={{width: '100%', textAlign: 'center'}}>Get Started</a>
          </div>

          <div className="package">
            <div className="package-name">Premium Full-Stack</div>
            <div className="package-price">₹160K</div>
            <div className="package-period">One-time + ₹30K/month retainer</div>
            <ul className="package-features">
              <li>Custom website/Shopify build</li>
              <li>Full CRM + 30 automation workflows</li>
              <li>AI chatbots (3 channels)</li>
              <li>Comprehensive SEO strategy</li>
              <li>90-day content calendar</li>
              <li>Google & Meta Ads optimization</li>
              <li>Dedicated account manager</li>
            </ul>
            <a href="#contact" className="btn btn-secondary" style={{width: '100%', textAlign: 'center'}}>Get Started</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process">
        <div className="section-header">
          <div className="section-tag">How It Works</div>
          <h2 className="section-title">90-Day Launch Roadmap</h2>
          <p className="section-description">A proven process to take you from setup to scaling.</p>
        </div>

        <div className="process-grid">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Discovery</h3>
            <p>30-minute consultation to understand your business, goals, and budget. We create a customized proposal.</p>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Foundation</h3>
            <p>Build your website or Shopify store, set up payment gateways, implement SEO, and configure analytics.</p>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Launch</h3>
            <p>Launch ads, activate chatbots, start email sequences, and create content calendars. Weekly reporting begins.</p>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Scale</h3>
            <p>Continuous optimization, A/B testing, conversion improvements, and monthly strategy reviews.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="contact-content">
          <div className="section-header">
            <div className="section-tag">Get In Touch</div>
            <h2 className="section-title">Ready to Grow?</h2>
            <p className="section-description">Schedule a free 30-minute discovery call to discuss your project.</p>
          </div>

          <a href="#contact" className="btn btn-primary">Schedule Discovery Call</a>

          <div className="contact-methods">
            <div className="contact-method">
              <h3>Email</h3>
              <a href="mailto:hello@sparksync.com">hello@sparksync.com</a>
            </div>

            <div className="contact-method">
              <h3>WhatsApp</h3>
              <a href="https://wa.me/919559133317?text=Hello%20I%20have%20a%20question" target="_blank">
                Chat with us on WhatsApp
              </a>
            </div>

            <div className="contact-method">
              <h3>Location</h3>
              <p>Gurugram, Haryana, India</p>
            </div>
          </div>

          <div className="metrics-box">
            <h3>Success Metrics We Track</h3>
            <div className="metrics-grid">
              <div className="metric">
                <h4>E-Commerce</h4>
                <p>Conversion rate, average order value, ROAS, customer acquisition cost, lifetime value</p>
              </div>
              <div className="metric">
                <h4>Service Business</h4>
                <p>Lead generation, cost per lead, conversion rates, search rankings, phone inquiries</p>
              </div>
              <div className="metric">
                <h4>Reporting</h4>
                <p>Monthly performance reports, ROI summaries, optimization recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer role="contentinfo">
        <p>&copy; 2026 sparkSync. All rights reserved.</p>
        <p style={{marginTop: '10px'}}>Serving Local, National & International Clients</p>
      </footer>
      </main>
    </>
  )
}

export default App
