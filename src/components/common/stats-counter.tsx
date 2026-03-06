'use client';

import { useEffect, useState, useRef } from 'react';

interface StatItemProps {
  end: number;
  duration: number;
  label: string;
  suffix?: string;
  prefix?: string;
  color?: string;
}

function StatItem({ end, duration, label, suffix = '', prefix = '', color = 'var(--text-primary)' }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return (
    <div ref={ref} className="aspect-square bg-white rounded-full shadow-lg flex flex-col items-center justify-center p-[var(--space-xs)] transition-transform hover:scale-105 border border-gray-100">
      <div className="font-black mb-1" style={{ color, fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}>
        {prefix}{count}{suffix}
      </div>
      <div className="font-bold text-gray-800 text-center leading-tight px-2" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}>{label}</div>
    </div>
  );
}

interface StatsCounterProps {
  className?: string;
}

export default function StatsCounter({ className = '' }: StatsCounterProps) {
  return (
    <div className={className}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-[var(--space-md)] md:gap-[var(--space-lg)] w-full max-w-4xl mx-auto py-[var(--space-md)] px-4">
        <StatItem end={100} duration={2000} label="Technologies" suffix="+" color="#fbbf24" />
        <StatItem end={150} duration={2000} label="Video Tutorials" suffix="+" color="#ef4444" />
        <StatItem end={100} duration={2000} label="Hours of Content" suffix="+" color="#3b82f6" />
        <StatItem end={90} duration={2000} label="Topics Covered" suffix="+" color="#14b8a6" />
      </div>
    </div>
  );
}

