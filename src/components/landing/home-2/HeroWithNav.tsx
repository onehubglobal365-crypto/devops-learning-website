'use client';

import { useState, useEffect, Suspense } from 'react';
import SharedNav from '@/components/layout/shared-nav';
import HeroContent from './HeroContent';

export default function HeroWithNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Glass Navigation Bar */}
      <Suspense fallback={null}>
        <SharedNav isScrolled={isScrolled} showAnimatedLine={true} isFixed={true} />
      </Suspense>

      <section className="fixed top-0 left-0 w-full h-[100dvh] overflow-hidden" style={{ zIndex: 0 }}>

        {/* Hero Content */}
        <HeroContent />
      </section>

      {/* Invisible spacer so the content starts after the hero height */}
      <div className="relative h-[100dvh] pointer-events-none" style={{ zIndex: 10 }} />
    </>
  );
}
