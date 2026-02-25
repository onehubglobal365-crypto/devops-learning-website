'use client';

import { useState, useEffect, useRef } from 'react';
import { LogOut, User, Settings, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface UserProfile {
    username: string;
    nickname: string;
    mobile: string;
    photo: string | null;
}

export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [profile, setProfile] = useState<UserProfile>({
        username: 'DemoUser',
        nickname: '',
        mobile: '',
        photo: null
    });

    const dropdownRef = useRef<HTMLDivElement>(null);

    // Load profile from localStorage on mount
    useEffect(() => {
        const savedProfile = localStorage.getItem('userProfile');
        if (savedProfile) {
            setProfile(JSON.parse(savedProfile));
        } else {
            const savedUser = localStorage.getItem('user');
            if (savedUser) {
                try {
                    const user = JSON.parse(savedUser);
                    if (user && user.name) {
                        setProfile(prev => ({
                            ...prev,
                            username: user.name,
                            nickname: user.name
                        }));
                    }
                } catch (e) {
                    console.error('Error parsing user data:', e);
                }
            }
        }
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = async () => {
        try {
            const savedUser = localStorage.getItem('user');
            if (savedUser) {
                const user = JSON.parse(savedUser);
                await fetch('/api/auth/logout', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userId: user.id || user._id })
                });
            }
        } catch (error) {
            console.error('Logout tracking error:', error);
        }

        // Remove all auth related items
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');

        // Notify other components
        window.dispatchEvent(new Event('auth-change'));

        // Reload to clear any application state
        window.location.reload();
    };

    // Determine avatar to show
    const avatarSrc = profile.photo;
    const initial = profile.nickname ? profile.nickname[0].toUpperCase() : (profile.username ? profile.username[0].toUpperCase() : 'U');

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 p-1 pl-2 pr-3 rounded-full hover:bg-gray-100 transition-all border border-transparent hover:border-gray-200"
            >
                <div className="w-8 h-8 rounded-full bg-[#083D77] text-white flex items-center justify-center font-bold shadow-md overflow-hidden">
                    {avatarSrc ? (
                        <Image src={avatarSrc} alt="Profile" width={32} height={32} className="w-full h-full object-cover" />
                    ) : (
                        <span>{initial}</span>
                    )}
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-[100003] animate-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-3 border-b border-gray-100 mb-1">
                        <p className="font-bold text-gray-900 truncate">{profile.nickname || profile.username || 'User'}</p>
                        <p className="text-xs text-gray-500">View Profile</p>
                    </div>

                    <Link
                        href="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors"
                    >
                        <User className="w-4 h-4 text-blue-500" /> Dashboard & Profile
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-red-50 text-red-600 font-medium transition-colors mt-1"
                    >
                        <LogOut className="w-4 h-4" /> Log Out
                    </button>
                </div>
            )}
        </div>
    );
}
