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
        { name: "Alumni Success", icon: <UserCheck />, href: "/admin/alumni" },
        { name: "Course Tracker", icon: <GraduationCap />, href: "/admin/courses" },
        { name: "Job Board", icon: <Briefcase />, href: "/admin/jobs" },
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
                <div className="p-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0">
                        <Image src="/logo_new.jpg" alt="Logo" width={32} height={32} />
                    </div>
                    {isSidebarOpen && <span className="font-bold text-xl tracking-tight">OHG Admin</span>}
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                    <div className="text-[10px] uppercase tracking-wider text-blue-300 font-bold mb-4 px-2">
                        Main Management
                    </div>
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all ${pathname === item.href
                                ? "bg-white/20 text-white shadow-lg shadow-black/10"
                                : "text-blue-100 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            <span className="w-6 h-6">{item.icon}</span>
                            {isSidebarOpen && <span className="font-medium">{item.name}</span>}
                        </Link>
                    ))}

                    <div className="pt-8 text-[10px] uppercase tracking-wider text-blue-300 font-bold mb-4 px-2">
                        External Dashboards
                    </div>
                    {externalLinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            className="flex items-center gap-4 px-3 py-3 rounded-xl text-blue-100 hover:bg-white/10 hover:text-white transition-all"
                        >
                            <span className="w-6 h-6">{item.icon}</span>
                            {isSidebarOpen && <span className="font-medium">{item.name}</span>}
                            {isSidebarOpen && <ChevronRight className="w-4 h-4 ml-auto opacity-50" />}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-4 px-3 py-3 w-full rounded-xl text-red-300 hover:bg-red-500/10 hover:text-red-100 transition-all"
                    >
                        <LogOut className="w-6 h-6" />
                        {isSidebarOpen && <span className="font-medium">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Header */}
                <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 z-40">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                            {isSidebarOpen && isMobile ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
                        </button>
                        <div className="hidden lg:flex items-center bg-gray-100 rounded-xl px-4 py-2 w-full max-w-md">
                            <Search className="w-4 h-4 text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search students, courses..."
                                className="bg-transparent border-none focus:outline-none text-sm w-full"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 md:gap-6">
                        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-all">
                            <Bell className="w-6 h-6 text-gray-600" />
                            <span className="absolute top-1.5 right-2 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="w-px h-8 bg-gray-100"></div>
                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <div className="text-sm font-bold text-gray-900">Admin Panel</div>
                                <div className="text-xs text-green-500 font-bold">Main Website</div>
                            </div>
                            <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold shadow-inner">
                                AD
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dynamic Page Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8 relative">
                    {children}
                </main>
            </div>
        </div>
    );
}
