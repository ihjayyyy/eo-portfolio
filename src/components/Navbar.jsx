import { useState, useEffect, useContext } from 'react'
import ThemeToggler from './ThemeToggler'
import { ThemeContext } from '../context/ThemeContext'

function Navbar({ menuOpen, setMenuOpen }) {
    const { theme } = useContext(ThemeContext);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'contact'];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom > 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -64; 
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({ top: y, behavior: 'smooth' });
            history.pushState(null, '', `#${sectionId}`); // Update the URL hash
        }
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    return (
        <>
            <nav className={`fixed top-0 w-full z-40 backdrop-blur-lg border-b shadow-lg theme-transition
            ${theme === 'dark'
                    ? 'bg-[rgba(10,10,10,0.8)] border-white/10'
                    : 'bg-[rgba(255,255,255,0.8)] border-black/10'}`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">

                        <a href="#home" className={`cursor-pointer font-mono text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            EO<span className="text-sky-500">.DEV</span>
                        </a>

                        <div className="md:hidden">
                            <button
                                className={`p-2 rounded-md ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                                onClick={() => setMenuOpen((prev) => !prev)}>
                                ☰
                            </button>
                        </div>

                        {/* Desktop navigation */}
                        <div className="hidden md:flex space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.id);
                                    }}
                                    className={`cursor-pointer relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                                        activeSection === item.id
                                            ? `${theme === 'dark' ? 'bg-sky-500 text-white' : 'bg-sky-200 text-sky-900'} font-bold`
                                            : `${theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        <div className="hidden md:block">
                            <ThemeToggler />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile menu overlay */}
            {menuOpen && (
                <div className={`fixed inset-0 z-40 ${theme === 'dark' ? 'bg-black' : 'bg-white'} flex flex-col items-center justify-center space-y-8 md:hidden`}>

                    {/* Close button */}
                    <button
                        className={`absolute top-4 right-4 text-3xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        ✕
                    </button>

                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.id);
                            }}
                            className={`text-xl px-4 py-2 rounded-md ${
                                activeSection === item.id
                                    ? `${theme === 'dark' ? 'bg-sky-500 text-white' : 'bg-sky-200 text-sky-900'} font-bold`
                                    : `${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`
                            }`}
                        >
                           {item.label}
                        </button>
                    ))}

                    <div className="mt-8">
                        <ThemeToggler />
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar;
