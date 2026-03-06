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
    <main className="min-h-screen pb-20 pt-[120px] bg-white overflow-hidden relative">
      {/* Animated Background - Removed */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gray-900">Government Jobs</span> <span className="text-gray-600">(SBI Jobs)</span>
          </h1>
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>Prepare for bank exams and government job tests</p>
        </div>

        <div className="max-w-4xl mx-auto rounded-xl p-12 border border-gray-200 bg-gray-50 shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Coming Soon!</h2>
          <p className="text-lg mb-4 text-gray-600">
            We're preparing comprehensive preparation materials for:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center space-x-3">
              <span className="text-green-500">✓</span>
              <span>SBI Clerk & PO Examinations</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500">✓</span>
              <span>Banking Awareness & Current Affairs</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500">✓</span>
              <span>Quantitative Aptitude</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500">✓</span>
              <span>Reasoning Ability</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500">✓</span>
              <span>English Language Skills</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500">✓</span>
              <span>Mock Tests & Practice Papers</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500">✓</span>
              <span>Weekly Test System (Bronze, Silver, Gold)</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

