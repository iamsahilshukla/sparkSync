// import { useCallback, useEffect, useState } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import "../App.css";

// export default function PrivacyPolicy() {
//   const getParticleCount = () => {
//     const width = window.innerWidth;
//     if (width < 480) return 30;
//     if (width < 768) return 50;
//     if (width < 1024) return 70;
//     return 100;
//   };

//   const [particleCount, setParticleCount] = useState(getParticleCount());

//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => setParticleCount(getParticleCount());
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <main className="legal-page legal-with-particles">
//       {/* Particles */}
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           particles: {
//             number: { value: particleCount, density: { enable: true, value_area: 800 } },
//             color: { value: "#00D9FF" },
//             shape: { type: "circle" },
//             opacity: { value: 0.3, random: true },
//             size: { value: 3, random: true },
//             move: { enable: true, speed: 1, random: true },
//             links: { enable: false }
//           },
//           detectRetina: true
//         }}
//       />

//       {/* Content */}
//       <div className="legal-content-wrapper">
//         <div className="section-header">
//           <div className="section-tag">Legal</div>
//           <h1 className="section-title">Privacy Policy</h1>
//           <p className="section-description">
//             Effective Date: January 12, 2026
//           </p>
//         </div>
//         <div className="policy-card-1" style={{ textAlign: "center" }}>
//             <p>
//               At <strong>SparkSync</strong>, your privacy matters to us.
//               This page explains what information we collect, why we collect it,
//               and how we protect it when you use our website and services.
//             </p>
//           </div>
//         <div className="legal-content legal-cards">

//           {/* Intro */}
          

//           {/* Sections */}
//           <div className="policy-card" style={{ textAlign: "center" }}>
//             <h3>Information We Collect</h3>
//             <p>
//               We collect personal information such as your name and email address
//               only when you choose to provide it. We may also collect technical
//               data like IP address, browser type, and device information to
//               improve performance and security.
//             </p>
//           </div>

//           <div className="policy-card" style={{ textAlign: "center" }}>
//             <h3>Log Files</h3>
//             <p>
//               Like most websites, SparkSync uses log files to understand how
//               visitors interact with our site. This includes pages visited,
//               timestamps, and browser information. These logs are used strictly
//               for analytics and optimization.
//             </p>
//           </div>

//           <div className="policy-card" style={{ textAlign: "center" }}>
//             <h3>Cookies</h3>
//             <p>
//               Cookies help us remember your preferences and improve your overall
//               experience. You can disable cookies through your browser settings
//               if you prefer.
//             </p>
//           </div>

//           <div className="policy-card" style={{ textAlign: "center" }}>
//             <h3>Advertising & Third-Party Services</h3>
//             <p>
//               We may display ads through Google AdSense. These third-party
//               services may use cookies or similar technologies. SparkSync does
//               not control how third-party advertisers use this data.
//             </p>
//           </div>

//           <div className="policy-card" style={{ textAlign: "center" }}>
//             <h3>Your Data Protection Rights</h3>
//             <ul style={{ listStyle: "none", padding: 0 }}>
//               <li>Access your personal data</li>
//               <li>Request correction of incorrect data</li>
//               <li>Request deletion of your data</li>
//             </ul>
//           </div>

//           <div className="policy-card" style={{ textAlign: "center" }}>
//             <h3>Children’s Privacy</h3>
//             <p>
//               SparkSync does not knowingly collect information from children
//               under the age of 13. If you believe such data has been shared,
//               please contact us immediately.
//             </p>
//           </div>

//           {/* Contact */}
          

//         </div>
//         <div className="policy-card-2" style={{ textAlign: "center" }}>
//             <h3>Contact Us</h3>
//             <p>
//               If you have questions about this Privacy Policy, reach out to us at
//               <br />
//               <a href="mailto:hello@sparksync.com">
//                 hello@sparksync.com
//               </a>
//             </p>
//           </div>
//       </div>
//     </main>
//   );
// }
import { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../App.css";

export default function PrivacyPolicy() {
  const getParticleCount = () => {
    if (typeof window === "undefined") return 70;
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
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setParticleCount(getParticleCount());
      }, 150);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const particleOptions = useMemo(
    () => ({
      particles: {
        number: {
          value: particleCount,
          density: { enable: true, value_area: 800 }
        },
        color: { value: "#00D9FF" },
        shape: { type: "circle" },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        move: { enable: true, speed: 1, random: true },
        links: { enable: false }
      },
      detectRetina: true
    }),
    [particleCount]
  );

  return (
    <main className="legal-page legal-with-particles">
      {/* Decorative Particles */}
      <Particles
        id="tsparticles"
        aria-hidden="true"
        init={particlesInit}
        options={particleOptions}
      />

      <div className="legal-content-wrapper">
        <div className="section-header">
          <div className="section-tag">Legal</div>
          <h1 className="section-title">Privacy Policy</h1>
          <p className="section-description">
            Last Updated: January 12, 2026
          </p>
        </div>

        <section className="policy-card-1" style={{ textAlign: "center" }}>
          <p>
            <strong>SparkSync Technologies (SparkSyncs)</strong> is committed to
            protecting the privacy and personal information of our website
            visitors, clients, and users. By using our website or services, you
            agree to the terms of this Privacy Policy.
          </p>
        </section>

        <div className="legal-content legal-cards">
          <section className="policy-card" style={{ textAlign: "center" }}>
            <h3>Information We Collect</h3>
            <p><strong>Personal Information:</strong></p>
            <ul role="list" style={{ listStyle: "none", padding: 0 }}>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name</li>
              <li>Details shared via contact forms, WhatsApp, email, or calls</li>
            </ul>
            <p><strong>Technical Information:</strong></p>
            <p>
              IP address, browser type and version, device information, pages
              visited, and time spent on the website.
            </p>
          </section>

          <section className="policy-card" style={{ textAlign: "center" }}>
            <h3>How We Use Your Information</h3>
            <p>
              We use collected data to respond to enquiries, provide IT and
              digital marketing services, improve our offerings, send service
              updates or proposals, run analytics, and comply with legal and
              regulatory requirements.
            </p>
          </section>

          <section className="policy-card" style={{ textAlign: "center" }}>
            <h3>Cookies & Tracking Technologies</h3>
            <p>
              We use cookies and similar technologies to analyze traffic,
              understand user behavior, and improve website performance. You
              may disable cookies via browser settings, but some features may
              not function correctly.
            </p>
          </section>

          <section className="policy-card" style={{ textAlign: "center" }}>
            <h3>Data Sharing & Third Parties</h3>
            <p>
              We do not sell or rent your personal data. Information may be
              shared with trusted service providers (hosting, analytics, CRM,
              payment tools) or legal authorities when required by law. All
              third parties are bound by confidentiality obligations.
            </p>
          </section>

          <section className="policy-card" style={{ textAlign: "center" }}>
            <h3>Data Security Measures</h3>
            <p>
              We implement reasonable technical and organizational safeguards
              including secure servers, restricted access, and regular system
              monitoring. However, no system is completely secure.
            </p>
          </section>

          <section className="policy-card" style={{ textAlign: "center" }}>
            <h3>User Rights & Choices</h3>
            <ul role="list" style={{ listStyle: "none", padding: 0 }}>
              <li>Request access to your personal data</li>
              <li>Request correction or deletion</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section className="policy-card" style={{ textAlign: "center" }}>
            <h3>Data Retention Policy</h3>
            <p>
              We retain personal data only as long as necessary to fulfill
              service obligations and legal requirements. Once no longer
              required, data is securely deleted.
            </p>
          </section>

          <section className="policy-card" style={{ textAlign: "center" }}>
            <h3>Third-Party Links</h3>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for their privacy practices or content.
            </p>
          </section>

          <section className="policy-card" style={{ textAlign: "center" }}>
            <h3>Children’s Privacy</h3>
            <p>
              Our services are not intended for individuals under the age of
              18. We do not knowingly collect personal data from minors.
            </p>
          </section>

          <section className="policy-card" style={{ textAlign: "center" }}>
            <h3>Legal & Compliance</h3>
            <p>
              This Privacy Policy is aligned with the Information Technology
              Act, 2000 (India) and applicable data protection laws. Where
              applicable, we also follow general GDPR principles.
            </p>
          </section>

          {/* <section className="policy-card" style={{ textAlign: "center" }}>
            <h3>Changes to This Policy</h3>
            
          </section> */}
        </div>

       <section className="policy-card-2" style={{ textAlign: "center" }}>
  <h3>Updates to This Privacy Policy</h3>
  <p>
    We may update this Privacy Policy from time to time to reflect changes in
    our practices or legal requirements. Any updates will be posted on this
    page along with a revised effective date.
  </p>

  <h3 style={{ marginTop: "2rem" }}>Contact Information</h3>
  <p>
    <strong>SparkSync Technologies (SparkSyncs)</strong>
    <br />
    <a href="mailto:hello@sparksync.com">
      hello@sparksync.com
    </a>
    <br />
    🌐{" "}
    <a
      href="https://www.sparksyncs.site"
      target="_blank"
      rel="noopener noreferrer"
    >
      www.sparksyncs.site
    </a>
  </p>
</section>

      </div>
    </main>
  );
}
