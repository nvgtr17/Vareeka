
import React, { useState } from 'react';

const HeroCard: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="relative z-40 bg-[#454065]/70 backdrop-blur-2xl p-8 md:p-14 max-w-lg mx-4 text-center border border-white/10 shadow-pop rounded-sm transform transition-all duration-700 hover:scale-[1.02]">
      <h2 className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-gray-300 mb-6 font-sans font-semibold">
        Coming Soon
      </h2>
      <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">
        The Art of <br/> <span className="text-primary italic font-light">Adornment</span>
      </h1>
      <p className="text-gray-200 font-sans font-light text-sm md:text-base leading-relaxed mb-10 mt-6 max-w-xs mx-auto">
        Discover a collection where elegance meets modern pop. Vareeka redefines luxury for the bold.
      </p>

      {subscribed ? (
        <div className="py-6 text-primary font-serif italic text-lg animate-pulse">
          Welcome to the Inner Circle.
        </div>
      ) : (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input 
              className="w-full bg-transparent border-b border-[#f3b6c2]/50 px-2 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors text-center font-sans tracking-wide" 
              placeholder="Enter your email address" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button 
            className="mt-2 bg-primary text-deep-text py-4 px-8 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold hover:bg-white hover:text-deep-text transition-all duration-500 group shadow-[0_10px_20px_rgba(243,182,194,0.3)] hover:shadow-primary/50" 
            type="submit"
          >
            Join the Inner Circle
            <span className="inline-block ml-3 transition-transform group-hover:translate-x-2">→</span>
          </button>
        </form>
      )}

      <div className="mt-10 flex justify-center space-x-8">
        <a className="text-gray-400 hover:text-primary transition-all hover:scale-125" href="#"><i className="material-symbols-outlined text-lg">public</i></a>
        <a className="text-gray-400 hover:text-primary transition-all hover:scale-125" href="#"><i className="material-symbols-outlined text-lg">photo_camera</i></a>
      </div>
    </div>
  );
};

export default HeroCard;
