import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, Calendar, Check, AlertTriangle, ArrowRight } from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/business.ts';
import { ImageWithFallback } from '../components/common/ImageWithFallback.tsx';
import { FAQAccordion } from '../components/common/FAQAccordion.tsx';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Handle aliases like 'electrical' vs 'electrical-repair'
  const normalizedSlug = slug === 'electrical-repair' ? 'electrical' : slug;
  const service = SERVICES_LIST.find(
    (s) => s.slug === normalizedSlug || s.slug === slug
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service) {
      document.title = `${service.title} | South Texas Diesel And Automotive Services LLC`;
    }
  }, [service, slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = SERVICES_LIST.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  );

  return (
    <main className="min-h-screen pt-28 sm:pt-36 bg-neutral-950 text-neutral-100">
      {/* 1. Breadcrumb */}
      <div className="border-b border-neutral-800 bg-neutral-900/40 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <Link to="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <span className="text-neutral-600">/</span>
            <Link to="/services" className="hover:text-white transition-colors">
              SERVICES
            </Link>
            <span className="text-neutral-600">/</span>
            <span className="text-blue-500 font-bold uppercase">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* 2. Strong Service Hero */}
      <section className="py-16 sm:py-24 border-b border-neutral-800 bg-neutral-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-widest text-blue-500">
                <span>{service.category}</span>
                <span className="text-neutral-600">/</span>
                <span>CORPUS CHRISTI, TX</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-[0.92]">
                {service.title}
              </h1>

              <div className="mt-4 text-base sm:text-xl font-mono text-neutral-300 italic border-l-2 border-blue-500 pl-4">
                &ldquo;{service.heroTagline}&rdquo;
              </div>

              <p className="mt-6 text-sm sm:text-base text-neutral-400 font-mono leading-relaxed max-w-2xl">
                {service.shortDesc}
              </p>

              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to={`/book-service?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase text-white bg-blue-600 hover:bg-blue-700 rounded transition-all shadow-md active:scale-98 shadow-blue-950/40"
                >
                  <Calendar className="w-4 h-4" />
                  <span>BOOK {service.title}</span>
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

            {/* Right Media Plate */}
            <div className="lg:col-span-5">
              <div className="relative rounded overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  fallbackTitle={service.title}
                  category={service.category}
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-neutral-950/95 border border-neutral-800 rounded text-xs font-mono text-neutral-300">
                  <span className="text-[10px] text-blue-500 uppercase font-bold block">
                    SERVICE STANDARD
                  </span>
                  <span className="text-white font-bold block uppercase mt-0.5">
                    3917 Apollo Rd · Professional Workshop Facility
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Service Overview */}
      <section className="py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold block mb-2">
              TECHNICAL BRIEFING
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
              OVERVIEW &amp; TECHNICAL PURPOSE
            </h2>
            <div className="mt-6 text-base text-neutral-300 leading-relaxed space-y-4">
              <p>{service.fullDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 5. What the Service Covers & Common Reasons Split */}
      <section className="py-20 bg-neutral-900/50 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 4. What the service covers */}
            <div className="bg-neutral-950 border border-neutral-800 rounded p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold block mb-2">
                  SCOPE OF WORK
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-6">
                  WHAT THE SERVICE COVERS
                </h3>

                <ul className="space-y-3.5">
                  {service.whatItCovers.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 font-mono">
                      <div className="w-4 h-4 rounded bg-neutral-900 border border-neutral-800 text-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-900 text-xs font-mono text-neutral-500">
                All repairs completed with quality components and verified torque standards.
              </div>
            </div>

            {/* 5. Common reasons customers need it */}
            <div className="bg-neutral-950 border border-neutral-800 rounded p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold block mb-2">
                  SYMPTOM INDICATORS
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-6">
                  COMMON REASONS FOR SERVICE
                </h3>

                <ul className="space-y-3.5">
                  {service.commonSymptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 font-mono">
                      <div className="w-4 h-4 rounded bg-neutral-900 border border-neutral-800 text-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                        <AlertTriangle className="w-3 h-3" />
                      </div>
                      <span className="leading-relaxed">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-900 text-xs font-mono text-neutral-500">
                Notice any of these symptoms? Schedule an intake inspection before secondary damage occurs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Diagnostic / Repair Process */}
      <section className="py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold block mb-2">
              DISCIPLINED EXECUTION
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
              THE {service.title.toUpperCase()} WORKFLOW
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-neutral-900/60 border border-neutral-800 rounded p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="font-display font-black text-4xl text-neutral-600 mb-4 tracking-tighter">
                    {step.step}
                  </div>
                  <h4 className="font-display font-black text-lg uppercase text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-neutral-400 font-mono leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Reusable FAQAccordion Component Integration */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 bg-neutral-900/40 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQAccordion
              items={service.faqs}
              title={`QUESTIONS ABOUT ${service.title.toUpperCase()}`}
              subtitle="TECHNICAL & SERVICE FAQS"
              defaultOpenIndex={0}
              allowMultiple={false}
            />
          </div>
        </section>
      )}

      {/* 7. Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-800">
              <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white">
                RELATED REPAIR CAPABILITIES
              </h3>
              <Link
                to="/services"
                className="text-xs font-mono uppercase tracking-wider text-blue-500 hover:text-blue-400 flex items-center gap-1 font-bold"
              >
                <span>ALL SERVICES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/services/${rel.slug}`}
                  className="bg-neutral-900/60 border border-neutral-800 hover:border-neutral-600 rounded p-6 group transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500 block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="font-display font-black text-xl uppercase text-white group-hover:text-blue-400 transition-colors">
                      {rel.title}
                    </h4>
                    <p className="mt-2 text-xs text-neutral-400 font-mono line-clamp-2 leading-relaxed">
                      {rel.shortDesc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-blue-500 font-bold">
                    <span>EXPLORE SERVICE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. Book Service CTA Banner */}
      <section className="py-20 bg-neutral-950 text-neutral-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 border border-neutral-800 rounded p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold block mb-1">
                CORPUS CHRISTI WORKSHOP
              </span>
              <h3 className="font-display font-black text-3xl uppercase tracking-tight text-white">
                READY TO SCHEDULE {service.title.toUpperCase()}?
              </h3>
              <p className="text-sm text-neutral-400 font-mono mt-2 max-w-xl">
                Submit your vehicle details online or call our shop directly at {BUSINESS_INFO.phone}.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                to={`/book-service?service=${encodeURIComponent(service.title)}`}
                className="px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase text-white bg-blue-600 hover:bg-blue-700 rounded transition-all shadow-md active:scale-98 shadow-blue-950/40"
              >
                BOOK SERVICE
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-6 py-4 text-xs font-mono font-bold tracking-widest uppercase text-neutral-200 hover:text-white bg-neutral-950 border border-neutral-700 rounded transition-all"
              >
                CALL SHOP
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
