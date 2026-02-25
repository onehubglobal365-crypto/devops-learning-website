'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, Laptop, Landmark, Cloud, Code2, Coffee, Layout, Database, BarChart3, Terminal, Lock } from 'lucide-react';
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
    href: '/roadmap?courseId=java-fullstack',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    title: 'Python Full Stack',
    description: 'Build Modern Web Applications with Django, Flask, React',
    icon: <div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" fill className="object-contain" unoptimized /></div>,
    href: '/roadmap?courseId=python-fullstack',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Web Development',
    description: 'Create Stunning Websites with React, Node.js',
    icon: <div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Web Dev" fill className="object-contain" unoptimized /></div>,
    href: '/roadmap?courseId=web-dev',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'DevOps',
    description: 'AWS, Azure & GCP - Containerization, CI/CD, Infrastructure Automation',
    icon: <div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg" alt="DevOps" fill className="object-contain" unoptimized /></div>,
    href: '/roadmap?courseId=devops',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Data Science',
    description: 'Data Analysis, Machine Learning, and AI',
    icon: <div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Data Science" fill className="object-contain" unoptimized /></div>,
    href: '/roadmap?courseId=data-science',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'SQL & Databases',
    description: 'SQL & NoSQL Mastery - Database Design and Management',
    icon: <div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" fill className="object-contain" unoptimized /></div>,
    href: '/roadmap?courseId=sql',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Linux',
    description: 'Linux Administration and Command Line Mastery',
    icon: <div className="p-1 w-full h-full relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" fill className="object-contain" unoptimized /></div>,
    href: '/roadmap?courseId=linux',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Medical Coding',
    description: 'Healthcare IT & Coding Systems',
    icon: <div className="p-1 w-full h-full relative"><Image src="/medical-coding-logo-v2.jpg" alt="Medical Coding" fill className="object-contain rounded-xl" unoptimized /></div>,
    href: '/roadmap?courseId=medical-coding',
    gradient: 'from-blue-500 to-cyan-500',
  },
];

import { motion } from 'framer-motion';

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
    <main className="min-h-screen overflow-x-hidden transition-colors duration-300 relative" style={{ background: 'linear-gradient(to bottom right, #dcfce7, #d1fae5, #ccfbf1)' }}>
      <div className="relative z-10">
        <section className="w-full -mt-0">
          <UniqueHero />
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-4 mb-6 px-8 py-4 bg-[#d4d4d4] rounded-full shadow-sm mx-auto">
              <h2 className="text-4xl font-bold text-gray-900">
                Explore Our Courses
              </h2>
            </div>
            <p className="text-gray-600 text-xl mt-4">Choose your learning path and start your journey today</p>
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

