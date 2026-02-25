'use client';

import { useEffect, useState } from 'react';
import { AUTH_SYSTEM_AVAILABLE } from '@/config/authStatus';
import { TechnologyCard, CardGrid } from '@/components/common/technology-card';
import { Rocket, Coffee, FileCode, Database, Globe, BarChart, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

// Check auth BEFORE component renders - runs at module level
let hasCheckedAuth = false;
if (typeof window !== 'undefined' && !hasCheckedAuth) {
  hasCheckedAuth = true;
  if (AUTH_SYSTEM_AVAILABLE) {
    /* Original Authentication Logic - Paused for Guest Mode
    const currentPath = window.location.pathname || '/tutorials/programming';
    const token = localStorage.getItem('token');
    // Check if token exists and is valid (not empty, null, undefined, or expired)
    if (!token || token.trim() === '' || token === 'null' || token === 'undefined') {
      // IMMEDIATE redirect before React renders
      window.location.replace(`/register?redirect=${encodeURIComponent(currentPath)}`);
    } else {
      // Validate JWT token format and expiry
      try {
        const parts = token.split('.');
        if (parts.length !== 3) {
          // Invalid JWT format
          localStorage.removeItem('token');
          window.location.replace(`/register?redirect=${encodeURIComponent(currentPath)}`);
        } else {
          // Check if token is expired
          const payload = JSON.parse(atob(parts[1]));
          if (payload.exp && payload.exp * 1000 < Date.now()) {
            // Token expired
            localStorage.removeItem('token');
            window.location.replace(`/register?redirect=${encodeURIComponent(currentPath)}`);
          }
        }
      } catch {
        // Invalid token format
        localStorage.removeItem('token');
        window.location.replace(`/register?redirect=${encodeURIComponent(currentPath)}`);
      }
    }
    */
  }
}

export default function ProgrammingPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ALL HOOKS MUST BE CALLED FIRST - before any conditional returns
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(() => {
    if (!AUTH_SYSTEM_AVAILABLE) return true;
    /* Original Authentication Logic - Paused for Guest Mode
    // Double-check in useState initializer
    if (typeof window === 'undefined') return null;
    const token = localStorage.getItem('token');
    if (!token || token.trim() === '' || token === 'null' || token === 'undefined') {
      window.location.replace(`/register?redirect=${encodeURIComponent('/tutorials/programming')}`);
      return false;
    }
    // Validate token
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        localStorage.removeItem('token');
        window.location.replace(`/register?redirect=${encodeURIComponent('/tutorials/programming')}`);
        return false;
      }
      const payload = JSON.parse(atob(parts[1]));
      if (payload.exp && payload.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
        window.location.replace(`/register?redirect=${encodeURIComponent('/tutorials/programming')}`);
        return false;
      }
    } catch {
      localStorage.removeItem('token');
      window.location.replace(`/register?redirect=${encodeURIComponent('/tutorials/programming')}`);
      return false;
    }
    */
    return true;
  });

  useEffect(() => {
    if (!AUTH_SYSTEM_AVAILABLE) {
      setIsAuthenticated(true);
      return;
    }
    /* Original Authentication Logic - Paused for Guest Mode
    // Triple-check on mount
    const token = localStorage.getItem('token');
    if (!token || token.trim() === '' || token === 'null' || token === 'undefined') {
      window.location.replace(`/register?redirect=${encodeURIComponent('/tutorials/programming')}`);
      return;
    }
    // Validate token
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        localStorage.removeItem('token');
        window.location.replace(`/register?redirect=${encodeURIComponent('/tutorials/programming')}`);
        return;
      }
      const payload = JSON.parse(atob(parts[1]));
      if (payload.exp && payload.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
        window.location.replace(`/register?redirect=${encodeURIComponent('/tutorials/programming')}`);
        return;
      }
    } catch {
      localStorage.removeItem('token');
      window.location.replace(`/register?redirect=${encodeURIComponent('/tutorials/programming')}`);
      return;
    }
    */
    setIsAuthenticated(true);
  }, []);

  // IMMEDIATE check after hooks - runs before rendering
  if (AUTH_SYSTEM_AVAILABLE && typeof window !== 'undefined') {
    /* Original Authentication Logic - Paused for Guest Mode
    const token = localStorage.getItem('token');
    if (!token || token.trim() === '' || token === 'null' || token === 'undefined') {
      window.location.replace(`/register?redirect=${encodeURIComponent('/tutorials/programming')}`);
      return null; // Return null immediately - prevents any rendering
    }

    // Validate token format and expiry
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        localStorage.removeItem('token');
        window.location.replace(`/register?redirect=${encodeURIComponent('/tutorials/programming')}`);
        return null;
      }

      const payload = JSON.parse(atob(parts[1]));
      if (payload.exp && payload.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
        window.location.replace(`/register?redirect=${encodeURIComponent('/tutorials/programming')}`);
        return null;
      }
    } catch {
      localStorage.removeItem('token');
      window.location.replace(`/register?redirect=${encodeURIComponent('/tutorials/programming')}`);
      return null;
    }
    */
  }

  // Don't render anything if not authenticated
  if (isAuthenticated === null || isAuthenticated === false) {
    return null; // Return null - prevents any rendering
  }

  return (
    <main className="min-h-screen pb-20 pt-[120px] overflow-hidden relative" style={{ background: 'linear-gradient(to bottom right, #dcfce7, #d1fae5, #ccfbf1)' }}>
      {/* Animated Background - Removed */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">

          <h1 className="text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Programming <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-500">Tutorials</span>
          </h1>
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>Master programming languages, frameworks, and development tools</p>
        </div>

        <CardGrid columns={3} className="max-w-6xl mx-auto gap-10">
          <TechnologyCard
            title="DevOps"
            description="Learn containerization, CI/CD, infrastructure automation, and cloud platforms"
            icon={<Rocket className="w-12 h-12 text-rose-500" />}
            link="/devops"
            gradient="from-rose-500 to-red-600"
            iconBg="bg-white"
          />
          <TechnologyCard
            title="Java"
            description="Master Java programming, Spring Framework, and enterprise development"
            icon={<Coffee className="w-12 h-12 text-orange-500" />}
            link="/java"
            gradient="from-orange-500 to-red-500"
            iconBg="bg-white"
          />
          <TechnologyCard
            title="Python"
            description="Learn Python programming, data science, web development, and automation"
            icon={<FileCode className="w-12 h-12 text-yellow-500" />}
            link="/python"
            gradient="from-yellow-500 to-amber-500"
            iconBg="bg-white"
          />
          <TechnologyCard
            title="SQL & Databases"
            description="Database design, SQL queries, optimization, and modern database technologies"
            icon={<Database className="w-12 h-12 text-purple-500" />}
            link="/sql"
            gradient="from-purple-500 to-indigo-600"
            iconBg="bg-white"
          />
          <TechnologyCard
            title="Web Development"
            description="HTML, CSS, JavaScript, React, and full-stack web development"
            icon={<Globe className="w-12 h-12 text-green-500" />}
            link="/web-dev"
            gradient="from-green-500 to-teal-500"
            iconBg="bg-white"
          />
          <TechnologyCard
            title="Data Science"
            description="Data analysis, machine learning, statistics, and visualization"
            icon={<BarChart className="w-12 h-12 text-blue-500" />}
            link="/data-science"
            gradient="from-blue-500 to-cyan-500"
            iconBg="bg-white"
          />
          <TechnologyCard
            title="Medical Coding"
            description="Healthcare basics, ICD-10-CM, CPT Coding, and certification prep"
            icon={<Stethoscope className="w-12 h-12 text-teal-500" />}
            link="/tutorials/medical-coding"
            gradient="from-teal-400 to-cyan-500"
            iconBg="bg-white"
          />
        </CardGrid>
      </div>
    </main>
  );
}
