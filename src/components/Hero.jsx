import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import { profile, companies } from '../data/content';

const Hero = () => {

  return (
    <section id="hero" className="hero">
      <div className="hero-bg"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <motion.h2 
            className="hero-greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </motion.h2>
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {profile.name}
          </motion.h1>
          <motion.h3 
            className="hero-role"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {profile.role}
          </motion.h3>
          <motion.p 
            className="hero-summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {profile.summary}
          </motion.p>
          <motion.div 
            className="hero-companies"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="companies-title">Trusted by:</p>
            <div className="companies-grid">
              {companies.map((company, index) => (
                <img 
                  key={index} 
                  src={company.logo} 
                  alt={company.name} 
                  className="company-logo" 
                />
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
           <div className="visual-shape"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
