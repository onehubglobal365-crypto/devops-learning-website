'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TypingText from './TypingText';
import { ArrowRight } from 'lucide-react';


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
      // Reset when scrolled out of view
      setShouldType(false);
    }
  }, [isVisible, hasBeenVisible, shouldType]);

  return (
    <div ref={ref} className="flex-1 flex items-center justify-center relative z-0 px-4 py-12 bg-[url('/hero-new-bg.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
      <style>{`
        @keyframes heroShineHome {
            0% { transform: translateX(-200%) skewX(-25deg); }
            100% { transform: translateX(400%) skewX(-25deg); }
        }
        .hero-shine-home {
            position: absolute;
            top: 0;
            left: 0;
            width: 40%;
            height: 100%;
            background: linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent);
            animation: heroShineHome 6s infinite linear;
            z-index: 1;
            pointer-events: none;
        }
      `}</style>

      <div className="absolute inset-0 bg-white/70 z-[-1]" />
      <div className="hero-shine-home"></div>

      <div className="container mx-auto flex flex-col items-center justify-center gap-8 max-w-4xl relative z-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-sky-600 mb-6 leading-tight">
            <span className={`inline-block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Your Career Journey Starts Here
            </span>
            <br />
            <span
              className={`text-sky-600 inline-block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: '0.3s' }}
            >
              <TypingText
                text="Learn, Grow, Succeed"
                speed={80}
                delay={500}
                className="text-sky-600"
                trigger={shouldType}
              />
            </span>
          </h1>
          <p
            className={`text-base md:text-lg text-sky-600 mb-8 max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0 delay-700' : 'opacity-0 -translate-x-10'}`}
            style={{ animationDelay: '0.7s' }}
          >
            <TypingText
              text="Find job opportunities and enhance your skills to achieve your career goals."
              speed={30}
              delay={1500}
              className="text-[#2c666e]"
              trigger={shouldType}
            />
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100 delay-1000' : 'opacity-0 scale-95'}`}
            style={{ animationDelay: '1s' }}
          >
            <Link href="/signup" className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Get Started</span>
            </Link>
            <Link href="/courses" className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Explore Courses</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

