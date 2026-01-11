import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard3D from './ProjectCard3D';

interface ProjectsProps {
  limit?: number;
}

const Projects = ({ limit = 3 }: ProjectsProps) => {
  const displayProjects = projects.slice(0, limit);
  const navigate = useNavigate();

  function gotoProjects() {
    navigate("/projects");
  }
  
  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 font-sora text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProjects.map((project, index) => (
            <ProjectCard3D 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
        
        <div className="flex flex-col justify-center items-center w-full">
          <motion.button
            onClick={gotoProjects}
            className="mt-10 w-52 h-14 inline-flex cursor-pointer bg-purple-600 text-white items-center justify-center px-3 py-3 rounded-full font-semibold text-lg border-0 transition-all hover:bg-purple-700 font-inter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
