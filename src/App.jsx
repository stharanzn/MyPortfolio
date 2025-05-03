import Navbar from "./Components/Navbar.jsx";
import HeroSection from "./Components/HeroSection.jsx";
import "./App.css"
import ProjectsSection from "./Components/ProjectsSection.jsx";
import SkillsSection from "./Components/SkillsSection.jsx";
import AboutSection from "./Components/AboutSection.jsx";
import ContactSection from "./Components/ContactSection.jsx";
import Footer from "./Components/Footer.jsx";
import ParticleEffect from "./Utils/ParticleEffect.jsx";

const App = () => {


    return (
        <>
            <Navbar/>
            <HeroSection/>
            <ProjectsSection/>
            <SkillsSection/>
            <AboutSection/>
            <ContactSection/>
            <Footer/>
            <ParticleEffect/>
        </>
    )
}

export default App;