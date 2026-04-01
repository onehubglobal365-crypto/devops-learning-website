'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, Laptop, Landmark, Code2, Coffee, Layout, Database, BarChart3, Terminal, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import UniqueHero from '@/components/landing/unique-hero';
import { AUTH_SYSTEM_AVAILABLE } from '@/config/authStatus';

interface Course {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  gradient: string;
}

import Image from 'next/image';

const courses: Course[] = [
  {
    title: 'Java Full Stack',
    description: 'Enterprise-Grade Development with Spring Boot, React, Microservices',
    icon: <div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" fill className="object-contain" unoptimized /></div>,
    href: '/java',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    title: 'Python Full Stack',
    description: 'Build Modern Web Applications with Django, Flask, React',
    icon: <div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" fill className="object-contain" unoptimized /></div>,
    href: '/python',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Web Development',
    description: 'Create Stunning Websites with React, Node.js',
    icon: <div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Web Dev" fill className="object-contain" unoptimized /></div>,
    href: '/web-dev',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'DevOps',
    description: 'AWS, Azure & GCP - Containerization, CI/CD, Infrastructure Automation',
    icon: <div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg" alt="DevOps" fill className="object-contain" unoptimized /></div>,
    href: '/devops',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Data Science',
    description: 'Data Analysis, Machine Learning, and AI',
    icon: <div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Data Science" fill className="object-contain" unoptimized /></div>,
    href: '/data-science',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'SQL',
    description: 'SQL & NoSQL Mastery - Database Design and Management',
    icon: <div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" fill className="object-contain" unoptimized /></div>,
    href: '/sql',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Power BI',
    description: 'Master Data Visualization and Business Intelligence with Power BI',
    icon: <div className="p-1 w-full h-full relative"><Image src="/images/powerbicard.png" alt="Power BI" fill className="object-contain" unoptimized /></div>,
    href: '/powerbi',
    gradient: 'from-yellow-400 to-yellow-600',
  },
  {
    title: 'Linux',
    description: 'Linux Administration and Command Line Mastery',
    icon: <div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" fill className="object-contain" unoptimized /></div>,
    href: '/linux',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Medical Coding',
    description: 'Healthcare IT & Coding Systems',
    icon: <div className="p-1 w-full h-full relative"><Image src="/medical-coding-logo-v2.jpg" alt="Medical Coding" fill className="object-contain rounded-xl" unoptimized /></div>,
    href: '/tutorials/medical-coding',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Azure Data Engineer',
    description: 'Master Azure data engineering, data pipelines, and cloud data solutions',
    icon: <div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" fill className="object-contain" unoptimized /></div>,
    href: '/tutorials/azure-modules',
    gradient: 'from-blue-600 to-cyan-600',
  },
];

import { TechnologyCard, CardGrid } from '@/components/common/technology-card';

// ... (imports remain)

export default function CoursesPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }
  }, []);

  if (!isMounted) return null;

  // Show all courses to everyone, restriction happens at "Start" level on roadmap page
  const accessibleCourses = courses;

  return (
    <main className="min-h-screen overflow-x-hidden transition-colors duration-300 relative bg-[#f8fafc]">
      <div className="relative z-10">
        <section className="w-full -mt-0">
          <UniqueHero />
        </section>

        <section className="container mx-auto px-[var(--space-sm)] py-[var(--space-xl)]">
          <div className="text-center mb-[var(--space-xl)]">
            <div className="inline-flex items-center justify-center mb-6 px-[var(--space-lg)] py-4 bg-[#d4d4d4]/50 backdrop-blur-md rounded-full shadow-sm mx-auto border border-white/20">
              <h2 className="font-bold text-gray-900 tracking-tight" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>
                Explore Our Courses
              </h2>
            </div>
            <p className="text-gray-600 mt-4 font-medium" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>Choose your learning path and start your journey today</p>
          </div>

          <CardGrid>
            {accessibleCourses.map((course) => (
              <TechnologyCard
                key={course.href}
                title={course.title}
                description={course.description}
                icon={course.icon as React.ReactElement}
                link={course.href}
                gradient={course.gradient}
              />
            ))}
          </CardGrid>
        </section>
      </div>
    </main>
  );
}


