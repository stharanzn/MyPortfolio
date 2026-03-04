import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";
import ProjectDetails from "./components/ProjectDetails";
import "./App.css";

const MainContent = () => {
    return (
        <>
            <Hero />
            <Projects />
            <Contact />
        </>
    );
};

import ScrollToAnchor from "./components/ScrollToAnchor";

const App = () => {
    return (
        <Router>
            <div className="app">
                {/* Main Content always rendered behind */}
                <ScrollToAnchor />
                <ParticlesBackground />
                <Layout>
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/about" element={<About />} />
                        <Route
                            path="/project/:id"
                            element={<ProjectDetails />}
                        />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Layout>
            </div>
        </Router>
    );
};

export default App;
