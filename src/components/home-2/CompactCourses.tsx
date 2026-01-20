'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import CompactSection from './CompactSection';
import LoginPromptModal from '@/components/LoginPromptModal';

const courses = [
  {
    id: '2',
    title: 'Programming',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=3870&auto=format&fit=crop',
    href: '/roadmap?courseId=programming',
    className: 'bg-white',
  },
  {
    id: '1',
    title: 'Medical Coding',
    category: 'Healthcare',
    image: '/medical-coding-new.jpg',
    href: '/roadmap?courseId=medical-coding',
    className: 'bg-emerald-50',
  },

  {
    id: '4',
    title: 'DevOps & Cloud',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3870&auto=format&fit=crop',
    href: '/roadmap?courseId=devops',
    className: 'bg-white',
  },
];

export default function CompactCourses() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [pendingUrl, setPendingUrl] = useState('');

  const handleCourseClick = (e: React.MouseEvent, href: string) => {
    // Check authentication (supporting both token based and simple flag)
    const isLoggedIn = typeof window !== 'undefined' && (localStorage.getItem('token') || localStorage.getItem('isLoggedIn') === 'true');

    if (!isLoggedIn) {
      e.preventDefault();
      setPendingUrl(href);
      setShowLoginModal(true);
    }
  };

  return (
    <CompactSection
      title="Start Your Learning Journey"
      subtitle="Explore comprehensive tutorials across multiple domains"
      backgroundColor="var(--bg-secondary)"
      stagger={true}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={course.href}
            onClick={(e) => handleCourseClick(e, course.href)}
            className={`group relative rounded-3xl overflow-visible card-hover-effect hover-glow-soft ${course.className} dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-lg mt-8 h-40 flex flex-col justify-center`}
          >

            {/* Floating Image Container */}
            <div className="absolute -top-6 -left-6 w-28 h-28 rounded-2xl overflow-hidden shadow-xl z-20 border-4 border-white dark:border-gray-800">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-115"
                sizes="112px"
                unoptimized
              />
            </div>

            <div className="p-6 pl-28 relative flex flex-col justify-center h-full">

              <h3
                className="font-bold text-xl mb-1 transition-all duration-300 !text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"
              >
                {course.title}
              </h3>
              <p className="text-xs text-gray-500 font-medium">Click to explore &rarr;</p>
            </div>
          </Link>
        ))}
      </div>

      <LoginPromptModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        targetUrl={pendingUrl}
      />
    </CompactSection>
  );
}

