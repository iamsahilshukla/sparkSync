import { useCallback, useState, useEffect } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  // ========================
  // STATE MANAGEMENT
  // ========================
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
              {/* <li><a href="#packages" onClick={() => setMobileMenuOpen(false)}>Packages</a></li> */}
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
          <div className="hero-tag">Tech + Marketing, Finally in Sync</div>
          <h1>Tech + Marketing,<br />Finally in <span>Sync</span></h1>
          <p className="hero-description">We help growth-focused businesses build smart digital systems and run performance marketing that actually converts, so you can focus on running your business.</p>
          <div className="cta-group">
            <a href="#contact" className="btn btn-primary">Book a Free Strategy Call</a>
            <a href="#services" className="btn btn-secondary">Explore Services</a>
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
      <section id="services">
        <div className="section-header">
          <div className="section-tag">Spark Sync Services</div>
          <h2 className="section-title">Complete Tech and Marketing Solutions</h2>
          <p className="section-description">Complete tech and marketing solutions to grow your business faster.</p>
        </div>

        <div className="services-container">
          {/* Tech Services Grid */}
          <div className="service-category">
            <h3 className="category-title">Tech Services</h3>
            <div className="service-boxes">
              <div className="service-box">
                <div className="service-box-header">
                  <h4>Website and Landing Pages</h4>
                  <p className="service-box-desc">High-converting websites and landing pages that turn visitors into leads and customers.</p>
                </div>
                <div className="service-box-content">
                  <p>Pages are mobile-first, fast, and structured for performance campaigns, with clear CTAs, tracking, and forms connected to your CRM.</p>
                  <h5>What's included:</h5>
                  <ul>
                    <li>Custom site design and development</li>
                    <li>Mobile-responsive layouts</li>
                    <li>SEO fundamentals and fast load times</li>
                    <li>Lead capture forms and tracking pixels</li>
                    <li>Integration with your CRM and email tools</li>
                  </ul>
                </div>
              </div>

              <div className="service-box">
                <div className="service-box-header">
                  <h4>CRM and Sales Pipeline Setup</h4>
                  <p className="service-box-desc">CRM systems so every lead is captured, tracked, and followed up on automatically.</p>
                </div>
                <div className="service-box-content">
                  <p>Sales pipelines, lead stages, reminders, and integrations are configured to match how your business actually sells. No lead falls through the cracks.</p>
                  <h5>What's included:</h5>
                  <ul>
                    <li>CRM platform selection and setup (HubSpot, Pipedrive, custom)</li>
                    <li>Sales pipeline design based on your process</li>
                    <li>Lead scoring and automated follow-ups</li>
                    <li>Team access and permissions management</li>
                    <li>Integration with email, SMS, and WhatsApp</li>
                  </ul>
                </div>
              </div>

              <div className="service-box">
                <div className="service-box-header">
                  <h4>Automation and Integrations</h4>
                  <p className="service-box-desc">Connect your tools so your business runs on autopilot where it matters most.</p>
                </div>
                <div className="service-box-content">
                  <p>WhatsApp, email, forms, payment gateways, and ad platforms are integrated to reduce manual work and ensure every lead gets timely communication.</p>
                  <h5>What's included:</h5>
                  <ul>
                    <li>Tool integration and API setup</li>
                    <li>Workflow automation (leads → email → WhatsApp → CRM)</li>
                    <li>Payment gateway integration</li>
                    <li>Data synchronization across platforms</li>
                    <li>Custom triggers and conditional workflows</li>
                  </ul>
                </div>
              </div>

              <div className="service-box">
                <div className="service-box-header">
                  <h4>Analytics and Tracking</h4>
                  <p className="service-box-desc">Proper tracking so you know exactly what is working.</p>
                </div>
                <div className="service-box-content">
                  <p>This includes pixel setup, event tracking, UTM structure, and simple dashboards that show traffic, leads, cost per lead, and key funnel metrics. Clarity replaces guesswork.</p>
                  <h5>What's included:</h5>
                  <ul>
                    <li>Facebook and Google pixel installation</li>
                    <li>Event and conversion tracking setup</li>
                    <li>UTM parameter strategy</li>
                    <li>Custom dashboards for key metrics</li>
                    <li>Monthly analytics reports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing Services Grid */}
          <div className="service-category">
            <h3 className="category-title">Marketing Services</h3>
            <div className="service-boxes">
              <div className="service-box">
                <div className="service-box-header">
                  <h4>Performance Marketing (Paid Ads)</h4>
                  <p className="service-box-desc">Paid campaigns on Meta and Google focused on ROI, not just clicks.</p>
                </div>
                <div className="service-box-content">
                  <p>The team works on audiences, creatives, offers, and landing pages together so your ad spend turns into qualified leads and sales.</p>
                  <h5>What's included:</h5>
                  <ul>
                    <li>Campaign strategy and audience research</li>
                    <li>Ad copy and creative development</li>
                    <li>Campaign setup and optimization</li>
                    <li>A/B testing for continuous improvement</li>
                    <li>Weekly performance monitoring and reporting</li>
                  </ul>
                </div>
              </div>

              <div className="service-box">
                <div className="service-box-header">
                  <h4>Social Media and Content</h4>
                  <p className="service-box-desc">Content to support both brand presence and performance campaigns.</p>
                </div>
                <div className="service-box-content">
                  <p>The focus is on clear messaging, strong hooks, and consistency so your brand looks sharp and stays visible where your customers spend time.</p>
                  <h5>What's included:</h5>
                  <ul>
                    <li>Content calendar planning (monthly)</li>
                    <li>Short-form video creation</li>
                    <li>Carousel and static graphic design</li>
                    <li>Copywriting optimized for conversion</li>
                    <li>Posting and engagement management</li>
                  </ul>
                </div>
              </div>

              <div className="service-box">
                <div className="service-box-header">
                  <h4>Funnel and Offer Strategy</h4>
                  <p className="service-box-desc">Design your full funnel from first impression to conversion.</p>
                </div>
                <div className="service-box-content">
                  <p>Lead magnets, tripwires, core offers, and retargeting flows are mapped so every step gives the user a clear next action and moves them closer to buying.</p>
                  <h5>What's included:</h5>
                  <ul>
                    <li>Funnel mapping and flow design</li>
                    <li>Lead magnet creation</li>
                    <li>Offer hierarchy and positioning</li>
                    <li>Retargeting sequence strategy</li>
                    <li>Conversion optimization recommendations</li>
                  </ul>
                </div>
              </div>

              <div className="service-box">
                <div className="service-box-header">
                  <h4>Email and WhatsApp Marketing</h4>
                  <p className="service-box-desc">Campaigns and automations to nurture leads and re-engage customers.</p>
                </div>
                <div className="service-box-content">
                  <p>Sequences for welcome, follow-up, abandoned leads, and reactivation are built to increase lifetime value without proportional increase in ad spend.</p>
                  <h5>What's included:</h5>
                  <ul>
                    <li>Email and WhatsApp sequence design</li>
                    <li>Automation workflow setup</li>
                    <li>List segmentation strategy</li>
                    <li>Copy and template creation</li>
                    <li>Performance tracking and optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Add-On Services */}
          <h3 className="section-subtitle-center">Add-On and Supporting Services</h3>

          <div className="service-item-detailed">
            <h3>Funnel Audits</h3>
            <p>A deep dive into your current website, ads, CRM, and marketing to identify quick wins, leaks, and missed opportunities.</p>
            <p>Perfect for businesses already running ads or have an existing funnel but want expert perspective on what's working and what isn't.</p>
          </div>

          <div className="service-item-detailed">
            <h3>Strategy Consulting</h3>
            <p>One-on-one sessions with the Spark Sync founder and strategist to help you clarify your business model, margins, sales process, and growth priorities before scaling ad spend or hiring.</p>
          </div>

          <div className="service-item-detailed">
            <h3>Monthly Retainers</h3>
            <p>Ongoing tech and marketing support for businesses looking for continuous improvement without committing to full-service project work.</p>
            <p>Includes campaign optimization, content creation, CRM management, and strategic guidance. Perfect for growing businesses that need support but want flexibility.</p>
          </div>

          <div className="service-item-detailed">
            <h3>Content Creation Packages</h3>
            <p>Video production, graphic design, copywriting, and content strategy for brands that want professional content but don't have an in-house team.</p>
          </div>

          {/* Service Delivery */}
          <h3 className="section-subtitle-center">How Services Are Delivered</h3>

          <div className="service-delivery">
            <p><strong>Project-Based:</strong> For one-time builds like websites, CRM setup, or campaign launches with defined scope and timeline.</p>
            <p><strong>Retainer-Based:</strong> For ongoing support combining strategy, execution, optimization, and reporting on a monthly basis.</p>
            <p><strong>Hybrid:</strong> Many clients start with a project (website + CRM setup) and move into a retainer for continuous optimization and growth.</p>
          </div>

          {/* Pricing Model */}
          <h3 className="section-subtitle-center">Pricing Model</h3>

          <div className="pricing-info">
            <p>Spark Sync pricing is transparent and scalable:</p>
            <ul>
              <li><strong>Tech Services:</strong> Based on project scope (website, CRM setup, integrations)</li>
              <li><strong>Marketing Services:</strong> Performance-based model or monthly retainer depending on ad spend and goals</li>
              <li><strong>Audits & Consulting:</strong> Hourly or fixed-fee strategy sessions</li>
            </ul>
            <p>Every engagement starts with a discovery call to understand your situation, goals, and budget—then a clear proposal with no surprises.</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process">
        <div className="section-header">
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
            <p className="section-description">Book a free 30-minute strategy session to audit your current funnel and uncover immediate quick wins for growth.</p>
          </div>

          <div className="contact-cta-button">
            <a href="https://wa.me/919559133317?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get My Free Strategy Call</a>
          </div>

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
              <p>Noida, Uttar Pradesh, IN</p>
            </div>
          </div>

          <div className="metrics-box">
            <h3>Results & Proof</h3>
            <div className="metrics-grid">
              <div className="metric">
                <h4>2-3x Increase in Qualified Leads</h4>
                <p>Service businesses see dramatic lead volume improvements after we fix landing pages and implement proper tracking.</p>
              </div>
              <div className="metric">
                <h4>Improved Ad Performance</h4>
                <p>By reallocating budget from low-intent channels to high-converting creative and audience strategies, clients consistently see lower CAC and higher ROAS.</p>
              </div>
              <div className="metric">
                <h4>Data-Backed Decisions</h4>
                <p>Every campaign and tech setup is tracked, reported, and continuously optimized based on real results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
           
      

     
          {/* Footer */}
<footer role="contentinfo" className="footer-bar">
  <div className="footer-links">
    <Link className='foot-link' to="/privacy-policy">Privacy Policy</Link>
    
  </div>

  <div className="footer-meta">
    <p>© 2026 sparkSync. All rights reserved.</p>
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
