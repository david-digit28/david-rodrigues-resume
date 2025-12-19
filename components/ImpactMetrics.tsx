import React from 'react';
import { motion } from 'framer-motion';
import { Stat } from '../types';

interface ImpactMetricsProps {
  stats: Stat[];
}

const ImpactMetrics: React.FC<ImpactMetricsProps> = ({ stats }) => {
  return (
    <section className="relative z-20 -mt-10 mb-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Changed md:grid-cols-4 to lg:grid-cols-4 to allow 2 cols on tablets */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-800">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center relative group"
            >
              <div className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500 dark:from-indigo-400 dark:to-emerald-400 mb-2">
                 {stat.prefix}{stat.value}{stat.suffix}
              </div>
              <div className="text-sm md:text-base font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                {stat.label}
              </div>
              
              {/* Mobile/Tablet: Vertical divider after 1st and 3rd item (index % 2 === 0 means 0 and 2) */}
              {index % 2 === 0 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-200 dark:bg-slate-800 lg:hidden" />
              )}
              
              {/* Desktop: Vertical divider for all except last */}
              {index < 3 && (
                <div className="hidden lg:block absolute right-[-1rem] top-1/2 -translate-y-1/2 w-px h-16 bg-slate-200 dark:bg-slate-800" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;