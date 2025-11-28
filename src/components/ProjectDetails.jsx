import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/ProjectDetails.css';

// Mock data for demonstration - in a real app this might come from a more detailed API or content file
const projectDetailsData = {
  "Meet-Yeet": {
    videoUrl: "https://www.youtube.com/embed/W7yEgzhHypU", // Embed URL
    extendedTech: [
      "Unity 3D", "Blender", "Agora Voice SDK", "Photon PUN2", 
      "C#", "Electron JS", "Node.js", "Express", "MongoDB", "Socket.io"
    ],
    learnings: [
      "Mastered real-time multiplayer synchronization using Photon PUN2.",
      "Integrated spatial voice chat for immersive 3D environments.",
      "Built a custom game launcher using Electron and Node.js.",
      "Designed low-poly 3D assets optimized for web and desktop performance."
    ],
    challenges: "One of the biggest challenges was handling the latency between the voice server and the game state. I solved this by implementing client-side prediction and interpolation.",
    features: [
      "Real-time 3D Avatar Customization",
      "Spatial Audio Voice Chat",
      "Interactive Whiteboards",
      "Screen Sharing within the 3D world"
    ]
  }
  // Add other projects here as needed, or use a default fallback
};

const ProjectDetails = () => {
  const { id } = useParams();
  // Fallback to Meet-Yeet data if ID doesn't match (for demo purposes) or show generic info
  const project = projectDetailsData[id] || projectDetailsData["Meet-Yeet"]; 
  const title = id.replace(/-/g, ' ');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="project-details-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <Link to="/#projects" className="back-link">← Back to Projects</Link>
        
        <header className="details-header">
          <h1 className="details-title">{title}</h1>
          <div className="video-container">
            <iframe 
              width="100%" 
              height="100%" 
              src={project.videoUrl} 
              title="Project Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </header>

        <div className="details-grid">
          <div className="details-section">
            <h2>Technology Stack</h2>
            <div className="tech-tags-large">
              {project.extendedTech.map((tech, index) => (
                <span key={index} className="tech-tag-lg">{tech}</span>
              ))}
            </div>
          </div>

          <div className="details-section">
            <h2>Key Features</h2>
            <ul className="feature-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="details-section full-width">
            <h2>What I Learned</h2>
            <ul className="learning-list">
              {project.learnings.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="details-section full-width">
            <h2>Challenges & Solutions</h2>
            <p className="challenges-text">{project.challenges}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
