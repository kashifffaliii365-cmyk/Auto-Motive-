import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business.ts';

export const TrustIntro: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-neutral-900 border-b border-neutral-800 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Editorial Statement & Copy */}
          <div className="lg:col-span-8">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold block mb-4">
              EDITORIAL / THE WORKSHOP STANDARD
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight">
              WHEN YOUR VEHICLE NEEDS MORE THAN A QUICK FIX.
            </h2>
            <div className="mt-8 space-y-4 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl">
              <p>
                Modern diesel and automotive vehicles run on tightly synchronized electronic and mechanical systems. When a check engine light illuminates, power drops, or an unfamiliar mechanical knock develops, clearing fault codes or swapping parts on a hunch only wastes time.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base">
                At South Texas Diesel And Automotive Services LLC, we operate with a diagnostic-first philosophy. We inspect live sensor telemetry, test rail pressure, verify mechanical tolerances, and explain what needs immediate repair and what can wait.
              </p>
            </div>
          </div>

          {/* Right: Technical Verified Rating Card */}
          <div className="lg:col-span-4 bg-neutral-950 border border-neutral-800 p-8 sm:p-10 rounded shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              <div className="font-display font-black text-6xl sm:text-7xl text-white tracking-tighter tabular-nums leading-none">
                {BUSINESS_INFO.googleRating}
                <span className="text-3xl text-neutral-500 font-mono font-normal"> / 5</span>
              </div>

              <div className="mt-4 text-xs font-mono uppercase tracking-widest text-neutral-300 font-bold">
                {BUSINESS_INFO.reviewCount} GOOGLE REVIEWS
              </div>

              <p className="mt-3 text-xs text-neutral-400 leading-relaxed">
                Verified customer ratings from real drivers and fleet managers throughout the Coastal Bend.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                <span>Corpus Christi, TX</span>
              </span>
              <span className="text-[11px] text-neutral-400 font-semibold">3917 Apollo Rd</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
