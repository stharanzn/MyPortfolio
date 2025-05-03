import React from "react";

const SkillCard = ({ icon, title }) => {
    return (
        <div className="bg-stone-800 rounded-xl p-6 text-center border border-stone-700 hover:border-amber-500 transition-colors duration-300">
            <div className="h-12 w-12 mx-auto mb-4 text-amber-500">{icon}</div>
            <h4 className="text-white font-medium">{title}</h4>
        </div>
    );
};

export default SkillCard;
