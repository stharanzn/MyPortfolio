import React from "react";

const SkillCard = ({ icon, title }) => {
    return (
        <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700 hover:border-purple-500 transition-colors duration-300">
            <div className="h-12 w-12 mx-auto mb-4 text-purple-500">{icon}</div>
            <h4 className="text-white font-medium">{title}</h4>
        </div>
    );
};

export default SkillCard;
