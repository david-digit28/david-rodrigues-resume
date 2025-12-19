import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectsProps {
  projects: Project[];
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { data } = useLanguage();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-indigo-500/50 shadow-md dark:shadow-none transition-colors duration-300 flex flex-col h-fit"
    >
      <div className="h-48 overflow-hidden relative shrink-0">
        <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          {project.link && (
            <a href={project.link} className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        <div className="flex-grow">
           {/* Always show the first paragraph/point */}
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-3">
              {project.description[0]}
            </p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 overflow-hidden"
                >
                  {project.description.slice(1).map((desc, i) => (
                    <p key={i} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {desc}
                    </p>
                  ))}
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center justify-center gap-2 w-full py-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          {isExpanded ? (
            <>{data.ui.showLess} <ChevronUp size={14} /></>
          ) : (
            <>{data.ui.viewDetails} <ChevronDown size={14} /></>
          )}
        </button>
      </div>
    </motion.div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { data } = useLanguage();

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
          <Code className="text-indigo-600 dark:text-indigo-400" /> {data.ui.projectsTitle}
        </h2>
        <div className="h-1 w-20 bg-indigo-500 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;