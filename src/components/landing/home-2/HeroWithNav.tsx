'use client';

import { useState, useEffect, Suspense } from 'react';
import SharedNav from '@/components/layout/shared-nav';
import HeroContent from './HeroContent';

export default function HeroWithNav() {
  return (
    <>
      <section 
        className="fixed top-14 md:top-16 left-0 w-full h-auto aspect-video md:h-[80vh] md:aspect-none overflow-hidden bg-[#021d3a]" 
        style={{ zIndex: 0 }}
      >
        {/* Hero Content */}
        <HeroContent />
      </section>

      {/* Invisible spacer so the content starts after the hero height */}
      <div 
        className="relative h-[calc(56.25vw+56px)] md:h-[calc(80vh+64px)] pointer-events-none" 
        style={{ zIndex: 10 }} 
      />
    </>
  );
}
