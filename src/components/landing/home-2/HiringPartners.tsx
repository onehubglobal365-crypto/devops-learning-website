'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const logoFiles = [
    'Accenture-logo.png',
    'HCL-logo.png',
    'Infosys-Logo.png',
    'Wipro-logo.png',
    'acl digital-logo.jpg',
    'axtria.jpg',
    'baadalsoft.jpg',
    'birlasoft-logo.jpg',
    'capgemini.png',
    'coforge-logo.png',
    'cognizant.png',
    'collabera-logo.jpg',
    'contentrix-logo.png',
    'covalense global-logo.jpg',
    'deloitte-logo.png',
    'genpact-logo.png',
    'ibm-logo.png',
    'intex-logo.jpg',
    'l&t-logo.png',
    'letitbex ai-logo.jpg',
    'lti-logo.png',
    'mass mutual-logo.png',
    'persistent systems-logo.png',
    'pwc-logo.jpg',
    'tcs-logo.jpg',
    'ust global-logo.png',
    'virtusa-logo.png',
    'yash-tech-logo.jpg',
    'zettamine.jpg'
];

const logoPaths = logoFiles.map(file => `/companies logos/${file}`);

// Helper to chunk logos into rows
const logoRows = [
    logoPaths.slice(0, 8),
    logoPaths.slice(8, 15),
    logoPaths.slice(15, 23),
    logoPaths.slice(23),
];

export default function HiringPartners() {
    return (
        <section className="pt-0 pb-[var(--space-md)] lg:pt-0 lg:pb-[var(--space-xl)] overflow-hidden relative">
            <div className="w-full max-w-7xl mx-auto px-[var(--space-md)] lg:px-[var(--space-lg)]">
                <h2 className='font-bold text-black mb-4 md:mb-6 leading-tight text-center px-4' style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
                    Companies That Believe in Our Talent
                </h2>
                <div className="flex flex-col lg:flex-row items-center gap-[var(--space-lg)] lg:gap-[var(--space-xl)]">

                    {/* Left Side Image - Above on Mobile, Side by Side on Desktop */}
                    <div className="w-full lg:w-[30%] flex-shrink-0">
                        <div className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[2/3] rounded-2xl md:rounded-3xl overflow-hidden">
                            <Image
                                src="/hero section/Image Professinal.png"
                                alt="Professional Career Guidance"
                                fill
                                className="object-cover"
                                priority
                                unoptimized
                                sizes="(max-width: 1024px) 100vw, 30vw"
                            />
                        </div>
                    </div>

                    {/* Right Content - Scrolling Logos */}
                    <div className="w-full lg:w-[70%] relative">
                        <div className="flex flex-col gap-[var(--space-sm)] md:gap-[var(--space-md)]">
                            {logoRows.map((row, rowIndex) => (
                                <div key={rowIndex} className="relative flex overflow-hidden group">
                                    <motion.div
                                        className="flex gap-[var(--space-sm)] md:gap-[var(--space-md)] items-center flex-nowrap"
                                        animate={{
                                            x: rowIndex % 2 === 0 ? [0, -1500] : [-1500, 0]
                                        }}
                                        transition={{
                                            duration: 50 + rowIndex * 10,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    >
                                        {/* Triple the row for seamless loop */}
                                        {[...row, ...row, ...row].map((logo, index) => (
                                            <div
                                                key={`${rowIndex}-${index}`}
                                                className="flex-shrink-0 w-[clamp(120px,25vw,170px)] h-[clamp(74px,12vh,96px)] bg-white rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 overflow-hidden"
                                            >
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={logo}
                                                        alt="Company Logo"
                                                        fill
                                                        className="object-contain p-[var(--space-xs)]"
                                                        unoptimized
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
