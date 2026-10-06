import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business.ts';

export const MobileActionBar: React.FC = () => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 px-3 py-2 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-200 active:bg-neutral-800 hover:text-white transition-colors"
        >
          <Phone className="w-4 h-4 text-blue-500 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
        </a>

        {/* Book Service primary */}
        <Link
          to="/book-service"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded bg-blue-600 text-white active:bg-blue-700 shadow-md transition-colors"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Book Service</span>
        </Link>

        {/* Directions button */}
        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-200 active:bg-neutral-800 hover:text-white transition-colors"
        >
          <Navigation className="w-4 h-4 text-blue-500 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Directions</span>
        </a>
      </div>
    </aside>
  );
};
