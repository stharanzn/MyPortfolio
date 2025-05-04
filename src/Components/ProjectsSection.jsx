import ProjectCard from "../Utils/ProjectCard.jsx";
import {useEffect, useState} from "react";

export default function ProjectsSection() {

    const defaultVisibleCount = 3;
    const [visibleCount, setVisibleCount] = useState(defaultVisibleCount);

    const [projects, setProjects] = useState([]);

    const projsToShow = ["FPS_ShooterWebsite", "FPS_ShooterLauncher", "meetYeetLauncher", "PongGame"]

    useEffect(() => {


        const fetchProjects = async () => {
            try {
                var storedData = JSON.parse(window.sessionStorage.getItem("storedData"));
                const cacheData = true;
                if (storedData !== null && cacheData) {
                    setProjects(storedData);
                } else {
                    const response = await fetch('https://api.github.com/users/stharanzn/repos', {});
                    if (response.ok) {
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

    const handleLoadMore = () => setVisibleCount(projects.length);
    const handleHideProjects = () => setVisibleCount(defaultVisibleCount);

    return (
        <section id="projects" className="py-20 px-4 bg-stone-900/50 relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold game-title mb-4">
                        Featured <span className="text-amber-500">Projects</span>
                    </h2>
                    <p className="text-stone-400 max-w-2xl mx-auto">
                        Explore my portfolio of games and interactive experiences that push the boundaries of gameplay
                        and storytelling.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, visibleCount).map((project) => (
                        <ProjectCard
                            key={project.id}
                            projectData={project}
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    {visibleCount < projects.length ? (
                        <button
                            onClick={handleLoadMore}
                            className="px-8 py-3 rounded-lg font-medium text-white border border-amber-400 hover:bg-amber-400/20 hover:border-amber-400/20 transition duration-300"
                        >
                            Load More Projects
                        </button>
                    ) : (
                        <button
                            onClick={handleHideProjects}
                            className="px-8 py-3 rounded-lg font-medium text-white border border-amber-500 hover:bg-amber-500/20 hover:border-amber-400/20 transition duration-300"
                        >
                            Hide Projects
                        </button>
                    )}
                </div>
            </div>

        </section>
    )
        ;
}

