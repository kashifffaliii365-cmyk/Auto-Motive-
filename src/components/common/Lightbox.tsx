import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; title: string; category: string; alt: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2.5 rounded bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Left */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex - 1 + images.length) % images.length);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded bg-neutral-900/90 border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Navigation Right */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex + 1) % images.length);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded bg-neutral-900/90 border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded bg-neutral-950 border border-neutral-800 shadow-2xl">
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[75vh] w-auto max-w-full object-contain"
            onError={(e) => {
              // Graceful replacement if local file not uploaded yet
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.fallback-plate')) {
                const fallback = document.createElement('div');
                fallback.className = 'fallback-plate p-12 text-center flex flex-col items-center justify-center min-h-[360px] text-neutral-300';
                fallback.innerHTML = `
                  <div class="font-mono text-xs uppercase tracking-widest text-blue-500 mb-2">${current.category}</div>
                  <div class="font-display font-bold text-2xl uppercase text-white mb-2">${current.title}</div>
                  <div class="text-xs font-mono text-neutral-500">South Texas Diesel And Automotive Services LLC · 3917 Apollo Rd</div>
                `;
                parent.appendChild(fallback);
              }
            }}
          />
        </div>

        {/* Captions */}
        <div className="mt-4 w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-neutral-400">
          <div>
            <span className="text-blue-500 uppercase font-semibold mr-2">{current.category}</span>
            <span className="text-white font-medium">{current.title}</span>
          </div>
          <div className="text-neutral-500">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
};
