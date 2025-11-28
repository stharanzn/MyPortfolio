import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { skills } from '../data/content';
import '../styles/Skills.css';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <Section id="skills" title="Skills" className="skills-section">
      <motion.div 
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div key={index} className="skill-card" variants={item}>
            <span className="skill-name">{skill}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;
