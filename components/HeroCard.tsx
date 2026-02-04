
import React from 'react';

const HeroCard: React.FC = () => {
  return (
    <div className="relative z-40 bg-[#454065]/70 backdrop-blur-2xl p-8 md:p-14 max-w-lg mx-4 text-center border border-white/10 shadow-pop rounded-sm transform transition-all duration-700 hover:scale-[1.02] opacity-90">
      <div className="flex justify-center mb-8">
        <img
          src="/assets/logos/Full Logo/Full logo Secondary (pink).svg"
          alt="Vareeka Logo"
          className="h-28 md:h-40 object-contain"
        />
      </div>
      <h2 className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-gray-300 mb-6 font-sans font-semibold">
        Coming Soon
      </h2>
      <h1 className="text-3xl md:text-5xl font-serif text-white mb-4 leading-tight">
        The Art of <br /> <span className="text-primary italic font-light">Adornment</span>
      </h1>
      <p className="text-gray-200 font-sans font-light text-sm md:text-base leading-relaxed mb-6 mt-6 max-w-xs mx-auto">
        Discover a collection where elegance meets modern pop. Vareeka redefines luxury for the bold.
      </p>
    </div>
  );
};

export default HeroCard;
