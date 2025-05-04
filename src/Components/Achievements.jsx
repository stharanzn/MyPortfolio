import React from 'react';
import {achievements} from "../assets/AchievementsData.jsx";

const Achievements = () => {
    return (
        <section id="experience" className="py-20 px-4 bg-stone-800/50 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-red-700/10 blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-amber-700/10 blur-3xl"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold game-title mb-4">
                        Awards & <span className="text-amber-500">Achievements</span>
                    </h2>
                    <p className="text-stone-400 max-w-2xl mx-auto">
                        Recognition and milestones from my journey in game development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((achieve, index) => (
                        <div
                            key={index}
                            className="achievement-card bg-stone-900/80 rounded-xl p-6 border border-stone-700 relative"
                        >
                            <div
                                className="absolute -top-4 -right-4 w-20 h-20 bg-red-500/10 rounded-full blur-xl"></div>
                            <div className="flex items-center mb-6">
                                <div
                                    className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center mr-4 achievement-icon">
                                    {/*<svg*/}
                                    {/*    xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*    className="h-8 w-8 text-white"*/}
                                    {/*    fill="none"*/}
                                    {/*    viewBox="0 0 24 24"*/}
                                    {/*    stroke="currentColor"*/}
                                    {/*>*/}
                                        {achieve.icon}
                                    {/*</svg>*/}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white game-title">{achieve.title}</h3>
                                    <p className="text-amber-500">{achieve.subtitle}</p>
                                </div>
                            </div>
                            <p className="text-stone-300 mb-4">{achieve.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-stone-400">{achieve.date}</span>
                                {achieve.certLink !== "" &&
                                    (

                                        <a
                                            href={achieve.certLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-amber-400 hover:text-amber-300 font-medium flex items-center"
                                        >
                                            View Certificate
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 ml-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </a>
                                    )}

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
