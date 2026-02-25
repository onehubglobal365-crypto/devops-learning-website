"use client";
import { useState } from 'react';
import { X, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ScholarshipPromo() {
    const [isVisible, setIsVisible] = useState(true);
    const [isDragging, setIsDragging] = useState(false);

    if (!isVisible) return null;

    return (
        <motion.div
            drag
            dragMomentum={false}
            initial={{ scale: 0.75 }}
            animate={{ scale: 0.75 }}
            whileHover={{ scale: 0.8 }}
            whileDrag={{ scale: 0.85, cursor: "grabbing" }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => {
                setTimeout(() => setIsDragging(false), 100);
            }}
            className="fixed bottom-28 right-8 z-50 touch-none origin-bottom-right cursor-grab"
        >
            <div className="relative group">
                {/* Cross mark at right-out-side */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsVisible(false);
                    }}
                    onPointerDown={(e) => e.stopPropagation()}
                    className="absolute -top-4 -right-4 bg-black text-white p-1.5 rounded-full hover:bg-red-500 transition-colors border-2 border-white shadow-lg cursor-pointer flex items-center justify-center z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"

                    aria-label="Close"
                >
                    <X size={16} />
                </button>

                <a
                    href="https://ohg-aptitude-test.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative pointer-events-auto"
                    draggable="false"
                    onDragStart={(e) => e.preventDefault()}
                    onClick={(e) => {
                        if (isDragging) {
                            e.preventDefault();
                        }
                    }}
                >
                    <div className="loader-wrapper cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <div className="loader"></div>
                        <div className="flex flex-col items-center justify-center gap-0.5 relative z-10">
                            <div className="flex gap-0.5">
                                <span className="loader-letter">A</span>
                                <span className="loader-letter">P</span>
                                <span className="loader-letter">T</span>
                                <span className="loader-letter">I</span>
                                <span className="loader-letter">T</span>
                                <span className='loader-letter'>U</span>
                                <span className='loader-letter'>D</span>
                                <span className='loader-letter'>E</span>
                            </div>
                            <div className="flex gap-0.5">
                                <span className="loader-letter">T</span>
                                <span className="loader-letter">E</span>
                                <span className="loader-letter">S</span>
                                <span className="loader-letter">T</span>
                            </div>
                            <Star className="w-4 h-4 text-orange-400 mt-1 animate-pulse" fill="currentColor" />
                        </div>

                        {/* Tooltip hint */}
                        {/* <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#083D77] text-white text-[10px] font-black py-1.5 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-white/20 uppercase tracking-widest">
                            Aptitude Test
                        </div> */}
                    </div>
                </a>
            </div>
        </motion.div>
    );
}
