import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SDGBadge from './SDGBadge';

const Footer: React.FC = () => {
  const { data, language } = useLanguage();

  return (
    <footer className="w-full py-16 px-6 mt-10 border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-slate-500 dark:text-slate-600 text-sm">
        
        {/* Left Column: Privacy */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <p className="text-xs opacity-80 leading-relaxed max-w-xs mx-auto md:mx-0">
            {data.ui.privacyNotice}
          </p>
        </div>

        {/* Center Column: SDG Badge */}
        <div className="flex-shrink-0 flex items-center justify-center order-1 md:order-2">
           <SDGBadge language={language} />
        </div>

        {/* Right Column: Copyright */}
        <div className="flex-1 text-center md:text-right order-3">
          <p className="font-medium">
            © {new Date().getFullYear()} <span className="text-slate-900 dark:text-slate-300 font-bold">{data.name}</span>
          </p>
          <p className="text-[11px] opacity-60 mt-1 uppercase tracking-widest font-mono">
            {data.ui.rightsReserved}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;