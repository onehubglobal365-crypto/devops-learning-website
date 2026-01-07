'use client';

import Link from 'next/link';
import React from 'react';

interface TechnologyCardProps {
  title: string;
  description: string;
  icon: string | React.ReactElement;
  link: string;
  gradient: string;
  iconBg?: string; // New optional prop for icon background color
}

export function TechnologyCard({ title, description, icon, link, gradient, iconBg }: TechnologyCardProps) {
  return (
    <Link href={link} className="block group h-full mt-6">
      <div className="relative bg-[var(--bg-secondary)] rounded-tl-2xl rounded-tr-[3rem] rounded-bl-[3rem] rounded-br-2xl p-8 transition-all duration-500 border border-gray-100 dark:border-white/10 hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-500/20 hover:-translate-y-2 overflow-visible h-full flex flex-col shadow-lg">
        {/* Hover Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-tl-2xl rounded-tr-[3rem] rounded-bl-[3rem] rounded-br-2xl`}></div>

        {/* Floating Icon Container */}
        <div className={`absolute -top-6 -left-6 w-20 h-20 rounded-2xl flex items-center justify-center ${iconBg || 'bg-white dark:bg-[#1a1a1a]'} shadow-xl border border-gray-100 dark:border-gray-800 z-20 transform group-hover:scale-110 transition-transform duration-500`}>
          <div className="flex items-center justify-center w-full h-full p-4">
            {typeof icon === 'string' ? <span className="text-3xl">{icon}</span> : icon}
          </div>
        </div>

        <div className="relative z-10 text-left flex flex-col flex-1 mt-8 ml-2">
          <h3 className="text-2xl font-bold mb-3 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h3>
          <p className="transition-colors duration-300 flex-1 min-h-[60px]" style={{ color: 'var(--text-secondary)' }}>
            {description}
          </p>

          <div className="mt-6 w-full h-1 bg-transparent rounded-full overflow-hidden">
            <div className={`h-full bg-gradient-to-r ${gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
          </div>
        </div>
      </div>
    </Link>
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

