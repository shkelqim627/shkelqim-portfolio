import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main className="pt-20 min-h-screen">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mb-8 text-slate-400 hover:text-slate-200 transition-colors font-inter"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          <div className="rounded-2xl overflow-hidden mb-8">
            <div className="h-64 md:h-96 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-800 p-8 border border-gray-700">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 font-sora text-white">{project.title}</h1>
              <p className="text-xl text-slate-400 font-inter">{project.category}</p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-sora text-white">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700 px-4 py-2 rounded-full text-sm font-medium text-slate-300 font-inter"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-sora text-white">Overview</h2>
            <p className="text-lg leading-relaxed text-slate-300 font-inter">
              {project.fullDescription}
            </p>
          </div>
          {project.impact && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-sora text-white">Impact</h2>
              <div className="bg-gray-800 border-l-4 border-purple-500 p-6 rounded">
                <p className="text-lg text-slate-300 font-inter">
                  {project.impact}
                </p>
              </div>
            </div>
          )}
          {project.features && project.features.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-sora text-white">Key Features</h2>
              <ul className="space-y-3 text-slate-300 font-inter">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Live Site
              </a>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors inline-flex items-center gap-2 font-inter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
