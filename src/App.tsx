import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy loading components for better performance
const Home = lazy(() => import('./pages/Home'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

const App = () => {
    // FIX: Set darkMode to true as the default state
    const [darkMode, setDarkMode] = useState(true);
    const [activeSection, setActiveSection] = useState('home');

    // Effect to toggle the 'dark' class on the root HTML element
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // Function to smoothly scroll to a section by its ID
    const scrollToSection = (id: string) => {
        // FIX: Set the activeSection state immediately upon clicking
        setActiveSection(id);

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Router>
            <ScrollToTop />
            {/* Apply base dark/light mode styles to the main container */}
            <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>

                {/* Pass setActiveSection to the Navbar to allow immediate highlight on click */}
                <Navbar
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    activeSection={activeSection}
                    scrollToSection={scrollToSection}
                />

                <Suspense fallback={
                    <div className="flex items-center justify-center min-h-[60vh]">
                        <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                }>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home darkMode={darkMode} setActiveSection={setActiveSection} />}
                        />
                        <Route
                            path="/projects"
                            element={<ProjectsPage darkMode={darkMode} />}
                        />
                        <Route
                            path="/projects/:id"
                            element={<ProjectDetail darkMode={darkMode} />}
                        />
                    </Routes>
                </Suspense>

                <Footer darkMode={darkMode} />

                <Analytics />
            </div>
        </Router>
    );
};

export default App;