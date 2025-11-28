
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

const App = () => {
  return (
    <Router>
      <div className="app">
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

