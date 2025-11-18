import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  activeSection?: string;
  scrollToSection?: (id: string) => void;
}

const Navbar = ({ darkMode, setDarkMode, activeSection = 'home', scrollToSection }: NavbarProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleNavClick = (id: string) => {
    if (isHomePage && scrollToSection) {
      scrollToSection(id);
    }
  };

  return (
    <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} fixed top-0 left-0 right-0 z-50 shadow-sm transition-colors duration-300`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold">
          <Link to="/" className={darkMode ? 'text-white' : 'text-gray-900'}>
            Shkelqim
          </Link>
        </div>
        
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 text-sm">
            <li>
              <Link
                to="/"
                onClick={() => handleNavClick('home')}
                className={`${isHomePage && activeSection === 'home' ? 'text-yellow-500' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
              >
                Home
              </Link>
            </li>
            <li>
              {isHomePage ? (
                <button
                  onClick={() => handleNavClick('about')}
                  className={`${activeSection === 'about' ? 'text-yellow-500' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
                >
                  About Me
                </button>
              ) : (
                <Link
                  to="/#about"
                  className={darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}
                >
                  About Me
                </Link>
              )}
            </li>
            <li>
              <Link
                to="/projects"
                className={`${location.pathname === '/projects' ? 'text-yellow-500' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              {isHomePage ? (
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`${activeSection === 'contact' ? 'text-yellow-500' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
                >
                  Experience
                </button>
              ) : (
                <Link
                  to="/#contact"
                  className={darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}
                >
                  Contact
                </Link>
              )}
            </li>
          </ul>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} relative w-14 h-7 rounded-full transition-colors duration-300`}
            aria-label="Toggle dark mode"
          >
            <div className={`${darkMode ? 'translate-x-7' : 'translate-x-1'} absolute top-1 left-0 w-5 h-5 bg-white rounded-full transition-transform duration-300 flex items-center justify-center`}>
              {darkMode ? (
                <svg className="w-3 h-3 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
