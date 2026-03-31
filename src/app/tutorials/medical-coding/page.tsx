'use client';
import React, { useState, useEffect } from 'react';
import TechLayout from '@/components/layout/tech-layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';

export default function MedicalCodingLandingPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const modules = [
    {
      id: 'anatomy-medical-terminology',
      title: 'Anatomy and Medical Terminology',
      description: 'Learn the fundamentals of medical coding, anatomy, and medical terminology essential for medical coding professionals',
      icon: <Stethoscope className="w-12 h-12 text-sky-400" />,
      href: '/tutorials/medical-coding/anatomy-medical-terminology',
      topics: ['Medical Coding Basics', 'Anatomy Fundamentals', 'Medical Terminology', 'ICD-10-CM', 'CPT', 'HCPCS']
    }
  ];

  return (
    <TechLayout
      technology="medical-coding"
      onThisPage={[]}
      activeSection=""
      setActiveSection={() => { }}
      activeSubsection={null}
      setActiveSubsection={() => { }}
      hideSidebar={true}
      disableBackground={false}
      background="white"
    >
      <div
        className="min-h-screen rounded-[2rem] md:rounded-[3.5rem] p-[var(--space-md)] md:p-[var(--space-xl)] text-slate-900 border transition-all duration-300 bg-white"
        style={{
          border: '1px solid #e2e8f0',
        }}
      >
        {/* Animated Background - Removed */}

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-[var(--space-xl)] relative mx-auto max-w-5xl"
          >
            <div className="bg-gray-50 rounded-[3rem] p-[var(--space-md)] md:p-[var(--space-xl)] border border-gray-200 shadow-sm relative overflow-hidden">
              <h1 className="font-bold mb-6 relative z-10 tracking-tight leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                <span className="text-gray-900">
                  Medical Coding Course
                </span>
              </h1>
              <p className="text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed relative z-10" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                Master medical coding, anatomy, and terminology for healthcare documentation
              </p>
            </div>
          </motion.div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)] lg:gap-[var(--space-lg)] mb-[var(--space-xl)]">
            {modules.map((module) => (
              <Link
                key={module.id}
                href={module.href}
                className="group relative bg-white rounded-tl-2xl rounded-tr-[3rem] rounded-bl-[3rem] rounded-br-2xl p-[var(--space-md)] md:p-[var(--space-lg)] border border-gray-200 hover:border-sky-500/50 transition-all duration-300 shadow-sm hover:shadow-md h-full flex flex-col"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-4xl flex-shrink-0">
                    {React.cloneElement(module.icon as React.ReactElement<any>, { className: 'w-12 h-12 text-sky-400' })}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-sky-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {module.title}
                    </h2>
                    <p className="text-sm mb-4 min-h-[40px]" style={{ color: 'var(--text-secondary)' }}>
                      {module.description}
                    </p>
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Topics Covered</h3>
                  <ul className="space-y-2">
                    {module.topics.map((topic, index) => (
                      <li key={index} className="flex items-center text-gray-700 text-sm">
                        <svg className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center text-sky-400 group-hover:text-sky-300 transition-colors">
                  <span className="text-sm font-semibold mr-2">Start Learning</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Course Overview */}
          <div className="bg-gray-50 rounded-[2.5rem] p-[var(--space-md)] md:p-[var(--space-lg)] border border-gray-200">
            <h2 className="font-bold text-gray-900 mb-6 uppercase tracking-wider" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>Course Overview</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What You'll Learn</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Medical coding fundamentals and principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>ICD-10-CM, CPT, and HCPCS coding systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Human anatomy and organ systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Medical terminology (prefixes, suffixes, root words)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Revenue Cycle Management (RCM)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>CPC certification preparation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Prerequisites</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>No prior medical knowledge required</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>Basic understanding of English language</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>Willingness to learn medical terminology and anatomy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TechLayout>
  );
}

