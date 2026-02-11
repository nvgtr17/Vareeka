
import React from 'react';
import Navbar from './components/Navbar';
import MarkerBox from './components/MarkerBox';
import HeroCard from './components/HeroCard';
import { MAIN_BG_IMAGES, DEFAULT_BG_IMAGE, MARKERS } from './constants';

const App: React.FC = () => {
  const [scale, setScale] = React.useState(1);
  const [bgImage, setBgImage] = React.useState(DEFAULT_BG_IMAGE);
  const initialRatio = React.useRef(window.devicePixelRatio || 1);

  React.useEffect(() => {
    const updateScale = () => {
      const currentRatio = window.devicePixelRatio || 1;
      const newScale = initialRatio.current / currentRatio;
      setScale(newScale);
    };

    window.addEventListener('resize', updateScale);

    // Check more frequently and on scroll to catch all zoom interactions
    const interval = setInterval(updateScale, 500);

    // Also watch visualViewport which is more accurate for zoom in mobile/modern browsers
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateScale);
      window.visualViewport.addEventListener('scroll', updateScale);
    }

    return () => {
      window.removeEventListener('resize', updateScale);
      clearInterval(interval);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', updateScale);
        window.visualViewport.removeEventListener('scroll', updateScale);
      }
    };
  }, []);

  return (
    <main
      className="relative overflow-hidden bg-black select-none"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: '0 0',
        width: `${100 / scale}vw`,
        height: `${100 / scale}vh`,
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Background Selector */}
      <div className="absolute top-6 left-6 z-[100] pointer-events-auto">
        <select
          value={bgImage}
          onChange={(e) => setBgImage(e.target.value)}
          className="bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs px-3 py-2 rounded-lg outline-none cursor-pointer hover:bg-black/60 transition-all font-sans tracking-wider"
        >
          {MAIN_BG_IMAGES.map((img, idx) => (
            <option key={img} value={img} className="bg-black text-white">
              Background {idx + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        <img
          alt="Elegant background"
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          src={bgImage}
        />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
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
