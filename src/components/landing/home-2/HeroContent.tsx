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
  const [shouldType, setShouldType] = useState(false);

  useEffect(() => {
    if (isVisible && !shouldType) {
      setShouldType(true);
    } else if (!isVisible && hasBeenVisible) {
      setShouldType(false);
    }
  }, [isVisible, hasBeenVisible, shouldType]);

  return (
    <div
      ref={ref}
      className="relative min-h-[60vh] lg:min-h-[75vh] flex items-center pt-32 pb-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0f1d 0%, #083d77 100%)' }}
    >
      {/* Subtle Background Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      {/* Curved Bottom Mask - Refined */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-[100.1%] h-[60px] fill-[#f8fafc]">
          <path d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Content */}
          <div className="text-left max-w-3xl pl-4 md:pl-20">
            <div className={`mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-wider uppercase">
                Empowering Future Leaders
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.15]">
              <span className={`inline-block transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Your Career Journey
              </span>
              <br />
              <span
                className={`text-blue-400 inline-block transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                Starts Here
              </span>
            </h1>

            <div className="mb-12 text-lg md:text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              <TypingText
                text="Access world-class job opportunities and master the skills needed to dominate your career path. Join the elite network of successful professionals."
                speed={30}
                delay={800}
                className="text-gray-300 leading-relaxed"
                trigger={shouldType}
              />
            </div>

            <div className={`flex flex-col sm:flex-row gap-6 justify-start items-center transition-all duration-1000 delay-[1000ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link href="/signup" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:-translate-y-1 active:scale-95 text-lg">
                Get Started Now
              </Link>
              <Link href="/courses" className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1 text-lg">
                Explore Programs
              </Link>
            </div>
          </div>

          {/* Right Column: Professional Image Presentation */}
          <div className="relative h-[450px] md:h-[550px] w-full flex items-center justify-center">
            <div className={`relative h-full w-full max-w-[550px] transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95'}`}>
              {/* Image with Professional Border/Shadow */}
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                <Image
                  src="/hero-bg-v2.jpg"
                  alt="Professional Education"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0f1d]/40 to-transparent"></div>
              </div>

              {/* Sophisticated Stat Overlay instead of floating icons */}
              <div className={`absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl transition-all duration-1000 delay-[1200ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 leading-none">250,000+</p>
                    <p className="text-sm font-semibold text-gray-500">Graduates Placed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
