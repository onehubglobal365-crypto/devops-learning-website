'use client';

import { Suspense, useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import TechLayout from '@/components/layout/tech-layout';

function JSContent() {
  const [activeSection, setActiveSection] = useState('m49');

  const allHeadings = useMemo(() => [
    { id: 'm49', title: 'JavaScript - Introduction' },
    { id: 'm50', title: 'JavaScript - Where To' },
    { id: 'm51', title: 'JavaScript - Output' },
    { id: 'm52', title: 'JavaScript - Statements' },
    { id: 'm53', title: 'JavaScript - Syntax' },
    { id: 'm54', title: 'JavaScript - Comments' },
    { id: 'm55', title: 'JavaScript - Variables' },
    { id: 'm56', title: 'JavaScript - Let' },
    { id: 'm57', title: 'JavaScript - Const' },
    { id: 'm58', title: 'JavaScript - Operators' },
    { id: 'm59', title: 'JavaScript - Arithmetic' },
    { id: 'm60', title: 'JavaScript - Data Types' },
  ], []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && allHeadings.some(h => h.id === hash)) {
        setActiveSection(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [allHeadings]);

  const renderContent = () => {
    switch (activeSection) {
      case 'm49':
        return (
          <main>
            <div className='animate-fade-in-up'>
              <h1 id="m49" className="text-5xl md:text-5xl font-extrabold mb-8 text-center text-slate-900">
                JavaScript Introduction
              </h1>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">What is JavaScript?</h2>
                <div className="text-lg text-gray-700 leading-relaxed mb-3">
                  JavaScript is the world's most popular programming language.
                  JavaScript is the programming language of the Web.
                  JavaScript is easy to learn.
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Why Study JavaScript?</h2>
                <div className="text-lg text-gray-700 leading-relaxed mb-3">
                  JavaScript is one of the 3 languages all web developers must learn:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>HTML</strong> to define the content of web pages</li>
                    <li><strong>CSS</strong> to specify the layout of web pages</li>
                    <li><strong>JavaScript</strong> to program the behavior of web pages</li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        );
      case 'm50':
        return (
          <main>
            <div className='animate-fade-in-up'>
              <h1 id="m50" className="text-5xl md:text-5xl font-extrabold mb-8 text-center text-slate-900">
                Where To
              </h1>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">The &lt;script&gt; Tag</h2>
                <div className="text-lg text-gray-700 leading-relaxed mb-3">
                  In HTML, JavaScript code is inserted between &lt;script&gt; and &lt;/script&gt; tags.
                </div>
              </div>
            </div>
          </main>
        );
      default:
        return null;
    }
  };

  return (
    <TechLayout
      technology="javascript" 
      onThisPage={allHeadings}
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      background="white"
    >
      <div
        className="min-h-screen rounded-none p-8 text-slate-900 border transition-all duration-300"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderColor: 'black',
        }}
      >
        {renderContent()}
      </div>
    </TechLayout>
  );
}

export default function JSTutorialPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <JSContent />
    </Suspense>
  );
}
