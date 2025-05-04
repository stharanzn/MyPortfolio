// components/ExperienceItem.jsx
import SkillTag from "./SkillTag";

export default function ExperienceItem({ item, alignRight = false }) {
    return (
        <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="md:grid md:grid-cols-2 md:gap-16">
                <div className={`mb-8 md:mb-0 ${alignRight ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                    <h3 className="text-xl font-bold text-white game-title">{item.title}</h3>
                    <div className="text-amber-500 font-medium">{item.company}</div>
                    <div className="text-stone-400 text-sm mt-1">{item.period}</div>
                </div>
                <div className={alignRight ? "md:pl-8" : "md:pr-8"}>
                    <div className="bg-stone-900/80 p-6 rounded-xl border border-stone-700 work-card">
                        <p className="text-stone-300 mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {item.skills.map((skill, i) => (
                                <SkillTag key={i} skill={skill} />
                            ))}
                        </div>
                        <div className="mt-4">
                            <h4 className="text-white font-medium mb-2">Key Projects:</h4>
                            <ul className="list-disc list-inside text-stone-400 space-y-1">
                                {item.projects.map((project, i) => (
                                    <li key={i}>{project}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
