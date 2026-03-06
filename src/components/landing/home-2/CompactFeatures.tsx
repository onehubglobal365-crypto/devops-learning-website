'use client';

import React from 'react';
import CompactSection from './CompactSection';

interface Feature {
  id: string;
  title: string;
  description: string;
  bgHelper: string; // Tailwind class or hex
  iconBg: string; // Helper for icon styling if needed
}

const features = [
  {
    id: '1',
    title: 'Video Tutorials',
    description: '150+ high-quality video tutorials with hands-on examples from industry experts. Learn at your own pace.',
    bgColor: '#fff1f2', // Peach/Pink-ish
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: '2',
    title: 'Interactive Learning',
    description: 'Practice with built-in code terminals, interactive exercises, and real-world projects. Get hands-on experience.',
    bgColor: '#f3e8ff', // Purple
    icon: (
      <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: '3',
    title: 'Industry Ready',
    description: 'Learn in-demand skills with curriculum designed by professionals for real-world success. Get job-ready.',
    bgColor: '#ecfdf5', // Mint
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: '4',
    title: 'Career Support',
    description: 'Get comprehensive placement support, resume reviews, and interview preparation to launch your career.',
    bgColor: '#fce7f3', // Pink
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function CompactFeatures() {
  return (
    <CompactSection
      title="Key Features"
      subtitle="Industry-leading methodologies and comprehensive career growth paths"
      backgroundColor="#f8fafc" // Light slate background for contrast
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--space-lg)] w-full max-w-7xl mx-auto px-[var(--space-md)] py-[var(--space-xl)]">
        {features.map((feature, index) => {
          // Define unique colors for each card based on its index
          const colors = [
            { border: 'border-orange-200', text: 'text-orange-600', bg: 'bg-orange-50', hover: 'group-hover:border-orange-500', glow: 'shadow-orange-500/20' },
            { border: 'border-cyan-200', text: 'text-cyan-600', bg: 'bg-cyan-50', hover: 'group-hover:border-cyan-500', glow: 'shadow-cyan-500/20' },
            { border: 'border-blue-200', text: 'text-blue-600', bg: 'bg-blue-50', hover: 'group-hover:border-blue-500', glow: 'shadow-blue-500/20' },
            { border: 'border-purple-200', text: 'text-purple-600', bg: 'bg-purple-50', hover: 'group-hover:border-purple-500', glow: 'shadow-purple-500/20' },
          ][index % 4];

          return (
            <div
              key={feature.id}
              className="group relative h-full transition-all duration-500 pt-8"
            >
              <div className={`h-full bg-white border-2 ${colors.border} ${colors.hover} rounded-[2rem] p-[var(--space-lg)] flex flex-col items-center text-center transition-all duration-500 shadow-sm hover:shadow-2xl ${colors.glow} hover:-translate-y-2 relative overflow-visible`}>

                {/* Floating Badge Header */}
                <div className={`absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-3xl shadow-xl border ${colors.border} flex items-center gap-4 z-20 min-w-[210px] justify-center transition-all duration-500 group-hover:scale-105 ring-8 ring-white`}>
                  <div className={`w-12 h-12 ${colors.bg} rounded-2xl flex items-center justify-center transition-all duration-500 ${index === 0 ? 'group-hover:bg-orange-500' : index === 1 ? 'group-hover:bg-cyan-500' : index === 2 ? 'group-hover:bg-blue-500' : 'group-hover:bg-purple-500'} group-hover:text-white`}>
                    {feature.icon && React.cloneElement(feature.icon as any, {
                      className: "w-7 h-7 transition-colors duration-500"
                    })}
                  </div>
                  <span className={`text-xs md:text-sm font-black uppercase tracking-[0.1em] ${colors.text}`}>
                    {feature.title}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6 flex-1 flex flex-col justify-center">
                  <p className="text-gray-600 font-medium leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Accent Decor */}
                <div className={`mt-6 w-12 h-1 rounded-full ${colors.bg} transition-all duration-500 group-hover:w-24 group-hover:bg-current ${colors.text}`}></div>
              </div>
            </div>
          );
        })}
      </div>
    </CompactSection>
  );
}
