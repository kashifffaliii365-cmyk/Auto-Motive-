import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero.tsx';
import { TrustIntro } from '../components/home/TrustIntro.tsx';
import { ServiceDirectory } from '../components/home/ServiceDirectory.tsx';
import { FeaturedService } from '../components/home/FeaturedService.tsx';
import { WorkshopProcess } from '../components/home/WorkshopProcess.tsx';
import { AutomotiveServicesBlocks } from '../components/home/AutomotiveServicesBlocks.tsx';
import { FleetSection } from '../components/home/FleetSection.tsx';
import { WorkshopGallery } from '../components/home/WorkshopGallery.tsx';
import { GoogleReviewsSection } from '../components/home/GoogleReviewsSection.tsx';
import { LocationSection } from '../components/home/LocationSection.tsx';
import { FinalCta } from '../components/home/FinalCta.tsx';

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "South Texas Diesel And Automotive Services LLC | Diesel & Auto Repair in Corpus Christi, TX";
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950">
      {/* SECTION 01 — CINEMATIC HERO */}
      <Hero />

      {/* SECTION 02 — TRUST INTRO */}
      <TrustIntro />

      {/* SECTION 03 — SERVICE DIRECTORY */}
      <ServiceDirectory />

      {/* SECTION 04 — FEATURED SERVICE */}
      <FeaturedService />

      {/* SECTION 05 — HOW WE WORK */}
      <WorkshopProcess />

      {/* SECTION 06 — AUTOMOTIVE SERVICES */}
      <AutomotiveServicesBlocks />

      {/* SECTION 07 — FLEET SERVICES */}
      <FleetSection />

      {/* SECTION 08 — WORKSHOP GALLERY */}
      <WorkshopGallery />

      {/* SECTION 09 — GOOGLE REVIEWS */}
      <GoogleReviewsSection />

      {/* SECTION 10 — LOCATION */}
      <LocationSection />

      {/* SECTION 11 — FINAL CTA */}
      <FinalCta />
    </main>
  );
};
