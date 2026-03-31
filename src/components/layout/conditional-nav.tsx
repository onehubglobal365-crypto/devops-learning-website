"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SharedNav from '@/components/layout/shared-nav';

export function ConditionalNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Normalize pathname (remove trailing slash for comparison)
  const normalizedPath = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;

  // Check if the page uses a sidebar OR is a specialized content page that handles its own nav
  // Define which pages are "Hubs" or "Landing Pages" (they SHOULD show the navbar)
  const isHubPage =
    normalizedPath === '/tutorials' ||
    normalizedPath === '/tutorials/programming' ||
    normalizedPath === '/tutorials/data-engineering' ||
    normalizedPath === '/tutorials/medical-coding' ||
    normalizedPath === '/web-dev';

  // Define which pages are "Content" or "Modular" pages (they SHOULD HIDE the navbar)
  const isContentPage =
    !isHubPage && (
      normalizedPath === '/java' ||
      normalizedPath === '/sql' ||
      normalizedPath === '/python' ||
      normalizedPath === '/devops' ||
      normalizedPath === '/linux' ||
      normalizedPath === '/data-science' ||
      normalizedPath === '/code-terminal' ||
      normalizedPath === '/powerbi' ||
      normalizedPath === '/excel' ||
      normalizedPath.startsWith('/tutorials/') ||
      normalizedPath.startsWith('/docs/')
    );

  // Hide ConditionalNav ONLY on specialized content pages that have their own sidebar/layout
  if (isContentPage || normalizedPath.startsWith('/admin')) {
    return null;
  }

  // Handle page-specific navbar styles
  const isHome = pathname === '/';
  const isDashboard = pathname === '/dashboard';
  const showAnimatedLine = isHome;
  const hasGradientBlueNav = isDashboard;

  // Hide theme toggle (constant value as per project style)
  const hideThemeToggle = true;

  return (
    <SharedNav
      isScrolled={isScrolled}
      showAnimatedLine={showAnimatedLine}
      isFixed={true}
      hasGradientBlueNav={hasGradientBlueNav}
      hideThemeToggle={hideThemeToggle}
    />
  );
}
