import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Calendar, ArrowUpRight } from 'lucide-react';
import { CORE_SERVICE_CATEGORIES, SERVICES_LIST, BUSINESS_INFO } from '../data/business.ts';
import { ImageWithFallback } from '../components/common/ImageWithFallback.tsx';

export const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Services Directory | South Texas Diesel And Automotive Services LLC";
  }, []);

  const displayedCategories =
    activeTab === 'all'
      ? CORE_SERVICE_CATEGORIES
      : CORE_SERVICE_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <main className="min-h-screen pt-28 sm:pt-36 bg-neutral-950 text-neutral-100">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 border-b border-neutral-800 bg-neutral-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-widest text-blue-500">
              <span>WORKSHOP SERVICES DIRECTORY</span>
              <span className="text-neutral-600">/</span>
              <span>CORPUS CHRISTI, TX</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-[0.95]">
              COMPLETE DIESEL &amp; AUTOMOTIVE CAPABILITIES.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-neutral-300 font-mono leading-relaxed">
              Find the exact service or inspection your vehicle requires. Click any service below to view technical scopes, warning symptoms, and repair procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation Bar */}
      <section className="sticky top-[73px] z-30 bg-neutral-950 border-b border-neutral-800 py-3 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs font-mono">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 font-bold uppercase tracking-wider rounded transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'all'
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
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 font-bold uppercase tracking-wider rounded transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Category Sections */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {displayedCategories.map((category) => {
            const detailedServices = SERVICES_LIST.filter((s) =>
              category.services.some((cs) => cs.slug === s.slug)
            );

            const uniqueDetailed = Array.from(
              new Map(detailedServices.map((item) => [item.slug, item])).values()
            );

            return (
              <div
                key={category.id}
                id={category.id}
                className="bg-neutral-900/60 border border-neutral-800 rounded p-6 sm:p-10"
              >
                {/* Category Heading */}
                <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-neutral-800 gap-4 mb-8">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold block mb-1">
                      CATEGORY OVERVIEW
                    </span>
                    <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
                      {category.name}
                    </h2>
                    <p className="mt-2 text-sm text-neutral-400 font-mono max-w-2xl">
                      {category.description}
                    </p>
                  </div>

                  <Link
                    to="/book-service"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded transition-all shrink-0 self-start md:self-auto shadow-md shadow-blue-950/40"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>BOOK {category.name}</span>
                  </Link>
                </div>

                {/* Sub-services list directory */}
                <div className="mb-10 pb-6 border-b border-neutral-800/80">
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest block mb-3">
                    SERVICES INCLUDED IN THIS SECTION:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {category.services.map((sub, sIdx) => (
                      <Link
                        key={sIdx}
                        to={`/services/${sub.slug}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-950 border border-neutral-800 hover:border-blue-500/80 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                      >
                        <span>{sub.name}</span>
                        <ArrowUpRight className="w-3 h-3 text-blue-500" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Service Cards for This Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {uniqueDetailed.map((item) => (
                    <div
                      key={item.slug}
                      className="bg-neutral-950 border border-neutral-800 rounded overflow-hidden flex flex-col justify-between group hover:border-neutral-700 transition-colors"
                    >
                      {/* Media Area */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.title}
                          fallbackTitle={item.title}
                          category={item.category}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                        <div className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 bg-neutral-950/90 border border-neutral-800 text-blue-400">
                          {item.category}
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="font-display font-black text-xl uppercase tracking-wide text-white group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-xs text-neutral-400 font-mono leading-relaxed line-clamp-3">
                            {item.shortDesc}
                          </p>
                        </div>

                        {/* Card Actions */}
                        <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between text-xs font-mono">
                          <Link
                            to={`/services/${item.slug}`}
                            className="font-bold text-blue-500 hover:text-blue-400 uppercase tracking-wider inline-flex items-center gap-1"
                          >
                            <span>VIEW DETAILS</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>

                          <Link
                            to={`/book-service?service=${encodeURIComponent(item.title)}`}
                            className="text-neutral-400 hover:text-white uppercase tracking-wider"
                          >
                            BOOK NOW
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer Support Strip */}
      <section className="py-16 bg-neutral-900 border-t border-neutral-800 text-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-black text-2xl uppercase text-white">
              NEED HELP IDENTIFYING THE MALFUNCTION?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-mono mt-1">
              Call our Corpus Christi shop directly to discuss symptoms with our technicians.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-6 py-3.5 text-xs font-mono font-bold tracking-widest uppercase text-white bg-blue-600 hover:bg-blue-700 rounded transition-all shadow-md shadow-blue-950/40"
            >
              CALL {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
