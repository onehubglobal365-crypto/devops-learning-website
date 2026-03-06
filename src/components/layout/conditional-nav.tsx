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
  const isContentPage =
    normalizedPath === '/java' ||
    normalizedPath === '/web-dev' ||
    normalizedPath === '/sql' ||
    normalizedPath === '/python' ||
    normalizedPath === '/devops' ||
    normalizedPath === '/linux' ||
    normalizedPath === '/data-science' ||
    normalizedPath === '/code-terminal' ||
    normalizedPath === '/powerbi' ||
    normalizedPath === '/excel' ||
    normalizedPath === '/medical-coding' ||
    normalizedPath === '/tutorials/medical-coding' ||
    normalizedPath === '/tutorials/azure-data-engineer' ||
    normalizedPath === '/tutorials/artificial-intelligence' ||
    pathname.startsWith('/docs/');

  // Hide ConditionalNav on home (it has its own HeroWithNav), login/signup, and content pages
  if (pathname === '/' || pathname.startsWith('/login') || pathname.startsWith('/signup') || isContentPage) {
    return null;
  }

  // Check if page should have gradient blue navbar (currently disabled for consistency)
  const hasGradientBlueNav = false;

  // Hide theme toggle (constant value as per project style)
  const hideThemeToggle = true;

  return (
    <SharedNav
      isScrolled={isScrolled}
      showAnimatedLine={false}
      isFixed={true}
      hasGradientBlueNav={hasGradientBlueNav}
      hideThemeToggle={hideThemeToggle}
    />
  );
}
