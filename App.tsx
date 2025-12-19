import React from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
// App.tsx at project root
import Hero from "./src/components/Hero";
import ImpactMetrics from './components/ImpactMetrics';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import MoreInfo from './components/MoreInfo';
import Testimonials from './components/Testimonials';
import ResumeChat from './components/ResumeChat';
import WhatsAppButton from './components/WhatsAppButton';
import ChristmasTheme from './components/ChristmasTheme';
import Footer from './components/Footer';

const MainContent: React.FC = () => {
  const { data } = useLanguage();

  return (
    <>
      <main className="relative min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 isolate">
          <Navbar />
          
          {/* Global Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />
          
          {/* Content Wrapper with overflow hidden to contain background blobs/animations without clipping fixed elements which are outside this div (technically siblings) */}
          <div className="relative z-10 overflow-hidden">
              <Hero data={data} />
              <ImpactMetrics stats={data.stats} />
              <Skills skills={data.skills} />
              <Experience experience={data.experience} />
              <MoreInfo data={data} />
              <Projects projects={data.projects} />
              <Testimonials testimonials={data.testimonials} />
              
              <Footer />
          </div>
      </main>

      {/* Floating Elements - Placed outside main to ensure robust viewport-relative positioning */}
      <ChristmasTheme />
      <WhatsAppButton />
      <ResumeChat />
    </>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
};

export default App;