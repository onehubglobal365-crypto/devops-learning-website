'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import LoginPromptModal from '@/components/auth/LoginPromptModal';
import { AUTH_SYSTEM_AVAILABLE } from '@/config/authStatus';

interface TechnologyCardProps {
  title: string;
  description: string;
  icon: string | React.ReactElement;
  link: string;
  gradient: string;
  iconBg?: string; // New optional prop for icon background color
}

export function TechnologyCard({ title, description, icon, link, gradient, iconBg }: TechnologyCardProps) {
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    // Authentication Paused Check
    if (!AUTH_SYSTEM_AVAILABLE) {
      router.push(link);
      return;
    }

    /* Original Authentication Logic - Paused for Guest Mode
    // Check authentication
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const loggedInFlag = typeof window !== 'undefined' ? localStorage.getItem('isLoggedIn') : null;

    const hasToken = token && token !== 'null' && token !== 'undefined';
    const hasFlag = loggedInFlag === 'true';

    const isLoggedIn = hasToken || hasFlag;

    if (!isLoggedIn) {
      e.preventDefault();
      setShowLoginModal(true);
    } else {
      router.push(link);
    }
    */
    router.push(link);
  };

  return (
    <>
      <div onClick={handleClick} className="block group h-full mt-6 cursor-pointer" role="button" tabIndex={0}>
        <div className="relative bg-[#FFFDD0] rounded-[40px] p-8 transition-all duration-500 border border-gray-100 dark:border-white/10 hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-500/20 hover:-translate-y-2 overflow-visible h-full flex flex-col shadow-lg">
          {/* Hover Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-[40px]`}></div>

          {/* Floating Icon Container */}
          <div className={`absolute -top-6 -left-6 w-20 h-20 rounded-2xl flex items-center justify-center ${iconBg || 'bg-white'} shadow-xl border border-gray-100 dark:border-gray-800 z-20 transform group-hover:scale-110 transition-transform duration-500`}>
            <div className="flex items-center justify-center w-full h-full p-4 animate-pulse">
              {typeof icon === 'string' ? <span className="text-3xl">{icon}</span> : icon}
            </div>
          </div>

          <div className="relative z-10 text-left flex flex-col flex-1 mt-8 ml-2">
            <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 text-gray-900">
              {title}
            </h3>
            <p className="transition-colors duration-300 flex-1 min-h-[60px] text-gray-600">
              {description}
            </p>

            <div className="mt-6 w-full h-1 bg-transparent rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r ${gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          </div>
        </div>
      </div>
      <LoginPromptModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        targetUrl={link}
      />
    </>
  );
}

// Card Grid wrapper for consistent spacing
interface CardGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function CardGrid({ children, columns = 3, className = '' }: CardGridProps) {
  const colsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid grid-cols-1 ${colsClass[columns]} gap-10 ${className}`}>
      {children}
    </div>
  );
}
