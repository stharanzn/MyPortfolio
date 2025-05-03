import React from "react";
import UnityGame from "../Utils/UnityGame.jsx";
import FloatingIcons from "../Utils/FloatingIcons.jsx";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="min-height-screen min-w-screen pt-24 pb-12 px-4 relative overflow-hidden"
        >
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-red-700/20 blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-amber-700/20 blur-3xl"></div>
            </div>

            <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">
                {/* Text Content */}
                <div className="md:w-1/2 mb-12 md:mb-0">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 game-title">
                        <span className="text-white">Game Developer &</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              {" "}Interactive Designer
            </span>
                    </h2>
                    <p className="text-stone-300 text-lg md:text-xl mb-8 max-w-lg">
                        Crafting immersive gaming experiences with cutting-edge technology and creative storytelling.
                        Turning ideas into playable realities.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="btn-primary px-8 py-3 hover:text-white rounded-lg font-medium text-white">
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-lg font-medium text-white border border-amber-500 hover:bg-amber-500/20 hover:text-white transition duration-300"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>

                {/* SVG / Floating Blob */}
                <div className="md:w-1/2 relative">
                    <div className="relative w-full h-96 md:h-[500px]">
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600/20 to-amber-600/20 rounded-2xl"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/*<UnityGame/>*/}
                            <FloatingIcons/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="container mx-auto mt-16 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2">20+</div>
                        <div className="text-stone-400">Games Shipped</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2">1+</div>
                        <div className="text-stone-400">Years Experience</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
