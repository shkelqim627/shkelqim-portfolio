import { useState, useEffect } from 'react';
import './App.css';
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [typedName, setTypedName] = useState('');
  const fullName = 'Shkelqim Osmani';

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Shkelqim-Osmani.pdf';
    link.download = 'Shkelqim-Osmani.pdf';
    link.click();
  };

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      setTypedName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(typeInterval);
    }, 150);
    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
      <div
          className={`${
              darkMode
                  ? 'bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white'
                  : 'bg-gradient-to-br from-white via-gray-100 to-blue-50 text-black'
          } min-h-screen transition-all duration-500 px-6 py-10 font-sans`}
      >
        <div className="max-w-3xl mx-auto space-y-4 space-x-4 font-poppins">
          {/* Toggle Theme */}
          <div className="flex justify-end">
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-4 py-1 border rounded-md text-sm hover:bg-cyan-700 hover:text-white transition"
            >
              Toggle {darkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>

          {/* Header */}
          <div className="text-center space-y-2 transition-opacity duration-1000">
            <h1 className="text-4xl font-bold text-cyan-500">{typedName}</h1>
            <p className="text-lg text-cyan-500">Full-Stack Developer | 19 y/o</p>
            <p className="text-sm italic text-cyan-500">
              Passionate full-stack developer focused on building real-world, user-centered web applications.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center space-y-1">
            <p className="text-sm text-cyan-500">Tetovo, North Macedonia</p>
            <div className="flex justify-center flex-wrap gap-4 text-cyan-500 text-lg">
              <a href="https://github.com/shkelqim627" target="_blank" rel="noreferrer" className="hover:text-black">GitHub</a>
              <a href="https://gitlab.com/Osmanii" target="_blank" rel="noreferrer" className="hover:text-black">GitLab</a>
              <a href="mailto:qimiosmani3@gmail.com" className="hover:text-blue-800">Email</a>
              <a href="https://www.linkedin.com/in/shkelqim-osmani-8206b5227" target="_blank" rel="noreferrer" className="hover:text-black">LinkedIn</a>
            </div>
          </div>

          {/* Skills */}
          <div className={`transition-all duration-500 ${darkMode ? '' : 'text-black'}`}>
            <h2 className="text-xl font-semibold border-b border-cyan-500 pb-1 mb-2">Tech Stack</h2>
            <p className="text-sm leading-relaxed">
              <strong>Languages:</strong> JavaScript, TypeScript, C#, SQL, HTML/CSS<br />
              <strong>Frameworks & Libraries:</strong> React.js, Angular, Node.js, ASP.NET Core, Tailwind CSS, Bootstrap<br />
              <strong>Databases:</strong> MongoDB, PostgreSQL<br />
              <strong>Tools & IDEs:</strong> VS Code, Visual Studio, WebStorm, Rider, Postman, DataGrip, GitHub, GitLab, Vercel, AWS, Atlassian tools<br />
              <strong>Other:</strong> REST APIs, CRUD operations
            </p>
          </div>

          {/* Experience */}
          <div className={`transition-all duration-500 ${darkMode ? '' : 'text-black'}`}>
            <h2 className="text-xl font-semibold border-b border-cyan-500 pb-1 mb-2">Experience</h2>
            <ul className="text-sm space-y-2">
              <li>
                <strong>InnoBee – Junior Web Developer</strong> (Netherlands)<br />
                <em>Nov 2024 – Feb 2025</em><br />
              </li>
              <li>
                <strong>Hexbold – Full-Stack Developer</strong> (Tetovo, North Macedonia)<br />
                <em>Jan 2022 – Oct 2022</em><br />
              </li>
              <li>
                <strong>Gauss School – Software Development Intern</strong> (Tetovo, North Macedonia)<br />
                <em>Aug 2019 – Sep 2021</em><br />
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className={`transition-all duration-500 ${darkMode ? '' : 'text-black'}`}>
            <h2 className="text-xl font-semibold border-b border-cyan-500 pb-1 mb-2">Projects</h2>
            <ul className="text-sm space-y-2">
              <li>
                <strong className="flex items-center gap-1">
                  <a
                      href="https://mobaxlux.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:underline"
                  >
                    MobaxLux
                  </a>
                  <span>- E-Commerce Website</span>
                </strong> (May 2025 – June 2025)<br />
                 Designed and launched a fully functional e-commerce website using WordPress and Elementor<br />
                 Integrated shopping cart, and product catalog management<br />
                 Focused on mobile responsiveness, SEO optimization, and speed performance
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className={`transition-all duration-500 ${darkMode ? '' : 'text-black'}`}>
            <h2 className="text-xl font-semibold border-b border-cyan-500 pb-1 mb-2">Education</h2>
            <p className="text-sm">
              <strong>High School Gymnasium "7 March", Tetovo</strong><br />
              Sep 2021 – May 2025
            </p>
          </div>

          {/* Download CV Button */}
          <div className="flex justify-end pt-2">
            <button
                onClick={downloadCV}
                className={`${
                    darkMode
                        ? 'bg-cyan-500 text-white hover:bg-cyan-700'
                        : 'bg-black text-white hover:bg-blue-700'
                } px-6 py-2 rounded-md transition`}
            >
              Download CV
            </button>
          </div>

          {/* Footer */}
          <footer className={`text-center text-xs pt-6 border-t ${darkMode ? 'border-gray-700 text-gray-400' : 'border-blue-300 text-black'}`}>
            &copy; {new Date().getFullYear()} Shkelqim Osmani
          </footer>

          {/* Vercel Analytics */}
          <Analytics />
        </div>
      </div>
  );
};
export default App;
