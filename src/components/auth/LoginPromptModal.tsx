'use client';

import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface LoginPromptModalProps {
    isOpen: boolean;
    onClose: () => void;
    targetUrl: string;
}

export default function LoginPromptModal({ isOpen, onClose, targetUrl }: LoginPromptModalProps) {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!isOpen || !mounted) return null;

    const handleLogin = () => {
        // Navigate to login with redirect
        // We use encodeURIComponent to ensure the URL is passed correctly
        const encodedUrl = encodeURIComponent(targetUrl);
        router.push(`/login?redirect=${encodedUrl}`);
    };

    return createPortal(
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-gray-100 dark:border-white/10 animate-in zoom-in-95 duration-300 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Access Restricted</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Please log in to access this course content. It only takes a moment!
                </p>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-5 py-2.5 rounded-xl text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleLogin}
                        className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Log In
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}
