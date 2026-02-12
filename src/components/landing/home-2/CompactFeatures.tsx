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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {features.map((feature) => {
          return (
            <div
              key={feature.id}
              className="group relative bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:border-blue-100 flex flex-col items-center text-center"
            >
              {/* Icon Circle - Professional Style */}
              <div className="mb-8 relative">
                <div className="w-20 h-20 bg-blue-50 rounded-[2rem] flex items-center justify-center transition-all duration-500 group-hover:bg-blue-600 group-hover:rotate-[10deg] shadow-inner">
                  <div className="transition-colors duration-500 group-hover:text-white">
                    {feature.icon}
                  </div>
                </div>
                {/* Subtle Decorative Dot */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-100 border-4 border-white rounded-full"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom Decoration */}
              <div className="mt-8 w-12 h-1 bg-gray-100 rounded-full group-hover:w-24 group-hover:bg-blue-600 transition-all duration-500"></div>
            </div>
          );
        })}
      </div>
    </CompactSection>
  );
}
