import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import './App.css';


import Navbar from './components/Navbar';
import Footer from './components/Footer';


import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
        
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

        <Footer darkMode={darkMode} />
        
        <Analytics />
      </div>
    </Router>
  );
};

export default App;
