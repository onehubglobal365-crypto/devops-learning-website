'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import MultiTerminal from '@/components/code/multi-terminal';
import CodeEditor from '@/components/code/code-editor';

import { Terminal, Code2, FileCode, Database, Rocket, FolderOpen, Search, Lightbulb } from 'lucide-react';

export default function TerminalPage() {
  const [activeTech, setActiveTech] = useState('linux');
  const [isMounted, setIsMounted] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToTerminal = (tech: string) => {
    setActiveTech(tech);
    terminalRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen transition-colors duration-300 relative overflow-x-hidden" style={{ background: 'linear-gradient(to bottom right, #dcfce7, #d1fae5, #ccfbf1)' }}>
      {/* Static Vibrant Background - Removed */}

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-12">


          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-in-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 animate-gradient">
              Code Terminal
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-semibold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Practice Real Commands in a Safe Environment
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Master Linux, Python, Java, and SQL commands with our interactive terminal simulator.
            Switch between technologies, run real commands, and learn without breaking anything.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div
            onClick={() => scrollToTerminal('linux')}
            className="group relative text-left p-8 rounded-[40px] bg-[#FFFDD0] border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-visible"
          >
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl flex items-center justify-center bg-white shadow-xl border border-gray-100 z-20 transform group-hover:scale-110 transition-transform duration-500 animate-pulse">
              <Terminal className="w-12 h-12 text-green-600 transition-colors" />
            </div>
            <div className="relative z-10 mt-6 ml-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300">
                Linux & DevOps
              </h3>
              <p className="text-gray-600">
                Docker, Git, Systemctl, and more Linux commands
              </p>
            </div>
          </div>

          <div
            onClick={() => scrollToTerminal('python')}
            className="group relative text-left p-8 rounded-[40px] bg-[#FFFDD0] border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-visible"
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl flex items-center justify-center bg-white shadow-xl border border-gray-100 z-20 transform group-hover:scale-110 transition-transform duration-500 animate-pulse">
              <Code2 className="w-12 h-12 text-blue-600 transition-colors" />
            </div>
            <div className="relative z-10 mt-6 ml-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                Python Programming
              </h3>
              <p className="text-gray-600">
                Python scripts, pip packages, and virtual environments
              </p>
            </div>
          </div>

          <div
            onClick={() => scrollToTerminal('java')}
            className="group relative text-left p-8 rounded-[40px] bg-[#FFFDD0] border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-visible"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl flex items-center justify-center bg-white shadow-xl border border-gray-100 z-20 transform group-hover:scale-110 transition-transform duration-500 animate-pulse">
              <FileCode className="w-12 h-12 text-orange-600 transition-colors" />
            </div>
            <div className="relative z-10 mt-6 ml-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
                Java & Databases
              </h3>
              <p className="text-gray-600">
                Java compilation, Maven, Gradle, and database commands
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Terminal Section */}
      <div ref={terminalRef} className="relative z-10 max-w-[1400px] mx-auto px-8 pb-16">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
          <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex space-x-3">
                  <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-gray-900 font-bold text-lg">OneHubGlobal Terminal</span>
              </div>
              <div className="flex items-center space-x-3 text-green-600 text-base">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live Terminal</span>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gray-50">
            <div className="mb-4 p-4 bg-blue-50 border border-blue-100 rounded-2xl">
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <h4 className="text-blue-900 font-semibold mb-2">How to Use the Terminal:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Type commands and press <strong>Enter</strong> or click <strong>Run</strong> to execute</li>
                    <li>• Use <code className="bg-white text-green-700 px-1 rounded border border-blue-100">help</code> to see available commands</li>
                    <li>• Try <code className="bg-white text-green-700 px-1 rounded border border-blue-100">python -c "print('Hello World')"</code> for Python execution</li>
                    <li>• Try <code className="bg-white text-green-700 px-1 rounded border border-blue-100">compile System.out.println("Hello World");</code> for Java execution</li>
                  </ul>
                </div>
              </div>
            </div>
            <MultiTerminal
              className="w-full shadow-inner border border-gray-200 rounded-2xl overflow-hidden"
              activeTech={activeTech}
              onTechChange={setActiveTech}
            />
          </div>
        </div>
      </div>

      {/* Code Editor Section */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 pb-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center space-x-4 mb-6 px-8 py-4 bg-[#d4d4d4] rounded-full shadow-sm mx-auto">
            <h2 className="text-4xl font-bold text-gray-900">
              Live Code Editor
            </h2>
          </div>
          <p className="text-gray-600 text-lg">Write and execute Python & Java code in real-time</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Code2 className="w-8 h-8 text-blue-600" /> Python Editor
            </h3>
            <CodeEditor
              language="python"
              onExecute={async (code) => {
                try {
                  const response = await fetch('/api/execute-code', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ language: 'python', code })
                  });
                  const result = await response.json();
                  console.log('Python execution result:', result);
                  // You could display this result in the terminal or a separate output area
                } catch (error) {
                  console.error('Python execution error:', error);
                }
              }}
              className="w-full border border-gray-200 shadow-lg rounded-2xl overflow-hidden"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileCode className="w-8 h-8 text-orange-600" /> Java Editor
            </h3>
            <CodeEditor
              language="java"
              onExecute={async (code) => {
                try {
                  const response = await fetch('/api/execute-code', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ language: 'java', code })
                  });
                  const result = await response.json();
                  console.log('Java execution result:', result);
                  // You could display this result in the terminal or a separate output area
                } catch (error) {
                  console.error('Java execution error:', error);
                }
              }}
              className="w-full border border-gray-200 shadow-lg rounded-2xl overflow-hidden"
            />
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <Lightbulb className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">How to Use the Code Editor</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Write your Python or Java code in the editor above</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Click "Run Code" to execute your code in real-time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Use "Reset" to restore the default example code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Or use terminal commands like <code className="bg-gray-100 text-green-700 px-1 rounded border border-gray-200">python -c "print('Hello')"</code> or <code className="bg-gray-100 text-green-700 px-1 rounded border border-gray-200">run print('Hello')</code></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Command Reference Section */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-4 mb-6 px-8 py-4 bg-[#d4d4d4] rounded-full shadow-sm mx-auto">
            <h2 className="text-4xl font-bold text-gray-900">
              Command Reference
            </h2>
          </div>
          <p className="text-gray-600 text-lg">Essential commands for each technology</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Linux/DevOps Commands */}
          <div className="group relative bg-white border-2 border-b-8 border-gray-100 dark:border-white/10 hover:border-green-200 dark:hover:border-green-900/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-xl rounded-bl-xl card-hover-effect">
            <div className="flex items-center mb-6">
              <div className="mr-4 transform group-hover:scale-110 transition-transform duration-500">
                <Terminal className="w-10 h-10 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Linux/DevOps</h3>
                <p className="text-gray-600">System administration and containerization</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { cmd: 'docker ps', desc: 'List containers' },
                { cmd: 'git status', desc: 'Git repository status' },
                { cmd: 'systemctl status', desc: 'Service status' },
                { cmd: 'chmod +x file', desc: 'Make executable' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg p-3 border border-gray-100 group-hover:border-green-100 transition-colors">
                  <code className="text-green-600 font-mono font-semibold">{item.cmd}</code>
                  <span className="text-gray-500 text-sm">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Python Commands */}
          <div className="group relative bg-white border-2 border-b-8 border-gray-100 dark:border-white/10 hover:border-blue-200 dark:hover:border-blue-900/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-xl rounded-bl-xl card-hover-effect">
            <div className="flex items-center mb-6">
              <div className="mr-4 transform group-hover:scale-110 transition-transform duration-500">
                <Code2 className="w-10 h-10 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Python</h3>
                <p className="text-gray-600">Scripting and package management</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { cmd: 'python --version', desc: 'Check version' },
                { cmd: 'pip install pkg', desc: 'Install package' },
                { cmd: 'pip list', desc: 'List packages' },
                { cmd: 'python script.py', desc: 'Run script' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg p-3 border border-gray-100 group-hover:border-blue-100 transition-colors">
                  <code className="text-blue-600 font-mono font-semibold">{item.cmd}</code>
                  <span className="text-gray-500 text-sm">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Java Commands */}
          <div className="group relative bg-white border-2 border-b-8 border-gray-100 dark:border-white/10 hover:border-orange-200 dark:hover:border-orange-900/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-xl rounded-bl-xl card-hover-effect">
            <div className="flex items-center mb-6">
              <div className="mr-4 transform group-hover:scale-110 transition-transform duration-500">
                <FileCode className="w-10 h-10 text-orange-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Java</h3>
                <p className="text-gray-600">Compilation and build tools</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { cmd: 'javac Main.java', desc: 'Compile Java' },
                { cmd: 'java Main', desc: 'Run class' },
                { cmd: 'mvn compile', desc: 'Maven build' },
                { cmd: 'gradle build', desc: 'Gradle build' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg p-3 border border-gray-100 group-hover:border-orange-100 transition-colors">
                  <code className="text-orange-600 font-mono font-semibold">{item.cmd}</code>
                  <span className="text-gray-500 text-sm">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SQL Commands */}
          <div className="group relative bg-white border-2 border-b-8 border-gray-100 dark:border-white/10 hover:border-purple-200 dark:hover:border-purple-900/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-xl rounded-bl-xl card-hover-effect">
            <div className="flex items-center mb-6">
              <div className="mr-4 transform group-hover:scale-110 transition-transform duration-500">
                <Database className="w-10 h-10 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">SQL</h3>
                <p className="text-gray-600">Database operations</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { cmd: 'mysql -u user', desc: 'Connect MySQL' },
                { cmd: 'psql -U user', desc: 'Connect PostgreSQL' },
                { cmd: 'sqlite3 db.sqlite', desc: 'Open SQLite' },
                { cmd: 'show databases', desc: 'List databases' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg p-3 border border-gray-100 group-hover:border-purple-100 transition-colors">
                  <code className="text-purple-600 font-mono font-semibold">{item.cmd}</code>
                  <span className="text-gray-500 text-sm">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Learning Tips Section */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-4 mb-6 px-8 py-4 bg-[#d4d4d4] rounded-full shadow-sm mx-auto">
            <h2 className="text-4xl font-bold text-gray-900">
              Learning Tips
            </h2>
          </div>
          <p className="text-gray-600 text-lg">Pro tips to master the terminal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden card-hover-effect hover-glow-soft bg-white border-2 border-b-8 border-gray-100 dark:border-white/10 hover:border-yellow-200 dark:hover:border-yellow-900/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-xl rounded-bl-xl">
            <div className="mb-6 text-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 inline-block">
              <Rocket className="w-16 h-16 text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-600 transition-all duration-300">
              Getting Started
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Start with <code className="bg-gray-100 text-green-700 px-2 py-1 rounded text-sm border border-gray-200">help</code> to see all commands
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Try <code className="bg-gray-100 text-green-700 px-2 py-1 rounded text-sm border border-gray-200">ls</code> to explore directories
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Use <code className="bg-gray-100 text-green-700 px-2 py-1 rounded text-sm border border-gray-200">pwd</code> to see your location
              </li>
            </ul>
          </div>


          <div className="group relative overflow-hidden card-hover-effect hover-glow-soft bg-white border-2 border-b-8 border-gray-100 dark:border-white/10 hover:border-blue-200 dark:hover:border-blue-900/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-xl rounded-bl-xl" style={{ transitionDelay: '0.1s' }}>
            <div className="mb-6 text-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 inline-block">
              <FolderOpen className="w-16 h-16 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              File Operations
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Create files with <code className="bg-gray-100 text-blue-700 px-2 py-1 rounded text-sm border border-gray-200">touch</code>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Make directories with <code className="bg-gray-100 text-blue-700 px-2 py-1 rounded text-sm border border-gray-200">mkdir</code>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Read files with <code className="bg-gray-100 text-blue-700 px-2 py-1 rounded text-sm border border-gray-200">cat</code>
              </li>
            </ul>
          </div>


          <div className="group relative overflow-hidden card-hover-effect hover-glow-soft bg-white border-2 border-b-8 border-gray-100 dark:border-white/10 hover:border-green-200 dark:hover:border-green-900/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-xl rounded-bl-xl" style={{ transitionDelay: '0.2s' }}>
            <div className="mb-6 text-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 inline-block">
              <Search className="w-16 h-16 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-teal-600 transition-all duration-300">
              System Monitoring
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Check system with <code className="bg-gray-100 text-green-700 px-2 py-1 rounded text-sm border border-gray-200">uname -a</code>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Monitor processes with <code className="bg-gray-100 text-green-700 px-2 py-1 rounded text-sm border border-gray-200">ps</code>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Check disk space with <code className="bg-gray-100 text-green-700 px-2 py-1 rounded text-sm border border-gray-200">df -h</code>
              </li>
            </ul>
          </div>
        </div>
      </div >
    </div >
  );
}

