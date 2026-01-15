import { projects } from '../data/projects';
import ProjectCard3D from '../components/ProjectCard3D';

const ProjectsPage = () => {
  return (
    <main className="pt-20 min-h-screen bg-gray-900">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1 
            className="text-5xl font-bold text-center mb-4 font-sora text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            All <span className="text-purple-400">Projects</span>
          </motion.h1>
          <motion.p 
            className="text-center mb-16 text-gray-300 font-inter"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore my portfolio of web development projects
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
