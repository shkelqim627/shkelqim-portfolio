import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/2.jpeg';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'Hello, World!';
  
  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;
    const pauseBeforeDelete = 2000;
    const pauseBeforeType = 500;

    const timeout = setTimeout(() => {
      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
      } else if (isDeleting && typedText === '') {
        setTimeout(() => setIsDeleting(false), pauseBeforeType);
      } else if (isDeleting) {
        setTypedText(fullText.substring(0, typedText.length - 1));
      } else {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting]);

  return (
    <section id="home" className="max-w-6xl mx-auto px-6 py-2 pb-4 md:py-20 relative">
      <AnimatedBackground />
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20 relative z-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-sora text-white">
            {typedText}
            <span className="animate-pulse text-purple-400">|</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 font-inter text-gray-200">
            I'm <span className="text-purple-400">Shkelqim Osmani</span>
          </h2>

          <p className="mb-8 leading-relaxed text-gray-300 font-inter">
            Passionate full-stack developer with expertise in React, Node.js, and modern web technologies. 
            I create elegant, efficient, and user-friendly applications that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
                href="/Shkelqim-Osmani.pdf"
                download="Shkelqim_Osmani_CV.pdf"
                className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-all font-inter"
            >
              Download My CV
            </a>
            <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-purple-600 text-purple-400 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all font-inter"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
            <motion.div
                className="w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
              <img
                src={profileImage}
                alt="Shkelqim Osmani"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
