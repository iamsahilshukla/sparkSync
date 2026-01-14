import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { sanityClient } from "../sanityClient";
import { PortableText } from "@portabletext/react";
import "../App.css";

const query = `
*[_type == "post" && slug.current == $slug][0]
`;

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    sanityClient.fetch(query, { slug }).then(setPost);
  }, [slug]);

  if (!post) return null;

  return (
    <main className="legal-with-particles">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 40 },
            color: { value: "#00D9FF" },
            opacity: { value: 0.2 },
            size: { value: 3 },
            move: { enable: true, speed: 1 }
          }
        }}
      />

      <div className="legal-content-wrapper">
        <h1>{post.title}</h1>
        <PortableText value={post.body} />
      </div>
    </main>
  );
}
