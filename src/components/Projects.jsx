import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { githubConfig, customProjects } from '../data/content';
import '../styles/Projects.css';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubConfig.username}/repos`);
        const data = await response.json();
        if (Array.isArray(data)) {
          const filteredProjects = data.filter(repo => 
            githubConfig.projectAllowList.includes(repo.name)
          );
          
          // Fetch languages for each project
          const projectsWithLanguages = await Promise.all(filteredProjects.map(async (repo) => {
            let techStack = [];
            try {
              const langRes = await fetch(repo.languages_url);
              const langData = await langRes.json();
              techStack = Object.keys(langData);
            } catch (e) {
              console.error(`Failed to fetch languages for ${repo.name}`, e);
              techStack = [repo.language].filter(Boolean); // Fallback
            }

            return {
              id: repo.id,
              title: repo.name.replace(/-/g, ' '),
              description: repo.description,
              techStack: techStack,
              imageUrl: `https://raw.githubusercontent.com/${githubConfig.username}/${repo.name}/${repo.default_branch}/ProjectImage.png`,
              links: [
                { label: "GitHub", url: repo.html_url }
              ]
            };
          }));

          setProjects([...customProjects, ...projectsWithLanguages]);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Section id="projects" title="Projects" className="projects-section">
      {loading ? (
        <div className="loading">Loading projects...</div>
      ) : (
        <motion.div 
          className="projects-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </Section>
  );
};

export default Projects;
