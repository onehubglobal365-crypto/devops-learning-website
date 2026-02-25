'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { AUTH_SYSTEM_AVAILABLE } from '@/config/authStatus';
import { Cloud, Code2, Database, Layout, Server, BarChart3, Brain, Terminal, Shield, Globe, Cpu, Coffee, Briefcase, Activity, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import LoginPromptModal from '@/components/auth/LoginPromptModal';

import Image from 'next/image';

const slides = [
    {
        id: 1,
        title: 'DevOps',
        subtitle: '< AWS, Azure & GCP',
        description: 'Master DevOps across all major cloud platforms. Learn Docker, Kubernetes, CI/CD pipelines, and infrastructure automation with real-world projects.',
        buttonText: 'Learn DevOps',
        buttonLink: '/roadmap?courseId=devops',
        icon: <div className="w-16 h-16 relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg" alt="DevOps" fill className="object-contain" unoptimized /></div>,
        color: '#1e3a8a', // blue-900 (Deep Blue)
        gradient: 'from-blue-600 to-indigo-700',
        roadmap: [
            { time: 'Week 1-2', title: 'Linux & Scripting', description: 'Shell scripting, file systems, permissions' },
            { time: 'Week 3-4', title: 'Version Control', description: 'Git, GitHub, collaboration workflows' },
            { time: 'Week 5-6', title: 'Containerization', description: 'Docker, images, containers, networking' },
            { time: 'Week 7-9', title: 'Orchestration', description: 'Kubernetes architecture, pods, services, deployments' },
            { time: 'Week 10-12', title: 'CI/CD & Cloud', description: 'Jenkins, GitHub Actions, AWS/Azure basics' }
        ]
    },
    {
        id: 2,
        title: 'Python Full Stack',
        subtitle: '< Build Modern Web Apps',
        description: 'Master Python full stack development with Django, Flask, React, and modern frameworks. Build complete web applications from database to UI.',
        buttonText: 'Explore Python',
        buttonLink: '/roadmap?courseId=python-fullstack',
        icon: <div className="w-16 h-16 relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" fill className="object-contain" unoptimized /></div>,
        color: '#15803d', // green-700 (Forest Green)
        gradient: 'from-emerald-600 to-teal-700',
        roadmap: [
            { time: 'Week 1-2', title: 'Python Basics', description: 'Syntax, data structures, OOP' },
            { time: 'Week 3-4', title: 'Backend Frameworks', description: 'Django/Flask setup, routing, models' },
            { time: 'Week 5-6', title: 'Database Integration', description: 'SQL, ORM, migrations' },
            { time: 'Week 7-9', title: 'Frontend with React', description: 'Components, hooks, state management' },
            { time: 'Week 10-12', title: 'Full Stack Project', description: 'Integration, deployment, optimization' }
        ]
    },
    {
        id: 3,
        title: 'Java Full Stack',
        subtitle: '< Enterprise Development',
        description: 'Master Java full stack development from frontend to backend. Learn Spring Boot, React, microservices, and build scalable enterprise applications.',
        buttonText: 'Learn Java',
        buttonLink: '/roadmap?courseId=java-fullstack',
        icon: <div className="w-16 h-16 relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" fill className="object-contain" unoptimized /></div>,
        color: '#c2410c', // orange-700 (Burnt Orange)
        gradient: 'from-orange-600 to-red-700',
        roadmap: [
            { time: 'Week 1-2', title: 'Java Core', description: 'Syntax, OOP, Collections, Multithreading' },
            { time: 'Week 3-4', title: 'Spring Framework', description: 'Spring Core, Dependency Injection, MVC' },
            { time: 'Week 5-6', title: 'Database & Hibernate', description: 'JPA, Hibernate, SQL Connections' },
            { time: 'Week 7-9', title: 'Microservices', description: 'Spring Boot, REST APIs, Microservices Architecture' },
            { time: 'Week 10-12', title: 'Integration & Deployment', description: 'React Frontend Integration, Docker, CI/CD' }
        ]
    },
    {
        id: 4,
        title: 'Web Development',
        subtitle: '< Create Stunning Websites',
        description: 'Build modern, responsive web applications with React, Node.js, and cutting-edge technologies. From frontend to full-stack development.',
        buttonText: 'Start Web Dev',
        buttonLink: '/roadmap?courseId=web-dev',
        icon: <div className="w-16 h-16 relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Web Dev" fill className="object-contain" unoptimized /></div>,
        color: '#6d28d9', // violet-700 (Deep Violet)
        gradient: 'from-purple-600 to-pink-700',
        roadmap: [
            { time: 'Week 1-2', title: 'HTML & CSS', description: 'Semantic HTML, CSS layouts, Flexbox, Grid' },
            { time: 'Week 3-4', title: 'JavaScript', description: 'ES6+, DOM manipulation, Async/Await' },
            { time: 'Week 5-6', title: 'React Fundamentals', description: 'Components, Props, State, Hooks' },
            { time: 'Week 7-9', title: 'Advanced React', description: 'Context API, Redux/Zustand, React Query' },
            { time: 'Week 10-12', title: 'Full Project', description: 'Next.js basics, deploying to Vercel' }
        ]
    },
    {
        id: 5,
        title: 'SQL & Databases',
        subtitle: '< SQL & NoSQL Mastery',
        description: 'Master database design, optimization, and management. Learn SQL, NoSQL databases, data modeling, and advanced querying techniques.',
        buttonText: 'Explore Databases',
        buttonLink: '/roadmap?courseId=sql',
        icon: <div className="w-16 h-16 relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" fill className="object-contain" unoptimized /></div>,
        color: '#0e7490', // cyan-700 (Teal-ish Cyan)
        gradient: 'from-blue-600 to-cyan-700',
        roadmap: [
            { time: 'Week 1-2', title: 'Foundations', description: 'Relational model, ER Diagrams, Basic SQL' },
            { time: 'Week 3-4', title: 'Advanced SQL', description: 'Joins, Subqueries, Stored Procedures' },
            { time: 'Week 5-6', title: 'Database Design', description: 'Normalization, Indexing, Performance' },
            { time: 'Week 7-9', title: 'NoSQL Databases', description: 'MongoDB, Redis, Cassandra concepts' },
            { time: 'Week 10-12', title: 'Capstone Project', description: 'Designing a complex schema, Optimization' }
        ]
    },
    {
        id: 6,
        title: 'Data Engineering',
        subtitle: '< Any Cloud Platform',
        description: 'Become a data engineering expert across cloud platforms. Master data pipelines, ETL processes, data warehousing, and big data technologies.',
        buttonText: 'Start Learning',
        buttonLink: '/roadmap?courseId=data-engineering',
        icon: <div className="w-16 h-16 relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" alt="Data Engineering" fill className="object-contain" unoptimized /></div>,
        color: '#be185d', // pink-700 (Raspberry)
        gradient: 'from-fuchsia-600 to-purple-700',
        roadmap: [
            { time: 'Week 1-2', title: 'Python for Data', description: 'Pandas, NumPy basics' },
            { time: 'Week 3-4', title: 'SQL & Warehousing', description: 'Advanced SQL, Data Warehousing concepts' },
            { time: 'Week 5-6', title: 'ETL Pipelines', description: 'Apache Airflow, Building pipelines' },
            { time: 'Week 7-9', title: 'Big Data Frameworks', description: 'Spark, Hadoop ecosystems' },
            { time: 'Week 10-12', title: 'Cloud Data Engineering', description: 'AWS/GCP/Azure Data services' }
        ]
    },
    {
        id: 7,
        title: 'Data Science',
        subtitle: '< Analytics & ML',
        description: 'Master data science and analytics. Learn machine learning, data analysis, visualization, and build data-driven applications.',
        buttonText: 'Explore Data Science',
        buttonLink: '/roadmap?courseId=data-science',
        icon: <div className="w-16 h-16 relative"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Data Science" fill className="object-contain" unoptimized /></div>,
        color: '#4338ca', // indigo-700
        gradient: 'from-indigo-600 to-violet-700',
        roadmap: [
            { time: 'Week 1-2', title: 'Statistics & Math', description: 'Probability, Linear Algebra, stats' },
            { time: 'Week 3-4', title: 'Data Analysis', description: 'Pandas, Matplotlib, Seaborn' },
            { time: 'Week 5-6', title: 'Machine Learning I', description: 'Regression, Classification, Scikit-Learn' },
            { time: 'Week 7-9', title: 'Machine Learning II', description: 'Clustering, PCA, Model deployment' },
            { time: 'Week 10-12', title: 'Real-world Project', description: 'End-to-end DS pipeline' }
        ]
    },
    {
        id: 8,
        title: 'AI & Deep Learning',
        subtitle: '< Future of Tech',
        description: 'Dive deep into artificial intelligence. Learn neural networks, deep learning, natural language processing, computer vision, and build AI solutions.',
        buttonText: 'Learn AI',
        buttonLink: '/roadmap?courseId=artificial-intelligence',
        icon: <Brain className="w-12 h-12 text-teal-600" />,
        color: '#0f766e', // teal-700
        gradient: 'from-cyan-600 to-blue-700',
        roadmap: [
            { time: 'Week 1-2', title: 'Neural Networks', description: 'Perceptrons, Feedforward, Backprop' },
            { time: 'Week 3-4', title: 'Deep Learning', description: 'TensorFlow/PyTorch, CNNs' },
            { time: 'Week 5-6', title: 'NLP', description: 'Transformers, Embeddings, LLMs' },
            { time: 'Week 7-9', title: 'Computer Vision', description: 'Object Detection, Segmentation' },
            { time: 'Week 10-12', title: 'AI Capstone', description: 'Building a generative AI app' }
        ]
    },
    {
        id: 9,
        title: 'SAP',
        subtitle: '< Enterprise Solutions',
        description: 'Master SAP systems and enterprise resource planning. Learn SAP modules, implementation, configuration, and become a certified SAP professional.',
        buttonText: 'Explore SAP',
        buttonLink: '/roadmap?courseId=sap',
        icon: <Briefcase className="w-12 h-12 text-blue-900" />,
        color: '#0f172a', // slate-900 (Midnight)
        gradient: 'from-yellow-600 to-amber-700',
        roadmap: [
            { time: 'Week 1-2', title: 'SAP Overview', description: 'ERP basics, SAP navigation' },
            { time: 'Week 3-4', title: 'Core Modules I', description: 'FICO (Finance & Controlling)' },
            { time: 'Week 5-6', title: 'Core Modules II', description: 'MM (Materials) & SD (Sales)' },
            { time: 'Week 7-9', title: 'ABAP Basics', description: 'Introduction to SAP programming' },
            { time: 'Week 10-12', title: 'Implementation', description: 'Project lifecycle, configuration' }
        ]
    },
    {
        id: 10,
        title: 'Microsoft Fabric',
        subtitle: '< Unified Analytics',
        description: 'Master Microsoft Fabric for modern analytics. Learn data integration, warehousing, real-time analytics, and build comprehensive data solutions.',
        buttonText: 'Start Learning',
        buttonLink: '/roadmap?courseId=microsoft-fabric',
        icon: <Activity className="w-12 h-12 text-slate-600" />,
        color: '#334155', // slate-700 (Corporate Gray)
        gradient: 'from-sky-600 to-blue-700',
        roadmap: [
            { time: 'Week 1-2', title: 'Fabric Overview', description: 'OneLake, Fabric Environment' },
            { time: 'Week 3-4', title: 'Data Factory', description: 'Dataflows Gen2, Pipelines' },
            { time: 'Week 5-6', title: 'Synapse Data Engineering', description: 'Notebooks, Spark usage' },
            { time: 'Week 7-9', title: 'Power BI Integration', description: 'DirectLake, Semantic Models' },
            { time: 'Week 10-12', title: 'End-to-End Solution', description: 'Real-time analytics project' }
        ]
    },
    {
        id: 11,
        title: 'Medical Coding',
        subtitle: '< Healthcare Docs',
        description: 'Master medical coding and billing. Learn ICD-10, CPT codes, healthcare documentation, and become a certified medical coding professional.',
        buttonText: 'Learn Med Coding',
        buttonLink: '/roadmap?courseId=medical-coding',
        icon: <div className="w-16 h-16 relative"><Image src="/medical-coding-logo-v2.jpg" alt="Medical Coding" fill className="object-contain rounded-xl" unoptimized /></div>,
        color: '#b91c1c', // red-700
        gradient: 'from-red-600 to-rose-700',
        roadmap: [
            { time: 'Week 1-2', title: 'Healthcare Basics', description: 'Medical Terminology, Anatomy' },
            { time: 'Week 3-4', title: 'ICD-10-CM', description: 'Diagnosis coding guidelines' },
            { time: 'Week 5-6', title: 'CPT Coding', description: 'Procedures, services, modifiers' },
            { time: 'Week 7-9', title: 'HCPCS & Billing', description: 'Supplies, services, reimbursement' },
            { time: 'Week 10-12', title: 'Certification Prep', description: 'Mock exams, case studies' }
        ]
    },
];

export default function UniqueHero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [showRoadmap, setShowRoadmap] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [pendingUrl, setPendingUrl] = useState('');
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
            if (!isPaused && !showRoadmap) {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }
        }, 6000);
    };

    useEffect(() => {
        startAutoPlay();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPaused, showRoadmap]);

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

    const router = useRouter();
    // ... (rest of states)

    // ... (existing helper functions)

    const handleAction = (e: React.MouseEvent | React.TouchEvent, link: string) => {
        e.preventDefault();

        // Authentication Paused Check
        if (!AUTH_SYSTEM_AVAILABLE) {
            router.push(link);
            return;
        }

        /* Original Authentication logic - Paused
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        const loggedInFlag = typeof window !== 'undefined' ? localStorage.getItem('isLoggedIn') : null;

        const hasToken = token && token !== 'null' && token !== 'undefined';
        const hasFlag = loggedInFlag === 'true';

        const isLoggedIn = hasToken || hasFlag;

        if (!isLoggedIn) {
            setPendingUrl(link);
            setShowLoginModal(true);
            return;
        }
        */

        router.push(link);
    };

    const viewRoadmap = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsPaused(true);
        setShowRoadmap(true);
    }

    const currentData = slides[currentSlide];

    return (
        <div
            className="relative w-full min-h-[650px] md:min-h-[550px] md:h-[600px] overflow-hidden flex items-center justify-center font-sans transition-colors duration-700 ease-in-out rounded-br-[60px] md:rounded-br-[220px] pb-12 md:pb-0"
            style={{ backgroundColor: currentData.color }}
        >
            <style>{`
                @keyframes heroShine {
                    0% { transform: translateX(-200%) skewX(-25deg); }
                    100% { transform: translateX(400%) skewX(-25deg); }
                }
                .hero-shine-element {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 40%;
                    height: 100%;
                    background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
                    animation: heroShine 5s infinite linear;
                    z-index: 1;
                    pointer-events: none;
                }
            `}</style>

            {/* Dynamic Background - Clean Solid Color */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* No patterns or gradients as per request */}
            </div>
            {/* Full Screen Mirror Shine Effect */}
            <div className="hero-shine-element"></div>

            <div className={`container mx-auto px-6 md:px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-12 transition-all duration-500 pt-24 md:pt-0 ${showRoadmap ? 'blur-sm scale-95 opacity-50' : ''}`}>

                {/* Left Content - Text */}
                <div className="w-full md:flex-1 text-left space-y-4 md:pl-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="flex items-center gap-2 mb-4">

                                {/* Removed Featured Course Label */}
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-2 tracking-tight">
                                {currentData.title}
                            </h1>

                            <p className="text-lg md:text-xl text-white/90 font-light mb-6 max-w-lg border-l-4 border-white pl-4">
                                {currentData.subtitle.replace('< ', '')}
                            </p>

                            <p className="text-white/80 text-base max-w-xl leading-relaxed mb-6">
                                {currentData.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={(e) => handleAction(e, currentData.buttonLink)}
                                    className="group relative px-8 py-3 bg-white text-gray-900 font-bold rounded-lg overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] active:scale-95"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {currentData.buttonText}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    {/* Mirror Shine Effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-20deg]"></div>
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
                    className="flex-1 w-full max-w-sm perspective-1000 relative flex flex-col items-center justify-center py-4 md:mt-20"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={viewRoadmap}
                    style={{ cursor: 'pointer' }}
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
                                        <div className="text-white/70 text-sm font-mono">Level</div>
                                        <div className="text-white font-bold">Expert</div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                                        <div className="text-white/70 text-sm font-mono">Duration</div>
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


            {/* Slide Dots */}
            <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-12 md:left-12 flex space-x-2 z-20 transition-opacity duration-300 ${showRoadmap ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentSlide(index);
                            setIsPaused(true);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-blue-500' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Roadmap Modal Overlay */}
            <AnimatePresence>
                {showRoadmap && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                            onClick={() => setShowRoadmap(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 max-h-[90%] overflow-hidden flex flex-col"
                        >
                            <button
                                onClick={() => setShowRoadmap(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                                    {currentData.icon}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">{currentData.title} Roadmap</h2>
                                    <p className="text-gray-400 text-sm">12-Week Comprehensive Journey</p>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-6 relative">
                                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700"></div>

                                {currentData.roadmap?.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-10"
                                    >
                                        <div className="absolute left-2.5 top-1.5 w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2 border-2 border-[#0f172a] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                        <span className="block text-xs font-mono text-blue-400 mb-1 uppercase tracking-wider">{step.time}</span>
                                        <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-8 pt-4 border-t border-white/10 flex justify-center">
                                <button
                                    onClick={(e) => handleAction(e, currentData.buttonLink)}
                                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center gap-2 transform hover:-translate-y-1"
                                >
                                    <span>Explore Full Course</span>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <LoginPromptModal
                isOpen={showLoginModal}
                onClose={() => setShowLoginModal(false)}
                targetUrl={pendingUrl}
            />
        </div>
    );
}
