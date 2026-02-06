
import React from 'react';

const HeroCard: React.FC = () => {
  return (
    <div className="relative z-40 pt-10 px-8 pb-[3px] md:pt-24 md:px-10 md:pb-12 w-full text-center transition-all duration-700 pointer-events-auto">


      <div className="-mt-8 md:-mt-12 mb-6 md:mb-14">
        <p className="text-primary/90 font-serif italic text-lg md:text-3xl tracking-[0.1em] whitespace-nowrap">
          Chosen, Precious, Yours
        </p>
      </div>

      <h2 className="text-[10px] md:text-sm uppercase tracking-[0.5em] text-gray-300 mb-3 md:mb-6 font-sans font-semibold">
        Coming Soon
      </h2>
      <h1 className="text-3xl md:text-5xl font-serif text-white mb-2 md:mb-8 leading-tight px-2">
        The Art of <br /> <span className="text-primary italic font-light">Adornment</span>
      </h1>
      <p className="text-gray-200 font-sans font-light text-[11px] md:text-lg leading-relaxed max-w-[280px] md:max-w-sm mx-auto mt-4 mb-0">
        Discover a collection where elegance meets modern pop. Vareeka redefines luxury for the bold.
      </p>
    </div>
  );
};

export default HeroCard;
