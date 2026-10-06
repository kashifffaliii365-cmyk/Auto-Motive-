import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Gauge, Activity, Shield, Cog, Zap, Snowflake, Wrench, Truck } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback.tsx';

interface ServiceOverviewCard {
  title: string;
  slug: string;
  category: string;
  desc: string;
  icon: React.ReactNode;
  iconType: 'diesel' | 'engine' | 'brake' | 'transmission' | 'electrical' | 'ac' | 'workshop' | 'fleet';
  image: string;
}

export const ServicesOverview: React.FC = () => {
  const cards: ServiceOverviewCard[] = [
    {
      title: 'Diesel Repair',
      slug: 'diesel-repair',
      category: 'Diesel Services',
      desc: 'Expert fuel injectors, turbos, cooling lines, and heavy-duty mechanical repairs.',
      icon: <Gauge className="w-5 h-5 text-blue-500" />,
      iconType: 'diesel',
      image: '/images/diesel-01.webp',
    },
    {
      title: 'Engine Diagnostics',
      slug: 'engine-diagnostics',
      category: 'Engine & Diagnostics',
      desc: 'Computerized troubleshooting, check engine light tracing, and live sensor data.',
      icon: <Activity className="w-5 h-5 text-blue-500" />,
      iconType: 'engine',
      image: '/images/engine-diag.webp',
    },
    {
      title: 'Brake Repair',
      slug: 'brake-repair',
      category: 'Brake Systems',
      desc: 'Pads, shoes, precision rotor replacement, and hydraulic brake lines inspection.',
      icon: <Shield className="w-5 h-5 text-blue-500" />,
      iconType: 'brake',
      image: '/images/brakes.webp',
    },
    {
      title: 'Transmission',
      slug: 'transmission',
      category: 'Drivetrain',
      desc: 'Fluid exchange, clutch replacements, solenoid testing, and drivetrain diagnostics.',
      icon: <Cog className="w-5 h-5 text-blue-500" />,
      iconType: 'transmission',
      image: '/images/transmission.webp',
    },
    {
      title: 'Electrical Diagnostics',
      slug: 'electrical-repair',
      category: 'Electrical Systems',
      desc: 'Starters, alternators, battery testing, wiring repairs, and electronic modules.',
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      iconType: 'electrical',
      image: '/images/electrical.webp',
    },
    {
      title: 'A/C & Climate',
      slug: 'ac-service',
      category: 'Climate & A/C',
      desc: 'Refrigerant recharge, compressor repairs, condenser service, and leak detection.',
      icon: <Snowflake className="w-5 h-5 text-blue-500" />,
      iconType: 'ac',
      image: '/images/ac-service.webp',
    },
    {
      title: 'Oil Change & Maintenance',
      slug: 'oil-change',
      category: 'Routine Maintenance',
      desc: 'Premium diesel & synthetic motor oils, filters, fluid top-offs, and health checks.',
      icon: <Wrench className="w-5 h-5 text-blue-500" />,
      iconType: 'workshop',
      image: '/images/oil-service.webp',
    },
    {
      title: 'Fleet Services',
      slug: 'fleet-service',
      category: 'Commercial Care',
      desc: 'Dedicated commercial fleet repairs and maintenance to minimize business downtime.',
      icon: <Truck className="w-5 h-5 text-blue-500" />,
      iconType: 'fleet',
      image: '/images/fleet.webp',
    },
  ];

  return (
    <section className="py-20 bg-neutral-950 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-800">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-500 mb-2 font-semibold">
              Complete Automotive &amp; Diesel Solutions
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white">
              Core Repair &amp; Diagnostic Services
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-neutral-400 max-w-md">
            From precision computerized diagnostics to heavy-duty diesel overhauls, our shop handles every stage of vehicle care in Corpus Christi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Link
              key={card.slug}
              to={`/services/${card.slug}`}
              className="group flex flex-col bg-neutral-900/90 border border-neutral-800 hover:border-blue-500/70 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/20"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                <ImageWithFallback
                  src={card.image}
                  alt={card.title}
                  fallbackTitle={card.title}
                  category={card.category}
                  iconType={card.iconType}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 right-3 p-2 rounded bg-neutral-950/80 border border-neutral-800 backdrop-blur-sm">
                  {card.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    {card.category}
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-blue-500 group-hover:text-blue-400 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-blue-500 rounded transition-all"
          >
            <span>Explore Full Catalog of Services</span>
            <ArrowRight className="w-4 h-4 text-blue-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};
