'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Stethoscope, Code, GraduationCap, Home, BookOpen, Map, Rocket, Library, Briefcase, Users, HelpCircle, Terminal, Trophy, Building2, Image as ImageIcon, FileText, PhoneCall } from 'lucide-react';
import menuConfig from '@/data/menu-config.json';



interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<any>;
  isLoggedIn: boolean;
  onOpenLogin: () => void;
  onOpenSignup: () => void;
}

export default function MobileMenu({ isOpen, onClose, triggerRef, isLoggedIn, onOpenLogin, onOpenSignup }: MobileMenuProps) {
  const [profile, setProfile] = useState({
    name: '',
    initial: 'U'
  });
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        setActiveSubmenu(null);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If click is on the trigger button, ignore it (let the button handle toggle)
      if (triggerRef?.current && triggerRef.current.contains(event.target as Node)) {
        return;
      }

      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
        setActiveSubmenu(null);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isLoggedIn) {
      const savedProfile = localStorage.getItem('userProfile');
      let name = '';
      if (savedProfile) {
        const p = JSON.parse(savedProfile);
        name = p.nickname || p.username;
      } else {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
          try {
            const user = JSON.parse(savedUser);
            name = user.name;
          } catch (e) {
            console.error('Error parsing user data:', e);
          }
        }
      }

      if (name) {
        setProfile({
          name,
          initial: name[0].toUpperCase()
        });
      }
    }
  }, [isLoggedIn, isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[55] md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-white to-sky-200 shadow-2xl border-r border-white/50 z-[200000] transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#083D77]/10 bg-white/50 backdrop-blur-sm">
            <Link href={isLoggedIn ? "/dashboard" : "/"} onClick={onClose} className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center p-1 shrink-0 border border-[#083D77]/10 overflow-hidden">
                {isLoggedIn && profile.name ? (
                  <div className="w-full h-full bg-[#083D77] text-white flex items-center justify-center font-bold text-lg rounded-full">
                    {profile.initial}
                  </div>
                ) : (
                  <Image
                    src="/logo_new.jpg"
                    alt="OHG365 Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                )}
              </div>
              <div className="flex flex-col min-w-0">
                {isLoggedIn && profile.name ? (
                  <>
                    <div className="text-[#083D77] font-bold truncate">
                      {profile.name}
                    </div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                      Student Dashboard
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="flex items-center text-lg font-black tracking-tight leading-none whitespace-nowrap"
                      style={{ fontFamily: 'var(--font-orbitron), sans-serif', letterSpacing: '0.05em' }}
                    >
                      <span className="text-[#083D77]">ONE</span>
                      <span className="text-orange-500">HUB</span>
                    </div>
                    <div
                      className="flex items-center text-sm font-bold tracking-[0.2em] leading-none text-cyan-500 mt-0.5"
                      style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
                    >
                      GLOBAL
                    </div>
                  </>
                )}
              </div>
            </Link>
            <button
              onClick={onClose}
              className="p-2 text-[#083D77] hover:bg-[#083D77]/10 focus:outline-none focus:ring-2 focus:ring-[#083D77] rounded-full min-w-[40px] min-h-[40px] flex items-center justify-center ml-2"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>



          {/* Menu Items */}
          <nav className="flex-1 p-4 pb-24 space-y-1" role="menu">
            <Link
              href="/"
              onClick={onClose}
              className={`block px-4 py-3 rounded-xl transition-all duration-200 mb-2 min-h-[44px] flex items-center font-medium ${pathname === '/' ? 'bg-white shadow-md text-[#083D77]' : 'text-[#083D77] hover:bg-white hover:shadow-sm'}`}
              role="menuitem"
            >
              <Home className="w-5 h-5 mr-3" />
              Home
            </Link>

            {/* About Dropdown */}
            <div className="mb-2">
              <button
                onClick={() => setActiveSubmenu(activeSubmenu === 'about' ? null : 'about')}
                className={`w-full px-4 py-3 text-left rounded-xl transition-all duration-200 flex items-center justify-between min-h-[44px] focus:outline-none font-medium ${activeSubmenu === 'about' ? 'bg-white/50 text-[#083D77]' : 'text-[#083D77] hover:bg-white hover:shadow-sm'}`}
                aria-expanded={activeSubmenu === 'about'}
                aria-haspopup="true"
              >
                <div className="flex items-center">
                  <HelpCircle className="w-5 h-5 mr-3" />
                  <span>About Us</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${activeSubmenu === 'about' ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {activeSubmenu === 'about' && (
                <div className="ml-4 mt-2 space-y-1 border-l-2 border-[#083D77]/10 pl-2">
                  <Link
                    href="/about"
                    onClick={onClose}
                    className="block px-4 py-3 text-[#083D77]/80 hover:text-[#083D77] hover:bg-white/60 rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
                    role="menuitem"
                  >
                    <Home className="w-4 h-4 mr-3" />
                    About Us
                  </Link>
                  <Link
                    href="/?open=true#gallery"
                    onClick={onClose}
                    className="block px-4 py-3 text-[#083D77]/80 hover:text-[#083D77] hover:bg-white/60 rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
                    role="menuitem"
                  >
                    <ImageIcon className="w-4 h-4 mr-3" />
                    Gallery
                  </Link>
                  <Link
                    href="/about/blog"
                    onClick={onClose}
                    className="block px-4 py-3 text-[#083D77]/80 hover:text-[#083D77] hover:bg-white/60 rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
                    role="menuitem"
                  >
                    <FileText className="w-4 h-4 mr-3" />
                    Blog
                  </Link>
                  <Link
                    href="/help"
                    onClick={onClose}
                    className="block px-4 py-3 text-[#083D77]/80 hover:text-[#083D77] hover:bg-white/60 rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
                    role="menuitem"
                  >
                    <HelpCircle className="w-4 h-4 mr-3" />
                    Help & FAQs
                  </Link>
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="block px-4 py-3 text-[#083D77]/80 hover:text-[#083D77] hover:bg-white/60 rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
                    role="menuitem"
                  >
                    <PhoneCall className="w-4 h-4 mr-3" />
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about/branches"
              onClick={onClose}
              className={`block px-4 py-3 rounded-xl transition-all duration-200 mb-2 min-h-[44px] flex items-center font-medium ${pathname === '/about/branches' ? 'bg-white shadow-md text-[#083D77]' : 'text-[#083D77] hover:bg-white hover:shadow-sm'}`}
              role="menuitem"
            >
              <Building2 className="w-5 h-5 mr-3" />
              Branches
            </Link>

            <Link
              href="/courses"
              onClick={onClose}
              className={`block px-4 py-3 rounded-xl transition-all duration-200 mb-2 min-h-[44px] flex items-center font-medium ${pathname === '/courses' ? 'bg-white shadow-md text-[#083D77]' : 'text-[#083D77] hover:bg-white hover:shadow-sm'}`}
              role="menuitem"
            >
              <GraduationCap className="w-5 h-5 mr-3" />
              Courses
            </Link>

            {/* Menu Sections from Config */}
            {menuConfig.menu.map((item) => (
              <div key={item.slug} className="mb-2">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setActiveSubmenu(activeSubmenu === item.slug ? null : item.slug)}
                      className={`w-full px-4 py-3 text-left rounded-xl transition-all duration-200 flex items-center justify-between min-h-[44px] focus:outline-none font-medium ${activeSubmenu === item.slug ? 'bg-white/50 text-[#083D77]' : 'text-[#083D77] hover:bg-white hover:shadow-sm'}`}
                      aria-expanded={activeSubmenu === item.slug}
                      aria-haspopup="true"
                    >
                      <div className="flex items-center">
                        {item.slug === 'learning-paths' && <Map className="w-5 h-5 mr-3" />}
                        {item.slug === 'projects' && <Rocket className="w-5 h-5 mr-3" />}
                        {item.slug === 'practice' && <Code className="w-5 h-5 mr-3" />}
                        {item.slug === 'resources' && <Library className="w-5 h-5 mr-3" />}
                        {item.slug === 'career' && <Briefcase className="w-5 h-5 mr-3" />}
                        {item.slug === 'community' && <Users className="w-5 h-5 mr-3" />}
                        {item.slug === 'about-support' && <HelpCircle className="w-5 h-5 mr-3" />}
                        <span>{item.label}</span>
                      </div>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${activeSubmenu === item.slug ? 'rotate-90' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {activeSubmenu === item.slug && (
                      <div className="ml-4 mt-2 space-y-1 border-l-2 border-[#083D77]/10 pl-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.slug}
                            href={child.href || '#'}
                            target={child.href?.startsWith('http') ? '_blank' : undefined}
                            rel={child.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                            onClick={onClose}
                            className="block px-4 py-3 text-[#083D77]/80 hover:text-[#083D77] hover:bg-white/60 rounded-lg transition-all duration-200 min-h-[44px] flex items-center text-sm"
                            role="menuitem"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={`/menu/${item.slug}`}
                    onClick={onClose}
                    className={`block px-4 py-3 rounded-xl transition-all duration-200 min-h-[44px] flex items-center font-medium ${pathname === `/menu/${item.slug}` ? 'bg-white shadow-md text-[#083D77]' : 'text-[#083D77] hover:bg-white hover:shadow-sm'}`}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Tutorials Dropdown */}
            <div className="mb-2">
              <button
                onClick={() => setActiveSubmenu(activeSubmenu === 'tutorials' ? null : 'tutorials')}
                className={`w-full px-4 py-3 text-left rounded-xl transition-all duration-200 flex items-center justify-between min-h-[44px] focus:outline-none font-medium ${activeSubmenu === 'tutorials' ? 'bg-white/50 text-[#083D77]' : 'text-[#083D77] hover:bg-white hover:shadow-sm'}`}
                aria-expanded={activeSubmenu === 'tutorials'}
                aria-haspopup="true"
              >
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-3" />
                  <span>Tutorials</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${activeSubmenu === 'tutorials' ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {activeSubmenu === 'tutorials' && (
                <div className="ml-4 mt-2 space-y-1 border-l-2 border-[#083D77]/10 pl-2">
                  <Link
                    href="/roadmap?courseId=medical-coding"
                    onClick={onClose}
                    className="block px-4 py-3 text-[#083D77]/80 hover:text-[#083D77] hover:bg-white/60 rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
                    role="menuitem"
                  >
                    <Stethoscope className="w-4 h-4 mr-3" />
                    Medical Coding
                  </Link>
                  <Link
                    href="/roadmap?courseId=programming"
                    onClick={onClose}
                    className="block px-4 py-3 text-[#083D77]/80 hover:text-[#083D77] hover:bg-white/60 rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
                    role="menuitem"
                  >
                    <Code className="w-4 h-4 mr-3" />
                    Programming
                  </Link>
                  <Link
                    href="/courses"
                    onClick={onClose}
                    className="block px-4 py-3 text-[#083D77]/80 hover:text-[#083D77] hover:bg-white/60 rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
                    role="menuitem"
                  >
                    <GraduationCap className="w-4 h-4 mr-3" />
                    Courses
                  </Link>
                </div>
              )}
            </div>

            {/* Additional Links */}
            <div className="mt-4 pt-4 border-t border-[#083D77]/10 space-y-3">
              <Link
                href="https://ohg-ai-interviewer.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="block px-4 py-3 rounded-xl transition-all duration-200 min-h-[44px] flex items-center font-medium text-[#083D77] hover:bg-white hover:shadow-sm"
                role="menuitem"
              >
                <Rocket className="w-5 h-5 mr-3" />
                AI Interview
              </Link>
              <Link
                href="/terminal"
                onClick={onClose}
                className={`block px-4 py-3 rounded-xl transition-all duration-200 min-h-[44px] flex items-center font-medium ${pathname === '/terminal' ? 'bg-white shadow-md text-[#083D77]' : 'text-[#083D77] hover:bg-white hover:shadow-sm'}`}
                role="menuitem"
              >
                <Terminal className="w-5 h-5 mr-3" />
                Terminal
              </Link>
              <Link
                href="https://konnecthere.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="block px-4 py-3 bg-[#95D26D] text-white font-bold rounded-xl hover:bg-[#85c25d] shadow-md hover:shadow-lg transition-all duration-300 min-h-[44px] flex items-center justify-center"
                role="menuitem"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Apply Jobs
              </Link>

              {/* Authentication Paused */}
              {/* 
              {!isLoggedIn ? (
                <button
                  onClick={() => {
                    onClose();
                    onOpenLogin();
                  }}
                  className="w-full block px-4 py-3 bg-[#083D77] text-white font-bold rounded-xl hover:bg-[#0a3560] shadow-md hover:shadow-lg transition-all duration-300 min-h-[44px] flex items-center justify-center"
                >
                  Sign In
                </button>
              ) : (
                <>
                  <Link
                    href="/dashboard"
                    onClick={onClose}
                    className="block px-4 py-3 bg-[#083D77] text-white font-bold rounded-xl hover:bg-[#0a3560] shadow-md hover:shadow-lg transition-all duration-300 min-h-[44px] flex items-center justify-center mb-3"
                    role="menuitem"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      localStorage.removeItem('token');
                      localStorage.removeItem('user');
                      localStorage.removeItem('isLoggedIn');
                      window.dispatchEvent(new Event('auth-change'));
                      window.location.reload();
                      onClose();
                    }}
                    className="w-full block px-4 py-3 bg-red-50 text-red-600 font-bold rounded-xl hover:bg-red-100 shadow-sm transition-all duration-300 min-h-[44px] flex items-center justify-center"
                    role="menuitem"
                  >
                    Log Out
                  </button>
                </>
              )}
              */}

              <Link
                href="/challenges"
                onClick={onClose}
                className="block px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-pink-500 shadow-md hover:shadow-lg transition-all duration-300 min-h-[44px] flex items-center justify-center"
                role="menuitem"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Challenges
              </Link>
            </div>

            {/* Connect Section */}
            <div className="mt-6 pt-6 border-t border-[#083D77]/10 mb-6">
              <h3 className="text-xs font-bold text-[#083D77] uppercase tracking-wider mb-4 px-4">Connect With Us</h3>

              <div className="flex flex-wrap gap-3 px-4 mb-6">
                {[
                  { name: 'WhatsApp', href: 'https://wa.me/919059450707', color: '#25D366', path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" },
                  { name: 'LinkedIn', href: '#', color: '#0077b5', path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                  { name: 'X', href: '#', color: '#000000', path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" },
                  { name: 'Facebook', href: '#', color: '#1877F2', path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { name: 'YouTube', href: '#', color: '#FF0000', path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="group relative flex items-center justify-center w-10 h-10 rounded-full hover:scale-110 transition-all duration-300 bg-white shadow-sm hover:shadow-md border border-[#083D77]/10"
                    aria-label={social.name}
                  >
                    <svg
                      className="w-5 h-5 text-[#083D77] group-hover:text-white relative z-10 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.path} />
                    </svg>
                    <span
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: social.color }}
                    />
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-2 px-4">
                <a href="tel:+919059450707" className="flex items-center text-sm font-semibold text-[#083D77] hover:bg-white/50 p-2 rounded-lg transition-colors">
                  <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center mr-3 text-[#083D77]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.27-.28.36-.67.25-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3.3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .69-.63.69-1.19v-3.44c0-.54-.45-.99-.99-.99z" /></svg>
                  </span>
                  +91 9059450707
                </a>
                <a href="tel:+917382314128" className="flex items-center text-sm font-semibold text-[#083D77] hover:bg-white/50 p-2 rounded-lg transition-colors">
                  <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center mr-3 text-[#083D77]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.27-.28.36-.67.25-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3.3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .69-.63.69-1.19v-3.44c0-.54-.45-.99-.99-.99z" /></svg>
                  </span>
                  +91 7382314128
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

