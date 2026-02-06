
import React from 'react';

const InnerCircleCard: React.FC = () => {
    return (
        <div className="relative z-40 bg-[#454065]/70 backdrop-blur-3xl p-5 md:p-10 max-w-md w-[calc(100%-6rem)] mx-auto mt-3 md:mt-4 text-center border border-white/10 shadow-2xl rounded-sm transform transition-all duration-700 hover:scale-[1.01] opacity-90 pointer-events-auto">
            <div className="flex flex-col gap-3 md:gap-4">
                <div className="mb-1 md:mb-2">
                    <p className="text-white/60 font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em]">Get in touch for latest updates</p>
                    <div className="h-[1px] w-8 md:w-12 bg-primary/40 mx-auto mt-1.5 md:mt-2"></div>
                </div>
                <div className="relative">
                    <input
                        type="email"
                        placeholder="ENTER YOUR EMAIL"
                        className="w-full bg-transparent border-b border-white/20 text-white placeholder:text-white/40 text-center py-1.5 md:py-2 focus:outline-none focus:border-primary transition-all font-sans tracking-[0.2em] text-[9px] md:text-[10px] uppercase"
                    />
                </div>
                <button className="bg-primary text-[#1a1a1a] font-sans font-bold py-2.5 md:py-3 px-5 md:px-6 rounded-sm flex items-center justify-center gap-2 md:gap-3 hover:bg-white transition-all duration-300 group shadow-lg">
                    <span className="tracking-[0.2em] text-[9px] md:text-[10px] uppercase">Join the Inner Circle</span>
                    <span className="material-symbols-outlined text-xs md:text-sm group-hover:translate-x-1 transition-transform">
                        arrow_right_alt
                    </span>
                </button>
            </div>
        </div>
    );
};

export default InnerCircleCard;
