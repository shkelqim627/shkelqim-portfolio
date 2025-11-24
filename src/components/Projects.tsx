import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

interface ProjectsProps {
  darkMode: boolean;
  limit?: number;
}

const Projects = ({ darkMode, limit = 3 }: ProjectsProps) => {
  const displayProjects = projects.slice(0, limit);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          [ My Work ]
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl overflow-hidden shadow-xl transition-transform hover:scale-105`}
            >
              <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.technologies.join(' • ')}
                </p>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                <span className="text-yellow-500 hover:text-yellow-600 font-medium text-sm">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {limit && limit < projects.length && (
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow inline-block"
            >
              Show All Works
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
