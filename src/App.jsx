
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import ProjectDetails from './components/ProjectDetails';
import './App.css';

const MainContent = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

import ScrollToAnchor from './components/ScrollToAnchor';

import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';



const App = () => {
  const [showIntro, setShowIntro] = React.useState(true);

  return (
    <Router>
      <div className="app">
        <AnimatePresence mode="wait">
          {showIntro && (
            <Intro key="intro" onComplete={() => setShowIntro(false)} />
          )}
        </AnimatePresence>
        
        {/* Main Content always rendered behind */}
        <ScrollToAnchor />
        <ParticlesBackground />
        <Layout>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App;

