import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Gauge } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback.tsx';

export const FeaturedService: React.FC = () => {
  const diagnosticHighlights = [
    'Live common-rail pressure vs. commanded sensor interrogation',
    'Turbo boost actuator, wastegate, and backpressure checks',
    'Cylinder contribution and fuel injector balance rate analysis',
    'Pinpoint testing of wiring harnesses and reference voltages',
  ];

  return (
    <section className="py-24 bg-neutral-900 border-b border-neutral-800 text-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Asymmetric Image / Media Plate */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl">
              <ImageWithFallback
                src="/images/diagnostics.webp"
                alt="Diesel diagnostic equipment and live telemetry"
                fallbackTitle="Diesel Telemetry & Scanners"
                category="Diesel Diagnostics"
                iconType="diesel"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Technical Overlay Plate */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-neutral-950/95 border border-neutral-800 backdrop-blur-sm">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-2 border-b border-neutral-800">
                  <span className="text-blue-500 font-bold uppercase">DIESEL SPEC</span>
                  <span>CORPUS CHRISTI SHOP</span>
                </div>
                <div className="pt-2 text-sm font-display font-bold uppercase text-white tracking-wide">
                  High-Pressure Common Rail &amp; Boost Diagnostics
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial Copy & Concrete Diagnostic Philosophy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-widest text-blue-500">
              <Gauge className="w-4 h-4" />
              <span>SPECIALIZED DIESEL CAPABILITY</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
              DIESEL DIAGNOSTICS WITHOUT THE GUESSWORK.
            </h2>

            <p className="mt-6 text-base text-neutral-300 leading-relaxed">
              Diesel repair bills escalate quickly when technicians replace expensive high-pressure fuel pumps or turbos on a guess. We test fuel delivery, electronic signals, boost pressure, and mechanical compression before recommending a single replacement part.
            </p>

            <p className="mt-4 text-sm text-neutral-400 leading-relaxed font-mono">
              Whether your work truck has derated into limp mode, exhibits extended cranking, or generates abnormal exhaust smoke, our technicians isolate the exact mechanical or sensor cause.
            </p>

            <div className="mt-8 space-y-3">
              {diagnosticHighlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                  <div className="w-4 h-4 rounded bg-neutral-950 border border-neutral-800 text-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 pt-6 border-t border-neutral-800">
              <Link
                to="/services/diesel-diagnostics"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-mono font-bold uppercase tracking-widest text-white bg-blue-600 hover:bg-blue-700 rounded transition-all shadow-md active:scale-98 shadow-blue-950/40"
              >
                <span>EXPLORE DIESEL DIAGNOSTICS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/book-service?service=Diesel+Diagnostics"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-widest text-neutral-200 hover:text-white bg-neutral-950 border border-neutral-700 hover:border-blue-500 rounded transition-all"
              >
                <span>BOOK DIAGNOSTIC INTAKE</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
