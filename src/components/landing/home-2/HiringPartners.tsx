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
        <section className="py-8 md:py-12 overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6">
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-8 md:mb-12 leading-tight text-center px-2'>
                    Companies That Believe in Our Talent
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">

                    {/* Left Side Image - Above on Mobile, Side by Side on Desktop */}
                    <div className="w-full md:w-[28%] flex-shrink-0">
                        <div className="relative aspect-[2/3] rounded-xl md:rounded-2xl overflow-hidden">
                            <Image
                                src="/hero section/Image Professinal.png"
                                alt="Professional Career Guidance"
                                fill
                                className="object-cover"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Right Content - Scrolling Logos */}
                    <div className="w-full md:w-[72%] relative">
                        <div className="flex flex-col gap-4 md:gap-6 py-4">
                            {logoRows.map((row, rowIndex) => (
                                <div key={rowIndex} className="relative flex overflow-hidden group">
                                    <motion.div
                                        className="flex gap-4 md:gap-6 items-center flex-nowrap"
                                        animate={{
                                            x: rowIndex % 2 === 0 ? [0, -1500] : [-1500, 0]
                                        }}
                                        transition={{
                                            duration: 40 + rowIndex * 10,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    >
                                        {/* Triple the row for seamless loop */}
                                        {[...row, ...row, ...row].map((logo, index) => (
                                            <div
                                                key={`${rowIndex}-${index}`}
                                                className="flex-shrink-0 w-32 h-20 md:w-44 md:h-24 bg-white rounded-xl md:rounded-2xl flex items-center justify-center p-0 transition-all duration-300 hover:scale-105 overflow-hidden"
                                            >
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={logo}
                                                        alt="Company Logo"
                                                        fill
                                                        className="object-contain p-3 md:p-4"
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
