import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Check, ArrowRight, Phone } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback.tsx';
import { BUSINESS_INFO } from '../../data/business.ts';

export const FleetSection: React.FC = () => {
  const fleetSpecs = [
    'Scheduled preventive maintenance programs for company work trucks and service vans',
    'Commercial diesel engine, turbo, and fuel system repairs',
    'Commercial brake inspections and heavy-duty line replacements',
    'Priority diagnostic dispatch to reduce revenue-draining downtime',
    'Direct coordination with local business owners and fleet managers',
  ];

  return (
    <section className="py-24 bg-neutral-950 border-b border-neutral-800 text-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900 border border-neutral-800 rounded p-8 sm:p-12 lg:p-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-blue-500 mb-3">
                <Truck className="w-4 h-4" />
                <span>B2B &amp; COMMERCIAL VEHICLE SERVICES</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight">
                KEEP YOUR FLEET WORKING.
              </h2>

              <p className="mt-6 text-base text-neutral-300 leading-relaxed max-w-xl">
                Commercial trucks, utility bodies, and company vans do not generate revenue when parked in a repair bay. South Texas Diesel And Automotive Services LLC offers disciplined commercial maintenance and fast-turnaround diesel repairs in Corpus Christi to keep your crews on schedule.
              </p>

              <div className="mt-8 space-y-3">
                {fleetSpecs.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 font-mono">
                    <div className="w-4 h-4 rounded bg-neutral-950 border border-neutral-800 text-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4 pt-6 border-t border-neutral-800">
                <Link
                  to="/book-service?service=Fleet+Service"
                  className="inline-flex items-center gap-2 px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase text-white bg-blue-600 hover:bg-blue-700 rounded transition-all shadow-md active:scale-98 shadow-blue-950/40"
                >
                  <span>REQUEST FLEET SERVICE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase text-neutral-200 hover:text-white bg-neutral-950 border border-neutral-700 hover:border-blue-500 rounded transition-all active:scale-98"
                >
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>CALL SHOP DISPATCH</span>
                </a>
              </div>
            </div>

            {/* Right Media */}
            <div className="lg:col-span-5">
              <div className="relative rounded overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl">
                <ImageWithFallback
                  src="/images/diesel-01.webp"
                  alt="Commercial Diesel Truck and Fleet Maintenance in Corpus Christi"
                  fallbackTitle="Commercial Fleet Bay"
                  category="Fleet Operations"
                  iconType="fleet"
                  className="w-full h-[360px] sm:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-neutral-950/95 border border-neutral-800 rounded text-xs font-mono text-neutral-300">
                  <span className="text-[10px] text-blue-400 font-bold uppercase block mb-1">
                    FLEET ACCOUNTS
                  </span>
                  <span className="text-white font-display font-bold uppercase text-sm block">
                    Routine Maintenance Schedules · Priority Turnaround
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
