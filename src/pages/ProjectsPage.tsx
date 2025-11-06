import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

interface ProjectsPageProps {
  darkMode: boolean;
}

const ProjectsPage = ({ darkMode }: ProjectsPageProps) => {
  return (
    <main className="pt-20 min-h-screen">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-4">
            All <span className="text-yellow-500">Projects</span>
          </h1>
          <p className={`text-center mb-16 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore my portfolio of web development projects
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl overflow-hidden shadow-xl transition-transform hover:scale-105`}
              >
                <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img 
                    src={project.image} 
                    alt={project.title}
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
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
