import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business.ts';

// Automotive car & truck background images for the auto-sliding hero
const HERO_CAR_SLIDES = [
  {
    id: 1,
    title: 'Heavy-Duty Diesel & Work Trucks',
    spec: 'POWERSTROKE · CUMMINS · DURAMAX',
    image: '/images/diesel-01.webp',
    placeholderIcon: 'truck',
  },
  {
    id: 2,
    title: 'Vehicle Engine & Electronic Diagnostics',
    spec: 'LIVE TELEMETRY · SENSOR CORRELATION',
    image: '/images/diagnostics.webp',
    placeholderIcon: 'gauge',
  },
  {
    id: 3,
    title: 'Workshop Service Bays & Mechanical Lifts',
    spec: '3917 APOLLO RD · CORPUS CHRISTI, TX',
    image: '/images/workshop-01.webp',
    placeholderIcon: 'wrench',
  },
  {
    id: 4,
    title: 'Brake Systems & Hydraulic Repairs',
    spec: 'ROTORS · CALIPERS · HEAVY-DUTY LINES',
    image: '/images/brakes.webp',
    placeholderIcon: 'brake',
  },
  {
    id: 5,
    title: 'Commercial Fleet & Truck Maintenance',
    spec: 'FAST TURNAROUNDS · DOWNTIME REDUCTION',
    image: '/images/workshop-02.webp',
    placeholderIcon: 'fleet',
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-slide effect every 4.5 seconds
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_CAR_SLIDES.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_CAR_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_CAR_SLIDES.length) % HERO_CAR_SLIDES.length);
  };

  const heroRailItems = [
    { label: 'DIESEL REPAIR', slug: 'diesel-repair' },
    { label: 'DIAGNOSTICS', slug: 'diesel-diagnostics' },
    { label: 'BRAKES', slug: 'brake-repair' },
    { label: 'ENGINE & TRANSMISSION', slug: 'transmission' },
    { label: 'FLEET SERVICE', slug: 'fleet-service' },
  ];

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between bg-neutral-950 pt-28 sm:pt-36 pb-0 overflow-hidden border-b border-neutral-800">
      {/* Auto-sliding Background Carousel of Cars & Workshop Images */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        {HERO_CAR_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover scale-105 transition-transform duration-[6000ms] ease-out"
                style={{
                  transform: isActive ? 'scale(1.08)' : 'scale(1.0)',
                }}
                onError={(e) => {
                  // If webp is awaiting local asset, keep visual pristine with industrial dark pattern
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
              {/* Fallback mechanical dark grid layer behind each slide */}
              <div
                className="absolute inset-0 bg-neutral-950 opacity-40"
                style={{
                  backgroundImage: `linear-gradient(to right, #172554 1px, transparent 1px), linear-gradient(to bottom, #172554 1px, transparent 1px)`,
                  backgroundSize: '48px 48px',
                }}
              />
            </div>
          );
        })}

        {/* Blue and Neutral Ambient Glow */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none z-10" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none z-10" />

        {/* Contrast Scrims: 100% WCAG AA readability for White & Blue Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/70 z-10" />
      </div>

      {/* Main Hero Content — Intentional Left-Aligned Composition */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 my-auto">
        <div className="max-w-3xl text-left">
          {/* Small Label */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>DIESEL &amp; AUTOMOTIVE SERVICE</span>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-400">CORPUS CHRISTI, TEXAS</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.92]">
            KEEPING WORK TRUCKS, CARS &amp; DIESELS MOVING.
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed">
            Professional diagnostics, repair and maintenance for diesel and automotive vehicles in Corpus Christi.
          </p>

          {/* Buttons: Blue & Black */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/book-service"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase text-white bg-blue-600 hover:bg-blue-700 rounded transition-all shadow-xl shadow-blue-950/50 hover:shadow-blue-600/30 active:scale-98"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK A SERVICE</span>
            </Link>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-blue-500 rounded transition-all active:scale-98"
            >
              <Phone className="w-4 h-4 text-blue-500" />
              <span>CALL {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Subtle Location & Trust Stamp */}
          <div className="mt-10 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-400">
            <span>3917 APOLLO RD</span>
            <span className="text-neutral-700">·</span>
            <span>4.9 ★ GOOGLE RATING (86 REVIEWS)</span>
            <span className="text-neutral-700">·</span>
            <span className="text-blue-400 font-semibold">HEAVY-DUTY SHOP</span>
          </div>
        </div>
      </div>

      {/* Auto-Slide Carousel Controls & Active Image Indicator Bar */}
      <div className="relative z-20 w-full bg-neutral-950/80 border-t border-neutral-800/80 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          {/* Active slide details */}
          <div className="flex items-center gap-3">
            <span className="text-blue-500 font-bold">
              0{currentSlide + 1} / 0{HERO_CAR_SLIDES.length}
            </span>
            <span className="text-neutral-600">|</span>
            <span className="text-white font-medium truncate max-w-xs sm:max-w-md">
              {HERO_CAR_SLIDES[currentSlide].title}
            </span>
            <span className="text-neutral-500 text-[11px] hidden md:inline">
              ({HERO_CAR_SLIDES[currentSlide].spec})
            </span>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3">
            {/* Progress Indicators */}
            <div className="flex items-center gap-1.5 mr-2">
              {HERO_CAR_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentSlide
                      ? 'w-6 bg-blue-500'
                      : 'w-1.5 bg-neutral-700 hover:bg-neutral-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Play/Pause Button */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            {/* Prev / Next buttons */}
            <button
              type="button"
              onClick={prevSlide}
              className="p-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="p-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Hero Information Rail */}
      <div className="relative z-20 w-full bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-x divide-neutral-800/80 text-xs font-mono">
            {heroRailItems.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="py-4 px-3 sm:px-4 flex items-center justify-between text-neutral-400 hover:text-white hover:bg-neutral-900/60 transition-colors group"
              >
                <span className="font-bold tracking-wider uppercase text-[11px] sm:text-xs truncate">
                  {item.label}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
