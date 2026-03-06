'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, AlertCircle, Eye, EyeOff } from 'lucide-react';

interface Errors {
  email?: string;
  password?: string;
}

export default function HeroSignIn() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name in errors) setErrors((prev) => ({ ...prev, [name]: '' }));
    if (loginError) setLoginError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setLoginError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        router.push('/');
        router.refresh();
      } else {
        setLoginError(data.error || 'Login failed. Please try again.');
      }
    } catch (error) {
      setLoginError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className="glass-dark rounded-[2.5rem] p-[var(--space-md)] md:p-[var(--space-lg)] backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white/60"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(240, 249, 255, 0.95) 100%)',
        }}
      >
        <h2
          className="font-bold mb-2 text-center"
          style={{ color: '#2c666e', fontSize: 'clamp(1.25rem, 4vw, 1.75rem)' }}
        >
          Sign In
        </h2>
        <p
          className="text-center mb-[var(--space-md)]"
          style={{ color: '#4b5563', fontSize: 'clamp(0.8125rem, 2vw, 0.875rem)' }}
        >
          Welcome back! Please sign in to continue.
        </p>

        {loginError && (
          <div
            className="mb-4 p-3 rounded-xl flex items-center gap-2"
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
            }}
          >
            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
            <p className="text-red-500 font-medium" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.75rem)' }}>{loginError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-[var(--space-sm)]">
          <div>
            <label
              htmlFor="hero-email"
              className="block font-semibold mb-2"
              style={{ color: '#1f2937', fontSize: 'clamp(0.8125rem, 2vw, 0.875rem)' }}
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: '#6b7280' }} />
              <input
                id="hero-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full pl-12 pr-4 py-3 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all shadow-sm ${errors.email
                  ? 'border-2 border-red-400'
                  : 'border border-gray-200 focus:border-sky-400'
                  }`}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  fontSize: 'clamp(0.8125rem, 2vw, 0.875rem)'
                }}
                placeholder="Enter your email"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-red-500 font-medium" style={{ fontSize: '0.7rem' }}>{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="hero-password"
              className="block font-semibold mb-2"
              style={{ color: '#1f2937', fontSize: 'clamp(0.8125rem, 2vw, 0.875rem)' }}
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: '#6b7280' }} />
              <input
                id="hero-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full pl-12 pr-12 py-3 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all shadow-sm ${errors.password
                  ? 'border-2 border-red-400'
                  : 'border border-gray-200 focus:border-sky-400'
                  }`}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  fontSize: 'clamp(0.8125rem, 2vw, 0.875rem)'
                }}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                style={{ color: '#4b5563' }}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-red-500 font-medium" style={{ fontSize: '0.7rem' }}>{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 mt-4 rounded-xl font-bold bg-[#0ea5e9] text-white transition-all hover:bg-[#0284c7] hover:shadow-lg hover:shadow-sky-500/30 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p style={{ color: '#4b5563', fontSize: 'clamp(0.75rem, 2vw, 0.8125rem)' }}>
            Don't have an account?{' '}
            <a
              href="/register"
              className="font-bold text-[#0284c7] hover:underline transition-all"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

