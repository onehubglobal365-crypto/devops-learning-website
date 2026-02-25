'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AUTH_SYSTEM_AVAILABLE } from '@/config/authStatus';
import { TechnologyCard, CardGrid } from '@/components/common/technology-card';
import {
  Stethoscope, ClipboardList, Building2, BookOpen,
  Code2, Rocket, Coffee, FileCode, Database, Globe, BarChart2, Terminal, Server, Command,
  Landmark, Banknote, Calculator, BrainCircuit, PenTool, FileCheck
} from 'lucide-react';

import { motion } from 'framer-motion';

export default function TutorialsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
    AUTH_SYSTEM_AVAILABLE ? null : true
  );
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (!AUTH_SYSTEM_AVAILABLE) {
      setIsAuthenticated(true);
      return;
    }
    /* Original Authentication logic - Paused
    // Check authentication immediately on mount
    const token = localStorage.getItem('token');
    if (!token) {
      // Force immediate redirect - use replace to prevent back button
      window.location.replace(`/register?redirect=${encodeURIComponent('/tutorials')}`);
      return;
    }
    */
    setIsAuthenticated(true);
  }, []);

  // Don't render anything until we've checked authentication
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
        <div className="text-[var(--text-primary)]">Checking authentication...</div>
      </div>
    );
  }

  // If not authenticated (shouldn't reach here due to redirect, but safety check)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
        <div className="text-[var(--text-primary)]">Redirecting to registration...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden transition-colors duration-300 relative" style={{ background: 'linear-gradient(to bottom right, #dcfce7, #d1fae5, #ccfbf1)', paddingTop: '120px' }}>
      {/* Animated Background - Removed */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative text-center py-20 px-4 overflow-hidden bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 rounded-full max-w-7xl mx-auto mt-8 shadow-2xl border border-white/50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto relative z-10">


            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              <span className="text-gray-900">
                Explore All Technologies
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Browse through our comprehensive collection of tutorials across Medical Coding, Programming, and Government Jobs preparation
            </p>
          </div>
        </section>

        {/* Medical Coding Category */}
        <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-lime-200 via-green-200 to-emerald-200 rounded-3xl shadow-sm border border-green-300/50 my-8">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-4 mb-6 px-8 py-4 bg-[#d4d4d4] rounded-full shadow-sm">
              <Building2 className="w-10 h-10 text-blue-500" />
              <h2 className="text-4xl font-bold text-gray-900">
                Medical Coding
              </h2>
            </div>
            <p className="text-gray-600 text-lg">Learn medical coding, healthcare IT, and related technologies</p>
          </div>

          <CardGrid columns={3} className="mb-8">
            <TechnologyCard
              title="Medical Coding Basics"
              description="Introduction to ICD-10, CPT, and HCPCS coding systems"
              icon={<ClipboardList className="w-12 h-12 text-cyan-500" />}
              link="/roadmap?courseId=medical-coding"
              gradient="from-blue-500 to-cyan-500"
            />
            <TechnologyCard
              title="Healthcare IT"
              description="Electronic Health Records (EHR) and healthcare information systems"
              icon={<Stethoscope className="w-12 h-12 text-teal-500" />}
              link="/roadmap?courseId=medical-coding"
              gradient="from-green-500 to-teal-500"
            />
            <TechnologyCard
              title="Medical Terminology"
              description="Essential medical terms and anatomy for coders"
              icon={<BookOpen className="w-12 h-12 text-pink-500" />}
              link="/roadmap?courseId=medical-coding"
              gradient="from-purple-500 to-pink-500"
            />
          </CardGrid>

          <div className="text-center mt-16">
            <Link
              href="/tutorials/medical-coding"
              className="inline-block px-8 py-3 bg-gradient-to-r from-white to-sky-400 hover:from-sky-50 hover:to-sky-500 text-sky-900 font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View All Medical Coding Tutorials →
            </Link>
          </div>
        </section>

        {/* Programming Category */}
        <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-rose-200 via-pink-200 to-red-200 border border-rose-300/50 shadow-sm rounded-3xl my-8">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-4 mb-6 px-8 py-4 bg-[#d4d4d4] rounded-full shadow-sm">
              <Code2 className="w-10 h-10 text-rose-500" />
              <h2 className="text-4xl font-bold text-gray-900">
                Programming
              </h2>
            </div>
            <p className="text-gray-600 text-lg">Master programming languages, frameworks, and development tools</p>
          </div>

          <CardGrid columns={3} className="mb-8">
            <TechnologyCard
              title="DevOps"
              description="Learn containerization, CI/CD, infrastructure automation, and cloud platforms"
              icon={<Rocket className="w-12 h-12 text-rose-500" />}
              link="/roadmap?courseId=devops"
              gradient="from-rose-500 to-red-600"
            />
            <TechnologyCard
              title="Java"
              description="Master Java programming, Spring Framework, and enterprise development"
              icon={<Coffee className="w-12 h-12 text-orange-500" />}
              link="/roadmap?courseId=java-fullstack"
              gradient="from-orange-500 to-red-500"
            />
            <TechnologyCard
              title="Python"
              description="Learn Python programming, data science, web development, and automation"
              icon={<FileCode className="w-12 h-12 text-yellow-500" />}
              link="/roadmap?courseId=python-fullstack"
              gradient="from-yellow-500 to-green-500"
            />
            <TechnologyCard
              title="SQL & Databases"
              description="Database design, SQL queries, optimization, and modern database technologies"
              icon={<Database className="w-12 h-12 text-indigo-500" />}
              link="/roadmap?courseId=sql"
              gradient="from-purple-500 to-indigo-500"
            />
            <TechnologyCard
              title="Web Development"
              description="HTML, CSS, JavaScript, React, and full-stack web development"
              icon={<Globe className="w-12 h-12 text-teal-500" />}
              link="/roadmap?courseId=web-dev"
              gradient="from-green-500 to-teal-500"
            />
            <TechnologyCard
              title="Data Science"
              description="Data analysis, machine learning, statistics, and visualization"
              icon={<BarChart2 className="w-12 h-12 text-pink-500" />}
              link="/roadmap?courseId=data-science"
              gradient="from-pink-500 to-purple-500"
            />
            <TechnologyCard
              title="Code Terminal"
              description="Write, edit, and execute code online for Python, JavaScript, Java, SQL, and Bash"
              icon={<Terminal className="w-12 h-12 text-cyan-500" />}
              link="/code-terminal"
              gradient="from-cyan-500 to-blue-500"
            />
            <TechnologyCard
              title="Linux"
              description="Linux system administration, commands, and shell scripting"
              icon={<Server className="w-12 h-12 text-slate-600" />}
              link="/roadmap?courseId=linux"
              gradient="from-gray-500 to-slate-600"
            />
            <TechnologyCard
              title="Terminal"
              description="Interactive terminal environment for practicing commands and shell scripting"
              icon={<Command className="w-12 h-12 text-emerald-500" />}
              link="/terminal"
              gradient="from-green-500 to-emerald-500"
            />
          </CardGrid>

          <div className="text-center mt-16">
            <Link
              href="/tutorials/programming"
              className="inline-block px-8 py-3 bg-gradient-to-r from-white to-sky-400 hover:from-sky-50 hover:to-sky-500 text-sky-900 font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View All Programming Tutorials →
            </Link>
          </div>
        </section>

        {/* Government Jobs Category */}
        {/* Government Jobs Category - TEMPORARILY DISABLED
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Landmark className="w-10 h-10 text-indigo-500" />
            <h2 className="text-4xl font-bold text-[var(--text-primary)]">
              Government Jobs (SBI Jobs)
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg">Prepare for bank exams, government job tests, and competitive examinations</p>
        </div>

        <CardGrid columns={3} className="mb-8">
          <TechnologyCard
            title="SBI Clerk Preparation"
            description="Complete preparation guide for SBI Clerk examinations"
            icon={<Landmark className="w-12 h-12 text-blue-500" />}
            link="/tutorials/government-jobs"
            gradient="from-indigo-500 to-blue-600"
          />
          <TechnologyCard
            title="Banking Awareness"
            description="Current affairs, banking terms, and financial knowledge"
            icon={<Banknote className="w-12 h-12 text-emerald-500" />}
            link="/tutorials/government-jobs"
            gradient="from-green-500 to-emerald-600"
          />
          <TechnologyCard
            title="Quantitative Aptitude"
            description="Mathematics, data interpretation, and problem solving"
            icon={<Calculator className="w-12 h-12 text-red-500" />}
            link="/tutorials/government-jobs"
            gradient="from-orange-500 to-red-500"
          />
          <TechnologyCard
            title="Reasoning Ability"
            description="Logical reasoning, puzzles, and analytical thinking"
            icon={<BrainCircuit className="w-12 h-12 text-pink-500" />}
            link="/tutorials/government-jobs"
            gradient="from-purple-500 to-pink-500"
          />
          <TechnologyCard
            title="English Language"
            description="Grammar, vocabulary, comprehension, and writing skills"
            icon={<PenTool className="w-12 h-12 text-cyan-500" />}
            link="/tutorials/government-jobs"
            gradient="from-cyan-500 to-blue-500"
          />
          <TechnologyCard
            title="Mock Tests"
            description="Practice tests for SBI and government job examinations"
            icon={<FileCheck className="w-12 h-12 text-rose-500" />}
            link="/tutorials/government-jobs"
            gradient="from-rose-500 to-red-600"
          />
        </CardGrid>

        <div className="text-center">
          <Link
            href="/tutorials/government-jobs"
            className="inline-block px-8 py-3 bg-gradient-to-r from-white to-sky-400 hover:from-sky-50 hover:to-sky-500 text-sky-900 font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            View All Government Jobs Tutorials →
          </Link>
        </div>
      </section>
      */}
      </div>
    </main>
  );
}
