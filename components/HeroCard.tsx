
import React from 'react';

const HeroCard: React.FC = () => {
  return (
    <div className="relative z-40 p-6 md:pt-16 md:px-16 md:pb-0 w-full text-center transition-all duration-700 pointer-events-auto">
      {/* Mobile-only Logo */}
      <div className="flex justify-center mb-6 md:hidden">
        <img
          src="/assets/logos/Full Logo/Full logo Secondary (pink).svg"
          alt="Vareeka Logo"
          className="h-16 object-contain"
        />
      </div>

      <h2 className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-gray-300 mb-2 md:mb-8 font-sans font-semibold">
        Coming Soon
      </h2>
      <h1 className="text-2xl md:text-5xl font-serif text-white mb-3 md:mb-8 leading-tight">
        The Art of <br /> <span className="text-primary italic font-light">Adornment</span>
      </h1>
      <p className="text-gray-200 font-sans font-light text-[10px] md:text-lg leading-relaxed max-w-md mx-auto mb-0">
        Discover a collection where elegance meets modern pop. Vareeka redefines luxury for the bold.
      </p>
    </div>
  );
};

export default HeroCard;
