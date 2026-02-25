'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, EyeOff, AlertCircle, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AUTH_SYSTEM_AVAILABLE, AUTH_STATUS_HEADING, AUTH_STATUS_MESSAGE, AUTH_STATUS_DETAILS } from '@/config/authStatus';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialView?: 'login' | 'signup';
}

type Errors = {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    general?: string;
};

export default function AuthModal({ isOpen, onClose, initialView = 'login' }: AuthModalProps) {
    const [view, setView] = useState<'login' | 'signup'>(initialView);
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [errors, setErrors] = useState<Errors>({});
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [authError, setAuthError] = useState('');
    const [mounted, setMounted] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        setView(initialView);
        setAuthError('');
        setErrors({});
    }, [initialView, isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleOutsideClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    const validateForm = () => {
        const newErrors: Errors = {};
        if (view === 'signup' && !formData.name.trim()) {
            newErrors.name = 'Full name is required';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if (view === 'signup' && formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (name in errors) setErrors((prev) => ({ ...prev, [name]: '' }));
        if (authError) setAuthError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsLoading(true);
        setAuthError('');

        const endpoint = view === 'login' ? '/api/auth/login' : '/api/auth/signup';
        const body = view === 'login'
            ? { email: formData.email, password: formData.password }
            : { name: formData.name, email: formData.email, password: formData.password };

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            const data = await response.json();

            if (!response.ok) {
                setAuthError(data.error || data.message || (view === 'login' ? 'Invalid credentials' : 'Registration failed'));
            } else {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('registeredEmail', formData.email);
                window.dispatchEvent(new Event('auth-change'));
                onClose();
                // Trigger page refresh or redirect if needed
                window.location.reload();
            }
        } catch (error) {
            console.error('Auth error:', error);
            setAuthError('Unable to connect to server. Try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={handleOutsideClick}
                >
                    <motion.div
                        ref={modalRef}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="w-full max-w-4xl grid lg:grid-cols-2 rounded-[40px] overflow-hidden bg-[#f3f4f6] shadow-2xl relative border border-white/20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-[1000] p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-500 hover:text-gray-700 transition-colors lg:text-white lg:hover:bg-white/10"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Left Panel - Branding */}
                        <div className="hidden lg:flex flex-col justify-center px-12 py-10 bg-gradient-to-br from-[#0ea5e9] to-[#083D77] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative z-10 text-white">
                                <div className="flex items-center gap-3 mb-12">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1">
                                        <Image src="/logo_new.jpg" alt="Logo" width={40} height={40} className="object-contain" />
                                    </div>
                                    <div className="font-orbitron font-black text-xl tracking-wider">
                                        <span className="text-white">ONEHUB</span>
                                        <span className="text-orange-400">GLOBAL</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { title: 'Expert Tutorials', desc: 'Premium DevOps and coding resources.' },
                                        { title: 'Interactive Learning', desc: 'Real-time quizzes and challenges.' },
                                        { title: 'Career Growth', desc: 'Get certified and unlock jobs.' },
                                        { title: 'AI Mock Interviews', desc: 'Practice with our AI assistant.' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="bg-white/20 p-2 rounded-full h-fit mt-1">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">{item.title}</h3>
                                                <p className="text-sky-100 text-sm opacity-90">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Panel - Form */}
                        <div className="flex flex-col justify-center px-8 lg:px-12 py-12 bg-[#f3f4f6]">
                            {!AUTH_SYSTEM_AVAILABLE ? (
                                <div className="text-center space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900">{AUTH_STATUS_HEADING}</h2>
                                    <p className="text-gray-600 text-sm">{AUTH_STATUS_MESSAGE}</p>
                                    <p className="text-gray-500 text-xs">{AUTH_STATUS_DETAILS}</p>
                                </div>
                            ) : (
                                <div className="w-full max-w-sm mx-auto space-y-8">
                                    <div className="text-center lg:text-left">
                                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                                            {view === 'login' ? 'Welcome Back' : 'Create Account'}
                                        </h2>
                                        <p className="mt-2 text-gray-500 text-sm">
                                            {view === 'login' ? 'Sign in to your account' : 'Join OneHubGlobal today'}
                                        </p>
                                    </div>

                                    {authError && (
                                        <div className="p-3 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3">
                                            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                            <p className="text-xs text-red-600 font-medium">{authError}</p>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {view === 'signup' && (
                                            <div className="inputBox !mb-6">
                                                <input name="name" type="text" required value={formData.name} onChange={handleInputChange} placeholder=" " />
                                                <span>Full Name</span>
                                                {errors.name && <p className="text-[10px] text-red-500 absolute -bottom-4 left-0">{errors.name}</p>}
                                            </div>
                                        )}

                                        <div className="inputBox !mb-6">
                                            <input name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder=" " />
                                            <span>Email Address</span>
                                            {errors.email && <p className="text-[10px] text-red-500 absolute -bottom-4 left-0">{errors.email}</p>}
                                        </div>

                                        <div className="inputBox !mb-6">
                                            <input name="password" type={showPassword ? 'text' : 'password'} required value={formData.password} onChange={handleInputChange} placeholder=" " />
                                            <span>Password</span>
                                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600 z-10 transition-colors">
                                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                            {errors.password && <p className="text-[10px] text-red-500 absolute -bottom-4 left-0">{errors.password}</p>}
                                        </div>

                                        {view === 'signup' && (
                                            <div className="inputBox !mb-6">
                                                <input name="confirmPassword" type={showPassword ? 'text' : 'password'} required value={formData.confirmPassword} onChange={handleInputChange} placeholder=" " />
                                                <span>Confirm Password</span>
                                                {errors.confirmPassword && <p className="text-[10px] text-red-500 absolute -bottom-4 left-0">{errors.confirmPassword}</p>}
                                            </div>
                                        )}

                                        {view === 'login' && (
                                            <div className="flex justify-end">
                                                <button type="button" className="text-xs font-bold text-[#0ea5e9] hover:text-[#083D77] transition-colors">Forgot password?</button>
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full py-4 bg-[#0ea5e9] hover:bg-[#083D77] text-white font-black rounded-2xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 uppercase tracking-widest text-xs"
                                        >
                                            {isLoading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : (view === 'login' ? 'Log In' : 'Sign Up')}
                                        </button>
                                    </form>

                                    <div className="text-center pt-2">
                                        <p className="text-sm text-gray-600">
                                            {view === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
                                            <button
                                                onClick={() => setView(view === 'login' ? 'signup' : 'login')}
                                                className="font-black text-[#0ea5e9] hover:text-[#083D77] transition-colors underline decoration-2 underline-offset-4"
                                            >
                                                {view === 'login' ? 'Sign Up' : 'Log In'}
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
