'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AUTH_SYSTEM_AVAILABLE } from '@/config/authStatus';
import { TechnologyCard, CardGrid, CompactTechnologyCard } from '@/components/common/technology-card';
import {
  Stethoscope, ClipboardList, Building2, BookOpen,
  Code2, Rocket, Coffee, FileCode, Database, Globe, BarChart2, Terminal, Server, Command,
  Landmark, Banknote, Calculator, BrainCircuit, PenTool, FileCheck, Cloud, Layout, Workflow, Factory
} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

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
    <main className="min-h-screen overflow-x-hidden transition-colors duration-300 relative bg-[#f8fafc]" style={{ paddingTop: 'calc(var(--space-xl) * 1.2)' }}>
      {/* Premium Background Decoration */}

      <div className="relative z-10 px-[var(--space-sm)]">
        {/* Hero Section */}
        <section className="relative text-center py-[var(--space-lg)] px-[var(--space-md)] overflow-hidden bg-white/80 backdrop-blur-md rounded-full border border-gray-100 shadow-sm max-w-5xl mx-auto">
          <div className="container mx-auto relative z-10">
            <h1 className="font-extrabold mb-4 tracking-tight leading-tight" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
              <span className="text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-gray-800">
                Explore All Technologies
              </span>
            </h1>
            <p className="mb-0 max-w-2xl mx-auto font-medium text-gray-500 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.1rem)' }}>
              Browse through our comprehensive collection of tutorials across Medical Coding, Programming, and Data Engineering preparation
            </p>
          </div>
        </section>

        {/* Core Technologies Category */}
        <section className="container mx-auto px-[var(--space-md)] py-[var(--space-xl)] bg-white border border-gray-100 rounded-[3rem] my-[var(--space-xl)] shadow-lg relative pt-12 mt-20">
          {/* Floating Category Header */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 bg-white px-8 py-5 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4 z-20 min-w-[280px]">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <Code2 className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-gray-900 tracking-tight text-xl md:text-2xl">
                Core Technologies
              </h2>
            </div>
          </div>

          <CardGrid columns={5} className="mb-0">
            <CompactTechnologyCard
              title="Python Tutorial"
              icon={<Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" fill className="object-contain" unoptimized />}
              link="/python"
              gradient="from-yellow-400 to-amber-500"
            />
            <CompactTechnologyCard
              title="Java Tutorial"
              icon={<Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" fill className="object-contain" unoptimized />}
              link="/java"
              gradient="from-orange-500 to-red-500"
            />
            <CompactTechnologyCard
              title="JavaScript"
              icon={<Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" fill className="object-contain" unoptimized />}
              link="/tutorials/javascript"
              gradient="from-yellow-300 to-orange-400"
            />
            <CompactTechnologyCard
              title="TypeScript"
              icon={<Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" fill className="object-contain" unoptimized />}
              link="/coming-soon"
              gradient="from-blue-400 to-indigo-600"
            />
            <CompactTechnologyCard
              title="HTML Tutorial"
              icon={<Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" fill className="object-contain" unoptimized />}
              link="/tutorials/html"
              gradient="from-orange-500 to-red-600"
            />
            <CompactTechnologyCard
              title="CSS Tutorial"
              icon={<Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" fill className="object-contain" unoptimized />}
              link="/tutorials/css"
              gradient="from-blue-500 to-cyan-600"
            />
            <CompactTechnologyCard
              title="SQL Tutorial"
              icon={<Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" fill className="object-contain" unoptimized />}
              link="/sql"
              gradient="from-blue-600 to-indigo-700"
            />
            <CompactTechnologyCard
              title="Azure Tutorial"
              icon={<Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" fill className="object-contain" unoptimized />}
              link="/tutorials/azure-modules"
              gradient="from-sky-400 to-blue-600"
            />
            <CompactTechnologyCard
              title="DevOps Tutorial"
              icon={<Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg" alt="DevOps" fill className="object-contain" unoptimized />}
              link="/devops"
              gradient="from-blue-500 to-indigo-600"
            />
            <CompactTechnologyCard
              title="AWS Tutorial"
              icon={<Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" fill className="object-contain" unoptimized />}
              link="/coming-soon"
              gradient="from-orange-400 to-yellow-600"
            />
          </CardGrid>
        </section>

        {/* Programming Category */}
        <section className="container mx-auto px-[var(--space-md)] py-[var(--space-xl)] bg-white border border-gray-100 rounded-[3rem] my-[var(--space-xl)] shadow-lg relative pt-12 mt-20">
          {/* Floating Category Header */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 bg-white px-8 py-5 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4 z-20 min-w-[280px]">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <Code2 className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              {/* <span className="text-[10px] uppercase font-black tracking-[0.2em] text-blue-600">Category</span> */}
              <h2 className="font-bold text-gray-900 tracking-tight text-xl md:text-2xl">
                Programming
              </h2>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-gray-500 font-medium max-w-2xl" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>Master programming languages, frameworks, and development tools with industry-leading methodologies.</p>
          </div>

          <CardGrid columns={3} className="mb-12">
            <TechnologyCard
              title="DevOps"
              description="Learn containerization, CI/CD, infrastructure automation, and cloud platforms"
              // icon={<Rocket className="w-12 h-12 text-rose-500" />}
              icon={ <div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg" alt="DevOps" fill className="object-contain" unoptimized /></div>}
              
              link="/devops"
              gradient="from-rose-500 to-red-600"
              iconBg="bg-rose-50"
            />
            <TechnologyCard
              title="Power BI"
              description="Master Data Visualization and Business Intelligence with Power BI"
              icon={ <div className="p-1 w-full h-full relative"><Image src="/images/powerbicard.png" alt="Power BI" fill className="object-contain" unoptimized /></div> }
              link="/powerbi"
              gradient="from-yellow-400 to-yellow-600"
              iconBg="bg-yellow-50"
            />
            <TechnologyCard
              title="Web Development"
              description="HTML, CSS, JavaScript, React, and full-stack web development"
              // icon={<Globe className="w-12 h-12 text-green-500" />}
                  icon={<div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Web Dev" fill className="object-contain" unoptimized /></div>}
              
              link="/web-dev"
              gradient="from-green-500 to-teal-500"
              iconBg="bg-green-50"
            />
            <TechnologyCard
              title="Excel"
              description="Master Microsoft Excel for data entry, analysis, and visualization"
              icon={<Calculator className="w-12 h-12 text-emerald-600" />}
              link="/excel"
              gradient="from-emerald-500 to-green-600"
              iconBg="bg-emerald-50"
            />
            <TechnologyCard
              title="Data Science"
              description="Data analysis, machine learning, statistics, and visualization"
              // icon={<BarChart2 className="w-12 h-12 text-blue-500" />}
              icon={ <div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Data Science" fill className="object-contain" unoptimized /></div>}
              
              link="/data-science"
              gradient="from-blue-500 to-cyan-500"
              iconBg="bg-blue-50"
            />
            <TechnologyCard
              title="Azure Data Engineer"
              description="Professional cloud data engineering certification path & tools"
              // icon={<Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" fill className="object-contain" unoptimized />}
              icon={ <div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" fill className="object-contain" unoptimized /></div>}
              
              link="/tutorials/azure-modules"
              gradient="from-blue-500 to-cyan-500"
              iconBg="bg-blue-50"
            />
            {/* <TechnologyCard
              title="Code Terminal"
              description="Write, edit, and execute code online for Python, JavaScript, Java, SQL, and Bash"
              icon={<Terminal className="w-12 h-12 text-emerald-500" />}
              link="/code-terminal"
              gradient="from-emerald-500 to-teal-600"
              iconBg="bg-emerald-50"
            /> */}
          </CardGrid>

          <div className="text-center mt-12">
            <Link
              href="/tutorials/programming"
              className="inline-block px-12 py-5 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              View All Programming Tutorials &rarr;
            </Link>
          </div>
        </section>

        {/* Medical Coding Category */}
        <section className="container mx-auto px-[var(--space-md)] py-[var(--space-xl)] bg-white border border-gray-100 rounded-[3rem] my-[var(--space-xl)] shadow-lg relative pt-12 mt-28">
          {/* Floating Category Header */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 bg-white px-8 py-5 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4 z-20 min-w-[280px]">
            <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
              <Building2 className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              {/* <span className="text-[10px] uppercase font-black tracking-[0.2em] text-teal-600">Category</span> */}
              <h2 className="font-bold text-gray-900 tracking-tight text-xl md:text-2xl">
                Medical Coding
              </h2>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-gray-500 font-medium max-w-2xl" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>Learn medical coding, healthcare IT, and related technologies with expert guidance.</p>
          </div>

          <CardGrid columns={3} className="mb-12">
            <TechnologyCard
              title="Medical Coding Basics"
              description="Introduction to ICD-10, CPT, and HCPCS coding systems"
              icon={<ClipboardList className="w-12 h-12 text-sky-500" />}
              link="/tutorials/medical-coding"
              gradient="from-sky-400 to-blue-500"
              iconBg="bg-sky-50"
            />
            <TechnologyCard
              title="Healthcare IT"
              description="Electronic Health Records (EHR) and healthcare information systems"
              icon={<Stethoscope className="w-12 h-12 text-teal-500" />}
              link="/tutorials/medical-coding"
              gradient="from-teal-400 to-emerald-500"
              iconBg="bg-teal-50"
            />
            <TechnologyCard
              title="Medical Terminology"
              description="Essential medical terms and anatomy for coders"
              icon={<BookOpen className="w-12 h-12 text-indigo-500" />}
              link="/tutorials/medical-coding"
              gradient="from-indigo-400 to-purple-500"
              iconBg="bg-indigo-50"
            />
          </CardGrid>

          <div className="text-center mt-12">
            <Link
              href="/tutorials/medical-coding"
              className="inline-block px-12 py-5 bg-teal-600 text-white rounded-2xl shadow-xl shadow-teal-500/20 hover:bg-teal-700 transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              View All Medical Coding Tutorials →
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

