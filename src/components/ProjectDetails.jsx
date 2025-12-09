import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/ProjectDetails.css';

import { customProjects } from '../data/content';

const ProjectDetails = () => {
  const { id } = useParams();
  
  // Find project from customProjects
  const project = customProjects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="container" style={{ paddingTop: '100px', textAlign: 'center' }}>
        <h2>Project not found</h2>
        <Link to="/#projects" className="btn btn-primary">Back to Projects</Link>
      </div>
    );
  }

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
          <h1 className="details-title">{project.title}</h1>
          <div className="tech-tags-large">
             {project.extendedTech && project.extendedTech.map((tech, index) => (
               <span key={index} className="tech-tag-lg">{tech}</span>
             ))}
          </div>
        </header>
        
        <div className="zigzag-container">
          {/* Section 1: Image Left - Overview Right */}
          <div className="zigzag-row">
            <div className="zigzag-image">
              <img src={project.gallery?.[0] || project.imageUrl} alt="Overview" />
            </div>
            <div className="zigzag-content">
              <h2>Overview</h2>
              <p>{project.detailedDescription || project.description}</p>
            </div>
          </div>

          {/* Section 2: Features Left - Image Right */}
          <div className="zigzag-row reverse">
            <div className="zigzag-image">
               <img src={project.gallery?.[1] || project.imageUrl} alt="Features" />
            </div>
            <div className="zigzag-content">
              <h2>Key Features</h2>
              <ul className="feature-list">
                {project.features && project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3: Image Left - Challenges Right */}
          <div className="zigzag-row">
            <div className="zigzag-image">
               <img src={project.gallery?.[2] || project.imageUrl} alt="Challenges" />
            </div>
            <div className="zigzag-content">
              <h2>Challenges & Solutions</h2>
              <p className="challenges-text">{project.challenges}</p>
            </div>
          </div>

          {/* Section 4: Outcome Left - Image Right */}
          {project.outcome && (
            <div className="zigzag-row reverse">
              <div className="zigzag-image">
                 <img src={project.gallery?.[3] || project.imageUrl} alt="Outcome" />
              </div>
              <div className="zigzag-content">
                <h2>Outcome & Impact</h2>
                <p className="outcome-text">{project.outcome}</p>
              </div>
            </div>
          )}
          
          {/* Requirements Section (Full Width or another row) */}
          {/* {project.requirements && (
             <div className="details-section full-width" style={{ marginTop: '4rem' }}>
                <h2>Requirements</h2>
                <ul className="learning-list">
                  {project.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
             </div>
          )} */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
