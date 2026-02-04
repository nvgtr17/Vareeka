
import React from 'react';
import { Marker } from '../types';

interface MarkerBoxProps {
  marker: Marker;
}

const MarkerBox: React.FC<MarkerBoxProps> = ({ marker }) => {
  const style: React.CSSProperties = {
    top: marker.top,
    left: marker.left,
    right: marker.right,
    bottom: marker.bottom,
  };

  return (
    <div 
      className="absolute z-20 group hidden sm:block pointer-events-auto" 
      style={style}
    >
      <div className={`relative ${marker.width} border border-[#f3b6c2]/60 group-hover:border-primary transition-all duration-500 backdrop-blur-[1px] cursor-pointer`}>
        {/* Reveal Effect */}
        <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
          <img 
            alt={marker.label} 
            className={`w-[100vw] h-[100vh] max-w-none absolute ${marker.bgPos} object-cover scale-110 group-hover:scale-100 transition-transform duration-1000`} 
            src={marker.imageUrl}
          />
        </div>

        {/* Corner dots */}
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full pulse-marker"></div>
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full pulse-marker"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full pulse-marker"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full pulse-marker"></div>

        {/* Label */}
        <span className={`absolute ${marker.left ? '-left-12' : marker.right ? '-right-12' : '-top-8'} top-1/2 -translate-y-1/2 font-serif italic text-xl md:text-2xl text-white opacity-90 group-hover:text-primary group-hover:opacity-100 transition-all duration-300 drop-shadow-lg`}>
          {marker.label}
        </span>

        {/* Action Icon */}
        <div className="absolute -top-4 -left-4 bg-[#454065]/60 p-1.5 rounded-full backdrop-blur-md border border-[#f3b6c2]/30 group-hover:bg-primary transition-colors">
          <span className="material-symbols-outlined text-white text-[10px] md:text-xs">
            {marker.id === 'thalia' ? 'close' : 'open_in_full'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MarkerBox;
