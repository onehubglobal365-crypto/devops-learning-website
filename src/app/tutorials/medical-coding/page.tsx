'use client';

import TechLayout from '@/components/tech-layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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
      icon: '🏥',
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
      disableBackground={true}
    >
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        {isMounted && (
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.8,
                x: [0, 150, 0],
                y: [0, -80, 0],
                scale: [1, 1.4, 1]
              }}
              transition={{
                opacity: { duration: 0.5 },
                default: {
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
              className="absolute -top-40 -right-40 w-96 h-96 bg-orange-400/60 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.7,
                x: [0, -150, 0],
                y: [0, 80, 0],
                scale: [1, 1.8, 1]
              }}
              transition={{
                opacity: { duration: 0.5 },
                default: {
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-300/50 rounded-full blur-[100px]"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.8,
                x: [0, 80, 0],
                y: [0, -120, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{
                opacity: { duration: 0.5 },
                default: {
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2
                }
              }}
              className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-400/50 rounded-full blur-3xl"
            />
          </div>
        )}

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-16">

            <h1 className="text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">Medical Coding Course</span>
            </h1>
            <p className="text-black text-xl">Master medical coding, anatomy, and terminology for healthcare documentation</p>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {modules.map((module) => (
              <Link
                key={module.id}
                href={module.href}
                className="group relative bg-[var(--bg-secondary)] rounded-tl-2xl rounded-tr-[3rem] rounded-bl-[3rem] rounded-br-2xl p-8 border border-gray-100 dark:border-white/10 hover:border-sky-500/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/10 h-full flex flex-col"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-4xl flex-shrink-0">{module.icon}</div>
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
                      <li key={index} className="flex items-center text-black text-sm">
                        <svg className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                  <span className="text-sm font-semibold mr-2">Start Learning</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Course Overview */}
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Course Overview</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">What You'll Learn</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Medical coding fundamentals and principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>ICD-10-CM, CPT, and HCPCS coding systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Human anatomy and organ systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Medical terminology (prefixes, suffixes, root words)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Revenue Cycle Management (RCM)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>CPC certification preparation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Prerequisites</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>No prior medical knowledge required</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Basic understanding of English language</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
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
