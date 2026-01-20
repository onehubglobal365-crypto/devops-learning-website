'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { User, Phone, Save, Camera, Lock, X, FileText, Upload } from 'lucide-react';
import SharedNav from '@/components/shared-nav';

interface UserProfile {
    username: string;
    nickname: string;
    mobile: string;
    photo: string | null;
    resume?: string | null;
}

export default function DashboardPage() {
    const router = useRouter();
    const [profile, setProfile] = useState<UserProfile>({
        username: 'DemoUser',
        nickname: '',
        mobile: '',
        photo: null,
        resume: null
    });
    const [activeTab, setActiveTab] = useState<'details' | 'password'>('details');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        // Load profile from localStorage
        const savedProfile = localStorage.getItem('userProfile');
        if (savedProfile) {
            setProfile(JSON.parse(savedProfile));
        }
    }, []);

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newPhoto = reader.result as string;
                setProfile(prev => {
                    const updated = { ...prev, photo: newPhoto };
                    // Optionally save immediately
                    localStorage.setItem('userProfile', JSON.stringify(updated));
                    return updated;
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Simulate upload by saving filename
            setProfile(prev => ({ ...prev, resume: file.name }));
        }
    };

    const handleSave = () => {
        setIsSaving(true);
        localStorage.setItem('userProfile', JSON.stringify(profile));

        // Simulate API delay
        setTimeout(() => {
            setIsSaving(false);
            alert('Profile updated successfully!');
        }, 800);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
            <SharedNav hasGradientBlueNav hideThemeToggle={false} />

            <div className="container mx-auto px-4 pt-32 pb-12 flex-grow flex flex-col items-center">

                {/* Dashboard Card */}
                <div className="bg-white rounded-3xl shadow-xl w-full max-w-3xl overflow-hidden border border-gray-100 relative">

                    {/* Header Banner */}
                    <div className="bg-gradient-to-r from-[#083D77] to-cyan-600 p-8 md:p-12 text-white relative">
                        {/* Close Button */}
                        <button
                            onClick={() => router.back()}
                            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-30"
                            title="Close Dashboard"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="z-10 relative">
                            <h1 className="text-3xl md:text-4xl font-bold mb-2">My Dashboard</h1>
                            <p className="opacity-90 text-lg">Manage your personal information and account settings.</p>
                        </div>

                        {/* Decorative background element */}
                        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                            <User className="w-64 h-64 -mb-12 -mr-12" />
                        </div>

                        {/* Avatar */}
                        <div className="absolute -bottom-16 left-8 md:left-12 group z-20">
                            <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center text-4xl font-bold text-[#083D77]">
                                {profile.photo ? (
                                    <Image src={profile.photo} alt="Profile" width={128} height={128} className="w-full h-full object-cover" />
                                ) : (
                                    profile.nickname ? profile.nickname[0].toUpperCase() : (profile.username ? profile.username[0].toUpperCase() : 'U')
                                )}
                            </div>
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute bottom-0 right-0 bg-orange-500 text-white p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform hover:bg-orange-600"
                                title="Change Photo"
                            >
                                <Camera className="w-5 h-5" />
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handlePhotoUpload}
                                accept="image/*"
                                className="hidden"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="pt-20 px-8 md:px-12 pb-12">

                        {/* Name Display */}
                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{profile.nickname || profile.username || 'User'}</h2>
                            <span className="inline-block mt-1 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">Student Member</span>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
                            <button
                                onClick={() => setActiveTab('details')}
                                className={`px-6 py-3 font-bold text-sm transition-colors border-b-2 whitespace-nowrap ${activeTab === 'details' ? 'border-[#083D77] text-[#083D77]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                            >
                                Profile Details
                            </button>
                            <button
                                onClick={() => setActiveTab('password')}
                                className={`px-6 py-3 font-bold text-sm transition-colors border-b-2 whitespace-nowrap ${activeTab === 'password' ? 'border-[#083D77] text-[#083D77]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                            >
                                Security Settings
                            </button>
                        </div>

                        {/* Form */}
                        <div className="space-y-6 max-w-xl">
                            {activeTab === 'details' ? (
                                <>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                            <User className="w-4 h-4 text-blue-600" /> Display Name / Nickname
                                        </label>
                                        <input
                                            type="text"
                                            value={profile.nickname}
                                            onChange={(e) => setProfile({ ...profile, nickname: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#083D77] focus:ring-2 focus:ring-[#083D77]/20 outline-none transition-all bg-gray-50 focus:bg-white text-gray-900"
                                            placeholder="Enter your nickname"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-green-600" /> Mobile Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={profile.mobile}
                                            onChange={(e) => setProfile({ ...profile, mobile: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#083D77] focus:ring-2 focus:ring-[#083D77]/20 outline-none transition-all bg-gray-50 focus:bg-white text-gray-900"
                                            placeholder="+91"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                            <FileText className="w-4 h-4 text-orange-600" /> Resume / CV
                                        </label>
                                        <div className="flex items-center gap-4">
                                            {profile.resume ? (
                                                <div className="flex-1 px-4 py-3 bg-green-50 text-green-700 rounded-xl border border-green-200 flex items-center justify-between">
                                                    <span className="truncate flex items-center gap-2 font-medium"><FileText className="w-4 h-4" /> {profile.resume}</span>
                                                    <button onClick={() => setProfile({ ...profile, resume: null })} className="text-green-800 hover:text-green-950 p-1 hover:bg-green-100 rounded-full"><X className="w-4 h-4" /></button>
                                                </div>
                                            ) : (
                                                <div className="flex-1">
                                                    <input
                                                        type="file"
                                                        onChange={handleResumeUpload}
                                                        accept=".pdf,.doc,.docx"
                                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-[#083D77]/10 file:text-[#083D77] hover:file:bg-[#083D77]/20 transition-all cursor-pointer bg-gray-50 rounded-xl border border-gray-200"
                                                    />
                                                    <p className="mt-1 text-xs text-gray-400">Accepted formats: PDF, DOC, DOCX</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="space-y-4">
                                    <div className="p-4 bg-yellow-50 text-yellow-800 rounded-lg text-sm border border-yellow-100 flex items-start gap-3">
                                        <Lock className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Use this section to update your password securely. Ensure you choose a strong password.</span>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Current Password</label>
                                        <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900" placeholder="••••••••" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">New Password</label>
                                        <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900" placeholder="••••••••" />
                                    </div>
                                </div>
                            )}

                            <div className="pt-6">
                                <button
                                    onClick={handleSave}
                                    disabled={isSaving}
                                    className="px-8 py-3.5 bg-[#083D77] text-white font-bold rounded-xl shadow-lg hover:bg-[#062a52] hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSaving ? 'Saving...' : <><Save className="w-5 h-5" /> Save Changes</>}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
