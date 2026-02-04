
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 w-full z-50 p-6 md:p-8 flex justify-between items-center bg-gradient-to-b from-black/40 to-transparent">
      <div className="text-white text-xl md:text-2xl tracking-[0.4em] font-serif uppercase cursor-pointer hover:text-primary transition-colors">
        Vareeka
      </div>
      <div className="flex gap-6 items-center">
        <button className="text-white hover:text-primary transition-colors flex items-center">
          <span className="material-symbols-outlined text-2xl">search</span>
        </button>
        <button className="text-white hover:text-primary transition-colors flex items-center relative">
          <span className="material-symbols-outlined text-2xl">shopping_bag</span>
          <span className="absolute -top-1 -right-1 bg-primary text-[10px] text-deep-text w-4 h-4 rounded-full flex items-center justify-center font-bold">1</span>
        </button>
        <button className="text-white hover:text-primary transition-colors flex items-center">
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
