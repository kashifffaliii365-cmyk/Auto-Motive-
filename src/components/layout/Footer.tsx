import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Star, ShieldCheck, Clock, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../../data/business.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 text-sm pb-20 md:pb-8 pt-16 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <h3 className="font-display font-extrabold text-xl text-white tracking-wider uppercase">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Dependable diesel &amp; automotive repair, computerized diagnostics, routine maintenance, and commercial fleet services in Corpus Christi, Texas.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs">
              <div className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-white ml-1.5">{BUSINESS_INFO.googleRating}</span>
              </div>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-300 font-medium">{BUSINESS_INFO.reviewCount} Google Reviews</span>
            </div>
            <div className="pt-1 flex items-center gap-2 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>Diagnostic-Focused Precision</span>
            </div>
          </div>

          {/* Column 2: Quick Links & Core Categories */}
          <div>
            <h4 className="font-display font-bold text-sm text-neutral-100 uppercase tracking-widest mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES_LIST.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-neutral-600 font-mono">›</span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 mt-1"
                >
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="font-display font-bold text-sm text-neutral-100 uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About the Shop
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  All Repair &amp; Diagnostic Services
                </Link>
              </li>
              <li>
                <Link to="/services/fleet-service" className="hover:text-white transition-colors">
                  Commercial Fleet Service
                </Link>
              </li>
              <li>
                <Link to="/book-service" className="hover:text-white transition-colors">
                  Book a Service Online
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Location
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-neutral-900">
              <h5 className="font-display font-bold text-xs text-neutral-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-500" />
                <span>Shop Hours</span>
              </h5>
              <p className="text-xs text-neutral-300 font-mono leading-relaxed">
                {BUSINESS_INFO.hoursNotice}
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="font-display font-bold text-sm text-neutral-100 uppercase tracking-widest mb-4">
              Shop Information
            </h4>
            <div className="space-y-3.5 text-xs">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 block mb-1">
                  Direct Phone
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-white hover:text-blue-400 font-bold text-sm flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-500" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 block mb-1">
                  Physical Address
                </span>
                <p className="text-neutral-300 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    {BUSINESS_INFO.address.street}
                    <br />
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                    <br />
                    {BUSINESS_INFO.address.country}
                  </span>
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-200 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 px-3 py-2 rounded transition-all"
                >
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-blue-500" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Corpus Christi, Texas</span>
            <span className="text-neutral-700">·</span>
            <span>Professional Diesel &amp; Automotive Repair</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
