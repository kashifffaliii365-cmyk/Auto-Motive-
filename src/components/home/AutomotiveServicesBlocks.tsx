import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback.tsx';

export const AutomotiveServicesBlocks: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900 border-b border-neutral-800 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-800 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold block mb-2">
              AUTOMOTIVE WORKSHOP SUITE
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white leading-none">
              AUTOMOTIVE SERVICES
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-mono">
            Bumper-to-bumper repair and maintenance capabilities for passenger cars, light trucks, and heavy-duty vehicles in Corpus Christi.
          </p>
        </div>

        {/* Mixed-Size Visual Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Block 1: Engine Repair (Large 8-col block) */}
          <div className="md:col-span-8 bg-neutral-950 border border-neutral-800 rounded overflow-hidden flex flex-col justify-between group hover:border-neutral-700 transition-colors">
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-neutral-900">
              <ImageWithFallback
                src="/images/engine.webp"
                alt="Engine Repair in Corpus Christi"
                fallbackTitle="Engine Repair & Overhauls"
                category="Engine Systems"
                iconType="engine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              <div className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 bg-neutral-950/90 border border-neutral-800 text-blue-400">
                POWERTRAIN
              </div>
            </div>
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-white group-hover:text-blue-400 transition-colors">
                  ENGINE REPAIR
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-mono max-w-xl leading-relaxed">
                  Timing chains and belts, cylinder heads, water pumps, oil leak resolution, intake manifold gaskets, and mechanical overhauls.
                </p>
              </div>
              <Link
                to="/services/engine-repair"
                className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-500 hover:text-blue-400 uppercase tracking-wider shrink-0"
              >
                <span>VIEW SERVICE</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Block 2: Brake Systems (4-col vertical block) */}
          <div className="md:col-span-4 bg-neutral-950 border border-neutral-800 rounded overflow-hidden flex flex-col justify-between group hover:border-neutral-700 transition-colors">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
              <ImageWithFallback
                src="/images/brakes.webp"
                alt="Brake Repair & Service"
                fallbackTitle="Brake Safety & Rotors"
                category="Brake Systems"
                iconType="brake"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              <div className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 bg-neutral-950/90 border border-neutral-800 text-blue-400">
                SAFETY
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-display font-black text-2xl uppercase text-white group-hover:text-blue-400 transition-colors">
                  BRAKE SYSTEMS
                </h3>
                <p className="mt-2 text-xs text-neutral-400 font-mono leading-relaxed">
                  Brake pad and shoe replacement, precision rotor servicing, hydraulic line leak repairs, and caliper overhauls.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-900 flex justify-end">
                <Link
                  to="/services/brake-repair"
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-500 hover:text-blue-400 uppercase tracking-wider"
                >
                  <span>VIEW SERVICE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Block 3: Transmission (4-col block) */}
          <div className="md:col-span-4 bg-neutral-950 border border-neutral-800 rounded p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors group">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-2">
                DRIVETRAIN
              </div>
              <h3 className="font-display font-black text-2xl uppercase text-white group-hover:text-blue-400 transition-colors">
                TRANSMISSION
              </h3>
              <p className="mt-2 text-xs text-neutral-400 font-mono leading-relaxed">
                Automatic transmission fluid service, clutch replacement, electronic shift solenoid testing, and drivetrain diagnostics.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-900 flex justify-end">
              <Link
                to="/services/transmission"
                className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-500 hover:text-blue-400 uppercase tracking-wider"
              >
                <span>DETAILS</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Block 4: Electrical Repair (4-col block) */}
          <div className="md:col-span-4 bg-neutral-950 border border-neutral-800 rounded p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors group">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-2">
                CIRCUITS
              </div>
              <h3 className="font-display font-black text-2xl uppercase text-white group-hover:text-blue-400 transition-colors">
                ELECTRICAL REPAIR
              </h3>
              <p className="mt-2 text-xs text-neutral-400 font-mono leading-relaxed">
                Alternator and starter testing, battery load analysis, parasitic battery drain tracing, and wiring harness restoration.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-900 flex justify-end">
              <Link
                to="/services/electrical"
                className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-500 hover:text-blue-400 uppercase tracking-wider"
              >
                <span>DETAILS</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Block 5: Air Conditioning (4-col block) */}
          <div className="md:col-span-4 bg-neutral-950 border border-neutral-800 rounded p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors group">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-2">
                CLIMATE
              </div>
              <h3 className="font-display font-black text-2xl uppercase text-white group-hover:text-blue-400 transition-colors">
                AIR CONDITIONING
              </h3>
              <p className="mt-2 text-xs text-neutral-400 font-mono leading-relaxed">
                Refrigerant evacuation and recharge, UV leak checks, compressor and condenser replacement for South Texas heat.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-900 flex justify-end">
              <Link
                to="/services/ac-service"
                className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-500 hover:text-blue-400 uppercase tracking-wider"
              >
                <span>DETAILS</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Block 6: Oil Change & Maintenance (6-col wide block) */}
          <div className="md:col-span-6 bg-neutral-950 border border-neutral-800 rounded p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors group">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-2">
                PREVENTIVE CARE
              </div>
              <h3 className="font-display font-black text-2xl uppercase text-white group-hover:text-blue-400 transition-colors">
                OIL CHANGE &amp; FILTERS
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-mono leading-relaxed">
                Diesel-grade and synthetic motor oils, quality oil filter replacements, fluid top-offs, and multi-point vehicle checks.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-900 flex justify-end">
              <Link
                to="/services/oil-change"
                className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-500 hover:text-blue-400 uppercase tracking-wider"
              >
                <span>SCHEDULE OIL SERVICE</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Block 7: Steering, Suspension & Exhaust (6-col wide block) */}
          <div className="md:col-span-6 bg-neutral-950 border border-neutral-800 rounded p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors group">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-2">
                CHASSIS &amp; EXHAUST
              </div>
              <h3 className="font-display font-black text-2xl uppercase text-white group-hover:text-blue-400 transition-colors">
                STEERING, SUSPENSION &amp; EXHAUST
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-mono leading-relaxed">
                Tie rod ends, ball joints, suspension bushings, strut/shock inspections, and exhaust leak repairs for vehicle road stability.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-900 flex justify-end">
              <Link
                to="/services/maintenance"
                className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-500 hover:text-blue-400 uppercase tracking-wider"
              >
                <span>CHASSIS INSPECTION</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
