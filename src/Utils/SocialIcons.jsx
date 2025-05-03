import {FaTwitter, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'; // Importing icons from react-icons

const SocialIcons = () => {
    return (
        <div className="flex space-x-4">
            {/*<a*/}
            {/*    href="#"*/}
            {/*    className="social-icon w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:border-red-500"*/}
            {/*    aria-label="Twitter"*/}
            {/*>*/}
            {/*    <FaTwitter className="h-6 w-6"/>*/}
            {/*</a>*/}
            <a
                href="https://www.instagram.com/stharanzn"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-12 h-12 rounded-lg bg-stone-800 border border-slate-700 flex items-center justify-center text-white hover:border-amber-500"
                aria-label="Instagram"
            >
                <FaInstagram className="h-6 w-6"/>
            </a>
            <a
                href="https://www.linkedin.com/in/stharanzn/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-12 h-12 rounded-lg bg-stone-800 border border-slate-700 flex items-center justify-center text-white hover:border-amber-500"
                aria-label="LinkedIn"
            >
                <FaLinkedin className="h-6 w-6"/>
            </a>
            <a
                href="https://github.com/stharanzn"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-12 h-12 rounded-lg bg-stone-800 border border-slate-700 flex items-center justify-center text-white hover:border-amber-500"
                aria-label="GitHub"
            >
                <FaGithub className="h-6 w-6"/>
            </a>
        </div>
    );
};

export default SocialIcons;
