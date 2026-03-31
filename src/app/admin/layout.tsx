"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    GraduationCap,
    Briefcase,
    Settings,
    LogOut,
    Menu,
    X,
    Search,
    Bell,
    ChevronRight,
    UserCheck,
    TrendingUp,
    Globe
} from "lucide-react";
import Image from "next/image";

interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [error, setError] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Check if authorized in this session
        const auth = sessionStorage.getItem("admin_auth");
        if (auth === "true") {
            setIsAuthorized(true);
        }

        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setIsSidebarOpen(false);
                setIsMobile(true);
            } else {
                setIsSidebarOpen(true);
                setIsMobile(false);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Set your admin password here
        if (passwordInput === "admin123") {
            setIsAuthorized(true);
            sessionStorage.setItem("admin_auth", "true");
            setError(false);
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    const handleLogout = () => {
        setIsAuthorized(false);
        sessionStorage.removeItem("admin_auth");
    };

    if (!isAuthorized) {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#083D77]">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-400/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative w-full max-w-md p-4">
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden group">
                        {/* Status Badge */}
                        <div className="flex justify-center mb-8">
                            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:rotate-6 transition-transform duration-500">
                                <Image src="/logo_new.jpg" alt="Logo" width={48} height={48} />
                            </div>
                        </div>

                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Admin Gate</h2>
                            <p className="text-blue-100/60 text-sm font-medium uppercase tracking-widest">Restricted Access Area</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-blue-200 uppercase tracking-widest ml-1">Secure Password</label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        value={passwordInput}
                                        onChange={(e) => setPasswordInput(e.target.value)}
                                        placeholder="Enter password..."
                                        className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} focus:border-white/30 rounded-2xl px-6 py-4 text-white placeholder-white/20 focus:outline-none transition-all`}
                                        autoFocus
                                    />
                                    {error && (
                                        <div className="absolute -bottom-6 left-0 text-[10px] font-black text-red-400 uppercase tracking-widest animate-pulse">
                                            Access Denied - Invalid Token
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-[#083D77] font-black py-4 rounded-2xl shadow-xl hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                            >
                                Authenticate Access
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <Link href="/" className="text-blue-200/40 text-xs font-bold hover:text-white transition-colors">
                                Return to Public Site
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const menuItems = [
        { name: "Overview", icon: <LayoutDashboard />, href: "/admin" },
        { name: "Students", icon: <Users />, href: "/admin/students" },
        { name: "Offline Students", icon: <Users />, href: "/admin/offline-students" },
        { name: "Alumni Success", icon: <UserCheck />, href: "/admin/alumni" },
        { name: "Course Tracker", icon: <GraduationCap />, href: "/admin/courses" },
    ];

    const externalLinks = [
        { name: "AI Interviewer", icon: <Globe />, href: "https://ohg-ai-interviewer.vercel.app/admin" },
        { name: "Aptitude Tests", icon: <TrendingUp />, href: "https://ohg-aptitude-test.vercel.app/" },
    ];

    return (
        <div className="flex h-screen bg-[#F8FAFC]">
            {/* Sidebar Mobile Backdrop */}
            {isMobile && isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`${isSidebarOpen ? "w-64" : "w-20"
                    } bg-[#083D77] text-white transition-all duration-300 flex flex-col z-50 fixed lg:relative h-full ${isMobile && !isSidebarOpen ? "-translate-x-full" : "translate-x-0"
                    }`}
            >
                <Link href="/admin" className="p-6 flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-lg">
                        <Image src="/logo_new.jpg" alt="Logo" width={32} height={32} />
                    </div>
                    {isSidebarOpen && <span className="font-bold text-xl tracking-tight">OHG Admin</span>}
                </Link>

                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto hide-scrollbar">
                    {/* <div className="text-[10px] uppercase text-xl text-blue-300 mb-4 px-2 opacity-60">
                        Main Management
                    </div> */}
                    {menuItems.map((item) => {
                        const isActive = item.href === "/admin" 
                            ? (pathname === "/admin" || pathname === "/admin/") 
                            : (pathname === item.href || pathname.startsWith(item.href + "/"));
                        
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`group relative flex items-center gap-4 px-3 py-3 rounded-2xl transition-all duration-500 ${isActive
                                    ? "bg-white/10 text-white shadow-xl shadow-black/10 translate-x-1.5"
                                    : "text-blue-100 hover:bg-white/10 hover:text-white hover:translate-x-1.5"
                                    }`}
                            >
                                {/* Premium Glass Active Marker */}
                                {isActive && (
                                    <div className="absolute left-0 w-1.5 h-8 bg-white rounded-full -translate-x-[6px] shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                                )}
                                
                                <div className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-500 ${isActive 
                                    ? "bg-white text-[#083D77] scale-105 shadow-xl shadow-black/20 rotate-0" 
                                    : "bg-white/5 text-blue-200 group-hover:scale-105 group-hover:text-white group-hover:bg-white/20 group-hover:rotate-6"} [&>svg]:w-5 [&>svg]:h-5`}>
                                    {item.icon}
                                </div>
                                {isSidebarOpen && (
                                    <span className={`text-lg transition-all duration-500 ${isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"}`}>
                                        {item.name}
                                    </span>
                                )}
                            </Link>
                        );
                    })}

                    {/* <div className="pt-8 text-[10px] uppercase text-blue-300 mb-4 px-2">
                        External Dashboards
                    </div> */}
                    {externalLinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            className="flex items-center gap-4 px-3 py-3 rounded-xl text-blue-100 hover:bg-white/10 hover:text-white transition-all"
                        >
                            <span className="w-6 h-6">{item.icon}</span>
                            {isSidebarOpen && <span className="text-xl">{item.name}</span>}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 mt-auto border-t border-white/10 flex justify-center">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-4 px-4 py-3 w-[90%] mx-auto rounded-2xl bg-red-500/90 text-white shadow-lg shadow-red-900/20 hover:bg-red-600 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/20 shrink-0">
                            <LogOut className="w-5 h-5 text-white" />
                        </div>
                        {isSidebarOpen && <span className="font-black text-sm uppercase tracking-wide">Sign Out</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden relative">
                {/* Mobile Sidebar Toggle (Visible only on mobile when sidebar is closed) */}
                {isMobile && !isSidebarOpen && (
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="fixed top-4 left-4 z-50 p-3 bg-[#083D77] text-white rounded-xl shadow-lg shadow-blue-900/20"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                )}

                {/* Dynamic Page Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8 relative">
                    {children}
                </main>
            </div>
        </div>
    );
}
