'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { AUTH_SYSTEM_AVAILABLE } from '@/config/authStatus';
import { Cloud, Code2, Coffee, Layout, Database, Server, BarChart3, Brain, Briefcase, Activity, FileText } from 'lucide-react';
import Link from 'next/link';

const slides = [
    {
        id: 1,
        title: 'DevOps',
        subtitle: '< AWS, Azure & GCP',
        description: 'Master DevOps across all major cloud platforms. Learn Docker, Kubernetes, CI/CD pipelines, and infrastructure automation with real-world projects.',
        buttonText: 'Learn DevOps',
        buttonLink: '/devops',
        icon: <Cloud className="w-12 h-12 text-blue-400" />,
        color: '#3b82f6', // blue-500
        gradient: 'from-blue-600 to-indigo-700',
    },
    {
        id: 2,
        title: 'Python Full Stack',
        subtitle: '< Build Modern Web Apps',
        description: 'Master Python full stack development with Django, Flask, React, and modern frameworks. Build complete web applications from database to UI.',
        buttonText: 'Explore Python',
        buttonLink: '/tutorials/python-fullstack',
        icon: <Code2 className="w-12 h-12 text-emerald-400" />,
        color: '#10b981', // emerald-500
        gradient: 'from-emerald-600 to-teal-700',
    },
    {
        id: 3,
        title: 'Java Full Stack',
        subtitle: '< Enterprise Development',
        description: 'Master Java full stack development from frontend to backend. Learn Spring Boot, React, microservices, and build scalable enterprise applications.',
        buttonText: 'Learn Java',
        buttonLink: '/java',
        icon: <Coffee className="w-12 h-12 text-orange-400" />,
        color: '#16e2f9ff', // orange-500
        // gradient: 'from-orange-600 to-red-700',
        gradient: 'from-#16e2f9ff-500 to-white-500',
    },
    {
        id: 4,
        title: 'Web Development',
        subtitle: '< Create Stunning Websites',
        description: 'Build modern, responsive web applications with React, Node.js, and cutting-edge technologies. From frontend to full-stack development.',
        buttonText: 'Start Web Dev',
        buttonLink: '/web-dev',
        icon: <Layout className="w-12 h-12 text-purple-400" />,
        color: '#b6f755ff', // purple-500
        // gradient: 'from-purple-600 to-pink-700',
        gradient: 'from-#b6f755ff-500 to-white-500',
    },
    {
        id: 5,
        title: 'SQL & Databases',
        subtitle: '< SQL & NoSQL Mastery',
        description: 'Master database design, optimization, and management. Learn SQL, NoSQL databases, data modeling, and advanced querying techniques.',
        buttonText: 'Explore Databases',
        buttonLink: '/sql',
        icon: <Database className="w-12 h-12 text-blue-400" />,
        color: '#3b82f6', // blue-500
        gradient: 'from-blue-600 to-cyan-700',
    },
    {
        id: 6,
        title: 'Data Engineering',
        subtitle: '< Any Cloud Platform',
        description: 'Become a data engineering expert across cloud platforms. Master data pipelines, ETL processes, data warehousing, and big data technologies.',
        buttonText: 'Start Learning',
        buttonLink: '/tutorials/data-engineering',
        icon: <Server className="w-12 h-12 text-fuchsia-400" />,
        color: '#d946ef', // fuchsia-500
        gradient: 'from-fuchsia-600 to-purple-700',
    },
    {
        id: 7,
        title: 'Data Science',
        subtitle: '< Analytics & ML',
        description: 'Master data science and analytics. Learn machine learning, data analysis, visualization, and build data-driven applications.',
        buttonText: 'Explore Data Science',
        buttonLink: '/tutorials/data-science-ai',
        icon: <BarChart3 className="w-12 h-12 text-indigo-400" />,
        color: '#6366f1', // indigo-500
        gradient: 'from-indigo-600 to-violet-700',
    },
    {
        id: 8,
        title: 'AI & Deep Learning',
        subtitle: '< Future of Tech',
        description: 'Dive deep into artificial intelligence. Learn neural networks, deep learning, natural language processing, computer vision, and build AI solutions.',
        buttonText: 'Learn AI',
        buttonLink: '/tutorials/ai',
        icon: <Brain className="w-12 h-12 text-cyan-400" />,
        color: '#06b6d4', // cyan-500
        gradient: 'from-cyan-600 to-blue-700',
    },
    {
        id: 9,
        title: 'SAP',
        subtitle: '< Enterprise Solutions',
        description: 'Master SAP systems and enterprise resource planning. Learn SAP modules, implementation, configuration, and become a certified SAP professional.',
        buttonText: 'Explore SAP',
        buttonLink: '/tutorials/sap',
        icon: <Briefcase className="w-12 h-12 text-yellow-400" />,
        color: '#3b99f1ff', // yellow-500
        gradient: 'from-yellow-600 to-#3b99f1ff-500',
    },
    {
        id: 10,
        title: 'Microsoft Fabric',
        subtitle: '< Unified Analytics',
        description: 'Master Microsoft Fabric for modern analytics. Learn data integration, warehousing, real-time analytics, and build comprehensive data solutions.',
        buttonText: 'Start Learning',
        buttonLink: '/tutorials/microsoft-fabric',
        icon: <Activity className="w-12 h-12 text-sky-400" />,
        color: '#0ea5e9', // sky-500
        gradient: 'from-sky-600 to-blue-700',
    },
    {
        id: 11,
        title: 'Medical Coding',
        subtitle: '< Healthcare Docs',
        description: 'Master medical coding and billing. Learn ICD-10, CPT codes, healthcare documentation, and become a certified medical coding professional.',
        buttonText: 'Learn Med Coding',
        buttonLink: '/tutorials/medical-coding',
        icon: <FileText className="w-12 h-12 text-red-400" />,
        color: '#55ccf1ff', // red-500
        gradient: 'from-red-600 to-#55ccf1ff-700',
    },
];

export default function UniqueHero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Mouse Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    // Spotlight effect
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;

        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsPaused(false);
    };

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    // Autoplay Logic
    const startAutoPlay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            if (!isPaused) {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }
        }, 6000);
    };

    useEffect(() => {
        startAutoPlay();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPaused]);

    // Auth Logic
    const isValidToken = (): boolean => {
        if (typeof window === 'undefined') return false;
        const token = localStorage.getItem('token');
        if (!token || token.trim() === '' || token === 'null' || token === 'undefined') return false;
        try {
            const parts = token.split('.');
            if (parts.length !== 3) return false;
            const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
            const payload = JSON.parse(atob(base64));
            if (payload && payload.exp && typeof payload.exp === 'number') {
                const now = Math.floor(Date.now() / 1000);
                return now < payload.exp;
            }
            return true;
        } catch {
            return false;
        }
    };

    const handleAction = (e: React.MouseEvent | React.TouchEvent, link: string) => {
        e.preventDefault();
        e.stopPropagation();

        if (!AUTH_SYSTEM_AVAILABLE) {
            window.location.href = link;
            return;
        }

        const authed = isValidToken();
        if (!authed) {
            const redirectUrl = `/register?redirect=${encodeURIComponent(link)}`;
            window.location.replace(redirectUrl);
            return;
        }

        window.location.href = link;
    };

    const currentData = slides[currentSlide];

    return (
        <div
            className="relative w-full h-[500px] bg-[#030712] overflow-hidden flex items-center justify-center font-sans rounded-br-[220px]"
        >

            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className={`absolute inset-0 bg-gradient-to-br ${currentData.gradient} opacity-20 blur-3xl scale-150`}
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Content - Text */}
                <div className="flex-1 text-left space-y-4 md:pl-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="flex items-center gap-2 mb-4">

                                <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Featured Course</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-2 tracking-tight">
                                {currentData.title}
                            </h1>

                            <p className="text-lg md:text-xl text-gray-400 font-light mb-6 max-w-lg border-l-4 border-blue-500 pl-4">
                                {currentData.subtitle.replace('< ', '')}
                            </p>

                            <p className="text-gray-400 text-base max-w-xl leading-relaxed mb-6">
                                {currentData.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={(e) => handleAction(e, currentData.buttonLink)}
                                    className="group relative px-8 py-3 bg-white text-black font-bold rounded-lg overflow-hidden transition-transform active:scale-95"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {currentData.buttonText}
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                    <div className="absolute inset-0 bg-blue-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                </button>

                                <button
                                    onClick={(e) => handleAction(e, currentData.buttonLink)}
                                    className="px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Progress Bar */}
                    <div className="w-full max-w-md h-1 bg-white/10 rounded-full mt-10 relative overflow-hidden">
                        <motion.div
                            key={currentSlide}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 6, ease: "linear" }}
                            className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                        />
                    </div>
                </div>

                {/* Right Content - 3D Card */}
                <div
                    className="flex-1 w-full max-w-sm perspective-1000 relative flex flex-col items-center justify-center py-4"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div
                        style={{
                            rotateX: rotateX,
                            rotateY: rotateY,
                            transformStyle: "preserve-3d",
                        }}
                        className="relative w-full aspect-square rounded-3xl rounded-br-[100px] shadow-2xl p-5 flex flex-col justify-between overflow-hidden group"
                    >
                        {/* Floating Elements inside 3D Card */}
                        <div style={{ transform: "translateZ(50px)" }} className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
                                transition={{ duration: 0.5 }}
                                className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center space-y-6"
                            >
                                <div className="mb-3 bg-white rounded-full p-4 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                    {currentData.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white tracking-wider">
                                    {currentData.title}
                                </h3>

                                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

                                <div className="grid grid-cols-2 gap-4 w-full mt-8">
                                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                                        <div className="text-blue-400 text-sm font-mono">Level</div>
                                        <div className="text-white font-bold">Expert</div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                                        <div className="text-blue-400 text-sm font-mono">Duration</div>
                                        <div className="text-white font-bold">12 Weeks</div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Card Shine/Glass Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </motion.div>



                    {/* Background Decor */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[100px] -z-10 rounded-full"></div>
                </div>

            </div>


            {/* Navigation Buttons */}
            <div className="absolute bottom-8 left-8 flex space-x-2 z-20">
                <button
                    onClick={() => {
                        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
                        setIsPaused(true);
                    }}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                    onClick={() => {
                        setCurrentSlide((prev) => (prev + 1) % slides.length);
                        setIsPaused(true);
                    }}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    );
}
