'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, Laptop, Landmark, Cloud, Code2, Coffee, Layout, Database, BarChart3, Terminal } from 'lucide-react';
import UniqueHero from '@/components/unique-hero';
import { AUTH_SYSTEM_AVAILABLE } from '@/config/authStatus';

interface Course {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  gradient: string;
}

const courses: Course[] = [
  {
    title: 'Programming',
    description: 'Software Development & Technologies',
    icon: <Laptop className="w-8 h-8 text-rose-600 dark:text-rose-400" />,
    href: '/roadmap?courseId=programming',
    gradient: 'from-rose-500 to-red-500',
  },
  {
    title: 'Medical Coding',
    description: 'Healthcare IT & Coding Systems',
    icon: <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    href: '/roadmap?courseId=medical-coding',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'DevOps',
    description: 'AWS, Azure & GCP - Containerization, CI/CD, Infrastructure Automation',
    icon: <Cloud className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    href: '/roadmap?courseId=devops',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Python Full Stack',
    description: 'Build Modern Web Applications with Django, Flask, React',
    icon: <Code2 className="w-8 h-8 text-green-600 dark:text-green-400" />,
    href: '/roadmap?courseId=python-fullstack',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Java Full Stack',
    description: 'Enterprise-Grade Development with Spring Boot, React, Microservices',
    icon: <Coffee className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
    href: '/roadmap?courseId=java-fullstack',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    title: 'Web Development',
    description: 'Create Stunning Websites with React, Node.js',
    icon: <Layout className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    href: '/roadmap?courseId=web-dev',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'SQL & Databases',
    description: 'SQL & NoSQL Mastery - Database Design and Management',
    icon: <Database className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />,
    href: '/roadmap?courseId=sql',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Data Science',
    description: 'Data Analysis, Machine Learning, and AI',
    icon: <BarChart3 className="w-8 h-8 text-violet-600 dark:text-violet-400" />,
    href: '/roadmap?courseId=data-science',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Linux',
    description: 'Linux Administration and Command Line Mastery',
    icon: <Terminal className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
    href: '/roadmap?courseId=linux',
    gradient: 'from-yellow-500 to-orange-500',
  },
];

import { motion } from 'framer-motion';

import { TechnologyCard, CardGrid } from '@/components/ui/technology-card';

// ... (imports remain)

export default function CoursesPage() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white transition-colors duration-300 relative">
      {/* Static Vibrant Background */}
      {isMounted && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[80%] rounded-full bg-gradient-to-bl from-violet-400 via-fuchsia-400 to-pink-400 opacity-25 blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-cyan-400 via-sky-400 to-blue-400 opacity-25 blur-[100px]" />
        </div>
      )}

      <div className="relative z-10">
        {/* Hero Carousel */}
        <section className="w-full -mt-0">
          <UniqueHero />
        </section>

        {/* Courses Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-4 mb-6 px-8 py-4 bg-[#d4d4d4] rounded-full shadow-sm mx-auto">
              <h2 className="text-4xl font-bold text-gray-900">
                Explore Our Courses
              </h2>
            </div>

            <p className="text-gray-600 text-xl mt-4">Choose your learning path and start your journey today</p>
          </div>

          {/* Course Cards Grid */}
          <CardGrid>
            {courses.map((course) => (
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

