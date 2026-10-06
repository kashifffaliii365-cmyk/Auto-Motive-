import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { WORKSHOP_GALLERY_IMAGES } from '../../data/business.ts';
import { Lightbox } from '../common/Lightbox.tsx';
import { ImageWithFallback } from '../common/ImageWithFallback.tsx';

export const WorkshopGallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-24 bg-neutral-900 border-b border-neutral-800 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-800 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold block mb-2">
              FACILITY &amp; SERVICE BAYS
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white leading-none">
              WORKSHOP GALLERY
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-mono">
            A look inside our Corpus Christi diesel and automotive repair facility on Apollo Rd. Click any image to view in high resolution.
          </p>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKSHOP_GALLERY_IMAGES.map((item, idx) => {
            const isMarquee = idx === 0 || idx === 3;

            return (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className={`group relative rounded overflow-hidden bg-neutral-950 border border-neutral-800 hover:border-blue-500/80 transition-all cursor-pointer shadow-lg ${
                  isMarquee ? 'lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                }`}
              >
                <ImageWithFallback
                  src={item.src}
                  alt={item.alt}
                  fallbackTitle={item.title}
                  category={item.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Technical Corner Badge */}
                <div className="absolute top-3 right-3 p-2 rounded bg-neutral-950/80 border border-neutral-800 text-neutral-400 group-hover:text-blue-400 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption Plate */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <span className="text-white font-display font-bold uppercase text-base sm:text-lg block tracking-wide">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-neutral-500 hidden sm:inline">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={WORKSHOP_GALLERY_IMAGES}
        currentIndex={activeIndex}
        onNavigate={(index) => setActiveIndex(index)}
      />
    </section>
  );
};
