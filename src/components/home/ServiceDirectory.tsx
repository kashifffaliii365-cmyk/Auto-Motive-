import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Gauge, Flame, Shield, Cog, Zap, Snowflake, Wrench, Truck } from 'lucide-react';
import { CORE_SERVICE_CATEGORIES } from '../../data/business.ts';

export const ServiceDirectory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case 'diesel':
        return <Gauge className="w-4 h-4 text-blue-500" />;
      case 'engine':
        return <Flame className="w-4 h-4 text-blue-500" />;
      case 'brakes':
        return <Shield className="w-4 h-4 text-blue-500" />;
      case 'transmission':
        return <Cog className="w-4 h-4 text-blue-500" />;
      case 'electrical':
        return <Zap className="w-4 h-4 text-blue-500" />;
      case 'climate':
        return <Snowflake className="w-4 h-4 text-blue-500" />;
      case 'maintenance':
        return <Wrench className="w-4 h-4 text-blue-500" />;
      case 'fleet':
        return <Truck className="w-4 h-4 text-blue-500" />;
      default:
        return <Wrench className="w-4 h-4 text-blue-500" />;
    }
  };

  const displayedCategories =
    selectedCategory === 'all'
      ? CORE_SERVICE_CATEGORIES
      : CORE_SERVICE_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <section className="py-24 bg-neutral-950 border-b border-neutral-800 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-800 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold block mb-2">
              CATALOG &amp; DIRECTORY
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-none">
              WHAT WE SERVICE
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-mono">
            Structured automotive and diesel capabilities. Select any service to view technical scopes, symptoms, and procedures.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
            }`}
          >
            ALL CATEGORIES
          </button>
          {CORE_SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Technical Directory Grid — Architectural Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedCategories.map((cat, idx) => (
            <div
              key={cat.id}
              className="bg-neutral-900/80 border border-neutral-800 rounded p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              {/* Category Header */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80 mb-4">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(cat.id)}
                    <h3 className="font-display font-black text-lg tracking-wide uppercase text-white">
                      {cat.name}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-600">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-5 font-mono">
                  {cat.description}
                </p>

                {/* Sub-services list */}
                <ul className="space-y-2 text-xs font-mono">
                  {cat.services.map((serv, sIdx) => (
                    <li key={sIdx}>
                      <Link
                        to={`/services/${serv.slug}`}
                        className="group flex items-center justify-between py-1.5 px-2 rounded hover:bg-neutral-800/80 text-neutral-300 hover:text-white transition-colors"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">
                          {serv.name}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-blue-500 transition-colors shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category Footer Action */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80">
                <Link
                  to={`/services#${cat.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-500 hover:text-blue-400 uppercase tracking-wider transition-colors"
                >
                  <span>Explore {cat.name}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Directory Footer Link */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-bold uppercase tracking-widest text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-700 rounded hover:border-blue-500 transition-all"
          >
            <span>VIEW FULL SERVICES DIRECTORY</span>
            <ArrowRight className="w-4 h-4 text-blue-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};
