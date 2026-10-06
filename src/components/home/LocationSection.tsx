import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Navigation, Calendar, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business.ts';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900 border-b border-neutral-800 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Location & Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold block mb-2">
                SHOP LOCATION &amp; CONTACT
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
                VISIT THE FACILITY
              </h2>
            </div>

            <p className="text-sm text-neutral-300 font-mono leading-relaxed">
              Located on Apollo Rd in Corpus Christi, Texas. Equipped with heavy-duty vehicle lifts, electronic diagnostic consoles, and full mechanical bays.
            </p>

            <div className="bg-neutral-950 border border-neutral-800 p-6 rounded space-y-4 font-mono text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-500 uppercase tracking-widest block text-[10px]">
                    STREET ADDRESS
                  </span>
                  <div className="text-white font-bold text-sm mt-0.5">
                    {BUSINESS_INFO.address.street}
                  </div>
                  <div className="text-neutral-300">
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                  </div>
                  <div className="text-neutral-500">
                    {BUSINESS_INFO.address.country}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-900 flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-500 uppercase tracking-widest block text-[10px]">
                    TELEPHONE
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-white font-bold text-base hover:text-blue-400 transition-colors block mt-0.5"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* CTAs: GET DIRECTIONS, CALL SHOP, BOOK SERVICE */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono font-bold tracking-widest uppercase text-white bg-blue-600 hover:bg-blue-700 rounded transition-all shadow-md active:scale-98 shadow-blue-950/40"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono font-bold tracking-widest uppercase text-neutral-200 hover:text-white bg-neutral-950 border border-neutral-700 hover:border-blue-500 rounded transition-all"
              >
                <Phone className="w-4 h-4 text-blue-500" />
                <span>CALL SHOP</span>
              </a>

              <Link
                to="/book-service"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono font-bold tracking-widest uppercase text-neutral-200 hover:text-white bg-neutral-950 border border-neutral-700 hover:border-blue-500 rounded transition-all"
              >
                <Calendar className="w-4 h-4 text-blue-500" />
                <span>BOOK SERVICE</span>
              </Link>
            </div>
          </div>

          {/* Right: Map Embed */}
          <div className="lg:col-span-7">
            <div className="relative rounded overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl h-[380px] sm:h-[440px]">
              <iframe
                title="South Texas Diesel And Automotive Services LLC Map"
                src={BUSINESS_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(105%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute top-4 right-4 z-10">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-neutral-950 border border-neutral-700 rounded shadow-lg hover:bg-neutral-900 transition-all"
                >
                  <span>EXPAND GOOGLE MAPS</span>
                  <ExternalLink className="w-3 h-3 text-blue-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
