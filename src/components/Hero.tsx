import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileCheck, User, Globe } from 'lucide-react';
import { ResumeData } from "../types";
import davidPhoto from "../assets/david.jpg";

interface HeroProps {
  data: ResumeData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 py-28 md:py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/20 dark:bg-indigo-600/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -30, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/20 dark:bg-emerald-600/20 rounded-full blur-[100px]" 
        />
      </div>

      <div className="max-w-4xl w-full text-center space-y-8 z-10 flex flex-col items-center">
        
        {/* Profile Photo - Optimized for user's headshot */}
        {data.avatarUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative group"
          >
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800 border-4 border-white dark:border-slate-800">
              {!imgError ? (
                <img 
                  src={davidPhoto}
                  alt={data.name} 
                  className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-cover object-[center_top]"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400">
                  <User size={64} />
                </div>
              )}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badges / Meta Info */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="inline-flex items-center py-1 px-3 rounded-full bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 text-sm font-mono">
              {data.ui.basedIn} {data.location}
            </span>
            
            {/* UN & Global Experience Badge */}
            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-blue-100/80 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 text-blue-700 dark:text-blue-400 text-sm font-bold font-mono shadow-sm">
              <Globe size={14} /> {data.ui.unGlobalExp}
            </span>

            {data.workPermit && (
              <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-amber-100/80 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700/50 text-amber-700 dark:text-amber-400 text-sm font-bold font-mono shadow-sm">
                <FileCheck size={14} /> {data.ui.workPermit}
              </span>
            )}
            <a 
              href={`mailto:${data.email}`}
              className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-sm font-bold font-mono shadow-sm hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors"
            >
              <Mail size={14} /> {data.email}
            </a>
          </div>
          
          {/* Adjusted font sizing: sm:text-6xl for tablets, lg:text-7xl for desktops */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            {data.ui.hiIam} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600 dark:from-indigo-400 dark:to-emerald-400">{data.name}</span>.
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 font-light">
            {data.title}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          {data.about}
        </motion.p>

        {/* Secondary Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center gap-4 pt-4"
        >
          {data.socials.map((social) => (
            <a 
              key={social.platform}
              href={social.url} 
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 hover:scale-110 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all text-slate-500 dark:text-slate-400"
              aria-label={social.platform}
            >
              {social.icon === 'linkedin' && <Linkedin size={20} />}
              {social.icon === 'mail' && <Mail size={20} />}
              {social.icon === 'github' && <Github size={20} />}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 dark:text-slate-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;