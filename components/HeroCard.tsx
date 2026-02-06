
import React from 'react';

const HeroCard: React.FC = () => {
  return (
    <div className="relative z-40 bg-[#454065]/70 backdrop-blur-2xl pt-8 pb-6 px-5 md:pt-14 md:pb-10 md:px-10 max-w-[280px] sm:max-w-sm mx-4 text-center border border-white/10 shadow-pop rounded-sm transform transition-all duration-700 hover:scale-[1.02] opacity-90 min-h-[300px] md:min-h-[350px] flex flex-col justify-center">
      <h2 className="text-[8px] md:text-xs uppercase tracking-[0.4em] text-gray-300 mb-3 md:mb-4 font-sans font-semibold">
        Coming Soon
      </h2>
      <h1 className="text-2xl md:text-4xl font-serif text-white mb-3 md:mb-4 leading-tight">
        The Art of <br /> <span className="text-primary italic font-light">Adornment</span>
      </h1>
      <p className="text-gray-200 font-sans font-light text-xs md:text-base leading-relaxed mb-6 md:mb-8 mt-1 md:mt-2 max-w-xs mx-auto">
        Discover a collection where elegance meets modern pop. Vareeka redefines luxury for the bold.
      </p>

      <form className="mt-2 md:mt-4 flex flex-col items-center gap-3 md:gap-6 w-full" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full max-w-[180px] md:max-w-none bg-white/10 border border-white/20 rounded-sm px-4 py-2 md:px-6 md:py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 text-[10px] md:text-base font-sans transition-colors text-center"
        />
        <button
          type="submit"
          className="bg-primary/95 hover:bg-primary text-[#454065] font-sans font-bold uppercase tracking-[0.2em] text-[9px] md:text-sm px-6 py-2.5 md:px-10 md:py-5 rounded-sm transition-all duration-300 w-full max-w-[180px] md:max-w-none hover:shadow-[0_0_20px_rgba(243,182,194,0.4)] flex items-center justify-center gap-2 md:gap-3 group"
        >
          <span>Join the Inner Circle</span>
          <span className="material-symbols-outlined text-sm md:text-xl transform group-hover:translate-x-1 transition-transform">
            trending_flat
          </span>
        </button>
      </form>
    </div>
  );
};

export default HeroCard;
