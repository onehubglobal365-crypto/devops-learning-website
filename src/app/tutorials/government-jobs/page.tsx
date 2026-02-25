'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AUTH_SYSTEM_AVAILABLE } from '@/config/authStatus';

export default function GovernmentJobsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
    AUTH_SYSTEM_AVAILABLE ? null : true
  );

  useEffect(() => {
    if (!AUTH_SYSTEM_AVAILABLE) {
      setIsAuthenticated(true);
      return;
    }
    /* Original Authentication Logic - Paused for Guest Mode
    // Check authentication immediately on mount
    const token = localStorage.getItem('token');
    if (!token) {
      // Force immediate redirect - use replace to prevent back button
      window.location.replace(`/register?redirect=${encodeURIComponent('/tutorials/government-jobs')}`);
      return;
    }
    */
    setIsAuthenticated(true);
  }, []);

  // Don't render anything until we've checked authentication
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
        <div style={{ color: 'var(--text-primary)' }}>Checking authentication...</div>
      </div>
    );
  }

  // If not authenticated (shouldn't reach here due to redirect, but safety check)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
        <div style={{ color: 'var(--text-primary)' }}>Redirecting to registration...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pb-20 pt-[120px] bg-[var(--bg-primary)] overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 150, 0],
            y: [0, -80, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-orange-300/50 rounded-full blur-3xl opacity-80"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
          className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl opacity-60"
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
          className="absolute -bottom-40 right-20 w-[30rem] h-[30rem] bg-rose-400/30 rounded-full blur-3xl opacity-60"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold mb-4 style={{ color: 'var(--text-primary)' }}">
            <span style={{ color: 'var(--text-primary)' }}>Government Jobs</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">(SBI Jobs)</span>
          </h1>
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>Prepare for bank exams and government job tests</p>
        </div>

        <div className="max-w-4xl mx-auto rounded-xl p-12 border border-white/10 backdrop-blur-md bg-white/5 shadow-xl">
          <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Coming Soon!</h2>
          <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
            We're preparing comprehensive preparation materials for:
          </p>
          <ul className="space-y-3" style={{ color: 'var(--text-secondary)' }}>
            <li className="flex items-center space-x-3">
              <span className="text-indigo-400">✓</span>
              <span>SBI Clerk & PO Examinations</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-indigo-400">✓</span>
              <span>Banking Awareness & Current Affairs</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-indigo-400">✓</span>
              <span>Quantitative Aptitude</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-indigo-400">✓</span>
              <span>Reasoning Ability</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-indigo-400">✓</span>
              <span>English Language Skills</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-indigo-400">✓</span>
              <span>Mock Tests & Practice Papers</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-indigo-400">✓</span>
              <span>Weekly Test System (Bronze, Silver, Gold)</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
