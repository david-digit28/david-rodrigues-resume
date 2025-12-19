import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { LanguageCode } from '../types';
import { ALL_DATA } from '../constants';

interface SDGBadgeProps {
  language: LanguageCode;
}

const SDGBadge: React.FC<SDGBadgeProps> = ({ language }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const data = ALL_DATA[language];

  return (
    <div className="relative inline-flex items-center justify-center">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full mb-3 w-64 p-3 bg-slate-900 text-white text-xs leading-relaxed rounded-xl shadow-2xl z-50 pointer-events-none"
          >
            {data.ui.sdgTooltip}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-8 border-transparent border-t-slate-900" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(!showTooltip)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={data.ui.sdgBadge}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-300 dark:border-emerald-700 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 hover:shadow-lg hover:shadow-emerald-500/10 transition-all cursor-help overflow-hidden group"
      >
        <motion.div
          animate={showTooltip ? { scale: [1, 1.2, 1] } : {}}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors"
        >
          <Leaf size={16} fill="currentColor" fillOpacity={0.1} />
        </motion.div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
          {data.ui.sdgBadge}
        </span>
      </motion.button>
    </div>
  );
};

export default SDGBadge;