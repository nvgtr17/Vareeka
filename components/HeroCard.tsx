
import React from 'react';

const HeroCard: React.FC = () => {
  return (
    <div className="relative z-40 bg-[#454065]/70 backdrop-blur-2xl pt-8 pb-6 px-5 md:pt-16 md:pb-12 md:px-12 max-w-[320px] md:max-w-md mx-4 text-center border border-white/10 shadow-pop rounded-sm transform transition-all duration-700 hover:scale-[1.02] opacity-90 min-h-[400px] md:min-h-[500px] flex flex-col justify-center">
      <p className="text-primary font-serif italic text-base md:text-xl tracking-[0.2em] mb-3 md:mb-4 opacity-90">
        Chosen, Precious, Yours
      </p>
      <h2 className="text-[10px] md:text-sm uppercase tracking-[0.4em] text-gray-300 mb-3 md:mb-5 font-sans font-semibold">
        Coming Soon
      </h2>
      <h1 className="text-3xl md:text-5xl font-serif text-white mb-4 md:mb-6 leading-tight">
        The Art of <br /> <span className="text-primary italic font-light">Adornment</span>
      </h1>
      <p className="text-gray-200 font-sans font-light text-xs md:text-lg leading-relaxed mb-8 md:mb-10 mt-1 md:mt-2 max-w-xs md:max-w-sm mx-auto">
        Discover a collection where elegance meets modern pop. Vareeka redefines luxury for the bold.
      </p>

      <form className="mt-2 md:mt-4 flex flex-col items-center gap-3 md:gap-6 w-full" onSubmit={(e) => e.preventDefault()}>
        <p className="text-gray-300 font-sans text-[9px] md:text-xs uppercase tracking-[0.2em] opacity-80 mb-[-8px] md:mb-[-12px]">
          Sign up to stay updated
        </p>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full max-w-[200px] md:max-w-none bg-white/10 border border-white/20 rounded-sm px-4 py-2 md:px-6 md:py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 text-[10px] md:text-base font-sans transition-colors text-center"
        />
        <button
          type="submit"
          className="bg-primary/95 hover:bg-primary text-[#454065] font-sans font-bold uppercase tracking-[0.2em] text-[8px] md:text-xs px-6 py-2.5 md:px-10 md:py-5 rounded-sm transition-all duration-300 w-full max-w-[200px] md:max-w-none hover:shadow-[0_0_20px_rgba(243,182,194,0.4)] flex items-center justify-center gap-2 md:gap-3 group"
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
