import ProjectCard from "../Utils/ProjectCard.jsx";
import {useEffect, useState} from "react";
import clsx from "clsx"; // Optional, for clean conditional class names

const projectsData = [
    {
        title: "Cosmic Odyssey",
        description: "A space exploration RPG with procedurally generated planets and an epic storyline spanning multiple galaxies.",
        tags: ["Unity", "C#", "3D"],
        category: "RPG",
        gradientFrom: "purple-600",
        gradientTo: "indigo-800",
        engine: "Unity",
        dataId: "game1"
    },
    {
        title: "Chrono Shift",
        description: "A mind-bending puzzle game where players manipulate time to solve increasingly complex challenges.",
        tags: ["Unreal Engine", "C++", "2D"],
        category: "Puzzle",
        gradientFrom: "indigo-600",
        gradientTo: "blue-800",
        engine: "Unreal",
        dataId: "game2"
    },
    {
        title: "Shadow Legends",
        description: "A fast-paced action game with stealth mechanics and a dark, atmospheric world to explore.",
        tags: ["Godot", "GDScript", "2.5D"],
        category: "Action",
        gradientFrom: "pink-600",
        gradientTo: "purple-800",
        engine: "Godot",
        dataId: "game3"
    },
    {
        title: "Shadow Legends2",
        description: "A fast-paced action game with stealth mechanics and a dark, atmospheric world to explore.",
        tags: ["Godot", "GDScript", "2.5D"],
        category: "Action",
        gradientFrom: "indigo-600",
        gradientTo: "blue-800",
        engine: "Godot",
        dataId: "game3"
    },
    {
        title: "Shadow Legends3",
        description: "A fast-paced action game with stealth mechanics and a dark, atmospheric world to explore.",
        tags: ["Godot", "GDScript", "2.5D"],
        category: "Action",
        gradientFrom: "pink-600",
        gradientTo: "purple-800",
        engine: "Godot",
        dataId: "game3"
    }
];

const projectDetails = {
    game1: {
        title: "Cosmic Odyssey",
        category: "RPG",
        engine: "Unity",
        description: "A space exploration RPG with procedurally generated planets and an epic storyline spanning multiple galaxies. Players can explore unique worlds, encounter alien species, and uncover the mysteries of the universe.",
        features: [
            "Procedurally generated universe with billions of unique planets",
            "Dynamic character progression system",
            "Real-time space combat and planetary exploration",
            "Complex dialogue system with branching storylines",
            "Customizable spacecraft with upgradable components"
        ],
        technologies: ["Unity", "C#", "Shader Graph", "ProBuilder", "FMOD"],
        images: ["space-game-1", "space-game-2", "space-game-3"]
    },
    game2: {
        title: "Chrono Shift",
        category: "Puzzle",
        engine: "Unreal Engine",
        description: "A mind-bending puzzle game where players manipulate time to solve increasingly complex challenges. Navigate through a mysterious facility where the laws of physics are yours to control.",
        features: [
            "Innovative time manipulation mechanics",
            "Physics-based puzzle solving",
            "Atmospheric storytelling through environment",
            "Multiple endings based on player choices",
            "Challenging achievement system"
        ],
        technologies: ["Unreal Engine", "C++", "Blueprint", "Niagara FX", "Wwise"],
        images: ["puzzle-game-1", "puzzle-game-2", "puzzle-game-3"]
    },
    game3: {
        title: "Shadow Legends",
        category: "Action",
        engine: "Godot",
        description: "A fast-paced action game with stealth mechanics and a dark, atmospheric world to explore. Play as a shadow assassin with supernatural abilities in a world corrupted by dark magic.",
        features: [
            "Fluid combat system with combo mechanics",
            "Stealth gameplay with light and shadow dynamics",
            "Skill tree with multiple progression paths",
            "Metroidvania-inspired world design",
            "Dynamic enemy AI that adapts to player style"
        ],
        technologies: ["Godot", "GDScript", "Custom Shader Pipeline", "Blender", "Audacity"],
        images: ["action-game-1", "action-game-2", "action-game-3"]
    }
};

export default function ProjectsSection() {

    const defaultVisibleCount = 3;
    const [visibleCount, setVisibleCount] = useState(defaultVisibleCount);
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    const [projects, setProjects] = useState([]);

    const projsToShow = ["FPS_ShooterWebsite", "FPS_ShooterLauncher", "meetYeetLauncher", "PongGame"]

    useEffect(() => {


        const fetchProjects = async () => {
            try {
                var storedData = JSON.parse(window.sessionStorage.getItem("storedData"));
                const cacheData = false;
                if (storedData !== null && cacheData) {
                    setProjects(storedData);
                } else {
                    console.log("sending fetch request")
                    const response = await fetch('https://api.github.com/users/stharanzn/repos', {});
                    if (response.ok) {
                        console.log("fetching projects data");
                        const data = await response.json();
                        let filteredProjects = [];
                        data.map((project) => {
                            if (projsToShow.includes(project.name)) {
                                filteredProjects.push(project);
                            }
                        })
                        window.sessionStorage.setItem("storedData", JSON.stringify(filteredProjects));
                        setProjects(filteredProjects);

                    } else {
                        console.error('Failed to fetch project data');
                    }
                }


            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchProjects();
    }, []);

    const handleLoadMore = () => setVisibleCount(projectsData.length);
    const handleHideProjects = () => setVisibleCount(defaultVisibleCount);

    const handleOpenModal = (projectId) => {
        setSelectedProjectId(projectId);
    };

    const handleCloseModal = () => {
        setSelectedProjectId(null);
    };

    const selectedProject = selectedProjectId ? projectDetails[selectedProjectId] : null;

    return (
        <section id="projects" className="py-20 px-4 bg-slate-900/50 relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold game-title mb-4">
                        Featured <span className="text-purple-500">Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Explore my portfolio of games and interactive experiences that push the boundaries of gameplay
                        and storytelling.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, visibleCount).map((project) => (
                        <>
                            <ProjectCard
                                key={project.id}
                                // onClick={() => handleOpenModal(project.dataId)}
                                projectData={project}
                            />


                        </>
                    ))}
                </div>

                <div className="text-center mt-12">
                    {visibleCount < projectsData.length ? (
                        <button
                            onClick={handleLoadMore}
                            className="px-8 py-3 rounded-lg font-medium text-white border border-purple-400 hover:bg-yellow-400/20 transition duration-300"
                        >
                            Load More Projects
                        </button>
                    ) : (
                        <button
                            onClick={handleHideProjects}
                            className="px-8 py-3 rounded-lg font-medium text-white border border-red-500 hover:bg-red-500/20 transition duration-300"
                        >
                            Hide Projects
                        </button>
                    )}
                </div>
            </div>

            {/* Modal */
            }
            {
                selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                         onClick={handleCloseModal}>
                        <div
                            className={clsx(
                                "modal bg-slate-800 rounded-lg p-6 max-w-2xl w-full transform transition duration-300",
                                selectedProject ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            )}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-4 right-4 text-white hover:text-red-500 text-xl"
                            >
                                ×
                            </button>

                            <div className="mb-6">
                                <div
                                    className="h-64 bg-gradient-to-br from-red-600 to-yellow-500 rounded-lg mb-6 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white/80" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-white game-title">{selectedProject.title}</h2>
                                <div className="flex items-center mt-2 mb-4">
                                <span
                                    className="text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded mr-2">{selectedProject.category}</span>
                                    <span
                                        className="text-xs bg-yellow-900/50 text-yellow-300 px-2 py-1 rounded">{selectedProject.engine}</span>
                                </div>
                                <p className="text-slate-300">{selectedProject.description}</p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-white mb-3">Key Features</h3>
                                <ul className="list-disc pl-5 text-slate-300 space-y-1">
                                    {selectedProject.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-white mb-3">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech, i) => (
                                        <span key={i}
                                              className="text-xs bg-slate-700 text-white px-2 py-1 rounded border border-slate-600">
                    {tech}
                  </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-center mt-8">
                                <a href="#" className="btn-primary px-8 py-3 rounded-lg font-medium text-white">
                                    View Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    )
        ;
}

