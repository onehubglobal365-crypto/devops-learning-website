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

      <section className="relative flex flex-col overflow-hidden" style={{ zIndex: 1 }}>

        {/* Hero Content */}
        <HeroContent />
      </section>
    </>
  );
}

