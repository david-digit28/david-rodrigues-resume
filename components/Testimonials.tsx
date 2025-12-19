import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const { data } = useLanguage();

  return (
    <section id="endorsements" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          {data.ui.endorsementsTitle}
        </h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative hover:shadow-lg dark:hover:shadow-emerald-500/10 transition-shadow"
          >
            <Quote className="absolute top-8 left-8 text-indigo-50 dark:text-indigo-900/20 transform -scale-x-100" size={64} />
            
            <div className="relative z-10">
              <p className="text-lg text-slate-700 dark:text-slate-300 italic mb-6 leading-relaxed">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{t.author}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;