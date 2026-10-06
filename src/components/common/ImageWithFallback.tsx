import React, { useState } from 'react';
import { Wrench, Gauge, Shield, Truck, Zap, Flame, Cog, Activity } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  category?: string;
  iconType?: 'diesel' | 'engine' | 'brake' | 'transmission' | 'electrical' | 'ac' | 'fleet' | 'workshop' | 'diagnostic';
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'South Texas Diesel & Automotive Services LLC',
  fallbackTitle,
  category,
  iconType = 'workshop',
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  const renderIcon = () => {
    switch (iconType) {
      case 'diesel':
        return <Gauge className="w-8 h-8 text-blue-500 stroke-[1.75]" />;
      case 'engine':
        return <Flame className="w-8 h-8 text-blue-500 stroke-[1.75]" />;
      case 'brake':
        return <Shield className="w-8 h-8 text-blue-500 stroke-[1.75]" />;
      case 'transmission':
        return <Cog className="w-8 h-8 text-blue-500 stroke-[1.75]" />;
      case 'electrical':
        return <Zap className="w-8 h-8 text-blue-500 stroke-[1.75]" />;
      case 'ac':
        return <Activity className="w-8 h-8 text-blue-500 stroke-[1.75]" />;
      case 'fleet':
        return <Truck className="w-8 h-8 text-blue-500 stroke-[1.75]" />;
      case 'diagnostic':
        return <Activity className="w-8 h-8 text-blue-500 stroke-[1.75]" />;
      default:
        return <Wrench className="w-8 h-8 text-blue-500 stroke-[1.75]" />;
    }
  };

  const getSubtext = () => {
    switch (iconType) {
      case 'diesel':
        return 'POWERSTROKE · CUMMINS · DURAMAX · COMMERCIAL';
      case 'engine':
        return 'LIVE TELEMETRY · TIMING · CYLINDER PRESSURE';
      case 'brake':
        return 'PADS · ROTORS · LINES · HYDRAULIC PRESSURE';
      case 'transmission':
        return 'DRIVETRAIN · CLUTCHES · FLUID SERVICE';
      case 'electrical':
        return 'WIRING · CHARGING · STARTERS · PARASITIC DRAW';
      case 'ac':
        return 'EVACUATION · RECHARGE · COMPRESSOR · LEAK CHECK';
      case 'fleet':
        return 'COMMERCIAL TRUCK MAINTENANCE & REPAIRS';
      default:
        return 'SOUTH TEXAS DIESEL & AUTOMOTIVE · CORPUS CHRISTI';
    }
  };

  if (hasError || !src) {
    return (
      <div
        className={`relative overflow-hidden bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center p-6 select-none text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        {/* Technical mechanical crosshatch grid */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Technical crosshairs in corners */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-blue-600/50 pointer-events-none" />
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-blue-600/50 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-blue-600/50 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-blue-600/50 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-sm px-4">
          <div className="w-14 h-14 rounded bg-neutral-950 border border-neutral-800 shadow-xl flex items-center justify-center mb-3 ring-1 ring-blue-500/20">
            {renderIcon()}
          </div>

          {category && (
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-1">
              {category}
            </span>
          )}

          <h4 className="text-base sm:text-lg font-bold text-white font-display tracking-wider uppercase leading-tight">
            {fallbackTitle || alt}
          </h4>

          <p className="mt-2 text-[10px] text-neutral-400 font-mono tracking-wider">
            {getSubtext()}
          </p>

          <span className="mt-3 text-[9px] font-mono uppercase tracking-widest text-neutral-500">
            3917 Apollo Rd · Corpus Christi, TX
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};
