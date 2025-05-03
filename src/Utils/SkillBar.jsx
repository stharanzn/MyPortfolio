import React from "react";

const SkillBar = ({ name, percent }) => {
    return (
        <div>
            <div className="flex justify-between mb-2">
                <span className="text-white">{name}</span>
                <span className="text-purple-400">{percent}%</span>
            </div>
            <div
                className="skill-bar"
                style={{ "--percent": `${percent}%` }}
            ></div>
        </div>
    );
};

export default SkillBar;
