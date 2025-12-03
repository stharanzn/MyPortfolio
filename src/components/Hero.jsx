import React from 'react';
import { motion } from 'framer-motion';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '../styles/Hero.css';
import { profile } from '../data/content';

const Hero = () => {
  const lottieRef = React.useRef(null);

  const handleLottieEvent = (event) => {
    if (event === 'ready') {
      // Log available state machines when player is ready
      const player = lottieRef.current;
      if (player) {
         console.log("Lottie Player Ready!");
         // Try to get manifest or state machine info
         // Note: The exact API depends on the version, but usually getManifest() or similar works
         // For now, logging the player instance to let user inspect it
         console.log("Lottie Instance:", player);
         
         // If the player has a getManifest method, call it
         if (typeof player.getManifest === 'function') {
            console.log("Lottie Manifest:", player.getManifest());
         }
      }
    }
  };

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
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </motion.div>
        </div>
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
           <div className="visual-shape"></div>
           <div className="lottie-container">
             <DotLottiePlayer
               ref={lottieRef}
               src="https://lottie.host/7a696362-ee54-49c5-847f-426a129d531e/co6GYWRriS.lottie"
              //  src="https://lottie.host/0a2719a8-28c9-459c-8fcf-b2c4bf5fca08/kts7sCKzYS.lottie"               
               autoplay
               loop
               onEvent={handleLottieEvent}
             />
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
