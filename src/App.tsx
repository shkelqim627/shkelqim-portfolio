import React, { useState, useEffect } from 'react';
import './App.css';
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [typedName, setTypedName] = useState('');
  const fullName = 'Shkelqim Osmani';

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/download.pdf';
    link.download = 'Shkelqim_Osmani_CV.pdf';
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
      <div className="max-w-3xl mx-auto space-y-4 space-x-4">
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
            Currently building an online university project based on UoPeople CS program.
          </p>
        </div>

        {/* Contact */}
        <div className="text-center space-y-1">
          <p className="text-sm text-cyan-500">Tetovo, North Macedonia</p>
          <div className="flex justify-center flex-wrap gap-4 text-cyan-500 text-lg">
            <a href="https://github.com/shkelqim627" target="_blank" className="hover:text-black">GitHub</a>
            <a href="https://gitlab.com/Osmanii" target="_blank" className="hover:text-black">GitLab</a>
            <a href="mailto:qimiosmani3@gmail.com" className="hover:text-blue-800">Email</a>
            <a href="https://www.linkedin.com/in/shkelqim-osmani-8206b5227" target="_blank" className="hover:text-black">LinkedIn</a>
          </div>
        </div>

        {/* Skills */}
        <div className={`transition-all duration-500 ${darkMode ? '' : 'text-black'}`}>
          <h2 className="text-xl font-semibold border-b border-cyan-500 pb-1 mb-2">Tech Stack</h2>
          <p className="text-sm leading-relaxed">
            JavaScript, Python, C#, Java, HTML/CSS | React, Vue, ASP.NET Core, Node.js, Express | MongoDB, PostgreSQL | Tailwind, Ionic, Bootstrap
          </p>
        </div>

        {/* Experience */}
        <div className={`transition-all duration-500 ${darkMode ? '' : 'text-black'}`}>
          <h2 className="text-xl font-semibold border-b border-cyan-500 pb-1 mb-2">Experience</h2>
          <ul className="text-sm space-y-2">
            <li>
              <strong>InnoBee</strong> – Junior Web Dev (Nov 2024 – Feb 2025)<br />Flask, MongoDB, React TypeScript
            </li>
            <li>
              <strong>Flazzy Clo</strong> – Full-Stack Dev (Sep 2024 – Present)<br />MERN stack, Stripe payments, Admin Panel
            </li>
            <li>
              <strong>Hexbold</strong> – Full-Stack Dev (Jan 2022 – Oct 2022)<br />Angular + ASP.NET Core, GitLab
            </li>
            <li>
              <strong>Gauss School</strong> – Intern (2019 – 2021)<br />HTML/CSS, WordPress, JS
            </li>
          </ul>
        </div>

        {/* Download CV Button */}
        <div className="flex justify-end pt-4">
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
