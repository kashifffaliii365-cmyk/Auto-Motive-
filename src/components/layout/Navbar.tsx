import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business.ts';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'SERVICES', path: '/services' },
    { label: 'FLEET SERVICE', path: '/services/fleet-service' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 select-none">
      {/* Top Utility Strip (Desktop) */}
      <div className={`bg-neutral-950 border-b border-neutral-800/80 text-[11px] font-mono transition-all duration-200 hidden md:block ${
        isScrolled ? 'h-0 opacity-0 overflow-hidden py-0 border-b-0' : 'py-2 px-4 sm:px-6 lg:px-8'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="text-neutral-200 font-semibold tracking-wider uppercase">
              SOUTH TEXAS DIESEL AND AUTOMOTIVE SERVICES LLC
            </span>
            <span className="text-neutral-700">|</span>
            <span className="flex items-center gap-1 text-neutral-400">
              <MapPin className="w-3 h-3 text-blue-500" />
              CORPUS CHRISTI, TX
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hover:text-white transition-colors flex items-center gap-1.5 font-bold text-neutral-200"
            >
              <Phone className="w-3 h-3 text-blue-500" />
              <span>PHONE: {BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-neutral-700">|</span>
            <Link
              to="/book-service"
              className="text-blue-400 hover:text-blue-300 font-semibold uppercase tracking-wider transition-colors"
            >
              BOOK SERVICE
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`bg-neutral-950/95 border-b border-neutral-800 transition-all duration-200 ${
          isScrolled ? 'py-3 shadow-2xl' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
            >
              <div className="w-9 h-9 rounded bg-blue-600 text-white flex items-center justify-center font-display font-black text-lg tracking-tighter shadow-md group-hover:bg-blue-500 transition-colors">
                ST
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg sm:text-xl md:text-2xl tracking-wide text-white uppercase group-hover:text-blue-400 transition-colors leading-none">
                  South Texas Diesel
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-neutral-400 uppercase leading-tight mt-0.5">
                  &amp; Automotive Services LLC
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-xs font-mono font-bold tracking-widest text-neutral-300">
              {navLinks.map((link) => {
                const isActive =
                  link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path) && link.path !== '/services/fleet-service');

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`py-1.5 transition-colors relative hover:text-white ${
                      isActive
                        ? 'text-white border-b-2 border-blue-500 font-black'
                        : 'text-neutral-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side CTAs (Desktop) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-bold text-neutral-200 hover:text-white bg-neutral-900 border border-neutral-700 hover:border-blue-500 rounded transition-all uppercase"
                title="Call Shop"
              >
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                <span>CALL NOW</span>
              </a>

              <Link
                to="/book-service"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase text-white bg-blue-600 hover:bg-blue-700 rounded transition-all shadow-md active:scale-95 shadow-blue-950/40"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>BOOK A SERVICE</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="sm:hidden p-2 rounded bg-neutral-900 border border-neutral-800 text-blue-500"
                aria-label="Call shop"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                aria-label="Toggle navigation"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-neutral-800 px-6 py-6 shadow-2xl">
          <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest pb-3 border-b border-neutral-900 mb-3">
            Navigation Menu
          </div>
          <nav className="flex flex-col gap-3 font-mono text-sm tracking-wider">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 px-3 rounded flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-neutral-900 text-blue-500 font-bold border-l-2 border-blue-500'
                      : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 pt-5 border-t border-neutral-900 flex flex-col gap-3">
            <Link
              to="/book-service"
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-mono font-bold tracking-wider uppercase text-white bg-blue-600 hover:bg-blue-700 rounded text-center"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK A SERVICE</span>
            </Link>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-mono font-bold tracking-wider uppercase text-neutral-200 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 rounded text-center"
            >
              <Phone className="w-4 h-4 text-blue-500" />
              <span>CALL +1 361-444-6820</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
