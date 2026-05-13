/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/sections/Hero';
import { Introduction } from './components/sections/Introduction';
import { MarketContext } from './components/sections/MarketContext';
import { Evolution } from './components/sections/Evolution';
import { Opportunity } from './components/sections/Opportunity';
import { Roadmap } from './components/sections/Roadmap';
import { Perspective } from './components/sections/Perspective';
import { About } from './components/sections/About';
import { StrategicClarifications } from './components/sections/StrategicClarifications';
import { Closing } from './components/sections/Closing';
import { Navbar } from './components/layout/Navbar';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LanguageProvider } from './components/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Introduction />
        <MarketContext />
        <Evolution />
        <Opportunity />
        <Roadmap />
        <Perspective />
        <About />
        <StrategicClarifications />
        <Closing />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}
