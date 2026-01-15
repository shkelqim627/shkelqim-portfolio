import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedNavLink from './AnimatedNavLink';
import signatureImage from '../assets/signature.png';

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <header className="bg-gray-900/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-800 transition-all duration-300">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <motion.div 
                    className="text-xl font-semibold"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <Link
                        to="/"
                        className="flex items-center hover:opacity-100 transition-opacity"
                    >
                        <img 
                            src={signatureImage} 
                            alt="Shkelqim" 
                            className="h-8 w-auto invert filter brightness-100 hover:brightness-110 transition-all"
                        />
                    </Link>
                </motion.div>

                <div className="flex items-center gap-8">
                    {/* Desktop navigation */}
                    <ul className="hidden md:flex gap-8 text-sm font-inter">
                        <li>
                            <AnimatedNavLink
                                to="/"
                                isActive={isHomePage}
                            >
                                Home
                            </AnimatedNavLink>
                        </li>

                        <li>
                            <AnimatedNavLink
                                to="/projects"
                                isActive={location.pathname === '/projects'}
                            >
                                Portfolio
                            </AnimatedNavLink>
                        </li>
                        {isHomePage && (
                            <>
                                <li>
                                    <AnimatedNavLink
                                        to="#about"
                                        onClick={() => scrollToSection('about')}
                                    >
                                        About
                                    </AnimatedNavLink>
                                </li>
                                <li>
                                    <AnimatedNavLink
                                        to="#education"
                                        onClick={() => scrollToSection('education')}
                                    >
                                        Experience
                                    </AnimatedNavLink>
                                </li>
                                <li>
                                    <AnimatedNavLink
                                        to="#contact"
                                        onClick={() => scrollToSection('contact')}
                                    >
                                        Contact
                                    </AnimatedNavLink>
                                </li>
                            </>
                        )}
                    </ul>
                    
                    {/* Mobile navigation - only show Projects */}
                    <ul className="md:hidden text-sm font-inter">
                        <li>
                            <AnimatedNavLink
                                to="/projects"
                                isActive={location.pathname === '/projects'}
                            >
                                Portfolio
                            </AnimatedNavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;