'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TypingText from './TypingText';
import { Mail, Star, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function HeroContent() {
  const { ref, isVisible, hasBeenVisible } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: false
  });
  const heroImages = [
    '/hero section/WhatsApp Image 2026-02-12 at 3.37.35 PM.jpeg',
    '/hero section/WhatsApp Image 2026-02-12 at 3.37.36 PM (1).jpeg',
    '/hero section/WhatsApp Image 2026-02-12 at 3.37.36 PM (2).jpeg',
    '/hero section/WhatsApp Image 2026-02-12 at 3.37.36 PM.jpeg',
    '/hero section/WhatsApp Image 2026-02-12 at 3.37.37 PM (1).jpeg',
    '/hero section/WhatsApp Image 2026-02-12 at 3.37.37 PM.jpeg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div
      ref={ref}
      className="relative min-h-[60vh] md:min-h-screen flex items-center pt-32 md:pt-48 lg:pt-80 pb-10 overflow-hidden"
    >
      {/* Background Slideshow - Original Clarity */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-2000 ${currentImageIndex === idx ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image src={img} alt="" fill className="object-cover" priority={idx === 0} />
          </div>
        ))}
      </div>

      {/* Centered Buttons Overlay - Restored original size */}
      {/* <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-[500ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link href={`/signup?redirect=${encodeURIComponent('/')}`} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:-translate-y-1 active:scale-95 text-lg">
            Get Started Now
          </Link>
          <Link href="/courses" className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1 text-lg">
            Explore Programs
          </Link>
        </div>
      </div> */}

    </div>
  );
}
