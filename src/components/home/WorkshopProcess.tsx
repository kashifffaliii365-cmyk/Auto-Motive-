import React from 'react';
import { ArrowRight } from 'lucide-react';

export const WorkshopProcess: React.FC = () => {
  const processSteps = [
    {
      num: '01',
      title: "TELL US WHAT'S WRONG",
      description: "Describe the symptoms, warning lights, leaks, or noises when booking online or speaking with our shop.",
      detail: "Intake & History",
    },
    {
      num: '02',
      title: "DIAGNOSE THE VEHICLE",
      description: "Our technicians run computer scans, inspect physical components, and verify the root fault.",
      detail: "Testing & Isolation",
    },
    {
      num: '03',
      title: "RECOMMEND THE REPAIR",
      description: "We provide an honest estimate explaining what needs immediate attention and what can wait.",
      detail: "Transparent Approval",
    },
    {
      num: '04',
      title: "GET YOU BACK ON THE ROAD",
      description: "Repairs are completed to factory specifications and road-tested for dependable performance.",
      detail: "Quality Clearance",
    },
  ];

  return (
    <section className="py-24 bg-neutral-950 border-b border-neutral-800 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold block mb-2">
            METHODOLOGY / WORKSHOP WORKFLOW
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
            HOW WE WORK
          </h2>
          <p className="mt-3 text-sm text-neutral-400 font-mono">
            A disciplined four-step repair process designed for technical precision and clear customer communication.
          </p>
        </div>

        {/* Horizontal Workshop Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-b border-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          {processSteps.map((step, idx) => (
            <div
              key={step.num}
              className="py-8 px-6 sm:px-8 flex flex-col justify-between hover:bg-neutral-900/50 transition-colors group relative"
            >
              <div>
                {/* Technical Number & Tag */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display font-black text-5xl sm:text-6xl text-neutral-700 group-hover:text-blue-500 transition-colors tracking-tighter">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 px-2 py-1 bg-neutral-900 border border-neutral-800 rounded group-hover:border-blue-500/40 transition-colors">
                    {step.detail}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-xl uppercase tracking-wide text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-400 leading-relaxed font-mono">
                  {step.description}
                </p>
              </div>

              {/* Step indicator arrow */}
              <div className="mt-8 pt-4 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-600">
                <span>PHASE 0{idx + 1}</span>
                {idx < 3 && (
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-700 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
