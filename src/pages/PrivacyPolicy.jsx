import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../App.css";

export default function PrivacyPolicy() {
  const getParticleCount = () => {
    const width = window.innerWidth;
    if (width < 480) return 30;
    if (width < 768) return 50;
    if (width < 1024) return 70;
    return 100;
  };

  const [particleCount, setParticleCount] = useState(getParticleCount());

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const handleResize = () => setParticleCount(getParticleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="legal-page legal-with-particles">
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: particleCount, density: { enable: true, value_area: 800 } },
            color: { value: "#00D9FF" },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1, random: true },
            links: { enable: false }
          },
          detectRetina: true
        }}
      />

      {/* Content */}
      <div className="legal-content-wrapper">
        <div className="section-header">
          <div className="section-tag">Legal</div>
          <h1 className="section-title">Privacy Policy</h1>
          <p className="section-description">
            Effective Date: January 12, 2026
          </p>
        </div>
        <div className="policy-card-1" style={{ textAlign: "center" }}>
            <p>
              At <strong>SparkSync</strong>, your privacy matters to us.
              This page explains what information we collect, why we collect it,
              and how we protect it when you use our website and services.
            </p>
          </div>
        <div className="legal-content legal-cards">

          {/* Intro */}
          

          {/* Sections */}
          <div className="policy-card" style={{ textAlign: "center" }}>
            <h3>Information We Collect</h3>
            <p>
              We collect personal information such as your name and email address
              only when you choose to provide it. We may also collect technical
              data like IP address, browser type, and device information to
              improve performance and security.
            </p>
          </div>

          <div className="policy-card" style={{ textAlign: "center" }}>
            <h3>Log Files</h3>
            <p>
              Like most websites, SparkSync uses log files to understand how
              visitors interact with our site. This includes pages visited,
              timestamps, and browser information. These logs are used strictly
              for analytics and optimization.
            </p>
          </div>

          <div className="policy-card" style={{ textAlign: "center" }}>
            <h3>Cookies</h3>
            <p>
              Cookies help us remember your preferences and improve your overall
              experience. You can disable cookies through your browser settings
              if you prefer.
            </p>
          </div>

          <div className="policy-card" style={{ textAlign: "center" }}>
            <h3>Advertising & Third-Party Services</h3>
            <p>
              We may display ads through Google AdSense. These third-party
              services may use cookies or similar technologies. SparkSync does
              not control how third-party advertisers use this data.
            </p>
          </div>

          <div className="policy-card" style={{ textAlign: "center" }}>
            <h3>Your Data Protection Rights</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>Access your personal data</li>
              <li>Request correction of incorrect data</li>
              <li>Request deletion of your data</li>
            </ul>
          </div>

          <div className="policy-card" style={{ textAlign: "center" }}>
            <h3>Children’s Privacy</h3>
            <p>
              SparkSync does not knowingly collect information from children
              under the age of 13. If you believe such data has been shared,
              please contact us immediately.
            </p>
          </div>

          {/* Contact */}
          

        </div>
        <div className="policy-card-2" style={{ textAlign: "center" }}>
            <h3>Contact Us</h3>
            <p>
              If you have questions about this Privacy Policy, reach out to us at
              <br />
              <a href="mailto:hello@sparksync.com">
                hello@sparksync.com
              </a>
            </p>
          </div>
      </div>
    </main>
  );
}
