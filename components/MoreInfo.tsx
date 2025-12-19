import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Languages, Heart, Calendar } from 'lucide-react';
import { ResumeData } from '../types';

interface MoreInfoProps {
  data: ResumeData;
}

const MoreInfo: React.FC<MoreInfoProps> = ({ data }) => {
  return (
    <section id="qualifications" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
          <GraduationCap className="text-indigo-600 dark:text-indigo-400" /> {data.ui.qualificationsTitle}
        </h2>
        <div className="h-1 w-20 bg-indigo-500 rounded-full" />
      </motion.div>

      {/* Main Grid: Education, Certs, Languages */}
      {/* Changed md:grid-cols-3 to lg:grid-cols-3 to stack on tablets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-indigo-500/10 transition-all flex flex-col"
        >
          <div className="flex items-center gap-2 mb-6 text-indigo-600 dark:text-indigo-400">
             <GraduationCap size={24} />
             <h3 className="font-bold text-lg uppercase tracking-wider">{data.ui.education}</h3>
          </div>
          
          <div className="space-y-6 flex-grow">
            {data.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col group">
                    <div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight mb-1">{edu.degree}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{edu.school}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-500">{edu.location}</p>
                    </div>
                    <div className="mt-3 self-start px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        {edu.period}
                    </div>
                </div>
            ))}
          </div>
        </motion.div>

         {/* Certificates & Badges Card */}
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl p-6 text-white relative overflow-hidden flex flex-col"
        >
           {/* Decor */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
           
           <div className="flex items-center gap-2 mb-6 relative z-10">
             <Award size={24} className="text-white/80" />
             <h3 className="font-bold text-lg uppercase tracking-wider">{data.ui.certificates}</h3>
          </div>

          <ul className="space-y-4 relative z-10 flex-grow">
            {data.certificates.map((cert, idx) => (
                <li key={idx} className="border-b border-white/20 last:border-0 pb-3 last:pb-0">
                    <p className="font-semibold text-sm leading-tight">{cert.name}</p>
                    <div className="flex justify-between items-center mt-1 text-white/70 text-xs">
                        <span>{cert.issuer}</span>
                        <span className="flex items-center gap-1"><Calendar size={10} /> {cert.date}</span>
                    </div>
                </li>
            ))}
          </ul>
        </motion.div>

        {/* Languages Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-emerald-500/10 transition-all flex flex-col"
        >
          <div className="flex items-center gap-2 mb-6 text-emerald-600 dark:text-emerald-400">
             <Languages size={24} />
             <h3 className="font-bold text-lg uppercase tracking-wider">{data.ui.languages}</h3>
          </div>

          <div className="space-y-4 flex-grow">
            {data.languages.map((lang, idx) => (
                <div key={idx} className="flex justify-between items-center">
                    <span className="font-medium text-sm text-slate-700 dark:text-slate-300">{lang.name}</span>
                    <div className="flex gap-1">
                        {[1, 2, 3].map((dot) => (
                            <div 
                                key={dot} 
                                className={`w-2 h-2 rounded-full ${
                                    (lang.level === 'Fluent' && dot <= 3) || 
                                    (lang.level === 'Proficient' && dot <= 2) || 
                                    (lang.level === 'Intermediate' && dot <= 2) || 
                                    (lang.level === 'Basic' && dot <= 1)
                                    ? 'bg-emerald-500' 
                                    : 'bg-slate-200 dark:bg-slate-700'
                                }`} 
                            />
                        ))}
                    </div>
                </div>
            ))}
          </div>
        </motion.div>

        {/* Interests Card - Full Width Row */}
        {/* Changed md:col-span-3 to lg:col-span-3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col lg:flex-row items-center lg:items-start gap-6"
        >
          <div className="flex items-center gap-2 shrink-0 text-rose-500 dark:text-rose-400 mb-2 md:mb-0">
             <Heart size={24} />
             <h3 className="font-bold text-xl uppercase tracking-wider">{data.ui.interests}</h3>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 w-full">
            {data.interests.map((interest, idx) => (
                <span 
                    key={idx} 
                    className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700/50 hover:scale-105 transition-transform cursor-default"
                >
                    {interest}
                </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MoreInfo;