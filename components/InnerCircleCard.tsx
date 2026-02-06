
import React from 'react';

const InnerCircleCard: React.FC = () => {
    return (
        <div className="relative z-40 pt-6 px-2 pb-16 md:pt-16 md:px-10 md:pb-10 w-full text-center transition-all duration-700 pointer-events-auto">
            <div className="flex flex-col gap-3 md:gap-6 mt-1 md:mt-4 max-w-[240px] md:max-w-md mx-auto">
                <div className="mb-0 md:mb-2">
                    <p className="text-white/60 font-sans text-[8px] md:text-xs uppercase tracking-[0.2em] mb-1">Get in touch for latest updates</p>
                    <div className="h-[1px] w-8 md:w-16 bg-primary/40 mx-auto"></div>
                </div>
                <div className="relative">
                    <input
                        type="email"
                        placeholder="ENTER YOUR EMAIL"
                        className="w-full bg-transparent border-b border-white/20 text-white placeholder:text-white/40 placeholder:text-[8px] md:placeholder:text-[10px] text-center py-1.5 md:py-3 focus:outline-none focus:border-primary transition-all font-sans tracking-[0.2em] text-[10px] md:text-base uppercase"
                    />
                </div>
                <button className="bg-primary text-[#1a1a1a] font-sans font-bold py-2 md:py-3 px-4 md:px-8 rounded-sm flex items-center justify-center gap-2 md:gap-3 hover:bg-white transition-all duration-300 group shadow-xl mx-auto w-full">
                    <span className="tracking-[0.15em] text-[8px] md:text-[10px] uppercase">Join the Inner Circle</span>
                    <span className="material-symbols-outlined text-[10px] md:text-sm group-hover:translate-x-1 transition-transform">
                        arrow_right_alt
                    </span>
                </button>
            </div>
        </div>
    );
};

export default InnerCircleCard;
