'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Camera, Save, User, Phone, Lock, Upload } from 'lucide-react';
import Image from 'next/image';

interface UserProfile {
    username: string; // Used for default avatar if no photo
    nickname: string;
    mobile: string;
    photo: string | null; // Base64 string
}

interface ProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    onUpdate: (profile: UserProfile) => void;
    initialProfile: UserProfile;
}

export default function ProfileModal({ isOpen, onClose, onUpdate, initialProfile }: ProfileModalProps) {
    const [profile, setProfile] = useState<UserProfile>(initialProfile);
    const [password, setPassword] = useState({ current: '', new: '', confirm: '' });
    const [activeTab, setActiveTab] = useState<'details' | 'password'>('details');
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setProfile(initialProfile);
    }, [initialProfile, isOpen]);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile(prev => ({ ...prev, photo: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        // In a real app, you would validate and send API request here
        onUpdate(profile);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100005] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200 scrollbar-hide">

                {/* Header */}
                <div className="bg-[#083D77] p-4 text-white flex justify-between items-center sticky top-0 z-10">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <User className="w-5 h-5" /> User Dashboard
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-6">
                    {/* Avatar Section */}
                    <div className="flex flex-col items-center mb-8 -mt-6">
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center text-4xl font-bold text-[#083D77]">
                                {profile.photo ? (
                                    <Image src={profile.photo} alt="Profile" width={96} height={96} className="w-full h-full object-cover" />
                                ) : (
                                    profile.nickname ? profile.nickname[0].toUpperCase() : (profile.username ? profile.username[0].toUpperCase() : 'U')
                                )}
                            </div>
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
                                title="Upload Photo"
                            >
                                <Camera className="w-4 h-4" />
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handlePhotoUpload}
                                accept="image/*"
                                className="hidden"
                            />
                        </div>
                        <p className="mt-2 font-bold text-gray-800 text-lg">{profile.nickname || profile.username || 'User'}</p>
                    </div>

                    {/* Tabs */}
                    <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
                        <button
                            onClick={() => setActiveTab('details')}
                            className={`flex-1 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'details' ? 'bg-white shadow text-[#083D77]' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Profile Details
                        </button>
                        <button
                            onClick={() => setActiveTab('password')}
                            className={`flex-1 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'password' ? 'bg-white shadow text-[#083D77]' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Security
                        </button>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                        {activeTab === 'details' ? (
                            <>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                        <User className="w-4 h-4" /> Nickname
                                    </label>
                                    <input
                                        type="text"
                                        value={profile.nickname}
                                        onChange={(e) => setProfile({ ...profile, nickname: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#083D77] focus:ring-2 focus:ring-[#083D77]/20 outline-none transition-all"
                                        placeholder="Enter your nickname"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                        <Phone className="w-4 h-4" /> Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        value={profile.mobile}
                                        onChange={(e) => setProfile({ ...profile, mobile: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#083D77] focus:ring-2 focus:ring-[#083D77]/20 outline-none transition-all"
                                        placeholder="+91"
                                    />
                                </div>
                            </>
                        ) : (
                            <div className="space-y-4">
                                <div className="p-4 bg-yellow-50 text-yellow-800 rounded-lg text-sm border border-yellow-100">
                                    Use this section to update your password securely.
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Current Password</label>
                                    <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="••••••••" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">New Password</label>
                                    <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="••••••••" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Confirm Password</label>
                                    <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="••••••••" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="mt-8">
                        <button
                            onClick={handleSave}
                            className="w-full py-3.5 bg-gradient-to-r from-[#083D77] to-sky-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                        >
                            <Save className="w-5 h-5" /> Save Changes
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
