"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AUTH_SYSTEM_AVAILABLE } from "@/config/authStatus";
import AuthModal from "./auth-modal";

// Public routes that don't show the sign-up modal
const publicRoutes = [
  "/",
  "/login",
  "/signup",
  "/register",
  "/continue",
  "/about",
  "/contact",
  "/coming-soon",
  "/help",
];

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!AUTH_SYSTEM_AVAILABLE) {
      setIsAuthenticated(true);
      setShowAuthModal(false);
      return;
    }

    // Wait for pathname to be available
    if (!pathname) {
      return;
    }

    // Root page is ALWAYS public and NEVER shows modal
    // Check this FIRST before any other logic to be absolutely sure
    if (pathname === "/") {
      setIsAuthenticated(true);
      setShowAuthModal(false);
      return;
    }

    // Check if current route is one of the auth pages or other public routes
    const isPublicRoute = publicRoutes.some(route =>
      route === "/" ? pathname === "/" : (pathname === route || pathname.startsWith(route))
    );

    if (isPublicRoute) {
      setIsAuthenticated(true);
      setShowAuthModal(false);
      return;
    }

    // Check for token in localStorage
    const token = localStorage.getItem("token");

    // Validate token exists and is valid
    let isValid = false;
    if (token && token.trim() !== "" && token !== "null" && token !== "undefined") {
      try {
        const parts = token.split('.');
        if (parts.length === 3) {
          const payload = JSON.parse(atob(parts[1]));
          if (!payload.exp || payload.exp * 1000 >= Date.now()) {
            isValid = true;
          } else {
            localStorage.removeItem('token');
          }
        } else {
          localStorage.removeItem('token');
        }
      } catch {
        localStorage.removeItem('token');
      }
    }

    if (isValid) {
      setIsAuthenticated(true);
      setShowAuthModal(false);
    } else {
      // For all remaining pages: Sign up is required but we allow seeing the content
      setIsAuthenticated(true);
      setShowAuthModal(true);
    }
  }, [pathname]);

  // Show nothing while checking (brief loading state)
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <>
      {children}
      <AuthModal
        isOpen={showAuthModal && pathname !== "/"}
        onClose={() => {
          // If user closes it without a token, redirect to home to enforce "required" sign up
          const token = localStorage.getItem("token");
          if (!token || token.trim() === "" || token === "null" || token === "undefined") {
            router.push("/");
          }
          setShowAuthModal(false);
        }}
      />
    </>
  );
}
