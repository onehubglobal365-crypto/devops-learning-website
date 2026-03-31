'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import { TechnologyCard, CardGrid } from '@/components/common/technology-card';

function WebDevContent() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-16 md:pt-24 lg:pt-32">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-indigo-900 to-blue-900 leading-tight">
            Web Development Tutorials
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master the core technologies of the web. Choose a path to start your journey.
          </p>
        </div>

        <CardGrid>
          <TechnologyCard
            title="HTML"
            description="Learn the foundation of the web: Structure, Semantic Elements, Forms and more"
            icon={<div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" fill className="object-contain" unoptimized /></div>}
            link="/tutorials/html"
            gradient="from-orange-400 to-red-600"
            iconBg="bg-white"
          />
          <TechnologyCard
            title="CSS"
            description="Complete CSS course: Styles, Selectors, Layout, Colors and more"
            icon={<div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" fill className="object-contain" unoptimized /></div>}
            link="/tutorials/css"
            gradient="from-blue-400 to-indigo-600"
            iconBg="bg-white"
          />
          <TechnologyCard
            title="JavaScript"
            description="Complete JavaScript course: ES6, DOM, Async/Await and more"
            icon={<div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" fill className="object-contain" unoptimized /></div>}
            link="/tutorials/javascript"
            gradient="from-yellow-400 to-yellow-600"
            iconBg="bg-white"
          />
        </CardGrid>
      </div>
    </main>
  );
}

export default function WebDevPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <WebDevContent />
    </Suspense>
  );
}
