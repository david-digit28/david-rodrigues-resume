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

            {/* Description: render phase headers or bullets */}
            <div className="mb-6">
              {(() => {
                const elements: React.ReactNode[] = [];
                let currentPhaseItems: string[] = [];
                let currentPhaseLabel: string | null = null;
                let bulletBuffer: string[] = [];

                const flushBullets = (key: string) => {
                  if (bulletBuffer.length > 0) {
                    elements.push(
                      <ul key={`bullets-${key}`} className="list-none space-y-3 mb-4">
                        {bulletBuffer.map((pt, i) => (
                          <li key={i} className="relative pl-5 text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-indigo-400 dark:bg-indigo-600 rounded-full" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    );
                    bulletBuffer = [];
                  }
                };

                const flushPhase = (key: string) => {
                  if (currentPhaseLabel !== null) {
                    elements.push(
                      <div key={`phase-${key}`} className="smartmove-phase mt-5 mb-4 pl-4 pr-3 pt-3 pb-3 border-l-4 border-indigo-500 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 rounded-r-xl">
                        <h4 className="text-sm font-bold text-indigo-700 dark:text-indigo-300 mb-2 uppercase tracking-wide">{currentPhaseLabel}</h4>
                        <ul className="list-none space-y-2">
                          {currentPhaseItems.map((pt, i) => (
                            <li key={i} className="relative pl-5 text-slate-600 dark:text-slate-400 leading-relaxed text-[14px]">
                              <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-indigo-400 dark:bg-indigo-500 rounded-full" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                    currentPhaseLabel = null;
                    currentPhaseItems = [];
                  }
                };

                job.description.forEach((point, i) => {
                  if (point.startsWith('##PHASE:')) {
                    flushBullets(`pre-phase-${i}`);
                    flushPhase(`${i}`);
                    currentPhaseLabel = point.replace('##PHASE:', '').trim();
                  } else if (currentPhaseLabel !== null) {
                    currentPhaseItems.push(point);
                  } else {
                    bulletBuffer.push(point);
                  }
                });

                flushBullets('end');
                flushPhase('end');

                return elements;
              })()}
            </div>

            <div className="flex flex-wrap gap-2">
              {job.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium">
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
