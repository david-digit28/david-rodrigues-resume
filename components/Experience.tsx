import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { Experience as ExperienceType } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  const { data } = useLanguage();

  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
          <Briefcase className="text-indigo-600 dark:text-indigo-400" /> {data.ui.experienceTitle}
        </h2>
        <div className="h-1 w-20 bg-indigo-500 rounded-full" />
      </motion.div>

      <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
        {experience.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-slate-50 dark:ring-slate-900" />
            
            {/* Switched to lg:flex-row to stack title/company above date/location on tablets */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{job.role}</h3>
                <div className="text-lg text-emerald-600 dark:text-emerald-400 font-medium mt-1">{job.company}</div>
              </div>
              <div className="flex flex-col lg:items-end mt-2 lg:mt-0 text-sm">
                 <span className="font-mono text-slate-500 dark:text-slate-400 font-semibold">{job.period}</span>
                 <span className="flex items-center gap-1 text-slate-400 dark:text-slate-500 mt-1">
                    <MapPin size={14} /> {job.location}
                 </span>
              </div>
            </div>
            
            <ul className="list-none space-y-3 mb-6">
              {job.description.map((point, i) => (
                <li key={i} className="relative pl-5 text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                  <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-indigo-400 dark:bg-indigo-600 rounded-full" />
                  {point}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {job.technologies.map(tech => (
                <span key={tech} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;