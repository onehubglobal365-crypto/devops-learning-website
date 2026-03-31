'use client';

import { useState, useEffect, Suspense } from 'react';
import SharedNav from '@/components/layout/shared-nav';
import HeroContent from './HeroContent';

export default function HeroWithNav() {
  return (
    <>
      <section className="fixed top-0 left-0 w-full h-[70dvh] md:h-[100dvh] overflow-hidden" style={{ zIndex: 0 }}>

        {/* Hero Content */}
        <HeroContent />
      </section>

      {/* Invisible spacer so the content starts after the hero height */}
      <div className="relative h-[70dvh] md:h-[100dvh] pointer-events-none" style={{ zIndex: 10 }} />
    </>
  );
}
