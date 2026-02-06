
import React from 'react';

const InnerCircleCard: React.FC = () => {
    return (
        <div className="relative z-40 p-6 md:pt-2 md:px-10 md:pb-10 w-full text-center transition-all duration-700 pointer-events-auto">
            <div className="flex flex-col gap-4 md:gap-6">
                <div className="mb-1 md:mb-2">
                    <p className="text-white/60 font-sans text-[9px] md:text-xs uppercase tracking-[0.2em] mb-1">Get in touch for latest updates</p>
                    <div className="h-[1px] w-10 md:w-16 bg-primary/40 mx-auto"></div>
                </div>
                <div className="relative">
                    <input
                        type="email"
                        placeholder="ENTER YOUR EMAIL"
                        className="w-full bg-transparent border-b border-white/20 text-white placeholder:text-white/40 placeholder:text-[8px] md:placeholder:text-[9px] text-center py-2 md:py-3 focus:outline-none focus:border-primary transition-all font-sans tracking-[0.2em] text-[10px] md:text-base uppercase"
                    />
                </div>
                <button className="bg-primary text-[#1a1a1a] font-sans font-bold py-3 md:py-3.5 px-6 md:px-6 rounded-sm flex items-center justify-center gap-2 md:gap-3 hover:bg-white transition-all duration-300 group shadow-xl">
                    <span className="tracking-[0.15em] text-[9px] md:text-[10px] uppercase">Join the Inner Circle</span>
                    <span className="material-symbols-outlined text-sm md:text-base group-hover:translate-x-2 transition-transform">
                        arrow_right_alt
                    </span>
                </button>
            </div>
        </div>
    );
};

export default InnerCircleCard;
