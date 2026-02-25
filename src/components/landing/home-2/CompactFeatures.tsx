'use client';

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
      backgroundColor="#ffffff"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto px-4 py-8">
        {features.map((feature) => {
          return (
            <div
              key={feature.id}
              className="group relative bg-white p-2 transition-all duration-500 hover:scale-[1.02] w-full"
            >
              {/* The Styled Border Container */}
              <div className="relative w-full min-h-[280px] border-2 rounded-[30px] flex flex-col items-center justify-center p-8 bg-white shadow-sm group-hover:shadow-2xl transition-all duration-500 overflow-visible border-blue-400">

                {/* Floating Integrated Header - Centered on Mobile */}
                <div className="absolute top-[-24px] md:top-[-30px] left-1/2 md:left-6 -translate-x-1/2 md:translate-x-0 bg-white px-4 md:px-5 py-2 flex items-center gap-3 z-10 transition-all group-hover:-translate-y-1 rounded-2xl shadow-md border border-gray-100 w-[max-content]">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:bg-blue-600 shadow-inner">
                    <div className="transition-colors duration-500 group-hover:text-white transform scale-75">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xs md:text-sm font-black text-gray-900 tracking-tight whitespace-nowrap">
                    {feature.title}
                  </h3>
                </div>

                {/* Content Area */}
                <div className="text-center pt-4">
                  <p className="text-gray-500 text-sm leading-relaxed px-2">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Line Path - Matching Roadmap Style */}
                <div className="absolute top-0 left-[160px] right-8 h-0.5 bg-blue-400 hidden lg:block opacity-20 group-hover:opacity-100 transition-opacity">
                  <div className="absolute right-0 top-[-3px] w-2 h-2 border-t-2 border-r-2 border-blue-400 rotate-45" />
                  <div className="absolute left-[-2px] bottom-[-2px] w-2 h-2 border-l-2 border-t-2 border-blue-400 -rotate-45" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </CompactSection>
  );
}
