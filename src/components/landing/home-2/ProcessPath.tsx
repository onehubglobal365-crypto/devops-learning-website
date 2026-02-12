'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollAnimate from './ScrollAnimate';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isHighlighted?: boolean;
}

const steps: ProcessStep[] = [
  {
    id: '1',
    number: '01',
    title: 'Fusing Academia & Corporate Dynamics',
    description: 'Enhancing the Academic Curriculum with Industry Experts to pave the way for career excellence',
    icon: (
      <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: '2',
    number: '02',
    title: 'Interactive Learning Modules',
    description: 'Enhance Learning with personalized experiences, extensive courses, and seamless progress tracking with our world-class LMS',
    icon: (
      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: '3',
    number: '03',
    title: 'Industry Ready Skills',
    description: 'Learn in-demand skills with curriculum designed by professionals for real-world success. Get job-ready with industry-standard practices',
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: '4',
    number: '04',
    title: 'Certification & Career Growth',
    description: 'Earn industry-recognized certifications and launch your career with our comprehensive placement support',
    icon: (
      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function ProcessPath() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <section className="compact-section py-20" style={{ backgroundColor: '#fcfcfc' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Section - Image and Text */}
          <ScrollAnimate animation="fade-up" triggerOnce={false}>
            <div className="relative pr-8">
              <div className="flex flex-col mb-8">
                <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3 block">Methodology</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  The OHG365 Experience
                </h2>
                <div className="h-1.5 w-24 bg-blue-600 rounded-full mb-8"></div>
                <p className="text-gray-500 text-lg leading-relaxed">
                  We specialize in transforming potential into success through a structured ecosystem of tailored upskilling, corporate internships, and professional workshops.
                </p>
              </div>
              <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-gray-100 p-3">
                <Image
                  src="/images/why-choose-ohg365.png"
                  alt="Professional Education Structure"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain rounded-2xl"
                  priority
                />
              </div>
            </div>
          </ScrollAnimate>

          {/* Right Section - Timeline with Numbers */}
          <ScrollAnimate animation="fade-up" triggerOnce={false}>
            <div className="relative pl-4 md:pl-10">
              <div
                ref={stepsRef}
                className={`relative space-y-8 stagger-container ${stepsVisible ? 'visible' : ''}`}
              >
                {steps.map((step, index) => {
                  const isHovered = hoveredStep === step.id;
                  const isActive = isHovered;
                  const isLast = index === steps.length - 1;

                  return (
                    <div
                      key={step.id}
                      className="relative pl-20"
                      onMouseEnter={() => setHoveredStep(step.id)}
                      onMouseLeave={() => setHoveredStep(null)}
                    >
                      {/* Vertical Line - Clean Corporate Style */}
                      {!isLast && (
                        <div
                          className="absolute left-10 top-14 w-0.5 transition-all duration-300"
                          style={{
                            height: 'calc(100% + 1rem)',
                            backgroundColor: isActive ? '#0284c7' : '#e2e8f0',
                          }}
                        >
                        </div>
                      )}

                      {/* Professional Number Marker */}
                      <div
                        className="absolute left-0 top-0 flex items-center justify-center transition-all duration-300 border-2"
                        style={{
                          width: '80px',
                          height: '80px',
                          backgroundColor: isActive ? '#0284c7' : '#ffffff',
                          borderColor: isActive ? '#0284c7' : '#e2e8f0',
                          borderRadius: '20px',
                          transform: isHovered ? 'scale(1.05) rotate(5deg)' : 'scale(1)',
                          zIndex: 10,
                        }}
                      >
                        <span
                          className="font-bold text-3xl select-none transition-colors duration-300"
                          style={{
                            color: isActive ? '#ffffff' : '#0f172a',
                            fontFamily: 'var(--font-heading)',
                            lineHeight: '1',
                          }}
                        >
                          {step.number}
                        </span>
                      </div>

                      {/* Refined Content Card */}
                      <div
                        className={`bg-white rounded-3xl p-8 transition-all duration-500 cursor-pointer border ${isActive ? 'shadow-[0_20px_50px_rgba(2,132,199,0.15)] border-blue-500 scale-[1.02]' : 'shadow-sm border-gray-100'
                          }`}
                      >
                        <div className="flex items-start gap-6">
                          <div
                            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                            style={{
                              backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'rgba(122, 148, 165, 0.1)',
                              transform: isActive ? 'scale(1.1)' : 'scale(1)',
                            }}
                          >
                            {step.icon}
                          </div>
                          <div className="flex-1">
                            <h3
                              className="font-bold mb-1.5 text-sm transition-colors duration-300"
                              style={{
                                color: 'var(--text-primary)',
                              }}
                            >
                              {step.title}
                            </h3>
                            <p
                              className="text-xs leading-relaxed transition-colors duration-300"
                              style={{
                                color: 'var(--text-secondary)',
                              }}
                            >
                              {step.description}
                            </p>
                            {/* Animated underline */}
                            <div
                              className="mt-2 h-0.5 transition-all duration-300 rounded-full"
                              style={{
                                width: isActive ? '100%' : '50px',
                                backgroundColor: isActive ? '#083D77' : '#bae6fd',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}

