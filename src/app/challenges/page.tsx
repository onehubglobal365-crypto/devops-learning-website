'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  BarChart,
  FileQuestion,
  Code,
  UserPlus,
  LogIn,
  Terminal,
  FileCode,
  Database,
  Key,
  Laptop,
  Target,
  Award
} from 'lucide-react';
import { getLanguageOptions } from '@/data/challenges';
import { createNewCode, decodeProgress, getTotalProgress } from '@/lib/challenge-code';

type Mode = 'choice' | 'new' | 'continue' | 'language';

export default function ChallengesPage() {
  const [mode, setMode] = useState<Mode>('choice');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userCode, setUserCode] = useState('');
  const [enteredCode, setEnteredCode] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const languageOptions = getLanguageOptions();

  const handleNewUser = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!userName.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!userEmail.trim() || !userEmail.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    const code = createNewCode(userName.trim(), userEmail.trim());
    setUserCode(code);
    setMode('language');
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!enteredCode.trim()) {
      setError('Please enter your code');
      return;
    }

    const progress = decodeProgress(enteredCode.trim());
    if (!progress) {
      setError('Invalid code. Please check and try again.');
      return;
    }

    setUserCode(enteredCode.trim().toUpperCase());
    setMode('language');
  };

  const copyCode = () => {
    navigator.clipboard.writeText(userCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const progress = userCode ? getTotalProgress(userCode) : null;

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ background: 'linear-gradient(to bottom right, #dcfce7, #d1fae5, #ccfbf1)' }}>
      {/* Animated Background - Removed */}

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 py-4 leading-normal">
            Coding Challenge Arena
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Test your skills with 25 MCQs and 2 coding challenges per level. Complete 10 levels to earn the Master Badge!
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
        >
          {[
            { label: 'Languages', value: '4', icon: <Globe className="w-8 h-8 text-cyan-500" /> },
            { label: 'Levels', value: '10', icon: <BarChart className="w-8 h-8 text-purple-500" /> },
            { label: 'MCQs/Level', value: '25', icon: <FileQuestion className="w-8 h-8 text-pink-500" /> },
            { label: 'Coding/Level', value: '2', icon: <Code className="w-8 h-8 text-indigo-500" /> },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-4 border border-gray-100 shadow-lg text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          {/* Choice Screen */}
          {mode === 'choice' && (
            <motion.div
              key="choice"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-2xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-8 p-4">
                {/* New User */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMode('new')}
                  className="relative bg-white rounded-3xl p-8 border border-purple-100 text-left hover:border-purple-300 transition-all group shadow-lg overflow-visible mt-4"
                >
                  <div className="absolute -top-6 -left-6 bg-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <UserPlus className="w-10 h-10 text-purple-600" />
                  </div>
                  <div className="mt-6 ml-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">New User</h2>
                    <p className="text-gray-600">Start fresh and get your unique progress code</p>
                    <div className="mt-4 text-purple-600 group-hover:text-purple-700 font-semibold flex items-center gap-2">
                      Get Started <span className="text-xl">→</span>
                    </div>
                  </div>
                </motion.button>

                {/* Continue */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMode('continue')}
                  className="relative bg-white rounded-3xl p-8 border border-cyan-100 text-left hover:border-cyan-300 transition-all group shadow-lg overflow-visible mt-4"
                >
                  <div className="absolute -top-6 -left-6 bg-cyan-100 w-20 h-20 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <LogIn className="w-10 h-10 text-cyan-600" />
                  </div>
                  <div className="mt-6 ml-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Continue</h2>
                    <p className="text-gray-600">Enter your code to resume your progress</p>
                    <div className="mt-4 text-cyan-600 group-hover:text-cyan-700 font-semibold flex items-center gap-2">
                      Enter Code <span className="text-xl">→</span>
                    </div>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* New User Form */}
          {mode === 'new' && (
            <motion.div
              key="new"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
                <button
                  onClick={() => setMode('choice')}
                  className="text-gray-500 hover:text-gray-900 transition-colors mb-6 flex items-center gap-2"
                >
                  ← Back
                </button>

                <div className="text-center mb-6">
                  <div className="mb-4 bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                    <UserPlus className="w-8 h-8 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Create Your Profile</h2>
                  <p className="text-gray-600 text-sm mt-2">Enter your details to get a unique progress code</p>
                </div>

                <form onSubmit={handleNewUser} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm mb-2">Your Email</label>
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  {error && (
                    <div className="text-red-400 text-sm bg-red-500/10 p-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-purple-500/25"
                  >
                    Generate My Code →
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {/* Continue Form */}
          {mode === 'continue' && (
            <motion.div
              key="continue"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
                <button
                  onClick={() => setMode('choice')}
                  className="text-gray-500 hover:text-gray-900 transition-colors mb-6 flex items-center gap-2"
                >
                  ← Back
                </button>

                <div className="text-center mb-6">
                  <div className="mb-4 bg-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                    <Key className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Enter Your Code</h2>
                  <p className="text-gray-600 text-sm mt-2">Paste your progress code to continue</p>
                </div>

                <form onSubmit={handleContinue} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">Your Progress Code</label>
                    <input
                      type="text"
                      value={enteredCode}
                      onChange={(e) => setEnteredCode(e.target.value.toUpperCase())}
                      placeholder="OHG-XXXXXX-XXXXXXXX"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent font-mono text-center tracking-wider"
                    />
                  </div>

                  {error && (
                    <div className="text-red-400 text-sm bg-red-500/10 p-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-cyan-500/25"
                  >
                    Continue My Journey →
                  </button>
                </form>

                <div className="mt-6 text-center text-gray-500 text-sm">
                  Don&apos;t have a code?{' '}
                  <button onClick={() => setMode('new')} className="text-purple-400 hover:text-purple-300">
                    Create new profile
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Language Selection */}
          {mode === 'language' && (
            <motion.div
              key="language"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-2xl mx-auto"
            >
              {/* Progress Code Display */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 mb-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="text-gray-600 text-sm mb-1">Your Progress Code</div>
                    <div className="font-mono text-xl text-green-600 tracking-wider">{userCode}</div>
                  </div>
                  <button
                    onClick={copyCode}
                    className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg transition-colors flex items-center gap-2"
                  >
                    {copied ? '✓ Copied!' : '📋 Copy Code'}
                  </button>
                </div>
                <div className="mt-3 text-gray-500 text-sm">
                  ⚠️ Save this code! You&apos;ll need it to continue your progress later.
                </div>
                {progress && progress.completed > 0 && (
                  <div className="mt-3 text-gray-700 text-sm">
                    Overall Progress: {progress.completed}/{progress.total} levels completed
                  </div>
                )}
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => {
                      setMode('choice');
                      setUserCode('');
                    }}
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    ← Start Over
                  </button>
                  {userName && (
                    <span className="text-gray-600">Welcome, <span className="text-gray-900 font-semibold">{userName}</span>!</span>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Select Programming Language
                </h2>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {languageOptions.map((lang) => {
                    const langProgress = userCode ? decodeProgress(userCode) : null;
                    const completed = langProgress?.[lang.value as keyof typeof langProgress] as number[] || [];

                    return (
                      <button
                        key={lang.value}
                        onClick={() => setSelectedLanguage(lang.value)}
                        className={`p-6 rounded-2xl border-2 transition-all transform hover:scale-[1.02] relative ${selectedLanguage === lang.value
                          ? 'border-purple-500 bg-purple-500/20'
                          : 'border-gray-200 bg-white hover:border-purple-200'
                          }`}
                      >
                        <div className="mb-2 w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl group-hover:scale-110 transition-transform">
                          {lang.value === 'PYTHON' && <Terminal className="w-6 h-6 text-yellow-500" />}
                          {lang.value === 'JAVA' && <FileCode className="w-6 h-6 text-orange-500" />}
                          {lang.value === 'JAVASCRIPT' && <FileCode className="w-6 h-6 text-yellow-400" />}
                          {lang.value === 'SQL' && <Database className="w-6 h-6 text-blue-500" />}
                        </div>
                        <div className="text-lg font-semibold text-gray-900">{lang.label}</div>
                        {completed.length > 0 && (
                          <div className="absolute top-2 right-2 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                            {completed.length}/10
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {selectedLanguage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Link
                      href={`/challenges/${selectedLanguage}?code=${encodeURIComponent(userCode)}&name=${encodeURIComponent(userName)}`}
                      className="block w-full py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-cyan-500/25 text-center"
                    >
                      Start {languageOptions.find(l => l.value === selectedLanguage)?.label} Challenge →
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* How It Works */}
        {mode === 'choice' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">How It Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Get Your Code', description: 'Enter name & email to get a unique progress code', icon: <Key className="w-6 h-6 text-purple-600" /> },
                { step: '2', title: 'Choose Language', description: 'Select Python, Java, JavaScript, or SQL', icon: <Laptop className="w-6 h-6 text-cyan-600" /> },
                { step: '3', title: 'Complete Levels', description: 'Answer 25 MCQs and solve 2 coding challenges', icon: <Target className="w-6 h-6 text-pink-600" /> },
                { step: '4', title: 'Earn Badges', description: 'Get badges for each level, Master Badge for all 10!', icon: <Award className="w-6 h-6 text-orange-600" /> },
              ].map((feature) => (
                <div
                  key={feature.step}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg text-center"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                    {feature.step}
                  </div>
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
