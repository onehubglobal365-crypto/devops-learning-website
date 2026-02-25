'use client';

import { useState } from 'react';
import CompactSection from './CompactSection';
import ScrollAnimate from './ScrollAnimate';

interface VisionMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const milestones: VisionMilestone[] = [
  {
    id: '1',
    year: '2025',
    title: 'Foundation & Growth',
    description: 'Establishing strong partnerships with industry leaders and expanding our course catalog',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    id: '2',
    year: '2026',
    title: 'Innovation & Scale',
    description: 'Launching AI-powered learning platforms and reaching 10,000+ active learners',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: '3',
    year: '2027',
    title: 'Global Expansion',
    description: 'Expanding to international markets and establishing partnerships with global tech companies',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: '4',
    year: '2027+',
    title: 'Industry Leadership',
    description: 'Becoming the leading platform for tech education and career transformation',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function VisionRoadmap() {
  const [hoveredMilestone, setHoveredMilestone] = useState<string | null>(null);

  return (
    <CompactSection
      title="Our Vision"
      subtitle="Charting the path to excellence in tech education"
      backgroundColor="#ffffff"
    >
      <div className="max-w-6xl mx-auto py-8">
        <ScrollAnimate animation="fade-up" triggerOnce={false} stagger={true}>
          <div className="relative">
            {/* Milestones - Horizontal Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative">
              {milestones.map((milestone, index) => {
                const isHovered = hoveredMilestone === milestone.id;
                const isActive = isHovered;
                const isFirst = index === 0;
                const isLast = index === milestones.length - 1;

                return (
                  <div
                    key={milestone.id}
                    className="relative flex flex-col items-center"
                    onMouseEnter={() => setHoveredMilestone(milestone.id)}
                    onMouseLeave={() => setHoveredMilestone(null)}
                  >
                    {/* Connection Line - Starts from first milestone (2025), positioned above icon circles */}
                    {!isLast && (
                      <div
                        className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 z-0"
                        style={{
                          backgroundColor: isActive ? '#0ea5e9' : 'rgba(122, 148, 165, 0.4)',
                          width: 'calc(100% + 4rem)',
                        }}
                      >
                        {/* Arrow at the end of connection */}
                        <div
                          className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-r-0 border-t-[4px] border-b-[4px] transition-colors duration-300"
                          style={{
                            borderLeftColor: isActive ? '#0ea5e9' : 'rgba(122, 148, 165, 0.4)',
                            borderTopColor: 'transparent',
                            borderBottomColor: 'transparent',
                          }}
                        />
                      </div>
                    )}

                    {/* Road Marker / Milestone Point */}
                    <div className="relative z-20 mb-6">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-md"
                        style={{
                          backgroundColor: isActive ? '#0ea5e9' : '#ffffff',
                          border: `2px solid ${isActive ? '#0ea5e9' : '#e2e8f0'}`,
                          transform: isActive ? 'scale(1.15)' : 'scale(1)',
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                          style={{
                            backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : '#f8fafc',
                            color: isActive ? '#ffffff' : '#94a3b8',
                          }}
                        >
                          {milestone.icon}
                        </div>
                      </div>
                      {/* Year Badge */}
                      <div
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 shadow-sm border"
                        style={{
                          backgroundColor: isActive ? '#0ea5e9' : '#ffffff',
                          color: isActive ? '#ffffff' : '#64748b',
                          borderColor: isActive ? '#0ea5e9' : '#e2e8f0',
                          transform: isActive ? 'scale(1.1) translateY(4px)' : 'scale(1) translateY(0)',
                        }}
                      >
                        {milestone.year}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`bg-white rounded-2xl p-7 transition-all duration-500 cursor-pointer w-full group ${isActive ? 'shadow-[0_25px_50px_rgba(0,0,0,0.1)] border-blue-500' : 'shadow-lg border-gray-100'
                        }`}
                      style={{
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        borderColor: isActive ? '#083D77' : '#f1f5f9',
                        transform: isActive ? 'translateY(-12px)' : 'translateY(0)',
                        minHeight: '200px',
                      }}
                    >
                      <div className="flex flex-col items-center text-center h-full">
                        {/* Title */}
                        <h3 className="font-bold mb-4 text-gray-900 text-lg transition-colors group-hover:text-blue-700">
                          {milestone.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-500 text-sm leading-relaxed flex-1">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </CompactSection>
  );
}

