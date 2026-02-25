'use client';

import { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import MenuDropdown from '@/components/layout/menu-dropdown';
import MobileMenu from '@/components/layout/mobile-menu';
import AuthModal from '@/components/layout/auth-modal';

import { useTheme } from '@/hooks/useTheme';
import UserMenu from '@/components/layout/user-menu';

import { Stethoscope, Code, Building2, GraduationCap, Home, BookOpen, Terminal, Trophy, Briefcase, Facebook, Instagram, Linkedin, Youtube, Phone, PhoneCall, ChevronDown, LayoutGrid, Image as ImageIcon, FileText, Info, HelpCircle } from 'lucide-react';

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
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tutorialsButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const tutorialsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [aboutDropdownPosition, setAboutDropdownPosition] = useState<{ top: number; left: number } | null>(null);
  const aboutButtonRef = useRef<HTMLDivElement>(null);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auth Modal State
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'signup'>('login');

  const lastHandledAuthRef = useRef<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const auth = searchParams.get('auth');
    if ((auth === 'login' || auth === 'signup') && auth !== lastHandledAuthRef.current) {
      lastHandledAuthRef.current = auth;
      setAuthView(auth as 'login' | 'signup');
      setIsAuthModalOpen(true);

      // Use router.replace to clear the param from Next.js state
      const params = new URLSearchParams(window.location.search);
      params.delete('auth');
      const newUrl = params.toString() ? `?${params.toString()}` : pathname;
      router.replace(newUrl, { scroll: false });
    } else if (!auth) {
      lastHandledAuthRef.current = null;
    }
  }, [searchParams, router, pathname]);

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
        top: rect.bottom + 12,
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

  // About Dropdown logic
  const closeAboutDropdown = useCallback(() => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setShowAboutDropdown(false);
    setAboutDropdownPosition(null);
  }, []);

  const openAboutDropdown = useCallback(() => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setShowAboutDropdown(true);
    if (aboutButtonRef.current) {
      const rect = aboutButtonRef.current.getBoundingClientRect();
      setAboutDropdownPosition({
        top: rect.bottom + 12,
        left: rect.left,
      });
    }
  }, []);

  const closeAboutWithDelay = useCallback(() => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    aboutTimeoutRef.current = setTimeout(() => {
      closeAboutDropdown();
    }, 200);
  }, [closeAboutDropdown]);


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

  // Close About dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutButtonRef.current?.contains(event.target as Node)) return;

      const dropdownMenu = document.querySelector('[data-about-dropdown]');
      if (dropdownMenu && !dropdownMenu.contains(event.target as Node)) {
        closeAboutDropdown();
      }
    };

    if (showAboutDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showAboutDropdown, closeAboutDropdown]);

  // Close About dropdown when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (showAboutDropdown) closeAboutDropdown();
    };

    if (showAboutDropdown) {
      window.addEventListener('scroll', handleScroll, true);
      return () => window.removeEventListener('scroll', handleScroll, true);
    }
  }, [showAboutDropdown, closeAboutDropdown]);



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
    { href: '/challenges', label: 'Challenges', icon: <Trophy className="w-4 h-4" /> },
  ];

  const aboutLinks = [
    { href: '/about', label: 'About Us', icon: <Info className="w-4 h-4" /> },
    { href: '/?open=true#gallery', label: 'Gallery', icon: <ImageIcon className="w-4 h-4" /> },
    { href: '/about/blog', label: 'Blog', icon: <FileText className="w-4 h-4" /> },
    { href: '/help', label: 'Help & FAQs', icon: <HelpCircle className="w-4 h-4" /> },
    { href: '/contact', label: 'Contact Us', icon: <PhoneCall className="w-4 h-4" /> },
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
        {/* Top Bar - Only on Desktop Home Page and not scrolled */}
        {(!contentScrolled && isHomePage) && (
          <div className="bg-white border-b border-gray-100 py-2 hidden md:block transition-all duration-300 opacity-100">
            <div className="container mx-auto flex items-center justify-between px-4 lg:px-6 pointer-events-auto">
              <div className="flex items-center gap-6 text-sm font-bold text-[#083D77]">
                <div className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+919059450707">+91 9059450707</a>
                </div>
                <div className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+917382314128">+91 7382314128</a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <Link href="https://www.facebook.com/share/1C4ddSw2Ub/" target="_blank" className="text-[#083D77] hover:text-[#1877f2] transition-transform hover:scale-110">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </Link>
                <Link href="https://www.instagram.com/eduonehubglobal" target="_blank" className="text-[#083D77] hover:text-[#e1306c] transition-transform hover:scale-110">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </Link>
                <Link href="https://www.linkedin.com/in/eduonehubgobal/" target="_blank" className="text-[#083D77] hover:text-[#0077b5] transition-transform hover:scale-110">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </Link>
                <Link href="https://youtube.com/@ohg365" target="_blank" className="text-[#083D77] hover:text-[#ff0000] transition-transform hover:scale-110">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </Link>
              </div>

              <a
                href="tel:+919059450707"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-black shadow-lg shadow-orange-500/30 transition-all uppercase tracking-wider"
              >
                Career Guidance
              </a>
            </div>
          </div>
        )}

        {/* Main Navbar Area (Logo + Navigation) - Sticky to top */}
        <div className={`flex items-center justify-between px-4 py-2 w-full relative transition-all duration-300 pointer-events-auto ${(contentScrolled || !isHomePage) ? 'bg-white shadow-xl mt-0 border-b border-gray-100' : 'bg-transparent mt-0'}`}>
          {/* Logo - Separate & Fixed Left */}
          <Link
            href="/"
            className={`flex items-center gap-3 hover:opacity-95 transition-all group z-[150002] rounded-full p-1.5 pr-2 pl-2 ${!(contentScrolled || !isHomePage) ? 'bg-white shadow-lg border border-white/50' : ''}`}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden relative bg-white shadow-inner">
              <Image
                src="/logo_new.jpg"
                alt="OHG365 Logo"
                width={48}
                height={48}
                className="object-contain"
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

          <nav className="flex items-center">
            {/* Desktop Navigation Links */}
            {(!isContentPage || isMobileMenuOpen) && (
              <div className="hidden md:flex items-center space-x-2 text-sm font-bold">
                <Link
                  href="/"
                  className={`px-4 py-2 rounded-full font-bold transition-all duration-300 ${isHomePage
                    ? 'text-orange-500 bg-orange-50 shadow-sm'
                    : `${(contentScrolled || !isHomePage) ? 'text-[#083D77] hover:text-orange-500 hover:bg-orange-50' : 'text-white hover:bg-white/20'} active:scale-95`
                    }`}
                >
                  Home
                </Link>

                {/* About Dropdown Trigger */}
                <div
                  className="relative"
                  ref={aboutButtonRef}
                  onMouseEnter={openAboutDropdown}
                  onMouseLeave={closeAboutWithDelay}
                >
                  <button
                    onClick={() => {
                      if (showAboutDropdown) closeAboutDropdown();
                      else openAboutDropdown();
                    }}
                    className={`flex items-center gap-1 px-4 py-2 rounded-full font-bold transition-all duration-300 ${(pathname.startsWith('/about') && pathname !== '/about/branches')
                      ? 'text-orange-500 bg-orange-50 shadow-sm'
                      : `${(contentScrolled || !isHomePage) ? 'text-[#083D77] hover:text-orange-500 hover:bg-orange-50' : 'text-white hover:bg-white/20'} active:scale-95`
                      }`}
                  >
                    About Us
                    <ChevronDown className={`w-4 h-4 transition-colors ${(contentScrolled || !isHomePage) ? 'text-[#083D77]' : 'text-white'}`} />
                  </button>
                </div>

                <Link
                  href="/about/branches"
                  className={`px-4 py-2 rounded-full font-bold transition-all duration-300 ${pathname === '/about/branches'
                    ? 'text-orange-500 bg-orange-50 shadow-sm'
                    : `${(contentScrolled || !isHomePage) ? 'text-[#083D77] hover:text-orange-500 hover:bg-orange-50' : 'text-white hover:bg-white/20'} active:scale-95`
                    }`}
                >
                  Branches
                </Link>

                <Link
                  href="/courses"
                  className={`px-4 py-2 rounded-full font-bold transition-all duration-300 ${(pathname === '/courses' || pathname?.startsWith('/courses/') || pathname?.startsWith('/roadmap'))
                    ? 'text-orange-500 bg-orange-50 shadow-sm'
                    : `${(contentScrolled || !isHomePage) ? 'text-[#083D77] hover:text-orange-500 hover:bg-orange-50' : 'text-white hover:bg-white/20'} active:scale-95`
                    }`}
                >
                  Courses
                </Link>

                <MenuDropdown scrolled={contentScrolled || !isHomePage} />

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
                      if (showDropdown) closeTutorialsDropdown();
                      else openTutorialsDropdown();
                    }}
                    className={`flex items-center gap-1 px-4 py-2 rounded-full font-bold transition-all duration-300 ${(pathname.startsWith('/tutorials') || pathname.startsWith('/java') || pathname.startsWith('/python') || pathname.startsWith('/sql') || pathname.startsWith('/web-dev') || pathname.startsWith('/devops') || pathname.startsWith('/linux') || pathname.startsWith('/data-science') || pathname.startsWith('/code-terminal') || pathname.startsWith('/challenges'))
                      ? 'text-orange-500 bg-orange-50 shadow-sm'
                      : `${(contentScrolled || !isHomePage) ? 'text-[#083D77] hover:text-orange-500 hover:bg-orange-50' : 'text-white hover:bg-white/20'} active:scale-95`
                      }`}
                  >
                    Tutorials
                    <ChevronDown className={`w-4 h-4 transition-colors ${(contentScrolled || !isHomePage) ? 'text-[#083D77]' : 'text-white'}`} />
                  </button>
                </div>

                {/* <Link
                  href="/terminal"
                  className={`px-4 py-2 rounded-full font-bold transition-all duration-300 ${(pathname === '/terminal' || pathname?.startsWith('/terminal/'))
                    ? 'text-orange-500 bg-orange-50 shadow-sm'
                    : `${(contentScrolled || !isHomePage) ? 'text-[#083D77] hover:text-orange-500 hover:bg-orange-50' : 'text-white hover:bg-white/20'} active:scale-95`
                    }`}
                >
                  Terminal
                </Link> */}

                {/* <Link
                  href="/challenges"
                  className={`px-4 py-2 rounded-full font-bold transition-all duration-300 ${(pathname === '/challenges' || pathname?.startsWith('/challenges/'))
                    ? 'text-orange-500 bg-orange-50 shadow-sm'
                    : `${(contentScrolled || !isHomePage) ? 'text-[#083D77] hover:text-orange-500 hover:bg-orange-50' : 'text-white hover:bg-white/20'} active:scale-95`
                    }`}
                >
                  Challenges
                </Link> */}

                <Link
                  href="https://ohg-ai-interviewer.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-full font-bold transition-all duration-300 ${(contentScrolled || !isHomePage) ? 'text-[#083D77] hover:text-orange-500 hover:bg-orange-50' : 'text-white hover:bg-white/20'} active:scale-95`}
                >
                  AI Interview
                </Link>

                <Link
                  href="https://konnecthere.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#95D26D] text-white shadow-lg shadow-green-500/20 hover:bg-[#85c25d] transition-all ml-2"
                >
                  Apply Jobs
                </Link>

                {/* Authentication Paused */}
                {/* 
                <div className="w-px h-6 bg-gray-200 mx-2"></div>

                {isLoggedIn ? (
                  <UserMenu />
                ) : (
                  <button
                    onClick={() => {
                      setAuthView('login');
                      setIsAuthModalOpen(true);
                    }}
                    className={`px-6 py-2 font-bold rounded-full transition-all duration-300 shadow-lg active:scale-95 ${(contentScrolled || !isHomePage)
                      ? 'bg-[#083D77] text-white hover:bg-[#0a3560] shadow-[#083D77]/20'
                      : 'bg-white text-[#083D77] hover:bg-white/90 shadow-white/20'
                      }`}
                  >
                    Sign In
                  </button>
                )}
                */}
              </div>
            )}

            {/* Content Page Header Title - Optional Center Element */}
            {isContentPage && (
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Optional title element */}
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              ref={mobileMenuButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isContentPage ? 'flex' : 'md:hidden'} relative z-50 p-2 text-[#083D77] hover:bg-[#083D77]/10 rounded-full transition-colors`}
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

      {/* Top Left Floating Nav - Removed since we have Top Bar now, but keeping container for consistency loop if needed */}
      < div className="fixed left-24 z-[100001] pointer-events-auto top-40 md:top-36 scale-90 md:scale-100 origin-top-left hidden" >
      </div >



      {/* Separated WhatsApp at Bottom Right - Metallic Style */}
      < div className="fixed bottom-6 right-6 z-[100000]" >
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
      </div >


      {/* Tutorials Dropdown Portal logic */}
      {
        isMounted && showDropdown && dropdownPosition && createPortal(
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
        )
      }

      {/* About Dropdown Portal */}
      {
        isMounted && showAboutDropdown && aboutDropdownPosition && createPortal(
          <div
            data-about-dropdown
            className="fixed w-72 bg-gray-50/90 backdrop-blur-xl rounded-3xl shadow-2xl p-3 border border-white/40 ring-1 ring-black/5"
            style={{
              top: `${aboutDropdownPosition.top}px`,
              left: `${aboutDropdownPosition.left}px`,
              position: 'fixed',
              zIndex: 100001,
            }}
            onMouseEnter={() => {
              if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
              setShowAboutDropdown(true);
            }}
            onMouseLeave={() => {
              closeAboutWithDelay();
            }}
          >
            <div className="flex flex-col gap-1">
              {aboutLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setShowAboutDropdown(false);
                    setAboutDropdownPosition(null);
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
        )
      }

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => {
          setIsAuthModalOpen(false);
          // Remove ?auth=... from URL using router.replace
          const params = new URLSearchParams(window.location.search);
          params.delete('auth');
          const newUrl = params.toString() ? `?${params.toString()}` : pathname || '/';
          router.replace(newUrl, { scroll: false });
        }}
        initialView={authView}
      />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        triggerRef={mobileMenuButtonRef as any}
        isLoggedIn={isLoggedIn}
        onOpenLogin={() => {
          setAuthView('login');
          setIsAuthModalOpen(true);
        }}
        onOpenSignup={() => {
          setAuthView('signup');
          setIsAuthModalOpen(true);
        }}
      />
    </>
  );
}
