import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../App.css";

export default function PrivacyPolicy() {
  // Match homepage particle responsiveness
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
    const handleResize = () => {
      setParticleCount(getParticleCount());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="legal-page legal-with-particles">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: particleCount,
              density: { enable: true, value_area: 800 },
            },
            color: { value: "#00D9FF" },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 3, random: true },
            links: { enable: false },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: "out",
              attract: { enable: true, rotateX: 300, rotateY: 1200 },
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: { enable: false },
              onClick: { enable: false },
              resize: true,
            },
          },
          detectRetina: true,
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

        <div className="legal-content">
          <p>
            At <strong>SparkSync</strong>, accessible from
            https://www.sparksyncs.site/, the privacy of our visitors is one of
            our top priorities.
          </p>

          <h3>1. Information We Collect</h3>
          <p>
            We may collect personal information such as name and email address
            when you contact us or subscribe. We also collect technical data such
            as IP address, browser type, and operating system via cookies.
          </p>

          <h3>2. Log Files</h3>
          <p>
            SparkSync follows standard log file usage including IP address,
            browser type, ISP, date/time stamps, and referring pages.
          </p>

          <h3>3. Cookies and Web Beacons</h3>
          <p>
            Cookies help us improve user experience by storing preferences and
            optimizing content.
          </p>

          <h3>4. Google DoubleClick DART Cookie</h3>
          <p>
            Google uses DART cookies to serve ads based on visits to this and
            other sites.
          </p>

          <h3>5. Advertising Partners</h3>
          <p>
            We use Google AdSense. SparkSync has no control over third-party
            cookies.
          </p>

          <h3>6. GDPR & CCPA Rights</h3>
          <ul>
            <li>Right to access your data</li>
            <li>Right to rectification</li>
            <li>Right to erasure</li>
          </ul>

          <h3>7. Children’s Information</h3>
          <p>
            SparkSync does not knowingly collect data from children under 13.
          </p>

          <h3>8. Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:hello@sparksync.com">
              hello@sparksync.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
