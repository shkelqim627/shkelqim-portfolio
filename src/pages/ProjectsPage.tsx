import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard3D project={project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
