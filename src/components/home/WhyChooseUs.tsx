import React from 'react';
import { ShieldCheck, Cpu, Truck, Clock, Wrench, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business.ts';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Professional Automotive Service',
      desc: 'Dedicated mechanical care for personal and commercial vehicles in Corpus Christi, treating every job with disciplined workmanship.',
      icon: <Wrench className="w-6 h-6 text-blue-500" />,
    },
    {
      title: 'Diagnostic-Focused Repair',
      desc: 'We trace electrical, sensor, and mechanical faults to their root cause before recommending component replacements.',
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
    },
    {
      title: 'Diesel & Automotive Capabilities',
      desc: 'Equipped to service light and heavy-duty diesel engines alongside standard passenger car and truck systems.',
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    },
    {
      title: 'Preventive Maintenance & Repair',
      desc: 'From routine oil services and brake inspections to major engine and transmission repairs, we keep your vehicle road-ready.',
      icon: <Clock className="w-6 h-6 text-blue-500" />,
    },
    {
      title: 'Commercial Fleet Support',
      desc: 'Proactive maintenance and priority repairs tailored for business fleets and contractors requiring minimal downtime.',
      icon: <Truck className="w-6 h-6 text-blue-500" />,
    },
    {
      title: 'Convenient Booking & Contact',
      desc: `Direct phone dispatch at ${BUSINESS_INFO.phone} plus an online booking system to schedule service appointments when it fits your day.`,
      icon: <PhoneCall className="w-6 h-6 text-blue-500" />,
    },
  ];

  return (
    <section className="py-20 bg-neutral-900/60 border-y border-neutral-800 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-semibold">
            Dependability First
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white mt-2">
            Why Vehicle Owners Trust South Texas Diesel &amp; Automotive
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            We focus on honest diagnostic transparency, quality repairs, and dependable automotive care for drivers and businesses across the Coastal Bend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-neutral-950/80 border border-neutral-800/90 p-7 rounded-lg relative overflow-hidden group hover:border-neutral-700 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-5 group-hover:border-blue-600/40 transition-colors">
                {pt.icon}
              </div>

              <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white mb-2">
                {pt.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
