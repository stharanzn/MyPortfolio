import React, {useEffect, useState} from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Scroll active section tracker
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = '';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = 80;
            const top = targetElement.offsetTop - offset;

            window.scrollTo({top, behavior: 'smooth'});

            // Close mobile menu on click
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        {href: '#home', label: 'Home'},
        {href: '#projects', label: 'Projects'},
        {href: '#skills', label: 'Skills'},
        {href: '#about', label: 'About'},
        {href: '#contact', label: 'Contact'},
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900/90 backdrop-blur-md border-b border-stone-800">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <div
                        className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center mr-3">
                        {/* Optional SVG icon */}
                        <img src={logo} alt="Logo"/>
                    </div>
                    <h1 className="text-xl font-bold text-white">
                        RANJAN <span className="text-amber-500">SHRESTHA</span>
                    </h1>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleLinkClick(e, item.href)}
                            className={`nav-link ${
                                activeSection === item.href.slice(1)
                                    ? 'text-white font-bold active'
                                    : 'text-stone-400'
                            } transition duration-300 hover:text-amber-400`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Hamburger button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-stone-900 border-b border-stone-800">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className={`block px-3 py-2 rounded-md ${
                                    activeSection === item.href.slice(1)
                                        ? 'text-white bg-stone-800'
                                        : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
