import { useState, useEffect } from 'react';
import profileImage from '../assets/2.jpeg';

interface HeroProps {
  darkMode: boolean;
}

const Hero = ({ darkMode }: HeroProps) => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'Hello, World!';
  
  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;
    const pauseBeforeDelete = 2000;
    const pauseBeforeType = 500;

    const timeout = setTimeout(() => {
      if (!isDeleting && typedText === fullText) {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
      } else if (isDeleting && typedText === '') {
        // Pause before starting to type again
        setTimeout(() => setIsDeleting(false), pauseBeforeType);
      } else if (isDeleting) {
        // Delete one character
        setTypedText(fullText.substring(0, typedText.length - 1));
      } else {
        // Type one character
        setTypedText(fullText.substring(0, typedText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting]);

  return (
    <section id="home" className="max-w-6xl mx-auto px-6 py-2 pb-4 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-20">
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 min-h-[4.5rem] md:min-h-[5rem]">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            I'm <span className="text-yellow-500">Shkelqim Osmani</span>
          </h2>

            <p className={`mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm a full-stack developer from Tetovo, North Macedonia.
                I create dynamic, user-centered web applications using modern technologies.
                Passionate about clean code, responsive design, and bringing ideas to life through technology.
            </p>

          <div className="flex justify-center md:justify-start gap-6 mb-8">
            <a
              href="https://github.com/shkelqim627"
              target="_blank"
              rel="noreferrer"
              className={`w-12 h-12 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center transition-colors`}
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/shkelqim-osmani-8206b5227"
              target="_blank"
              rel="noreferrer"
              className={`w-12 h-12 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center transition-colors`}
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://gitlab.com/Osmanii"
              target="_blank"
              rel="noreferrer"
              className={`w-12 h-12 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center transition-colors`}
              aria-label="GitLab"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.423-.73-.423-.867 0L16.418 9.45H7.582L4.919 1.263C4.783.84 4.185.84 4.05 1.26L1.386 9.449.044 13.587c-.121.375.014.789.331 1.023L12 23.054l11.625-8.443c.318-.235.453-.647.33-1.024"/>
              </svg>
            </a>
            <a
              href="mailto:qimiosmani3@gmail.com"
              className={`w-12 h-12 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center transition-colors`}
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          
          <a 
            href="/Shkelqim-Osmani.pdf"
            download="Shkelqim-Osmani.pdf"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download My CV
          </a>
        </div>

        <div className="flex-shrink-0 order-1 md:order-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            <img 
              src={profileImage} 
              alt="Shkelqim Osmani" 
              className="relative w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-900 transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
