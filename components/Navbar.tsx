import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageCode } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { language, setLanguage, data } = useLanguage();

  const navItems = [
    { name: data.ui.skillsTitle, href: '#skills' },
    { name: data.ui.experienceTitle, href: '#experience' },
    { name: data.ui.qualificationsTitle, href: '#qualifications' },
    { name: data.ui.projectsTitle, href: '#projects' },
    { name: data.ui.endorsementsTitle, href: '#endorsements' },
  ];

  const languages: { code: LanguageCode; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu immediately
    setMobileMenuOpen(false);

    // Handle "Home" link specifically
    if (href === '#root' || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      // Use a small timeout to allow the mobile menu to close and layout to stabilize
      // before triggering the scroll. This fixes issues on some touch devices.
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLanguageChange = (code: LanguageCode) => {
    setLanguage(code);
    setLangMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-800/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" onClick={(e) => scrollToSection(e, '#root')} className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            David<span className="text-indigo-600 dark:text-indigo-400">.</span>
          </a>

          {/* Desktop Menu - visible only on LG screens and up */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pl-4 border-l border-slate-200 dark:border-slate-700 flex items-center gap-2 relative">
               {/* Language Dropdown */}
               <div className="relative">
                  <button 
                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                    className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                  >
                      <Globe size={18} />
                      <span className="text-xs font-semibold uppercase">{language}</span>
                      <ChevronDown size={12} />
                  </button>

                  <AnimatePresence>
                    {langMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                      >
                        <div className="py-2">
                            {languages.map((lang) => (
                              <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className={`w-full text-left px-4 py-2 text-sm flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors ${
                                  language === lang.code ? 'text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/20' : 'text-slate-600 dark:text-slate-300'
                                }`}
                              >
                                <span className="text-lg">{lang.flag}</span>
                                {lang.label}
                              </button>
                            ))}
                        </div>
                        
                        {/* Translation Disclaimer */}
                        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700">
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-tight italic">
                            {data.ui.translationDisclaimer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>

               <ThemeToggle />
            </div>
          </div>

          {/* Mobile/Tablet Menu Controls - visible up to LG screens */}
          <div className="flex items-center gap-4 lg:hidden">
             <button 
                onClick={() => setLanguage(language === 'en' ? 'fr' : language === 'fr' ? 'de' : language === 'de' ? 'es' : 'en')}
                className="text-slate-600 dark:text-slate-300 flex items-center gap-1 font-mono font-bold text-sm" 
              >
                 <Globe size={20} /> {language.toUpperCase()}
             </button>
            <ThemeToggle />
            <button
              className="text-slate-600 dark:text-slate-300 p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile/Tablet Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[70px] left-0 right-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 lg:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-lg font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 py-2 block w-full"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs text-slate-400 dark:text-slate-500 italic text-center">
                    {data.ui.translationDisclaimer}
                  </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;