"use client";
import { useState } from 'react';
import { X, Star } from 'lucide-react';

export default function ScholarshipPromo() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-28 right-8 z-50 hover:-translate-y-1 transition-transform duration-300">
            <div className="relative group">
                {/* Cross mark at right-out-side */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsVisible(false);
                    }}
                    className="absolute -top-4 -right-4 bg-black text-white p-1.5 rounded-full hover:bg-red-500 transition-colors border-2 border-white shadow-lg cursor-pointer flex items-center justify-center z-50"

                    aria-label="Close"
                >
                    <X size={16} />
                </button>

                <a
                    href="https://ohg-aptitude-test.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                >
                    <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-blue-100 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] group-hover:border-blue-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                                <Star className="w-5 h-5 fill-current" />
                            </div>
                            <p className="text-xl font-bold text-gray-900 tracking-tight">Aptitude Test</p>
                        </div>

                        <p className="text-gray-600 text-sm font-medium leading-relaxed mb-4">
                            Unlock your potential. Take our assessment and qualify for exclusive scholarships.
                        </p>

                        <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider">
                            <span>Take Test Now</span>
                            <div className="w-6 h-0.5 bg-blue-600 rounded-full transition-all duration-300 group-hover:w-10"></div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
