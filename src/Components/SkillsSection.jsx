import React from "react";
import SkillBar from "../Utils/SkillBar";
import SkillCard from "../Utils/SkillCard";
import {
    Monitor,
    Layers,
    PlayCircle,
    Smartphone, LaptopMinimal, FileQuestion, Gamepad2,
} from "lucide-react"; // icons from lucide-react

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 px-4 bg-stone-800/50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold game-title mb-4">
                        Technical <span className="text-amber-500">Skills</span>
                    </h2>
                    <p className="text-stone-400 max-w-2xl mx-auto">
                        My expertise spans across various game development technologies and programming languages.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-8 game-title">Development</h3>
                        <div className="space-y-6">
                            <SkillBar name="Unity" percent={100}/>
                            <SkillBar name="Unreal Engine" percent={65}/>
                            <SkillBar name="NodeJS / Express" percent={85}/>
                            <SkillBar name="Vite + ReactJS" percent={85}/>
                            <SkillBar name="Unity WebGL Plugin" percent={95}/>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-8 game-title">Programming Languages</h3>
                        <div className="space-y-6">
                            <SkillBar name="C#" percent={100}/>
                            <SkillBar name="Python" percent={80}/>
                            <SkillBar name="Java Script" percent={85}/>

                        </div>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 ">
                    <SkillCard icon={<Gamepad2 size={48}/>} title="Game Development"/>
                    <SkillCard icon={<LaptopMinimal size={48}/>} title="Web Development"/>
                    <SkillCard icon={<FileQuestion size={48}/>} title="Problem Solving"/>
                    {/*<SkillCard icon={<Smartphone size={48}/>} title="Mobile Development"/>*/}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
