import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {

  return (
    <motion.div 
      className="project-card"
      whileHover={{ 
        y: -5,
        scale: 1.01,
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="card-glow"></div>
      
      <div className="project-image-container">
        <div className="image-frame">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            // onError={(e) => {
            //   e.target.onerror = null;
            //   e.target.src = 'https://via.placeholder.com/600x400/1a1a1a/8B0000?text=No+Image'; // Fallback
            // }}
          />
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        {project.role && <p className="project-role">{project.role}</p>}
        <p className="project-desc">{project.description}</p>
        
        <div className="project-tech">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        {project.recognitions && (
          <div className="project-recognitions">
            <h4>Recognitions:</h4>
            <ul>
              {project.recognitions.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="project-links">
          {project.links.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
