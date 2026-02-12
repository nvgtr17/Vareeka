
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
      <div className={`relative ${marker.width} border-2 border-white/80 shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:border-primary transition-all duration-500 backdrop-blur-[2px] cursor-pointer`}>
        {/* Reveal Effect */}
        <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
          <img
            alt={marker.label}
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
            src={marker.imageUrl}
            style={{ objectPosition: marker.imagePosition || 'center' }}
          />
        </div>

        {/* Corner dots */}
        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-primary rounded-full pulse-marker border border-white/50"></div>
        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-primary rounded-full pulse-marker border border-white/50"></div>
        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-primary rounded-full pulse-marker border border-white/50"></div>
        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-primary rounded-full pulse-marker border border-white/50"></div>

        {/* Label - Positioned outside */}
        <span className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-serif italic text-2xl md:text-3xl text-white opacity-100 group-hover:text-primary transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] 
          ${marker.labelPosition === 'left' ? 'right-full mr-8 text-right' : 'left-full ml-8 text-left'}`}>
          {marker.label}
        </span>

        {/* Action Icon */}
        <div className="absolute -top-5 -left-5 bg-white p-2 rounded-full shadow-lg border border-primary group-hover:bg-primary transition-colors">
          <span className="material-symbols-outlined text-black text-[12px] md:text-sm group-hover:text-white">
            {marker.id === 'thalia' ? 'close' : 'open_in_full'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MarkerBox;
