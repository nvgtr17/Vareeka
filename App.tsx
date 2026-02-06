
import React from 'react';
import Navbar from './components/Navbar';
import MarkerBox from './components/MarkerBox';
import HeroCard from './components/HeroCard';
import InnerCircleCard from './components/InnerCircleCard';
import { MAIN_BG_IMAGE, MARKERS } from './constants';

const App: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden bg-black select-none">
      {/* Navbar - Fixed at top */}
      <div className="absolute top-0 w-full z-50 pointer-events-none">
        <Navbar />
      </div>

      {/* Visual Side (Image & Markers) */}
      <div className="absolute inset-0 md:relative flex-1 md:h-screen overflow-hidden border-r border-white/5 z-0 md:z-10">
        {/* Background Layer */}
        <div className="absolute inset-0">
          <img
            alt="Elegant model wearing jewelry"
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-50 object-top blur-[4px]"
            src={MAIN_BG_IMAGE}
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/60 via-[#0f0f1a]/30 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[#0f0f1a]/40 z-10"></div>
        </div>

        {/* Interactive Markers */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {MARKERS.map((m) => (
            <MarkerBox key={m.id} marker={m} />
          ))}
        </div>

        {/* Global Logo Overlay - Centered relative to the visual side */}
        <div className="absolute top-6 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 z-[60] flex items-center justify-center pointer-events-none w-full max-w-[130px] md:max-w-[380px]">
          <img
            src="/assets/logos/Full Logo/Full logo Secondary (pink).svg"
            alt="Vareeka Full Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Subtle vignette */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.6)] z-30"></div>
      </div>

      {/* Right Panel: The Purple Form */}
      {/* On mobile: centered "card". On desktop: Entire right 500px panel is purple */}
      <div className="relative w-full md:w-[500px] md:shrink-0 flex flex-col items-center justify-center z-20">
        {/* The Purple Content Container */}
        <div className="relative w-full h-full min-h-screen md:min-h-0 flex flex-col items-center justify-center pt-16 pb-2 px-6 md:p-0">
          {/* 
            Desktop: Full panel background
            Mobile: Floating card look
          */}
          <div className="w-full h-full md:h-screen flex flex-col justify-center backdrop-blur-3xl bg-[#454065]/80 md:bg-[#454065]/90 border border-white/10 md:border-none shadow-2xl md:shadow-none rounded-sm md:rounded-none overflow-hidden pointer-events-auto">
            <div className="flex-1 flex flex-col justify-start pt-6 md:pt-20">
              <HeroCard />
              <div className="w-[60%] h-px bg-white/10 mx-auto opacity-30 my-2 md:my-4"></div>
              <InnerCircleCard />
            </div>
          </div>
        </div>


      </div>

      {/* Global vignette - only for mobile where layout is stacked */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.4)] z-30 md:hidden"></div>
    </main>
  );
};

export default App;
