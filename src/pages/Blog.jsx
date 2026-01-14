import { useEffect, useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { sanityClient } from "../sanityClient";
import { Link } from "react-router-dom";
import "../../src/App.css"

const query = `
*[_type == "post"] | order(publishedAt desc) {
  title,
  slug,
  excerpt
}
`;

export default function Blog() {
  const [posts, setPosts] = useState([]);

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    sanityClient.fetch(query).then(setPosts);
  }, []);

  return (
    <main className="legal-with-particles">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 60 },
            color: { value: "#00D9FF" },
            opacity: { value: 0.25 },
            size: { value: 3 },
            move: { enable: true, speed: 1 }
          },
          detectRetina: true
        }}
      />

      <div className="legal-content-wrapper">
        <h1 className="section-title">Insights & Blogs</h1>

        {posts.map(post => (
          <article key={post.slug.current} className="blog-card">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>

            <Link to={`/blog/${post.slug.current}`}>
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
