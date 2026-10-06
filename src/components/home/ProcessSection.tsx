import React from 'react';
import { Calendar, Search, Wrench, CheckCircle } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'REQUEST SERVICE',
      desc: 'Book your service online or call our shop directly to tell us about your vehicle issues and scheduling preference.',
      icon: <Calendar className="w-6 h-6 text-blue-500" />,
    },
    {
      num: '02',
      title: 'DIAGNOSE',
      desc: 'Our technicians inspect the vehicle, run computerized scans, and pinpoint mechanical or electronic root causes.',
      icon: <Search className="w-6 h-6 text-blue-500" />,
    },
    {
      num: '03',
      title: 'REPAIR',
      desc: 'With your approval, we perform the necessary repairs using quality components and calibrated manufacturer torque standards.',
      icon: <Wrench className="w-6 h-6 text-blue-500" />,
    },
    {
      num: '04',
      title: 'GET BACK ON THE ROAD',
      desc: 'After road testing and quality verification, your vehicle is ready to drive with renewed reliability and safety.',
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
    },
  ];

  return (
    <section className="py-20 bg-neutral-900/40 border-y border-neutral-800 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-semibold">
            Clear, Straightforward Workflow
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white mt-2">
            How We Service Your Vehicle
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            A disciplined four-step repair process focused on accuracy, transparent communication, and road reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="bg-neutral-950/90 border border-neutral-800 p-6 rounded-lg relative flex flex-col justify-between group hover:border-neutral-700 transition-all duration-300"
            >
              {/* Header with Step Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-black text-3xl text-neutral-600 group-hover:text-blue-500/80 transition-colors">
                    {step.num}
                  </span>
                  <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-blue-500/30 transition-colors">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg uppercase tracking-wider text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Progress indicator line */}
              <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                <span>Step {idx + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
