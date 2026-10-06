import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Calendar, Phone } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback.tsx';
import { BUSINESS_INFO } from '../../data/business.ts';

export const DiagnosticFeature: React.FC = () => {
  const steps = [
    {
      title: 'Targeted Computerized Interrogation',
      desc: 'Retrieving both active and stored fault codes, live telemetry, and freeze-frame sensor data to map electronic behavior.',
    },
    {
      title: 'Physical & Mechanical Pinpoint Verification',
      desc: 'Confirming actual component failure through circuit load testing, fuel rail pressure testing, and mechanical inspection before replacing parts.',
    },
    {
      title: 'Cost-Effective Repair Precision',
      desc: 'Preventing unnecessary parts guessing by addressing the proven root malfunction the first time.',
    },
  ];

  return (
    <section className="py-20 bg-neutral-950 text-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large workshop / diagnostic visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              <ImageWithFallback
                src="/images/workshop-01.webp"
                alt="Automotive & Diesel Workshop in Corpus Christi"
                fallbackTitle="Workshop Diagnostics & Repair"
                category="Specialized Diagnostics"
                iconType="diagnostic"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-neutral-950/90 border border-neutral-800 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-blue-500 uppercase tracking-widest font-semibold">
                    Pinpoint Testing
                  </span>
                  <span className="text-neutral-400">
                    Corpus Christi, TX
                  </span>
                </div>
                <div className="text-sm font-display font-bold uppercase text-white mt-1">
                  Electronic &amp; Mechanical Problem Isolation
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy & Diagnostic philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-semibold mb-2">
              Diagnostic-First Philosophy
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
              Diagnose The Problem. Fix It Right.
            </h2>

            <p className="mt-6 text-sm sm:text-base text-neutral-300 leading-relaxed">
              Replacing parts on speculation is expensive and frustrating. Modern diesel and automotive systems operate on intertwined electrical, electronic, and hydraulic networks. Our shop prioritizes meticulous diagnostic analysis so you understand exactly what failed and why before any wrench turns.
            </p>

            <div className="mt-8 space-y-5">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="mt-0.5 p-1 rounded bg-neutral-900 border border-neutral-800 text-blue-500 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display">
                      {step.title}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 pt-6 border-t border-neutral-800">
              <Link
                to="/book-service"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded transition-all shadow-md active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule Diagnostics</span>
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-blue-500 rounded transition-all active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                <span>Speak with Our Shop</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
