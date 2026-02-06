
import React from 'react';
import Navbar from './components/Navbar';
import MarkerBox from './components/MarkerBox';
import HeroCard from './components/HeroCard';
import { MAIN_BG_IMAGE, MARKERS } from './constants';

const App: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black select-none">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Elegant model wearing jewelry"
          className="w-full h-full object-cover filter grayscale contrast-125 brightness-50"
          src={MAIN_BG_IMAGE}
        />
        {/* Subtle gradient overlay to pull focus center */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-[#0f0f1a]/30 to-black/60 z-10"></div>
        <div className="absolute inset-0 bg-[#0f0f1a]/40 z-10"></div>
      </div>

      <Navbar />

      {/* Interactive Markers */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {MARKERS.map((m) => (
          <MarkerBox key={m.id} marker={m} />
        ))}
      </div>

      {/* Main CTA Card */}
      <HeroCard />

      {/* Footer / Status Bar */}
      <div className="absolute bottom-10 w-full z-30 px-8 flex justify-between items-end text-white/40 text-[10px] md:text-xs font-sans tracking-[0.1em]">
        <div className="leading-relaxed">
          <p>© 2024 Vareeka Fine Jewelry.</p>
          <p>All rights reserved.</p>
        </div>
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.8)] z-30"></div>
    </main>
  );
};

export default App;
