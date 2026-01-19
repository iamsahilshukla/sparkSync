import { useCallback, useState, useEffect, useMemo } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  // ========================
  // STATE MANAGEMENT
  // ========================
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    

  const particleOptions = useMemo(
    () => ({
      particles: {
        number: { value: 60, density: { enable: true, value_area: 900 } },
        color: { value: "#00D9FF" },
        shape: { type: "circle" },
        opacity: { value: 0.25, random: true },
        size: { value: 3, random: true },
        move: { enable: true, speed: 1, random: true },
        links: { enable: false }
      },
      detectRetina: true
    }),
    []
  );

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

  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) setMobileMenuOpen(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleResize = () => {
      setParticleCount(getParticleCount())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {/* ================= HEADER ================= */}
      <header role="banner">
        <div className="header-content">
          <div className="logo">
            Spark<span>Sync</span>
          </div>

          <button
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={mobileMenuOpen ? 'nav-open' : ''}>
            <ul>
              <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
              <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
              <li><a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ================= HERO ================= */}
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
                  random: true,
                  outModes: 'out'
                }
              },
              detectRetina: true
            }}
          />

          <div className="hero-content">
            <div className="hero-tag">Tech + Marketing, Finally in Sync</div>
            <h1>
              Tech + Marketing,<br />
              Finally in <span>Sync</span>
            </h1>
            <p className="hero-description">
              We help growth-focused businesses build smart digital systems and run
              performance marketing that actually converts.
            </p>
            <div className="cta-group">
              <a href="#contact" className="btn btn-primary">
                Book a Free Strategy Call
              </a>
              <a href="#services" className="btn btn-secondary">
                Explore Services
              </a>
            </div>
          </div>
        </div>

      {/* About */}
      <section id="about">
        <div className="section-header">
          <div className="section-tag">About Spark Sync</div>
          <h2 className="section-title">Results, Not Jargon</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>Spark Sync is a hybrid tech and marketing agency built for business owners who want results, not jargon. From websites and automation to paid ads and content, the team designs end-to-end solutions that connect your technology, marketing, and sales into one smooth growth engine.</p>

            <h3 className="about-subtitle">Who We Work With</h3>
            <p><strong>Local and Service Businesses</strong> - Companies that want more high-quality leads, not just vanity traffic.</p>
            <p><strong>D2C and E-Commerce Brands</strong> - Growing brands looking to scale with better ads, better tracking, and better customer retention.</p>
            <p><strong>Agencies and Founders</strong> - Partners who need a reliable tech + marketing backend to serve their own clients faster and better.</p>
          </div>

          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">One Partner</div>
              <div className="stat-label">Both tech and marketing under one roof</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Data-Backed</div>
              <div className="stat-label">Tracked, reported, and optimized</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Founder-Level</div>
              <div className="stat-label">Strategy and deep involvement</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2-3x</div>
              <div className="stat-label">Qualified lead increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
       <section id="services" className="services-with-particles">
      {/* Particles Background */}
      <Particles
        id="services-particles"
        aria-hidden="true"
        init={particlesInit}
        options={particleOptions}
      />

      {/* Content */}
      <div className="services-content">
        <div className="section-header">
          <div className="section-tag">Services</div>
          <h1 className="section-title">
            Comprehensive Tech & Marketing Solutions for Your Business
          </h1>
        </div>

        <div className="services-grid">
          {/* Service Item */}
          <div className="service-card">
            <h3>Website Design & Development</h3>
            <p>
              Custom websites that load fast, rank high, and convert visitors.
              From landing pages to full sites, we use modern tech for startups
              and SMEs.
            </p>
            <ul>
              <li>Responsive designs for mobile-first India</li>
              <li>SEO-optimized from day one</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>E-commerce & Shopify Development</h3>
            <p>
              Launch your online store with Shopify expertise. We handle setup,
              payments, and scaling for e-commerce businesses.
            </p>
            <ul>
              <li>Secure, fast-loading stores</li>
              <li>Integration with Indian payment gateways</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Digital Marketing (Meta Ads, Google Ads, SEO)</h3>
            <p>
              Drive traffic and sales with targeted campaigns. As a top digital
              marketing agency, we optimize Meta Ads, Google Ads, and SEO for
              local brands.
            </p>
            <ul>
              <li>2x–5x ROAS on ad spends</li>
              <li>Keyword-rich strategies for “IT company in India” searches</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Branding & UI/UX Design</h3>
            <p>
              Stand out with memorable logos, branding kits, and user-friendly
              interfaces. Perfect for service-based companies.
            </p>
            <ul>
              <li>Modern, trustworthy designs</li>
              <li>User testing for higher engagement</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Performance Marketing</h3>
            <p>
              Data-driven campaigns that deliver measurable growth. Track every
              rupee spent.
            </p>
            <ul>
              <li>A/B testing and analytics dashboards</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>CRM, Automation & Tech Solutions</h3>
            <p>
              Streamline operations with custom CRM, email automation, and API
              integrations.
            </p>
            <ul>
              <li>Zapier and HubSpot setups</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Maintenance & Support</h3>
            <p>
              Ongoing updates, security, and 24/7 support to keep your business
              running smoothly.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="services-cta">
          <a href="#contact" className="btn btn-primary">
            Choose Your Service – Get Started Now
          </a>
        </div>
      </div>
    </section>

            {/* Why Choose Us */}
<section id="why-us">
  <div className="section-header">
    <div className="section-tag">Why Choose Us</div>
    <h2 className="section-title">
      Why SparkSync Technologies is Your Best Tech Partner
    </h2>
    <p className="section-description">
      As a leading website development company and digital marketing agency in
      India, SparkSync delivers trust, clarity, and measurable results.
    </p>
  </div>

  {/* Comparison Table */}
  <div className="comparison-table">
    <div className="comparison-row header">
      <div>Feature</div>
      <div>SparkSync Advantage</div>
      <div>Others</div>
    </div>

    <div className="comparison-row">
      <div>Full-Stack Solutions</div>
      <div>IT + Marketing in one package</div>
      <div>Separate agencies</div>
    </div>

    <div className="comparison-row">
      <div>India-Focused</div>
      <div>Local payments, Hindi support</div>
      <div>Generic global templates</div>
    </div>

    <div className="comparison-row">
      <div>Transparent Pricing</div>
      <div>No hidden fees, fixed quotes</div>
      <div>Hourly surprises</div>
    </div>

    <div className="comparison-row">
      <div>Fast Turnaround</div>
      <div>Projects in 7–30 days</div>
      <div>2–3 month delays</div>
    </div>

    <div className="comparison-row">
      <div>ROI Guarantee</div>
      <div>Performance tracked or refined</div>
      <div>Promises without proof</div>
    </div>
  </div>

  {/* Trust Points */}
  <div className="trust-points">
    <ul>
      <li>100% uptime on websites</li>
      <li>Dedicated account manager for every client</li>
    </ul>
  </div>

  {/* CTA */}
  <div className="center-cta">
    <a href="#contact" className="btn btn-primary">
      See Why Brands Trust Us – Book a Demo
    </a>
  </div>
</section>
{/* Process Intro */}
<div className="section-intro">
  <div className='head'>
    <h2 className="section-title">
      How We Work – Simple, Proven Steps for Success
    </h2>
  </div>
  <p>
    SparkSync follows a clear 5-step process to ensure every project succeeds
    with speed, transparency, and measurable outcomes.
  </p>

  <ol className="process-steps">
    <li><strong>Discovery Call:</strong> Understand your goals and challenges</li>
    <li><strong>Strategy & Design:</strong> Custom plan with wireframes and mockups</li>
    <li><strong>Development & Testing:</strong> Build, integrate, and optimize</li>
    <li><strong>Launch & Train:</strong> Go live with full handover</li>
    <li><strong>Support & Scale:</strong> Monitor, maintain, and grow</li>
  </ol>

  <p className="process-timeline">
    <strong>Timeline:</strong> Most projects complete in 2–4 weeks
  </p>

  <div className="center-cta">
    <a href="#contact" className="btn btn-secondary">
      Start Step 1 – Free Strategy Session
    </a>
  </div>
</div>


      {/* Process */}
      <section id="process">
        <div className="phase-header">
          <div className="section-tag">How It Works</div>
          <h2 className="section-title">90-Day Launch Roadmap</h2>
          <p className="section-description">A proven process to take you from strategy to scaling.</p>
        </div>

        <div className="section-intro">
          <p>
            We believe the best way to grow your business is through a structured, transparent roadmap. This is why we built our 90-Day Launch Roadmap—a process that takes you from initial discovery to live campaigns and optimization in just 90 days.
          </p>
        </div>

        <div className="process-phases">
          {/* Phase 1: Discovery */}
          <div className="process-phase">
            <div className="phase-header">
              <div className="phase-number">Phase 1</div>
              <h3>Discovery</h3>
              <p className="phase-subtitle">30-Minute Strategy Consultation</p>
            </div>

            <div className="phase-content">
              <div className="phase-section">
                <h4>What Happens:</h4>
                <p>We start by understanding your business deeply. This isn't a generic pitch—it's a real conversation about your model, your customers, your sales process, and your goals.</p>
                <p>We'll audit your current funnel (website, ads, CRM, tracking, follow-ups) and identify:</p>
                <ul>
                  <li>Your 3 biggest bottlenecks</li>
                  <li>Your 3 quickest wins</li>
                  <li>The exact roadmap to fix them</li>
                </ul>
              </div>

              <div className="phase-section">
                <h4>Deliverables:</h4>
                <ul>
                  <li>Comprehensive growth strategy document (10+ pages)</li>
                  <li>Custom 90-day roadmap with exact milestones</li>
                  <li>Success metrics and tracking framework</li>
                  <li>Investment and timeline proposal</li>
                </ul>
              </div>

              <div className="phase-meta">
                <div className="phase-timeline">
                  <strong>Timeline:</strong> 1 week
                </div>
                <div className="phase-outcome">
                  <strong>Outcome:</strong> You walk away with a clear, data-backed plan—not vague promises.
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2: Build */}
          <div className="process-phase">
            <div className="phase-header">
              <div className="phase-number">Phase 2</div>
              <h3>Build</h3>
              <p className="phase-subtitle">Technical Foundation + Campaign Setup</p>
            </div>

            <div className="phase-content">
              <div className="phase-section">
                <h4>What Happens:</h4>
                <p>With strategy locked in, we build your entire tech foundation and prep your first campaigns.</p>
                <p>This includes:</p>
                <ul>
                  <li>Design and development of your high-converting website or landing pages</li>
                  <li>CRM setup and sales pipeline configuration</li>
                  <li>Analytics and tracking implementation</li>
                  <li>Initial ad creative development and audience research</li>
                </ul>
                <p>Everything is wired together so your tech actually supports your marketing—not works against it.</p>
              </div>

              <div className="phase-section">
                <h4>Deliverables:</h4>
                <ul>
                  <li>Fully functional, tracked website or landing pages</li>
                  <li>CRM and automation workflows live and tested</li>
                  <li>Custom analytics dashboard ready to monitor</li>
                  <li>5–10 campaign creatives and audience segments prepared</li>
                  <li>Email/WhatsApp sequence templates created</li>
                </ul>
              </div>

              <div className="phase-meta">
                <div className="phase-timeline">
                  <strong>Timeline:</strong> 4 weeks
                </div>
                <div className="phase-outcome">
                  <strong>Outcome:</strong> Your entire system is built, tested, and ready to launch.
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3: Launch */}
          <div className="process-phase">
            <div className="phase-header">
              <div className="phase-number">Phase 3</div>
              <h3>Launch</h3>
              <p className="phase-subtitle">Live Campaigns + Initial Optimization</p>
            </div>

            <div className="phase-content">
              <div className="phase-section">
                <h4>What Happens:</h4>
                <p>This is where your business starts to see real results. We launch your paid campaigns with proper tracking, activate your automation sequences, and monitor performance daily.</p>
                <p>During this phase:</p>
                <ul>
                  <li>Ad campaigns go live on Meta, Google, or both</li>
                  <li>Email and WhatsApp automations activate</li>
                  <li>First leads start flowing through your system</li>
                  <li>Daily monitoring and weekly optimization begins</li>
                  <li>You receive weekly performance reports</li>
                </ul>
                <p>We're actively watching, testing, and adjusting to make sure every rupee is working hard for you.</p>
              </div>

              <div className="phase-section">
                <h4>Deliverables:</h4>
                <ul>
                  <li>Live, optimized ad campaigns generating traffic</li>
                  <li>Automation sequences actively nurturing leads</li>
                  <li>Weekly performance reports and insights</li>
                  <li>First batch of qualified leads in your CRM</li>
                  <li>Initial optimization recommendations</li>
                </ul>
              </div>

              <div className="phase-meta">
                <div className="phase-timeline">
                  <strong>Timeline:</strong> 4 weeks
                </div>
                <div className="phase-outcome">
                  <strong>Outcome:</strong> You're live, leads are coming in, and you have proof the system works.
                </div>
              </div>
            </div>
          </div>

          {/* Phase 4: Scale */}
          <div className="process-phase">
            <div className="phase-header">
              <div className="phase-number">Phase 4</div>
              <h3>Scale</h3>
              <p className="phase-subtitle">Continuous Optimization + Growth Strategy</p>
            </div>

            <div className="phase-content">
              <div className="phase-section">
                <h4>What Happens:</h4>
                <p>After 30 days of live data, we analyze everything and shift into growth mode.</p>
                <p>We'll:</p>
                <ul>
                  <li>Scale campaigns that are working</li>
                  <li>Test new audiences, creatives, and offers</li>
                  <li>Run A/B tests on landing pages, emails, and ad copy</li>
                  <li>Plug any funnels leaks we find</li>
                  <li>Plan the next 90 days of growth experiments</li>
                </ul>
                <p>This phase continues ongoing—growth isn't a destination, it's a process.</p>
              </div>

              <div className="phase-section">
                <h4>Deliverables:</h4>
                <ul>
                  <li>Full 30-day performance analysis</li>
                  <li>Optimized campaigns with lower CAC and higher conversion rates</li>
                  <li>New growth experiments running</li>
                  <li>Scale recommendations for next 90 days</li>
                  <li>Monthly retainer proposal (if you want ongoing support)</li>
                </ul>
              </div>

              <div className="phase-meta">
                <div className="phase-timeline">
                  <strong>Timeline:</strong> Ongoing
                </div>
                <div className="phase-outcome">
                  <strong>Outcome:</strong> Your campaigns are efficient, your funnel is optimized, and you have a clear plan to keep growing.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Roadmap Works */}
        <div className="section-highlight">
          <h3>Why This Roadmap Works</h3>

          <div className="roadmap-benefits">
            <div className="benefit-item">
              <h4>Clear Milestones</h4>
              <p>You see progress every week. Not vague promises of "we're working on it"—actual deliverables, reports, and moving pieces.</p>
            </div>
            <div className="benefit-item">
              <h4>Fixed Timeline</h4>
              <p>From strategy to live campaigns in 90 days. This keeps everyone accountable and focused.</p>
            </div>
            <div className="benefit-item">
              <h4>Full Ownership</h4>
              <p>One team owns your entire funnel. No coordination issues, no finger-pointing between vendors.</p>
            </div>
            <div className="benefit-item">
              <h4>Data-Backed at Every Step</h4>
              <p>Every decision is rooted in your specific situation, market, and goals—not generic templates.</p>
            </div>
            <div className="benefit-item">
              <h4>Risk-Free to Start</h4>
              <p>Discovery and strategy are low-cost. You only move to Build if you're fully aligned and confident.</p>
            </div>
          </div>
        </div>

        {/* The Spark Sync Difference */}
        <div className="section-highlight" style={{background: 'rgba(0, 217, 255, 0.05)', padding: '60px 40px'}}>
          <h3>The Spark Sync Difference</h3>

          <div className="difference-grid">
            <div className="difference-item">
              <h4>We Don't Hand Off Work to Juniors</h4>
              <p>Your account is handled by experienced strategists and builders who understand ROI and can make quick decisions.</p>
            </div>
            <div className="difference-item">
              <h4>Everything Is Tracked</h4>
              <p>From first click to sale, every action is measured and reported. You always know what's working.</p>
            </div>
            <div className="difference-item">
              <h4>We Move Fast</h4>
              <p>Because everything is integrated, we can launch and optimize faster than working with multiple vendors.</p>
            </div>
            <div className="difference-item">
              <h4>You're in Control</h4>
              <p>Weekly reports, clear communication, and transparent decisions. You always know what's happening and why.</p>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="section-highlight">
          <h3>What's Included in Each Phase</h3>

          <div className="included-grid">
            <div className="included-phase">
              <h4>Discovery (Week 1)</h4>
              <ul>
                <li>Strategy consultation and funnel audit</li>
                <li>Competitive analysis</li>
                <li>Opportunity identification</li>
                <li>Custom roadmap and proposal</li>
              </ul>
            </div>
            <div className="included-phase">
              <h4>Build (Weeks 2-5)</h4>
              <ul>
                <li>Website/landing page development</li>
                <li>CRM and automation setup</li>
                <li>Analytics and tracking implementation</li>
                <li>Creative and copy development</li>
              </ul>
            </div>
            <div className="included-phase">
              <h4>Launch (Weeks 6-9)</h4>
              <ul>
                <li>Campaign deployment</li>
                <li>Automation activation</li>
                <li>Daily monitoring and optimization</li>
                <li>Weekly performance reports</li>
              </ul>
            </div>
            <div className="included-phase">
              <h4>Scale (Week 10+)</h4>
              <ul>
                <li>Performance analysis</li>
                <li>Growth experiments</li>
                <li>Funnel optimization</li>
                <li>Ongoing support (optional retainer)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
       <section id="contact">
          <div className="contact-content">
            <div className="section-header">
              <div className="section-tag">Ready to Sync Your Tech and Marketing?</div>
              <h2 className="section-title">Let's Talk Growth</h2>
              <p className="section-description">
                Book a free 30-minute strategy session to audit your funnel.
              </p>
            </div>

            <div className="contact-cta-button">
              <a
                href="https://wa.me/919559133317"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get My Free Strategy Call
              </a>
            </div>

            <div className="contact-methods">
              <div className="contact-method">
                <h3>Email</h3>
                <a href="mailto:hello@sparksync.com">
                  hello@sparksync.com
                </a>
              </div>

              <div className="contact-method">
                <h3>WhatsApp</h3>
                <a
                  href="https://wa.me/919559133317"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with us on WhatsApp
                </a>
              </div>

              <div className="contact-method">
                <h3>Location</h3>
                <p>Noida, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FOOTER (LEGAL UPDATED) ================= */}
        <footer role="contentinfo" className="footer-bar">
          <div className="footer-links">
            <Link className="foot-link" to="/privacy-policy">Privacy Policy</Link>
            <Link className="foot-link" to="/terms-and-conditions">Terms & Conditions</Link>
            <Link className="foot-link" to="/cookie-policy">Cookie Policy</Link>
            <Link className="foot-link" to="/refund-policy">Refund & Cancellation</Link>
            <Link className="foot-link" to="/disclaimer">Disclaimer</Link>
          </div>

          <div className="footer-meta">
            <p>
              © 2026 <strong>SparkSync Technologies (SparkSyncs)</strong>. All rights reserved.
            </p>
            <p className="footer-tagline">
              Serving Local, National & International Clients
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App