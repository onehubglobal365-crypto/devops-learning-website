'use client';

import { useRouter, usePathname } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function GlobalBackButton() {
    const router = useRouter();
    const pathname = usePathname();

    // Hide on home page, signup page, and login page
    if (pathname === '/' || pathname.startsWith('/signup') || pathname.startsWith('/login')) return null;

    return (
        <button
            onClick={() => router.back()}
            className="fixed top-24 right-6 z-[100] px-4 py-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 text-gray-700 font-medium transition-all duration-300 flex items-center gap-2 group"
            aria-label="Go back"
        >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
        </button>
    );
}
