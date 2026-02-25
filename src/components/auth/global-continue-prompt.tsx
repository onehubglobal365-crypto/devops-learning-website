'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import ContinueModal from '@/components/auth/continue-modal';
import { AUTH_SYSTEM_AVAILABLE } from '@/config/authStatus';

// Helper function to validate JWT token
function isValidToken(token: string): boolean {
  if (!token || token.trim() === '' || token === 'null' || token === 'undefined') {
    return false;
  }

  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return false; // Invalid JWT format
    }

    // Check if token is expired
    const payload = JSON.parse(atob(parts[1]));
    if (payload.exp && payload.exp * 1000 < Date.now()) {
      return false; // Token expired
    }

    return true; // Token is valid
  } catch {
    return false; // Invalid token format
  }
}

// Routes where we should NOT show the modal (auth pages, etc.)
const excludedRoutes = [
  '/login',
  '/signup',
  '/register',
  '/continue',
];

// Only show modal for tutorials dropdown routes
const tutorialsDropdownRoutes = [
  '/tutorials/medical-coding',
  '/tutorials/programming',
  '/tutorials/government-jobs',
  '/tutorials/courses',
];

export default function GlobalContinuePrompt() {
  if (!AUTH_SYSTEM_AVAILABLE) {
    return null;
  }

  return <GlobalContinuePromptInner />;
}

function GlobalContinuePromptInner() {
  /* Original Authentication Logic - Paused for Guest Mode
  const pathname = usePathname();
  const [showContinueModal, setShowContinueModal] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState<string | null>(null);
  const [hasChecked, setHasChecked] = useState(false);
  // ... all the prompt logic ...
  */

  return null;
}

