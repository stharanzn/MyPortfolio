// components/WorkExperience.jsx
import {experienceData} from "../assets/ExperienceData.js";
import ExperienceItem from "../Utils/ExperienceItem.jsx";
import Achievements from "./Achievements.jsx";

export default function WorkExperience() {
    return (
        <>
            <section id="experience" className="py-20 px-4 bg-stone-800/50">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold game-title mb-4">
                            <span className="text-amber-500">Experience</span>
                        </h2>
                        <p className="text-stone-400 max-w-2xl mx-auto">
                            My professional journey in the development industry, working with great teams in studios.
                        </p>
                    </div>

                    <div className="timeline-container">
                        {experienceData.map((item, index) => (
                            <ExperienceItem key={index} item={item} alignRight="true"/>
                        ))}
                    </div>
                </div>
            </section>
            <Achievements/>
        </>
    )
        ;
}
