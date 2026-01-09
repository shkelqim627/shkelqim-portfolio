import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useNavigate } from "react-router-dom";

interface ProjectsProps {
  darkMode: boolean;
  limit?: number;
}

const Projects = ({ darkMode, limit = 3 }: ProjectsProps) => {
  const displayProjects = projects.slice(0, limit);
    const navigate = useNavigate();

    function gotoProjects() {
        navigate("/projects");
    }
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <div className="flex flex-col justify-center items-center w-full">


          <button
              onClick={gotoProjects}
              className="mt-10 w-52 h-14 inline-flex cursor-pointer bg-yellow-500 items-center justify-center px-3 py-3 rounded-full font-semibold text-lg  border-0 transition-all"
          >
              View All Projects
          </button>
          </div>


      </div>
    </section>
  );
};

export default Projects;
