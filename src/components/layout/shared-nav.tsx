'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MenuDropdown from '@/components/layout/menu-dropdown';
import MobileMenu from '@/components/layout/mobile-menu';

import { useTheme } from '@/hooks/useTheme';
import UserMenu from '@/components/layout/user-menu';

import { Stethoscope, Code, Building2, GraduationCap, Home, BookOpen, Terminal, Trophy, Briefcase } from 'lucide-react';

interface SharedNavProps {
  isScrolled?: boolean;
  showAnimatedLine?: boolean;
  isFixed?: boolean;
  hasGradientBlueNav?: boolean;
  hideThemeToggle?: boolean;
}

export default function SharedNav({ isScrolled = false, showAnimatedLine = true, isFixed = false, hasGradientBlueNav = false, hideThemeToggle = false }: SharedNavProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number } | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme, setTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tutorialsButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const tutorialsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
    // Check login status
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    // Listen for storage events (e.g. from other tabs or manual events)
    const handleStorageChange = () => {
      const currentToken = localStorage.getItem('token');
      setIsLoggedIn(!!currentToken);
    };

    window.addEventListener('storage', handleStorageChange);
    // Custom event listener for same-tab updates
    window.addEventListener('auth-change', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('auth-change', handleStorageChange);
    };
  }, []);



  // Close tutorials dropdown function
  const closeTutorialsDropdown = useCallback(() => {
    if (tutorialsTimeoutRef.current) clearTimeout(tutorialsTimeoutRef.current);
    setShowDropdown(false);
    setDropdownPosition(null);
  }, []);

  const openTutorialsDropdown = useCallback(() => {
    if (tutorialsTimeoutRef.current) clearTimeout(tutorialsTimeoutRef.current);
    setShowDropdown(true);
    if (tutorialsButtonRef.current) {
      const rect = tutorialsButtonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 44,
        left: rect.left,
      });
    }
  }, []);

  const closeTutorialsWithDelay = useCallback(() => {
    if (tutorialsTimeoutRef.current) clearTimeout(tutorialsTimeoutRef.current);
    tutorialsTimeoutRef.current = setTimeout(() => {
      closeTutorialsDropdown();
    }, 200);
  }, [closeTutorialsDropdown]);


  // Close tutorials dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is on button (to avoid conflict with onClick toggle)
      if (tutorialsButtonRef.current?.contains(event.target as Node)) return;

      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        // Also check if click is outside the dropdown menu itself
        const dropdownMenu = document.querySelector('[data-tutorials-dropdown]');
        const isOutsideDropdown = !dropdownMenu || !dropdownMenu.contains(event.target as Node);

        if (isOutsideDropdown) {
          closeTutorialsDropdown();
        }
      }
    };

    if (showDropdown) {
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showDropdown, closeTutorialsDropdown]);

  // Close tutorials dropdown when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (showDropdown) {
        closeTutorialsDropdown();
      }
    };

    if (showDropdown) {
      window.addEventListener('scroll', handleScroll, true);
      return () => {
        window.removeEventListener('scroll', handleScroll, true);
      };
    }
  }, [showDropdown, closeTutorialsDropdown]);



  // Internal scroll state for global consistency
  const [internalScrolled, setInternalScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setInternalScrolled(window.scrollY > 20);
    };

    // Initial check
    if (typeof window !== 'undefined') {
      handleScroll();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const contentScrolled = isScrolled || internalScrolled;

  const tutorialLinks = [
    { href: '/tutorials/programming', label: 'Programming', icon: <Code className="w-4 h-4" /> },
    { href: '/roadmap?courseId=medical-coding', label: 'Medical Coding', icon: <Stethoscope className="w-4 h-4" /> },
    { href: '/courses', label: 'Courses', icon: <GraduationCap className="w-4 h-4" /> },
  ];

  // Determine if we are on a "content" page (tutorial/course view)
  const isHomePage = pathname === '/';

  // This triggers the simplified "Logo-only + Burger Menu" layout
  const isContentPage =
    pathname.startsWith('/python') ||
    pathname.startsWith('/java') ||
    pathname.startsWith('/sql') ||
    pathname.startsWith('/web-dev') ||
    pathname.startsWith('/devops') ||
    pathname.startsWith('/linux') ||
    pathname.startsWith('/data-science') ||
    pathname.startsWith('/tutorials') ||
    pathname.startsWith('/roadmap');

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-[100000] transition-all duration-300 pointer-events-none flex flex-col`}
      >
        {/* Scroll Blur Background - Fills the gap between logo and navbar on scroll */}
        <div
          className={`absolute top-0 left-0 right-0 h-[60px] transition-all duration-500 ease-in-out -z-10
            ${contentScrolled ? 'backdrop-blur-md bg-white/30 border-b border-white/20 shadow-sm' : 'backdrop-blur-none bg-transparent border-transparent'}`}
        />

        {/* Main Navbar Area (Logo + Pill) - FIRST */}
        <div className={`flex items-center justify-end pl-4 pt-0 pb-2 lg:pl-6 lg:pt-0 lg:pb-2 pr-0 w-full ${contentScrolled ? 'pb-2' : ''} relative`}>
          {/* Logo - Separate & Fixed Left */}
          <Link href="/" className="pointer-events-auto fixed top-0 left-0 flex items-center gap-3 hover:opacity-95 transition-all group z-[100002] bg-white rounded-full p-1.5 shadow-lg border border-white/50 pr-2 pl-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden relative bg-white shadow-inner">
              <Image
                src="/logo_new.jpg"
                alt="OHG365 Logo"
                width={48}
                height={48}
                className="object-contain animate-pulse"
                priority
              />
            </div>
            {/* Logo Text - Hidden on Content Pages */}
            {!isContentPage && (
              <div className="flex flex-col hidden sm:flex">
                <div
                  className="flex items-center text-xl font-black tracking-tight leading-none group-hover:opacity-90 transition-opacity"
                  style={{ fontFamily: 'var(--font-orbitron), sans-serif', letterSpacing: '0.05em' }}
                >
                  <span className="text-[#083D77]">ONE</span>
                  <span className="text-orange-500">HUB</span>
                  <span className="text-cyan-500">GLOBAL</span>
                </div>
                <div className="flex items-center justify-center w-full mt-1">
                  <span
                    className="text-[7px] font-bold tracking-[0.1em] uppercase leading-tight text-center px-1 text-[#083D77]"
                    style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
                  >
                    SKILLS TO SUCCESS
                  </span>
                </div>
              </div>
            )}
          </Link>

          {/* Floating Nav Pill - Right Side */}
          <nav
            className="pointer-events-auto bg-gradient-to-r from-white to-sky-300 rounded-l-full rounded-r-none pl-8 pr-6 py-3 shadow-2xl flex items-center space-x-4 lg:space-x-6 max-w-full overflow-x-auto md:overflow-visible no-scrollbar border border-white/40 border-r-0"
            style={{
              boxShadow: '0 10px 25px -5px rgba(56, 189, 248, 0.3), 0 8px 10px -6px rgba(56, 189, 248, 0.1)'
            }}
          >
            {/* Desktop Navigation Links */}
            {(!isContentPage || isMobileMenuOpen) && (
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
                <Link
                  href="/"
                  className={`relative group flex flex-col items-center justify-center px-1`}
                >
                  <div className={`p-2 rounded-full transition-all duration-300 transform group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-md ${isHomePage ? 'bg-white shadow-md' : ''}`}>
                    <Home className="w-5 h-5 text-[#083D77]" />
                  </div>
                  <span className={`absolute -bottom-8 transition-all duration-300 text-xs font-bold text-[#083D77] whitespace-nowrap bg-white/80 backdrop-blur w-auto px-2 py-0.5 rounded-full shadow-sm ${isHomePage ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    Home
                  </span>
                </Link>

                <Link
                  href="/courses"
                  className={`relative group flex flex-col items-center justify-center px-1`}
                >
                  <div className={`p-2 rounded-full transition-all duration-300 transform group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-md ${(pathname === '/courses' || pathname?.startsWith('/courses/') || pathname?.startsWith('/roadmap')) ? 'bg-white shadow-md' : ''}`}>
                    <GraduationCap className="w-5 h-5 text-[#083D77]" />
                  </div>
                  <span className={`absolute -bottom-8 transition-all duration-300 text-xs font-bold text-[#083D77] whitespace-nowrap bg-white/80 backdrop-blur w-auto px-2 py-0.5 rounded-full shadow-sm ${(pathname === '/courses' || pathname?.startsWith('/courses/') || pathname?.startsWith('/roadmap')) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    Courses
                  </span>
                </Link>

                <MenuDropdown />

                {/* Tutorials Dropdown Trigger */}
                <div
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={openTutorialsDropdown}
                  onMouseLeave={closeTutorialsWithDelay}
                >
                  <button
                    ref={tutorialsButtonRef}
                    onClick={() => {
                      // Toggle behavior for click
                      if (showDropdown) closeTutorialsDropdown();
                      else openTutorialsDropdown();
                    }}
                    className={`relative group flex flex-col items-center justify-center px-1`}
                  >
                    <div className={`p-2 rounded-full transition-all duration-300 transform group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-md ${(pathname.startsWith('/tutorials') || pathname.startsWith('/java') || pathname.startsWith('/python') || pathname.startsWith('/sql') || pathname.startsWith('/web-dev') || pathname.startsWith('/devops') || pathname.startsWith('/linux') || pathname.startsWith('/data-science') || pathname.startsWith('/code-terminal')) ? 'bg-white shadow-md' : ''}`}>
                      <BookOpen className="w-5 h-5 text-[#083D77]" />
                    </div>
                    <span className={`absolute -bottom-8 transition-all duration-300 text-xs font-bold text-[#083D77] whitespace-nowrap bg-white/80 backdrop-blur w-auto px-2 py-0.5 rounded-full shadow-sm ${(pathname.startsWith('/tutorials') || pathname.startsWith('/java') || pathname.startsWith('/python') || pathname.startsWith('/sql') || pathname.startsWith('/web-dev') || pathname.startsWith('/devops') || pathname.startsWith('/linux') || pathname.startsWith('/data-science') || pathname.startsWith('/code-terminal')) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                      Tutorials
                    </span>
                  </button>
                </div>

                <Link
                  href="/terminal"
                  className={`relative group flex flex-col items-center justify-center px-1`}
                >
                  <div className={`p-2 rounded-full transition-all duration-300 transform group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-md ${(pathname === '/terminal' || pathname?.startsWith('/terminal/')) ? 'bg-white shadow-md' : ''}`}>
                    <Terminal className="w-5 h-5 text-[#083D77]" />
                  </div>
                  <span className={`absolute -bottom-8 transition-all duration-300 text-xs font-bold text-[#083D77] whitespace-nowrap bg-white/80 backdrop-blur w-auto px-2 py-0.5 rounded-full shadow-sm ${(pathname === '/terminal' || pathname?.startsWith('/terminal/')) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    Terminal
                  </span>
                </Link>

                <Link
                  href="/challenges"
                  className={`relative group flex flex-col items-center justify-center px-1`}
                >
                  <div className={`p-2 rounded-full transition-all duration-300 transform group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-md ${(pathname === '/challenges' || pathname?.startsWith('/challenges/')) ? 'bg-white shadow-md' : ''}`}>
                    <Trophy className="w-5 h-5 text-[#083D77]" />
                  </div>
                  <span className={`absolute -bottom-8 transition-all duration-300 text-xs font-bold text-[#083D77] whitespace-nowrap bg-white/80 backdrop-blur w-auto px-2 py-0.5 rounded-full shadow-sm ${(pathname === '/challenges' || pathname?.startsWith('/challenges/')) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    Challenges
                  </span>
                </Link>

                <Link
                  href="https://konnecthere.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative group flex flex-col items-center justify-center px-1`}
                >
                  <div className={`p-2 rounded-full transition-all duration-300 transform group-hover:-translate-y-2 bg-orange-500 shadow-lg shadow-orange-500/30 group-hover:bg-orange-600 group-hover:shadow-orange-600/40`}>
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <span className={`absolute -bottom-8 transition-all duration-300 text-xs font-bold text-[#083D77] whitespace-nowrap bg-white/80 backdrop-blur w-auto px-2 py-0.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100`}>
                    Apply Jobs
                  </span>
                </Link>

                {isLoggedIn ? (
                  <UserMenu />
                ) : (
                  <Link
                    href="/login"
                    className="px-4 py-1.5 font-bold rounded-full text-sm bg-[#083D77] text-white hover:bg-[#0a3560] transition-all shadow-md"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            )}

            {/* Content Page Header Title - Optional Center Element */}
            {isContentPage && (
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Optional title element */}
              </div>
            )}

            {/* Divider */}
            {(!isContentPage || isMobileMenuOpen) && (
              <div className="hidden md:block w-px h-6 bg-[#083D77]/20 mx-2"></div>
            )}

            {/* Mobile Menu Button */}
            <button
              ref={mobileMenuButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isContentPage ? 'flex' : 'md:hidden'} relative z-50 p-2 text-[#083D77] hover:bg-[#083D77]/10 rounded-full transition-colors pointer-events-auto`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>
        </div>
      </div>

      {/* Top Left Floating Nav - Moved further right and lower */}
      <div className="fixed left-24 z-[100001] pointer-events-auto top-40 md:top-36 scale-90 md:scale-100 origin-top-left">
        {isHomePage && (
          <div className="tooltip-container group">
            <span className="tooltip-glow"></span>
            <div className="main-icon">
              {/* Share/Connect Icon instead of Alert */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path d="M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </div>

            {/* LinkedIn - Top */}
            <Link
              href="https://www.linkedin.com/in/eduonehubgobal/"
              target="_blank"
              className="tooltip-social linkedin"
              style={{ '--social-hover-bg': '#0077b5' } as any}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </Link>

            {/* Facebook - Top Left */}
            <Link
              href="https://www.facebook.com/share/1C4ddSw2Ub/"
              target="_blank"
              className="tooltip-social facebook"
              style={{ '--social-hover-bg': '#1877f2' } as any}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </Link>

            {/* YouTube - Top Right */}
            <Link
              href="https://youtube.com/@ohg365"
              target="_blank"
              className="tooltip-social youtube"
              style={{ '--social-hover-bg': '#ff0000' } as any}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </Link>

            {/* Instagram - Bottom */}
            <Link
              href="https://www.instagram.com/eduonehubglobal"
              target="_blank"
              className="tooltip-social instagram"
              style={{ '--social-hover-bg': '#e1306c' } as any}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </Link>

            {/* X (X) - Bottom Right */}
            <Link
              href="#"
              target="_blank"
              className="tooltip-social x"
              style={{ '--social-hover-bg': '#000000' } as any}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </Link>

            {/* Phone (Calls) - Bottom Left */}
            <div className="tooltip-social phone group/phone relative" style={{ '--social-hover-bg': '#083D77' } as any}>
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.27-.28.36-.67.25-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3.3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .69-.63.69-1.19v-3.44c0-.54-.45-.99-.99-.99z" />
              </svg>

              {/* Floating Numbers Overlay */}
              <div className="absolute left-full ml-4 opacity-0 group-hover/phone:opacity-100 transition-opacity bg-white/90 backdrop-blur shadow-xl rounded-2xl p-3 border border-gray-100 flex flex-col gap-2 pointer-events-none group-hover/phone:pointer-events-auto">
                <a href="tel:+919059450707" className="text-xs font-bold text-gray-800 hover:text-blue-600">+91 9059450707</a>
                <a href="tel:+917382314128" className="text-xs font-bold text-gray-800 hover:text-blue-600">+91 7382314128</a>
              </div>
            </div>
          </div>
        )}
      </div>



      {/* Separated WhatsApp at Bottom Right - Metallic Style */}
      <div className="fixed bottom-6 right-6 z-[100000]">
        <Link
          href="https://wa.me/919059450707"
          className="whatsapp-btn group"
          aria-label="WhatsApp"
        >
          <div className="button-outer">
            <div className="button-inner">
              <svg className="w-6 h-6 z-[4] relative transition-transform duration-200" viewBox="0 0 24 24">
                <path fill="#121212" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="whatsapp-btn-text">Contact Us</span>
            </div>
          </div>
        </Link>
      </div>


      {/* Tutorials Dropdown Portal logic */}
      {isMounted && showDropdown && dropdownPosition && createPortal(
        <div
          data-tutorials-dropdown
          className="fixed w-72 bg-gray-50/90 backdrop-blur-xl rounded-3xl shadow-2xl p-3 border border-white/40 ring-1 ring-black/5"
          style={{
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
            position: 'fixed',
            zIndex: 100001,
          }}
          onMouseEnter={() => {
            if (tutorialsTimeoutRef.current) clearTimeout(tutorialsTimeoutRef.current);
            setShowDropdown(true);
          }}
          onMouseLeave={() => {
            closeTutorialsWithDelay();
          }}
        >
          <div className="flex flex-col gap-1">
            {tutorialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setShowDropdown(false);
                  setDropdownPosition(null);
                }}
                className="group relative flex items-center gap-4 px-4 py-3.5 rounded-2xl text-gray-600 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white hover:text-black hover:shadow-xl hover:scale-105 hover:z-10"
              >
                <div className="flex items-center justify-center w-6 h-6 text-gray-500 group-hover:text-black transition-colors duration-200">
                  {link.icon}
                </div>
                <span className="font-semibold text-[15px] tracking-wide">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>,
        document.body
      )}

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        triggerRef={mobileMenuButtonRef as any}
        isLoggedIn={isLoggedIn}
      />
    </>
  );
}
