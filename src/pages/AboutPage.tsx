import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, CORE_SERVICE_CATEGORIES } from '../data/business.ts';
import { ImageWithFallback } from '../components/common/ImageWithFallback.tsx';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | South Texas Diesel And Automotive Services LLC";
  }, []);

  return (
    <main className="min-h-screen pt-28 sm:pt-36 bg-neutral-950 text-neutral-100">
      {/* 1. Hero */}
      <section className="py-16 sm:py-24 border-b border-neutral-800 bg-neutral-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-widest text-blue-500">
              <span>ABOUT THE FACILITY</span>
              <span className="text-neutral-600">/</span>
              <span>CORPUS CHRISTI, TX</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-[0.95]">
              BUILT FOR DEPENDABLE DIESEL &amp; AUTOMOTIVE REPAIR.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-neutral-300 font-mono leading-relaxed">
              South Texas Diesel And Automotive Services LLC is an active automotive and diesel service shop located at 3917 Apollo Rd in Corpus Christi, Texas.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Business Introduction & Diagnostic Philosophy */}
      <section className="py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold block">
                PRACTICAL WORKSHOP PRINCIPLES
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
                CLEAR DIAGNOSTICS BEFORE REPLACING PARTS
              </h2>

              <p className="text-base text-neutral-300 leading-relaxed">
                Bring us the warning light, noise, leak or performance problem. We&apos;ll diagnose the vehicle and explain what needs attention. We don&apos;t guess at complex common-rail fuel systems or clear check engine lights without finding the root electrical or mechanical cause.
              </p>

              <p className="text-sm text-neutral-400 font-mono leading-relaxed">
                Our workshop is built around high-load requirements: light and heavy-duty diesel work trucks, daily drivers, and local commercial fleets that operate under severe South Texas heat and highway conditions.
              </p>

              <div className="pt-4 border-t border-neutral-800 grid grid-cols-2 gap-4 text-xs font-mono text-neutral-300">
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase">RATING</span>
                  <span className="font-bold text-white text-base">4.9 / 5.0</span>
                  <span className="text-neutral-400 block">86 Google Reviews</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase">LOCATION</span>
                  <span className="font-bold text-white text-base">Apollo Rd</span>
                  <span className="text-neutral-400 block">Corpus Christi, TX 78413</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl">
                <ImageWithFallback
                  src="/images/workshop-01.webp"
                  alt="South Texas Diesel and Automotive workshop facility"
                  fallbackTitle="Workshop Service Bays"
                  category="Service Facility"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Service Capabilities Breakdown */}
      <section className="py-20 bg-neutral-900/50 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold block mb-2">
              TECHNICAL CAPABILITIES
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
              WHAT OUR SHOP HANDLES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_SERVICE_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="bg-neutral-950 border border-neutral-800 p-6 rounded flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display font-black text-xl uppercase tracking-wide text-white mb-2 pb-2 border-b border-neutral-800">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono mb-4">
                    {cat.description}
                  </p>
                  <ul className="space-y-1.5 text-xs font-mono text-neutral-300">
                    {cat.services.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-900">
                  <Link
                    to={`/services#${cat.id}`}
                    className="text-xs font-mono font-bold text-blue-500 hover:text-blue-400 uppercase inline-flex items-center gap-1"
                  >
                    <span>View Category</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Workshop Imagery & Fleet Services */}
      <section className="py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl">
                <ImageWithFallback
                  src="/images/diesel-01.webp"
                  alt="Diesel fleet repair and work truck service"
                  fallbackTitle="Commercial Fleet Service"
                  category="Fleet Work"
                  iconType="fleet"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold block">
                COMMERCIAL VEHICLE COMMITMENT
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
                KEEPING LOCAL BUSINESSES MOVING
              </h2>
              <p className="text-base text-neutral-300 leading-relaxed font-mono">
                We understand that commercial trucks carry livelihoods. Our fleet repair and maintenance program is designed to deliver fast turnaround times, predictable routine servicing, and direct communication with fleet managers.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/services/fleet-service"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-bold uppercase tracking-widest text-white bg-blue-600 hover:bg-blue-700 rounded transition-all shadow-md shadow-blue-950/40"
                >
                  <span>EXPLORE FLEET SERVICES</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-bold uppercase tracking-widest text-neutral-200 hover:text-white bg-neutral-900 border border-neutral-700 hover:border-blue-500 rounded"
                >
                  <span>CONTACT THE SHOP</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Location and Direct CTA */}
      <section className="py-20 bg-neutral-950 text-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold mb-2">
            CONVENIENT SCHEDULING
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
            VISIT OUR WORKSHOP ON APOLLO RD
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-mono max-w-xl">
            {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/book-service"
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase text-white bg-blue-600 hover:bg-blue-700 rounded transition-all shadow-md active:scale-98 shadow-blue-950/40"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK A SERVICE</span>
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase text-neutral-200 hover:text-white bg-neutral-900 border border-neutral-700 hover:border-blue-500 rounded transition-all"
            >
              <Phone className="w-4 h-4 text-blue-500" />
              <span>CALL {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
