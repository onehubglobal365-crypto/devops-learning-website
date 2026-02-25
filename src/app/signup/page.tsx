"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
    Eye,
    EyeOff,
    AlertCircle,
    Mail,
    Lock,
    User,
    Check,
    X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
    AUTH_STATUS_DETAILS,
    AUTH_STATUS_HEADING,
    AUTH_STATUS_MESSAGE,
    AUTH_SYSTEM_AVAILABLE,
} from "@/config/authStatus";

type Errors = {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    general?: string;
};

function AuthPausedNotice() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--bg-primary)] transition-colors duration-300">
            <div className="w-full max-w-xl space-y-6 text-center">
                <Link href="/" className="inline-block">
                    <div className="flex items-center justify-center space-x-3">
                        <div className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center">
                            <Image
                                src="/logo_new.jpg"
                                alt="OHG365 Logo"
                                width={56}
                                height={56}
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="text-left">
                            <p className="text-2xl font-bold text-white leading-tight">
                                OneHubGlobal
                            </p>
                            <p className="text-sm text-gray-400">OHG365</p>
                        </div>
                    </div>
                </Link>

                <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl shadow-2xl p-8 space-y-5">
                    <h1 className="text-3xl font-bold text-white">
                        {AUTH_STATUS_HEADING}
                    </h1>
                    <p className="text-gray-300">{AUTH_STATUS_MESSAGE}</p>
                    <p className="text-sm text-gray-400">{AUTH_STATUS_DETAILS}</p>
                    <div className="pt-4">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-rose-500 to-red-600 text-white font-semibold shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300"
                        >
                            Continue
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ActiveSignupForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirect") || "/";

    const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [errors, setErrors] = useState<Errors>({});
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [signupError, setSignupError] = useState("");

    const validateForm = () => {
        const newErrors: Errors = {};
        if (!formData.name.trim()) {
            newErrors.name = "Full name is required";
        }
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (name in errors) setErrors((prev) => ({ ...prev, [name]: "" }));
        if (signupError) setSignupError("");
    };

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!validateForm()) return;
        setIsLoading(true);
        setSignupError("");

        try {
            const response = await fetch(`/api/auth/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setSignupError(data.error || data.message || "Registration failed");
            } else {
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    localStorage.setItem("registeredEmail", formData.email);

                    // Notify other components (like SharedNav)
                    window.dispatchEvent(new Event('auth-change'));

                    if (redirectTo && redirectTo !== "/login" && redirectTo !== "/signup") {
                        router.push(redirectTo);
                    } else {
                        router.push("/dashboard");
                    }
                } else {
                    router.push("/login?email=" + encodeURIComponent(formData.email));
                }
            }
        } catch (error) {
            console.error("Signup error:", error);
            setSignupError("Unable to connect to server. Try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] p-4 transition-colors duration-300 relative overflow-hidden">
            {/* Top-Left Pill Logo */}
            <Link
                href="/"
                className="fixed top-4 left-6 z-[100001] flex items-center gap-3 bg-[#f3f4f6] px-2.5 py-2.5 rounded-full shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] border border-white/20 hover:scale-105 transition-all group pointer-events-auto"
            >
                <div className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden relative bg-white shadow-inner">
                    <Image
                        src="/logo_new.jpg"
                        alt="OHG365 Logo"
                        width={48}
                        height={48}
                        className="object-contain"
                        priority
                    />
                </div>
                <div className="flex flex-col pr-1 pt-0.5">
                    <div
                        className="flex items-center text-[20px] font-black tracking-tight leading-none"
                        style={{ fontFamily: 'var(--font-orbitron), sans-serif', letterSpacing: '0.05em' }}
                    >
                        <span className="text-[#083D77]">ONE</span>
                        <span className="text-orange-500">HUB</span>
                        <span className="text-cyan-500">GLOBAL</span>
                    </div>
                    <div className="flex items-center justify-center w-full mt-1">
                        <span
                            className="text-[7px] font-bold tracking-[0.1em] uppercase leading-tight text-center px-1 text-[#083D77]"
                            style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
                        >
                            SKILLS TO SUCCESS
                        </span>
                    </div>
                </div>
            </Link>

            <div
                className="w-full max-w-4xl grid lg:grid-cols-2 rounded-[50px] overflow-hidden min-h-[500px] relative z-10 transition-all duration-500 border-2 border-white/50"
                style={{
                    background: '#f3f4f6',
                    boxShadow: '15px 15px 40px #c2cedd, -15px -15px 40px #ffffff'
                }}
            >
                {/* Left Panel - Neumorphic Inset Branding */}
                <div className="hidden lg:flex flex-col justify-center px-8 xl:px-12 py-8 bg-gradient-to-br from-[#0ea5e9] to-[#083D77] relative overflow-hidden m-4 rounded-[40px] shadow-[inset_10px_10px_20px_rgba(0,0,0,0.2),inset_-10px_-10px_20px_rgba(255,255,255,0.1)]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 text-white max-w-lg">
                        <div className="mb-10">
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col">
                                    <div className="h-1 w-12 bg-white/60 rounded-full mt-1"></div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/20 p-2 rounded-full mt-1">
                                    <Check className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Expert-Led Tutorials</h3>
                                    <p className="text-sky-100 leading-relaxed">Access premium DevOps and coding resources tailored to current industry standards.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/20 p-2 rounded-full mt-1">
                                    <Check className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Interactive Learning</h3>
                                    <p className="text-sky-100 leading-relaxed">Track your progress with real-time quizzes, coding challenges, and hands-on projects.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/20 p-2 rounded-full mt-1">
                                    <Check className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Career Growth</h3>
                                    <p className="text-sky-100 leading-relaxed">Connect with professionals, get certified, and unlock new career opportunities.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/20 p-2 rounded-full mt-1">
                                    <Check className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">AI Mock Interview</h3>
                                    <p className="text-sky-100 leading-relaxed">Practice technical interviews with our AI assistant to boost your confidence and readiness.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Soft Emboss Form */}
                <div className="flex flex-col justify-center items-center px-6 py-8 pt-16 bg-[#f3f4f6] relative">
                    <div className="w-full max-w-md space-y-8">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Create Account</h2>
                            <p className="mt-2 text-gray-500">Join OneHubGlobal today</p>
                        </div>

                        {signupError && (
                            <div className="p-4 bg-red-50 border border-red-100 rounded-lg flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                <p className="text-sm text-red-600">{signupError}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Full Name */}
                            <div className="inputBox">
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    placeholder=" "
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                <span>Full Name</span>
                                {errors.name && <p className="mt-1 text-sm text-red-500 absolute -bottom-5 left-0 text-xs">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div className="inputBox">
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder=" "
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <span>Email Address</span>
                                {errors.email && <p className="mt-1 text-sm text-red-500 absolute -bottom-5 left-0 text-xs">{errors.email}</p>}
                            </div>

                            {/* Password */}
                            <div className="inputBox">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    placeholder=" "
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                <span>Password</span>
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-0 top-3 text-gray-400 hover:text-gray-600 z-10 p-1">
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                                {errors.password && <p className="mt-1 text-sm text-red-500 absolute -bottom-5 left-0 text-xs">{errors.password}</p>}
                            </div>

                            {/* Confirm Password */}
                            <div className="inputBox">
                                <input
                                    name="confirmPassword"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    placeholder=" "
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                />
                                <span>Confirm Password</span>
                                {errors.confirmPassword && <p className="mt-1 text-sm text-red-500 absolute -bottom-5 left-0 text-xs">{errors.confirmPassword}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3.5 bg-[#0ea5e9] hover:bg-sky-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                ) : 'Sign Up'}
                            </button>
                        </form>

                        <div className="text-center mt-6">
                            <p className="text-gray-600">
                                Already have an account?{' '}
                                <Link href="/login" className="font-bold text-[#0ea5e9] hover:text-sky-700">
                                    Log in
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function SignupPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/?auth=signup');
    }, [router]);

    return (
        <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
    );
}

function SignupForm() {
    if (!AUTH_SYSTEM_AVAILABLE) {
        return <AuthPausedNotice />;
    }
    return (
        <Suspense fallback={null}>
            <ActiveSignupForm />
        </Suspense>
    );
}
