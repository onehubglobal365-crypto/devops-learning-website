'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface SidebarItem {
  id: string;
  title: string;
  href: string;
  icon?: string | React.ReactNode;
  children?: SidebarItem[];
}

interface SidebarProps {
  items: SidebarItem[];
  onThisPage?: { id: string; title: string }[];
  activeSection?: string;
  setActiveSection?: (section: string) => void;
  activeSubsection?: string | null;
  setActiveSubsection?: (section: string | null) => void;
  theme?: 'light' | 'dark';
}

export default function Sidebar({ items, onThisPage: _onThisPage, activeSection, setActiveSection, activeSubsection, setActiveSubsection, theme = 'dark' }: SidebarProps) {
  void _onThisPage;
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use scrollIntoView which respects scroll-margin-top CSS property
      // Elements should have scroll-mt-[100px] to account for header (80px) + spacing (20px)
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleItemClick = (e: React.MouseEvent, itemId: string, href: string, parentId?: string) => {
    // Check if the href is a hash link (client-side navigation)
    if (href.includes('#') && setActiveSection) {
      e.preventDefault();
      e.stopPropagation();
      const sectionId = href.split('#')[1];

      // Debug: log the section being navigated to
      console.log('Sidebar click - navigating to:', sectionId, 'from href:', href, 'itemId:', itemId);

      // Always use the sectionId from the href (the actual section ID)
      // This ensures we navigate to the correct section, not the parent group
      // setActiveSection is actually handleSetActiveSection which will update the hash
      setActiveSection(sectionId);
      if (setActiveSubsection) {
        // Only set as subsection if it's not a direct section and has a parent
        setActiveSubsection((itemId === sectionId || !parentId) ? null : sectionId);
      }

      // Don't update hash here - handleSetActiveSection already does it
      // Don't scroll here - let the page's useEffect handle scrolling
      // This prevents double-scrolling and ensures consistent behavior
    }
  };

  useEffect(() => {
    if (!activeSection) return;
    const parentWithChildren = items.find(item => {
      const hasChildren = item.children && item.children.length > 0;
      if (!hasChildren) return false;
      return item.id === activeSection || item.children!.some(child => child.id === activeSection);
    });

    if (parentWithChildren) {
      setExpandedItems(prev =>
        prev.includes(parentWithChildren.id) ? prev : [...prev, parentWithChildren.id]
      );
    }
  }, [items, activeSection]);

  const renderSidebarItem = (item: SidebarItem, level = 0, parentId?: string) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.id);
    // Check if any child matches the activeSection (not activeSubsection which is always null)
    const childActive = hasChildren && item.children!.some(child => child.id === activeSection);
    const active = isActive(item.href) || (activeSection && item.id === activeSection) || childActive;

    // Theme-based styles
    const inactiveTextClass = theme === 'light' ? 'text-gray-700' : 'text-gray-300';
    const hoverClass = theme === 'light' ? 'hover:bg-white/40 hover:text-black' : 'hover:bg-gray-800/60 hover:text-white';
    const expandIconClass = isExpanded
      ? (theme === 'light' ? 'rotate-90 text-gray-900' : 'rotate-90 text-white')
      : (theme === 'light' ? 'text-gray-500' : 'text-gray-400');

    // Active style based on theme
    // Active style based on theme
    const activeClass = theme === 'light'
      ? 'bg-[#d4edda] text-[#155724] border-l-4 border-[#155724] font-bold'
      : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white border border-white/10 shadow-lg shadow-purple-500/20 scale-105 rounded-lg';

    // Item container style based on theme
    const containerClass = theme === 'light'
      ? 'w-full px-4 py-3 text-sm transition-colors duration-200 border-b border-gray-100 hover:bg-gray-50'
      : 'w-full px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800/60 hover:text-white';

    return (
      <div key={item.id} className="mb-1 animate-fade-in-up">
        <div className="flex items-center">
          {hasChildren ? (
            <button
              onClick={() => {
                // Only toggle expand/collapse for parent items, don't navigate
                toggleExpanded(item.id);
              }}
              className={`flex items-center text-left focus:outline-none ${containerClass} ${active
                ? activeClass
                : inactiveTextClass
                }`}
            >
              <svg
                className={`w-5 h-5 mr-3 transition-all duration-300 ${expandIconClass}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {item.icon && <span className="mr-3 text-lg transition-transform duration-300 group-hover:scale-110">{item.icon}</span>}
              <span className="flex-1">{item.title}</span>
            </button>
          ) : (
            <Link
              href={item.href}
              onClick={(e) => handleItemClick(e, item.id, item.href, parentId)}
              className={`flex items-center text-left focus:outline-none ${containerClass} ${active
                ? activeClass
                : inactiveTextClass
                }`}
            >
              {item.icon && <span className="mr-3 text-lg transition-transform duration-300 group-hover:scale-110">{item.icon}</span>}
              <span className="flex-1">{item.title}</span>
              {active && theme === 'light' && (
                <svg className="w-4 h-4 text-[#155724]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </Link>
          )}
        </div>

        {hasChildren && isExpanded && (
          <div className="ml-4 mt-1 space-y-1 animate-fade-in-up">
            {item.children!.map(child => renderSidebarItem(child, level + 1, item.id))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full relative z-[60]">
      {/* Navigation - independent scroll container */}
      <nav
        className={`flex-1 overflow-y-auto overscroll-contain ${theme === 'light' ? 'py-2' : 'p-4'}`}
        onWheel={(e) => {
          // Prevent sidebar scroll from propagating to window
          e.stopPropagation();
        }}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255, 255, 255, 0.3) rgba(26, 26, 26, 0.5)'
        }}
      >
        <div className="space-y-1">
          {items.map(item => renderSidebarItem(item))}
        </div>
      </nav>
    </div>
  );
}
