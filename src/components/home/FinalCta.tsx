import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business.ts';
import { ImageWithFallback } from '../common/ImageWithFallback.tsx';

export const FinalCta: React.FC = () => {
  return (
    <section className="relative py-28 bg-neutral-950 text-neutral-100 overflow-hidden border-b border-neutral-800">
      {/* Cinematic Workshop Image Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <ImageWithFallback
          src="/images/workshop-01.webp"
          alt="Workshop bay background"
          fallbackTitle="Workshop Bay Facility"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-neutral-950/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-widest text-blue-500">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span>DIRECT SHOP SCHEDULING</span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-tight">
          NEED YOUR VEHICLE LOOKED AT?
        </h2>

        <p className="mt-5 text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed font-mono">
          Bring us the warning light, noise, leak or performance problem. We&apos;ll diagnose the vehicle and explain what needs attention.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            to="/book-service"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase text-white bg-blue-600 hover:bg-blue-700 rounded transition-all shadow-xl active:scale-98 shadow-blue-950/40"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK A SERVICE</span>
          </Link>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-blue-500 rounded transition-all active:scale-98"
          >
            <Phone className="w-4 h-4 text-blue-500" />
            <span>CALL NOW: {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        <div className="mt-8 text-xs font-mono text-neutral-500">
          <span>{BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}</span>
          <span className="mx-2">·</span>
          <span>4.9 ★ GOOGLE RATING ({BUSINESS_INFO.reviewCount} REVIEWS)</span>
        </div>
      </div>
    </section>
  );
};
