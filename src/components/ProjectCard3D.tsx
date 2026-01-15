import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Project } from '../data/projects'

interface ProjectCard3DProps {
  project: Project;
  index: number;
}

export default function ProjectCard3D({ project, index }: ProjectCard3DProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/projects/${project.id}`)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <div
        onClick={handleCardClick}
        className="block bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-purple-500 cursor-pointer h-[500px] flex flex-col"
      >
        {/* Card Front */}
        <div className="relative h-48 overflow-hidden bg-gray-700">
          <motion.img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 2 : 0
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Floating Tech Tags */}
          <div className="absolute top-2 right-2">
            {project.technologies.slice(0, 2).map((tech, techIndex) => (
              <motion.span
                key={tech}
                className="block bg-purple-600/80 text-white text-xs px-2 py-1 rounded-full mb-1 backdrop-blur-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0, 
                  x: isHovered ? 0 : 20 
                }}
                transition={{ duration: 0.2, delay: techIndex * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="p-6 flex-1 flex flex-col"
          animate={{
            y: isHovered ? -5 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3 
            className="text-xl font-bold mb-2 font-sora text-white"
            animate={{
              color: isHovered ? '#ffffff' : '#ffffff'
            }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
          
          <motion.p 
            className="text-sm mb-3 text-gray-400 font-inter"
            animate={{
              opacity: isHovered ? 0.8 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            {project.technologies.join(' • ')}
          </motion.p>
          
          <motion.p 
            className="text-sm mb-4 text-gray-300 font-inter flex-1 line-clamp-3"
            animate={{
              opacity: isHovered ? 0.9 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            {project.description}
          </motion.p>
          
          <button
            onClick={handleCardClick}
            className="text-purple-400 hover:text-purple-300 font-medium text-sm font-inter inline-flex items-center gap-1 bg-transparent border-none cursor-pointer"
          >
            View Details 
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
        
        {/* 3D Shadow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent rounded-2xl pointer-events-none"
          animate={{
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}
