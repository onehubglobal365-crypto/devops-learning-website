'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { roadmaps } from '@/data/roadmaps';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
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
        if (!AUTH_SYSTEM_AVAILABLE) return;
        if (!user) return;

        const isAdmin = user.role === 'admin';
        const assignedCourseId = user.preferredCourse;

        if (!isAdmin && assignedCourseId !== courseId) {
            e.preventDefault();
        }
    };

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

            <div className="relative z-10 container mx-auto px-[var(--space-sm)] py-[var(--space-xl)] max-w-[var(--container-xl)]" ref={containerRef}>
                {/* Header */}
                <div className="mb-[var(--space-xl)] text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="pt-[calc(var(--space-xl)*2)] md:pt-[var(--space-xl)]"
                    >
                        <div className="inline-block mb-3 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 font-mono tracking-wider" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
                            CAREER PATH
                        </div>
                        <h1 className="font-black mb-6 text-[#083D77] tracking-tight leading-tight" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}>
                            {courseData.title}
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed font-light" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                            {courseData.description}
                        </p>
                    </motion.div>
                </div>


                {/* Hills / Winding Path Container */}
                <div className="relative pt-32 pb-20 min-h-[1000px]">
                    {/* Continuous Winding SVG Path with 3 Orbs */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none hidden md:block">
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                            {/* Static Slant Line Track */}
                            {courseData.roadmap.map((_, index) => {
                                const isLast = index === courseData.roadmap.length - 1;
                                const startX = (index % 2 === 0) ? "25%" : "75%";
                                const endX = isLast ? "50%" : ((index + 1) % 2 === 0) ? "25%" : "75%";

                                const startY = 150 + (index * 500);
                                const endY = isLast ? (startY + 600) : (150 + ((index + 1) * 500));

                                return (
                                    <line
                                        key={index}
                                        x1={startX} y1={startY}
                                        x2={endX} y2={endY}
                                        stroke="#e2e8f0"
                                        strokeWidth="1.5"
                                        strokeDasharray="6 6"
                                        opacity="0.3"
                                    />
                                );
                            })}

                            {/* 3 Flowing Energy Orbs in a Set */}
                            {(() => {
                                const xKeyframes: string[] = courseData.roadmap.map((_, i) => (i % 2 === 0 ? "25%" : "75%"));
                                const yKeyframes: number[] = courseData.roadmap.map((_, i) => 150 + (i * 500));

                                // Final destination node (reaching the button)
                                const lastStart = 150 + ((courseData.roadmap.length - 1) * 500);
                                xKeyframes.push("50%");
                                yKeyframes.push(lastStart + 600);

                                const totalDuration = courseData.roadmap.length * 2.5;

                                return [0, 1, 2, 3, 4].map((i) => (
                                    <motion.circle
                                        key={i}
                                        r="6"
                                        fill="#3b82f6"
                                        animate={{
                                            cx: xKeyframes,
                                            cy: yKeyframes,
                                            opacity: yKeyframes.map((_, idx) => (idx === yKeyframes.length - 1 ? 0 : 1))
                                        }}
                                        transition={{
                                            duration: totalDuration,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: i * 0.15, // Tight train with no gap
                                        }}
                                        style={{ filter: "drop-shadow(0 0 12px rgba(59,130,246,0.9))" }}
                                    />
                                ));
                            })()}
                        </svg>
                    </div>

                    <div className="relative md:space-y-[300px]">
                        {courseData.roadmap.map((step, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className="relative flex items-center justify-center w-full">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            scale: 1.05,
                                            y: -5
                                        }}
                                        className={`relative w-full max-w-md bg-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 group z-30
                                            ${isEven
                                                ? 'md:-translate-x-[45%] rounded-r-full rounded-l-3xl pl-8 pr-16'
                                                : 'md:translate-x-[45%] rounded-l-full rounded-r-3xl pr-8 pl-16'
                                            }
                                            py-10 border border-gray-100/80 backdrop-blur-md
                                        `}
                                    >
                                        {/* Badge Hooked to Edge */}
                                        <div className={`
                                            absolute -top-5 w-12 h-12 rounded-xl flex items-center justify-center text-3xl font-black text-white shadow-xl z-40 
                                            ${isEven ? 'left-6 bg-blue-600' : 'right-6 bg-purple-600'}
                                        `}>
                                            {index + 1}
                                        </div>

                                        {/* Time Pill */}
                                        <div className="inline-block mb-3 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black tracking-widest uppercase">
                                            {step.time}
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tight leading-tight">
                                            {step.title}
                                        </h3>

                                        <p className="text-gray-500 text-base md:text-lg leading-relaxed font-semibold">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Floating Section */}
                <div className="relative z-10 mt-32 mb-[var(--space-xl)] flex flex-col items-center justify-center text-center px-[var(--space-md)]">
                    <div className="relative group w-full max-w-sm">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                        <Link
                            href={courseData.buttonLink}
                            onClick={handleStartCourse}
                            className="relative w-full px-[var(--space-lg)] py-5 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-full transition-all flex items-center justify-center gap-4 border border-gray-200 shadow-xl"
                            style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}
                        >
                            <span>Start This Course</span>
                            <ArrowLeft className="w-6 h-6 rotate-180 transition-transform text-blue-600 group-hover:translate-x-1" />
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
