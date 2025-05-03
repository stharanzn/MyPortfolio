import React from "react";
import profilePic from "../assets/ProfilePic.jpg"

const Avatar = () => (
    <div className="relative">
        <div
            className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-red-600 to-amber-600 mx-auto overflow-hidden border-4 border-amber-700 flex items-center justify-center">
            {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-white/20">*/}
            {/*    <path*/}
            {/*        fill="currentColor"*/}
            {/*        d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"*/}
            {/*    />*/}
            {/*</svg>*/}
            <img src={profilePic} alt="Profile Picture"/>
        </div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-500/20 rounded-full blur-xl"></div>
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500/20 rounded-full blur-xl"></div>
    </div>
);

const AboutText = () => (
    <>
        <h2 className="text-3xl md:text-4xl font-bold game-title mb-6">
            About <span className="text-amber-500">Me</span>
        </h2>

        <p className="text-stone-300 mb-6">
            I'm Ranjan, an enthusiastic game developer with over a year of experience bringing interactive ideas to
            life. My passion lies in blending gameplay mechanics with creative design to build engaging, browser-based
            and standalone games that captivate players.
        </p>

        <p className="text-stone-300 mb-6">
            I specialize in web-based game development using technologies like HTML5, JavaScript, and WebGL, while also
            growing my skills in Unity. My background in web development adds a unique layer to my approach, allowing me
            to create seamless, cross-platform experiences.
        </p>

        <p className="text-stone-300 mb-8">
            Outside of coding, I'm an avid parkour enthusiast — I love the thrill of movement and exploration, which
            often inspires the dynamic worlds and mechanics in my games. Whether I’m debugging a tricky script or
            vaulting over an obstacle, I’m always chasing the next challenge.
        </p>

        <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary px-8 py-3 rounded-lg font-medium text-white hover:text-white">
                Get In Touch
            </a>
            <a
                href="#"
                className="px-8 py-3 rounded-lg font-medium text-white border border-amber-500 hover:bg-amber-500/20 hover:text-white transition duration-300"
            >
                Download Resume
            </a>
        </div>
    </>
);

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4 bg-stone-900/50">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <Avatar/>
                    </div>
                    <div className="md:w-1/2">
                        <AboutText/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
