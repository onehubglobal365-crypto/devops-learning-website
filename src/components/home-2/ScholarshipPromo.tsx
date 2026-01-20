"use client";
import { useState } from 'react';
import { X } from 'lucide-react';

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
                    className="neobrutal-card block hover:scale-105 transition-transform duration-200"
                >
                    <div className="pricing-block-content">
                        <p className="pricing-plan">Scholarship Test</p>
                        <div className="price-value text-3xl">
                            100%
                        </div>
                        <p className="pricing-note text-sm font-bold opacity-90">
                            Fee Waiver
                        </p>

                        <div className="check-list mt-2">
                            <div className="check-list-item font-semibold text-sm">
                                <span className="text-black">Take the test and win a scholarship for DevOps courses.</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
