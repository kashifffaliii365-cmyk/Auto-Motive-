import React from 'react';
import { Star, MapPin, Wrench, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business.ts';

export const TrustStrip: React.FC = () => {
  return (
    <section id="trust-strip" className="bg-neutral-900 border-y border-neutral-800 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Metric 1: Rating */}
          <div className="flex flex-col items-center justify-center text-center p-3 border-r border-neutral-800/80 last:border-r-0">
            <div className="flex items-center gap-1 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <div className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              {BUSINESS_INFO.googleRating} STAR
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 mt-0.5">
              Google Rating
            </span>
          </div>

          {/* Metric 2: Reviews */}
          <div className="flex flex-col items-center justify-center text-center p-3 border-r border-neutral-800/80 last:border-r-0">
            <div className="flex items-center gap-1.5 text-blue-500 mb-1">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight tabular-nums">
              {BUSINESS_INFO.reviewCount}
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 mt-0.5">
              Google Reviews
            </span>
          </div>

          {/* Metric 3: Location */}
          <div className="flex flex-col items-center justify-center text-center p-3 border-r border-neutral-800/80 last:border-r-0">
            <div className="flex items-center gap-1.5 text-blue-500 mb-1">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              CORPUS CHRISTI
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 mt-0.5">
              Texas 78413
            </span>
          </div>

          {/* Metric 4: Specialty */}
          <div className="flex flex-col items-center justify-center text-center p-3">
            <div className="flex items-center gap-1.5 text-blue-500 mb-1">
              <Wrench className="w-4 h-4" />
            </div>
            <div className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              DIESEL &amp; AUTO
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 mt-0.5">
              Full-Service Care
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
