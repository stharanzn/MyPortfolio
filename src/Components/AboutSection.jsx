import React from "react";

const Avatar = () => (
    <div className="relative">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 mx-auto overflow-hidden border-4 border-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-white/20">
                <path
                    fill="currentColor"
                    d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                />
            </svg>
        </div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"></div>
    </div>
);

const AboutText = () => (
    <>
        <h2 className="text-3xl md:text-4xl font-bold game-title mb-6">
            About <span className="text-purple-500">Me</span>
        </h2>

        <p className="text-slate-300 mb-6">
            I'm Alex, a passionate game developer with over 8 years of experience creating immersive and engaging gaming
            experiences. My journey in game development began with a fascination for interactive storytelling and has evolved
            into a career crafting worlds that players love to explore.
        </p>

        <p className="text-slate-300 mb-6">
            I specialize in Unity and Unreal Engine development, with a strong background in both 2D and 3D game creation. My
            approach combines technical expertise with creative vision to deliver games that are not only fun to play but also
            visually stunning.
        </p>

        <p className="text-slate-300 mb-8">
            When I'm not coding or designing games, you can find me exploring the latest gaming trends, participating in game
            jams, or mentoring aspiring game developers.
        </p>

        <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary px-8 py-3 rounded-lg font-medium text-white">
                Get In Touch
            </a>
            <a
                href="#"
                className="px-8 py-3 rounded-lg font-medium text-white border border-purple-500 hover:bg-purple-500/20 transition duration-300"
            >
                Download Resume
            </a>
        </div>
    </>
);

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4 bg-slate-900/50">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <Avatar />
                    </div>
                    <div className="md:w-1/2">
                        <AboutText />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
