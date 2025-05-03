import React from 'react';
import logo from "../assets/logo.png"

const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center justify-center md:justify-start">
                            <div
                                className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mr-3">
                                {/*<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
                                {/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />*/}
                                {/*</svg>*/}
                                <img src={logo} alt="Logo"/>
                            </div>
                            <h1 className="text-xl font-bold game-title text-white">RANJAN <span
                                className="text-purple-500">SHRESTHA</span></h1>
                        </div>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <div className="flex flex-wrap justify-center md:justify-center space-x-6">
                            <a href="#home" className="text-slate-400 hover:text-white transition duration-300">Home</a>
                            <a href="#projects"
                               className="text-slate-400 hover:text-white transition duration-300">Projects</a>
                            <a href="#skills"
                               className="text-slate-400 hover:text-white transition duration-300">Skills</a>
                            <a href="#about"
                               className="text-slate-400 hover:text-white transition duration-300">About</a>
                            <a href="#contact"
                               className="text-slate-400 hover:text-white transition duration-300">Contact</a>
                        </div>
                    </div>

                    <div className="text-slate-400 text-sm md:text-base mt-4 md:mt-0 text-center md:text-right">
                        &copy; {new Date().getFullYear()} Ranjan Shrestha. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
