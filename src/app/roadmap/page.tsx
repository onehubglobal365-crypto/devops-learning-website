'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { roadmaps } from '@/data/roadmaps';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';
import { useRef, Suspense, useState, useEffect } from 'react';
import { AUTH_SYSTEM_AVAILABLE } from '@/config/authStatus';

function RoadmapContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const courseId = searchParams.get('courseId');
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (e) {
                console.error('Error parsing user data:', e);
            }
        }
    }, []);

    const courseData = courseId ? roadmaps[courseId] : null;
    const containerRef = useRef<HTMLDivElement>(null);

    const handleStartCourse = (e: React.MouseEvent) => {
        // Authentication Paused Check
        if (!AUTH_SYSTEM_AVAILABLE) {
            return; // Allow access
        }

        if (!user) {
            // If not logged in, they can browse but maybe alert or redirect
            return;
        }

        const isAdmin = user.role === 'admin';
        const assignedCourseId = user.preferredCourse;

        if (!isAdmin && assignedCourseId !== courseId) {
            e.preventDefault();
            /* Original Alert - Paused for Guest Mode
            alert("⚠️ Restricted Access: You are not assigned to this course. Please contact administration for enrollment.");
            */
        }
    };

    // Scroll Progress for Timeline Line
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (!courseData) {
        return (
            <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 text-center"
                >
                    <h1 className="text-4xl font-bold mb-4 text-red-500">Course Not Found</h1>
                    <p className="text-gray-600 mb-8">The roadmap you are looking for does not exist.</p>
                    <Link href="/courses" className="px-8 py-3 bg-gray-100 border border-gray-200 rounded-full hover:bg-gray-200 transition-all font-medium text-gray-800">
                        Return to Courses
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden font-sans selection:bg-blue-200">
            {/* Static Vibrant Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[80%] rounded-full bg-gradient-to-bl from-violet-400 via-fuchsia-400 to-pink-400 opacity-25 blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-cyan-400 via-sky-400 to-blue-400 opacity-25 blur-[100px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8 md:py-16 max-w-6xl" ref={containerRef}>
                {/* Header */}
                <div className="mb-20 text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="pt-32 md:pt-24"
                    >
                        <div className="inline-block mb-3 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-mono tracking-wider">
                            CAREER PATH
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 text-[#083D77] tracking-tight">
                            {courseData.title}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
                            {courseData.description}
                        </p>
                    </motion.div>
                </div>

                {/* Hills / Winding Path Container */}
                <div className="relative pt-32 pb-20 min-h-[1000px]">
                    {/* Continuous Winding SVG Path */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none hidden md:block">
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
                                </linearGradient>
                            </defs>

                            {/* 
                                Actual Implementation:
                                We will draw a line connecting the center of each 'row'.
                                Row 0: Right side (75%). Row 1: Left side (25%).
                                We need to draw a curve from (50%, 0) -> (75%, 150) -> (25%, 450) -> ...
                            */}
                            {courseData.roadmap.map((_, index) => {
                                const isLast = index === courseData.roadmap.length - 1;

                                // Connect from current card center to next card center (or button if last)
                                // Card centers are at 25% (Left) and 75% (Right)

                                const startX = (index % 2 === 0) ? "25%" : "75%";
                                const endX = isLast ? "50%" : ((index + 1) % 2 === 0) ? "25%" : "75%";

                                // Vertical positions (approximate based on spacing)
                                // We want to connect the 'bottom' of one to 'top' of next.
                                // Card height ~300px? Spacing ~192px (space-y-48).
                                // Let's guess: Center-to-Center vertical dist is ~400px.

                                const startY = 150 + (index * 400);
                                const endY = isLast ? (startY + 220) : (150 + ((index + 1) * 400));

                                return (
                                    <g key={index}>
                                        {/* Direct Line */}
                                        {/* 1. Base Track (Static Rail) */}
                                        <line
                                            x1={startX}
                                            y1={startY}
                                            x2={endX}
                                            y2={endY}
                                            stroke="#e2e8f0" // Light gray rail
                                            strokeWidth="2"
                                            strokeDasharray="6 6"
                                        />

                                        {/* 2. Moving Energy Orb (Data Packet) */}
                                        <motion.circle
                                            r="6"
                                            fill={index % 2 === 0 ? "#3b82f6" : "#8b5cf6"} // Alternating Blue/Purple
                                            initial={{ cx: startX, cy: startY }}
                                            animate={{
                                                cx: [startX, endX], // Moves from Start to End
                                                cy: [startY, endY],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "linear",
                                                repeatDelay: 0.5
                                            }}
                                            style={{ filter: "drop-shadow(0 0 4px rgba(59,130,246,0.8))" }}
                                        />

                                        {/* 3. Secondary 'Echo' Particle (Faster, smaller) */}
                                        <motion.circle
                                            r="3"
                                            fill="#60a5fa"
                                            initial={{ cx: startX, cy: startY }}
                                            animate={{
                                                cx: [startX, endX],
                                                cy: [startY, endY],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "linear",
                                                delay: 0.2 // Slightly offset
                                            }}
                                            className="opacity-70"
                                        />

                                        {/* Terminal Node for the Last Item (Receiver) */}
                                        {isLast && (
                                            <g>
                                                <defs>
                                                    <radialGradient id="pulseGradient">
                                                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                                                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                                                    </radialGradient>
                                                </defs>
                                                {/* Pulsing Aura */}
                                                <motion.circle
                                                    cx={endX}
                                                    cy={endY}
                                                    r="12"
                                                    fill="url(#pulseGradient)"
                                                    animate={{ r: [12, 20, 12], opacity: [0.6, 0.2, 0.6] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                />
                                                {/* Solid Socket */}
                                                <circle
                                                    cx={endX}
                                                    cy={endY}
                                                    r="6"
                                                    fill="#0f172a"
                                                    stroke="#8b5cf6"
                                                    strokeWidth="2"
                                                />
                                            </g>
                                        )}

                                        {/* Animation dot moving along the line? Optional, but keeping it static per request */}
                                    </g>
                                );
                            })}
                        </svg>
                    </div>

                    <div className="relative space-y-48"> {/* Increased spacing for the hills effect */}
                        {courseData.roadmap.map((step, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`relative flex ${isEven ? 'justify-start md:ml-[5%]' : 'justify-end md:mr-[5%]'}`}
                                >
                                    {/* Card */}
                                    <div className="w-full md:w-[40%] relative z-10">

                                        <motion.div
                                            whileHover={{ y: -10 }}
                                            className={`group relative bg-white border border-gray-200 p-8 shadow-xl hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 ${isEven ? 'rounded-l-3xl rounded-r-full' : 'rounded-r-3xl rounded-l-full'}`}
                                        >
                                            {/* Hill Peak/Trough Dot - Centered on the path connection point */}
                                            <div className={`
                                                hidden md:block absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white shadow-md
                                                ${isEven ? 'left-1/2 -translate-x-1/2 -z-10 bg-blue-500 opacity-0' : 'left-1/2 -translate-x-1/2 -z-10 bg-purple-500 opacity-0'}
                                                // Actually we want the dot ON the path.
                                                // Even(Left) -> Path connects at Center of Card? No, path connects 25% to 75%.
                                                // So the dot should be at the center of the card horizontally.
                                            `}></div>


                                            {/* Only drawing explicit dots is complex without absolute positioning matching the SVG exactly. 
                                                Instead, let's make the card itself the "Node".
                                            */}

                                            {/* Step Number Badge */}
                                            <div className={`
                                                absolute -top-6 w-14 h-14 rounded-2xl rotate-3 flex items-center justify-center text-2xl font-black text-white shadow-lg z-20 border-4 border-gray-50
                                                ${isEven ? 'left-8 bg-blue-600' : 'right-8 bg-purple-600'}
                                            `}>
                                                {index + 1}
                                            </div>

                                            <div className="flex items-center justify-between mb-4">
                                                {/* (Ghost number removed) */}
                                                <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider ${isEven ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'}`}>
                                                    {step.time}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-bold text-gray-900 mb-2 relative z-10 transition-colors group-hover:text-blue-600">
                                                {step.title}
                                            </h3>

                                            <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                                                {step.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Floating Section */}
                <div
                    className="relative z-10 mt-32 mb-20 flex flex-col items-center justify-center text-center"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                        <Link
                            href={courseData.buttonLink}
                            onClick={handleStartCourse}
                            className="relative px-12 py-5 bg-white hover:bg-gray-50 text-gray-900 font-bold text-xl rounded-full transition-all flex items-center gap-4 border border-gray-200 shadow-xl"
                        >
                            <span>Start This Course</span>
                            <ArrowLeft className="w-6 h-6 rotate-180 group-hover:translate-x-1 transition-transform text-blue-600" />
                        </Link>
                    </div>
                    <p className="mt-8 text-gray-500 text-sm uppercase tracking-widest">Ready to begin your journey?</p>
                </div>
            </div>
        </div>
    );
}

export default function RoadmapPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50">Loading Roadmap...</div>}>
            <RoadmapContent />
        </Suspense>
    );
}
