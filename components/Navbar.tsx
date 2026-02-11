
import React from 'react';
const logoMark = '/assets/logos/Logo Mark/Logomark secondary (pink).svg';
const typeLogo = '/assets/logos/Type logo/Type logo secondary (pink).svg';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 w-full z-50 p-6 md:p-8 flex justify-center items-center bg-gradient-to-b from-black/40 to-transparent pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-4">
        <img
          src={logoMark}
          alt="Vareeka Logomark"
          className="h-10 md:h-12 object-contain filter drop-shadow-md"
        />
        <img
          src={typeLogo}
          alt="Vareeka Type Logo"
          className="h-5 md:h-7 object-contain filter drop-shadow-md mt-1"
        />
      </div>
    </nav>
  );
};

export default Navbar;
