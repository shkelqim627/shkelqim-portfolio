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

interface SkillsProps {
  darkMode: boolean;
}

const Skills = ({ darkMode }: SkillsProps) => {
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
    <section id="about" className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} py-20 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          [ My Skills ]
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="text-center">
            <div className={`w-20 h-20 mx-auto mb-6 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-white'} flex items-center justify-center shadow-lg`}>
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
            <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Creating beautiful, responsive interfaces with React.js, Vue.js, Angular, JavaScript, TypeScript, and modern CSS frameworks like Tailwind CSS and Bootstrap.
            </p>
          </div>

          <div className="text-center">
            <div className={`w-20 h-20 mx-auto mb-6 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-white'} flex items-center justify-center shadow-lg`}>
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Backend Development</h3>
            <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Building robust server-side applications with Node.js, .NET Core, C# ASP.NET Core, and PHP. Experienced in RESTful API design, database architecture (MongoDB, PostgreSQL), and enterprise-level solutions.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">[ Skills ]</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`${darkMode ? 'bg-gray-900' : 'bg-white'} p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  <IconComponent 
                    className="text-4xl mb-2 mx-auto" 
                    style={{ color: darkMode ? skill.color : skill.color }}
                  />
                  <p className="font-semibold">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
