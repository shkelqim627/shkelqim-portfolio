import { 
  FaReact, 
  FaVuejs, 
  FaNodeJs, 
  FaAngular, 
  FaWordpress 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiSharp,
  SiDotnet,
  SiJavascript
} from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: FaVuejs, name: 'Vue.js', color: '#42B883' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    { icon: FaAngular, name: 'Angular', color: '#DD0031' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
    { icon: SiDotnet, name: '.NET Core', color: '#512BD4' },
    { icon: FaWordpress, name: 'WordPress', color: '#21759B' },
    { icon: SiSharp, name: 'C#', color: '#239120' },
  ];

  return (
    <section id="about" className="bg-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 font-sora text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
           My Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-700 p-4 flex items-center justify-center shadow-lg border border-gray-600"
              whileHover={{ 
                scale: 1.1, 
                rotate: 360,
                boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3), 0 10px 10px -5px rgba(139, 92, 246, 0.2)"
              }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 font-sora text-white">Frontend Development</h3>
            <p className="leading-relaxed text-gray-300 font-inter">
              Creating beautiful, responsive interfaces with React.js, Vue.js, Angular, JavaScript, TypeScript, and modern CSS frameworks like Tailwind CSS and Bootstrap.
            </p>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-700 p-4 flex items-center justify-center shadow-lg border border-gray-600"
              whileHover={{ 
                scale: 1.1, 
                rotate: -360,
                boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3), 0 10px 10px -5px rgba(139, 92, 246, 0.2)"
              }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 font-sora text-white">Backend Development</h3>
            <p className="leading-relaxed text-gray-300 font-inter">
              Building robust server-side applications with Node.js, .NET Core, C# ASP.NET Core, and PHP. Experienced in RESTful API design, database architecture (MongoDB, PostgreSQL), and enterprise-level solutions.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center font-sora text-white"> Skills </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="bg-gray-700 p-4 rounded-lg text-center shadow-md border border-gray-600 hover:shadow-lg hover:border-purple-500 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3), 0 10px 10px -5px rgba(139, 92, 246, 0.2)"
                  }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent 
                      className="text-4xl mb-2 mx-auto" 
                      style={{ color: skill.color }}
                    />
                  </motion.div>
                  <p className="font-semibold text-white font-inter">{skill.name}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
