import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Intro.css';

const Intro = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="intro-container"
      initial={{ "--mask-radius": "0%" }}
      exit={{ 
        "--mask-radius": "150%", 
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="intro-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="intro-text"
        >
          Welcome
        </motion.h1>
        <motion.div 
          className="intro-line"
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default Intro;
