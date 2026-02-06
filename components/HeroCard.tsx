
import React from 'react';

const HeroCard: React.FC = () => {
  return (
    <div className="relative z-40 bg-[#454065]/70 backdrop-blur-2xl p-5 md:p-10 max-w-md w-[calc(100%-6rem)] mx-auto text-center border border-white/10 shadow-pop rounded-sm transform transition-all duration-700 hover:scale-[1.02] opacity-90 pointer-events-auto">
      <div className="flex justify-center mb-4 md:mb-6">
        <img
          src="/assets/logos/Full Logo/Full logo Secondary (pink).svg"
          alt="Vareeka Logo"
          className="h-14 md:h-28 object-contain"
        />
      </div>
      <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-gray-300 mb-3 md:mb-4 font-sans font-semibold">
        Coming Soon
      </h2>
      <h1 className="text-xl md:text-3xl font-serif text-white mb-2 md:mb-3 leading-tight">
        The Art of <br /> <span className="text-primary italic font-light">Adornment</span>
      </h1>
      <p className="text-gray-200 font-sans font-light text-[10px] md:text-sm leading-relaxed mb-3 md:mb-4 mt-2 md:mt-4 max-w-xs mx-auto">
        Discover a collection where elegance meets modern pop. Vareeka redefines luxury for the bold.
      </p>
    </div>
  );
};

export default HeroCard;
