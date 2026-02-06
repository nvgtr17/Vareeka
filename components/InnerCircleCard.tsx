
import React from 'react';

const InnerCircleCard: React.FC = () => {
    return (
        <div className="relative z-40 p-6 md:pt-4 md:px-16 md:pb-16 w-full text-center transition-all duration-700 pointer-events-auto">
            <div className="flex flex-col gap-4 md:gap-10">
                <div className="mb-2 md:mb-4">
                    <p className="text-white/60 font-sans text-[10px] md:text-sm uppercase tracking-[0.25em] mb-2">Get in touch for latest updates</p>
                    <div className="h-[1px] w-12 md:w-20 bg-primary/40 mx-auto"></div>
                </div>
                <div className="relative">
                    <input
                        type="email"
                        placeholder="ENTER YOUR EMAIL"
                        className="w-full bg-transparent border-b border-white/20 text-white placeholder:text-white/40 placeholder:text-[9px] md:placeholder:text-[10px] text-center py-2 md:py-4 focus:outline-none focus:border-primary transition-all font-sans tracking-[0.25em] text-[10px] md:text-lg uppercase"
                    />
                </div>
                <button className="bg-primary text-[#1a1a1a] font-sans font-bold py-4 md:py-6 px-8 md:px-12 rounded-sm flex items-center justify-center gap-3 md:gap-4 hover:bg-white transition-all duration-300 group shadow-xl">
                    <span className="tracking-[0.25em] text-[10px] md:text-sm uppercase">Join the Inner Circle</span>
                    <span className="material-symbols-outlined text-sm md:text-xl group-hover:translate-x-2 transition-transform">
                        arrow_right_alt
                    </span>
                </button>
            </div>
        </div>
    );
};

export default InnerCircleCard;
