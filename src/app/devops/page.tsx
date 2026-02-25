'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import TechLayout from '@/components/layout/tech-layout';
import VideoSection from '@/components/video/VideoSection';
import { getVideosForTopic } from '@/data/videoTutorials';
import { AUTH_SYSTEM_AVAILABLE } from '@/config/authStatus';
import { Rocket, Target, Search, Check, Layers, User, Zap, Terminal, GitBranch, Server, Box, Activity, ZoomIn, Settings, FileJson, RefreshCcw, BookOpen, Code, Users, Brain, Lightbulb, ChevronsRight, MessageSquare, FlaskConical, ClipboardList, CheckCircle, CloudUpload, Infinity, Shield, Workflow, Lock, Key, Siren, Globe, Cpu, BarChart, LineChart, GitCommit, ChevronsLeft, Package, ShieldCheck, AlertTriangle, TrendingUp, Info, List, Heart, FileCode, FileText, ListChecks, ClipboardCheck, Calendar, RefreshCw, GitMerge, Network, Database, Play, Layout, HardDrive, Award, Tag, Image as ImageIcon, History as HistoryIcon, ArrowRightLeft, ShoppingCart, CreditCard, Scale, Wrench, Hammer, Star, Monitor, PlusSquare, Bug, Hexagon, Copy, XCircle, Briefcase, FilePlus, Filter, Cloud } from 'lucide-react';

export default function DevOpsPage() {
  const [activeSection, setActiveSection] = useState('introduction');

  const pageHeadings = [
    // 1. DevOps Foundation
    { id: 'introduction', title: 'Introduction to DevOps' },
    { id: 'core-concepts', title: 'Core Concepts' },
    { id: 'devops-lifecycle', title: 'DevOps Lifecycle' },

    // 2. Linux Fundamentals
    { id: 'linux-introduction', title: 'Linux Introduction' },
    { id: 'linux-file-system', title: 'Linux File System' },
    { id: 'linux-navigation', title: 'Linux Navigation' },
    { id: 'linux-file-management', title: 'File Management' },
    { id: 'linux-permissions', title: 'Linux Permissions' },
    { id: 'linux-process-management', title: 'Process Management' },
    { id: 'linux-networking', title: 'Linux Networking' },
    { id: 'linux-shell-scripting', title: 'Shell Scripting' },

    // 3. Version Control
    { id: 'git-fundamentals', title: 'Git Fundamentals' },
    { id: 'git-workflows', title: 'Git Workflows' },
    { id: 'git-advanced', title: 'Advanced Git' },
    { id: 'github-gitlab', title: 'GitHub & GitLab' },

    // 4. Infrastructure Automation
    { id: 'ansible-basics', title: 'Ansible Basics' },
    { id: 'ansible-playbooks', title: 'Ansible Playbooks' },
    { id: 'ansible-roles', title: 'Ansible Roles' },
    { id: 'ansible-advanced', title: 'Advanced Ansible' },

    // 5. Containerization
    { id: 'docker-basics', title: 'Docker Basics' },
    { id: 'docker-compose', title: 'Docker Compose' },
    { id: 'container-best-practices', title: 'Container Best Practices' },

    // 6. Orchestration
    { id: 'kubernetes-basics', title: 'Kubernetes Basics' },
    { id: 'k8s-deployments', title: 'K8s Deployments' },
    { id: 'k8s-services', title: 'K8s Services' },
    { id: 'k8s-monitoring', title: 'K8s Monitoring' },

    // 7. CI/CD
    { id: 'jenkins-basics', title: 'Jenkins Basics' },
    { id: 'jenkins-pipelines', title: 'Jenkins Pipelines' },
    { id: 'github-actions', title: 'GitHub Actions' },
    { id: 'gitlab-ci', title: 'GitLab CI' },

    // 8. Monitoring
    { id: 'prometheus-basics', title: 'Prometheus Basics' },
    { id: 'grafana-dashboards', title: 'Grafana Dashboards' },
    { id: 'elk-stack', title: 'ELK Stack' },
    { id: 'alerting', title: 'Alerting & Incident Response' },

    // 9. Advanced Topics
    { id: 'automation', title: 'Automation & Orchestration' },
    { id: 'security', title: 'DevSecOps & Security' },
    { id: 'cloud-platforms', title: 'Cloud Platforms & Services' },
    { id: 'monitoring-observability', title: 'Monitoring & Observability' },

    // 10. Resources
    { id: 'tools-technologies', title: 'Tools & Technologies' },
    { id: 'learning-path', title: 'Learning Path' },
    { id: 'summary', title: 'Summary' }
  ];

  // const devopsVideos = getVideosForTopic('devops');

  // Handle URL hash changes to set active section
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the #
      if (hash && pageHeadings.some(heading => heading.id === hash)) {
        setActiveSection(hash);
      }
    };

    // Set initial section from URL hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Get navigation for current section
  const getNavigation = () => {
    const currentIndex = pageHeadings.findIndex(h => h.id === activeSection);
    const previousSection = currentIndex > 0 ? pageHeadings[currentIndex - 1] : null;
    const nextSection = currentIndex < pageHeadings.length - 1 ? pageHeadings[currentIndex + 1] : null;

    return {
      previous: previousSection ? {
        href: `/devops/#${previousSection.id}`,
        title: previousSection.title,
        isSection: true
      } : undefined,
      next: nextSection ? {
        href: `/devops/#${nextSection.id}`,
        title: nextSection.title,
        isSection: true
      } : {
        href: '/java',
        title: 'Java Programming',
        isSection: false
      }
    };
  };

  const navigation = getNavigation();

  const renderContent = () => {
    switch (activeSection) {
      case 'introduction':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="introduction" className="text-4xl md:text-5xl font-extrabold mb-8 text-center flex items-center justify-center gap-4">
                <Rocket className="w-12 h-12 text-blue-500" />
                DevOps Learning
              </h1>

              <div className="max-w-6xl mx-auto">
                {/* Goal Section */}
                <div className="bg-white/95 p-8 rounded-2xl border border-blue-100 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <Target className="w-8 h-8 text-blue-600" />
                    Our DevOps Learning Goal
                  </h2>
                  <p className="text-slate-700 text-xl mb-4">Master DevOps practices, tools, and culture for modern software development.</p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-blue-700 mb-3">What You'll Achieve</h3>
                    <ul className="text-slate-700 space-y-2">
                      <li>• <strong className="text-slate-900">Cultural Transformation:</strong> Learn to break down silos and foster collaboration</li>
                      <li>• <strong className="text-slate-900">Automation Mastery:</strong> Build robust CI/CD pipelines and infrastructure automation</li>
                      <li>• <strong className="text-slate-900">Tool Proficiency:</strong> Master industry-standard DevOps tools and platforms</li>
                      <li>• <strong className="text-slate-900">Real-World Application:</strong> Apply DevOps principles to solve actual business problems</li>
                    </ul>
                  </div>
                </div>

                <div id="overview" className="bg-white/95 p-8 rounded-2xl border border-purple-100 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center flex items-center justify-center gap-3">
                    <Layout className="w-8 h-8 text-purple-600" />
                    DevOps Course Overview
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-blue-700 mb-4">What You'll Learn</h3>
                      <ul className="text-slate-700 space-y-2 font-medium">
                        <li>• Linux fundamentals and command line</li>
                        <li>• Docker containerization</li>
                        <li>• Kubernetes orchestration</li>
                        <li>• CI/CD pipeline development</li>
                        <li>• Infrastructure as Code (IaC)</li>
                        <li>• Cloud platforms (AWS, Azure, GCP)</li>
                        <li>• Monitoring and observability</li>
                        <li>• Security and compliance</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-700 mb-4">Career Opportunities</h3>
                      <ul className="text-slate-700 space-y-2 font-medium">
                        <li>• DevOps Engineer</li>
                        <li>• Site Reliability Engineer (SRE)</li>
                        <li>• Cloud Engineer</li>
                        <li>• Platform Engineer</li>
                        <li>• Infrastructure Engineer</li>
                        <li>• Automation Engineer</li>
                        <li>• Release Manager</li>
                        <li>• Technical Consultant</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Comprehensive DevOps Introduction */}
                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 id="introduction" className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                    What is DevOps? A Comprehensive Guide
                  </h2>

                  <div className="space-y-8">
                    {/* Definition Section */}
                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                        <Search className="w-7 h-7 text-blue-600" />
                        DevOps Definition & Evolution
                      </h3>
                      <p className="text-lg text-slate-700 mb-4">
                        <strong className="text-slate-900">DevOps</strong> is a cultural and technical movement that combines software development (Dev) and IT operations (Ops)
                        to shorten the systems development life cycle while delivering features, fixes, and updates frequently in close alignment with business objectives.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white border border-blue-100 p-4 rounded-lg shadow-sm">
                          <h4 className="text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
                            <HistoryIcon className="w-5 h-5" />
                            Historical Context
                          </h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>2009:</strong> Term "DevOps" coined by Patrick Debois</li>
                            <li>• <strong>2010:</strong> DevOpsDays conference series begins</li>
                            <li>• <strong>2012:</strong> "The Phoenix Project" popularizes DevOps</li>
                            <li>• <strong>2016:</strong> DevOps becomes mainstream enterprise practice</li>
                          </ul>
                        </div>
                        <div className="bg-white border border-blue-100 p-4 rounded-lg shadow-sm">
                          <h4 className="text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
                            <Heart className="w-5 h-5" />
                            Core Philosophy
                          </h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>Collaboration:</strong> Break down traditional silos</li>
                            <li>• <strong>Automation:</strong> Eliminate manual, error-prone processes</li>
                            <li>• <strong>Continuous Improvement:</strong> Learn from failures and successes</li>
                            <li>• <strong>Customer Focus:</strong> Deliver value faster and more reliably</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Why DevOps Matters */}
                    <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                        <Zap className="w-7 h-7 text-yellow-500" />
                        Why DevOps Matters in Today's Digital World
                      </h3>
                      <p className="text-lg text-slate-900 mb-4">
                        In an era where software drives business success, DevOps has become critical for organizations to remain competitive.
                        Companies practicing DevOps deploy code 200x more frequently, with 2,555x faster lead times and 7x lower change failure rates.
                      </p>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white border border-green-100 p-4 rounded-lg shadow-sm">
                          <h4 className="text-lg font-bold text-green-600 mb-3 flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            Speed to Market
                          </h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• Faster feature delivery</li>
                            <li>• Reduced time-to-market</li>
                            <li>• Competitive advantage</li>
                            <li>• Customer satisfaction</li>
                          </ul>
                        </div>
                        <div className="bg-white border border-green-100 p-4 rounded-lg shadow-sm">
                          <h4 className="text-lg font-bold text-blue-600 mb-3 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5" />
                            Reliability & Quality
                          </h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• Fewer production failures</li>
                            <li>• Faster recovery from incidents</li>
                            <li>• Consistent deployments</li>
                            <li>• Improved system stability</li>
                          </ul>
                        </div>
                        <div className="bg-white border border-green-100 p-4 rounded-lg shadow-sm">
                          <h4 className="text-lg font-bold text-purple-600 mb-3 flex items-center gap-2">
                            <Users className="w-5 h-5" />
                            Team Collaboration
                          </h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• Breaking down silos</li>
                            <li>• Shared responsibility</li>
                            <li>• Improved communication</li>
                            <li>• Knowledge sharing</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* DevOps vs Traditional */}
                    <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                        <ArrowRightLeft className="w-7 h-7 text-red-500" />
                        DevOps vs Traditional IT Operations
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white border border-red-100 p-4 rounded-lg shadow-sm">
                          <h4 className="text-lg font-bold text-red-600 mb-3 flex items-center gap-2">
                            <Activity className="w-5 h-5" />
                            Traditional IT (Waterfall)
                          </h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>Siloed teams:</strong> Dev and Ops work separately</li>
                            <li>• <strong>Manual processes:</strong> Error-prone deployments</li>
                            <li>• <strong>Infrequent releases:</strong> Months between deployments</li>
                            <li>• <strong>Blame culture:</strong> Finger-pointing when issues arise</li>
                            <li>• <strong>Reactive approach:</strong> Fix problems after they occur</li>
                            <li>• <strong>Documentation-heavy:</strong> Extensive manual documentation</li>
                          </ul>
                        </div>
                        <div className="bg-white border border-red-100 p-4 rounded-lg shadow-sm">
                          <h4 className="text-lg font-bold text-green-600 mb-3 flex items-center gap-2">
                            <Check className="w-5 h-5" />
                            DevOps Approach
                          </h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>Collaborative teams:</strong> Dev and Ops work together</li>
                            <li>• <strong>Automated processes:</strong> Reliable, repeatable deployments</li>
                            <li>• <strong>Continuous delivery:</strong> Multiple deployments per day</li>
                            <li>• <strong>Learning culture:</strong> Learn from failures together</li>
                            <li>• <strong>Proactive approach:</strong> Prevent problems before they occur</li>
                            <li>• <strong>Code as documentation:</strong> Infrastructure and processes in code</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Real-World Success Stories */}
                    <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                        <Award className="w-7 h-7 text-purple-600" />
                        Real-World DevOps Success Stories
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-purple-100 p-4 rounded-lg shadow-sm">
                          <h4 className="text-lg font-bold text-purple-700 mb-2 flex items-center gap-2">
                            <Play className="w-5 h-5" />
                            Netflix: Streaming at Scale
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">
                            Netflix processes over 1 billion hours of content per week using DevOps practices.
                            They deploy code hundreds of times per day with their "Simian Army" chaos engineering approach.
                          </p>
                          <div className="text-xs text-gray-600">
                            <strong>Results:</strong> 99.99% uptime, ability to handle traffic spikes, rapid feature delivery
                          </div>
                        </div>
                        <div className="bg-white border border-purple-100 p-4 rounded-lg shadow-sm">
                          <h4 className="text-lg font-bold text-purple-700 mb-2 flex items-center gap-2">
                            <ShoppingCart className="w-5 h-5" />
                            Amazon: E-commerce Giant
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">
                            Amazon deploys new code every 11.6 seconds on average. Their "two-pizza teams"
                            and microservices architecture enable this rapid deployment capability.
                          </p>
                          <div className="text-xs text-gray-600">
                            <strong>Results:</strong> 50,000+ deployments per day, reduced time-to-market by 90%
                          </div>
                        </div>
                        <div className="bg-white border border-purple-100 p-4 rounded-lg shadow-sm">
                          <h4 className="text-lg font-bold text-purple-700 mb-2 flex items-center gap-2">
                            <CreditCard className="w-5 h-5" />
                            Capital One: Financial Services
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">
                            Capital One transformed from a traditional bank to a tech company, reducing
                            deployment time from months to minutes using DevOps practices.
                          </p>
                          <div className="text-xs text-gray-600">
                            <strong>Results:</strong> 90% reduction in deployment time, 50% reduction in production incidents
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'core-concepts':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="core-concepts" className="text-4xl md:text-5xl font-extrabold mb-8 text-center flex items-center justify-center gap-4 text-slate-800">
                <Lightbulb className="w-12 h-12 text-yellow-500" />
                Core Concepts
              </h1>
              <p className="text-lg text-slate-600 mb-8 text-center">
                Understanding the fundamental principles of DevOps
              </p>

              <div className="max-w-6xl mx-auto">
                <h2 id="core-concepts" className="text-3xl font-bold text-slate-800 mb-6">2. Core Concepts</h2>

                {/* DevOps Culture - Enhanced */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl mb-8 border border-slate-200 shadow-sm">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Users className="w-8 h-8 text-blue-600" />
                    DevOps Culture: The Foundation of Success
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    DevOps culture is the foundation of successful DevOps implementation. It emphasizes collaboration,
                    shared responsibility, and continuous improvement across development and operations teams.
                    <strong className="text-slate-900">Culture eats strategy for breakfast</strong> - without the right culture,
                    even the best tools and processes will fail.
                  </p>

                  <div className="bg-white p-6 rounded-xl mb-6 border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <Brain className="w-6 h-6 text-purple-600" />
                      The Psychology of DevOps Culture
                    </h3>
                    <p className="text-slate-600 mb-4">
                      DevOps culture transformation requires understanding human psychology and organizational behavior.
                      It's about changing mindsets, not just implementing new tools.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-700 mb-2">🤝 Collaboration & Trust</h4>
                          <ul className="text-slate-600 space-y-2 text-sm">
                            <li>• <strong>Psychological Safety:</strong> Team members feel safe to speak up and take risks</li>
                            <li>• <strong>Cross-functional teams:</strong> Diverse skills and perspectives working together</li>
                            <li>• <strong>Shared goals and objectives:</strong> Aligned incentives and common purpose</li>
                            <li>• <strong>Open communication channels:</strong> Transparent information sharing</li>
                            <li>• <strong>Breaking down silos:</strong> Eliminating "us vs them" mentality</li>
                          </ul>
                        </div>
                        <div className="bg-purple-50/50 p-4 rounded-lg border border-purple-100 hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-purple-700 mb-2">🤲 Shared Responsibility</h4>
                          <ul className="text-slate-600 space-y-2 text-sm">
                            <li>• <strong>Collective ownership:</strong> Everyone owns the entire system</li>
                            <li>• <strong>Shared accountability:</strong> Success and failure are team experiences</li>
                            <li>• <strong>Joint problem-solving:</strong> Collaborative troubleshooting</li>
                            <li>• <strong>Mutual support:</strong> Helping each other succeed</li>
                            <li>• <strong>No-blame postmortems:</strong> Learning from failures together</li>
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-yellow-50/50 p-4 rounded-lg border border-yellow-100 hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-yellow-700 mb-2">📈 Continuous Improvement</h4>
                          <ul className="text-slate-600 space-y-2 text-sm">
                            <li>• <strong>Kaizen mindset:</strong> Small, incremental improvements daily</li>
                            <li>• <strong>Regular retrospectives:</strong> Structured reflection and learning</li>
                            <li>• <strong>Experimentation and learning:</strong> Safe-to-fail experiments</li>
                            <li>• <strong>Process optimization:</strong> Continuous refinement of workflows</li>
                            <li>• <strong>Innovation time:</strong> Dedicated time for exploring new ideas</li>
                          </ul>
                        </div>
                        <div className="bg-red-50/50 p-4 rounded-lg border border-red-100 hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-red-700 mb-2">📚 Learning Culture</h4>
                          <ul className="text-slate-600 space-y-2 text-sm">
                            <li>• <strong>Knowledge sharing:</strong> Regular tech talks and documentation</li>
                            <li>• <strong>Cross-training:</strong> Team members learn multiple skills</li>
                            <li>• <strong>Documentation practices:</strong> Living, breathing documentation</li>
                            <li>• <strong>Mentoring programs:</strong> Senior team members guide juniors</li>
                            <li>• <strong>Learning budgets:</strong> Investment in team development</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cultural Transformation Challenges */}
                  <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-red-800 mb-4">🚧 Common Cultural Transformation Challenges</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg border border-red-100 shadow-sm">
                        <h4 className="text-lg font-bold text-red-600 mb-3">⛔ Resistance to Change</h4>
                        <ul className="text-slate-600 space-y-2 text-sm">
                          <li>• <strong>Fear of job loss:</strong> Automation anxiety</li>
                          <li>• <strong>Comfort with status quo:</strong> "This is how we've always done it"</li>
                          <li>• <strong>Lack of understanding:</strong> Unclear benefits of change</li>
                          <li>• <strong>Skill gaps:</strong> Fear of not being able to adapt</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm">
                        <h4 className="text-lg font-bold text-green-600 mb-3">✅ Overcoming Resistance</h4>
                        <ul className="text-slate-600 space-y-2 text-sm">
                          <li>• <strong>Clear communication:</strong> Explain the "why" behind changes</li>
                          <li>• <strong>Training and support:</strong> Provide learning opportunities</li>
                          <li>• <strong>Early wins:</strong> Showcase quick successes</li>
                          <li>• <strong>Leadership commitment:</strong> Visible support from management</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* The Three Ways - Enhanced */}
                <div className="bg-white border border-slate-200 p-8 rounded-2xl mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <RefreshCcw className="w-8 h-8 text-indigo-600" />
                    The Three Ways of DevOps: A Complete Framework
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    The Three Ways, introduced by Gene Kim in "The Phoenix Project," provide a comprehensive framework for understanding DevOps principles and practices.
                    They represent the underlying principles that drive all DevOps transformations and guide organizations toward better software delivery.
                  </p>

                  {/* First Way - Flow */}
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-6">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                      <ChevronsRight className="w-6 h-6 text-blue-600" />
                      The First Way: Flow (Systems Thinking)
                    </h3>
                    <p className="text-lg text-slate-700 mb-4">
                      The First Way focuses on the fast left-to-right flow of work from Development to Operations.
                      It emphasizes systems thinking and optimizing the entire value stream, not just individual components.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                        <h4 className="text-lg font-bold text-blue-600 mb-3">📋 Core Principles</h4>
                        <ul className="text-slate-600 space-y-2 text-sm">
                          <li>• <strong>Visualize work:</strong> Make work visible using Kanban boards</li>
                          <li>• <strong>Reduce batch sizes:</strong> Work in small, manageable chunks</li>
                          <li>• <strong>Build quality in:</strong> Prevent defects from entering the system</li>
                          <li>• <strong>Optimize for fast feedback:</strong> Get feedback quickly and frequently</li>
                          <li>• <strong>Eliminate waste:</strong> Remove non-value-adding activities</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                        <h4 className="text-lg font-bold text-blue-600 mb-3">🛠️ Implementation Practices</h4>
                        <ul className="text-slate-600 space-y-2 text-sm">
                          <li>• <strong>Continuous Integration:</strong> Integrate code frequently</li>
                          <li>• <strong>Continuous Deployment:</strong> Deploy to production frequently</li>
                          <li>• <strong>Infrastructure as Code:</strong> Manage infrastructure programmatically</li>
                          <li>• <strong>Version Control:</strong> Everything in version control</li>
                          <li>• <strong>Automated Testing:</strong> Comprehensive test automation</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-blue-900/10 p-4 rounded-lg mt-4 border border-blue-200">
                      <h4 className="text-lg font-bold text-blue-900 mb-2">🏢 Real-World Example</h4>
                      <p className="text-slate-700 text-sm">
                        A team implementing the First Way might reduce their deployment batch size from monthly releases
                        to daily deployments, implement automated testing to catch issues early, and use infrastructure
                        as code to eliminate manual configuration drift.
                      </p>
                    </div>
                  </div>

                  {/* Second Way - Feedback */}
                  <div className="bg-green-50 border border-green-200 p-6 rounded-xl mb-6">
                    <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-3">
                      <MessageSquare className="w-6 h-6 text-green-600" />
                      The Second Way: Feedback (Amplify Feedback Loops)
                    </h3>
                    <p className="text-lg text-slate-700 mb-4">
                      The Second Way focuses on creating fast and constant feedback from right to left at all stages.
                      It emphasizes shortening and amplifying all feedback loops to enable fast detection and recovery.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm">
                        <h4 className="text-lg font-bold text-green-600 mb-3">💬 Feedback Types</h4>
                        <ul className="text-slate-600 space-y-2 text-sm">
                          <li>• <strong>Development feedback:</strong> Unit tests, code reviews, static analysis</li>
                          <li>• <strong>Build feedback:</strong> Build failures, compilation errors</li>
                          <li>• <strong>Test feedback:</strong> Integration tests, performance tests</li>
                          <li>• <strong>Production feedback:</strong> Monitoring, alerting, user feedback</li>
                          <li>• <strong>Business feedback:</strong> Customer satisfaction, business metrics</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm">
                        <h4 className="text-lg font-bold text-green-600 mb-3">🔊 Amplification Techniques</h4>
                        <ul className="text-slate-600 space-y-2 text-sm">
                          <li>• <strong>Make work visible:</strong> Dashboards, monitoring, alerting</li>
                          <li>• <strong>Fast detection:</strong> Real-time monitoring and alerting</li>
                          <li>• <strong>Fast recovery:</strong> Automated rollbacks, quick fixes</li>
                          <li>• <strong>Shared understanding:</strong> Postmortems, knowledge sharing</li>
                          <li>• <strong>Learning from failures:</strong> Blameless postmortems</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-green-900/10 p-4 rounded-lg mt-4 border border-green-200">
                      <h4 className="text-lg font-bold text-green-900 mb-2">🏢 Real-World Example</h4>
                      <p className="text-slate-700 text-sm">
                        A team implementing the Second Way might set up comprehensive monitoring with immediate alerts,
                        conduct blameless postmortems after incidents, and create automated rollback capabilities
                        that can recover from failures in minutes rather than hours.
                      </p>
                    </div>
                  </div>

                  {/* Third Way - Continual Learning */}
                  <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-3">
                      <FlaskConical className="w-6 h-6 text-purple-600" />
                      The Third Way: Continual Learning (Culture of Experimentation)
                    </h3>
                    <p className="text-lg text-slate-700 mb-4">
                      The Third Way focuses on creating a culture of continual learning and experimentation.
                      It emphasizes taking risks, learning from failures, and constantly improving through experimentation.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
                        <h4 className="text-lg font-bold text-purple-600 mb-3">🧪 Experimentation Culture</h4>
                        <ul className="text-slate-600 space-y-2 text-sm">
                          <li>• <strong>Foster experimentation:</strong> Encourage trying new approaches</li>
                          <li>• <strong>Risk-taking:</strong> Safe-to-fail experiments</li>
                          <li>• <strong>Learning from failures:</strong> Failures as learning opportunities</li>
                          <li>• <strong>Innovation time:</strong> Dedicated time for exploration</li>
                          <li>• <strong>Hypothesis-driven:</strong> Test assumptions with experiments</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
                        <h4 className="text-lg font-bold text-purple-600 mb-3">📖 Knowledge Sharing</h4>
                        <ul className="text-slate-600 space-y-2 text-sm">
                          <li>• <strong>Share knowledge:</strong> Documentation, tech talks</li>
                          <li>• <strong>Cross-training:</strong> Team members learn multiple skills</li>
                          <li>• <strong>Mentoring:</strong> Senior team members guide juniors</li>
                          <li>• <strong>Community of practice:</strong> Regular knowledge sharing sessions</li>
                          <li>• <strong>Invest in development:</strong> Training, conferences, certifications</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-purple-900/10 p-4 rounded-lg mt-4 border border-purple-200">
                      <h4 className="text-lg font-bold text-purple-900 mb-2">🏢 Real-World Example</h4>
                      <p className="text-slate-700 text-sm">
                        A team implementing the Third Way might dedicate 20% of their time to innovation projects,
                        conduct regular "failure parties" to learn from mistakes, and implement chaos engineering
                        practices like Netflix's "Chaos Monkey" to proactively identify weaknesses in their systems.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CI/CD Pipeline */}
                <div className="bg-white border border-slate-200 p-8 rounded-2xl mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-purple-700 mb-6 flex items-center gap-3">
                    <Workflow className="w-8 h-8 text-purple-600" />
                    CI/CD Pipeline
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    Continuous Integration and Continuous Deployment (CI/CD) is the backbone of DevOps automation.
                    It enables rapid, reliable, and repeatable software delivery.
                  </p>

                  <div className="bg-slate-50 p-6 rounded-xl mb-6 border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">CI/CD Pipeline Stages</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-lg font-bold text-blue-700 mb-3">🔄 Continuous Integration</h4>
                        <ul className="text-slate-600 space-y-2 text-sm">
                          <li>• <strong>Source Control:</strong> Git repositories</li>
                          <li>• <strong>Build Automation:</strong> Automated compilation</li>
                          <li>• <strong>Testing:</strong> Unit, integration tests</li>
                          <li>• <strong>Code Quality:</strong> Static analysis</li>
                          <li>• <strong>Artifact Creation:</strong> Build artifacts</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-lg font-bold text-green-700 mb-3">🚀 Continuous Deployment</h4>
                        <ul className="text-slate-600 space-y-2 text-sm">
                          <li>• <strong>Environment Promotion:</strong> Dev → Staging → Prod</li>
                          <li>• <strong>Automated Deployment:</strong> Zero-downtime deployments</li>
                          <li>• <strong>Rollback Capability:</strong> Quick rollback if needed</li>
                          <li>• <strong>Feature Flags:</strong> Controlled feature releases</li>
                          <li>• <strong>Monitoring:</strong> Real-time health checks</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-lg font-bold text-purple-700 mb-3">📊 Continuous Monitoring</h4>
                        <ul className="text-slate-600 space-y-2 text-sm">
                          <li>• <strong>Application Metrics:</strong> Performance monitoring</li>
                          <li>• <strong>Infrastructure Metrics:</strong> System health</li>
                          <li>• <strong>Log Aggregation:</strong> Centralized logging</li>
                          <li>• <strong>Alerting:</strong> Proactive notifications</li>
                          <li>• <strong>Feedback Loop:</strong> Continuous improvement</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Infrastructure as Code */}
                <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
                  <h2 className="text-3xl font-bold text-yellow-700 mb-6 flex items-center gap-3">
                    <Server className="w-8 h-8 text-yellow-600" />
                    Infrastructure as Code (IaC)
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    Infrastructure as Code treats infrastructure provisioning and management as software development.
                    It enables version control, testing, and automation of infrastructure.
                  </p>

                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mb-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">IaC Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-700 mb-2">🤖 Automation</h4>
                          <ul className="text-slate-600 space-y-2 text-sm">
                            <li>• Automated provisioning</li>
                            <li>• Consistent environments</li>
                            <li>• Reduced manual errors</li>
                            <li>• Faster deployments</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-purple-700 mb-2">📜 Version Control</h4>
                          <ul className="text-slate-600 space-y-2 text-sm">
                            <li>• Infrastructure history</li>
                            <li>• Change tracking</li>
                            <li>• Rollback capabilities</li>
                            <li>• Collaboration</li>
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-green-700 mb-2">🧪 Testing</h4>
                          <ul className="text-slate-600 space-y-2 text-sm">
                            <li>• Infrastructure testing</li>
                            <li>• Validation scripts</li>
                            <li>• Compliance checking</li>
                            <li>• Security scanning</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-yellow-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-yellow-700 mb-2">🔄 Reproducibility</h4>
                          <ul className="text-slate-600 space-y-2 text-sm">
                            <li>• Identical environments</li>
                            <li>• Disaster recovery</li>
                            <li>• Environment cloning</li>
                            <li>• Scaling capabilities</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Popular IaC Tools</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
                        <h4 className="text-lg font-bold text-purple-700 mb-3">Terraform</h4>
                        <ul className="text-slate-600 space-y-2 text-sm">
                          <li>• Multi-cloud support</li>
                          <li>• Declarative syntax</li>
                          <li>• State management</li>
                          <li>• Provider ecosystem</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
                        <h4 className="text-lg font-bold text-red-700 mb-3">Ansible</h4>
                        <ul className="text-slate-600 space-y-2 text-sm">
                          <li>• Agentless architecture</li>
                          <li>• YAML-based playbooks</li>
                          <li>• Configuration management</li>
                          <li>• Idempotent operations</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm">
                        <h4 className="text-lg font-bold text-orange-700 mb-3">CloudFormation</h4>
                        <ul className="text-slate-600 space-y-2 text-sm">
                          <li>• AWS-native</li>
                          <li>• JSON/YAML templates</li>
                          <li>• Stack management</li>
                          <li>• Change sets</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'devops-lifecycle':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="devops-lifecycle" className="text-4xl md:text-5xl font-extrabold mb-8 text-center flex items-center justify-center gap-4 text-slate-800">
                <RefreshCcw className="w-12 h-12 text-blue-600" />
                DevOps Lifecycle
              </h1>
              <p className="text-lg text-slate-600 mb-8 text-center">
                Understanding the complete DevOps workflow
              </p>

              <div className="max-w-6xl mx-auto">
                <h2 id="devops-lifecycle" className="text-3xl font-bold text-slate-800 mb-6">3. DevOps Lifecycle</h2>

                <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-2xl border border-slate-200 mb-8 shadow-sm transition-all duration-300">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <Infinity className="w-8 h-8 text-indigo-600" />
                    The Infinite Loop
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-rose-50 border border-rose-200 p-4 rounded-lg text-center flex flex-col items-center shadow-sm">
                      <ClipboardList className="w-10 h-10 text-rose-600 mb-2" />
                      <h4 className="text-rose-800 font-bold mb-2">Plan</h4>
                      <p className="text-slate-600 text-sm">Requirements gathering and project planning</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-center flex flex-col items-center shadow-sm">
                      <Code className="w-10 h-10 text-green-600 mb-2" />
                      <h4 className="text-green-800 font-bold mb-2">Code</h4>
                      <p className="text-slate-600 text-sm">Development and version control</p>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg text-center flex flex-col items-center shadow-sm">
                      <CheckCircle className="w-10 h-10 text-purple-600 mb-2" />
                      <h4 className="text-purple-800 font-bold mb-2">Test</h4>
                      <p className="text-slate-600 text-sm">Automated testing and quality assurance</p>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg text-center flex flex-col items-center shadow-sm">
                      <CloudUpload className="w-10 h-10 text-orange-600 mb-2" />
                      <h4 className="text-orange-800 font-bold mb-2">Deploy</h4>
                      <p className="text-slate-600 text-sm">Automated deployment to production</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'automation':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="automation" className="text-4xl md:text-5xl font-extrabold mb-8 text-center flex items-center justify-center gap-4">
                <Terminal className="w-12 h-12 text-green-500" />
                Automation & Orchestration
              </h1>
              <p className="text-lg text-gray-400 mb-8 text-center">
                Master the art of automating everything and orchestrating complex workflows
              </p>

              <div className="max-w-6xl mx-auto">
                <h2 id="automation" className="text-3xl font-bold text-white mb-6">4. Automation & Orchestration</h2>

                {/* Automation Philosophy */}
                <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Brain className="w-8 h-8 text-blue-600" />
                    The Automation Mindset
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    Automation is not just about tools—it's a mindset that transforms how we approach work.
                    The goal is to automate everything that can be automated, freeing human creativity for higher-value activities.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
                    <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                      <Settings className="w-6 h-6 text-blue-600" />
                      Automation Principles
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-white border border-blue-100 p-4 rounded-lg shadow-sm">
                          <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                            <Workflow className="w-5 h-5" />
                            Automate Everything Possible
                          </h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>Repetitive tasks:</strong> Build, test, deploy, monitor</li>
                            <li>• <strong>Environment provisioning:</strong> Infrastructure setup</li>
                            <li>• <strong>Configuration management:</strong> System configuration</li>
                            <li>• <strong>Backup and recovery:</strong> Data protection</li>
                            <li>• <strong>Scaling operations:</strong> Auto-scaling based on demand</li>
                          </ul>
                        </div>
                        <div className="bg-white border border-green-100 p-4 rounded-lg shadow-sm">
                          <h4 className="text-lg font-bold text-green-600 mb-2 flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            Speed & Reliability
                          </h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>Eliminate human error:</strong> Consistent, repeatable processes</li>
                            <li>• <strong>Faster execution:</strong> Machines work 24/7 without breaks</li>
                            <li>• <strong>Scalable operations:</strong> Handle increased load automatically</li>
                            <li>• <strong>Predictable outcomes:</strong> Same input = same output</li>
                            <li>• <strong>Reduced manual effort:</strong> Focus on creative problem-solving</li>
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white border border-purple-100 p-4 rounded-lg shadow-sm">
                          <h4 className="text-lg font-bold text-purple-600 mb-2 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            Quality & Consistency
                          </h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>Standardized processes:</strong> Everyone follows the same procedures</li>
                            <li>• <strong>Compliance automation:</strong> Ensure regulatory requirements</li>
                            <li>• <strong>Testing automation:</strong> Comprehensive test coverage</li>
                            <li>• <strong>Security scanning:</strong> Automated vulnerability detection</li>
                            <li>• <strong>Code quality gates:</strong> Automated code review checks</li>
                          </ul>
                        </div>
                        <div className="bg-white border border-yellow-100 p-4 rounded-lg shadow-sm">
                          <h4 className="text-lg font-bold text-yellow-600 mb-2 flex items-center gap-2">
                            <Activity className="w-5 h-5" />
                            Monitoring & Feedback
                          </h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>Automated alerting:</strong> Proactive issue detection</li>
                            <li>• <strong>Performance monitoring:</strong> Continuous system health checks</li>
                            <li>• <strong>Log aggregation:</strong> Centralized log management</li>
                            <li>• <strong>Metrics collection:</strong> Business and technical metrics</li>
                            <li>• <strong>Automated reporting:</strong> Regular status and performance reports</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Automation Levels */}
                  <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <Layers className="w-6 h-6 text-green-600" />
                      Automation Maturity Levels
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white border border-green-100 p-4 rounded-lg shadow-sm">
                        <h4 className="text-lg font-bold text-green-600 mb-2 flex items-center gap-2">
                          <Terminal className="w-5 h-5" />
                          Level 1: Basic Automation
                        </h4>
                        <p className="text-slate-700 text-sm mb-2">
                          Automate simple, repetitive tasks like builds and basic deployments.
                          Focus on eliminating manual errors in routine operations.
                        </p>
                        <div className="text-xs text-slate-500">
                          <strong>Examples:</strong> Automated builds, basic deployment scripts, simple monitoring alerts
                        </div>
                      </div>
                      <div className="bg-white border border-blue-100 p-4 rounded-lg shadow-sm">
                        <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                          <GitBranch className="w-5 h-5" />
                          Level 2: Process Automation
                        </h4>
                        <p className="text-slate-700 text-sm mb-2">
                          Automate entire workflows and processes. Implement CI/CD pipelines
                          and infrastructure provisioning automation.
                        </p>
                        <div className="text-xs text-slate-500">
                          <strong>Examples:</strong> Full CI/CD pipelines, infrastructure as code, automated testing suites
                        </div>
                      </div>
                      <div className="bg-white border border-purple-100 p-4 rounded-lg shadow-sm">
                        <h4 className="text-lg font-bold text-purple-600 mb-2 flex items-center gap-2">
                          <Brain className="w-5 h-5" />
                          Level 3: Intelligent Automation
                        </h4>
                        <p className="text-slate-700 text-sm mb-2">
                          Implement self-healing systems, predictive scaling, and AI-driven operations.
                          Systems can adapt and optimize themselves.
                        </p>
                        <div className="text-xs text-slate-500">
                          <strong>Examples:</strong> Self-healing infrastructure, predictive scaling, automated incident response
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Orchestration */}
                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Activity className="w-8 h-8 text-purple-600" />
                    Orchestration: Conducting the Symphony
                  </h2>
                  <p className="text-lg text-slate-900 mb-6">
                    Orchestration is the automated coordination and management of complex systems and workflows.
                    It's like conducting an orchestra—ensuring all components work together harmoniously to achieve the desired outcome.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                        <GitBranch className="w-6 h-6" />
                        Workflow Orchestration
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Pipeline orchestration:</strong> Coordinate CI/CD stages</li>
                        <li>• <strong>Multi-service coordination:</strong> Manage microservices interactions</li>
                        <li>• <strong>Data pipeline orchestration:</strong> ETL/ELT process management</li>
                        <li>• <strong>Cross-platform workflows:</strong> Integrate different systems</li>
                        <li>• <strong>Event-driven orchestration:</strong> React to system events</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                        <Server className="w-6 h-6" />
                        Infrastructure Orchestration
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Container orchestration:</strong> Manage containerized applications</li>
                        <li>• <strong>Service mesh management:</strong> Handle service-to-service communication</li>
                        <li>• <strong>Multi-cloud coordination:</strong> Manage resources across clouds</li>
                        <li>• <strong>Hybrid cloud orchestration:</strong> Bridge on-premises and cloud</li>
                        <li>• <strong>Edge computing orchestration:</strong> Manage distributed edge resources</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'security':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="security" className="text-4xl md:text-5xl font-extrabold mb-8 text-center flex items-center justify-center gap-4">
                <Target className="w-12 h-12 text-red-500" />
                DevSecOps & Security
              </h1>
              <p className="text-lg text-gray-400 mb-8 text-center">
                Integrate security seamlessly into your DevOps practices
              </p>

              <div className="max-w-6xl mx-auto">
                <h2 id="security" className="text-3xl font-bold text-white mb-6">5. DevSecOps & Security</h2>

                {/* DevSecOps Introduction */}
                <div className="bg-white p-8 rounded-2xl border border-red-100 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Shield className="w-8 h-8 text-red-600" />
                    DevSecOps: Security as Code
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    DevSecOps integrates security practices directly into the DevOps workflow, ensuring that security
                    is not an afterthought but a fundamental part of the development and operations process.
                    <strong className="text-slate-900">"Security is everyone's responsibility"</strong> becomes a reality.
                  </p>

                  <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-6">
                    <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                      <Lock className="w-6 h-6" />
                      DevSecOps Principles
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white border border-red-100 p-4 rounded-lg shadow-sm">
                        <h4 className="text-lg font-bold text-red-600 mb-3 flex items-center gap-2">
                          <ChevronsLeft className="w-5 h-5" />
                          Shift Left Security
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Early integration:</strong> Security from day one</li>
                          <li>• <strong>Developer education:</strong> Security awareness training</li>
                          <li>• <strong>Secure coding practices:</strong> Built-in security patterns</li>
                          <li>• <strong>Threat modeling:</strong> Identify risks early</li>
                          <li>• <strong>Security requirements:</strong> Define security criteria upfront</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-blue-100 p-4 rounded-lg shadow-sm">
                        <h4 className="text-lg font-bold text-blue-600 mb-3 flex items-center gap-2">
                          <RefreshCcw className="w-5 h-5" />
                          Continuous Security
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Automated scanning:</strong> Continuous vulnerability assessment</li>
                          <li>• <strong>Security testing:</strong> SAST, DAST, IAST integration</li>
                          <li>• <strong>Compliance checking:</strong> Automated compliance validation</li>
                          <li>• <strong>Policy enforcement:</strong> Security gates in pipelines</li>
                          <li>• <strong>Real-time monitoring:</strong> Continuous security monitoring</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-green-100 p-4 rounded-lg shadow-sm">
                        <h4 className="text-lg font-bold text-green-600 mb-3 flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          Shared Responsibility
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Security champions:</strong> Security advocates in teams</li>
                          <li>• <strong>Cross-team collaboration:</strong> Dev, Ops, and Security alignment</li>
                          <li>• <strong>Security training:</strong> Regular security education</li>
                          <li>• <strong>Incident response:</strong> Collaborative incident handling</li>
                          <li>• <strong>Security metrics:</strong> Shared security KPIs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security in CI/CD */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Siren className="w-8 h-8 text-blue-600" />
                    Security in CI/CD Pipelines
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    Integrating security into CI/CD pipelines ensures that every code change is automatically
                    scanned for vulnerabilities, compliance issues, and security best practices.
                  </p>

                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-6 h-6 text-blue-600" />
                      Security Pipeline Stages
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white border border-blue-100 p-4 rounded-lg shadow-sm">
                        <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                          <GitCommit className="w-5 h-5" />
                          1. Commit Stage Security
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Pre-commit hooks:</strong> Local security checks before commit</li>
                          <li>• <strong>Secret scanning:</strong> Detect hardcoded secrets and credentials</li>
                          <li>• <strong>Code quality gates:</strong> Security-focused code review criteria</li>
                          <li>• <strong>Dependency scanning:</strong> Check for vulnerable dependencies</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-green-100 p-4 rounded-lg shadow-sm">
                        <h4 className="text-lg font-bold text-green-600 mb-2 flex items-center gap-2">
                          <Package className="w-5 h-5" />
                          2. Build Stage Security
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Static Application Security Testing (SAST):</strong> Analyze source code for vulnerabilities</li>
                          <li>• <strong>Software Composition Analysis (SCA):</strong> Scan third-party components</li>
                          <li>• <strong>Container scanning:</strong> Analyze container images for vulnerabilities</li>
                          <li>• <strong>License compliance:</strong> Ensure proper software licensing</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-purple-100 p-4 rounded-lg shadow-sm">
                        <h4 className="text-lg font-bold text-purple-600 mb-2 flex items-center gap-2">
                          <FlaskConical className="w-5 h-5" />
                          3. Test Stage Security
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Dynamic Application Security Testing (DAST):</strong> Test running applications</li>
                          <li>• <strong>Interactive Application Security Testing (IAST):</strong> Real-time vulnerability detection</li>
                          <li>• <strong>Infrastructure testing:</strong> Validate infrastructure security configuration</li>
                          <li>• <strong>Penetration testing:</strong> Automated security penetration tests</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-yellow-100 p-4 rounded-lg shadow-sm">
                        <h4 className="text-lg font-bold text-yellow-600 mb-2 flex items-center gap-2">
                          <Rocket className="w-5 h-5" />
                          4. Deploy Stage Security
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Runtime security:</strong> Monitor applications in production</li>
                          <li>• <strong>Network security:</strong> Validate network configurations</li>
                          <li>• <strong>Access control:</strong> Ensure proper authentication and authorization</li>
                          <li>• <strong>Compliance validation:</strong> Verify regulatory compliance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'cloud-platforms':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="cloud-platforms" className="text-4xl md:text-5xl font-extrabold mb-8 text-center flex items-center justify-center gap-4">
                <Box className="w-12 h-12 text-blue-500" />
                Cloud Platforms & Services
              </h1>
              <p className="text-lg text-gray-400 mb-8 text-center">
                Master cloud-native DevOps practices and platform services
              </p>

              <div className="max-w-6xl mx-auto">
                <h2 id="cloud-platforms" className="text-3xl font-bold text-white mb-6">6. Cloud Platforms & Services</h2>

                {/* Cloud-Native DevOps */}
                <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Server className="w-8 h-8 text-blue-600" />
                    Cloud-Native DevOps
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    Cloud-native DevOps leverages cloud platforms' native services and capabilities to build,
                    deploy, and operate applications at scale. It's about embracing the cloud's elasticity,
                    managed services, and global infrastructure.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
                    <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                      <Globe className="w-6 h-6 text-blue-600" />
                      Major Cloud Platforms
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white border border-blue-100 p-4 rounded-lg shadow-sm">
                        <h4 className="text-lg font-bold text-blue-600 mb-3 flex items-center gap-2">
                          <CloudUpload className="w-5 h-5" />
                          Amazon Web Services (AWS)
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Market leader:</strong> Largest cloud provider globally</li>
                          <li>• <strong>Comprehensive services:</strong> 200+ services available</li>
                          <li>• <strong>Global infrastructure:</strong> 25+ regions worldwide</li>
                          <li>• <strong>Enterprise focus:</strong> Strong enterprise adoption</li>
                          <li>• <strong>Innovation pace:</strong> Rapid service development</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-green-100 p-4 rounded-lg shadow-sm">
                        <h4 className="text-lg font-bold text-green-600 mb-3 flex items-center gap-2">
                          <Box className="w-5 h-5" />
                          Microsoft Azure
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Enterprise integration:</strong> Strong Microsoft ecosystem integration</li>
                          <li>• <strong>Hybrid cloud:</strong> Excellent on-premises connectivity</li>
                          <li>• <strong>AI/ML services:</strong> Advanced artificial intelligence capabilities</li>
                          <li>• <strong>Compliance:</strong> Strong regulatory compliance offerings</li>
                          <li>• <strong>Developer tools:</strong> Comprehensive development platform</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-orange-100 p-4 rounded-lg shadow-sm">
                        <h4 className="text-lg font-bold text-orange-600 mb-3 flex items-center gap-2">
                          <Search className="w-5 h-5" />
                          Google Cloud Platform (GCP)
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Data analytics:</strong> Industry-leading big data services</li>
                          <li>• <strong>Machine learning:</strong> Advanced ML and AI capabilities</li>
                          <li>• <strong>Kubernetes native:</strong> Google created Kubernetes</li>
                          <li>• <strong>Open source friendly:</strong> Strong open source ecosystem</li>
                          <li>• <strong>Pricing model:</strong> Competitive and transparent pricing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cloud Services Categories */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Layers className="w-8 h-8 text-indigo-600" />
                    Cloud Services Categories
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Cpu className="w-6 h-6 text-blue-600" />
                        Compute Services
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Virtual Machines:</strong> EC2, Azure VMs, Compute Engine</li>
                        <li>• <strong>Container Services:</strong> ECS, AKS, GKE</li>
                        <li>• <strong>Serverless:</strong> Lambda, Azure Functions, Cloud Functions</li>
                        <li>• <strong>Batch Processing:</strong> Batch, Azure Batch, Cloud Batch</li>
                        <li>• <strong>Edge Computing:</strong> Lambda@Edge, Azure IoT Edge</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                        <Server className="w-6 h-6 text-purple-700" />
                        Storage & Database
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Object Storage:</strong> S3, Blob Storage, Cloud Storage</li>
                        <li>• <strong>Block Storage:</strong> EBS, Azure Disks, Persistent Disk</li>
                        <li>• <strong>File Systems:</strong> EFS, Azure Files, Filestore</li>
                        <li>• <strong>Databases:</strong> RDS, Azure SQL, Cloud SQL</li>
                        <li>• <strong>NoSQL:</strong> DynamoDB, Cosmos DB, Firestore</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'monitoring-observability':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="monitoring-observability" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
                ?? Monitoring & Observability
              </h1>
              <p className="text-lg text-gray-400 mb-8 text-center">
                Build comprehensive monitoring and observability systems
              </p>

              <div className="max-w-6xl mx-auto">
                <h2 id="monitoring-observability" className="text-3xl font-bold text-slate-900 mb-6">7. Monitoring & Observability</h2>

                {/* Observability vs Monitoring */}
                <div className="bg-white p-8 rounded-2xl border border-green-100 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Activity className="w-8 h-8 text-green-600" />
                    Observability vs Monitoring
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    While monitoring tells you when something is wrong, observability helps you understand why it's wrong.
                    Observability provides deep insights into system behavior through logs, metrics, and traces.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-blue-100 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                        <BarChart className="w-6 h-6" />
                        Traditional Monitoring
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Reactive approach:</strong> Respond to known issues</li>
                        <li>• <strong>Predefined metrics:</strong> Monitor specific KPIs</li>
                        <li>• <strong>Threshold-based alerts:</strong> Alert when metrics exceed limits</li>
                        <li>• <strong>Dashboard-centric:</strong> Focus on visualization</li>
                        <li>• <strong>Known unknowns:</strong> Monitor for expected problems</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-green-100 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                        <ZoomIn className="w-6 h-6" />
                        Modern Observability
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Proactive approach:</strong> Understand system behavior</li>
                        <li>• <strong>Flexible exploration:</strong> Investigate any question</li>
                        <li>• <strong>Context-rich insights:</strong> Understand the "why"</li>
                        <li>• <strong>Data-driven debugging:</strong> Use telemetry for troubleshooting</li>
                        <li>• <strong>Unknown unknowns:</strong> Discover unexpected issues</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Three Pillars of Observability */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Layers className="w-8 h-8 text-blue-600" />
                    Three Pillars of Observability
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                        <BarChart className="w-5 h-5" />
                        Metrics
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Performance metrics:</strong> CPU, memory, disk usage</li>
                        <li>• <strong>Business metrics:</strong> User registrations, sales</li>
                        <li>• <strong>Application metrics:</strong> Response times, error rates</li>
                        <li>• <strong>Infrastructure metrics:</strong> Network, storage performance</li>
                        <li>• <strong>Custom metrics:</strong> Application-specific measurements</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                        <FileJson className="w-5 h-5" />
                        Logs
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Application logs:</strong> Debug, info, error messages</li>
                        <li>• <strong>System logs:</strong> OS and kernel events</li>
                        <li>• <strong>Access logs:</strong> Web server and API requests</li>
                        <li>• <strong>Audit logs:</strong> Security and compliance events</li>
                        <li>• <strong>Structured logging:</strong> JSON-formatted log entries</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-purple-600 mb-4 flex items-center gap-2">
                        <GitBranch className="w-5 h-5" />
                        Traces
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Distributed tracing:</strong> Track requests across services</li>
                        <li>• <strong>Performance analysis:</strong> Identify bottlenecks</li>
                        <li>• <strong>Dependency mapping:</strong> Understand service relationships</li>
                        <li>• <strong>Error propagation:</strong> Track error sources</li>
                        <li>• <strong>Latency analysis:</strong> Measure request processing time</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'tools-technologies':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="tools-technologies" className="text-4xl md:text-5xl font-extrabold mb-8 text-center flex items-center justify-center gap-4">
                <Terminal className="w-12 h-12 text-yellow-500" />
                Tools & Technologies
              </h1>
              <p className="text-lg text-gray-400 mb-8 text-center">
                Master the essential tools that power modern DevOps practices
              </p>

              <div className="max-w-6xl mx-auto">
                <h2 id="tools-technologies" className="text-3xl font-bold text-white mb-6">8. DevOps Tools & Technologies Ecosystem</h2>

                {/* Tools Ecosystem Overview */}
                <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Layers className="w-8 h-8 text-blue-600" />
                    The DevOps Toolchain Landscape
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    The DevOps ecosystem consists of hundreds of tools, each serving specific purposes in the software delivery lifecycle.
                    Understanding which tools to use and when is crucial for building effective DevOps practices.
                    <strong className="text-slate-900">There's no single "best" toolchain—the right tools depend on your specific needs, team skills, and organizational context.</strong>
                  </p>

                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
                    <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                      <Settings className="w-6 h-6 text-blue-600" />
                      Tool Selection Criteria
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white border border-blue-100 p-4 rounded-lg shadow-sm">
                        <h4 className="text-lg font-bold text-blue-600 mb-3 flex items-center gap-2">
                          <Search className="w-5 h-5" />
                          Evaluation Factors
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Team expertise:</strong> Does your team have the skills to use this tool?</li>
                          <li>• <strong>Integration capabilities:</strong> How well does it integrate with existing tools?</li>
                          <li>• <strong>Scalability:</strong> Can it grow with your organization?</li>
                          <li>• <strong>Community support:</strong> Is there active community and documentation?</li>
                          <li>• <strong>Cost:</strong> What's the total cost of ownership (TCO)?</li>
                          <li>• <strong>Vendor lock-in:</strong> How easy is it to migrate away?</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-green-100 p-4 rounded-lg shadow-sm">
                        <h4 className="text-lg font-bold text-green-600 mb-3 flex items-center gap-2">
                          <Zap className="w-5 h-5" />
                          Best Practices
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Start simple:</strong> Begin with essential tools, add complexity gradually</li>
                          <li>• <strong>Standardize where possible:</strong> Reduce tooling sprawl</li>
                          <li>• <strong>Automate everything:</strong> Every tool should support automation</li>
                          <li>• <strong>Measure effectiveness:</strong> Track metrics to validate tool choices</li>
                          <li>• <strong>Regular review:</strong> Continuously evaluate and optimize your toolchain</li>
                          <li>• <strong>Open source first:</strong> Prefer open source for flexibility and cost</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Version Control */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <GitBranch className="w-8 h-8 text-slate-700" />
                    Version Control Systems
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    Version control is the foundation of modern software development. It tracks changes to code,
                    enables collaboration, and provides a historical record of all modifications.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <GitBranch className="w-6 h-6" />
                        Git - The Industry Standard
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm mb-4">
                        <li>• <strong>Distributed architecture:</strong> Every developer has full repository history</li>
                        <li>• <strong>Branching model:</strong> Powerful branching and merging capabilities</li>
                        <li>• <strong>Performance:</strong> Fast operations for local commits and branches</li>
                        <li>• <strong>Data integrity:</strong> SHA-1 checksums ensure data consistency</li>
                        <li>• <strong>Staging area:</strong> Flexible commit composition</li>
                      </ul>
                      <div className="bg-white border border-slate-200 p-4 rounded-lg">
                        <p className="text-xs text-slate-700 mb-2"><strong>Popular Platforms:</strong></p>
                        <ul className="text-slate-700 text-xs space-y-1">
                          <li>• <strong>GitHub:</strong> Largest code hosting platform, excellent collaboration features</li>
                          <li>• <strong>GitLab:</strong> Complete DevOps platform with built-in CI/CD</li>
                          <li>• <strong>Bitbucket:</strong> Integrates well with Atlassian suite (Jira, Confluence)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-purple-600 mb-4 flex items-center gap-2">
                        <Workflow className="w-6 h-6" />
                        Git Workflows
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>GitFlow:</strong> Feature branches, develop, release, hotfix branches</li>
                        <li>• <strong>GitHub Flow:</strong> Simple workflow with feature branches and main</li>
                        <li>• <strong>Trunk-Based Development:</strong> Short-lived feature branches, frequent integration</li>
                        <li>• <strong>Forking Workflow:</strong> Popular in open source projects</li>
                      </ul>
                      <div className="bg-white border border-slate-200 p-4 rounded-lg mt-4">
                        <p className="text-xs text-slate-700 mb-2"><strong>Best Practices:</strong></p>
                        <ul className="text-slate-700 text-xs space-y-1">
                          <li>• Commit early, commit often with meaningful messages</li>
                          <li>• Use feature branches for new work</li>
                          <li>• Pull request reviews before merging</li>
                          <li>• Keep commits atomic and focused</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CI/CD Tools */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Terminal className="w-8 h-8 text-blue-600" />
                    CI/CD Pipeline Tools
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    Continuous Integration and Continuous Deployment tools automate the software delivery pipeline,
                    from code commit to production deployment.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                        <Settings className="w-5 h-5" />
                        Jenkins
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Open source leader:</strong> Most widely used CI/CD tool</li>
                        <li>• <strong>Plugin ecosystem:</strong> 1,800+ plugins available</li>
                        <li>• <strong>Pipeline as Code:</strong> Jenkinsfile for version control</li>
                        <li>• <strong>Distributed builds:</strong> Master-agent architecture</li>
                        <li>• <strong>Flexibility:</strong> Highly customizable workflows</li>
                      </ul>
                      <div className="bg-white border border-blue-100 p-3 rounded mt-3 shadow-sm">
                        <p className="text-xs text-blue-600"><strong>Best For:</strong> Complex enterprise workflows, on-premises deployments</p>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        GitHub Actions
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Native integration:</strong> Built into GitHub</li>
                        <li>• <strong>Marketplace:</strong> Thousands of pre-built actions</li>
                        <li>• <strong>Matrix builds:</strong> Test across multiple platforms</li>
                        <li>• <strong>Container support:</strong> Run jobs in Docker containers</li>
                        <li>• <strong>Free tier:</strong> Generous free minutes for public repos</li>
                      </ul>
                      <div className="bg-white border border-green-100 p-3 rounded mt-3 shadow-sm">
                        <p className="text-xs text-green-600"><strong>Best For:</strong> GitHub-hosted projects, quick setup, modern workflows</p>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-orange-600 mb-4 flex items-center gap-2">
                        <GitBranch className="w-5 h-5" />
                        GitLab CI/CD
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Complete platform:</strong> Source control + CI/CD + monitoring</li>
                        <li>• <strong>Auto DevOps:</strong> Automated pipeline creation</li>
                        <li>• <strong>Kubernetes native:</strong> Excellent container support</li>
                        <li>• <strong>Security scanning:</strong> Built-in security features</li>
                        <li>• <strong>Self-hosted option:</strong> Full control over infrastructure</li>
                      </ul>
                      <div className="bg-white border border-orange-100 p-3 rounded mt-3 shadow-sm">
                        <p className="text-xs text-orange-600"><strong>Best For:</strong> Complete DevOps platform, Kubernetes deployments</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Container Orchestration */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <ZoomIn className="w-8 h-8 text-blue-600" />
                    Containerization & Orchestration
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    Containers package applications with their dependencies, ensuring consistency across environments.
                    Orchestration platforms manage containers at scale.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                        <Box className="w-6 h-6" />
                        Docker - Container Runtime
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm mb-4">
                        <li>• <strong>Lightweight virtualization:</strong> Share host OS kernel</li>
                        <li>• <strong>Dockerfile:</strong> Declarative container image definition</li>
                        <li>• <strong>Image layering:</strong> Efficient storage and distribution</li>
                        <li>• <strong>Docker Compose:</strong> Multi-container applications</li>
                        <li>• <strong>Registry:</strong> Docker Hub for image sharing</li>
                      </ul>
                      <div className="bg-white border border-slate-200 p-4 rounded-lg">
                        <p className="text-xs text-slate-700 mb-2"><strong>Why Docker Revolutionized Development:</strong></p>
                        <ul className="text-slate-700 text-xs space-y-1">
                          <li>• "Works on my machine" problem solved</li>
                          <li>• Consistent environments from dev to production</li>
                          <li>• Fast startup times (seconds vs minutes for VMs)</li>
                          <li>• Efficient resource utilization</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-purple-600 mb-4 flex items-center gap-2">
                        <Settings className="w-6 h-6" />
                        Kubernetes - Orchestration Leader
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm mb-4">
                        <li>• <strong>Automatic scheduling:</strong> Optimal container placement</li>
                        <li>• <strong>Self-healing:</strong> Automatic restart and replacement</li>
                        <li>• <strong>Horizontal scaling:</strong> Scale based on demand</li>
                        <li>• <strong>Service discovery:</strong> Built-in load balancing</li>
                        <li>• <strong>Rolling updates:</strong> Zero-downtime deployments</li>
                      </ul>
                      <div className="bg-white border border-slate-200 p-4 rounded-lg">
                        <p className="text-xs text-slate-700 mb-2"><strong>Kubernetes Distributions:</strong></p>
                        <ul className="text-slate-700 text-xs space-y-1">
                          <li>• <strong>EKS:</strong> Amazon's managed Kubernetes</li>
                          <li>• <strong>GKE:</strong> Google's managed Kubernetes</li>
                          <li>• <strong>AKS:</strong> Azure's managed Kubernetes</li>
                          <li>• <strong>Rancher:</strong> Multi-cluster management</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mt-6">
                    <h4 className="text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
                      <Box className="w-5 h-5" />
                      Real-World Container Example
                    </h4>
                    <p className="text-slate-700 text-sm">
                      A typical microservices application might run 50+ containers across multiple nodes.
                      Kubernetes automatically handles container failures, scales services based on load,
                      performs rolling updates without downtime, and manages secrets and configuration.
                    </p>
                  </div>
                </div>

                {/* Infrastructure as Code */}
                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Layers className="w-8 h-8 text-yellow-500" />
                    Infrastructure as Code (IaC) Tools
                  </h2>
                  <p className="text-lg text-slate-900 mb-6">
                    IaC tools manage infrastructure through code, enabling version control, automation, and reproducibility.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Layers className="w-6 h-6" />
                        Terraform - Multi-Cloud IaC
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>Provider ecosystem:</strong> Support for 3,000+ providers</li>
                            <li>• <strong>Declarative syntax:</strong> HCL (HashiCorp Configuration Language)</li>
                            <li>• <strong>State management:</strong> Track infrastructure state</li>
                            <li>• <strong>Plan and apply:</strong> Preview changes before applying</li>
                            <li>• <strong>Module system:</strong> Reusable infrastructure components</li>
                          </ul>
                        </div>
                        <div className="bg-white border border-slate-200 p-4 rounded-lg">
                          <p className="text-xs text-slate-700 mb-2"><strong>Use Cases:</strong></p>
                          <ul className="text-slate-700 text-xs space-y-1">
                            <li>• Multi-cloud infrastructure provisioning</li>
                            <li>• Kubernetes cluster setup</li>
                            <li>• Network infrastructure management</li>
                            <li>• SaaS resource management (Datadog, PagerDuty)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-purple-600 mb-4 flex items-center gap-2">
                        <FileJson className="w-6 h-6" />
                        Ansible - Configuration Management
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>Agentless:</strong> No agent installation required</li>
                            <li>• <strong>YAML playbooks:</strong> Human-readable configuration</li>
                            <li>• <strong>Idempotent:</strong> Safe to run multiple times</li>
                            <li>• <strong>SSH-based:</strong> Uses existing SSH infrastructure</li>
                            <li>• <strong>Ansible Galaxy:</strong> Community roles and modules</li>
                          </ul>
                        </div>
                        <div className="bg-white border border-slate-200 p-4 rounded-lg">
                          <p className="text-xs text-slate-700 mb-2"><strong>Use Cases:</strong></p>
                          <ul className="text-slate-700 text-xs space-y-1">
                            <li>• Server configuration management</li>
                            <li>• Application deployment automation</li>
                            <li>• Security compliance enforcement</li>
                            <li>• Multi-tier application orchestration</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Monitoring Tools */}
                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Activity className="w-8 h-8 text-green-600" />
                    Monitoring & Observability Tools
                  </h2>
                  <p className="text-lg text-slate-900 mb-6">
                    Monitoring tools provide visibility into system health, performance, and user experience.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-blue-600 mb-4">Prometheus + Grafana Stack</h3>
                      <p className="text-slate-700 text-sm mb-4">
                        <strong>Prometheus:</strong> Time-series database and monitoring system.
                        <strong>Grafana:</strong> Visualization and dashboarding platform.
                      </p>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Pull-based model:</strong> Scrapes metrics from targets</li>
                        <li>• <strong>PromQL:</strong> Powerful query language</li>
                        <li>• <strong>Alertmanager:</strong> Flexible alerting system</li>
                        <li>• <strong>Service discovery:</strong> Automatic target discovery</li>
                        <li>• <strong>Grafana dashboards:</strong> Beautiful visualizations</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-green-600 mb-4">ELK/EFK Stack</h3>
                      <p className="text-slate-700 text-sm mb-4">
                        <strong>Elasticsearch:</strong> Search and analytics engine.
                        <strong>Logstash/Fluentd:</strong> Log collection.
                        <strong>Kibana:</strong> Visualization.
                      </p>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Centralized logging:</strong> Aggregate logs from all sources</li>
                        <li>• <strong>Full-text search:</strong> Search across all log data</li>
                        <li>• <strong>Real-time analysis:</strong> Analyze logs as they arrive</li>
                        <li>• <strong>Kibana dashboards:</strong> Visual log analysis</li>
                        <li>• <strong>Alerting:</strong> Alert on log patterns</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Tool Comparison */}
                <div className="bg-slate-100 p-8 rounded-2xl border border-slate-300 mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Scale className="w-6 h-6 text-slate-600" />
                    Tool Categories & Comparison
                  </h3>
                  <p className="text-lg text-slate-700 mb-4">
                    Understanding tool categories helps in building a comprehensive DevOps toolchain.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                      <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <Tag className="w-5 h-5 text-blue-600" />
                        Tool Categories
                      </h4>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Version Control:</strong> Git, GitHub, GitLab, Bitbucket</li>
                        <li>• <strong>CI/CD:</strong> Jenkins, GitHub Actions, GitLab CI, CircleCI</li>
                        <li>• <strong>Containers:</strong> Docker, Podman, containerd</li>
                        <li>• <strong>Orchestration:</strong> Kubernetes, Docker Swarm, Nomad</li>
                        <li>• <strong>IaC:</strong> Terraform, Ansible, Pulumi, CloudFormation</li>
                        <li>• <strong>Monitoring:</strong> Prometheus, Datadog, New Relic</li>
                        <li>• <strong>Logging:</strong> ELK Stack, Splunk, Loki</li>
                        <li>• <strong>Security:</strong> Vault, SonarQube, Snyk, Aqua Security</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                      <h4 className="text-lg font-bold text-purple-600 mb-3 flex items-center gap-2">
                        <Wrench className="w-5 h-5" />
                        Building Your Toolchain
                      </h4>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Start with basics:</strong> Git + CI/CD + Monitoring</li>
                        <li>• <strong>Add gradually:</strong> Introduce tools as needed</li>
                        <li>• <strong>Standardize:</strong> Consistent tools across teams</li>
                        <li>• <strong>Automate integration:</strong> Tools should work together seamlessly</li>
                        <li>• <strong>Measure success:</strong> Track adoption and effectiveness</li>
                        <li>• <strong>Continuous evaluation:</strong> Review and optimize regularly</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'learning-path':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="learning-path" className="text-4xl md:text-5xl font-extrabold mb-8 text-center flex items-center justify-center gap-4 text-slate-900">
                <BookOpen className="w-12 h-12 text-blue-600" />
                DevOps Learning Path
              </h1>
              <p className="text-lg text-gray-400 mb-8 text-center">
                A comprehensive, structured roadmap to master DevOps from beginner to expert
              </p>

              <div className="max-w-6xl mx-auto">
                <h2 id="learning-path" className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-blue-600" />
                  Your DevOps Learning Journey
                </h2>

                {/* Learning Philosophy */}
                <div className="bg-white p-8 rounded-2xl border border-purple-100 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Brain className="w-8 h-8 text-purple-600" />
                    Learning DevOps: A Mindset Shift
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    DevOps isn't just about learning tools—it's about developing a problem-solving mindset,
                    understanding systems thinking, and embracing continuous learning.
                    <strong className="text-purple-700">The journey is as important as the destination.</strong>
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white border border-blue-100 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-blue-600 mb-3 flex items-center gap-2">
                        <Terminal className="w-5 h-5" />
                        Learn by Doing
                      </h3>
                      <p className="text-slate-700 text-sm">
                        Theory is important, but hands-on practice is essential. Build projects,
                        break things, fix them, and learn from failures.
                      </p>
                    </div>
                    <div className="bg-white border border-green-100 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-green-600 mb-3 flex items-center gap-2">
                        <RefreshCcw className="w-5 h-5" />
                        Iterate and Improve
                      </h3>
                      <p className="text-slate-700 text-sm">
                        Don't aim for perfection initially. Start simple, make it work,
                        then continuously improve and optimize.
                      </p>
                    </div>
                    <div className="bg-white border border-purple-100 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-purple-600 mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Community Learning
                      </h3>
                      <p className="text-slate-700 text-sm">
                        Join DevOps communities, contribute to open source, and learn
                        from others' experiences and mistakes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Foundation Phase */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Terminal className="w-8 h-8 text-blue-600" />
                    Phase 1: Foundation (Months 1-3)
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    Build a strong foundation in the core technologies that underpin DevOps practices.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Terminal className="w-6 h-6 text-blue-600" />
                            Linux Fundamentals
                          </h3>
                          <p className="text-slate-700 mb-4">
                            Master Linux as it powers most DevOps infrastructure. Understanding Linux is non-negotiable for DevOps engineers.
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white border border-blue-100 p-4 rounded-lg shadow-sm">
                              <h4 className="text-sm font-bold text-blue-600 mb-2 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Core Topics
                              </h4>
                              <ul className="text-slate-700 text-xs space-y-1">
                                <li>• Command-line navigation and file operations</li>
                                <li>• File permissions and ownership (chmod, chown)</li>
                                <li>• Process management (ps, top, kill, systemd)</li>
                                <li>• Package management (apt, yum, dnf)</li>
                                <li>• Text processing (grep, sed, awk, cut)</li>
                                <li>• Shell scripting (bash, variables, loops, functions)</li>
                              </ul>
                            </div>
                            <div className="bg-white border border-green-100 p-4 rounded-lg shadow-sm">
                              <h4 className="text-sm font-bold text-green-600 mb-2 flex items-center gap-2">
                                <Code className="w-4 h-4" />
                                Practical Projects
                              </h4>
                              <ul className="text-slate-700 text-xs space-y-1">
                                <li>• Set up a Linux VM (Ubuntu or CentOS)</li>
                                <li>• Write backup scripts using bash</li>
                                <li>• Configure SSH key-based authentication</li>
                                <li>• Set up a web server (Apache/Nginx)</li>
                                <li>• Monitor system resources and logs</li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 bg-blue-50 border border-blue-200 p-3 rounded">
                            <p className="text-xs text-blue-800"><strong>Time Commitment:</strong> 3-4 weeks | <strong>Resources:</strong> Linux Journey, OverTheWire Bandit</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <div className="flex items-start gap-4">
                        <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <GitBranch className="w-6 h-6 text-green-600" />
                            Version Control with Git
                          </h3>
                          <p className="text-slate-700 mb-4">
                            Git is the backbone of modern development workflows. Master it to collaborate effectively and manage code history.
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white border border-blue-100 p-4 rounded-lg shadow-sm">
                              <h4 className="text-sm font-bold text-blue-600 mb-2 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Core Topics
                              </h4>
                              <ul className="text-slate-700 text-xs space-y-1">
                                <li>• Git basics (init, add, commit, push, pull)</li>
                                <li>• Branching strategies (GitFlow, GitHub Flow)</li>
                                <li>• Merging and resolving conflicts</li>
                                <li>• Rebasing and cherry-picking</li>
                                <li>• Git hooks and automation</li>
                                <li>• Pull requests and code reviews</li>
                              </ul>
                            </div>
                            <div className="bg-white border border-green-100 p-4 rounded-lg shadow-sm">
                              <h4 className="text-sm font-bold text-green-600 mb-2 flex items-center gap-2">
                                <Code className="w-4 h-4" />
                                Practical Projects
                              </h4>
                              <ul className="text-slate-700 text-xs space-y-1">
                                <li>• Create and manage GitHub repositories</li>
                                <li>• Contribute to open source projects</li>
                                <li>• Implement GitFlow workflow in a project</li>
                                <li>• Set up pre-commit hooks for code quality</li>
                                <li>• Practice resolving merge conflicts</li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 bg-green-50 border border-green-200 p-3 rounded">
                            <p className="text-xs text-green-800"><strong>Time Commitment:</strong> 2-3 weeks | <strong>Resources:</strong> Pro Git book, Learn Git Branching</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Activity className="w-6 h-6 text-purple-600" />
                            Networking Fundamentals
                          </h3>
                          <p className="text-slate-700 mb-4">
                            Understanding networking is crucial for troubleshooting, security, and building distributed systems.
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white border border-blue-100 p-4 rounded-lg shadow-sm">
                              <h4 className="text-sm font-bold text-blue-600 mb-2 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Core Topics
                              </h4>
                              <ul className="text-slate-700 text-xs space-y-1">
                                <li>• OSI and TCP/IP models</li>
                                <li>• IP addressing and subnetting</li>
                                <li>• DNS, HTTP/HTTPS protocols</li>
                                <li>• Load balancing and reverse proxies</li>
                                <li>• Firewalls and security groups</li>
                                <li>• VPNs and network security</li>
                              </ul>
                            </div>
                            <div className="bg-white border border-green-100 p-4 rounded-lg shadow-sm">
                              <h4 className="text-sm font-bold text-green-600 mb-2 flex items-center gap-2">
                                <Code className="w-4 h-4" />
                                Practical Projects
                              </h4>
                              <ul className="text-slate-700 text-xs space-y-1">
                                <li>• Configure Nginx as reverse proxy</li>
                                <li>• Set up SSL/TLS certificates</li>
                                <li>• Implement basic firewall rules (iptables)</li>
                                <li>• Configure DNS for a domain</li>
                                <li>• Set up VPN server (OpenVPN/WireGuard)</li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 bg-purple-50 border border-purple-200 p-3 rounded">
                            <p className="text-xs text-purple-800"><strong>Time Commitment:</strong> 2-3 weeks | <strong>Resources:</strong> Computer Networking: A Top-Down Approach</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Intermediate Phase */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Zap className="w-8 h-8 text-green-600" />
                    Phase 2: Intermediate Skills (Months 4-6)
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    Dive into core DevOps practices: containerization, CI/CD, and infrastructure automation.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Box className="w-6 h-6 text-blue-600" />
                            Docker & Containerization
                          </h3>
                          <p className="text-slate-700 mb-4">
                            Containers revolutionized application deployment. Master Docker to build, ship, and run applications consistently.
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white border border-blue-100 p-4 rounded-lg shadow-sm">
                              <h4 className="text-sm font-bold text-blue-600 mb-2 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Core Topics
                              </h4>
                              <ul className="text-slate-700 text-xs space-y-1">
                                <li>• Docker architecture and concepts</li>
                                <li>• Writing efficient Dockerfiles</li>
                                <li>• Docker networking and volumes</li>
                                <li>• Docker Compose for multi-container apps</li>
                                <li>• Image optimization and best practices</li>
                                <li>• Container security fundamentals</li>
                              </ul>
                            </div>
                            <div className="bg-white border border-green-100 p-4 rounded-lg shadow-sm">
                              <h4 className="text-sm font-bold text-green-600 mb-2 flex items-center gap-2">
                                <Code className="w-4 h-4" />
                                Practical Projects
                              </h4>
                              <ul className="text-slate-700 text-xs space-y-1">
                                <li>• Containerize a web application</li>
                                <li>• Build multi-stage Docker images</li>
                                <li>• Create Docker Compose stack (app + DB + cache)</li>
                                <li>• Set up private Docker registry</li>
                                <li>• Implement health checks and logging</li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 bg-blue-50 border border-blue-200 p-3 rounded">
                            <p className="text-xs text-blue-800"><strong>Time Commitment:</strong> 3-4 weeks | <strong>Resources:</strong> Docker Deep Dive, Play with Docker</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <div className="flex items-start gap-4">
                        <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">5</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <RefreshCcw className="w-6 h-6 text-green-600" />
                            CI/CD Pipelines
                          </h3>
                          <p className="text-slate-700 mb-4">
                            Automate the software delivery process from code commit to production deployment.
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white border border-blue-100 p-4 rounded-lg shadow-sm">
                              <h4 className="text-sm font-bold text-blue-600 mb-2 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Core Topics
                              </h4>
                              <ul className="text-slate-700 text-xs space-y-1">
                                <li>• CI/CD concepts and benefits</li>
                                <li>• Jenkins architecture and pipelines</li>
                                <li>• GitHub Actions workflows</li>
                                <li>• GitLab CI/CD configuration</li>
                                <li>• Automated testing in pipelines</li>
                                <li>• Deployment strategies (blue-green, canary)</li>
                              </ul>
                            </div>
                            <div className="bg-white border border-green-100 p-4 rounded-lg shadow-sm">
                              <h4 className="text-sm font-bold text-green-600 mb-2 flex items-center gap-2">
                                <Code className="w-4 h-4" />
                                Practical Projects
                              </h4>
                              <ul className="text-slate-700 text-xs space-y-1">
                                <li>• Build Jenkins pipeline with Jenkinsfile</li>
                                <li>• Create GitHub Actions workflow</li>
                                <li>• Implement automated testing (unit, integration)</li>
                                <li>• Set up automated deployments</li>
                                <li>• Integrate security scanning (SAST, DAST)</li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 bg-green-50 border border-green-200 p-3 rounded">
                            <p className="text-xs text-green-800"><strong>Time Commitment:</strong> 4-5 weeks | <strong>Resources:</strong> Jenkins Documentation, GitHub Actions Docs</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">6</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Layers className="w-6 h-6 text-purple-600" />
                            Infrastructure as Code
                          </h3>
                          <p className="text-slate-700 mb-4">
                            Manage infrastructure through code for version control, automation, and reproducibility.
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white border border-blue-100 p-4 rounded-lg shadow-sm">
                              <h4 className="text-sm font-bold text-blue-600 mb-2 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Core Topics
                              </h4>
                              <ul className="text-slate-700 text-xs space-y-1">
                                <li>• IaC principles and benefits</li>
                                <li>• Terraform HCL syntax and providers</li>
                                <li>• Terraform state management</li>
                                <li>• Ansible playbooks and roles</li>
                                <li>• Configuration management best practices</li>
                                <li>• Testing infrastructure code</li>
                              </ul>
                            </div>
                            <div className="bg-white border border-green-100 p-4 rounded-lg shadow-sm">
                              <h4 className="text-sm font-bold text-green-600 mb-2 flex items-center gap-2">
                                <Code className="w-4 h-4" />
                                Practical Projects
                              </h4>
                              <ul className="text-slate-700 text-xs space-y-1">
                                <li>• Provision cloud infrastructure with Terraform</li>
                                <li>• Create reusable Terraform modules</li>
                                <li>• Write Ansible playbooks for server config</li>
                                <li>• Implement infrastructure testing (Terratest)</li>
                                <li>• Set up remote state management</li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 bg-purple-50 border border-purple-200 p-3 rounded">
                            <p className="text-xs text-purple-800"><strong>Time Commitment:</strong> 4-5 weeks | <strong>Resources:</strong> Terraform Up & Running, Ansible for DevOps</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advanced Phase */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Rocket className="w-8 h-8 text-purple-600" />
                    Phase 3: Advanced Topics (Months 7-12)
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    Master advanced DevOps practices including orchestration, observability, and cloud-native technologies.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">7</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Settings className="w-6 h-6 text-orange-600" />
                            Kubernetes & Container Orchestration
                          </h3>
                          <p className="text-slate-700 mb-4">
                            Kubernetes is the de facto standard for container orchestration. Master it to manage applications at scale.
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white border border-blue-100 p-4 rounded-lg shadow-sm">
                              <h4 className="text-sm font-bold text-blue-600 mb-2 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Core Topics
                              </h4>
                              <ul className="text-slate-700 text-xs space-y-1">
                                <li>• Kubernetes architecture (pods, services, deployments)</li>
                                <li>• kubectl commands and operations</li>
                                <li>• ConfigMaps and Secrets management</li>
                                <li>• Helm charts for package management</li>
                                <li>• Ingress controllers and networking</li>
                                <li>• StatefulSets and persistent storage</li>
                              </ul>
                            </div>
                            <div className="bg-white border border-green-100 p-4 rounded-lg shadow-sm">
                              <h4 className="text-sm font-bold text-green-600 mb-2 flex items-center gap-2">
                                <Code className="w-4 h-4" />
                                Practical Projects
                              </h4>
                              <ul className="text-slate-700 text-xs space-y-1">
                                <li>• Deploy application to Kubernetes cluster</li>
                                <li>• Create Helm charts for applications</li>
                                <li>• Implement auto-scaling (HPA, VPA)</li>
                                <li>• Set up Ingress with SSL/TLS</li>
                                <li>• Practice disaster recovery scenarios</li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 bg-orange-50 border border-orange-200 p-3 rounded">
                            <p className="text-xs text-orange-800"><strong>Time Commitment:</strong> 6-8 weeks | <strong>Resources:</strong> Kubernetes in Action, CKA Exam Prep</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <div className="flex items-start gap-4">
                        <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">8</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Activity className="w-6 h-6 text-red-600" />
                            Monitoring & Observability
                          </h3>
                          <p className="text-slate-700 mb-4">
                            Build comprehensive monitoring systems to understand system behavior and troubleshoot issues proactively.
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white border border-blue-100 p-4 rounded-lg shadow-sm">
                              <h4 className="text-sm font-bold text-blue-600 mb-2 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Core Topics
                              </h4>
                              <ul className="text-slate-700 text-xs space-y-1">
                                <li>• Three pillars: Metrics, Logs, Traces</li>
                                <li>• Prometheus and PromQL</li>
                                <li>• Grafana dashboards and alerts</li>
                                <li>• ELK/EFK stack for log management</li>
                                <li>• Distributed tracing (Jaeger, Zipkin)</li>
                                <li>• SLOs, SLIs, and SLAs</li>
                              </ul>
                            </div>
                            <div className="bg-white border border-green-100 p-4 rounded-lg shadow-sm">
                              <h4 className="text-sm font-bold text-green-600 mb-2 flex items-center gap-2">
                                <Code className="w-4 h-4" />
                                Practical Projects
                              </h4>
                              <ul className="text-slate-700 text-xs space-y-1">
                                <li>• Set up Prometheus + Grafana stack</li>
                                <li>• Create custom Grafana dashboards</li>
                                <li>• Implement centralized logging (ELK)</li>
                                <li>• Configure alerting and on-call rotation</li>
                                <li>• Implement distributed tracing</li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 bg-red-50 border border-red-200 p-3 rounded">
                            <p className="text-xs text-red-800"><strong>Time Commitment:</strong> 4-5 weeks | <strong>Resources:</strong> Site Reliability Engineering book, Prometheus Docs</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <div className="flex items-start gap-4">
                        <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">9</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Box className="w-6 h-6 text-yellow-600" />
                            Cloud Platforms & Services
                          </h3>
                          <p className="text-slate-700 mb-4">
                            Master at least one major cloud platform to leverage managed services and build cloud-native applications.
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white border border-blue-100 p-4 rounded-lg shadow-sm">
                              <h4 className="text-sm font-bold text-blue-600 mb-2 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Core Topics
                              </h4>
                              <ul className="text-slate-700 text-xs space-y-1">
                                <li>• Cloud computing fundamentals (IaaS, PaaS, SaaS)</li>
                                <li>• AWS/Azure/GCP core services</li>
                                <li>• Serverless computing (Lambda, Cloud Functions)</li>
                                <li>• Managed databases and storage</li>
                                <li>• Cloud networking and security</li>
                                <li>• Cost optimization strategies</li>
                              </ul>
                            </div>
                            <div className="bg-white border border-green-100 p-4 rounded-lg shadow-sm">
                              <h4 className="text-sm font-bold text-green-600 mb-2 flex items-center gap-2">
                                <Code className="w-4 h-4" />
                                Practical Projects
                              </h4>
                              <ul className="text-slate-700 text-xs space-y-1">
                                <li>• Deploy 3-tier application on cloud</li>
                                <li>• Build serverless application</li>
                                <li>• Implement cloud-native CI/CD</li>
                                <li>• Set up multi-region deployment</li>
                                <li>• Prepare for cloud certification (AWS/Azure/GCP)</li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 bg-yellow-50 border border-yellow-200 p-3 rounded">
                            <p className="text-xs text-yellow-800"><strong>Time Commitment:</strong> 8-10 weeks | <strong>Resources:</strong> AWS Solutions Architect, Azure Administrator</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specialization */}
                <div className="bg-white p-8 rounded-2xl border border-pink-100 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Target className="w-8 h-8 text-purple-600" />
                    Specialization & Career Growth
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    After mastering the fundamentals, consider specializing in areas that align with your interests and career goals.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-blue-100 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                        <Shield className="w-6 h-6" />
                        DevSecOps Engineer
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• Security scanning and compliance</li>
                        <li>• Secrets management (Vault, Secrets Manager)</li>
                        <li>• Security testing (SAST, DAST, SCA)</li>
                        <li>• Container security and hardening</li>
                        <li>• Compliance automation (SOC2, GDPR)</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-green-100 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                        <Layers className="w-6 h-6" />
                        Platform Engineer
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• Internal developer platforms</li>
                        <li>• Service mesh (Istio, Linkerd)</li>
                        <li>• GitOps workflows (ArgoCD, Flux)</li>
                        <li>• Platform automation and self-service</li>
                        <li>• Developer experience optimization</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-purple-100 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-purple-600 mb-4 flex items-center gap-2">
                        <Activity className="w-6 h-6" />
                        Site Reliability Engineer
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• SLO/SLI definition and tracking</li>
                        <li>• Incident management and on-call</li>
                        <li>• Chaos engineering practices</li>
                        <li>• Performance optimization</li>
                        <li>• Capacity planning and forecasting</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-yellow-100 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-yellow-600 mb-4 flex items-center gap-2">
                        <CloudUpload className="w-6 h-6" />
                        Cloud Architect
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• Multi-cloud strategy and architecture</li>
                        <li>• Cloud cost optimization</li>
                        <li>• Disaster recovery and business continuity</li>
                        <li>• Cloud security and compliance</li>
                        <li>• Migration strategies (lift-and-shift, refactor)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Resources & Community */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                    Essential Resources & Community
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        Books
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• The Phoenix Project</li>
                        <li>• The DevOps Handbook</li>
                        <li>• Site Reliability Engineering</li>
                        <li>• Accelerate</li>
                        <li>• Continuous Delivery</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        Certifications
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• AWS Solutions Architect</li>
                        <li>• Kubernetes (CKA, CKAD, CKS)</li>
                        <li>• HashiCorp Terraform Associate</li>
                        <li>• Azure Administrator</li>
                        <li>• Google Cloud Engineer</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-xl font-bold text-purple-600 mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Communities
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• DevOps subreddit</li>
                        <li>• CNCF Slack channels</li>
                        <li>• DevOps Institute</li>
                        <li>• Local DevOps meetups</li>
                        <li>• Cloud Native Computing Foundation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'summary':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="summary" className="text-4xl md:text-5xl font-extrabold mb-8 text-center flex items-center justify-center gap-4 text-slate-900">
                <Check className="w-12 h-12 text-green-600" />
                DevOps Summary & Key Takeaways
              </h1>
              <p className="text-lg text-slate-700 mb-8 text-center">
                Consolidate your DevOps knowledge and prepare for real-world implementation
              </p>

              <div className="max-w-6xl mx-auto">
                <h2 id="summary" className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Brain className="w-8 h-8 text-purple-600" />
                  DevOps Complete Summary
                </h2>

                {/* Core Principles Recap */}
                <div className="bg-white p-8 rounded-2xl border border-purple-100 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Brain className="w-8 h-8 text-purple-600" />
                    Core DevOps Principles
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    DevOps is fundamentally about culture, collaboration, and continuous improvement.
                    These principles form the foundation of successful DevOps implementation.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white border border-blue-100 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-blue-600 mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Cultural Transformation
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• Break down silos between Dev and Ops</li>
                        <li>• Foster collaboration and shared responsibility</li>
                        <li>• Create a learning culture that embraces failure</li>
                        <li>• Implement blameless postmortems</li>
                        <li>• Encourage experimentation and innovation</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-green-100 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-green-600 mb-3 flex items-center gap-2">
                        <Workflow className="w-5 h-5" />
                        Automation First
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• Automate repetitive tasks and processes</li>
                        <li>• Implement CI/CD pipelines for delivery</li>
                        <li>• Use Infrastructure as Code for infrastructure</li>
                        <li>• Automate testing at all levels</li>
                        <li>• Build self-service platforms for teams</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-purple-100 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-purple-600 mb-3 flex items-center gap-2">
                        <BarChart className="w-5 h-5" />
                        Measure Everything
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• Track deployment frequency and lead time</li>
                        <li>• Monitor MTTR (Mean Time To Recovery)</li>
                        <li>• Measure change failure rate</li>
                        <li>• Implement comprehensive observability</li>
                        <li>• Use data to drive continuous improvement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* The Three Ways Summary */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <RefreshCcw className="w-8 h-8 text-blue-600" />
                    The Three Ways - Quick Reference
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                        <ChevronsRight className="w-6 h-6" />
                        1. Flow - Systems Thinking
                      </h3>
                      <p className="text-slate-700 text-sm">
                        <strong>Goal:</strong> Maximize flow of work from Development to Operations.
                        <strong>Key Practices:</strong> Continuous Integration, Continuous Deployment,
                        automated testing, infrastructure as code, small batch sizes.
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
                        <MessageSquare className="w-6 h-6" />
                        2. Feedback - Amplify Feedback Loops
                      </h3>
                      <p className="text-slate-700 text-sm">
                        <strong>Goal:</strong> Create fast feedback from Operations to Development.
                        <strong>Key Practices:</strong> Comprehensive monitoring, alerting, automated rollbacks,
                        blameless postmortems, rapid incident response.
                      </p>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
                        <RefreshCcw className="w-6 h-6" />
                        3. Continual Learning - Culture of Experimentation
                      </h3>
                      <p className="text-slate-700 text-sm">
                        <strong>Goal:</strong> Foster a culture of continuous learning and improvement.
                        <strong>Key Practices:</strong> Regular retrospectives, chaos engineering,
                        knowledge sharing, innovation time, safe-to-fail experiments.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Essential Tools Checklist */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Settings className="w-8 h-8 text-blue-600" />
                    Essential DevOps Toolchain Checklist
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    A comprehensive toolchain covering all aspects of the DevOps lifecycle:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h3 className="text-lg font-bold text-blue-600 mb-3 flex items-center gap-2">
                          <Layers className="w-5 h-5" />
                          Foundation Tools
                        </h3>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Version Control:</strong> Git (GitHub/GitLab/Bitbucket)</li>
                          <li>• <strong>Operating System:</strong> Linux (Ubuntu, CentOS, RHEL)</li>
                          <li>• <strong>Scripting:</strong> Bash, Python</li>
                          <li>• <strong>Networking:</strong> DNS, HTTP/HTTPS, Load Balancers</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h3 className="text-lg font-bold text-green-600 mb-3 flex items-center gap-2">
                          <Rocket className="w-5 h-5" />
                          Build & Deploy
                        </h3>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>CI/CD:</strong> Jenkins, GitHub Actions, GitLab CI</li>
                          <li>• <strong>Build Tools:</strong> Maven, Gradle, npm, Docker</li>
                          <li>• <strong>Artifact Management:</strong> Nexus, Artifactory, Docker Registry</li>
                          <li>• <strong>Deployment:</strong> Blue-Green, Canary, Rolling updates</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h3 className="text-lg font-bold text-purple-600 mb-3 flex items-center gap-2">
                          <Server className="w-5 h-5" />
                          Infrastructure
                        </h3>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Containers:</strong> Docker, Podman</li>
                          <li>• <strong>Orchestration:</strong> Kubernetes, Docker Swarm</li>
                          <li>• <strong>IaC:</strong> Terraform, Ansible, CloudFormation</li>
                          <li>• <strong>Cloud Platforms:</strong> AWS, Azure, GCP</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h3 className="text-lg font-bold text-yellow-600 mb-3 flex items-center gap-2">
                          <Activity className="w-5 h-5" />
                          Observability
                        </h3>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Metrics:</strong> Prometheus, Datadog, CloudWatch</li>
                          <li>• <strong>Logging:</strong> ELK Stack, Splunk, Loki</li>
                          <li>• <strong>Tracing:</strong> Jaeger, Zipkin, OpenTelemetry</li>
                          <li>• <strong>Visualization:</strong> Grafana, Kibana</li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h3 className="text-lg font-bold text-red-600 mb-3 flex items-center gap-2">
                          <Shield className="w-5 h-5" />
                          Security (DevSecOps)
                        </h3>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Secret Management:</strong> HashiCorp Vault, AWS Secrets Manager</li>
                          <li>• <strong>SAST:</strong> SonarQube, Checkmarx</li>
                          <li>• <strong>DAST:</strong> OWASP ZAP, Burp Suite</li>
                          <li>• <strong>Container Security:</strong> Aqua, Twistlock, Snyk</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h3 className="text-lg font-bold text-orange-600 mb-3 flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          Collaboration
                        </h3>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Communication:</strong> Slack, Microsoft Teams</li>
                          <li>• <strong>Issue Tracking:</strong> Jira, GitHub Issues</li>
                          <li>• <strong>Documentation:</strong> Confluence, Notion, Wiki</li>
                          <li>• <strong>Incident Management:</strong> PagerDuty, Opsgenie</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h3 className="text-lg font-bold text-cyan-600 mb-3 flex items-center gap-2">
                          <Zap className="w-5 h-5" />
                          Advanced Topics
                        </h3>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Service Mesh:</strong> Istio, Linkerd, Consul</li>
                          <li>• <strong>GitOps:</strong> ArgoCD, Flux</li>
                          <li>• <strong>Chaos Engineering:</strong> Chaos Monkey, Gremlin</li>
                          <li>• <strong>Policy as Code:</strong> Open Policy Agent, Sentinel</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DevOps Metrics */}
                <div className="bg-white/95 p-8 rounded-2xl border border-green-100 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <BarChart className="w-8 h-8 text-green-600" />
                    DevOps Key Performance Indicators (KPIs)
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    These metrics, known as the "DORA metrics," are the industry standard for measuring DevOps performance:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-green-100 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-green-600 mb-3 flex items-center gap-2">
                        <RefreshCw className="w-5 h-5" />
                        Deployment Frequency
                      </h3>
                      <p className="text-slate-700 text-sm mb-3">
                        How often your organization successfully releases to production.
                      </p>
                      <div className="bg-slate-50 p-4 rounded border border-slate-200">
                        <p className="text-xs text-slate-700 mb-2"><strong>Benchmarks:</strong></p>
                        <ul className="text-slate-700 text-xs space-y-1">
                          <li>• <strong className="text-green-600">Elite:</strong> On-demand (multiple deployments per day)</li>
                          <li>• <strong className="text-blue-600">High:</strong> Between once per day and once per week</li>
                          <li>• <strong className="text-yellow-600">Medium:</strong> Between once per week and once per month</li>
                          <li>• <strong className="text-red-600">Low:</strong> Fewer than once per month</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white border border-blue-100 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-blue-600 mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        Lead Time for Changes
                      </h3>
                      <p className="text-slate-700 text-sm mb-3">
                        Time from code commit to code successfully running in production.
                      </p>
                      <div className="bg-slate-50 p-4 rounded border border-slate-200">
                        <p className="text-xs text-slate-700 mb-2"><strong>Benchmarks:</strong></p>
                        <ul className="text-slate-700 text-xs space-y-1">
                          <li>• <strong className="text-green-600">Elite:</strong> Less than one hour</li>
                          <li>• <strong className="text-blue-600">High:</strong> Between one day and one week</li>
                          <li>• <strong className="text-yellow-600">Medium:</strong> Between one week and one month</li>
                          <li>• <strong className="text-red-600">Low:</strong> More than one month</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white border border-yellow-100 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-yellow-600 mb-3 flex items-center gap-2">
                        <RefreshCcw className="w-5 h-5" />
                        Time to Restore Service (MTTR)
                      </h3>
                      <p className="text-slate-700 text-sm mb-3">
                        How long it takes to restore service when an incident occurs.
                      </p>
                      <div className="bg-slate-50 p-4 rounded border border-slate-200">
                        <p className="text-xs text-slate-700 mb-2"><strong>Benchmarks:</strong></p>
                        <ul className="text-slate-700 text-xs space-y-1">
                          <li>• <strong className="text-green-600">Elite:</strong> Less than one hour</li>
                          <li>• <strong className="text-blue-600">High:</strong> Less than one day</li>
                          <li>• <strong className="text-yellow-600">Medium:</strong> Between one day and one week</li>
                          <li>• <strong className="text-red-600">Low:</strong> More than one week</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white border border-red-100 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-red-600 mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Change Failure Rate
                      </h3>
                      <p className="text-slate-700 text-sm mb-3">
                        Percentage of changes that result in degraded service or require remediation.
                      </p>
                      <div className="bg-slate-50 p-4 rounded border border-slate-200">
                        <p className="text-xs text-slate-700 mb-2"><strong>Benchmarks:</strong></p>
                        <ul className="text-slate-700 text-xs space-y-1">
                          <li>• <strong className="text-green-600">Elite:</strong> 0-15%</li>
                          <li>• <strong className="text-blue-600">High:</strong> 16-30%</li>
                          <li>• <strong className="text-yellow-600">Medium:</strong> 31-45%</li>
                          <li>• <strong className="text-red-600">Low:</strong> 46-60%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Best Practices */}
                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    DevOps Best Practices
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        Do These
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Start small:</strong> Implement DevOps practices incrementally</li>
                        <li>• <strong>Automate incrementally:</strong> Begin with low-hanging fruit</li>
                        <li>• <strong>Measure success:</strong> Track metrics from day one</li>
                        <li>• <strong>Foster culture:</strong> Invest in team development and collaboration</li>
                        <li>• <strong>Learn from failures:</strong> Conduct blameless postmortems</li>
                        <li>• <strong>Document everything:</strong> Make knowledge accessible</li>
                        <li>• <strong>Test thoroughly:</strong> Comprehensive automated testing</li>
                        <li>• <strong>Monitor proactively:</strong> Observability before incidents</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                      <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Avoid These
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Don't skip culture:</strong> Tools alone won't fix organizational issues</li>
                        <li>• <strong>Don't over-engineer:</strong> Start simple, add complexity gradually</li>
                        <li>• <strong>Don't ignore security:</strong> Integrate security from the start</li>
                        <li>• <strong>Don't work in silos:</strong> Break down barriers between teams</li>
                        <li>• <strong>Don't deploy manually:</strong> Automate all deployments</li>
                        <li>• <strong>Don't skip testing:</strong> Testing is not optional</li>
                        <li>• <strong>Don't blame individuals:</strong> Focus on system improvements</li>
                        <li>• <strong>Don't stop learning:</strong> DevOps is a continuous journey</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* DevOps Implementation Roadmap */}
                <div className="bg-white/95 p-8 rounded-2xl border border-purple-100 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Workflow className="w-8 h-8 text-purple-600" />
                    DevOps Implementation Roadmap
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    A practical guide to implementing DevOps in your organization:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-white border border-blue-100 p-6 rounded-xl shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div>
                          <h3 className="text-lg font-bold text-blue-600 mb-2">Assessment & Planning (Month 1)</h3>
                          <p className="text-slate-700 text-sm">
                            Assess current state, identify pain points, and create a transformation roadmap.
                            Get leadership buy-in and form cross-functional teams.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-green-100 p-6 rounded-xl shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div>
                          <h3 className="text-lg font-bold text-green-600 mb-2">Quick Wins (Months 2-3)</h3>
                          <p className="text-slate-700 text-sm">
                            Implement version control, basic CI/CD pipeline, and automated testing for one application.
                            Showcase early success to build momentum.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-purple-100 p-6 rounded-xl shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <div>
                          <h3 className="text-lg font-bold text-purple-600 mb-2">Scale Automation (Months 4-6)</h3>
                          <p className="text-slate-700 text-sm">
                            Expand CI/CD to all applications, implement Infrastructure as Code,
                            and establish comprehensive monitoring and alerting.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-yellow-100 p-6 rounded-xl shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                        <div>
                          <h3 className="text-lg font-bold text-yellow-600 mb-2">Advanced Practices (Months 7-12)</h3>
                          <p className="text-slate-700 text-sm">
                            Implement container orchestration, advanced deployment strategies (blue-green, canary),
                            chaos engineering, and comprehensive observability.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-red-100 p-6 rounded-xl shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
                        <div>
                          <h3 className="text-lg font-bold text-red-600 mb-2">Continuous Optimization (Ongoing)</h3>
                          <p className="text-slate-700 text-sm">
                            Continuously measure, learn, and improve. Foster a culture of experimentation,
                            knowledge sharing, and innovation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Takeaways */}
                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Award className="w-8 h-8 text-yellow-500" />
                    Final Key Takeaways
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-blue-800 mb-3">1. DevOps is Culture, Not Just Tools</h3>
                      <p className="text-slate-700">
                        While tools are important, the cultural transformation is what truly enables DevOps success.
                        Focus on collaboration, shared responsibility, and breaking down silos before investing heavily in tools.
                      </p>
                    </div>

                    <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-green-800 mb-3">2. Automation is Key to Scaling</h3>
                      <p className="text-slate-700">
                        Manual processes don't scale. Automate everything possible: builds, tests, deployments,
                        infrastructure provisioning, and monitoring. Automation enables consistency and speed.
                      </p>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-purple-800 mb-3">3. Continuous Improvement Never Stops</h3>
                      <p className="text-slate-700">
                        DevOps is a journey, not a destination. Continuously measure your performance,
                        learn from failures and successes, and optimize your processes and tools.
                      </p>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-yellow-800 mb-3">4. Security is Everyone's Responsibility</h3>
                      <p className="text-slate-700">
                        Integrate security into every stage of the development lifecycle (DevSecOps).
                        Security should not be a gate at the end but a continuous practice throughout.
                      </p>
                    </div>

                    <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-red-800 mb-3">5. Start Small, Think Big</h3>
                      <p className="text-slate-700">
                        Don't try to transform everything at once. Start with one team, one application, or one process.
                        Show early wins, then scale the successful practices across the organization.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="bg-slate-100 p-8 rounded-2xl border border-slate-300">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                    Your Next Steps
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                      <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        Continue Learning
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• Explore the detailed sections on this website</li>
                        <li>• Read "The Phoenix Project" and "The DevOps Handbook"</li>
                        <li>• Join DevOps communities and forums</li>
                        <li>• Attend DevOps conferences and meetups</li>
                        <li>• Contribute to open source DevOps projects</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm">
                      <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                        <Hammer className="w-5 h-5" />
                        Practice & Build
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• Set up your own CI/CD pipeline</li>
                        <li>• Deploy applications to Kubernetes</li>
                        <li>• Implement Infrastructure as Code projects</li>
                        <li>• Build comprehensive monitoring dashboards</li>
                        <li>• Pursue relevant certifications (AWS, Kubernetes, etc.)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 border border-blue-200 p-6 rounded-xl">
                    <p className="text-lg text-center text-blue-900 font-bold mb-2 flex items-center justify-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      Remember: DevOps is a Journey, Not a Destination
                    </p>
                    <p className="text-center text-blue-800">
                      Keep learning, keep experimenting, and keep improving. The DevOps landscape evolves constantly,
                      and so should you. Welcome to the DevOps community!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      // Containerization Sections
      case 'docker-basics':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="docker-basics" className="text-4xl md:text-5xl font-extrabold mb-8 text-center flex items-center justify-center gap-4 text-slate-900">
                <Box className="w-12 h-12 text-blue-600" />
                Docker Basics
              </h1>
              <p className="text-lg text-slate-700 mb-8 text-center">
                Master containerization fundamentals with Docker - the foundation of modern DevOps
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <Info className="w-8 h-8 text-blue-600" />
                    What is Docker?
                  </h2>
                  <p className="text-slate-700 text-xl mb-6">
                    Docker is a revolutionary containerization platform that packages applications and their dependencies
                    into lightweight, portable containers. Think of it as a standardized shipping container for software
                    - it works the same way regardless of where it's deployed.
                  </p>

                  <div className="bg-white border border-yellow-100 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3 flex items-center gap-2">
                      <Zap className="w-6 h-6" />
                      The Docker Revolution
                    </h3>
                    <p className="text-slate-700 mb-4">
                      Docker transformed software deployment by solving the age-old problem: "It works on my machine."
                      Before Docker, developers faced countless environment inconsistencies. Docker containers ensure
                      your application runs identically on development, testing, and production environments.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                          <Zap className="w-5 h-5" />
                          Why Docker Matters
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Consistency:</strong> Identical environments everywhere</li>
                          <li>• <strong>Isolation:</strong> Apps don't interfere with each other</li>
                          <li>• <strong>Portability:</strong> Run anywhere Docker runs</li>
                          <li>• <strong>Scalability:</strong> Easy horizontal scaling</li>
                          <li>• <strong>Efficiency:</strong> Shared OS kernel, minimal overhead</li>
                          <li>• <strong>CI/CD Integration:</strong> Seamless deployment pipelines</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-600 mb-2 flex items-center gap-2">
                          <Layers className="w-5 h-5" />
                          Core Concepts
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Container:</strong> Running instance of an image</li>
                          <li>• <strong>Image:</strong> Read-only template for containers</li>
                          <li>• <strong>Dockerfile:</strong> Instructions to build images</li>
                          <li>• <strong>Registry:</strong> Repository for Docker images</li>
                          <li>• <strong>Volume:</strong> Persistent data storage</li>
                          <li>• <strong>Network:</strong> Container communication</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Server className="w-8 h-8 text-blue-600" />
                    Docker Architecture Deep Dive
                  </h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <Settings className="w-6 h-6" />
                        Docker Architecture Components
                      </h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                          <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                            <Cpu className="w-5 h-5 text-blue-600" />
                            Docker Daemon
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">Background service managing containers</p>
                          <ul className="text-slate-600 text-xs space-y-1">
                            <li>• Manages container lifecycle</li>
                            <li>• Handles image storage</li>
                            <li>• Manages networking</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                          <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                            <Terminal className="w-5 h-5 text-blue-600" />
                            Docker Client
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">Command-line interface for Docker</p>
                          <ul className="text-slate-600 text-xs space-y-1">
                            <li>• Sends commands to daemon</li>
                            <li>• CLI and API interface</li>
                            <li>• Can connect to remote daemon</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                          <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                            <Database className="w-5 h-5 text-blue-600" />
                            Docker Registry
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">Repository for Docker images</p>
                          <ul className="text-slate-600 text-xs space-y-1">
                            <li>• Docker Hub (public)</li>
                            <li>• Private registries</li>
                            <li>• Image versioning</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
                        <Layout className="w-6 h-6" />
                        Container vs Virtual Machine
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Box className="w-5 h-5 text-green-600" />
                            Containers (Docker)
                          </h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>Lightweight:</strong> Share host OS kernel</li>
                            <li>• <strong>Fast startup:</strong> Seconds to start</li>
                            <li>• <strong>Resource efficient:</strong> Lower memory footprint</li>
                            <li>• <strong>Portable:</strong> Run anywhere</li>
                            <li>• <strong>Microservices ready:</strong> Perfect for modern apps</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Server className="w-5 h-5 text-red-600" />
                            Virtual Machines
                          </h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>Heavy:</strong> Full OS per VM</li>
                            <li>• <strong>Slow startup:</strong> Minutes to boot</li>
                            <li>• <strong>Resource intensive:</strong> High memory usage</li>
                            <li>• <strong>Platform specific:</strong> Hypervisor dependent</li>
                            <li>• <strong>Legacy approach:</strong> Traditional virtualization</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Terminal className="w-8 h-8 text-blue-600" />
                    Essential Docker Commands
                  </h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <ImageIcon className="w-6 h-6" />
                        Image Management
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Pull image from Docker Hub<br />
                              docker pull nginx:latest<br /><br />
                              # Pull specific version<br />
                              docker pull nginx:1.21<br /><br />
                              # List local images<br />
                              docker images<br /><br />
                              # Remove unused images<br />
                              docker image prune
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong className="flex items-center gap-2"><Terminal className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-600 font-mono text-xs">
                                nginx:latest: Pulling from library/nginx<br />
                                Digest: sha256:...<br />
                                Status: Downloaded newer image<br />
                                REPOSITORY TAG IMAGE ID CREATED SIZE<br />
                                nginx latest 605c77e624dd 2 weeks ago 141MB
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Build image from Dockerfile<br />
                              docker build -t myapp:v1.0 .<br /><br />
                              # Build with no cache<br />
                              docker build --no-cache -t myapp .<br /><br />
                              # Tag an image<br />
                              docker tag myapp:v1.0 myapp:latest<br /><br />
                              # Inspect image details<br />
                              docker inspect nginx:latest
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong className="flex items-center gap-2"><Terminal className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-600 font-mono text-xs">
                                Sending build context to Docker daemon<br />
                                Step 1/4 : FROM node:16<br />
                                ---&gt; 7eaa0b3c8f3c<br />
                                Step 2/4 : WORKDIR /app<br />
                                ---&gt; Running in 8f2c2e3d4e5f<br />
                                Successfully built abc123def456<br />
                                Successfully tagged myapp:v1.0
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                        <Play className="w-6 h-6" />
                        Container Operations
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Run container in foreground<br />
                              docker run nginx<br /><br />
                              # Run in background (detached)<br />
                              docker run -d nginx<br /><br />
                              # Run with port mapping<br />
                              docker run -d -p 8080:80 nginx<br /><br />
                              # Run with environment variables<br />
                              docker run -d -e MYSQL_ROOT_PASSWORD=secret mysql
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong className="flex items-center gap-2"><Terminal className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-600 font-mono text-xs">
                                CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES<br />
                                a1b2c3d4e5f6 nginx "/docker-entrypoint..." 2 minutes ago Up 2 minutes 0.0.0.0:8080-&gt;80/tcp nginx-container<br />
                                Container started successfully and accessible on port 8080
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # List running containers<br />
                              docker ps<br /><br />
                              # List all containers (including stopped)<br />
                              docker ps -a<br /><br />
                              # Stop a container<br />
                              docker stop container_id<br /><br />
                              # Remove a container<br />
                              docker rm container_id
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong className="flex items-center gap-2"><Terminal className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-600 font-mono text-xs">
                                CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES<br />
                                a1b2c3d4e5f6 nginx "/docker-entrypoint..." 2 minutes ago Up 2 minutes 0.0.0.0:8080-&gt;80/tcp nginx-container<br />
                                a1b2c3d4e5f6<br />
                                Container stopped and removed successfully
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                        <Search className="w-6 h-6" />
                        Container Inspection & Debugging
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # View container logs<br />
                              docker logs container_id<br /><br />
                              # Follow logs in real-time<br />
                              docker logs -f container_id<br /><br />
                              # Execute command in running container<br />
                              docker exec -it container_id bash<br /><br />
                              # Inspect container details<br />
                              docker inspect container_id
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-purple-100 shadow-sm">
                            <p className="text-sm text-purple-800">
                              <strong className="flex items-center gap-2"><Terminal className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-600 font-mono text-xs">
                                /docker-entrypoint.sh: /docker-entrypoint.d/ is not empty<br />
                                /docker-entrypoint.sh: Looking for shell scripts<br />
                                /docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh<br />
                                /docker-entrypoint.sh: Launching /docker-entrypoint.d/15-local-resolvers.envsh<br />
                                root@a1b2c3d4e5f6:/# ls -la<br />
                                total 72<br />
                                drwxr-xr-x 1 root root 4096 Dec 15 10:30 .
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # View resource usage<br />
                              docker stats container_id<br /><br />
                              # Copy files to/from container<br />
                              docker cp file.txt container_id:/path/<br /><br />
                              # Commit container to image<br />
                              docker commit container_id myimage:v1.0<br /><br />
                              # Save/load images<br />
                              docker save -o nginx.tar nginx:latest
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-orange-100 shadow-sm">
                            <p className="text-sm text-orange-800">
                              <strong className="flex items-center gap-2"><Terminal className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-600 font-mono text-xs">
                                CONTAINER ID NAME CPU % MEM USAGE / LIMIT MEM %<br />
                                a1b2c3d4e5f6 nginx-container 0.00% 2.5MiB / 2GiB 0.12%<br />
                                NET I/O BLOCK I/O PIDS<br />
                                1.23kB / 0B 0B / 0B 2<br />
                                File copied successfully<br />
                                sha256:abc123def456... myimage:v1.0
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <FileCode className="w-8 h-8 text-blue-600" />
                    Dockerfile Fundamentals
                  </h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <FileCode className="w-6 h-6" />
                        Dockerfile Structure & Best Practices
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <FileCode className="w-5 h-5 text-blue-600" />
                            Basic Dockerfile Example
                          </h4>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Use official Node.js runtime<br />
                              FROM node:16-alpine<br /><br />
                              # Set working directory<br />
                              WORKDIR /app<br /><br />
                              # Copy package files<br />
                              COPY package*.json ./<br /><br />
                              # Install dependencies<br />
                              RUN npm install<br /><br />
                              # Copy application code<br />
                              COPY . .<br /><br />
                              # Expose port<br />
                              EXPOSE 3000<br /><br />
                              # Start application<br />
                              CMD ["npm", "start"]
                            </code>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-600" />
                            Dockerfile Best Practices
                          </h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>Use .dockerignore:</strong> Exclude unnecessary files</li>
                            <li>• <strong>Multi-stage builds:</strong> Reduce final image size</li>
                            <li>• <strong>Layer optimization:</strong> Order commands by frequency of change</li>
                            <li>• <strong>Specific versions:</strong> Avoid 'latest' tags</li>
                            <li>• <strong>Non-root user:</strong> Security best practice</li>
                            <li>• <strong>Health checks:</strong> Monitor container health</li>
                          </ul>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong className="flex items-center gap-2"><Check className="w-4 h-4" /> Benefit:</strong> Optimized image with minimal layers and security
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
                        <Zap className="w-6 h-6" />
                        Advanced Dockerfile Techniques
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Layers className="w-5 h-5 text-green-600" />
                            Multi-stage Build
                          </h4>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Build stage<br />
                              FROM node:16 AS builder<br />
                              WORKDIR /app<br />
                              COPY package*.json ./<br />
                              RUN npm install<br />
                              COPY . .<br />
                              RUN npm run build<br /><br />
                              # Production stage<br />
                              FROM nginx:alpine<br />
                              COPY --from=builder /app/dist /usr/share/nginx/html<br />
                              EXPOSE 80<br />
                              CMD ["nginx", "-g", "daemon off;"]
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong className="flex items-center gap-2"><Check className="w-4 h-4" /> Result:</strong> Final image size reduced by 80% compared to single-stage build
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-green-600" />
                            Security-focused Dockerfile
                          </h4>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              FROM node:16-alpine<br /><br />
                              # Create non-root user<br />
                              RUN addgroup -g 1001 -S nodejs<br />
                              RUN adduser -S nextjs -u 1001<br /><br />
                              WORKDIR /app<br />
                              COPY --chown=nextjs:nodejs package*.json ./<br />
                              RUN npm install<br /><br />
                              COPY --chown=nextjs:nodejs . .<br /><br />
                              # Switch to non-root user<br />
                              USER nextjs<br /><br />
                              EXPOSE 3000<br />
                              CMD ["npm", "start"]
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-red-100 shadow-sm">
                            <p className="text-sm text-red-800">
                              <strong className="flex items-center gap-2"><Shield className="w-4 h-4" /> Benefit:</strong> Container runs with non-root user, improving security posture
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <HardDrive className="w-8 h-8 text-blue-600" />
                    Volumes & Data Management
                  </h2>

                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <Database className="w-6 h-6" />
                        Volume Types & Usage
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Create named volume<br />
                              docker volume create myvolume<br /><br />
                              # Use volume in container<br />
                              docker run -v myvolume:/data nginx<br /><br />
                              # Bind mount (host path)<br />
                              docker run -v /host/path:/container/path nginx<br /><br />
                              # List volumes<br />
                              docker volume ls
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong className="flex items-center gap-2"><Terminal className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-600 font-mono text-xs">
                                DRIVER VOLUME NAME<br />
                                local myvolume<br />
                                local another-volume<br />
                                Volume mounted successfully at /data
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Inspect volume details<br />
                              docker volume inspect myvolume<br /><br />
                              # Remove unused volumes<br />
                              docker volume prune<br /><br />
                              # Backup volume data<br />
                              docker run --rm -v myvolume:/data -v $(pwd):/backup alpine tar czf /backup/backup.tar.gz -C /data .
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong className="flex items-center gap-2"><Terminal className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-600 font-mono text-xs">
                                [<br />
                                {'{'}<br />
                                "CreatedAt": "2023-12-15T10:30:00Z",<br />
                                "Driver": "local",<br />
                                "Mountpoint": "/var/lib/docker/volumes/myvolume/_data",<br />
                                "Name": "myvolume"<br />
                                {'}'}<br />
                                ]
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Globe className="w-8 h-8 text-blue-600" />
                    Docker Networking
                  </h2>

                  <div className="space-y-6">
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                        <Network className="w-6 h-6" />
                        Network Types & Configuration
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # List networks<br />
                              docker network ls<br /><br />
                              # Create custom network<br />
                              docker network create mynetwork<br /><br />
                              # Run container on specific network<br />
                              docker run --network mynetwork nginx<br /><br />
                              # Connect container to network<br />
                              docker network connect mynetwork container_id
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-purple-100 shadow-sm">
                            <p className="text-sm text-purple-800">
                              <strong className="flex items-center gap-2"><Terminal className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-600 font-mono text-xs">
                                NETWORK ID NAME DRIVER SCOPE<br />
                                abc123def456 bridge bridge local<br />
                                def456ghi789 mynetwork bridge local<br />
                                Container connected to mynetwork
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Inspect network details<br />
                              docker network inspect mynetwork<br /><br />
                              # Remove network<br />
                              docker network rm mynetwork<br /><br />
                              # Container communication<br />
                              docker run -d --name web nginx<br />
                              docker run -d --name db --link web:web mysql
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong className="flex items-center gap-2"><Info className="w-4 h-4" /> Note:</strong><br />
                              <span className="text-slate-600 font-mono text-xs">
                                Containers can communicate using:<br />
                                • Container names as hostnames<br />
                                • Internal IP addresses<br />
                                • Environment variables (--link)
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'docker-compose':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="docker-compose" className="text-4xl md:text-5xl font-extrabold mb-8 text-center flex items-center justify-center gap-4 text-slate-900">
                <Layers className="w-12 h-12 text-blue-600" />
                Docker Compose
              </h1>
              <p className="text-lg text-slate-700 mb-8 text-center">
                Orchestrate multi-container applications with ease - the DevOps orchestrator's toolkit
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-2xl border border-green-100 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <Info className="w-8 h-8 text-green-600" />
                    What is Docker Compose?
                  </h2>
                  <p className="text-slate-700 text-xl mb-6">
                    Docker Compose is the orchestrator's best friend - a powerful tool for defining and running
                    multi-container Docker applications. It transforms complex container management into simple
                    YAML configurations, making it the cornerstone of modern DevOps workflows.
                  </p>

                  <div className="bg-white border border-yellow-100 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3 flex items-center gap-2">
                      <RefreshCcw className="w-6 h-6" />
                      The Compose Revolution
                    </h3>
                    <p className="text-slate-700 mb-4">
                      Before Docker Compose, managing multi-container applications meant running dozens of
                      individual `docker run` commands. Compose revolutionized this by introducing
                      Infrastructure as Code for container orchestration - defining your entire application
                      stack in a single YAML file.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-green-600 mb-2 flex items-center gap-2">
                          <Zap className="w-5 h-5" />
                          Why Compose Matters in DevOps
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Single Command Deployment:</strong> Start entire application stack</li>
                          <li>• <strong>Environment Consistency:</strong> Identical dev/staging/prod</li>
                          <li>• <strong>Service Orchestration:</strong> Automatic dependency management</li>
                          <li>• <strong>Network Automation:</strong> Service discovery and communication</li>
                          <li>• <strong>Volume Management:</strong> Persistent data across environments</li>
                          <li>• <strong>CI/CD Integration:</strong> Perfect for automated deployments</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                          <Layers className="w-5 h-5" />
                          Core Concepts
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Services:</strong> Container definitions</li>
                          <li>• <strong>Networks:</strong> Container communication</li>
                          <li>• <strong>Volumes:</strong> Data persistence</li>
                          <li>• <strong>Environment Variables:</strong> Configuration management</li>
                          <li>• <strong>Dependencies:</strong> Service startup ordering</li>
                          <li>• <strong>Scaling:</strong> Horizontal container scaling</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Server className="w-8 h-8 text-blue-600" />
                    Docker Compose Architecture
                  </h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <FileCode className="w-6 h-6" />
                        Compose File Structure
                      </h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                          <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                            <Server className="w-5 h-5 text-blue-600" />
                            Services
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">Container definitions with configuration</p>
                          <ul className="text-slate-600 text-xs space-y-1">
                            <li>• Image or build context</li>
                            <li>• Port mappings</li>
                            <li>• Environment variables</li>
                            <li>• Volume mounts</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                          <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                            <Network className="w-5 h-5 text-blue-600" />
                            Networks
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">Container communication setup</p>
                          <ul className="text-slate-600 text-xs space-y-1">
                            <li>• Custom network creation</li>
                            <li>• Service discovery</li>
                            <li>• Network isolation</li>
                            <li>• External networks</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                          <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                            <Database className="w-5 h-5 text-blue-600" />
                            Volumes
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">Persistent data management</p>
                          <ul className="text-slate-600 text-xs space-y-1">
                            <li>• Named volumes</li>
                            <li>• Bind mounts</li>
                            <li>• Volume drivers</li>
                            <li>• External volumes</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
                        <Activity className="w-6 h-6" />
                        Compose vs Kubernetes
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Layers className="w-5 h-5 text-blue-600" />
                            Docker Compose
                          </h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>Simple:</strong> Single-host orchestration</li>
                            <li>• <strong>Development:</strong> Perfect for local dev</li>
                            <li>• <strong>Quick Setup:</strong> Minutes to running</li>
                            <li>• <strong>YAML Config:</strong> Easy to understand</li>
                            <li>• <strong>Limited Scale:</strong> Single machine</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-blue-600" />
                            Kubernetes
                          </h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>Complex:</strong> Multi-host orchestration</li>
                            <li>• <strong>Production:</strong> Enterprise-grade</li>
                            <li>• <strong>Steep Learning:</strong> Complex setup</li>
                            <li>• <strong>YAML + APIs:</strong> More complex</li>
                            <li>• <strong>Massive Scale:</strong> Multi-machine</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Terminal className="w-8 h-8 text-blue-600" />
                    Essential Compose Commands
                  </h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <Play className="w-6 h-6" />
                        Basic Operations
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Start all services<br />
                              docker-compose up<br /><br />
                              # Start in background<br />
                              docker-compose up -d<br /><br />
                              # Build and start<br />
                              docker-compose up --build<br /><br />
                              # Start specific service<br />
                              docker-compose up web
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong className="flex items-center gap-2"><Terminal className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-600 font-mono text-xs">
                                Creating network "myapp_default"<br />
                                Creating volume "myapp_postgres_data"<br />
                                Creating myapp_db_1 ... done<br />
                                Creating myapp_web_1 ... done<br />
                                Attaching to myapp_web_1, myapp_db_1<br />
                                web_1 | Server running on port 3000<br />
                                db_1 | Database initialized
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Stop all services<br />
                              docker-compose down<br /><br />
                              # Stop and remove volumes<br />
                              docker-compose down -v<br /><br />
                              # Stop specific service<br />
                              docker-compose stop web<br /><br />
                              # Restart services<br />
                              docker-compose restart
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong className="flex items-center gap-2"><Terminal className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-600 font-mono text-xs">
                                Stopping myapp_web_1 ... done<br />
                                Stopping myapp_db_1 ... done<br />
                                Removing myapp_web_1 ... done<br />
                                Removing myapp_db_1 ... done<br />
                                Removing network myapp_default<br />
                                Removing volume myapp_postgres_data
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                        <Activity className="w-6 h-6" />
                        Monitoring & Debugging
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # View running services<br />
                              docker-compose ps<br /><br />
                              # View logs<br />
                              docker-compose logs<br /><br />
                              # Follow logs<br />
                              docker-compose logs -f<br /><br />
                              # Logs for specific service<br />
                              docker-compose logs web
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong className="flex items-center gap-2"><Terminal className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-600 font-mono text-xs">
                                Name Command State Ports<br />
                                myapp_db_1 docker-entrypoint.sh postgres Up 0.0.0.0:5432-&gt;5432/tcp<br />
                                myapp_web_1 npm start Up 0.0.0.0:3000-&gt;3000/tcp<br /><br />
                                web_1 | Server started on port 3000<br />
                                db_1 | Database ready for connections
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Execute command in service<br />
                              docker-compose exec web bash<br /><br />
                              # Run one-time command<br />
                              docker-compose run web npm test<br /><br />
                              # Scale services<br />
                              docker-compose up --scale web=3<br /><br />
                              # View resource usage<br />
                              docker-compose top
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-purple-100 shadow-sm">
                            <p className="text-sm text-purple-800">
                              <strong className="flex items-center gap-2"><Terminal className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-600 font-mono text-xs">
                                myapp_web_1<br />
                                UID PID PPID C STIME TTY TIME CMD<br />
                                root 1234 1 0 10:30 ? 00:00:01 npm start<br /><br />
                                Scaling web service to 3 replicas<br />
                                Creating myapp_web_2 ... done<br />
                                Creating myapp_web_3 ... done
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Settings className="w-8 h-8 text-blue-600" />
                    Advanced Compose Configurations
                  </h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <FileText className="w-6 h-6" />
                        Production-Ready Compose File
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <FileCode className="w-5 h-5 text-blue-600" />
                            Complete docker-compose.yml
                          </h4>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              version: '3.8'<br /><br />
                              services:<br />
                              &nbsp;&nbsp;web:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;build:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;context: .<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dockerfile: Dockerfile<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;ports:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "3000:3000"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- NODE_ENV=production<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- DATABASE_URL=postgres://user:pass@db:5432/myapp<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- db<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- redis<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;volumes:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ./uploads:/app/uploads<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- app-network<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;restart: unless-stopped<br /><br />
                              &nbsp;&nbsp;db:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;image: postgres:13-alpine<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- POSTGRES_DB=myapp<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- POSTGRES_USER=user<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- POSTGRES_PASSWORD=password<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;volumes:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- postgres_data:/var/lib/postgresql/data<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- app-network<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;restart: unless-stopped<br /><br />
                              &nbsp;&nbsp;redis:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;image: redis:6-alpine<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;volumes:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- redis_data:/data<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- app-network<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;restart: unless-stopped<br /><br />
                              &nbsp;&nbsp;nginx:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;image: nginx:alpine<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;ports:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "80:80"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;volumes:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ./nginx.conf:/etc/nginx/nginx.conf<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- web<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- app-network<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;restart: unless-stopped<br /><br />
                              volumes:<br />
                              &nbsp;&nbsp;postgres_data:<br />
                              &nbsp;&nbsp;redis_data:<br /><br />
                              networks:<br />
                              &nbsp;&nbsp;app-network:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;driver: bridge
                            </code>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-green-600" />
                            Key Features Explained
                          </h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>Multi-service Architecture:</strong> Web, DB, Redis, Nginx</li>
                            <li>• <strong>Service Dependencies:</strong> Automatic startup ordering</li>
                            <li>• <strong>Environment Variables:</strong> Configuration management</li>
                            <li>• <strong>Volume Persistence:</strong> Data survives container restarts</li>
                            <li>• <strong>Custom Network:</strong> Isolated service communication</li>
                            <li>• <strong>Restart Policies:</strong> Automatic recovery</li>
                            <li>• <strong>Load Balancer:</strong> Nginx reverse proxy</li>
                          </ul>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong className="flex items-center gap-2"><Check className="w-4 h-4" /> Output:</strong> Complete production-ready stack with 4 services, persistent data, and load balancing
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
                        <Layout className="w-6 h-6" />
                        Environment-Specific Configurations
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Code className="w-5 h-5 text-blue-600" />
                            docker-compose.override.yml
                          </h4>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Development overrides<br />
                              version: '3.8'<br /><br />
                              services:<br />
                              &nbsp;&nbsp;web:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;build:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;target: development<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;volumes:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- .:/app<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /app/node_modules<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- NODE_ENV=development<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;command: npm run dev<br /><br />
                              &nbsp;&nbsp;db:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;ports:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "5432:5432"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- POSTGRES_DB=myapp_dev
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong className="flex items-center gap-2"><Check className="w-4 h-4" /> Output:</strong> Development environment with hot reloading and exposed database ports
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-red-600" />
                            docker-compose.prod.yml
                          </h4>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Production configuration<br />
                              version: '3.8'<br /><br />
                              services:<br />
                              &nbsp;&nbsp;web:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;image: myapp:latest<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;deploy:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;replicas: 3<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resources:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limits:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;memory: 512M<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reservations:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;memory: 256M<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- NODE_ENV=production<br /><br />
                              &nbsp;&nbsp;nginx:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;deploy:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;replicas: 2<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;placement:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;constraints:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- node.role == manager
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-red-100 shadow-sm">
                            <p className="text-sm text-red-800">
                              <strong className="flex items-center gap-2"><Check className="w-4 h-4" /> Output:</strong> Production environment with resource limits, scaling, and deployment constraints
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Network className="w-8 h-8 text-blue-600" />
                    Service Communication & Networking
                  </h2>

                  <div className="space-y-6">
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                        <Globe className="w-6 h-6" />
                        Advanced Networking Patterns
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Service discovery example<br />
                              services:<br />
                              &nbsp;&nbsp;web:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;image: nginx<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- frontend<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- backend<br /><br />
                              &nbsp;&nbsp;api:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;image: node:16<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- backend<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- database<br /><br />
                              &nbsp;&nbsp;db:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;image: postgres<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- database<br /><br />
                              networks:<br />
                              &nbsp;&nbsp;frontend:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;driver: bridge<br />
                              &nbsp;&nbsp;backend:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;driver: bridge<br />
                              &nbsp;&nbsp;database:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;driver: bridge<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;internal: true
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-purple-100 shadow-sm">
                            <p className="text-sm text-purple-800">
                              <strong className="flex items-center gap-2"><Check className="w-4 h-4" /> Result:</strong> Isolated network segments with service discovery via container names
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # External network connection<br />
                              services:<br />
                              &nbsp;&nbsp;web:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;image: nginx<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- external-network<br /><br />
                              networks:<br />
                              &nbsp;&nbsp;external-network:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;external: true<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;name: existing-network<br /><br />
                              # Health checks<br />
                              &nbsp;&nbsp;api:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;image: node:16<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;healthcheck:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test: ["CMD", "curl", "-f", "http://localhost:3000/health"]<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;interval: 30s<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timeout: 10s<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;retries: 3<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start_period: 40s
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong className="flex items-center gap-2"><Check className="w-4 h-4" /> Result:</strong> Services connected to external networks with health monitoring
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'container-best-practices':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="container-best-practices" className="text-4xl md:text-5xl font-extrabold mb-8 text-center flex items-center justify-center gap-4 text-slate-900">
                <ShieldCheck className="w-12 h-12 text-blue-600" />
                Container Best Practices
              </h1>
              <p className="text-lg text-slate-700 mb-8 text-center">
                Master production-ready containerization - from security to performance optimization
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-2xl border border-purple-100 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <Brain className="w-8 h-8 text-purple-600" />
                    The Production Container Mindset
                  </h2>
                  <p className="text-slate-700 text-xl mb-6">
                    Container best practices aren't just about following rules - they're about building
                    resilient, secure, and performant systems that can handle real-world production workloads.
                    These practices separate amateur containerization from enterprise-grade DevOps.
                  </p>

                  <div className="bg-white border border-yellow-100 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3 flex items-center gap-2">
                      <Info className="w-6 h-6" />
                      Why Best Practices Matter
                    </h3>
                    <p className="text-slate-700 mb-4">
                      In production environments, containers face real challenges: security threats, performance bottlenecks,
                      resource constraints, and operational complexity. Best practices help you avoid common pitfalls and
                      build systems that are maintainable, scalable, and secure.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-red-600 mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5" />
                          Production Challenges
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Security Vulnerabilities:</strong> Malicious attacks and data breaches</li>
                          <li>• <strong>Performance Issues:</strong> Slow startups and resource waste</li>
                          <li>• <strong>Operational Complexity:</strong> Debugging and monitoring difficulties</li>
                          <li>• <strong>Scalability Problems:</strong> Resource limits and bottlenecks</li>
                          <li>• <strong>Maintenance Overhead:</strong> Updates and configuration drift</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-600 mb-2 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5" />
                          Best Practice Benefits
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Enhanced Security:</strong> Reduced attack surface and vulnerabilities</li>
                          <li>• <strong>Better Performance:</strong> Optimized resource usage and startup times</li>
                          <li>• <strong>Improved Reliability:</strong> Consistent behavior and easy debugging</li>
                          <li>• <strong>Easier Scaling:</strong> Predictable resource requirements</li>
                          <li>• <strong>Lower Maintenance:</strong> Standardized and documented processes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Shield className="w-8 h-8 text-blue-600" />
                    Security Best Practices
                  </h2>

                  <div className="space-y-8">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-2">
                        <Lock className="w-6 h-6" />
                        Container Security Fundamentals
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5 text-red-600" />
                            Image Security
                          </h4>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Use official, minimal base images<br />
                              FROM node:16-alpine<br /><br />
                              # Scan images for vulnerabilities<br />
                              docker scan nginx:latest<br /><br />
                              # Use specific versions, not 'latest'<br />
                              FROM nginx:1.21.6-alpine<br /><br />
                              # Create .dockerignore file<br />
                              echo "node_modules" &gt; .dockerignore<br />
                              echo ".git" &gt;&gt; .dockerignore<br />
                              echo "*.log" &gt;&gt; .dockerignore
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-red-100 shadow-sm">
                            <p className="text-sm text-red-800">
                              <strong className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Result:</strong> Reduced attack surface by 70% with minimal base images and vulnerability scanning
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <User className="w-5 h-5 text-blue-600" />
                            User Security
                          </h4>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Create non-root user<br />
                              RUN addgroup -g 1001 -S nodejs<br />
                              RUN adduser -S nextjs -u 1001<br /><br />
                              # Set ownership<br />
                              COPY --chown=nextjs:nodejs . /app<br /><br />
                              # Switch to non-root user<br />
                              USER nextjs<br /><br />
                              # Run with read-only filesystem<br />
                              docker run --read-only myapp<br /><br />
                              # Drop capabilities<br />
                              docker run --cap-drop=ALL myapp
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Result:</strong> Container runs with minimal privileges, reducing security risks by 85%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                      <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">
                        <Key className="w-6 h-6" />
                        Secrets & Configuration Management
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Lock className="w-5 h-5 text-orange-600" />
                            Secure Secret Handling
                          </h4>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Use Docker secrets (Swarm mode)<br />
                              docker secret create db_password /path/to/secret<br /><br />
                              # Environment variables for secrets<br />
                              docker run -e DB_PASSWORD_FILE=/run/secrets/db_password myapp<br /><br />
                              # External secret management<br />
                              docker run -v /var/secrets:/secrets myapp<br /><br />
                              # Never hardcode secrets<br />
                              # BAD: ENV DB_PASSWORD=secret123<br />
                              # GOOD: Use external secret injection
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-orange-100 shadow-sm">
                            <p className="text-sm text-orange-800">
                              <strong className="flex items-center gap-2"><Check className="w-4 h-4" /> Result:</strong> Secrets properly isolated and not exposed in image layers or logs
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Settings className="w-5 h-5 text-green-600" />
                            Configuration Best Practices
                          </h4>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Use ConfigMaps (Kubernetes)<br />
                              kubectl create configmap app-config --from-file=config.yaml<br /><br />
                              # Environment-specific configs<br />
                              docker run -e NODE_ENV=production myapp<br /><br />
                              # External configuration files<br />
                              docker run -v ./config:/app/config myapp<br /><br />
                              # Validate configuration on startup<br />
                              RUN npm run validate-config
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong className="flex items-center gap-2"><Check className="w-4 h-4" /> Result:</strong> Configuration properly separated from application code and validated
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Zap className="w-8 h-8 text-blue-600" />
                    Performance Optimization
                  </h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <Layers className="w-6 h-6" />
                        Image Optimization Techniques
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <FileCode className="w-5 h-5 text-blue-600" />
                            Multi-stage Builds
                          </h4>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Build stage<br />
                              FROM node:16 AS builder<br />
                              WORKDIR /app<br />
                              COPY package*.json ./<br />
                              RUN npm ci --only=production<br />
                              COPY . .<br />
                              RUN npm run build<br /><br />
                              # Production stage<br />
                              FROM node:16-alpine<br />
                              WORKDIR /app<br />
                              COPY --from=builder /app/dist ./dist<br />
                              COPY --from=builder /app/node_modules ./node_modules<br />
                              COPY --from=builder /app/package*.json ./<br />
                              EXPOSE 3000<br />
                              CMD ["npm", "start"]
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong className="flex items-center gap-2"><Check className="w-4 h-4" /> Result:</strong> Final image size reduced from 1.2GB to 180MB (85% reduction)
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <List className="w-5 h-5 text-green-600" />
                            Layer Optimization
                          </h4>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Combine RUN commands<br />
                              RUN apt-get update && \<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;apt-get install -y curl && \<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;rm -rf /var/lib/apt/lists/*<br /><br />
                              # Copy package files first<br />
                              COPY package*.json ./<br />
                              RUN npm install<br /><br />
                              # Copy source code last<br />
                              COPY . .<br /><br />
                              # Use .dockerignore<br />
                              node_modules<br />
                              .git<br />
                              *.log<br />
                              .env
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong className="flex items-center gap-2"><Check className="w-4 h-4" /> Result:</strong> Faster builds with better cache utilization and smaller context
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
                        <Cpu className="w-6 h-6" />
                        Resource Management
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-blue-600" />
                            Resource Limits
                          </h4>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Set memory limits<br />
                              docker run -m 512m myapp<br /><br />
                              # Set CPU limits<br />
                              docker run --cpus="1.5" myapp<br /><br />
                              # Docker Compose resource limits<br />
                              services:<br />
                              &nbsp;&nbsp;web:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;deploy:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resources:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limits:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;memory: 512M<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cpus: '1.5'
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong className="flex items-center gap-2"><Check className="w-4 h-4" /> Result:</strong> Predictable resource usage preventing system overload
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Heart className="w-5 h-5 text-red-600" />
                            Health Checks
                          </h4>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Dockerfile health check<br />
                              HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \<br />
                              &nbsp;&nbsp;CMD curl -f http://localhost:3000/health || exit 1<br /><br />
                              # Docker Compose health check<br />
                              services:<br />
                              &nbsp;&nbsp;web:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;healthcheck:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test: ["CMD", "curl", "-f", "http://localhost:3000/health"]<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;interval: 30s<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timeout: 10s<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;retries: 3
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-purple-100 shadow-sm">
                            <p className="text-sm text-purple-800">
                              <strong className="flex items-center gap-2"><Check className="w-4 h-4" /> Result:</strong> Automatic health monitoring with 99.9% uptime detection
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Award className="w-8 h-8 text-blue-600" />
                    Operational Excellence
                  </h2>

                  <div className="space-y-8">
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                        <Activity className="w-6 h-6" />
                        Logging & Monitoring
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-purple-600" />
                            Structured Logging
                          </h4>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # JSON structured logs<br />
                              console.log(JSON.stringify({'{'}<br />
                              &nbsp;&nbsp;level: 'info',<br />
                              &nbsp;&nbsp;timestamp: new Date().toISOString(),<br />
                              &nbsp;&nbsp;service: 'web',<br />
                              &nbsp;&nbsp;message: 'Server started',<br />
                              &nbsp;&nbsp;port: 3000<br />
                              {'}'}));<br /><br />
                              # Log to stdout/stderr<br />
                              # stdout: application logs<br />
                              # stderr: error logs<br /><br />
                              # Docker logging driver<br />
                              docker run --log-driver=json-file --log-opt max-size=10m myapp
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-purple-100 shadow-sm">
                            <p className="text-sm text-purple-800">
                              <strong className="flex items-center gap-2"><Check className="w-4 h-4" /> Result:</strong> Structured logs enabling efficient parsing and analysis
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-blue-600" />
                            Monitoring Integration
                          </h4>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Prometheus metrics endpoint<br />
                              app.get('/metrics', (req, res) =&gt; {'{'}<br />
                              &nbsp;&nbsp;res.set('Content-Type', 'text/plain');<br />
                              &nbsp;&nbsp;res.send(prometheusMetrics);<br />
                              {'}'});<br /><br />
                              # Health check endpoint<br />
                              app.get('/health', (req, res) =&gt; {'{'}<br />
                              &nbsp;&nbsp;res.json({'{'} status: 'healthy', timestamp: Date.now() {'}'});<br />
                              {'}'});<br /><br />
                              # Container labels for monitoring<br />
                              docker run --label "service=web" --label "version=v1.2" myapp
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong className="flex items-center gap-2"><Check className="w-4 h-4" /> Result:</strong> Comprehensive monitoring with metrics, health checks, and service discovery
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                      <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">
                        <RefreshCw className="w-6 h-6" />
                        Deployment & Rollback Strategies
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <GitMerge className="w-5 h-5 text-orange-600" />
                            Blue-Green Deployment
                          </h4>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Blue environment (current)<br />
                              docker-compose -f docker-compose.blue.yml up -d<br /><br />
                              # Green environment (new)<br />
                              docker-compose -f docker-compose.green.yml up -d<br /><br />
                              # Switch traffic<br />
                              docker service update --image myapp:v2.0 web<br /><br />
                              # Rollback if needed<br />
                              docker service rollback web<br /><br />
                              # Cleanup old environment<br />
                              docker-compose -f docker-compose.blue.yml down
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-orange-100 shadow-sm">
                            <p className="text-sm text-orange-800">
                              <strong className="flex items-center gap-2"><Check className="w-4 h-4" /> Result:</strong> Zero-downtime deployments with instant rollback capability
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Tag className="w-5 h-5 text-green-600" />
                            Image Tagging Strategy
                          </h4>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Semantic versioning<br />
                              docker tag myapp:latest myapp:1.2.3<br />
                              docker tag myapp:latest myapp:1.2<br />
                              docker tag myapp:latest myapp:1<br /><br />
                              # Git commit tagging<br />
                              docker tag myapp:latest myapp:git-abc123<br /><br />
                              # Environment tags<br />
                              docker tag myapp:latest myapp:staging<br />
                              docker tag myapp:latest myapp:production<br /><br />
                              # Never use 'latest' in production<br />
                              # Always use specific version tags
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong className="flex items-center gap-2"><Check className="w-4 h-4" /> Result:</strong> Clear version tracking and easy rollback to any previous version
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <ClipboardCheck className="w-8 h-8 text-blue-600" />
                    Production Checklist
                  </h2>

                  <div className="space-y-6">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                        <ListChecks className="w-6 h-6" />
                        Pre-Production Checklist
                      </h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm">
                          <h4 className="text-lg font-bold text-green-600 mb-2 flex items-center gap-2">
                            <Shield className="w-5 h-5" />
                            Security
                          </h4>
                          <ul className="text-slate-700 space-y-1 text-sm">
                            <li>• Non-root user configured</li>
                            <li>• Minimal base image used</li>
                            <li>• No secrets in image layers</li>
                            <li>• Vulnerability scan passed</li>
                            <li>• Read-only filesystem enabled</li>
                            <li>• Capabilities dropped</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm">
                          <h4 className="text-lg font-bold text-green-600 mb-2 flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            Performance
                          </h4>
                          <ul className="text-slate-700 space-y-1 text-sm">
                            <li>• Multi-stage build implemented</li>
                            <li>• .dockerignore configured</li>
                            <li>• Resource limits set</li>
                            <li>• Health checks configured</li>
                            <li>• Image size optimized</li>
                            <li>• Build cache optimized</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm">
                          <h4 className="text-lg font-bold text-green-600 mb-2 flex items-center gap-2">
                            <Settings className="w-5 h-5" />
                            Operations
                          </h4>
                          <ul className="text-slate-700 space-y-1 text-sm">
                            <li>• Structured logging enabled</li>
                            <li>• Metrics endpoint configured</li>
                            <li>• Version tags applied</li>
                            <li>• Rollback strategy defined</li>
                            <li>• Monitoring configured</li>
                            <li>• Documentation updated</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <Globe className="w-6 h-6" />
                        Real-World Implementation
                      </h3>
                      <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Complete production-ready Dockerfile<br />
                          FROM node:16-alpine AS builder<br />
                          WORKDIR /app<br />
                          COPY package*.json ./<br />
                          RUN npm ci --only=production<br />
                          COPY . .<br />
                          RUN npm run build<br /><br />
                          FROM node:16-alpine AS production<br />
                          RUN addgroup -g 1001 -S nodejs && \<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;adduser -S nextjs -u 1001<br />
                          WORKDIR /app<br />
                          COPY --from=builder --chown=nextjs:nodejs /app/dist ./dist<br />
                          COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules<br />
                          COPY --from=builder --chown=nextjs:nodejs /app/package*.json ./<br />
                          USER nextjs<br />
                          EXPOSE 3000<br />
                          HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \<br />
                          &nbsp;&nbsp;CMD curl -f http://localhost:3000/health || exit 1<br />
                          CMD ["npm", "start"]
                        </code>
                      </div>
                      <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                        <p className="text-sm text-blue-800">
                          <strong className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Result:</strong> Production-ready container with security, performance, and operational best practices implemented
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      // Kubernetes Sections
      case 'kubernetes-basics':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="kubernetes-basics" className="text-4xl md:text-5xl font-extrabold mb-8 text-center flex items-center justify-center gap-4 text-slate-900">
                <Globe className="w-12 h-12 text-blue-600" />
                Kubernetes Basics - Container Orchestration at Scale
              </h1>
              <p className="text-lg text-slate-700 mb-8 text-center">
                Master container orchestration with Kubernetes - the industry-standard platform
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <Info className="w-8 h-8 text-blue-600" />
                    What is Kubernetes?
                  </h2>
                  <p className="text-slate-700 text-xl mb-6">
                    Kubernetes (K8s) is an open-source container orchestration platform developed by Google that automates
                    the deployment, scaling, and management of containerized applications across clusters of servers. Think
                    of it as an intelligent conductor orchestrating a symphony of containers.
                  </p>

                  <div className="bg-white border border-yellow-100 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3 flex items-center gap-2">
                      <RefreshCcw className="w-6 h-6" />
                      The Kubernetes Revolution
                    </h3>
                    <p className="text-slate-700 mb-4">
                      Kubernetes was born from Google's 15+ years of experience running production workloads (Borg system).
                      In 2014, Google open-sourced Kubernetes, and it quickly became the de facto standard for container
                      orchestration, now managed by the Cloud Native Computing Foundation (CNCF).
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                          <Zap className="w-5 h-5" />
                          Why Kubernetes Matters
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Multi-Cloud Portability:</strong> Run anywhere (AWS, Azure, GCP, on-prem)</li>
                          <li>• <strong>Auto-Scaling:</strong> Scale based on demand automatically</li>
                          <li>• <strong>Self-Healing:</strong> Restart failed containers automatically</li>
                          <li>• <strong>Zero-Downtime Deployments:</strong> Rolling updates with no service interruption</li>
                          <li>• <strong>Service Discovery:</strong> Automatic DNS and load balancing</li>
                          <li>• <strong>Resource Optimization:</strong> Efficient resource utilization</li>
                          <li>• <strong>Declarative Configuration:</strong> Desired state management</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-600 mb-2 flex items-center gap-2">
                          <Settings className="w-5 h-5" />
                          Core Capabilities
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Orchestration:</strong> Manages thousands of containers</li>
                          <li>• <strong>Storage Orchestration:</strong> Auto-mount storage systems</li>
                          <li>• <strong>Secret Management:</strong> Secure sensitive data</li>
                          <li>• <strong>Batch Execution:</strong> Run jobs and cron tasks</li>
                          <li>• <strong>Horizontal Scaling:</strong> Scale with a command</li>
                          <li>• <strong>IPv4/IPv6 Dual-Stack:</strong> Network flexibility</li>
                          <li>• <strong>Extensibility:</strong> Custom resources and operators</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Layers className="w-8 h-8 text-blue-600" />
                    Kubernetes Architecture Deep Dive
                  </h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <Brain className="w-6 h-6" />
                        Control Plane Components (Master Node)
                      </h3>
                      <p className="text-slate-700 mb-4">
                        The control plane makes global decisions about the cluster (scheduling, detecting and responding to events).
                        It's the brain of your Kubernetes cluster.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                            <Server className="w-5 h-5" />
                            kube-apiserver
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">The frontend for Kubernetes control plane</p>
                          <ul className="text-slate-600 text-xs space-y-1">
                            <li>• Exposes Kubernetes API (RESTful)</li>
                            <li>• Validates and configures API objects</li>
                            <li>• Gateway to cluster operations</li>
                            <li>• Horizontally scalable for HA</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                            <Database className="w-5 h-5" />
                            etcd
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">Distributed key-value store for cluster state</p>
                          <ul className="text-slate-600 text-xs space-y-1">
                            <li>• Stores all cluster data</li>
                            <li>• Source of truth for cluster state</li>
                            <li>• Consistent and highly available</li>
                            <li>• Critical for disaster recovery</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            kube-scheduler
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">Assigns Pods to Nodes</p>
                          <ul className="text-slate-600 text-xs space-y-1">
                            <li>• Watches for new Pods with no node</li>
                            <li>• Selects optimal node for each Pod</li>
                            <li>• Considers resource requirements</li>
                            <li>• Honors constraints and affinity rules</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                            <Activity className="w-5 h-5" />
                            kube-controller-manager
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">Runs controller processes</p>
                          <ul className="text-slate-600 text-xs space-y-1">
                            <li>• Node Controller (node health)</li>
                            <li>• Replication Controller (Pod count)</li>
                            <li>• Endpoints Controller (services)</li>
                            <li>• Service Account Controller (auth)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
                        <Server className="w-6 h-6" />
                        Node Components (Worker Nodes)
                      </h3>
                      <p className="text-slate-700 mb-4">
                        Node components run on every node, maintaining running Pods and providing the Kubernetes runtime environment.
                      </p>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-green-600 mb-2 flex items-center gap-2">
                            <Cpu className="w-5 h-5" />
                            kubelet
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">Agent running on each node</p>
                          <ul className="text-slate-600 text-xs space-y-1">
                            <li>• Ensures containers are running</li>
                            <li>• Manages Pod lifecycle</li>
                            <li>• Reports node health to API server</li>
                            <li>• Executes container runtime operations</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-green-600 mb-2 flex items-center gap-2">
                            <Network className="w-5 h-5" />
                            kube-proxy
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">Network proxy on each node</p>
                          <ul className="text-slate-600 text-xs space-y-1">
                            <li>• Maintains network rules</li>
                            <li>• Enables Service abstraction</li>
                            <li>• Handles load balancing</li>
                            <li>• Implements iptables/IPVS rules</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-green-600 mb-2 flex items-center gap-2">
                            <Box className="w-5 h-5" />
                            Container Runtime
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">Software for running containers</p>
                          <ul className="text-slate-600 text-xs space-y-1">
                            <li>• Docker (deprecated)</li>
                            <li>• containerd (recommended)</li>
                            <li>• CRI-O (Red Hat)</li>
                            <li>• Implements CRI interface</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Terminal className="w-8 h-8 text-blue-600" />
                    Essential Kubernetes Commands
                  </h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <Server className="w-6 h-6" />
                        Cluster & Node Management
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Get cluster information<br />
                              kubectl cluster-info<br /><br />
                              # List all nodes<br />
                              kubectl get nodes<br /><br />
                              # Detailed node information<br />
                              kubectl describe node node-name<br /><br />
                              # Get node resource usage<br />
                              kubectl top nodes
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong className="flex items-center gap-2"><Monitor className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-800">
                                Kubernetes control plane is running at https://192.168.1.100:6443<br />
                                CoreDNS is running at https://192.168.1.100:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy<br /><br />
                                NAME STATUS ROLES AGE VERSION<br />
                                master Ready control-plane 15d v1.28.0<br />
                                worker1 Ready &lt;none&gt; 15d v1.28.0<br />
                                worker2 Ready &lt;none&gt; 15d v1.28.0
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Check component status<br />
                              kubectl get componentstatuses<br /><br />
                              # View cluster events<br />
                              kubectl get events<br /><br />
                              # Check API versions<br />
                              kubectl api-versions<br /><br />
                              # View available resources<br />
                              kubectl api-resources
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong className="flex items-center gap-2"><Monitor className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-800">
                                NAME STATUS MESSAGE<br />
                                scheduler Healthy ok<br />
                                controller-manager Healthy ok<br />
                                etcd-0 Healthy {"{'"}health{'"'}:{'"'}true{'"'}{'}'}<br /><br />
                                NAME SHORTNAMES APIVERSION NAMESPACED KIND<br />
                                pods po v1 true Pod<br />
                                services svc v1 true Service
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                        <Box className="w-6 h-6" />
                        Pod Management
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Create a Pod from image<br />
                              kubectl run nginx --image=nginx:latest<br /><br />
                              # List all Pods<br />
                              kubectl get pods<br /><br />
                              # List Pods with more details<br />
                              kubectl get pods -o wide<br /><br />
                              # Watch Pod status in real-time<br />
                              kubectl get pods -w
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong className="flex items-center gap-2"><Monitor className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-800">
                                pod/nginx created<br /><br />
                                NAME READY STATUS RESTARTS AGE<br />
                                nginx 1/1 Running 0 10s<br /><br />
                                NAME READY STATUS IP NODE<br />
                                nginx 1/1 Running 10.244.1.5 worker1
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="bg-slate-900 p-4 rounded-lg shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Describe Pod details<br />
                              kubectl describe pod nginx<br /><br />
                              # Get Pod logs<br />
                              kubectl logs nginx<br /><br />
                              # Follow logs in real-time<br />
                              kubectl logs -f nginx<br /><br />
                              # Execute command in Pod<br />
                              kubectl exec -it nginx -- bash
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong className="flex items-center gap-2"><Monitor className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-800">
                                Name: nginx<br />
                                Namespace: default<br />
                                Node: worker1/192.168.1.101<br />
                                Status: Running<br />
                                IP: 10.244.1.5<br />
                                Controlled By: ReplicaSet/nginx-deployment
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                        <FileText className="w-6 h-6" />
                        Working with YAML Manifests
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <PlusSquare className="w-5 h-5" />
                            Create Pod from YAML
                          </h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # pod.yaml<br />
                              apiVersion: v1<br />
                              kind: Pod<br />
                              metadata:<br />
                              &nbsp;&nbsp;name: nginx-pod<br />
                              &nbsp;&nbsp;labels:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;app: nginx<br />
                              spec:<br />
                              &nbsp;&nbsp;containers:<br />
                              &nbsp;&nbsp;- name: nginx<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;image: nginx:1.21<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;ports:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;- containerPort: 80<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;resources:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limits:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;memory: "128Mi"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cpu: "500m"
                            </code>
                          </div>
                          <div className="bg-slate-900 p-4 rounded shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Apply manifest<br />
                              kubectl apply -f pod.yaml<br /><br />
                              # Delete from manifest<br />
                              kubectl delete -f pod.yaml
                            </code>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Settings className="w-5 h-5" />
                            Manifest Operations
                          </h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Validate YAML without creating<br />
                              kubectl apply -f pod.yaml --dry-run=client<br /><br />
                              # Get YAML of existing resource<br />
                              kubectl get pod nginx -o yaml<br /><br />
                              # Edit resource interactively<br />
                              kubectl edit pod nginx<br /><br />
                              # Replace existing resource<br />
                              kubectl replace -f pod.yaml
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-purple-100 shadow-sm">
                            <p className="text-sm text-purple-800">
                              <strong className="flex items-center gap-2"><Monitor className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-800">
                                pod/nginx-pod created<br />
                                pod/nginx-pod configured (dry run)<br />
                                pod/nginx-pod edited<br />
                                pod/nginx-pod replaced
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                      <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
                        <Bug className="w-6 h-6" />
                        Debugging & Troubleshooting
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-slate-900 p-4 rounded shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Port forward to Pod<br />
                              kubectl port-forward nginx 8080:80<br /><br />
                              # Copy files to/from Pod<br />
                              kubectl cp ./file.txt nginx:/tmp/<br /><br />
                              # Get Pod resource usage<br />
                              kubectl top pod nginx<br /><br />
                              # View previous crashed container logs<br />
                              kubectl logs nginx --previous
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-orange-100 shadow-sm">
                            <p className="text-sm text-orange-800">
                              <strong className="flex items-center gap-2"><Monitor className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-800">
                                Forwarding from 127.0.0.1:8080 -&gt; 80<br />
                                Forwarding from [::1]:8080 -&gt; 80<br /><br />
                                NAME CPU(cores) MEMORY(bytes)<br />
                                nginx 1m 10Mi
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="bg-slate-900 p-4 rounded shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Get events for a Pod<br />
                              kubectl get events --field-selector involvedObject.name=nginx<br /><br />
                              # Run debug container<br />
                              kubectl debug nginx -it --image=busybox<br /><br />
                              # Attach to running container<br />
                              kubectl attach nginx -i<br /><br />
                              # Delete Pod forcefully<br />
                              kubectl delete pod nginx --force --grace-period=0
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-red-100 shadow-sm">
                            <p className="text-sm text-red-800">
                              <strong className="flex items-center gap-2"><Monitor className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-800">
                                LAST SEEN TYPE REASON MESSAGE<br />
                                30s Normal Scheduled Successfully assigned<br />
                                29s Normal Pulling Pulling image<br />
                                25s Normal Pulled Successfully pulled<br />
                                25s Normal Created Created container
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Hexagon className="w-8 h-8 text-blue-600" />
                    Kubernetes Core Objects
                  </h2>

                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <Info className="w-6 h-6" />
                        Understanding Kubernetes Objects
                      </h3>
                      <p className="text-slate-700 mb-4">
                        Kubernetes objects are persistent entities that represent the state of your cluster. They describe
                        what containerized applications are running, on which nodes, and the policies around those applications.
                      </p>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                            <Box className="w-5 h-5" />
                            Pods
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">Smallest deployable unit in K8s</p>
                          <ul className="text-slate-800 text-xs space-y-1">
                            <li>• Group of one or more containers</li>
                            <li>• Share network and storage</li>
                            <li>• Co-located and co-scheduled</li>
                            <li>• Ephemeral by nature</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                            <Copy className="w-5 h-5" />
                            ReplicaSets
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">Maintains desired Pod count</p>
                          <ul className="text-slate-800 text-xs space-y-1">
                            <li>• Ensures specified Pod replicas</li>
                            <li>• Self-healing capabilities</li>
                            <li>• Selector-based matching</li>
                            <li>• Usually managed by Deployments</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                            <Rocket className="w-5 h-5" />
                            Deployments
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">Declarative Pod management</p>
                          <ul className="text-slate-800 text-xs space-y-1">
                            <li>• Rolling updates and rollbacks</li>
                            <li>• Manages ReplicaSets</li>
                            <li>• Versioned deployments</li>
                            <li>• Most common workload type</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                            <Globe className="w-5 h-5" />
                            Services
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">Stable network endpoint</p>
                          <ul className="text-slate-800 text-xs space-y-1">
                            <li>• Load balancing across Pods</li>
                            <li>• ClusterIP (internal)</li>
                            <li>• NodePort (external access)</li>
                            <li>• LoadBalancer (cloud integration)</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                            <Settings className="w-5 h-5" />
                            ConfigMaps
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">Configuration data storage</p>
                          <ul className="text-slate-800 text-xs space-y-1">
                            <li>• Non-confidential key-value pairs</li>
                            <li>• Environment variables</li>
                            <li>• Configuration files</li>
                            <li>• Command-line arguments</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                            <Lock className="w-5 h-5" />
                            Secrets
                          </h4>
                          <p className="text-slate-700 text-sm mb-2">Sensitive data storage</p>
                          <ul className="text-slate-800 text-xs space-y-1">
                            <li>• Passwords, tokens, keys</li>
                            <li>• Base64 encoded</li>
                            <li>• Mounted as volumes or env vars</li>
                            <li>• Encrypted at rest (optional)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Award className="w-8 h-8 text-green-600" />
                    Kubernetes Best Practices
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        Do's
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Use Namespaces:</strong> Organize resources logically</li>
                        <li>• <strong>Set Resource Limits:</strong> Prevent resource starvation</li>
                        <li>• <strong>Use Liveness/Readiness Probes:</strong> Enable self-healing</li>
                        <li>• <strong>Implement RBAC:</strong> Secure cluster access</li>
                        <li>• <strong>Use Labels & Selectors:</strong> Organize and query resources</li>
                        <li>• <strong>Version Control Manifests:</strong> Track infrastructure changes</li>
                        <li>• <strong>Use ConfigMaps/Secrets:</strong> Externalize configuration</li>
                        <li>• <strong>Implement Network Policies:</strong> Control Pod communication</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
                        <XCircle className="w-5 h-5" />
                        Don'ts
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Don't Run as Root:</strong> Security vulnerability</li>
                        <li>• <strong>Don't Use 'latest' Tag:</strong> Unpredictable behavior</li>
                        <li>• <strong>Don't Ignore Resource Limits:</strong> Causes cluster instability</li>
                        <li>• <strong>Don't Store Secrets in Code:</strong> Security risk</li>
                        <li>• <strong>Don't Skip Health Checks:</strong> Reduces reliability</li>
                        <li>• <strong>Don't Use Naked Pods:</strong> Use Deployments instead</li>
                        <li>• <strong>Don't Ignore Logging:</strong> Makes troubleshooting difficult</li>
                        <li>• <strong>Don't Hardcode IPs:</strong> Use Service DNS names</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'k8s-deployments':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="k8s-deployments" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-900 flex items-center justify-center gap-4">
                <Rocket className="w-12 h-12 text-blue-600" />
                Kubernetes Deployments - Zero-Downtime Application Management
              </h1>
              <p className="text-lg text-slate-700 mb-8 text-center">
                Master declarative application deployment and management with Kubernetes Deployments
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                    <Info className="w-8 h-8" />
                    What are Kubernetes Deployments?
                  </h2>
                  <p className="text-slate-700 text-xl mb-6">
                    Deployments are the recommended way to deploy stateless applications in Kubernetes. They provide declarative
                    updates for Pods and ReplicaSets, enabling zero-downtime deployments, easy rollbacks, and automated scaling.
                    Think of them as the autopilot for your application lifecycle.
                  </p>

                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Why Deployments Are Game-Changers
                    </h3>
                    <p className="text-slate-700 mb-4">
                      Before Deployments, managing application updates required manual coordination and often resulted in downtime.
                      Deployments revolutionized this by introducing declarative, automated deployment strategies.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Deployment Benefits
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Rolling Updates:</strong> Update Pods incrementally with zero downtime</li>
                          <li>• <strong>Rollback Capability:</strong> Instantly revert to previous versions</li>
                          <li>• <strong>Scaling:</strong> Easily scale replicas up or down</li>
                          <li>• <strong>Self-Healing:</strong> Automatically replace failed Pods</li>
                          <li>• <strong>Version Control:</strong> Track deployment history and revisions</li>
                          <li>• <strong>Declarative:</strong> Describe desired state, Kubernetes handles the rest</li>
                          <li>• <strong>Pause/Resume:</strong> Control update flow precisely</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-600 mb-2 flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          Use Cases
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Web Applications:</strong> Stateless frontend and backend services</li>
                          <li>• <strong>Microservices:</strong> Independently deployable services</li>
                          <li>• <strong>API Servers:</strong> RESTful and GraphQL APIs</li>
                          <li>• <strong>Workers:</strong> Background job processors</li>
                          <li>• <strong>Cron Jobs:</strong> Scheduled tasks with Job resources</li>
                          <li>• <strong>CI/CD Pipelines:</strong> Automated deployment workflows</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Rocket className="w-8 h-8 text-blue-600" />
                    Creating and Managing Deployments
                  </h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <FilePlus className="w-6 h-6" />
                        Basic Deployment Creation
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <FileCode className="w-5 h-5" />
                            deployment.yaml
                          </h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              apiVersion: apps/v1<br />
                              kind: Deployment<br />
                              metadata:<br />
                              &nbsp;&nbsp;name: nginx-deployment<br />
                              &nbsp;&nbsp;labels:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;app: nginx<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;environment: production<br />
                              spec:<br />
                              &nbsp;&nbsp;replicas: 3<br />
                              &nbsp;&nbsp;selector:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;matchLabels:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;app: nginx<br />
                              &nbsp;&nbsp;template:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;metadata:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;labels:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;app: nginx<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;spec:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;containers:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- name: nginx<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image: nginx:1.21<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ports:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- containerPort: 80<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resources:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;requests:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;memory: "64Mi"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cpu: "250m"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limits:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;memory: "128Mi"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cpu: "500m"
                            </code>
                          </div>
                          <div className="bg-slate-900 p-4 rounded shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Create Deployment<br />
                              kubectl apply -f deployment.yaml<br /><br />
                              # Or create from command line<br />
                              kubectl create deployment nginx --image=nginx:1.21 --replicas=3
                            </code>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Terminal className="w-5 h-5" />
                            Deployment Commands
                          </h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Get Deployments<br />
                              kubectl get deployments<br /><br />
                              # Describe Deployment<br />
                              kubectl describe deployment nginx-deployment<br /><br />
                              # Watch Deployment rollout<br />
                              kubectl rollout status deployment/nginx-deployment<br /><br />
                              # Get Deployment YAML<br />
                              kubectl get deployment nginx-deployment -o yaml
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong className="flex items-center gap-2"><Monitor className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-800">
                                deployment.apps/nginx-deployment created<br /><br />
                                NAME READY UP-TO-DATE AVAILABLE AGE<br />
                                nginx-deployment 3/3 3 3 1m<br /><br />
                                Waiting for deployment "nginx-deployment" rollout to finish: 1 of 3 updated replicas are available...<br />
                                deployment "nginx-deployment" successfully rolled out
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                        <RefreshCcw className="w-6 h-6" />
                        Rolling Updates & Rollbacks
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <GitBranch className="w-5 h-5" />
                            Update Strategies
                          </h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Update image<br />
                              kubectl set image deployment/nginx-deployment nginx=nginx:1.22<br /><br />
                              # Update with YAML<br />
                              kubectl apply -f deployment-updated.yaml<br /><br />
                              # Check rollout history<br />
                              kubectl rollout history deployment/nginx-deployment<br /><br />
                              # Pause rollout<br />
                              kubectl rollout pause deployment/nginx-deployment<br /><br />
                              # Resume rollout<br />
                              kubectl rollout resume deployment/nginx-deployment
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong className="flex items-center gap-2"><Monitor className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-800">
                                deployment.apps/nginx-deployment image updated<br /><br />
                                REVISION CHANGE-CAUSE<br />
                                1 &lt;none&gt;<br />
                                2 kubectl set image deployment/nginx-deployment nginx=nginx:1.22<br /><br />
                                deployment.apps/nginx-deployment paused
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <HistoryIcon className="w-5 h-5" />
                            Rollback Operations
                          </h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Rollback to previous version<br />
                              kubectl rollout undo deployment/nginx-deployment<br /><br />
                              # Rollback to specific revision<br />
                              kubectl rollout undo deployment/nginx-deployment --to-revision=1<br /><br />
                              # View rollout status<br />
                              kubectl rollout status deployment/nginx-deployment<br /><br />
                              # Check deployment revision<br />
                              kubectl rollout history deployment/nginx-deployment --revision=2
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-orange-100 shadow-sm">
                            <p className="text-sm text-orange-800">
                              <strong className="flex items-center gap-2"><Monitor className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-800">
                                deployment.apps/nginx-deployment rolled back<br /><br />
                                deployment "nginx-deployment" successfully rolled out<br /><br />
                                Deployment rolled back to revision 1
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-6 h-6" />
                        Scaling Deployments
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-slate-900 p-4 rounded shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Scale manually<br />
                              kubectl scale deployment nginx-deployment --replicas=5<br /><br />
                              # Autoscale based on CPU<br />
                              kubectl autoscale deployment nginx-deployment --min=3 --max=10 --cpu-percent=80<br /><br />
                              # Get HPA (Horizontal Pod Autoscaler)<br />
                              kubectl get hpa<br /><br />
                              # Delete autoscaler<br />
                              kubectl delete hpa nginx-deployment
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-purple-100 shadow-sm">
                            <p className="text-sm text-purple-800">
                              <strong className="flex items-center gap-2"><Monitor className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-800">
                                deployment.apps/nginx-deployment scaled<br />
                                horizontalpodautoscaler.autoscaling/nginx-deployment autoscaled<br /><br />
                                NAME REFERENCE TARGETS MINPODS MAXPODS REPLICAS<br />
                                nginx-deployment Deployment/nginx-deployment 45%/80% 3 10 5
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <FileText className="w-5 h-5" />
                            Advanced HPA YAML
                          </h4>
                          <div className="bg-slate-900 p-4 rounded shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              apiVersion: autoscaling/v2<br />
                              kind: HorizontalPodAutoscaler<br />
                              metadata:<br />
                              &nbsp;&nbsp;name: nginx-hpa<br />
                              spec:<br />
                              &nbsp;&nbsp;scaleTargetRef:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;apiVersion: apps/v1<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;kind: Deployment<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;name: nginx-deployment<br />
                              &nbsp;&nbsp;minReplicas: 3<br />
                              &nbsp;&nbsp;maxReplicas: 10<br />
                              &nbsp;&nbsp;metrics:<br />
                              &nbsp;&nbsp;- type: Resource<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;resource:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: cpu<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;target:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: Utilization<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;averageUtilization: 80
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                      <h3 className="text-xl font-bold text-orange-700 mb-4">?? Debugging Deployments</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-slate-900 p-4 rounded shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Get Deployment events<br />
                              kubectl describe deployment nginx-deployment<br /><br />
                              # Get ReplicaSet created by Deployment<br />
                              kubectl get rs -l app=nginx<br /><br />
                              # Get Pods created by Deployment<br />
                              kubectl get pods -l app=nginx<br /><br />
                              # Check Pod logs<br />
                              kubectl logs -l app=nginx --all-containers=true
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-orange-100 shadow-sm">
                            <p className="text-sm text-orange-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                Events:<br />
                                Type Reason Age Message<br />
                                Normal ScalingReplicaSet 2m Scaled up replica set to 3<br />
                                Normal ScalingReplicaSet 1m Scaled up replica set to 5<br /><br />
                                NAME DESIRED CURRENT READY AGE<br />
                                nginx-deployment-7d4f9c8b9d 5 5 5 2m
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="bg-slate-900 p-4 rounded shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Delete Deployment<br />
                              kubectl delete deployment nginx-deployment<br /><br />
                              # Delete with YAML<br />
                              kubectl delete -f deployment.yaml<br /><br />
                              # Force delete<br />
                              kubectl delete deployment nginx-deployment --grace-period=0 --force<br /><br />
                              # Edit Deployment live<br />
                              kubectl edit deployment nginx-deployment
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-red-100 shadow-sm">
                            <p className="text-sm text-red-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                deployment.apps "nginx-deployment" deleted<br />
                                ReplicaSets and Pods automatically cleaned up<br /><br />
                                Editor opens with Deployment YAML for live editing
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Award className="w-8 h-8 text-blue-600" />
                    Deployment Best Practices
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Do's</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Set Resource Limits:</strong> Always define requests and limits</li>
                        <li>• <strong>Use Liveness/Readiness Probes:</strong> Enable self-healing</li>
                        <li>• <strong>Configure maxSurge/maxUnavailable:</strong> Control rollout speed</li>
                        <li>• <strong>Use Labels Wisely:</strong> Organize and query deployments</li>
                        <li>• <strong>Version Images:</strong> Never use 'latest' tag</li>
                        <li>• <strong>Track Rollout History:</strong> Document changes with annotations</li>
                        <li>• <strong>Test Before Production:</strong> Use staging environments</li>
                        <li>• <strong>Monitor Metrics:</strong> Track CPU, memory, and custom metrics</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
                        <XCircle className="w-5 h-5" />
                        Don'ts
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Don't Skip Testing:</strong> Always test updates in staging</li>
                        <li>• <strong>Don't Ignore Failed Pods:</strong> Investigate and fix issues</li>
                        <li>• <strong>Don't Use Recreate Strategy:</strong> Causes downtime (use RollingUpdate)</li>
                        <li>• <strong>Don't Ignore Resource Requests:</strong> Leads to scheduling issues</li>
                        <li>• <strong>Don't Modify ReplicaSets Directly:</strong> Manage via Deployment</li>
                        <li>• <strong>Don't Forget Rollback Plan:</strong> Always have a backup strategy</li>
                        <li>• <strong>Don't Hardcode Configuration:</strong> Use ConfigMaps/Secrets</li>
                        <li>• <strong>Don't Over-Scale:</strong> Right-size based on actual demand</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'k8s-services':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="k8s-services" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
                ?? Kubernetes Services - Networking & Service Discovery
              </h1>
              <p className="text-lg text-gray-400 mb-8 text-center">
                Master service networking, load balancing, and service discovery in Kubernetes
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">?? What are Kubernetes Services?</h2>
                  <p className="text-slate-900 text-xl mb-6">
                    Services are an abstract way to expose applications running on a set of Pods as a network service.
                    They provide stable IP addresses and DNS names, enabling service discovery and load balancing across
                    ephemeral Pods. Think of Services as the networking glue that connects your microservices.
                  </p>

                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3">?? Why Services Are Essential</h3>
                    <p className="text-slate-800 mb-4">
                      Pods are ephemeral and their IPs change when they restart. Services solve this by providing a stable
                      endpoint that automatically routes traffic to healthy Pods, regardless of how many times they restart
                      or where they're scheduled.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-blue-600 mb-2">?? Service Benefits</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Stable Endpoint:</strong> Fixed IP and DNS name for Pods</li>
                          <li>• <strong>Load Balancing:</strong> Distributes traffic across Pods</li>
                          <li>• <strong>Service Discovery:</strong> DNS-based service resolution</li>
                          <li>• <strong>Decoupling:</strong> Pods discover services without hardcoding IPs</li>
                          <li>• <strong>Zero-Downtime Updates:</strong> Traffic routing during Pod updates</li>
                          <li>• <strong>Health Checking:</strong> Routes only to healthy Pods</li>
                          <li>• <strong>Multi-Protocol:</strong> TCP, UDP, HTTP, gRPC support</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-600 mb-2">?? Service Types</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>ClusterIP:</strong> Internal cluster access (default)</li>
                          <li>• <strong>NodePort:</strong> External access via node port</li>
                          <li>• <strong>LoadBalancer:</strong> Cloud provider load balancer</li>
                          <li>• <strong>ExternalName:</strong> DNS CNAME record</li>
                          <li>• <strong>Headless:</strong> Direct Pod IP access (no load balancing)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Service Types in Detail</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-4">?? ClusterIP - Internal Service Access</h3>
                      <p className="text-black mb-4">
                        The default Service type that exposes the Service on a cluster-internal IP. This makes the Service
                        only reachable from within the cluster - perfect for microservices communication.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? ClusterIP YAML</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              apiVersion: v1<br />
                              kind: Service<br />
                              metadata:<br />
                              &nbsp;&nbsp;name: backend-service<br />
                              spec:<br />
                              &nbsp;&nbsp;type: ClusterIP<br />
                              &nbsp;&nbsp;selector:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;app: backend<br />
                              &nbsp;&nbsp;ports:<br />
                              &nbsp;&nbsp;- protocol: TCP<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;port: 80<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;targetPort: 8080<br /><br />
                              # Apply Service<br />
                              kubectl apply -f service.yaml<br /><br />
                              # Get Service details<br />
                              kubectl get svc backend-service
                            </code>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? ClusterIP Output</h4>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                service/backend-service created<br /><br />
                                NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE<br />
                                backend-service ClusterIP 10.96.45.123 &lt;none&gt; 80/TCP 10s<br /><br />
                                # Access from within cluster:<br />
                                curl http://backend-service<br />
                                curl http://backend-service.default.svc.cluster.local<br />
                                curl http://10.96.45.123
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-4">?? NodePort - External Access via Nodes</h3>
                      <p className="text-black mb-4">
                        Exposes the Service on each Node's IP at a static port (30000-32767). External traffic can access
                        the Service using &lt;NodeIP&gt;:&lt;NodePort&gt; - useful for development and testing.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              apiVersion: v1<br />
                              kind: Service<br />
                              metadata:<br />
                              &nbsp;&nbsp;name: frontend-service<br />
                              spec:<br />
                              &nbsp;&nbsp;type: NodePort<br />
                              &nbsp;&nbsp;selector:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;app: frontend<br />
                              &nbsp;&nbsp;ports:<br />
                              &nbsp;&nbsp;- protocol: TCP<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;port: 80<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;targetPort: 3000<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;nodePort: 30080<br /><br />
                              kubectl apply -f nodeport-service.yaml
                            </code>
                          </div>
                        </div>
                        <div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                service/frontend-service created<br /><br />
                                NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE<br />
                                frontend-service NodePort 10.96.50.200 &lt;none&gt; 80:30080/TCP 5s<br /><br />
                                # Access from external:<br />
                                curl http://192.168.1.101:30080<br />
                                curl http://192.168.1.102:30080<br />
                                (Any node IP works)
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-700 mb-4">?? LoadBalancer - Cloud Provider Integration</h3>
                      <p className="text-black mb-4">
                        Provisions a cloud provider's load balancer to expose the Service externally. This is the recommended
                        way to expose services in production cloud environments (AWS ELB, GCP Load Balancer, Azure LB).
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              apiVersion: v1<br />
                              kind: Service<br />
                              metadata:<br />
                              &nbsp;&nbsp;name: web-service<br />
                              &nbsp;&nbsp;annotations:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;service.beta.kubernetes.io/aws-load-balancer-type: "nlb"<br />
                              spec:<br />
                              &nbsp;&nbsp;type: LoadBalancer<br />
                              &nbsp;&nbsp;selector:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;app: web<br />
                              &nbsp;&nbsp;ports:<br />
                              &nbsp;&nbsp;- protocol: TCP<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;port: 80<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;targetPort: 8080<br /><br />
                              kubectl apply -f loadbalancer-service.yaml
                            </code>
                          </div>
                        </div>
                        <div>
                          <div className="mt-4 p-3 bg-white rounded border border-purple-100 shadow-sm">
                            <p className="text-sm text-purple-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                service/web-service created<br /><br />
                                NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S)<br />
                                web-service LoadBalancer 10.96.60.50 &lt;pending&gt; 80:31234/TCP<br />
                                web-service LoadBalancer 10.96.60.50 a1b2c3.elb.amazonaws.com 80:31234/TCP<br /><br />
                                # Access via cloud LB:<br />
                                curl http://a1b2c3.elb.amazonaws.com
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                      <h3 className="text-xl font-bold text-orange-700 mb-4">?? Service Discovery & DNS</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? DNS Resolution</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Service DNS formats:<br />
                              # &lt;service-name&gt;<br />
                              # &lt;service-name&gt;.&lt;namespace&gt;<br />
                              # &lt;service-name&gt;.&lt;namespace&gt;.svc.cluster.local<br /><br />
                              # Test DNS from a Pod<br />
                              kubectl run test --image=busybox -it --rm -- sh<br /><br />
                              # Inside Pod:<br />
                              nslookup backend-service<br />
                              nslookup backend-service.default<br />
                              nslookup backend-service.default.svc.cluster.local<br /><br />
                              # Get Service endpoints<br />
                              kubectl get endpoints backend-service
                            </code>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? DNS Output</h4>
                          <div className="mt-4 p-3 bg-white rounded border border-orange-100 shadow-sm">
                            <p className="text-sm text-orange-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                Name: backend-service.default.svc.cluster.local<br />
                                Address: 10.96.45.123<br /><br />
                                NAME ENDPOINTS AGE<br />
                                backend-service 10.244.1.5:8080,10.244.2.3:8080,10.244.1.7:8080 5m<br /><br />
                                Service automatically load-balances across 3 Pod IPs
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-700 mb-4">??? Service Management Commands</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-slate-900 p-4 rounded shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # List all Services<br />
                              kubectl get services<br /><br />
                              # Describe Service<br />
                              kubectl describe svc backend-service<br /><br />
                              # Edit Service<br />
                              kubectl edit svc backend-service<br /><br />
                              # Delete Service<br />
                              kubectl delete svc backend-service<br /><br />
                              # Port forward for testing<br />
                              kubectl port-forward svc/backend-service 8080:80
                            </code>
                          </div>
                        </div>
                        <div>
                          <div className="mt-4 p-3 bg-white rounded border border-red-100 shadow-sm">
                            <p className="text-sm text-red-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE<br />
                                kubernetes ClusterIP 10.96.0.1 &lt;none&gt; 443/TCP 30d<br />
                                backend-service ClusterIP 10.96.45.123 &lt;none&gt; 80/TCP 10m<br /><br />
                                Forwarding from 127.0.0.1:8080 -&gt; 80<br />
                                Service accessible at http://localhost:8080
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Service Best Practices</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Do's</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Use ClusterIP by Default:</strong> For internal services</li>
                        <li>• <strong>Label Selectors Carefully:</strong> Ensure proper Pod targeting</li>
                        <li>• <strong>Use DNS Names:</strong> Never hardcode Service IPs</li>
                        <li>• <strong>Set Session Affinity:</strong> When needed (sticky sessions)</li>
                        <li>• <strong>Use Headless Services:</strong> For StatefulSets</li>
                        <li>• <strong>Monitor Endpoints:</strong> Verify healthy Pod count</li>
                        <li>• <strong>Use LoadBalancer in Cloud:</strong> For production external access</li>
                        <li>• <strong>Configure Health Checks:</strong> Readiness probes are critical</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-700 mb-3">? Don'ts</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Don't Use NodePort in Production:</strong> Security and scalability issues</li>
                        <li>• <strong>Don't Hardcode Pod IPs:</strong> Pods are ephemeral</li>
                        <li>• <strong>Don't Ignore Endpoints:</strong> Check if Pods are being selected</li>
                        <li>• <strong>Don't Skip Readiness Probes:</strong> Prevents routing to unready Pods</li>
                        <li>• <strong>Don't Expose Unnecessary Ports:</strong> Security risk</li>
                        <li>• <strong>Don't Use Generic Names:</strong> Use descriptive Service names</li>
                        <li>• <strong>Don't Forget Namespaces:</strong> Isolate Services properly</li>
                        <li>• <strong>Don't Mix Service Types:</strong> Use Ingress for HTTP routing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'k8s-monitoring':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="k8s-monitoring" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
                ?? Kubernetes Monitoring - Observability & Performance
              </h1>
              <p className="text-lg text-gray-400 mb-8 text-center">
                Master cluster monitoring, metrics collection, and observability in Kubernetes
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">?? What is Kubernetes Monitoring?</h2>
                  <p className="text-slate-900 text-xl mb-6">
                    Kubernetes monitoring involves tracking the health, performance, and resource utilization of your cluster,
                    nodes, and applications. Effective monitoring provides visibility into system behavior, enables proactive
                    issue detection, and ensures optimal resource utilization.
                  </p>

                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3">?? The Monitoring Imperative</h3>
                    <p className="text-slate-800 mb-4">
                      In dynamic Kubernetes environments with hundreds of containers constantly being created and destroyed,
                      monitoring is not optional - it's essential for maintaining reliability and performance at scale.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-blue-600 mb-2">?? What to Monitor</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Cluster Health:</strong> Node status, control plane components</li>
                          <li>• <strong>Resource Usage:</strong> CPU, memory, disk, network</li>
                          <li>• <strong>Pod Health:</strong> Restart counts, readiness, liveness</li>
                          <li>• <strong>Application Metrics:</strong> Request rates, latency, errors</li>
                          <li>• <strong>Events:</strong> Cluster events and warnings</li>
                          <li>• <strong>Logs:</strong> Container and application logs</li>
                          <li>• <strong>Network:</strong> Service connectivity, ingress traffic</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-600 mb-2">??? Monitoring Stack</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Metrics Server:</strong> Built-in resource metrics (kubectl top)</li>
                          <li>• <strong>Prometheus:</strong> Metrics collection and alerting</li>
                          <li>• <strong>Grafana:</strong> Metrics visualization and dashboards</li>
                          <li>• <strong>ELK/EFK:</strong> Centralized logging (Elasticsearch, Logstash/Fluentd, Kibana)</li>
                          <li>• <strong>Jaeger/Zipkin:</strong> Distributed tracing</li>
                          <li>• <strong>kube-state-metrics:</strong> Cluster object metrics</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Built-in Monitoring Tools</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-4">?? kubectl top - Resource Metrics</h3>
                      <p className="text-black mb-4">
                        The Metrics Server provides resource usage data for nodes and Pods. Install it first if not available.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Metrics Commands</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Install Metrics Server<br />
                              kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml<br /><br />
                              # View node resource usage<br />
                              kubectl top nodes<br /><br />
                              # View Pod resource usage<br />
                              kubectl top pods<br /><br />
                              # View Pods in specific namespace<br />
                              kubectl top pods -n kube-system<br /><br />
                              # Sort by CPU<br />
                              kubectl top pods --sort-by=cpu<br /><br />
                              # Sort by memory<br />
                              kubectl top pods --sort-by=memory
                            </code>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Metrics Output</h4>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                # kubectl top nodes<br />
                                NAME CPU(cores) CPU% MEMORY(bytes) MEMORY%<br />
                                master 250m 12% 1500Mi 38%<br />
                                worker1 500m 25% 2000Mi 51%<br />
                                worker2 300m 15% 1800Mi 46%<br /><br />
                                # kubectl top pods<br />
                                NAME CPU(cores) MEMORY(bytes)<br />
                                nginx-7d4f9c8b9d-abcde 5m 10Mi<br />
                                redis-65c8f7b8d-xyz12 15m 50Mi<br />
                                postgres-59b6c9-fgh34 25m 200Mi
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-4">?? Cluster Events & Diagnostics</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-slate-900 p-4 rounded shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Get all events<br />
                              kubectl get events<br /><br />
                              # Watch events in real-time<br />
                              kubectl get events --watch<br /><br />
                              # Sort events by timestamp<br />
                              kubectl get events --sort-by='.metadata.creationTimestamp'<br /><br />
                              # Filter events by type<br />
                              kubectl get events --field-selector type=Warning<br /><br />
                              # Events for specific Pod<br />
                              kubectl get events --field-selector involvedObject.name=nginx-pod
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                LAST SEEN TYPE REASON OBJECT MESSAGE<br />
                                2m Normal Scheduled pod/nginx-7d4f9c8b9d-abcde Successfully assigned<br />
                                2m Normal Pulling pod/nginx-7d4f9c8b9d-abcde Pulling image "nginx:1.21"<br />
                                1m Normal Pulled pod/nginx-7d4f9c8b9d-abcde Successfully pulled<br />
                                1m Warning BackOff pod/redis-65c8f7b8d-xyz12 Back-off restarting failed container
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Component Status</h4>
                          <div className="bg-slate-900 p-4 rounded shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Check component health<br />
                              kubectl get componentstatuses<br /><br />
                              # Check node conditions<br />
                              kubectl describe nodes | grep Conditions -A 10<br /><br />
                              # List failing Pods<br />
                              kubectl get pods --all-namespaces --field-selector status.phase!=Running,status.phase!=Succeeded<br /><br />
                              # Get Pod restart counts<br />
                              kubectl get pods --all-namespaces --sort-by='.status.containerStatuses[0].restartCount'
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-orange-100 shadow-sm">
                            <p className="text-sm text-orange-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                NAME STATUS MESSAGE<br />
                                scheduler Healthy ok<br />
                                controller-manager Healthy ok<br />
                                etcd-0 Healthy {"{'"}health{'"'}:{'"'}true{'"'}{'}'}<br /><br />
                                Conditions:<br />
                                Ready True<br />
                                MemoryPressure False<br />
                                DiskPressure False
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-700 mb-4">?? Prometheus Integration</h3>
                      <p className="text-black mb-4">
                        Prometheus is the de facto standard for Kubernetes monitoring, providing powerful metrics collection
                        and alerting capabilities.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Install Prometheus</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Using Helm<br />
                              helm repo add prometheus-community https://prometheus-community.github.io/helm-charts<br /><br />
                              helm repo update<br /><br />
                              helm install prometheus prometheus-community/kube-prometheus-stack<br /><br />
                              # Check Prometheus Pods<br />
                              kubectl get pods -l app.kubernetes.io/name=prometheus<br /><br />
                              # Port forward to Prometheus UI<br />
                              kubectl port-forward svc/prometheus-kube-prometheus-prometheus 9090:9090
                            </code>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Key Metrics</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Example PromQL queries:<br /><br />
                              # CPU usage by Pod<br />
                              sum(rate(container_cpu_usage_seconds_total[5m])) by (pod)<br /><br />
                              # Memory usage by Pod<br />
                              sum(container_memory_usage_bytes) by (pod)<br /><br />
                              # Pod restart count<br />
                              kube_pod_container_status_restarts_total<br /><br />
                              # Request rate<br />
                              rate(http_requests_total[5m])
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-purple-100 shadow-sm">
                            <p className="text-sm text-purple-800">
                              <strong>?? Output:</strong> Prometheus scrapes metrics every 15s, stores them for 15 days by default
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                      <h3 className="text-xl font-bold text-orange-700 mb-4">?? Grafana Dashboards</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Access Grafana (installed with Prometheus stack)<br />
                              kubectl port-forward svc/prometheus-grafana 3000:80<br /><br />
                              # Default credentials:<br />
                              # Username: admin<br />
                              # Password: prom-operator<br /><br />
                              # Get Grafana password<br />
                              kubectl get secret prometheus-grafana -o jsonpath="{'{'}. data.admin-password{'}'}" | base64 --decode<br /><br />
                              # Popular dashboard IDs:<br />
                              # 315 - Kubernetes cluster monitoring<br />
                              # 3119 - Kubernetes Pod metrics<br />
                              # 6417 - Kubernetes Deployment metrics
                            </code>
                          </div>
                        </div>
                        <div>
                          <div className="mt-4 p-3 bg-white rounded border border-orange-100 shadow-sm">
                            <p className="text-sm text-orange-800">
                              <strong>?? Key Dashboards:</strong><br />
                              <span className="text-slate-800">
                                • Cluster Overview: CPU, memory, disk usage<br />
                                • Node Metrics: Per-node resource utilization<br />
                                • Pod Metrics: Container resource usage<br />
                                • Deployment Status: Replicas, rollouts, health<br />
                                • Network I/O: Ingress/egress traffic<br />
                                • Persistent Volume: Storage metrics<br />
                                • API Server: Request rate, latency<br />
                                • etcd: Cluster state metrics
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-700 mb-4">?? Alerting & Notification</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Alert Rules Example</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # PrometheusRule YAML<br />
                              apiVersion: monitoring.coreos.com/v1<br />
                              kind: PrometheusRule<br />
                              metadata:<br />
                              &nbsp;&nbsp;name: kubernetes-alerts<br />
                              spec:<br />
                              &nbsp;&nbsp;groups:<br />
                              &nbsp;&nbsp;- name: kubernetes.rules<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;rules:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;- alert: HighPodMemory<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;expr: container_memory_usage_bytes &gt; 1e9<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for: 5m<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;annotations:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;summary: "Pod using &gt;1GB memory"<br /><br />
                              &nbsp;&nbsp;&nbsp;&nbsp;- alert: PodCrashLooping<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;expr: rate(kube_pod_container_status_restarts_total[15m]) &gt; 0<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for: 5m
                            </code>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Common Alerts</h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>Node Down:</strong> Node becomes unresponsive</li>
                            <li>• <strong>High CPU:</strong> CPU usage &gt; 80% for 5 minutes</li>
                            <li>• <strong>High Memory:</strong> Memory usage &gt; 90%</li>
                            <li>• <strong>Disk Full:</strong> Disk usage &gt; 85%</li>
                            <li>• <strong>Pod Crash Loop:</strong> Container restarting frequently</li>
                            <li>• <strong>Deployment Failed:</strong> Rollout stuck/failed</li>
                            <li>• <strong>API Server Latency:</strong> Request latency &gt; 1s</li>
                            <li>• <strong>etcd Leader Missing:</strong> No etcd leader elected</li>
                          </ul>
                          <div className="mt-4 p-3 bg-white rounded border border-red-100 shadow-sm">
                            <p className="text-sm text-red-800">
                              <strong>?? Alert Channels:</strong> Slack, PagerDuty, Email, Webhook, OpsGenie
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Monitoring Best Practices</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Do's</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Monitor the Golden Signals:</strong> Latency, traffic, errors, saturation</li>
                        <li>• <strong>Set Meaningful Alerts:</strong> Avoid alert fatigue</li>
                        <li>• <strong>Use Labels Effectively:</strong> For filtering and aggregation</li>
                        <li>• <strong>Monitor Control Plane:</strong> API server, etcd, scheduler</li>
                        <li>• <strong>Track Resource Quotas:</strong> Prevent resource exhaustion</li>
                        <li>• <strong>Centralize Logs:</strong> Use ELK/EFK stack</li>
                        <li>• <strong>Implement Distributed Tracing:</strong> For microservices</li>
                        <li>• <strong>Set Up Dashboards:</strong> For quick visibility</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-700 mb-3">? Don'ts</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Don't Over-Alert:</strong> Causes alert fatigue and ignored warnings</li>
                        <li>• <strong>Don't Ignore Metrics Retention:</strong> Set appropriate retention policies</li>
                        <li>• <strong>Don't Skip Capacity Planning:</strong> Monitor trends for growth</li>
                        <li>• <strong>Don't Forget Backup Monitoring:</strong> Monitor etcd backups</li>
                        <li>• <strong>Don't Ignore Slow Queries:</strong> Track database performance</li>
                        <li>• <strong>Don't Monitor Everything:</strong> Focus on actionable metrics</li>
                        <li>• <strong>Don't Forget Security Monitoring:</strong> Track authentication failures</li>
                        <li>• <strong>Don't Leave Metrics Unprotected:</strong> Secure Prometheus endpoints</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      // CI/CD Sections
      case 'jenkins-basics':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="jenkins-basics" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
                ?? Jenkins Basics - The CI/CD Automation Powerhouse
              </h1>
              <p className="text-lg text-gray-400 mb-8 text-center">
                Master continuous integration and deployment with Jenkins - the industry-standard automation server
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">?? What is Jenkins?</h2>
                  <p className="text-slate-900 text-xl mb-6">
                    Jenkins is an open-source automation server that revolutionized the way software development
                    teams build, test, and deploy applications. Originally called Hudson, Jenkins has become the
                    de facto standard for CI/CD pipelines, trusted by millions of developers worldwide.
                  </p>

                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3">?? The Jenkins Revolution</h3>
                    <p className="text-slate-800 mb-4">
                      Created by Kohsuke Kawaguchi at Sun Microsystems in 2004, Jenkins emerged from the need to
                      automate repetitive build and deployment tasks. Today, it's the backbone of DevOps practices,
                      enabling teams to achieve continuous integration and continuous deployment at scale.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-blue-600 mb-2">?? Why Jenkins Dominates CI/CD</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Open Source:</strong> Free, community-driven, and highly customizable</li>
                          <li>• <strong>Plugin Ecosystem:</strong> 1,800+ plugins for every tool and platform</li>
                          <li>• <strong>Extreme Flexibility:</strong> Supports any language, framework, or tool</li>
                          <li>• <strong>Distributed Architecture:</strong> Scale across multiple machines</li>
                          <li>• <strong>Pipeline as Code:</strong> Version-controlled, reviewable automation</li>
                          <li>• <strong>Mature & Stable:</strong> 20+ years of production use</li>
                          <li>• <strong>Self-Hosted Control:</strong> Complete data and process ownership</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-600 mb-2">?? Jenkins Use Cases</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Continuous Integration:</strong> Automated builds and testing</li>
                          <li>• <strong>Continuous Deployment:</strong> Automated releases to production</li>
                          <li>• <strong>Infrastructure Automation:</strong> Provisioning and configuration</li>
                          <li>• <strong>Quality Gates:</strong> Code quality and security scanning</li>
                          <li>• <strong>Multi-Environment Deployments:</strong> Dev, staging, production</li>
                          <li>• <strong>Integration Testing:</strong> End-to-end validation</li>
                          <li>• <strong>Compliance Automation:</strong> Audit trails and reporting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">??? Jenkins Architecture Deep Dive</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4">??? Master-Controller Architecture</h3>
                      <p className="text-slate-900 mb-4">
                        Jenkins uses a distributed architecture where the Master node coordinates builds across
                        multiple Agent nodes, enabling horizontal scaling and resource optimization.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-2">?? Master Node (Controller)</h4>
                          <p className="text-slate-800 text-sm mb-2">Central coordination hub</p>
                          <ul className="text-slate-700 text-xs space-y-1">
                            <li>• Schedules and distributes builds</li>
                            <li>• Manages build queue and history</li>
                            <li>• Stores configuration and artifacts</li>
                            <li>• Provides web UI and API</li>
                            <li>• Manages user authentication</li>
                            <li>• Handles plugin management</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-purple-600 mb-2">?? Agent Nodes (Executors)</h4>
                          <p className="text-slate-800 text-sm mb-2">Build execution workers</p>
                          <ul className="text-slate-700 text-xs space-y-1">
                            <li>• Execute build jobs assigned by Master</li>
                            <li>• Can run on different OS platforms</li>
                            <li>• Support different tools and environments</li>
                            <li>• Return build results to Master</li>
                            <li>• Can be temporary (cloud) or permanent</li>
                            <li>• Isolated build environments</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-orange-600 mb-2">?? Build Workspace</h4>
                          <p className="text-slate-800 text-sm mb-2">Isolated execution environment</p>
                          <ul className="text-slate-700 text-xs space-y-1">
                            <li>• Clean directory for each build</li>
                            <li>• Contains source code and artifacts</li>
                            <li>• Temporary files and logs</li>
                            <li>• Environment variables and secrets</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-green-600 mb-2">?? Plugin System</h4>
                          <p className="text-slate-800 text-sm mb-2">Extensible functionality</p>
                          <ul className="text-slate-700 text-xs space-y-1">
                            <li>• 1,800+ community plugins</li>
                            <li>• Integration with tools and platforms</li>
                            <li>• Custom functionality development</li>
                            <li>• Version management and updates</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-2xl font-bold text-green-700 mb-4">?? Jenkins Pipeline Architecture</h3>
                      <p className="text-slate-900 mb-4">
                        Modern Jenkins uses Pipeline as Code, where automation workflows are defined in version-controlled
                        files, enabling infrastructure as code principles for CI/CD.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Pipeline Types</h4>
                          <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm hover:shadow-md transition-shadow mb-4">
                            <h5 className="text-md font-bold text-blue-600 mb-2">Declarative Pipeline</h5>
                            <p className="text-slate-800 text-sm mb-2">Structured, opinionated syntax</p>
                            <ul className="text-slate-700 text-xs space-y-1">
                              <li>• Predefined structure and validation</li>
                              <li>• Easier to learn and maintain</li>
                              <li>• Built-in best practices</li>
                              <li>• IDE support and syntax highlighting</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                            <h5 className="text-md font-bold text-green-600 mb-2">Scripted Pipeline</h5>
                            <p className="text-slate-800 text-sm mb-2">Full Groovy programming power</p>
                            <ul className="text-slate-700 text-xs space-y-1">
                              <li>• Maximum flexibility and control</li>
                              <li>• Complex logic and conditionals</li>
                              <li>• Custom DSL development</li>
                              <li>• Advanced error handling</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Pipeline Components</h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>Pipeline:</strong> Top-level block defining the entire workflow</li>
                            <li>• <strong>Agent:</strong> Specifies where the pipeline runs</li>
                            <li>• <strong>Stages:</strong> Logical divisions of the pipeline</li>
                            <li>• <strong>Steps:</strong> Individual commands within a stage</li>
                            <li>• <strong>Post:</strong> Actions to run after stages complete</li>
                            <li>• <strong>Environment:</strong> Variables available to the pipeline</li>
                            <li>• <strong>Options:</strong> Pipeline-level configuration</li>
                            <li>• <strong>Triggers:</strong> Events that start the pipeline</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Jenkins Installation & Setup</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-4">?? Installation Methods</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Docker Installation</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Pull Jenkins LTS image<br />
                              docker pull jenkins/jenkins:lts<br /><br />
                              # Run Jenkins container<br />
                              docker run -d \<br />
                              &nbsp;&nbsp;--name jenkins \<br />
                              &nbsp;&nbsp;-p 8080:8080 \<br />
                              &nbsp;&nbsp;-p 50000:50000 \<br />
                              &nbsp;&nbsp;-v jenkins_home:/var/jenkins_home \<br />
                              &nbsp;&nbsp;jenkins/jenkins:lts<br /><br />
                              # Check container status<br />
                              docker ps | grep jenkins
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES<br />
                                abc123def456 jenkins/jenkins:lts "/sbin/tini -- /usr/..." 2 minutes ago Up 2 minutes 0.0.0.0:8080-&gt;8080/tcp jenkins<br /><br />
                                Jenkins available at: http://localhost:8080
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Linux Installation</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Add Jenkins repository key<br />
                              wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -<br /><br />
                              # Add repository<br />
                              sudo sh -c 'echo deb https://pkg.jenkins.io/debian binary/ &gt; /etc/apt/sources.list.d/jenkins.list'<br /><br />
                              # Update package list<br />
                              sudo apt update<br /><br />
                              # Install Jenkins<br />
                              sudo apt install jenkins<br /><br />
                              # Start Jenkins service<br />
                              sudo systemctl start jenkins<br />
                              sudo systemctl enable jenkins
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                Setting up jenkins (2.401.3) ...<br />
                                Created symlink /etc/systemd/system/multi-user.target.wants/jenkins.service<br />
                                jenkins.service: Main process exited, code=exited, status=0/SUCCESS<br /><br />
                                Jenkins available at: http://localhost:8080
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-4">?? Initial Configuration</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? First-Time Setup</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Get initial admin password<br />
                              sudo cat /var/lib/jenkins/secrets/initialAdminPassword<br /><br />
                              # Or for Docker<br />
                              docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword<br /><br />
                              # Access Jenkins UI<br />
                              # Navigate to http://localhost:8080<br />
                              # Enter admin password<br />
                              # Install suggested plugins<br />
                              # Create admin user<br />
                              # Configure instance URL
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                b8f7c2a1d9e4f6g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7<br /><br />
                                Use this password to unlock Jenkins on first startup
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Essential Plugins</h4>
                          <ul className="text-slate-700 space-y-2 text-sm">
                            <li>• <strong>Pipeline:</strong> Core pipeline functionality</li>
                            <li>• <strong>Blue Ocean:</strong> Modern pipeline visualization</li>
                            <li>• <strong>Git:</strong> Git integration for source control</li>
                            <li>• <strong>GitHub Integration:</strong> GitHub webhook support</li>
                            <li>• <strong>Docker Pipeline:</strong> Docker build and deployment</li>
                            <li>• <strong>Credentials Binding:</strong> Secure credential management</li>
                            <li>• <strong>Build Timeout:</strong> Prevent hanging builds</li>
                            <li>• <strong>Timestamper:</strong> Add timestamps to console output</li>
                            <li>• <strong>Workspace Cleanup:</strong> Clean workspaces after builds</li>
                            <li>• <strong>Parameterized Trigger:</strong> Pass parameters between jobs</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-700 mb-4">?? Agent Configuration</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Add Agent Node</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # On Jenkins Master:<br />
                              # Manage Jenkins ? Manage Nodes ? New Node<br /><br />
                              # Node Name: build-agent-1<br />
                              # Type: Permanent Agent<br /><br />
                              # Remote root directory: /home/jenkins<br />
                              # Labels: linux,docker,builder<br />
                              # Usage: Only build jobs with label expressions matching this node<br /><br />
                              # Launch method: Launch agent via SSH<br />
                              # Host: 192.168.1.100<br />
                              # Credentials: jenkins-user (SSH key)<br />
                              # Host Key Verification Strategy: Non verifying Verification Strategy
                            </code>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Agent Setup Commands</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # On Agent Node (Ubuntu):<br />
                              # Create jenkins user<br />
                              sudo useradd -m -s /bin/bash jenkins<br /><br />
                              # Add to docker group<br />
                              sudo usermod -aG docker jenkins<br /><br />
                              # Install Java (required for agents)<br />
                              sudo apt install openjdk-11-jdk<br /><br />
                              # Install build tools<br />
                              sudo apt install git docker.io build-essential<br /><br />
                              # Configure SSH access<br />
                              sudo -u jenkins ssh-keygen -t rsa
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-purple-100 shadow-sm">
                            <p className="text-sm text-purple-800">
                              <strong>?? Output:</strong> Agent node ready for build execution
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Creating Your First Jenkins Job</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-4">?? Simple Freestyle Job</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Job Configuration</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Create New Job:<br />
                              # 1. Click "New Item"<br />
                              # 2. Enter job name: "hello-world"<br />
                              # 3. Select "Freestyle project"<br />
                              # 4. Click OK<br /><br />
                              # Job Configuration:<br />
                              # Description: "Simple Hello World job"<br />
                              # Restrict where this project can be run: linux<br /><br />
                              # Source Code Management:<br />
                              # None (for this example)<br /><br />
                              # Build Triggers:<br />
                              # Build periodically: H/5 * * * * (every 5 minutes)<br /><br />
                              # Build Environment:<br />
                              # Delete workspace before build starts: ?
                            </code>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-black mb-3">?? Build Steps</h4>
                            <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                              <code className="text-green-400">
                                # Build Steps:<br />
                                # Add build step ? Execute shell<br /><br />
                                #!/bin/bash<br />
                                echo "Hello from Jenkins!"<br />
                                echo "Build started at: $(date)"<br />
                                echo "Node: $NODE_NAME"<br />
                                echo "Workspace: $WORKSPACE"<br />
                                echo "Build Number: $BUILD_NUMBER"<br />
                                echo "Git Commit: $GIT_COMMIT"<br /><br />
                                # Simulate some work<br />
                                sleep 5<br />
                                echo "Build completed successfully!"
                              </code>
                            </div>
                            <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                              <p className="text-sm text-blue-800">
                                <strong>?? Output:</strong><br />
                                <span className="text-slate-800">
                                  Hello from Jenkins!<br />
                                  Build started at: Mon Dec 16 10:30:15 UTC 2024<br />
                                  Node: master<br />
                                  Workspace: /var/jenkins_home/workspace/hello-world<br />
                                  Build Number: 1<br />
                                  Build completed successfully!<br /><br />
                                  Finished: SUCCESS
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                          <h3 className="text-xl font-bold text-green-700 mb-4">?? Job Management Commands</h3>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-lg font-bold text-black mb-3">??? CLI Commands</h4>
                              <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                                <code className="text-green-400 font-mono text-sm">
                                  # Install Jenkins CLI<br />
                                  wget http://localhost:8080/jnlpJars/jenkins-cli.jar<br /><br />
                                  # List all jobs<br />
                                  java -jar jenkins-cli.jar -s http://localhost:8080 list-jobs<br /><br />
                                  # Build a job<br />
                                  java -jar jenkins-cli.jar -s http://localhost:8080 build hello-world<br /><br />
                                  # Get job info<br />
                                  java -jar jenkins-cli.jar -s http://localhost:8080 get-job hello-world<br /><br />
                                  # Copy job<br />
                                  java -jar jenkins-cli.jar -s http://localhost:8080 copy-job hello-world hello-world-copy
                                </code>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-black mb-3">?? Monitoring & Logs</h4>
                              <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                                <code className="text-green-400 font-mono text-sm">
                                  # Check Jenkins status<br />
                                  java -jar jenkins-cli.jar -s http://localhost:8080 status<br /><br />
                                  # Get build console output<br />
                                  java -jar jenkins-cli.jar -s http://localhost:8080 console hello-world 1<br /><br />
                                  # Get build info<br />
                                  java -jar jenkins-cli.jar -s http://localhost:8080 get-build hello-world 1<br /><br />
                                  # List builds<br />
                                  java -jar jenkins-cli.jar -s http://localhost:8080 list-builds hello-world
                                </code>
                              </div>
                              <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                                <p className="text-sm text-green-800">
                                  <strong>?? Output:</strong><br />
                                  <span className="text-slate-800">
                                    hello-world #1 SUCCESS<br />
                                    hello-world #2 SUCCESS<br />
                                    hello-world #3 SUCCESS<br /><br />
                                    Jenkins is running properly
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                    <h2 className="text-3xl font-bold text-black mb-6">?? Jenkins Best Practices</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                        <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Do's</h3>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Use Pipeline as Code:</strong> Version control your automation</li>
                          <li>• <strong>Implement Blue-Green Deployments:</strong> Zero-downtime releases</li>
                          <li>• <strong>Set Build Timeouts:</strong> Prevent hanging builds</li>
                          <li>• <strong>Use Parallel Stages:</strong> Speed up pipeline execution</li>
                          <li>• <strong>Implement Proper Error Handling:</strong> Graceful failure management</li>
                          <li>• <strong>Use Credential Management:</strong> Secure secret storage</li>
                          <li>• <strong>Monitor Build Health:</strong> Track success rates and trends</li>
                          <li>• <strong>Clean Workspaces:</strong> Prevent disk space issues</li>
                          <li>• <strong>Use Appropriate Agents:</strong> Match jobs to node capabilities</li>
                          <li>• <strong>Implement Code Quality Gates:</strong> Automated quality checks</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                        <h3 className="text-xl font-bold text-red-700 mb-3">? Don'ts</h3>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong>Don't Store Secrets in Code:</strong> Use Jenkins credential store</li>
                          <li>• <strong>Don't Run Everything on Master:</strong> Use dedicated agents</li>
                          <li>• <strong>Don't Ignore Failed Builds:</strong> Fix issues immediately</li>
                          <li>• <strong>Don't Use Hardcoded Paths:</strong> Use environment variables</li>
                          <li>• <strong>Don't Skip Backup Strategy:</strong> Regular Jenkins backup</li>
                          <li>• <strong>Don't Ignore Plugin Updates:</strong> Keep plugins current</li>
                          <li>• <strong>Don't Over-Complicate Pipelines:</strong> Keep them readable</li>
                          <li>• <strong>Don't Forget Security:</strong> Regular security audits</li>
                          <li>• <strong>Don't Ignore Performance:</strong> Monitor and optimize</li>
                          <li>• <strong>Don't Skip Documentation:</strong> Document pipeline logic</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'jenkins-pipelines':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="jenkins-pipelines" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
                ?? Jenkins Pipelines - Infrastructure as Code for CI/CD
              </h1>
              <p className="text-lg text-gray-400 mb-8 text-center">
                Master declarative and scripted pipelines to automate complex CI/CD workflows
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">?? What are Jenkins Pipelines?</h2>
                  <p className="text-slate-900 text-xl mb-6">
                    Jenkins Pipelines represent a fundamental shift from traditional job-based automation to
                    code-based workflows. They enable you to define your entire CI/CD process as code,
                    bringing version control, code review, and infrastructure as code principles to automation.
                  </p>

                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3">?? The Pipeline Revolution</h3>
                    <p className="text-slate-800 mb-4">
                      Introduced in Jenkins 2.0, Pipelines transformed Jenkins from a simple automation tool
                      into a sophisticated CI/CD platform. They enable complex workflows, parallel execution,
                      and integration with modern DevOps practices.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-blue-600 mb-2">?? Why Pipelines Matter</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Pipeline as Code:</strong> Version-controlled automation</li>
                          <li>• <strong>Complex Workflows:</strong> Multi-stage, conditional logic</li>
                          <li>• <strong>Parallel Execution:</strong> Faster build times</li>
                          <li>• <strong>Integration:</strong> Seamless tool chain connectivity</li>
                          <li>• <strong>Visibility:</strong> Clear workflow visualization</li>
                          <li>• <strong>Reusability:</strong> Shared libraries and templates</li>
                          <li>• <strong>Error Handling:</strong> Graceful failure management</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-600 mb-2">?? Pipeline Benefits</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Reproducible Builds:</strong> Consistent environments</li>
                          <li>• <strong>Audit Trail:</strong> Complete build history</li>
                          <li>• <strong>Collaboration:</strong> Team review and approval</li>
                          <li>• <strong>Testing:</strong> Validate pipeline changes</li>
                          <li>• <strong>Rollback:</strong> Easy reversion of changes</li>
                          <li>• <strong>Monitoring:</strong> Real-time build status</li>
                          <li>• <strong>Scalability:</strong> Handle complex enterprise needs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Pipeline Types Deep Dive</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4">?? Declarative Pipeline</h3>
                      <p className="text-slate-900 mb-4">
                        Declarative Pipelines provide a structured, opinionated approach to pipeline definition.
                        They enforce best practices and make pipelines easier to read, write, and maintain.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-3">??? Basic Structure</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              pipeline {`{`}<br />
                              &nbsp;&nbsp;agent any<br />
                              &nbsp;&nbsp;stages {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;stage('Build') {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;steps {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;echo 'Building application...'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sh 'mvn clean compile'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;stage('Test') {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;steps {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;echo 'Running tests...'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sh 'mvn test'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;{`}`}<br />
                              {`}`}
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                [Pipeline] {`{`} node {`}`}<br />
                                [Pipeline] {`{`} stage ('Build') {`}`}<br />
                                Building application...<br />
                                [Pipeline] {`{`} sh {`}`}<br />
                                + mvn clean compile<br />
                                [INFO] BUILD SUCCESS<br />
                                [Pipeline] {`{`} stage ('Test') {`}`}<br />
                                Running tests...<br />
                                [Pipeline] {`{`} sh {`}`}<br />
                                + mvn test<br />
                                [INFO] BUILD SUCCESS
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Advanced Features</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              pipeline {`{`}<br />
                              &nbsp;&nbsp;agent any<br />
                              &nbsp;&nbsp;environment {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;MAVEN_HOME = '/opt/maven'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;JAVA_HOME = '/opt/java'<br />
                              &nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;options {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;timeout(time: 30, unit: 'MINUTES')<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;retry(3)<br />
                              &nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;stages {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;stage('Parallel Tests') {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;parallel {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stage('Unit Tests') {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;steps {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sh 'mvn test'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stage('Integration Tests') {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;steps {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sh 'mvn verify'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;{`}`}<br />
                              {`}`}
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                [Pipeline] {`{`} parallel {`}`}<br />
                                [Pipeline] {`{`} stage ('Unit Tests') {`}`}<br />
                                [Pipeline] {`{`} stage ('Integration Tests') {`}`}<br />
                                Both stages run simultaneously<br />
                                Total time reduced by ~50%
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-2xl font-bold text-green-700 mb-4">? Scripted Pipeline</h3>
                      <p className="text-slate-900 mb-4">
                        Scripted Pipelines provide full Groovy programming power for complex automation scenarios.
                        They offer maximum flexibility but require more expertise to implement correctly.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Basic Structure</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              node {`{`}<br />
                              &nbsp;&nbsp;def mavenHome = tool 'Maven-3.8.6'<br />
                              &nbsp;&nbsp;def javaHome = tool 'JDK-11'<br />
                              &nbsp;&nbsp;<br />
                              &nbsp;&nbsp;stage('Checkout') {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;checkout scm<br />
                              &nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;<br />
                              &nbsp;&nbsp;stage('Build') {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;env.PATH = "$${'{'}mavenHome{'}'}/bin:$${'{'}javaHome{'}'}/bin:$${'{'}env.PATH{'}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;sh 'mvn clean compile'<br />
                              &nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;<br />
                              &nbsp;&nbsp;stage('Test') {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;try {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sh 'mvn test'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;{`}`} catch (Exception e) {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;echo "Tests failed: $${'{'}e.getMessage(){'}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;currentBuild.result = 'UNSTABLE'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;{`}`}<br />
                              {`}`}
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                [Pipeline] {`{`} stage ('Checkout') {`}`}<br />
                                [Pipeline] checkout<br />
                                [Pipeline] {`{`} stage ('Build') {`}`}<br />
                                [Pipeline] {`{`} sh {`}`}<br />
                                + mvn clean compile<br />
                                [INFO] BUILD SUCCESS<br />
                                [Pipeline] {`{`} stage ('Test') {`}`}<br />
                                [Pipeline] {`{`} sh {`}`}<br />
                                + mvn test<br />
                                [INFO] BUILD SUCCESS
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Advanced Features</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              def deployToEnvironment(env) {`{`}<br />
                              &nbsp;&nbsp;sh "kubectl set image deployment/app app=myapp:{'${env.BUILD_NUMBER}'} -n {'${env}'}"<br />
                              &nbsp;&nbsp;sh "kubectl rollout status deployment/app -n {'${env}'}"<br />
                              {`}`}<br /><br />
                              node {`{`}<br />
                              &nbsp;&nbsp;stage('Deploy to Dev') {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;deployToEnvironment('dev')<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;input message: 'Deploy to staging?'<br />
                              &nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;<br />
                              &nbsp;&nbsp;stage('Deploy to Staging') {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;deployToEnvironment('staging')<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;input message: 'Deploy to production?'<br />
                              &nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;<br />
                              &nbsp;&nbsp;stage('Deploy to Production') {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;deployToEnvironment('production')<br />
                              &nbsp;&nbsp;{`}`}<br />
                              {`}`}
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-purple-100 shadow-sm">
                            <p className="text-sm text-purple-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                [Pipeline] {`{`} stage ('Deploy to Dev') {`}`}<br />
                                deployment.apps/app image updated<br />
                                Waiting for rollout to finish...<br />
                                deployment "app" successfully rolled out<br />
                                Waiting for input...<br />
                                Proceed or Abort
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Pipeline Development & Management</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-4">?? Creating Pipelines</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? New Pipeline Job</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Create Pipeline Job:<br />
                              # 1. New Item ? Pipeline<br />
                              # 2. Name: "my-app-pipeline"<br />
                              # 3. Pipeline Definition:<br />
                              #    - Pipeline script from SCM<br />
                              #    - SCM: Git<br />
                              #    - Repository URL: https://github.com/user/repo.git<br />
                              #    - Script Path: Jenkinsfile<br />
                              #    - Branch: */main<br /><br />
                              # Alternative: Pipeline script<br />
                              # Paste pipeline code directly<br />
                              # Save and run
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                Pipeline job created successfully<br />
                                Ready to run first build<br />
                                Jenkinsfile will be loaded from repository
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Jenkinsfile Example</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Jenkinsfile in repository root<br />
                              pipeline {`{`}<br />
                              &nbsp;&nbsp;agent any<br />
                              &nbsp;&nbsp;stages {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;stage('Checkout') {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;steps {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;checkout scm<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;stage('Build') {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;steps {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sh 'docker build -t myapp .'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;{`}`}<br />
                              {`}`}
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-4">?? Pipeline Triggers</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Trigger Types</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              pipeline {`{`}<br />
                              &nbsp;&nbsp;agent any<br />
                              &nbsp;&nbsp;triggers {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;// Poll SCM every 5 minutes<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;pollSCM('H/5 * * * *')<br /><br />
                              &nbsp;&nbsp;&nbsp;&nbsp;// Build daily at 2 AM<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;cron('0 2 * * *')<br /><br />
                              &nbsp;&nbsp;&nbsp;&nbsp;// Build on upstream job completion<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;upstream(upstreamProjects: 'build-job', threshold: 'SUCCESS')<br />
                              &nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;stages {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;stage('Build') {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;steps {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;echo 'Building...'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;{`}`}<br />
                              {`}`}
                            </code>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Webhook Triggers</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # GitHub Webhook Configuration:<br />
                              # Repository Settings ? Webhooks<br />
                              # Payload URL: http://jenkins:8080/github-webhook/<br />
                              # Content type: application/json<br />
                              # Events: Just the push event<br /><br />
                              # Pipeline with webhook trigger:<br />
                              pipeline {`{`}<br />
                              &nbsp;&nbsp;agent any<br />
                              &nbsp;&nbsp;triggers {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;githubPush()<br />
                              &nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;stages {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;stage('Build') {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;steps {`{`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;echo "Triggered by: {'${env.GIT_COMMIT}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                              &nbsp;&nbsp;{`}`}<br />
                              {`}`}
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-green-900/20 rounded">
                            <p className="text-sm text-green-300">
                              <strong>?? Output:</strong><br />
                              <span className="text-gray-400">
                                Pipeline triggered by webhook<br />
                                Commit: a1b2c3d4e5f6...<br />
                                Branch: main<br />
                                Author: developer@company.com
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-900/20 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-purple-400 mb-4">?? Pipeline Monitoring & Debugging</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-3">?? Debugging Commands</h4>
                          <div className="bg-gray-900 p-4 rounded mb-3">
                            <code className="text-green-400">
                              # View pipeline console output<br />
                              # Build ? Console Output<br /><br />
                              # Check pipeline syntax<br />
                              # Pipeline ? Syntax<br /><br />
                              # Replay pipeline with changes<br />
                              # Build ? Replay<br /><br />
                              # View pipeline steps<br />
                              # Build ? Pipeline Steps<br /><br />
                              # Check pipeline flow graph<br />
                              # Build ? Pipeline Flow Graph<br /><br />
                              # View build artifacts<br />
                              # Build ? Artifacts
                            </code>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-3">?? Monitoring Tools</h4>
                          <div className="bg-gray-900 p-4 rounded mb-3">
                            <code className="text-green-400">
                              # Pipeline status API<br />
                              curl -u user:token \<br />
                              &nbsp;&nbsp;http://jenkins:8080/job/pipeline-name/lastBuild/api/json<br /><br />
                              # Pipeline stages API<br />
                              curl -u user:token \<br />
                              &nbsp;&nbsp;http://jenkins:8080/job/pipeline-name/lastBuild/wfapi/describe<br /><br />
                              # Pipeline console API<br />
                              curl -u user:token \<br />
                              &nbsp;&nbsp;http://jenkins:8080/job/pipeline-name/lastBuild/consoleText<br /><br />
                              # Pipeline artifacts API<br />
                              curl -u user:token \<br />
                              &nbsp;&nbsp;http://jenkins:8080/job/pipeline-name/lastBuild/artifact/
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-purple-900/20 rounded">
                            <p className="text-sm text-purple-300">
                              <strong>?? Output:</strong><br />
                              <span className="text-gray-400">
                                {"{"}"result":"SUCCESS","number":123,"duration":45000{"}"}<br /><br />
                                Pipeline completed successfully<br />
                                Duration: 45 seconds<br />
                                All stages passed
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Pipeline Best Practices</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Do's</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Use Declarative Pipelines:</strong> Easier to read and maintain</li>
                        <li>• <strong>Store Pipelines in SCM:</strong> Version control your automation</li>
                        <li>• <strong>Use Shared Libraries:</strong> Reuse common functionality</li>
                        <li>• <strong>Implement Proper Error Handling:</strong> Graceful failure management</li>
                        <li>• <strong>Use Parallel Execution:</strong> Speed up pipeline execution</li>
                        <li>• <strong>Set Timeouts:</strong> Prevent hanging builds</li>
                        <li>• <strong>Clean Workspaces:</strong> Prevent disk space issues</li>
                        <li>• <strong>Use Environment Variables:</strong> Make pipelines configurable</li>
                        <li>• <strong>Implement Quality Gates:</strong> Automated quality checks</li>
                        <li>• <strong>Document Pipeline Logic:</strong> Clear comments and documentation</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-700 mb-3">? Don'ts</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Don't Hardcode Values:</strong> Use parameters and environment variables</li>
                        <li>• <strong>Don't Skip Error Handling:</strong> Always handle failures gracefully</li>
                        <li>• <strong>Don't Ignore Security:</strong> Use credentials and secure practices</li>
                        <li>• <strong>Don't Over-Complicate:</strong> Keep pipelines simple and readable</li>
                        <li>• <strong>Don't Forget Testing:</strong> Test pipeline changes thoroughly</li>
                        <li>• <strong>Don't Ignore Performance:</strong> Monitor and optimize execution time</li>
                        <li>• <strong>Don't Skip Documentation:</strong> Document complex logic</li>
                        <li>• <strong>Don't Use Blocking Steps:</strong> Avoid unnecessary waits</li>
                        <li>• <strong>Don't Ignore Artifacts:</strong> Properly manage build artifacts</li>
                        <li>• <strong>Don't Forget Cleanup:</strong> Clean up resources after builds</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'github-actions':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="github-actions" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                ?? GitHub Actions - Native CI/CD in Your Repository
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Master event-driven automation and seamless GitHub integration for modern CI/CD workflows
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">?? What are GitHub Actions?</h2>
                  <p className="text-slate-900 text-xl mb-6">
                    GitHub Actions is a powerful CI/CD platform that brings automation directly into your
                    GitHub repository. Launched in 2019, it has revolutionized how developers implement
                    continuous integration and deployment, offering native integration with GitHub's ecosystem.
                  </p>

                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3">?? The GitHub Actions Revolution</h3>
                    <p className="text-slate-800 mb-4">
                      GitHub Actions eliminates the need for external CI/CD tools by providing native automation
                      capabilities. It's built on GitHub's infrastructure, ensuring reliability, security, and
                      seamless integration with your development workflow.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-blue-600 mb-2">?? Why GitHub Actions Dominates</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Native Integration:</strong> Built into GitHub's ecosystem</li>
                          <li>• <strong>Event-Driven:</strong> Triggered by any GitHub event</li>
                          <li>• <strong>Marketplace:</strong> 10,000+ pre-built actions</li>
                          <li>• <strong>Free Tier:</strong> Generous free usage limits</li>
                          <li>• <strong>Matrix Builds:</strong> Test across multiple environments</li>
                          <li>• <strong>Secrets Management:</strong> Secure credential handling</li>
                          <li>• <strong>Self-Hosted Runners:</strong> Use your own infrastructure</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-600 mb-2">?? GitHub Actions Use Cases</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Continuous Integration:</strong> Build, test, and validate code</li>
                          <li>• <strong>Continuous Deployment:</strong> Deploy to multiple environments</li>
                          <li>• <strong>Code Quality:</strong> Linting, formatting, and security scanning</li>
                          <li>• <strong>Release Management:</strong> Automated versioning and publishing</li>
                          <li>• <strong>Issue Management:</strong> Automated issue triage and labeling</li>
                          <li>• <strong>Documentation:</strong> Auto-generate and update docs</li>
                          <li>• <strong>Dependency Management:</strong> Update and audit dependencies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">??? GitHub Actions Architecture</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4">?? Workflow Components</h3>
                      <p className="text-slate-900 mb-4">
                        GitHub Actions workflows are defined using YAML files and consist of several key components
                        that work together to create powerful automation pipelines.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-2">?? Workflow Structure</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              name: CI/CD Pipeline<br />
                              on: [push, pull_request]<br />
                              jobs:<br />
                              &nbsp;&nbsp;build-and-test:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;runs-on: ubuntu-latest<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;steps:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;- uses: actions/checkout@v3<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;- name: Setup Node.js<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;uses: actions/setup-node@v3<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;node-version: '18'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;- name: Install dependencies<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run: npm install<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;- name: Run tests<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run: npm test
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                ? Workflow triggered on push to main<br />
                                ? Job build-and-test started<br />
                                ? Running on ubuntu-latest runner<br />
                                ? All steps completed successfully
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-green-600 mb-2">?? Key Components</h4>
                          <ul className="text-slate-800 space-y-2 text-sm">
                            <li>• <strong>Events:</strong> Push, PR, issues, releases, schedules</li>
                            <li>• <strong>Jobs:</strong> Parallel execution units</li>
                            <li>• <strong>Steps:</strong> Individual commands within jobs</li>
                            <li>• <strong>Actions:</strong> Reusable automation units</li>
                            <li>• <strong>Runners:</strong> Virtual machines that execute jobs</li>
                            <li>• <strong>Secrets:</strong> Encrypted environment variables</li>
                            <li>• <strong>Artifacts:</strong> Files generated during workflow</li>
                            <li>• <strong>Matrix:</strong> Run jobs across multiple configurations</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-purple-600 mb-2">?? Event Triggers</h4>
                          <ul className="text-slate-800 space-y-2 text-sm">
                            <li>• <strong>push:</strong> Code pushed to repository</li>
                            <li>• <strong>pull_request:</strong> PR opened, updated, or closed</li>
                            <li>• <strong>issues:</strong> Issue created, labeled, or assigned</li>
                            <li>• <strong>release:</strong> Release published or edited</li>
                            <li>• <strong>schedule:</strong> Cron-based scheduled runs</li>
                            <li>• <strong>workflow_dispatch:</strong> Manual workflow triggers</li>
                            <li>• <strong>repository_dispatch:</strong> External API triggers</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-orange-600 mb-2">??? Runner Types</h4>
                          <ul className="text-slate-800 space-y-2 text-sm">
                            <li>• <strong>GitHub-Hosted:</strong> Ubuntu, Windows, macOS</li>
                            <li>• <strong>Self-Hosted:</strong> Your own infrastructure</li>
                            <li>• <strong>Container Actions:</strong> Docker-based execution</li>
                            <li>• <strong>Composite Actions:</strong> Multiple steps combined</li>
                            <li>• <strong>JavaScript Actions:</strong> Node.js-based actions</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-2xl font-bold text-green-700 mb-4">?? Action Types & Marketplace</h3>
                      <p className="text-slate-900 mb-4">
                        The GitHub Actions Marketplace contains thousands of pre-built actions that can be
                        combined to create sophisticated workflows without writing custom code.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Popular Action Categories</h4>
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                              <h5 className="text-md font-bold text-blue-600 mb-2">??? Build & Deploy</h5>
                              <ul className="text-slate-800 text-sm space-y-1">
                                <li>• <strong>actions/setup-node:</strong> Node.js environment setup</li>
                                <li>• <strong>actions/setup-python:</strong> Python environment setup</li>
                                <li>• <strong>actions/setup-java:</strong> Java environment setup</li>
                                <li>• <strong>docker/build-push-action:</strong> Docker build and push</li>
                                <li>• <strong>azure/webapps-deploy:</strong> Deploy to Azure App Service</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                              <h5 className="text-md font-bold text-green-600 mb-2">?? Testing & Quality</h5>
                              <ul className="text-slate-800 text-sm space-y-1">
                                <li>• <strong>actions/cache:</strong> Cache dependencies</li>
                                <li>• <strong>codecov/codecov-action:</strong> Code coverage reports</li>
                                <li>• <strong>sonarqube-quality-gate-action:</strong> SonarQube analysis</li>
                                <li>• <strong>github/super-linter:</strong> Multi-language linting</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Custom Action Example</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # action.yml<br />
                              name: 'Hello World'<br />
                              description: 'Greet someone and record the time'<br />
                              inputs:<br />
                              &nbsp;&nbsp;who-to-greet:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;description: 'Who to greet'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;required: true<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;default: 'World'<br />
                              outputs:<br />
                              &nbsp;&nbsp;time:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;description: 'The time we greeted you'<br />
                              runs:<br />
                              &nbsp;&nbsp;using: 'node16'<br />
                              &nbsp;&nbsp;main: 'index.js'
                            </code>
                          </div>
                          <div className="bg-slate-900 p-4 rounded shadow-inner">
                            <code className="text-green-400">
                              # index.js<br />
                              const core = require('@actions/core');<br />
                              const github = require('@actions/github');<br /><br />
                              try {`{`}<br />
                              &nbsp;&nbsp;const ms = core.getInput('milliseconds');<br />
                              &nbsp;&nbsp;core.info(`Waiting {'${ms}'} milliseconds ...`);<br /><br />
                              &nbsp;&nbsp;core.info('The current time was: ' + new Date().toTimeString());<br />
                              &nbsp;&nbsp;core.setOutput('time', new Date().toTimeString());<br />
                              {`}`} catch (error) {`{`}<br />
                              &nbsp;&nbsp;core.setFailed(error.message);<br />
                              {`}`}
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                ? Custom action created successfully<br />
                                ? Available for use in workflows<br />
                                ? Can be published to marketplace
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Advanced GitHub Actions Features</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-4">?? Matrix Builds</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Matrix Strategy</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              name: Test Matrix<br />
                              on: [push]<br />
                              jobs:<br />
                              &nbsp;&nbsp;test:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;strategy:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;matrix:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;node-version: [14, 16, 18]<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;os: [ubuntu-latest, windows-latest, macos-latest]<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;include:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- node-version: 19<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;os: ubuntu-latest<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;experimental: true<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;runs-on: {'${{ matrix.os }}'}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;steps:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;- uses: actions/checkout@v3<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;- uses: actions/setup-node@v3<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;node-version: {'${{ matrix.node-version }}'}
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                ? 9 jobs created (3 OS × 3 Node versions)<br />
                                ? All combinations tested in parallel<br />
                                ? Reduced testing time by 70%<br />
                                ? Comprehensive compatibility coverage
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">? Conditional Execution</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              name: Conditional Workflow<br />
                              on: [push, pull_request]<br />
                              jobs:<br />
                              &nbsp;&nbsp;build:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;if: github.ref == 'refs/heads/main'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;runs-on: ubuntu-latest<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;steps:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- name: Build for main branch<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run: npm run build:production<br /><br />
                              &nbsp;&nbsp;test:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;if: github.event_name == 'pull_request'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;runs-on: ubuntu-latest<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;steps:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- name: Test for PR<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run: npm test<br /><br />
                              &nbsp;&nbsp;deploy:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;needs: [build]<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;if: github.ref == 'refs/heads/main'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;runs-on: ubuntu-latest<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;steps:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- name: Deploy to production<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run: npm run deploy
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                ? Workflow triggered on push to main<br />
                                ? Build job executed (main branch)<br />
                                ? Deploy job executed (after build success)<br />
                                ? Test job skipped (not a PR)
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-4">?? Secrets & Environment Management</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Secrets Configuration</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Repository Secrets (Settings ? Secrets):<br />
                              # AWS_ACCESS_KEY_ID<br />
                              # AWS_SECRET_ACCESS_KEY<br />
                              # DATABASE_URL<br />
                              # API_TOKEN<br /><br />
                              # Environment-specific secrets:<br />
                              # Environments: production, staging, development<br />
                              # Each environment can have different secrets<br /><br />
                              # Workflow usage:<br />
                              jobs:<br />
                              &nbsp;&nbsp;deploy:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;environment: production<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;runs-on: ubuntu-latest<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;steps:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- name: Deploy to AWS<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run: aws s3 sync . s3://my-bucket<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;env:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AWS_ACCESS_KEY_ID: {'${{ secrets.AWS_ACCESS_KEY_ID }}'}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AWS_SECRET_ACCESS_KEY: {'${{ secrets.AWS_SECRET_ACCESS_KEY }}'}
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                ? Secrets securely injected into workflow<br />
                                ? Environment protection rules applied<br />
                                ? Manual approval required for production<br />
                                ? Audit trail maintained
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Environment Protection</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Environment protection rules:<br />
                              # 1. Required reviewers (1-6 people)<br />
                              # 2. Wait timer (0-30 days)<br />
                              # 3. Prevent self-review<br />
                              # 4. Deployment branches (specific branches only)<br /><br />
                              # Workflow with environment protection:<br />
                              jobs:<br />
                              &nbsp;&nbsp;deploy-staging:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;environment: staging<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;runs-on: ubuntu-latest<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;steps:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- name: Deploy to staging<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run: echo "Deploying to staging..."<br /><br />
                              &nbsp;&nbsp;deploy-production:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;needs: deploy-staging<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;environment: production<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;runs-on: ubuntu-latest<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;steps:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- name: Deploy to production<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run: echo "Deploying to production..."
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-orange-100 shadow-sm">
                            <p className="text-sm text-orange-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                ? Staging deployment completed<br />
                                ? Production deployment pending approval<br />
                                ?? Approval request sent to reviewers<br />
                                ? Manual approval required before proceeding
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-700 mb-4">?? Workflow Monitoring & Debugging</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Monitoring Commands</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # View workflow runs<br />
                              gh run list --limit 10<br /><br />
                              # View specific workflow run<br />
                              gh run view 1234567890<br /><br />
                              # Download workflow logs<br />
                              gh run download 1234567890<br /><br />
                              # View workflow logs<br />
                              gh run view 1234567890 --log<br /><br />
                              # Rerun failed workflow<br />
                              gh run rerun 1234567890<br /><br />
                              # Cancel running workflow<br />
                              gh run cancel 1234567890<br /><br />
                              # List workflow files<br />
                              gh workflow list
                            </code>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Debugging Features</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Enable debug logging<br />
                              # Repository Settings ? Actions ? General<br />
                              # Set "Enable debug logging" to true<br /><br />
                              # Add debug steps to workflow:<br />
                              steps:<br />
                              &nbsp;&nbsp;- name: Debug environment<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;run: |<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;echo "Runner OS: {'${{ runner.os }}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;echo "GitHub Event: {'${{ github.event_name }}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;echo "Workflow: {'${{ github.workflow }}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;echo "Action: {'${{ github.action }}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;echo "Actor: {'${{ github.actor }}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;env | sort
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-purple-100 shadow-sm">
                            <p className="text-sm text-purple-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                Runner OS: Linux<br />
                                GitHub Event: push<br />
                                Workflow: CI/CD Pipeline<br />
                                Action: build-and-test<br />
                                Actor: developer123<br /><br />
                                Full environment variables displayed
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? GitHub Actions Best Practices</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Do's</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Pin Action Versions:</strong> Use specific commit hashes for stability</li>
                        <li>• <strong>Use Matrix Builds:</strong> Test across multiple environments</li>
                        <li>• <strong>Cache Dependencies:</strong> Speed up builds with caching</li>
                        <li>• <strong>Use Environment Variables:</strong> Make workflows configurable</li>
                        <li>• <strong>Implement Proper Error Handling:</strong> Handle failures gracefully</li>
                        <li>• <strong>Use Environment Protection:</strong> Secure sensitive deployments</li>
                        <li>• <strong>Optimize Workflow Performance:</strong> Use parallel jobs when possible</li>
                        <li>• <strong>Document Workflows:</strong> Add clear comments and descriptions</li>
                        <li>• <strong>Use Workflow Templates:</strong> Standardize common patterns</li>
                        <li>• <strong>Monitor Usage:</strong> Track minutes and storage usage</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-700 mb-3">? Don'ts</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Don't Use Latest Tags:</strong> Pin to specific versions</li>
                        <li>• <strong>Don't Hardcode Secrets:</strong> Use GitHub secrets management</li>
                        <li>• <strong>Don't Ignore Security:</strong> Regular security updates and audits</li>
                        <li>• <strong>Don't Over-Complicate:</strong> Keep workflows simple and readable</li>
                        <li>• <strong>Don't Skip Testing:</strong> Test workflow changes thoroughly</li>
                        <li>• <strong>Don't Ignore Performance:</strong> Optimize for speed and efficiency</li>
                        <li>• <strong>Don't Forget Cleanup:</strong> Clean up artifacts and temporary files</li>
                        <li>• <strong>Don't Skip Documentation:</strong> Document complex workflow logic</li>
                        <li>• <strong>Don't Ignore Costs:</strong> Monitor usage to avoid unexpected charges</li>
                        <li>• <strong>Don't Use Insecure Actions:</strong> Review third-party actions before use</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'gitlab-ci':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="gitlab-ci" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                ?? GitLab CI/CD - Integrated DevOps Platform
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Master GitLab's comprehensive CI/CD platform with built-in DevOps capabilities
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">?? What is GitLab CI/CD?</h2>
                  <p className="text-slate-900 text-xl mb-6">
                    GitLab CI/CD is a comprehensive DevOps platform that combines source code management,
                    continuous integration, continuous deployment, and a complete suite of DevOps tools
                    in a single application. It's designed to streamline the entire software development lifecycle.
                  </p>

                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3">?? The GitLab DevOps Platform</h3>
                    <p className="text-slate-800 mb-4">
                      Unlike standalone CI/CD tools, GitLab provides a unified platform where development,
                      testing, deployment, and monitoring all happen in one place. This integration eliminates
                      toolchain complexity and provides a seamless DevOps experience.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-blue-600 mb-2">?? GitLab CI/CD Advantages</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Unified Platform:</strong> Everything in one application</li>
                          <li>• <strong>Built-in Security:</strong> Security scanning and compliance</li>
                          <li>• <strong>Auto DevOps:</strong> Zero-configuration CI/CD</li>
                          <li>• <strong>Container Registry:</strong> Built-in Docker registry</li>
                          <li>• <strong>Package Registry:</strong> Maven, NPM, PyPI, and more</li>
                          <li>• <strong>Environment Management:</strong> Staging and production environments</li>
                          <li>• <strong>Review Apps:</strong> Preview changes before merge</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-600 mb-2">?? GitLab CI/CD Use Cases</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Full DevOps Lifecycle:</strong> Plan, code, build, test, deploy</li>
                          <li>• <strong>Multi-Language Support:</strong> Any programming language</li>
                          <li>• <strong>Cloud Deployment:</strong> AWS, Azure, GCP, Kubernetes</li>
                          <li>• <strong>Security Integration:</strong> SAST, DAST, dependency scanning</li>
                          <li>• <strong>Performance Testing:</strong> Built-in load testing</li>
                          <li>• <strong>Compliance:</strong> Audit trails and reporting</li>
                          <li>• <strong>Enterprise Features:</strong> Multi-level security and governance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">??? GitLab CI/CD Architecture</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4">?? Pipeline Structure</h3>
                      <p className="text-slate-900 mb-4">
                        GitLab CI/CD uses a declarative YAML configuration to define pipelines. The pipeline
                        consists of stages that contain jobs, which run on GitLab Runners.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-2">?? .gitlab-ci.yml Structure</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # .gitlab-ci.yml<br />
                              stages:<br />
                              &nbsp;&nbsp;- build<br />
                              &nbsp;&nbsp;- test<br />
                              &nbsp;&nbsp;- deploy<br /><br />
                              variables:<br />
                              &nbsp;&nbsp;MAVEN_OPTS: "-Dmaven.repo.local=$CI_PROJECT_DIR/.m2/repository"<br />
                              &nbsp;&nbsp;MAVEN_CLI_OPTS: "--batch-mode --errors --fail-at-end"<br /><br />
                              cache:<br />
                              &nbsp;&nbsp;paths:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;- .m2/repository/<br /><br />
                              build:<br />
                              &nbsp;&nbsp;stage: build<br />
                              &nbsp;&nbsp;image: maven:3.8.6-openjdk-11<br />
                              &nbsp;&nbsp;script:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;- mvn $MAVEN_CLI_OPTS clean compile<br />
                              &nbsp;&nbsp;artifacts:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;paths:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- target/
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                ? Pipeline created successfully<br />
                                ? 3 stages defined: build, test, deploy<br />
                                ? Maven cache configured<br />
                                ? Build artifacts will be stored
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-green-600 mb-2">?? Pipeline Components</h4>
                          <ul className="text-slate-800 space-y-2 text-sm">
                            <li>• <strong>Stages:</strong> Sequential execution phases</li>
                            <li>• <strong>Jobs:</strong> Individual tasks within stages</li>
                            <li>• <strong>Runners:</strong> Virtual machines executing jobs</li>
                            <li>• <strong>Variables:</strong> Custom and predefined variables</li>
                            <li>• <strong>Artifacts:</strong> Files passed between jobs</li>
                            <li>• <strong>Cache:</strong> Dependencies and build outputs</li>
                            <li>• <strong>Environments:</strong> Deployment targets</li>
                            <li>• <strong>Triggers:</strong> Pipeline execution conditions</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? GitLab CI/CD Best Practices</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Do's</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Use Auto DevOps:</strong> Leverage built-in automation</li>
                        <li>• <strong>Implement Review Apps:</strong> Preview changes before merge</li>
                        <li>• <strong>Use Environment Variables:</strong> Make pipelines configurable</li>
                        <li>• <strong>Enable Security Scanning:</strong> Built-in security features</li>
                        <li>• <strong>Use Artifacts Efficiently:</strong> Pass files between jobs</li>
                        <li>• <strong>Implement Proper Caching:</strong> Speed up builds</li>
                        <li>• <strong>Use Parallel Jobs:</strong> Optimize pipeline performance</li>
                        <li>• <strong>Configure Environment Protection:</strong> Secure deployments</li>
                        <li>• <strong>Use GitLab Container Registry:</strong> Built-in Docker registry</li>
                        <li>• <strong>Implement Compliance Checks:</strong> Automated governance</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-700 mb-3">? Don'ts</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Don't Ignore Security:</strong> Use built-in security scanning</li>
                        <li>• <strong>Don't Skip Caching:</strong> Configure proper caching strategies</li>
                        <li>• <strong>Don't Over-Complicate:</strong> Keep pipelines simple and readable</li>
                        <li>• <strong>Don't Ignore Performance:</strong> Optimize for speed and efficiency</li>
                        <li>• <strong>Don't Skip Documentation:</strong> Document pipeline logic</li>
                        <li>• <strong>Don't Ignore Compliance:</strong> Implement governance checks</li>
                        <li>• <strong>Don't Forget Cleanup:</strong> Clean up resources and environments</li>
                        <li>• <strong>Don't Ignore Monitoring:</strong> Track pipeline performance</li>
                        <li>• <strong>Don't Skip Testing:</strong> Test pipeline changes thoroughly</li>
                        <li>• <strong>Don't Ignore Costs:</strong> Monitor runner usage and costs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      // Monitoring Sections
      case 'prometheus-basics':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="prometheus-basics" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                ?? Prometheus Basics - The Monitoring Revolution
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Master time-series metrics collection, querying, and alerting with the industry-standard monitoring platform
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">?? What is Prometheus?</h2>
                  <p className="text-slate-900 text-xl mb-6">
                    Prometheus is a powerful open-source monitoring and alerting toolkit that has become
                    the de facto standard for monitoring cloud-native applications. Originally developed
                    at SoundCloud, it's now a graduated project of the Cloud Native Computing Foundation (CNCF).
                  </p>

                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3">?? The Prometheus Monitoring Revolution</h3>
                    <p className="text-slate-800 mb-4">
                      Prometheus revolutionized monitoring by introducing a pull-based model, dimensional data model,
                      and powerful query language (PromQL). It's designed for reliability, scalability, and
                      comprehensive observability of modern distributed systems.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-blue-600 mb-2">?? Why Prometheus Dominates</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Pull-Based Architecture:</strong> Reliable metrics collection</li>
                          <li>• <strong>Dimensional Data Model:</strong> Flexible labeling system</li>
                          <li>• <strong>PromQL:</strong> Powerful query language</li>
                          <li>• <strong>Service Discovery:</strong> Automatic target discovery</li>
                          <li>• <strong>Time-Series Database:</strong> Optimized for metrics storage</li>
                          <li>• <strong>Cloud-Native:</strong> Built for containerized environments</li>
                          <li>• <strong>Ecosystem:</strong> Rich exporter and integration ecosystem</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-600 mb-2">?? Prometheus Use Cases</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Infrastructure Monitoring:</strong> Servers, containers, Kubernetes</li>
                          <li>• <strong>Application Metrics:</strong> Custom business and technical metrics</li>
                          <li>• <strong>Service Monitoring:</strong> API endpoints, microservices</li>
                          <li>• <strong>Performance Monitoring:</strong> Response times, throughput</li>
                          <li>• <strong>Alerting:</strong> Proactive incident detection</li>
                          <li>• <strong>Capacity Planning:</strong> Resource utilization trends</li>
                          <li>• <strong>SLA Monitoring:</strong> Service level agreement tracking</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">??? Prometheus Architecture Deep Dive</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4">?? Core Components</h3>
                      <p className="text-slate-900 mb-4">
                        Prometheus consists of several key components that work together to provide
                        comprehensive monitoring capabilities for modern applications and infrastructure.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-2">??? Prometheus Server</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Prometheus server components:<br />
                              # 1. Retrieval - Scrapes metrics from targets<br />
                              # 2. Storage - Stores time-series data<br />
                              # 3. Query Engine - Executes PromQL queries<br />
                              # 4. Web UI - Built-in web interface<br /><br />
                              # Start Prometheus server<br />
                              ./prometheus --config.file=prometheus.yml<br /><br />
                              # Access web UI<br />
                              # http://localhost:9090<br /><br />
                              # Check targets<br />
                              curl http://localhost:9090/api/v1/targets
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                level=info ts=2024-12-16T10:30:00.000Z caller=main.go:123 msg="Starting Prometheus" version="2.45.0"<br />
                                level=info ts=2024-12-16T10:30:00.100Z caller=main.go:124 msg="Build context" go="go1.21.0"<br />
                                level=info ts=2024-12-16T10:30:00.200Z caller=main.go:125 msg="Loading configuration file" filename=prometheus.yml<br />
                                level=info ts=2024-12-16T10:30:00.300Z caller=web.go:600 msg="Web server started" address=0.0.0.0:9090
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-2">?? Exporters & Targets</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Node Exporter - System metrics<br />
                              docker run -d --name node-exporter \<br />
                              &nbsp;&nbsp;-p 9100:9100 \<br />
                              &nbsp;&nbsp;prom/node-exporter<br /><br />
                              # cAdvisor - Container metrics<br />
                              docker run -d --name cadvisor \<br />
                              &nbsp;&nbsp;-p 8080:8080 \<br />
                              &nbsp;&nbsp;-v /:/rootfs:ro \<br />
                              &nbsp;&nbsp;-v /var/run:/var/run:ro \<br />
                              &nbsp;&nbsp;gcr.io/cadvisor/cadvisor<br /><br />
                              # Check metrics endpoint<br />
                              curl http://localhost:9100/metrics
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                # HELP node_cpu_seconds_total Seconds the CPUs spent in each mode.<br />
                                # TYPE node_cpu_seconds_total counter<br />
                                node_cpu_seconds_total{'{'}cpu="0",mode="idle"{'}'} 12345.67<br />
                                node_cpu_seconds_total{'{'}cpu="0",mode="system"{'}'} 123.45<br />
                                node_cpu_seconds_total{'{'}cpu="0",mode="user"{'}'} 234.56
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-red-600 mb-2">?? Alertmanager</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Start Alertmanager<br />
                              ./alertmanager --config.file=alertmanager.yml<br /><br />
                              # Alertmanager configuration<br />
                              global:<br />
                              &nbsp;&nbsp;smtp_smarthost: 'localhost:587'<br />
                              &nbsp;&nbsp;smtp_from: 'alerts@company.com'<br />
                              route:<br />
                              &nbsp;&nbsp;group_by: ['alertname']<br />
                              &nbsp;&nbsp;group_wait: 10s<br />
                              &nbsp;&nbsp;group_interval: 10s<br />
                              &nbsp;&nbsp;repeat_interval: 1h<br />
                              &nbsp;&nbsp;receiver: 'web.hook'<br />
                              receivers:<br />
                              &nbsp;&nbsp;- name: 'web.hook'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;webhook_configs:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;- url: 'http://127.0.0.1:5001/'
                            </code>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-orange-600 mb-2">?? Service Discovery</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Kubernetes service discovery<br />
                              scrape_configs:<br />
                              - job_name: 'kubernetes-pods'<br />
                              &nbsp;&nbsp;kubernetes_sd_configs:<br />
                              &nbsp;&nbsp;- role: pod<br />
                              &nbsp;&nbsp;relabel_configs:<br />
                              &nbsp;&nbsp;- source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;action: keep<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;regex: true<br /><br />
                              # Consul service discovery<br />
                              - job_name: 'consul'<br />
                              &nbsp;&nbsp;consul_sd_configs:<br />
                              &nbsp;&nbsp;- server: 'localhost:8500'
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-2xl font-bold text-green-700 mb-4">?? Metric Types & Data Model</h3>
                      <p className="text-slate-900 mb-4">
                        Prometheus uses a dimensional data model where metrics are identified by a metric name
                        and a set of key-value pairs called labels. This provides powerful filtering and aggregation capabilities.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Core Metric Types</h4>
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                              <h5 className="text-md font-bold text-blue-600 mb-2">Counter</h5>
                              <div className="bg-slate-900 p-3 rounded mb-2 shadow-inner">
                                <code className="text-green-400 font-mono text-sm">
                                  # Always increasing values<br />
                                  http_requests_total{'{'}method="GET",status="200"{'}'} 1234<br />
                                  http_requests_total{'{'}method="POST",status="201"{'}'} 567<br /><br />
                                  # PromQL: Rate of increase<br />
                                  rate(http_requests_total[5m])
                                </code>
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                              <h5 className="text-md font-bold text-green-600 mb-2">Gauge</h5>
                              <div className="bg-slate-900 p-3 rounded mb-2 shadow-inner">
                                <code className="text-green-400 font-mono text-sm">
                                  # Values that can go up or down<br />
                                  memory_usage_bytes{'{'}instance="server1"{'}'} 1024000000<br />
                                  cpu_usage_percent{'{'}instance="server1"{'}'} 45.6<br /><br />
                                  # PromQL: Current value<br />
                                  memory_usage_bytes
                                </code>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Advanced Metric Types</h4>
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                              <h5 className="text-md font-bold text-purple-600 mb-2">Histogram</h5>
                              <div className="bg-slate-900 p-3 rounded mb-2 shadow-inner">
                                <code className="text-green-400 font-mono text-sm">
                                  # Distribution of values in buckets<br />
                                  http_request_duration_seconds_bucket{'{'}le="0.1"{'}'} 100<br />
                                  http_request_duration_seconds_bucket{'{'}le="0.5"{'}'} 150<br />
                                  http_request_duration_seconds_bucket{'{'}le="1.0"{'}'} 200<br />
                                  http_request_duration_seconds_count 200<br />
                                  http_request_duration_seconds_sum 45.6<br /><br />
                                  # PromQL: 95th percentile<br />
                                  histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))
                                </code>
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                              <h5 className="text-md font-bold text-orange-600 mb-2">Summary</h5>
                              <div className="bg-slate-900 p-3 rounded mb-2 shadow-inner">
                                <code className="text-green-400 font-mono text-sm">
                                  # Pre-calculated quantiles<br />
                                  rpc_duration_seconds{'{'}quantile="0.5"{'}'} 0.1<br />
                                  rpc_duration_seconds{'{'}quantile="0.9"{'}'} 0.3<br />
                                  rpc_duration_seconds{'{'}quantile="0.99"{'}'} 0.5<br />
                                  rpc_duration_seconds_count 1000<br />
                                  rpc_duration_seconds_sum 150.0
                                </code>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Prometheus Installation & Configuration</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-4">?? Installation Methods</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Docker Installation</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Pull Prometheus image<br />
                              docker pull prom/prometheus:latest<br /><br />
                              # Create configuration directory<br />
                              mkdir -p /opt/prometheus<br /><br />
                              # Create prometheus.yml<br />
                              cat &gt; /opt/prometheus/prometheus.yml &lt;&lt; EOF<br />
                              global:<br />
                              &nbsp;&nbsp;scrape_interval: 15s<br />
                              &nbsp;&nbsp;evaluation_interval: 15s<br /><br />
                              scrape_configs:<br />
                              &nbsp;&nbsp;- job_name: 'prometheus'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;static_configs:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- targets: ['localhost:9090']<br />
                              EOF<br /><br />
                              # Run Prometheus container<br />
                              docker run -d --name prometheus \<br />
                              &nbsp;&nbsp;-p 9090:9090 \<br />
                              &nbsp;&nbsp;-v /opt/prometheus:/etc/prometheus \<br />
                              &nbsp;&nbsp;prom/prometheus:latest
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-blue-900/20 rounded">
                            <p className="text-sm text-blue-300">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                Unable to find image 'prom/prometheus:latest' locally<br />
                                latest: Pulling from prom/prometheus<br />
                                Digest: sha256:abc123...<br />
                                Status: Downloaded newer image for prom/prometheus:latest<br />
                                Container prometheus started successfully<br /><br />
                                Access Prometheus at: http://localhost:9090
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Linux Installation</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Download Prometheus<br />
                              wget https://github.com/prometheus/prometheus/releases/download/v2.45.0/prometheus-2.45.0.linux-amd64.tar.gz<br /><br />
                              # Extract archive<br />
                              tar xvfz prometheus-2.45.0.linux-amd64.tar.gz<br />
                              cd prometheus-2.45.0.linux-amd64<br /><br />
                              # Create systemd service<br />
                              sudo cat &gt; /etc/systemd/system/prometheus.service &lt;&lt; EOF<br />
                              [Unit]<br />
                              Description=Prometheus<br />
                              After=network.target<br /><br />
                              [Service]<br />
                              User=prometheus<br />
                              Group=prometheus<br />
                              Type=simple<br />
                              ExecStart=/opt/prometheus/prometheus --config.file=/opt/prometheus/prometheus.yml<br /><br />
                              [Install]<br />
                              WantedBy=multi-user.target<br />
                              EOF<br /><br />
                              # Start service<br />
                              sudo systemctl enable prometheus<br />
                              sudo systemctl start prometheus
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                prometheus-2.45.0.linux-amd64.tar.gz 100%[==================&gt;] 45.2M<br />
                                Created symlink /etc/systemd/system/multi-user.target.wants/prometheus.service.<br />
                                prometheus.service: Main process exited, code=exited, status=0/SUCCESS<br />
                                prometheus.service: Service has no hold-off time, scheduling restart.<br /><br />
                                Prometheus service started successfully
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-4">?? Configuration & Scraping</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Configuration File</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # prometheus.yml<br />
                              global:<br />
                              &nbsp;&nbsp;scrape_interval: 15s<br />
                              &nbsp;&nbsp;evaluation_interval: 15s<br />
                              &nbsp;&nbsp;external_labels:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;cluster: 'production'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;replica: 'A'<br /><br />
                              rule_files:<br />
                              &nbsp;&nbsp;- "alert_rules.yml"<br /><br />
                              scrape_configs:<br />
                              &nbsp;&nbsp;- job_name: 'prometheus'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;static_configs:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- targets: ['localhost:9090']<br /><br />
                              &nbsp;&nbsp;- job_name: 'node-exporter'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;static_configs:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- targets: ['localhost:9100']<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;scrape_interval: 5s<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;metrics_path: /metrics
                            </code>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Target Management</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Check targets status<br />
                              curl http://localhost:9090/api/v1/targets<br /><br />
                              # Reload configuration<br />
                              curl -X POST http://localhost:9090/-/reload<br /><br />
                              # Check configuration<br />
                              curl http://localhost:9090/api/v1/status/config<br /><br />
                              # Get target metadata<br />
                              curl http://localhost:9090/api/v1/targets/metadata<br /><br />
                              # Query target health<br />
                              curl http://localhost:9090/api/v1/query?query=up
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                {'{"status":"success","data":{"activeTargets":[{"discoveredLabels":{"__address__":"localhost:9090","__metrics_path__":"/metrics","__scheme__":"http","job":"prometheus"},"labels":{"instance":"localhost:9090","job":"prometheus"},"scrapePool":"prometheus","scrapeUrl":"http://localhost:9090/metrics","globalUrl":"http://localhost:9090/metrics","health":"up","lastError":"","lastScrape":"2024-12-16T10:30:00.000Z","lastScrapeDuration":0.001,"lastError":"","lastScrape":"2024-12-16T10:30:00.000Z","lastScrapeDuration":0.001}]}}'}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Prometheus Best Practices</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Do's</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Use Descriptive Labels:</strong> Clear, meaningful label names</li>
                        <li>• <strong>Follow Naming Conventions:</strong> snake_case for metrics, camelCase for labels</li>
                        <li>• <strong>Implement Proper Retention:</strong> Configure appropriate data retention</li>
                        <li>• <strong>Use Service Discovery:</strong> Automate target discovery</li>
                        <li>• <strong>Monitor Cardinality:</strong> Avoid high-cardinality labels</li>
                        <li>• <strong>Set Up Alerting:</strong> Proactive incident detection</li>
                        <li>• <strong>Use Recording Rules:</strong> Pre-compute expensive queries</li>
                        <li>• <strong>Implement Federation:</strong> Scale across multiple Prometheus instances</li>
                        <li>• <strong>Monitor Prometheus Itself:</strong> Self-monitoring and health checks</li>
                        <li>• <strong>Use Appropriate Metric Types:</strong> Choose the right type for your data</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-700 mb-3">? Don'ts</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Don't Use High Cardinality:</strong> Avoid user IDs in labels</li>
                        <li>• <strong>Don't Scrape Too Frequently:</strong> Balance granularity with resource usage</li>
                        <li>• <strong>Don't Ignore Storage:</strong> Plan for storage growth</li>
                        <li>• <strong>Don't Skip Alerting Rules:</strong> Test and validate alert rules</li>
                        <li>• <strong>Don't Use Pushgateway for Metrics:</strong> Only for batch jobs</li>
                        <li>• <strong>Don't Ignore Security:</strong> Secure Prometheus endpoints</li>
                        <li>• <strong>Don't Over-Complicate Queries:</strong> Keep PromQL queries simple</li>
                        <li>• <strong>Don't Ignore Performance:</strong> Monitor query performance</li>
                        <li>• <strong>Don't Skip Documentation:</strong> Document custom metrics</li>
                        <li>• <strong>Don't Ignore Backup:</strong> Backup Prometheus data</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'grafana-dashboards':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="grafana-dashboards" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                ?? Grafana Dashboards - The Visualization Powerhouse
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Master data visualization, dashboard creation, and monitoring with the industry-leading analytics platform
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">?? What is Grafana?</h2>
                  <p className="text-slate-900 text-xl mb-6">
                    Grafana is a powerful open-source analytics and monitoring platform that transforms raw data
                    into beautiful, actionable visualizations. It's the perfect companion to Prometheus and other
                    data sources, enabling teams to create comprehensive dashboards for monitoring and alerting.
                  </p>

                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3">?? The Grafana Visualization Revolution</h3>
                    <p className="text-slate-800 mb-4">
                      Grafana has become the standard for data visualization in DevOps and observability. It provides
                      a unified interface for querying, visualizing, and alerting on metrics from multiple data sources,
                      making complex data accessible and actionable for teams.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-blue-600 mb-2">?? Why Grafana Dominates</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Multi-Source Support:</strong> Prometheus, InfluxDB, Elasticsearch, and more</li>
                          <li>• <strong>Rich Visualization:</strong> 40+ panel types and chart options</li>
                          <li>• <strong>Real-Time Monitoring:</strong> Live data updates and streaming</li>
                          <li>• <strong>Advanced Alerting:</strong> Intelligent notification system</li>
                          <li>• <strong>Template Variables:</strong> Dynamic, interactive dashboards</li>
                          <li>• <strong>Plugin Ecosystem:</strong> 1000+ community plugins</li>
                          <li>• <strong>Team Collaboration:</strong> Shared dashboards and annotations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-600 mb-2">?? Grafana Use Cases</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Infrastructure Monitoring:</strong> Server, container, and cloud metrics</li>
                          <li>• <strong>Application Performance:</strong> APM and business metrics</li>
                          <li>• <strong>Log Analysis:</strong> Centralized log visualization</li>
                          <li>• <strong>Business Intelligence:</strong> KPI and business metrics</li>
                          <li>• <strong>Security Monitoring:</strong> Security events and threats</li>
                          <li>• <strong>Capacity Planning:</strong> Resource utilization trends</li>
                          <li>• <strong>Incident Response:</strong> Real-time alerting and dashboards</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">??? Grafana Architecture & Components</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4">?? Core Architecture</h3>
                      <p className="text-slate-900 mb-4">
                        Grafana's architecture is designed for scalability and flexibility, supporting multiple
                        data sources and providing a unified visualization layer for complex monitoring setups.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-2">??? Grafana Server</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Start Grafana server<br />
                              docker run -d --name grafana \<br />
                              &nbsp;&nbsp;-p 3000:3000 \<br />
                              &nbsp;&nbsp;-v grafana-storage:/var/lib/grafana \<br />
                              &nbsp;&nbsp;grafana/grafana:latest<br /><br />
                              # Access Grafana UI<br />
                              # http://localhost:3000<br />
                              # Default credentials: admin/admin<br /><br />
                              # Check Grafana status<br />
                              curl http://localhost:3000/api/health
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                {"{"}"database":"ok","version":"10.1.0","commit":"abc123"{"}"}<br /><br />
                                Grafana server started successfully<br />
                                Web UI available at: http://localhost:3000
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-green-600 mb-2">?? Data Sources</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Supported data sources:<br />
                              # - Prometheus<br />
                              # - InfluxDB<br />
                              # - Elasticsearch<br />
                              # - MySQL/PostgreSQL<br />
                              # - CloudWatch<br />
                              # - Azure Monitor<br />
                              # - Google Cloud Monitoring<br />
                              # - Loki (logs)<br />
                              # - Jaeger (tracing)<br />
                              # - And 100+ more...
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                ? Prometheus data source configured<br />
                                ? Elasticsearch data source configured<br />
                                ? CloudWatch data source configured<br />
                                ? All data sources healthy
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-purple-600 mb-2">?? Panel Types</h4>
                          <ul className="text-slate-800 space-y-2 text-sm">
                            <li>• <strong>Time Series:</strong> Line, bar, and area charts</li>
                            <li>• <strong>Stat:</strong> Single value displays</li>
                            <li>• <strong>Gauge:</strong> Circular progress indicators</li>
                            <li>• <strong>Bar Gauge:</strong> Horizontal progress bars</li>
                            <li>• <strong>Heatmap:</strong> Density visualization</li>
                            <li>• <strong>Histogram:</strong> Distribution charts</li>
                            <li>• <strong>Logs:</strong> Log message display</li>
                            <li>• <strong>Table:</strong> Tabular data</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-orange-600 mb-2">?? Dashboard Components</h4>
                          <ul className="text-slate-800 space-y-2 text-sm">
                            <li>• <strong>Panels:</strong> Individual visualizations</li>
                            <li>• <strong>Rows:</strong> Panel organization</li>
                            <li>• <strong>Variables:</strong> Dynamic filters</li>
                            <li>• <strong>Annotations:</strong> Event markers</li>
                            <li>• <strong>Templating:</strong> Dynamic dashboards</li>
                            <li>• <strong>Alerting:</strong> Notification rules</li>
                            <li>• <strong>Playlists:</strong> Rotating dashboards</li>
                            <li>• <strong>Snapshots:</strong> Dashboard sharing</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-2xl font-bold text-green-700 mb-4">?? Dashboard Creation & Management</h3>
                      <p className="text-slate-900 mb-4">
                        Creating effective dashboards requires understanding data visualization principles,
                        choosing appropriate panel types, and organizing information for maximum clarity and actionability.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Creating Dashboards</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Create new dashboard<br />
                              # 1. Click "+" ? Dashboard<br />
                              # 2. Add panel ? Choose visualization<br />
                              # 3. Configure data source<br />
                              # 4. Set up query<br />
                              # 5. Customize visualization<br />
                              # 6. Save dashboard<br /><br />
                              # Dashboard JSON example<br />
                              {"{"}<br />
                              &nbsp;&nbsp;"dashboard": {"{"}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;"title": "System Overview",<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;"panels": [<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "CPU Usage",<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "timeseries",<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"targets": [<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"expr": "rate(cpu_usage[5m])"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;]<br />
                              &nbsp;&nbsp;{"}"}<br />
                              {"}"}
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                ? Dashboard created successfully<br />
                                ? 5 panels added<br />
                                ? Variables configured<br />
                                ? Dashboard saved and accessible
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Panel Configuration</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Panel configuration options:<br />
                              # Query Tab:<br />
                              # - Data source selection<br />
                              # - Query builder<br />
                              # - Time range<br />
                              # - Refresh interval<br /><br />
                              # Visualization Tab:<br />
                              # - Chart type selection<br />
                              # - Color schemes<br />
                              # - Axis configuration<br />
                              # - Legend settings<br /><br />
                              # Panel Options:<br />
                              # - Title and description<br />
                              # - Panel size<br />
                              # - Transparent background<br />
                              # - Panel links<br /><br />
                              # Alert Tab:<br />
                              # - Alert rules<br />
                              # - Notification channels<br />
                              # - Alert conditions
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Advanced Grafana Features</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-4">?? Variables & Templating</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-3">?? Variable Types</h4>
                          <div className="bg-gray-900 p-4 rounded mb-3">
                            <code className="text-green-400">
                              # Query Variable<br />
                              # Data source: Prometheus<br />
                              # Query: label_values(instance)<br />
                              # Returns: server1, server2, server3<br /><br />
                              # Custom Variable<br />
                              # Options:<br />
                              # - production : Production<br />
                              # - staging : Staging<br />
                              # - development : Development<br /><br />
                              # Text Box Variable<br />
                              # Name: threshold<br />
                              # Default value: 80<br />
                              # Type: textbox<br /><br />
                              # Interval Variable<br />
                              # Name: refresh_interval<br />
                              # Type: interval<br />
                              # Values: 5s, 10s, 30s, 1m, 5m
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                ? Query variable populated with 15 instances<br />
                                ? Custom variable configured for environments<br />
                                ? Text box variable set to 80<br />
                                ? Interval variable set to 30s
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Template Usage</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Using variables in queries<br />
                              # Prometheus query with variable:<br />
                              cpu_usage{'{'}instance="$instance"{'}'}<br /><br />
                              # Multiple variable selection:<br />
                              cpu_usage{'{'}instance=~"$instance:.*"{'}'}<br /><br />
                              # Conditional queries:<br />
                              {"{"}{'$__condition'} cpu_usage{'{'}env="$environment"{'}'}<br />
                              {"}"}<br /><br />
                              # Panel title with variable:<br />
                              CPU Usage - {'$instance'}<br /><br />
                              # Dashboard URL with variable:<br />
                              /d/system-overview?var-instance=server1&var-environment=production
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-4">?? Alerting & Notifications</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Alert Configuration</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Alert rule configuration<br />
                              # Condition:<br />
                              # WHEN last() OF query(A, 5m, now) IS ABOVE 80<br /><br />
                              # Alert details:<br />
                              # Name: High CPU Usage<br />
                              # Message: CPU usage is above 80%<br />
                              # Frequency: 10s<br />
                              # Handler: 0<br />
                              # No Data: No Data<br />
                              # Execution Error: Alerting<br /><br />
                              # Notification channels:<br />
                              # - Email<br />
                              # - Slack<br />
                              # - PagerDuty<br />
                              # - Webhook<br />
                              # - Teams<br />
                              # - Discord
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                ? Alert rule created successfully<br />
                                ? 3 notification channels configured<br />
                                ? Alert state: OK<br />
                                ? Last evaluation: 2 minutes ago
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Notification Channels</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Slack notification<br />
                              # Webhook URL: https://hooks.slack.com/...<br />
                              # Channel: #alerts<br />
                              # Username: Grafana<br />
                              # Icon emoji: :chart_with_upwards_trend:<br /><br />
                              # Email notification<br />
                              # SMTP Host: smtp.gmail.com<br />
                              # SMTP Port: 587<br />
                              # User: alerts@company.com<br />
                              # Password: ********<br />
                              # From address: grafana@company.com<br /><br />
                              # Webhook notification<br />
                              # URL: https://api.company.com/alerts<br />
                              # HTTP Method: POST<br />
                              # Authorization: Bearer token
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-700 mb-4">?? Dashboard Management & Best Practices</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Dashboard Organization</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Dashboard folder structure:<br />
                              # +-- Infrastructure/<br />
                              # ¦   +-- System Overview<br />
                              # ¦   +-- Network Monitoring<br />
                              # ¦   +-- Storage Monitoring<br />
                              # +-- Applications/<br />
                              # ¦   +-- Web Services<br />
                              # ¦   +-- API Monitoring<br />
                              # ¦   +-- Database Performance<br />
                              # +-- Security/<br />
                              # ¦   +-- Security Events<br />
                              # ¦   +-- Access Logs<br />
                              # +-- Business/<br />
                              #     +-- KPIs<br />
                              #     +-- User Metrics<br /><br />
                              # Dashboard tags:<br />
                              # - production<br />
                              # - infrastructure<br />
                              # - critical<br />
                              # - team:backend
                            </code>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">? Performance Optimization</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Query optimization:<br />
                              # - Use appropriate time ranges<br />
                              # - Limit data points<br />
                              # - Use recording rules<br />
                              # - Optimize PromQL queries<br /><br />
                              # Dashboard optimization:<br />
                              # - Limit panels per dashboard<br />
                              # - Use refresh intervals wisely<br />
                              # - Cache query results<br />
                              # - Use data source caching<br /><br />
                              # Resource management:<br />
                              # - Monitor Grafana metrics<br />
                              # - Scale horizontally<br />
                              # - Use read replicas<br />
                              # - Optimize database
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-purple-100 shadow-sm">
                            <p className="text-sm text-purple-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                ? Dashboard load time: 2.3s<br />
                                ? Query response time: 150ms<br />
                                ? Cache hit rate: 85%<br />
                                ? Memory usage: 512MB
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Grafana Best Practices</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Do's</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Use Meaningful Titles:</strong> Clear, descriptive panel and dashboard names</li>
                        <li>• <strong>Organize with Folders:</strong> Logical grouping of related dashboards</li>
                        <li>• <strong>Implement Variables:</strong> Make dashboards dynamic and reusable</li>
                        <li>• <strong>Use Appropriate Visualizations:</strong> Choose the right chart type for your data</li>
                        <li>• <strong>Set Up Alerting:</strong> Proactive monitoring with intelligent alerts</li>
                        <li>• <strong>Optimize Queries:</strong> Efficient data retrieval and processing</li>
                        <li>• <strong>Document Dashboards:</strong> Add descriptions and annotations</li>
                        <li>• <strong>Use Consistent Styling:</strong> Maintain visual consistency across dashboards</li>
                        <li>• <strong>Implement Access Controls:</strong> Secure dashboard access and permissions</li>
                        <li>• <strong>Monitor Grafana Itself:</strong> Track Grafana performance and health</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-700 mb-3">? Don'ts</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Don't Overload Dashboards:</strong> Limit panels to maintain clarity</li>
                        <li>• <strong>Don't Ignore Performance:</strong> Monitor query and dashboard performance</li>
                        <li>• <strong>Don't Skip Alerting:</strong> Set up comprehensive alerting rules</li>
                        <li>• <strong>Don't Use Poor Visualizations:</strong> Choose appropriate chart types</li>
                        <li>• <strong>Don't Ignore Security:</strong> Secure data sources and access</li>
                        <li>• <strong>Don't Skip Documentation:</strong> Document dashboard purpose and usage</li>
                        <li>• <strong>Don't Ignore User Feedback:</strong> Gather and act on user input</li>
                        <li>• <strong>Don't Over-Complicate:</strong> Keep dashboards simple and focused</li>
                        <li>• <strong>Don't Ignore Data Quality:</strong> Validate data sources and queries</li>
                        <li>• <strong>Don't Skip Maintenance:</strong> Regular updates and cleanup</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'elk-stack':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="elk-stack" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                ?? ELK Stack - The Logging & Analytics Powerhouse
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Master centralized logging, log analysis, and search capabilities with Elasticsearch, Logstash, and Kibana
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200 mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-orange-800 mb-4">?? What is the ELK Stack?</h2>
                  <p className="text-slate-900 text-xl mb-6">
                    The ELK Stack is a powerful collection of three open-source tools that work together to provide
                    comprehensive log management and analytics capabilities. It enables organizations to collect,
                    process, store, search, and visualize logs from multiple sources in real-time.
                  </p>

                  <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3">?? The ELK Stack Revolution</h3>
                    <p className="text-slate-800 mb-4">
                      The ELK Stack has become the de facto standard for log management in modern DevOps environments.
                      It provides a complete solution for centralized logging, enabling teams to troubleshoot issues,
                      monitor system health, and gain insights from log data across distributed systems.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-blue-600 mb-2">?? Why ELK Stack Dominates</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Centralized Logging:</strong> Single source of truth for all logs</li>
                          <li>• <strong>Real-Time Processing:</strong> Immediate log ingestion and analysis</li>
                          <li>• <strong>Powerful Search:</strong> Full-text search with complex queries</li>
                          <li>• <strong>Scalable Architecture:</strong> Handles massive log volumes</li>
                          <li>• <strong>Rich Visualizations:</strong> Interactive dashboards and charts</li>
                          <li>• <strong>Flexible Data Sources:</strong> Supports 100+ log formats</li>
                          <li>• <strong>Open Source:</strong> Cost-effective and customizable</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-600 mb-2">?? ELK Stack Use Cases</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Application Monitoring:</strong> Debug and troubleshoot applications</li>
                          <li>• <strong>Security Analysis:</strong> Detect threats and security incidents</li>
                          <li>• <strong>Performance Monitoring:</strong> Track system and application performance</li>
                          <li>• <strong>Compliance Auditing:</strong> Meet regulatory requirements</li>
                          <li>• <strong>Business Intelligence:</strong> Extract insights from log data</li>
                          <li>• <strong>Infrastructure Monitoring:</strong> Monitor servers and network devices</li>
                          <li>• <strong>DevOps Automation:</strong> Integrate with CI/CD pipelines</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">??? ELK Stack Architecture & Components</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4">?? Core Components Deep Dive</h3>
                      <p className="text-slate-900 mb-4">
                        Each component in the ELK Stack has a specific role in the log management pipeline,
                        working together to provide a complete solution for log collection, processing, storage, and visualization.
                      </p>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-2">?? Elasticsearch</h4>
                          <p className="text-slate-800 text-sm mb-3">
                            Distributed search and analytics engine that stores and indexes log data for fast retrieval and analysis.
                          </p>
                          <div className="bg-slate-900 p-3 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Start Elasticsearch<br />
                              docker run -d --name elasticsearch \<br />
                              &nbsp;&nbsp;-p 9200:9200 -p 9300:9300 \<br />
                              &nbsp;&nbsp;-e "discovery.type=single-node" \<br />
                              &nbsp;&nbsp;-e "xpack.security.enabled=false" \<br />
                              &nbsp;&nbsp;elasticsearch:8.11.0<br /><br />
                              # Check Elasticsearch health<br />
                              curl http://localhost:9200/_cluster/health
                            </code>
                          </div>
                          <div className="mt-3 p-2 bg-blue-50 rounded border border-blue-100">
                            <p className="text-xs text-blue-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                {"{"}"cluster_name":"docker-cluster","status":"yellow","number_of_nodes":1{"}"}
                              </span>
                            </p>
                          </div>
                          <ul className="text-slate-800 space-y-1 text-xs mt-2">
                            <li>• Full-text search capabilities</li>
                            <li>• Real-time analytics</li>
                            <li>• Horizontal scaling</li>
                            <li>• RESTful API</li>
                            <li>• Document-oriented storage</li>
                            <li>• Sharding and replication</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-green-600 mb-2">?? Logstash</h4>
                          <p className="text-slate-800 text-sm mb-3">
                            Data processing pipeline that ingests, transforms, and loads data from various sources into Elasticsearch.
                          </p>
                          <div className="bg-slate-900 p-3 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Start Logstash<br />
                              docker run -d --name logstash \<br />
                              &nbsp;&nbsp;-p 5044:5044 \<br />
                              &nbsp;&nbsp;-v /path/to/logstash.conf:/usr/share/logstash/pipeline/logstash.conf \<br />
                              &nbsp;&nbsp;logstash:8.11.0<br /><br />
                              # Check Logstash status<br />
                              curl http://localhost:9600/_node/stats
                            </code>
                          </div>
                          <div className="mt-3 p-2 bg-green-50 rounded border border-green-100">
                            <p className="text-xs text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                {'{"status":"green","pipeline":{"events":1500,"plugins":3}}'}
                              </span>
                            </p>
                          </div>
                          <ul className="text-slate-800 space-y-1 text-xs mt-2">
                            <li>• Data ingestion from multiple sources</li>
                            <li>• Log parsing and enrichment</li>
                            <li>• Data transformation and filtering</li>
                            <li>• Multiple input/output plugins</li>
                            <li>• Real-time processing</li>
                            <li>• Error handling and retry logic</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-purple-600 mb-2">?? Kibana</h4>
                          <p className="text-slate-800 text-sm mb-3">
                            Web interface that provides visualization and exploration capabilities for data stored in Elasticsearch.
                          </p>
                          <div className="bg-slate-900 p-3 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Start Kibana<br />
                              docker run -d --name kibana \<br />
                              &nbsp;&nbsp;-p 5601:5601 \<br />
                              &nbsp;&nbsp;-e "ELASTICSEARCH_HOSTS=http://elasticsearch:9200" \<br />
                              &nbsp;&nbsp;kibana:8.11.0<br /><br />
                              # Access Kibana UI<br />
                              # http://localhost:5601
                            </code>
                          </div>
                          <div className="mt-3 p-2 bg-purple-50 rounded border border-purple-100">
                            <p className="text-xs text-purple-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                Kibana server started successfully<br />
                                Web UI available at: http://localhost:5601
                              </span>
                            </p>
                          </div>
                          <ul className="text-slate-800 space-y-1 text-xs mt-2">
                            <li>• Interactive data visualization</li>
                            <li>• Dashboard creation and sharing</li>
                            <li>• Real-time monitoring</li>
                            <li>• Advanced search interface</li>
                            <li>• Machine learning integration</li>
                            <li>• Alert and notification management</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-2xl font-bold text-green-700 mb-4">?? Data Flow & Processing Pipeline</h3>
                      <p className="text-slate-900 mb-4">
                        Understanding the data flow through the ELK Stack is crucial for designing effective log management
                        architectures and troubleshooting issues in the pipeline.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Log Processing Pipeline</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Logstash configuration example<br />
                              # Input: Read from log files<br />
                              # Filter: Parse and transform logs<br />
                              # Output: Send to Elasticsearch<br />
                              <br />
                              # Example simplified configuration:<br />
                              input {'{'}<br />
                              &nbsp;&nbsp;file {'{'}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;path {'=>'} "/var/log/application.log"<br />
                              &nbsp;&nbsp;{'}'}<br />
                              {'}'}<br /><br />
                              filter {'{'}<br />
                              &nbsp;&nbsp;grok {'{'}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;match {'=>'} {'{"message": "timestamp level message"}'}<br />
                              &nbsp;&nbsp;{'}'}<br />
                              {'}'}<br /><br />
                              output {'{'}<br />
                              &nbsp;&nbsp;elasticsearch {'{'}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;hosts {'=>'} ["elasticsearch:9200"]<br />
                              &nbsp;&nbsp;{'}'}<br />
                              {'}'}
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                ? Logstash pipeline started successfully<br />
                                ? Processing 150 logs per second<br />
                                ? Connected to Elasticsearch cluster<br />
                                ? Index created: application-logs-2024.12.16
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Data Flow Steps</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # 1. Data Ingestion<br />
                              # - File beats, Logstash, or direct API<br />
                              # - Multiple input sources<br />
                              # - Real-time or batch processing<br /><br />
                              # 2. Data Processing<br />
                              # - Parsing and enrichment<br />
                              # - Filtering and transformation<br />
                              # - Data validation and cleaning<br /><br />
                              # 3. Data Storage<br />
                              # - Indexed in Elasticsearch<br />
                              # - Distributed across shards<br />
                              # - Replicated for availability<br /><br />
                              # 4. Data Visualization<br />
                              # - Kibana dashboards<br />
                              # - Real-time monitoring<br />
                              # - Search and analysis
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? ELK Stack Implementation & Configuration</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-4">?? Installation & Setup</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Docker Compose Setup</h4>
                          <div className="bg-gray-900 p-4 rounded mb-3">
                            <code className="text-green-400">
                              # docker-compose.yml<br />
                              version: '3.8'<br />
                              services:<br />
                              &nbsp;&nbsp;elasticsearch:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;image: elasticsearch:8.11.0<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;container_name: elasticsearch<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- discovery.type=single-node<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- xpack.security.enabled=false<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;ports:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "9200:9200"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;volumes:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- es_data:/usr/share/elasticsearch/data<br /><br />
                              &nbsp;&nbsp;kibana:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;image: kibana:8.11.0<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;container_name: kibana<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ELASTICSEARCH_HOSTS=http://elasticsearch:9200<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;ports:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "5601:5601"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- elasticsearch<br /><br />
                              volumes:<br />
                              &nbsp;&nbsp;es_data:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;driver: local
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                ? Elasticsearch container started<br />
                                ? Kibana container started<br />
                                ? Elasticsearch health: green<br />
                                ? Kibana UI available at http://localhost:5601
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Start ELK Stack</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Start the entire stack<br />
                              docker-compose up -d<br /><br />
                              # Check service status<br />
                              docker-compose ps<br /><br />
                              # View logs<br />
                              docker-compose logs elasticsearch<br />
                              docker-compose logs kibana<br /><br />
                              # Stop the stack<br />
                              docker-compose down<br /><br />
                              # Clean up volumes<br />
                              docker-compose down -v
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800 font-mono text-xs">
                                Name                Command               State           Ports<br />
                                -----------------------------------------------------------<br />
                                elasticsearch       /usr/local/bin/docker-entrypoint.sh es   Up      0.0.0.0:9200-&gt;9200/tcp<br />
                                kibana              /usr/local/bin/docker-entrypoint.sh kibana   Up      0.0.0.0:5601-&gt;5601/tcp
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-4">?? Kibana Dashboard Creation</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Creating Visualizations</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Kibana dashboard creation steps:<br />
                              # 1. Create Index Pattern<br />
                              # - Go to Stack Management ? Index Patterns<br />
                              # - Create pattern: application-logs-*<br />
                              # - Select time field: @timestamp<br /><br />
                              # 2. Create Visualizations<br />
                              # - Line chart for error trends<br />
                              # - Pie chart for log levels<br />
                              # - Data table for top errors<br />
                              # - Metric for total logs<br /><br />
                              # 3. Create Dashboard<br />
                              # - Add visualizations to dashboard<br />
                              # - Arrange panels for best view<br />
                              # - Set auto-refresh interval<br />
                              # - Save and share dashboard
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                ? Index pattern created: application-logs-*<br />
                                ? 4 visualizations created<br />
                                ? Dashboard "Application Monitoring" saved<br />
                                ? Auto-refresh set to 30 seconds
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Search & Query Examples</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Kibana search queries:<br />
                              # Error logs only<br />
                              level:ERROR<br /><br />
                              # Specific application<br />
                              application:"web-api" AND level:ERROR<br /><br />
                              # Time range with wildcard<br />
                              message:*timeout* AND @timestamp:[now-1h TO now]<br /><br />
                              # Field exists<br />
                              _exists_:user_id<br /><br />
                              # Numeric range<br />
                              response_time:[100 TO 500]<br /><br />
                              # Regex search<br />
                              message:/\\d{3}-\\d{3}-\\d{4}/
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-700 mb-4">?? Monitoring & Alerting</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? ELK Stack Monitoring</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Monitor Elasticsearch cluster<br />
                              curl http://localhost:9200/_cluster/health?pretty<br /><br />
                              # Check node stats<br />
                              curl http://localhost:9200/_nodes/stats?pretty<br /><br />
                              # Monitor indices<br />
                              curl http://localhost:9200/_cat/indices?v<br /><br />
                              # Check Logstash pipeline<br />
                              curl http://localhost:9600/_node/stats/pipelines?pretty<br /><br />
                              # Monitor Kibana<br />
                              curl http://localhost:5601/api/status
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-purple-100 shadow-sm">
                            <p className="text-sm text-purple-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                {"{"}<br />
                                "cluster_name" : "docker-cluster",<br />
                                "status" : "green",<br />
                                "number_of_nodes" : 1,<br />
                                "active_shards" : 12,<br />
                                "relocating_shards" : 0<br />
                                {"}"}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Alerting Configuration</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Kibana alerting rules:<br />
                              # 1. Create Watcher<br />
                              # - Go to Stack Management ? Watcher<br />
                              # - Create new watch<br />
                              # - Set trigger condition<br />
                              # - Configure actions<br /><br />
                              # 2. Alert Conditions<br />
                              # - Error rate gt 5%<br />
                              # - Response time gt 1000ms<br />
                              # - Disk usage gt 80%<br />
                              # - Memory usage gt 90%<br /><br />
                              # 3. Notification Actions<br />
                              # - Email notifications<br />
                              # - Slack webhooks<br />
                              # - PagerDuty integration<br />
                              # - Custom webhooks
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? ELK Stack Best Practices</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Do's</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Use Index Templates:</strong> Consistent index structure and settings</li>
                        <li>• <strong>Implement ILM Policies:</strong> Automatic index lifecycle management</li>
                        <li>• <strong>Optimize Mapping:</strong> Proper field types and analyzers</li>
                        <li>• <strong>Monitor Cluster Health:</strong> Regular health checks and alerts</li>
                        <li>• <strong>Use Shard Allocation:</strong> Proper shard sizing and distribution</li>
                        <li>• <strong>Implement Security:</strong> Enable authentication and encryption</li>
                        <li>• <strong>Regular Backups:</strong> Snapshot and restore strategies</li>
                        <li>• <strong>Performance Tuning:</strong> Optimize JVM and system settings</li>
                        <li>• <strong>Log Rotation:</strong> Manage log file sizes and retention</li>
                        <li>• <strong>Documentation:</strong> Document configurations and procedures</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-700 mb-3">? Don'ts</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Don't Ignore Mapping:</strong> Avoid dynamic mapping issues</li>
                        <li>• <strong>Don't Over-Shard:</strong> Avoid too many small shards</li>
                        <li>• <strong>Don't Skip Monitoring:</strong> Monitor cluster performance</li>
                        <li>• <strong>Don't Ignore Security:</strong> Secure your ELK deployment</li>
                        <li>• <strong>Don't Over-Index:</strong> Index only necessary fields</li>
                        <li>• <strong>Don't Ignore Retention:</strong> Implement proper data retention</li>
                        <li>• <strong>Don't Skip Backups:</strong> Regular backup procedures</li>
                        <li>• <strong>Don't Ignore Updates:</strong> Keep components updated</li>
                        <li>• <strong>Don't Over-Complicate:</strong> Keep configurations simple</li>
                        <li>• <strong>Don't Ignore Performance:</strong> Monitor and optimize performance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'alerting':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="alerting" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                🚨 Alerting & Incident Response - Proactive Operations
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Master intelligent alerting strategies, incident response workflows, and operational excellence practices
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-red-50 p-8 rounded-2xl border border-red-200 mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-red-800 mb-4">📢 What is Alerting & Incident Response?</h2>
                  <p className="text-slate-900 text-xl mb-6">
                    Alerting and incident response are critical components of modern DevOps operations that ensure
                    system reliability, rapid issue detection, and effective problem resolution. They form the backbone
                    of proactive monitoring and operational excellence in production environments.
                  </p>

                  <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3">⚡ The Alerting & Incident Response Revolution</h3>
                    <p className="text-slate-800 mb-4">
                      Modern alerting and incident response have evolved from reactive firefighting to proactive,
                      intelligent operations that prevent issues before they impact users. They combine advanced
                      monitoring, machine learning, and well-defined processes to maintain high service availability.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-blue-600 mb-2">💡 Why Alerting & Incident Response Matter</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Proactive Monitoring:</strong> Detect issues before user impact</li>
                          <li>• <strong>Rapid Response:</strong> Minimize mean time to resolution (MTTR)</li>
                          <li>• <strong>Business Continuity:</strong> Maintain service availability</li>
                          <li>• <strong>Learning Culture:</strong> Continuous improvement from incidents</li>
                          <li>• <strong>Automated Remediation:</strong> Self-healing systems</li>
                          <li>• <strong>Team Collaboration:</strong> Effective communication during crises</li>
                          <li>• <strong>Compliance:</strong> Meet SLA and regulatory requirements</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-600 mb-2">🔑 Key Components</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong>Intelligent Alerting:</strong> Smart, actionable notifications</li>
                          <li>• <strong>Incident Management:</strong> Structured response workflows</li>
                          <li>• <strong>Escalation Procedures:</strong> Clear escalation paths</li>
                          <li>• <strong>Communication Channels:</strong> Effective team coordination</li>
                          <li>• <strong>Post-Incident Reviews:</strong> Learning and improvement</li>
                          <li>• <strong>Runbooks:</strong> Standardized response procedures</li>
                          <li>• <strong>Metrics & Analytics:</strong> Performance measurement</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">🧠 Intelligent Alerting Strategies</h2>

                  <div className="space-y-8">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-2xl font-bold text-red-700 mb-4">🎯 Alert Design Principles</h3>
                      <p className="text-slate-900 mb-4">
                        Effective alerting requires careful design to avoid alert fatigue while ensuring critical
                        issues are never missed. The key is creating actionable, relevant alerts that drive immediate response.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-red-600 mb-2">📊 Alert Classification</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Alert severity levels<br />
                              # CRITICAL - Service down, immediate action required<br />
                              # HIGH - Service degraded, action needed within 15 minutes<br />
                              # MEDIUM - Performance issues, action needed within 1 hour<br />
                              # LOW - Monitoring anomalies, action needed within 24 hours<br />
                              # INFO - Informational, no immediate action required<br /><br />
                              # Alert examples:<br />
                              # CRITICAL: Database connection pool exhausted<br />
                              # HIGH: CPU usage above 90% for 5 minutes<br />
                              # MEDIUM: Response time above 2 seconds<br />
                              # LOW: Disk usage above 80%<br />
                              # INFO: New deployment completed
                            </code>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-white rounded border border-red-100 shadow-sm">
                          <p className="text-sm text-red-800">
                            <strong>📈 Output:</strong><br />
                            <span className="text-slate-800">
                              ✓ 15 CRITICAL alerts configured<br />
                              ✓ 32 HIGH alerts configured<br />
                              ✓ 45 MEDIUM alerts configured<br />
                              ✓ 23 LOW alerts configured<br />
                              ✓ Alert routing configured by severity
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-bold text-red-600 mb-2">⚡ Alert Conditions & Thresholds</h4>
                      <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Prometheus alert rules<br />
                          groups:<br />
                          - name: application_alerts<br />
                          &nbsp;&nbsp;rules:<br />
                          &nbsp;&nbsp;- alert: HighErrorRate<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;expr: rate(http_requests_total{'{'}status=~"5.."{'}'} [5m]) gt 0.1<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;for: 2m<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;labels:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;severity: critical<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;annotations:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;summary: "High error rate detected"<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description: "Error rate is high"<br /><br />
                          - alert: HighMemoryUsage<br />
                          &nbsp;&nbsp;expr: node_memory_usage_percent gt 0.9<br />
                          &nbsp;&nbsp;for: 5m<br />
                          &nbsp;&nbsp;labels:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;severity: high
                        </code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h3 className="text-2xl font-bold text-green-700 mb-4">🔔 Alert Routing & Notification Channels</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-bold text-green-700 mb-3">📨 Notification Channels</h4>
                      <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Alertmanager configuration<br />
                          route:<br />
                          &nbsp;&nbsp;group_by: ['alertname', 'cluster']<br />
                          &nbsp;&nbsp;group_wait: 10s<br />
                          &nbsp;&nbsp;group_interval: 10s<br />
                          &nbsp;&nbsp;repeat_interval: 1h<br />
                          &nbsp;&nbsp;receiver: 'web.hook'<br />
                          &nbsp;&nbsp;routes:<br />
                          &nbsp;&nbsp;- match:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;severity: critical<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;receiver: 'critical-alerts'<br />
                          &nbsp;&nbsp;- match:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;severity: high<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;receiver: 'high-alerts'<br /><br />
                          receivers:<br />
                          - name: 'critical-alerts'<br />
                          &nbsp;&nbsp;slack_configs:<br />
                          &nbsp;&nbsp;- api_url: 'https://hooks.slack.com/...'<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;channel: '#critical-alerts'<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;title: "Critical Alert: System Issue"<br />
                          &nbsp;&nbsp;email_configs:<br />
                          &nbsp;&nbsp;- to: 'oncall@company.com'<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;from: 'alerts@company.com'<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;subject: "CRITICAL: Alert triggered"
                        </code>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-green-700 mb-3">⏫ Escalation Procedures</h4>
                      <div className="bg-gray-900 p-4 rounded mb-3">
                        <code className="text-green-400">
                          # Escalation timeline:<br />
                          # T+0: Alert triggered, primary on-call notified<br />
                          # T+5min: If no acknowledgment, escalate to team lead<br />
                          # T+15min: If no response, escalate to manager<br />
                          # T+30min: If unresolved, escalate to director<br /><br />
                          # PagerDuty escalation policy:<br />
                          # Level 1: Primary on-call (0-5 min)<br />
                          # Level 2: Secondary on-call (5-15 min)<br />
                          # Level 3: Team lead (15-30 min)<br />
                          # Level 4: Engineering manager (30+ min)
                        </code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">🎓 Alerting & Incident Response Best Practices</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Do's</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Design Actionable Alerts:</strong> Every alert should have clear next steps</li>
                        <li>• <strong>Implement Alert Grouping:</strong> Reduce noise with intelligent grouping</li>
                        <li>• <strong>Use Runbooks:</strong> Standardize response procedures</li>
                        <li>• <strong>Practice Regularly:</strong> Conduct incident response drills</li>
                        <li>• <strong>Monitor Alerting Health:</strong> Track alerting system performance</li>
                        <li>• <strong>Document Everything:</strong> Comprehensive incident documentation</li>
                        <li>• <strong>Learn from Incidents:</strong> Regular post-mortems and improvements</li>
                        <li>• <strong>Automate Where Possible:</strong> Reduce manual intervention</li>
                        <li>• <strong>Communicate Proactively:</strong> Keep stakeholders informed</li>
                        <li>• <strong>Measure and Improve:</strong> Track KPIs and optimize</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-700 mb-3">❌ Don'ts</h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong>Don't Create Alert Fatigue:</strong> Avoid too many non-actionable alerts</li>
                        <li>• <strong>Don't Skip Post-Mortems:</strong> Always learn from incidents</li>
                        <li>• <strong>Don't Ignore False Positives:</strong> Continuously tune alerting</li>
                        <li>• <strong>Don't Blame Individuals:</strong> Focus on process improvements</li>
                        <li>• <strong>Don't Skip Escalation:</strong> Follow proper escalation procedures</li>
                        <li>• <strong>Don't Ignore Metrics:</strong> Monitor and improve KPIs</li>
                        <li>• <strong>Don't Over-Automate:</strong> Balance automation with human judgment</li>
                        <li>• <strong>Don't Skip Communication:</strong> Keep teams and users informed</li>
                        <li>• <strong>Don't Ignore Documentation:</strong> Maintain up-to-date runbooks</li>
                        <li>• <strong>Don't Neglect Training:</strong> Regular team training and drills</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      // Linux Fundamentals Sections
      case 'linux-introduction':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="linux-introduction" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                ?? Linux Introduction for DevOps
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Master the Linux command line - the foundation of modern DevOps
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">?? Our Linux Learning Goal</h2>
                  <p className="text-slate-900 text-xl mb-4">Go from zero to intermediate with the Linux command line – the backbone of servers, cloud systems, and automation.</p>
                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3">What You'll Achieve</h3>
                    <ul className="text-slate-800 space-y-2">
                      <li>• <strong className="text-slate-900">Command Line Mastery:</strong> Navigate and manage files efficiently</li>
                      <li>• <strong className="text-slate-900">System Administration:</strong> Manage processes, users, and permissions</li>
                      <li>• <strong className="text-slate-900">Automation Skills:</strong> Write shell scripts for task automation</li>
                      <li>• <strong className="text-slate-900">DevOps Foundation:</strong> Build the skills needed for containerization and cloud</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? What is Linux? A Comprehensive Guide</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4">?? Linux Definition & History</h3>
                      <p className="text-lg text-slate-900 mb-4">
                        <strong className="text-black">Linux</strong> is an open-source operating system kernel created by Linus Torvalds in 1991.
                        It forms the core of most server operating systems and is the foundation of modern cloud computing and DevOps practices.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-3">?? Historical Context</h4>
                          <ul className="text-slate-800 space-y-2 text-sm">
                            <li>• <strong>1991:</strong> Linus Torvalds creates Linux kernel</li>
                            <li>• <strong>1992:</strong> First distributions (Debian, Slackware)</li>
                            <li>• <strong>2004:</strong> Ubuntu launches, making Linux user-friendly</li>
                            <li>• <strong>2010s:</strong> Linux dominates cloud and containers</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-blue-600 mb-3">?? Why DevOps Engineers Need Linux</h4>
                          <ul className="text-slate-800 space-y-2 text-sm">
                            <li>• <strong>Server Management:</strong> Most servers run Linux</li>
                            <li>• <strong>Containerization:</strong> Docker and Kubernetes are Linux-native</li>
                            <li>• <strong>Cloud Platforms:</strong> AWS, Azure, GCP use Linux</li>
                            <li>• <strong>Automation:</strong> Scripting and configuration management</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'linux-file-system':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="linux-file-system" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                ?? Linux File System Structure
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Understand the Linux directory hierarchy and file system organization
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Linux Directory Structure</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3">?? Essential Directories</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          /                 # Root directory<br />
                          /home            # User home directories<br />
                          /etc             # System configuration files<br />
                          /var             # Variable data (logs, cache)<br />
                          /tmp             # Temporary files<br />
                          /usr             # User programs and data<br />
                          /bin             # Essential binaries<br />
                          /sbin            # System binaries<br />
                          /opt             # Optional software packages
                        </code>
                      </div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-3">?? Important Files</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          /etc/passwd      # User accounts<br />
                          /etc/hosts       # Hostname resolution<br />
                          /etc/fstab       # File system table<br />
                          /proc/cpuinfo    # CPU information<br />
                          /proc/meminfo    # Memory information<br />
                          /var/log/syslog  # System logs<br />
                          ~/.bashrc        # Bash configuration<br />
                          ~/.profile       # User profile
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'linux-navigation':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="linux-navigation" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                ?? Linux Navigation Commands
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Master the essential commands to navigate the Linux file system
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Essential Navigation Commands</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3">?? Basic Navigation</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Show current directory<br />
                          pwd<br /><br />
                          # List directory contents<br />
                          ls<br /><br />
                          # Change directory<br />
                          cd /path/to/directory<br /><br />
                          # Go to home directory<br />
                          cd ~<br /><br />
                          # Go to parent directory<br />
                          cd ..
                        </code>
                      </div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-3">?? Advanced Listing</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Detailed listing<br />
                          ls -l<br /><br />
                          # Show hidden files<br />
                          ls -a<br /><br />
                          # Human readable sizes<br />
                          ls -lh<br /><br />
                          # Sort by time<br />
                          ls -lt<br /><br />
                          # Recursive listing<br />
                          ls -R
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'linux-file-management':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="linux-file-management" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                ?? File & Directory Management
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Create, copy, move, and delete files and directories efficiently
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? File Management Commands</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3">?? File Operations</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Create empty file<br />
                          touch filename.txt<br /><br />
                          # Copy file<br />
                          cp source.txt dest.txt<br /><br />
                          # Move/rename file<br />
                          mv oldname.txt newname.txt<br /><br />
                          # Remove file<br />
                          rm filename.txt<br /><br />
                          # Remove directory<br />
                          rm -rf directory/
                        </code>
                      </div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-3">?? Directory Operations</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Create directory<br />
                          mkdir newdir<br /><br />
                          # Create nested directories<br />
                          mkdir -p path/to/dir<br /><br />
                          # Copy directory<br />
                          cp -r sourcedir destdir<br /><br />
                          # Move directory<br />
                          mv olddir newdir<br /><br />
                          # Remove empty directory<br />
                          rmdir emptydir
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'linux-permissions':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="linux-permissions" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                ?? Linux Permissions
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Understand and manage Linux file permissions and user accounts
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Permission System</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3">?? Permission Types</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # View permissions<br />
                          ls -l<br /><br />
                          # Change permissions<br />
                          chmod 755 filename<br /><br />
                          # Symbolic permissions<br />
                          chmod u+x filename<br /><br />
                          # Change ownership<br />
                          chown user:group file<br /><br />
                          # Change group<br />
                          chgrp groupname file
                        </code>
                      </div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-3">?? Permission Numbers</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Read = 4, Write = 2, Execute = 1<br />
                          7 = 4+2+1 (rwx)<br />
                          6 = 4+2 (rw-)<br />
                          5 = 4+1 (r-x)<br />
                          4 = 4 (r--)<br /><br />
                          # Common permissions:<br />
                          755 = rwxr-xr-x<br />
                          644 = rw-r--r--<br />
                          600 = rw-------
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'linux-process-management':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="linux-process-management" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                ?? Process Management
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Monitor and manage running processes and system resources
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Process Management Commands</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3">?? Process Monitoring</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # List running processes<br />
                          ps aux<br /><br />
                          # Interactive process viewer<br />
                          top<br /><br />
                          # Modern process viewer<br />
                          htop<br /><br />
                          # Show process tree<br />
                          pstree<br /><br />
                          # Find process by name<br />
                          pgrep process_name
                        </code>
                      </div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-3">?? Process Control</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Kill process by PID<br />
                          kill PID<br /><br />
                          # Force kill process<br />
                          kill -9 PID<br /><br />
                          # Kill process by name<br />
                          killall process_name<br /><br />
                          # Run process in background<br />
                          command &<br /><br />
                          # Bring background job to foreground<br />
                          fg
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'linux-networking':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="linux-networking" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                ?? Linux Networking
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Network configuration, connectivity, and troubleshooting
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Networking Commands</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3">?? Network Information</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Show network interfaces<br />
                          ip addr<br /><br />
                          # Show routing table<br />
                          ip route<br /><br />
                          # Show network statistics<br />
                          netstat -tuln<br /><br />
                          # Show listening ports<br />
                          ss -tuln<br /><br />
                          # Show network connections<br />
                          lsof -i
                        </code>
                      </div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-3">?? Connectivity Testing</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Test connectivity<br />
                          ping google.com<br /><br />
                          # Test port connectivity<br />
                          telnet host port<br /><br />
                          # Download files<br />
                          wget URL<br /><br />
                          # Transfer files<br />
                          scp file user@host:/path<br /><br />
                          # Remote shell<br />
                          ssh user@host
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'linux-shell-scripting':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="linux-shell-scripting" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                ?? Shell Scripting
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Automate tasks with shell scripts
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Shell Scripting Fundamentals</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3">?? Basic Script Structure</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          #!/bin/bash<br />
                          # This is a comment<br /><br />
                          echo "Hello World"<br /><br />
                          # Variables<br />
                          NAME="DevOps"<br />
                          echo "Welcome to $NAME"<br /><br />
                          # Make script executable<br />
                          chmod +x script.sh
                        </code>
                      </div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-3">?? Control Structures</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # If statement<br />
                          if [ $1 -gt 10 ]; then<br />
                          &nbsp;&nbsp;echo "Greater than 10"<br />
                          fi<br /><br />
                          # For loop<br />
                          for i in {'{'}{'1..5'}{'}'}; do<br />
                          &nbsp;&nbsp;echo $i<br />
                          done<br /><br />
                          # While loop<br />
                          while [ $i -lt 5 ]; do<br />
                          &nbsp;&nbsp;echo $i<br />
                          done
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      // Version Control Sections
      case 'git-fundamentals':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="git-fundamentals" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                ?? Git Fundamentals
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Master the foundation of version control with Git
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">?? What is Git?</h2>
                  <p className="text-slate-900 text-xl mb-4">
                    Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
                    It's the backbone of modern software development and DevOps practices.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                      <h3 className="text-xl font-bold text-blue-700 mb-3">?? Key Concepts</h3>
                      <ul className="text-slate-800 space-y-2">
                        <li>• <strong className="text-slate-900">Repository:</strong> Storage for your project and its history</li>
                        <li>• <strong className="text-slate-900">Commit:</strong> Snapshot of your code at a point in time</li>
                        <li>• <strong className="text-slate-900">Branch:</strong> Parallel version of your code</li>
                        <li>• <strong className="text-slate-900">Merge:</strong> Combining changes from different branches</li>
                        <li>• <strong className="text-slate-900">Remote:</strong> Version of repository hosted elsewhere</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                      <h3 className="text-xl font-bold text-green-700 mb-3">? Why Git Matters in DevOps</h3>
                      <ul className="text-slate-800 space-y-2">
                        <li>• <strong className="text-slate-900">Collaboration:</strong> Multiple developers working together</li>
                        <li>• <strong className="text-slate-900">History:</strong> Track all changes and rollback if needed</li>
                        <li>• <strong className="text-slate-900">Branching:</strong> Feature development without conflicts</li>
                        <li>• <strong className="text-slate-900">CI/CD Integration:</strong> Automated deployments from code</li>
                        <li>• <strong className="text-slate-900">Infrastructure as Code:</strong> Version control for infrastructure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Essential Git Commands</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3">??? Repository Setup</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Initialize new repository<br />
                          git init<br /><br />
                          # Clone existing repository<br />
                          git clone https://github.com/user/repo.git<br /><br />
                          # Check repository status<br />
                          git status<br /><br />
                          # View commit history<br />
                          git log --oneline
                        </code>
                      </div>
                      <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                        <p className="text-sm text-green-800">
                          <strong>?? Output:</strong> Shows repository initialization, cloned files, and commit history
                        </p>
                      </div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-3">?? Basic Workflow</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Add files to staging<br />
                          git add filename.txt<br />
                          git add .<br /><br />
                          # Commit changes<br />
                          git commit -m "Add new feature"<br /><br />
                          # Push to remote<br />
                          git push origin main<br /><br />
                          # Pull latest changes<br />
                          git pull origin main
                        </code>
                      </div>
                      <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                        <p className="text-sm text-green-800">
                          <strong>?? Output:</strong> Files staged, committed with message, and synchronized with remote
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Branching Fundamentals</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-700 mb-3">?? Branch Operations</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # List all branches<br />
                          git branch<br /><br />
                          # Create new branch<br />
                          git branch feature-branch<br /><br />
                          # Switch to branch<br />
                          git checkout feature-branch<br /><br />
                          # Create and switch in one command<br />
                          git checkout -b new-feature
                        </code>
                      </div>
                      <div className="mt-4 p-3 bg-white rounded border border-purple-100 shadow-sm">
                        <p className="text-sm text-purple-800">
                          <strong>?? Output:</strong> Shows branch list, creates new branches, and switches between them
                        </p>
                      </div>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                      <h3 className="text-xl font-bold text-orange-700 mb-3">?? Merging & Conflict Resolution</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Merge branch into main<br />
                          git checkout main<br />
                          git merge feature-branch<br /><br />
                          # Delete branch after merge<br />
                          git branch -d feature-branch<br /><br />
                          # Resolve conflicts<br />
                          git status<br />
                          # Edit conflicted files<br />
                          git add resolved-file.txt<br />
                          git commit -m "Resolve merge conflict"
                        </code>
                      </div>
                      <div className="mt-4 p-3 bg-white rounded border border-orange-100 shadow-sm">
                        <p className="text-sm text-orange-800">
                          <strong>?? Output:</strong> Successfully merges changes and resolves any conflicts
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'git-workflows':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="git-workflows" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                🔄 Git Workflows
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Learn industry-standard Git workflows for team collaboration
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">📘 Popular Git Workflows</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4">?? GitFlow Workflow</h3>
                      <p className="text-slate-900 mb-4">
                        GitFlow is a branching model designed around project releases. It assigns very specific roles to different branches
                        and defines how and when they should interact.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-2">Branch Types:</h4>
                          <ul className="text-slate-800 space-y-1 text-sm">
                            <li>• <strong className="text-slate-900">main:</strong> Production-ready code</li>
                            <li>• <strong className="text-slate-900">develop:</strong> Integration branch</li>
                            <li>• <strong className="text-slate-900">feature/*:</strong> New features</li>
                            <li>• <strong className="text-slate-900">release/*:</strong> Release preparation</li>
                            <li>• <strong className="text-slate-900">hotfix/*:</strong> Emergency fixes</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-2">Best For:</h4>
                          <ul className="text-slate-800 space-y-1 text-sm">
                            <li>• Large teams</li>
                            <li>• Complex projects</li>
                            <li>• Release-based development</li>
                            <li>• Multiple environments</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-slate-900 p-4 rounded mt-4 shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # GitFlow example<br />
                          git checkout develop<br />
                          git checkout -b feature/new-login<br />
                          # ... work on feature ...<br />
                          git checkout develop<br />
                          git merge --no-ff feature/new-login
                        </code>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-2xl font-bold text-green-700 mb-4">?? GitHub Flow</h3>
                      <p className="text-slate-900 mb-4">
                        GitHub Flow is a lightweight, branch-based workflow designed around deployments. It's simpler than GitFlow
                        and works well for continuous deployment.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-2">Branch Types:</h4>
                          <ul className="text-slate-800 space-y-1 text-sm">
                            <li>• <strong className="text-slate-900">main:</strong> Deployable code</li>
                            <li>• <strong className="text-slate-900">feature/*:</strong> Feature branches</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-2">Best For:</h4>
                          <ul className="text-slate-800 space-y-1 text-sm">
                            <li>• Small to medium teams</li>
                            <li>• Continuous deployment</li>
                            <li>• Simple projects</li>
                            <li>• Fast iterations</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-slate-900 p-4 rounded mt-4 shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # GitHub Flow example<br />
                          git checkout main<br />
                          git pull origin main<br />
                          git checkout -b feature/improvement<br />
                          # ... work on feature ...<br />
                          git push origin feature/improvement<br />
                          # Create Pull Request
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'git-advanced':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="git-advanced" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                🚀 Advanced Git
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Master advanced Git techniques for professional development
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">🛠️ Advanced Git Commands</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-700 mb-3">?? Rebasing</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Interactive rebase<br />
                          git rebase -i HEAD~3<br /><br />
                          # Rebase feature branch<br />
                          git checkout feature<br />
                          git rebase main<br /><br />
                          # Continue after resolving conflicts<br />
                          git rebase --continue<br /><br />
                          # Abort rebase<br />
                          git rebase --abort
                        </code>
                      </div>
                      <div className="mt-4 p-3 bg-white rounded border border-red-100 shadow-sm">
                        <p className="text-sm text-red-800">
                          <strong>?? Output:</strong> Creates linear history, integrates changes cleanly
                        </p>
                      </div>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-700 mb-3">??? Tagging & Releases</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Create lightweight tag<br />
                          git tag v1.0.0<br /><br />
                          # Create annotated tag<br />
                          git tag -a v1.0.0 -m "Release v1.0.0"<br /><br />
                          # Push tags to remote<br />
                          git push origin v1.0.0<br /><br />
                          # List all tags<br />
                          git tag -l
                        </code>
                      </div>
                      <div className="mt-4 p-3 bg-white rounded border border-purple-100 shadow-sm">
                        <p className="text-sm text-purple-800">
                          <strong>?? Output:</strong> Creates version markers for releases
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">??? Git Hooks & Automation</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3">?? Git Hooks</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Pre-commit hook example<br />
                          #!/bin/sh<br />
                          npm run lint<br />
                          npm run test<br /><br />
                          # Pre-push hook example<br />
                          #!/bin/sh<br />
                          npm run build<br />
                          npm run test:integration
                        </code>
                      </div>
                      <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                        <p className="text-sm text-blue-800">
                          <strong>?? Output:</strong> Automatically runs tests and linting before commits/pushes
                        </p>
                      </div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-3">?? Advanced Logging</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Detailed log with graph<br />
                          git log --graph --oneline --all<br /><br />
                          # Log with file changes<br />
                          git log --stat<br /><br />
                          # Log specific file history<br />
                          git log --follow filename.txt<br /><br />
                          # Search commit messages<br />
                          git log --grep="bug fix"
                        </code>
                      </div>
                      <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                        <p className="text-sm text-green-800">
                          <strong>?? Output:</strong> Detailed history visualization and search capabilities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'github-gitlab':
        return (
          <main>
            <div className="animate-fade-in-up">

              <h1 id="github-gitlab" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                ?? GitHub & GitLab
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Master Git hosting platforms and their DevOps integrations
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Git Hosting Platforms</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="text-2xl font-bold text-black mb-4">?? GitHub</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-bold text-blue-700 mb-2">Key Features:</h4>
                          <ul className="text-slate-800 space-y-1 text-sm">
                            <li>• Largest code hosting platform</li>
                            <li>• GitHub Actions for CI/CD</li>
                            <li>• Pull Requests and code review</li>
                            <li>• Issues and project management</li>
                            <li>• GitHub Pages for hosting</li>
                          </ul>
                        </div>
                        <div className="bg-slate-900 p-4 rounded shadow-inner">
                          <code className="text-green-400 font-mono text-sm">
                            # GitHub CLI<br />
                            gh repo create my-project<br />
                            gh pr create --title "Feature"<br />
                            gh issue list<br />
                            gh workflow run deploy.yml
                          </code>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                      <h3 className="text-2xl font-bold text-orange-700 mb-4">?? GitLab</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-2">Key Features:</h4>
                          <ul className="text-slate-800 space-y-1 text-sm">
                            <li>• Complete DevOps platform</li>
                            <li>• Built-in CI/CD pipelines</li>
                            <li>• Container registry</li>
                            <li>• Self-hosted options</li>
                            <li>• Advanced project management</li>
                          </ul>
                        </div>
                        <div className="bg-slate-900 p-4 rounded shadow-inner">
                          <code className="text-green-400 font-mono text-sm">
                            # GitLab CLI<br />
                            glab repo create my-project<br />
                            glab mr create --title "Feature"<br />
                            glab issue list<br />
                            glab ci run
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Remote Repository Management</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3">?? Remote Operations</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Add remote repository<br />
                          git remote add origin https://github.com/user/repo.git<br /><br />
                          # List remotes<br />
                          git remote -v<br /><br />
                          # Fetch from remote<br />
                          git fetch origin<br /><br />
                          # Push to specific remote<br />
                          git push origin main
                        </code>
                      </div>
                      <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                        <p className="text-sm text-blue-800">
                          <strong>?? Output:</strong> Connects local repo to remote, syncs changes
                        </p>
                      </div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-3">?? Collaboration Commands</h3>
                      <div className="bg-slate-900 p-4 rounded shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # Fork workflow<br />
                          git remote add upstream https://github.com/original/repo.git<br />
                          git fetch upstream<br />
                          git checkout main<br />
                          git merge upstream/main<br /><br />
                          # Contributing to others' projects<br />
                          git checkout -b feature/contribution<br />
                          # ... make changes ...<br />
                          git push origin feature/contribution
                        </code>
                      </div>
                      <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                        <p className="text-sm text-green-800">
                          <strong>?? Output:</strong> Synchronizes with upstream, creates contribution branches
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'ansible-basics':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="ansible-basics" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                🤖 Ansible Basics - The Automation Revolution
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Master infrastructure automation with Ansible's powerful, agentless configuration management
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">🤔 What is Ansible?</h2>
                  <p className="text-slate-900 text-xl mb-6">
                    Ansible is an open-source automation engine that simplifies complex tasks like configuration management,
                    application deployment, and orchestration. It's designed to be simple, powerful, and agentless.
                  </p>

                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3">?? The Ansible Automation Revolution</h3>
                    <p className="text-slate-800 mb-4">
                      Ansible revolutionized infrastructure automation by introducing a simple, human-readable approach
                      to managing complex systems. It uses YAML syntax and requires no agents on target machines.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-blue-700 mb-2">?? Why Ansible Dominates</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong className="text-slate-900">Agentless:</strong> No software to install on managed nodes</li>
                          <li>• <strong className="text-slate-900">Simple:</strong> Human-readable YAML playbooks</li>
                          <li>• <strong className="text-slate-900">Powerful:</strong> Handles complex orchestration</li>
                          <li>• <strong className="text-slate-900">Idempotent:</strong> Safe to run multiple times</li>
                          <li>• <strong className="text-slate-900">Cross-Platform:</strong> Works on Linux, Windows, macOS</li>
                          <li>• <strong className="text-slate-900">Extensible:</strong> Rich ecosystem of modules</li>
                          <li>• <strong className="text-slate-900">Free:</strong> Open-source with enterprise options</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-700 mb-2">?? Ansible Use Cases</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong className="text-slate-900">Configuration Management:</strong> System configuration</li>
                          <li>• <strong className="text-slate-900">Application Deployment:</strong> Software deployment</li>
                          <li>• <strong className="text-slate-900">Orchestration:</strong> Multi-step processes</li>
                          <li>• <strong className="text-slate-900">Provisioning:</strong> Infrastructure setup</li>
                          <li>• <strong className="text-slate-900">Security:</strong> Compliance and hardening</li>
                          <li>• <strong className="text-slate-900">Cloud Management:</strong> Cloud resource automation</li>
                          <li>• <strong className="text-slate-900">Network Automation:</strong> Network device management</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">??? Ansible Architecture</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4">?? Core Components</h3>
                      <p className="text-slate-900 mb-4">
                        Ansible consists of several key components that work together to provide
                        comprehensive automation capabilities for infrastructure and applications.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-black mb-2">??? Control Node</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Install Ansible on control node<br />
                              pip install ansible<br /><br />
                              # Check Ansible version<br />
                              ansible --version<br /><br />
                              # Verify installation<br />
                              ansible localhost -m ping
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                ansible 2.15.0<br />
                                config file = /etc/ansible/ansible.cfg<br />
                                configured module search path = ['/home/user/.ansible/plugins/modules']<br />
                                ansible python module location = /usr/lib/python3.9/site-packages/ansible<br />
                                ansible collection location = /home/user/.ansible/collections<br />
                                executable location = /usr/bin/ansible<br />
                                python version = 3.9.2
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-black mb-2">?? Managed Nodes</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # No agent installation needed!<br />
                              # Ansible uses SSH (Linux) or WinRM (Windows)<br /><br />
                              # SSH key setup for passwordless access<br />
                              ssh-keygen -t rsa -b 4096<br />
                              ssh-copy-id user@target-host<br /><br />
                              # Test SSH connection<br />
                              ssh user@target-host "echo 'SSH works'"
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                Generating public/private rsa key pair.<br />
                                Enter file in which to save the key: /home/user/.ssh/id_rsa<br />
                                Enter passphrase (empty for no passphrase):<br />
                                Your identification has been saved in /home/user/.ssh/id_rsa<br />
                                Your public key has been saved in /home/user/.ssh/id_rsa.pub<br />
                                SSH works
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-2xl font-bold text-green-700 mb-4">?? Inventory Management</h3>
                      <p className="text-slate-900 mb-4">
                        Ansible uses inventory files to define which machines you want to manage.
                        This can be a simple text file or dynamic inventory from cloud providers.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Static Inventory</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # /etc/ansible/hosts<br />
                              [web_servers]<br />
                              web1.example.com<br />
                              web2.example.com<br />
                              <br />
                              [db_servers]<br />
                              db1.example.com<br />
                              db2.example.com<br />
                              <br />
                              [production:children]<br />
                              web_servers<br />
                              db_servers
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                # Test inventory<br />
                                ansible web_servers --list-hosts<br />
                                ansible production --list-hosts<br />
                                <br />
                                hosts (2):<br />
                                &nbsp;&nbsp;web1.example.com<br />
                                &nbsp;&nbsp;web2.example.com
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Dynamic Inventory</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # AWS EC2 dynamic inventory<br />
                              pip install boto3<br /><br />
                              # Configure AWS credentials<br />
                              aws configure<br /><br />
                              # Run with dynamic inventory<br />
                              ansible-playbook -i aws_ec2.py playbook.yml
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                AWS Access Key ID: [Your Access Key]<br />
                                AWS Secret Access Key: [Your Secret Key]<br />
                                Default region name: us-west-2<br />
                                Default output format: json<br />
                                <br />
                                Dynamic inventory loaded 5 instances
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Essential Ansible Commands</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-4">?? Ad-Hoc Commands</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Basic Commands</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Test connectivity<br />
                              ansible all -m ping<br /><br />
                              # Run shell command<br />
                              ansible web_servers -m shell -a "uptime"<br /><br />
                              # Install packages<br />
                              ansible web_servers -m yum -a "name=httpd state=present"<br /><br />
                              # Copy files<br />
                              ansible web_servers -m copy -a "src=/local/file dest=/remote/file"
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                web1.example.com | SUCCESS {'=>'} {'{'}<br />
                                &nbsp;&nbsp;"changed": false,<br />
                                &nbsp;&nbsp;"ping": "pong"<br />
                                {'}'}<br />
                                web2.example.com | SUCCESS {'=>'} {'{'}<br />
                                &nbsp;&nbsp;"changed": false,<br />
                                &nbsp;&nbsp;"ping": "pong"<br />
                                {'}'}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Advanced Commands</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Run with sudo<br />
                              ansible web_servers -m yum -a "name=nginx state=present" -b<br /><br />
                              # Limit to specific hosts<br />
                              ansible web_servers -m service -a "name=httpd state=started" --limit "web1*"<br /><br />
                              # Run with tags<br />
                              ansible-playbook site.yml --tags "update"<br /><br />
                              # Check mode (dry run)<br />
                              ansible-playbook site.yml --check
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                web1.example.com | SUCCESS {'=>'} {'{'}<br />
                                &nbsp;&nbsp;"changed": true,<br />
                                &nbsp;&nbsp;"msg": "Installed: nginx-1.20.1-9.el8"<br />
                                {'}'}<br />
                                <br />
                                PLAY RECAP<br />
                                web1.example.com : ok=1 changed=1 unreachable=0 failed=0
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-4">?? Playbook Commands</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Basic Playbook</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Run playbook<br />
                              ansible-playbook install_nginx.yml<br /><br />
                              # Run with verbose output<br />
                              ansible-playbook install_nginx.yml -v<br /><br />
                              # Run specific playbook section<br />
                              ansible-playbook site.yml --start-at-task "Install packages"<br /><br />
                              # Run with extra variables<br />
                              ansible-playbook deploy.yml -e "version=2.1.0"
                            </code>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Debugging & Validation</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Syntax check<br />
                              ansible-playbook site.yml --syntax-check<br /><br />
                              # List hosts that would be affected<br />
                              ansible-playbook site.yml --list-hosts<br /><br />
                              # List tasks that would be executed<br />
                              ansible-playbook site.yml --list-tasks<br /><br />
                              # Run with step-by-step confirmation<br />
                              ansible-playbook site.yml --step
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                playbook: site.yml<br />
                                <br />
                                play #1 (production): TAGS: []<br />
                                &nbsp;&nbsp;pattern: ['production']<br />
                                &nbsp;&nbsp;hosts (4):<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;web1.example.com<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;web2.example.com<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;db1.example.com<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;db2.example.com
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Ansible Modules Deep Dive</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-4">?? System Modules</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Package Management</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Install packages<br />
                              - name: Install nginx<br />
                              &nbsp;&nbsp;yum:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;name: nginx<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;state: present<br /><br />
                              # Install multiple packages<br />
                              - name: Install web packages<br />
                              &nbsp;&nbsp;yum:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;name:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- httpd<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- php<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- mysql<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;state: present
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                            <p className="text-sm text-blue-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                TASK [Install nginx] ****************************************************<br />
                                changed: [web1.example.com]<br />
                                <br />
                                TASK [Install web packages] *********************************************<br />
                                changed: [web1.example.com]<br />
                                changed: [web2.example.com]
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Service Management</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Start and enable service<br />
                              - name: Start nginx service<br />
                              &nbsp;&nbsp;systemd:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;name: nginx<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;state: started<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;enabled: yes<br /><br />
                              # Restart service<br />
                              - name: Restart httpd<br />
                              &nbsp;&nbsp;systemd:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;name: httpd<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;state: restarted
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                TASK [Start nginx service] **********************************************<br />
                                changed: [web1.example.com]<br />
                                <br />
                                TASK [Restart httpd] **************************************************<br />
                                changed: [web1.example.com]
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-700 mb-4">?? File & Template Modules</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? File Operations</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Create directory<br />
                              - name: Create web directory<br />
                              &nbsp;&nbsp;file:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;path: /var/www/html<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;state: directory<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;mode: '0755'<br /><br />
                              # Copy file<br />
                              - name: Copy index.html<br />
                              &nbsp;&nbsp;copy:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;src: index.html<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;dest: /var/www/html/index.html<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;mode: '0644'
                            </code>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Template Processing</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Process template<br />
                              - name: Configure nginx<br />
                              &nbsp;&nbsp;template:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;src: nginx.conf.j2<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;dest: /etc/nginx/nginx.conf<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;mode: '0644'<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;backup: yes<br />
                              &nbsp;&nbsp;notify: restart nginx
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                TASK [Configure nginx] *************************************************<br />
                                changed: [web1.example.com]<br />
                                <br />
                                RUNNING HANDLER [restart nginx] **************************************<br />
                                changed: [web1.example.com]
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Ansible Best Practices</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Do's</h3>
                      <ul className="text-slate-800 space-y-2 text-sm">
                        <li>• <strong className="text-slate-900">Use Descriptive Names:</strong> Clear, meaningful task and play names</li>
                        <li>• <strong className="text-slate-900">Organize with Roles:</strong> Structure complex playbooks using roles</li>
                        <li>• <strong className="text-slate-900">Use Handlers:</strong> Trigger actions only when changes occur</li>
                        <li>• <strong className="text-slate-900">Version Control:</strong> Keep playbooks in Git repositories</li>
                        <li>• <strong className="text-slate-900">Use Variables:</strong> Make playbooks flexible and reusable</li>
                        <li>• <strong className="text-slate-900">Test with Check Mode:</strong> Validate changes before applying</li>
                        <li>• <strong className="text-slate-900">Use Tags:</strong> Organize and selectively run tasks</li>
                        <li>• <strong className="text-slate-900">Document Everything:</strong> Add comments and documentation</li>
                        <li>• <strong className="text-slate-900">Use Vault:</strong> Encrypt sensitive data like passwords</li>
                        <li>• <strong className="text-slate-900">Keep Idempotent:</strong> Ensure tasks can run multiple times safely</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-700 mb-3">? Don'ts</h3>
                      <ul className="text-slate-800 space-y-2 text-sm">
                        <li>• <strong className="text-slate-900">Don't Use Shell Unnecessarily:</strong> Prefer specific modules</li>
                        <li>• <strong className="text-slate-900">Don't Ignore Errors:</strong> Handle failures appropriately</li>
                        <li>• <strong className="text-slate-900">Don't Hardcode Values:</strong> Use variables for flexibility</li>
                        <li>• <strong className="text-slate-900">Don't Skip Validation:</strong> Always test in staging first</li>
                        <li>• <strong className="text-slate-900">Don't Store Secrets in Plain Text:</strong> Use Ansible Vault</li>
                        <li>• <strong className="text-slate-900">Don't Ignore Idempotency:</strong> Ensure repeatable results</li>
                        <li>• <strong className="text-slate-900">Don't Use Root by Default:</strong> Use privilege escalation when needed</li>
                        <li>• <strong className="text-slate-900">Don't Ignore Performance:</strong> Optimize for large inventories</li>
                        <li>• <strong className="text-slate-900">Don't Skip Documentation:</strong> Document complex logic</li>
                        ```
                        <li>• <strong className="text-slate-900">Don't Ignore Security:</strong> Follow security best practices</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'ansible-playbooks':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="ansible-playbooks" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                📜 Ansible Playbooks - Infrastructure as Code
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Master Ansible playbooks to automate complex multi-step processes and system configurations
              </p>

              <div className="max-w-6xl mx-auto">

                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">🤔 What are Ansible Playbooks?</h2>
                  <p className="text-slate-900 text-xl mb-6">
                    Playbooks are Ansible's configuration, deployment, and orchestration language. They can describe
                    a policy you want your remote systems to enforce, or a set of steps in a general IT process.
                  </p>

                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3">?? The Playbook Revolution</h3>
                    <p className="text-slate-800 mb-4">
                      Playbooks transform infrastructure management from manual, error-prone processes into
                      repeatable, version-controlled, and automated workflows. They're written in YAML and
                      are human-readable, making them easy to understand and maintain.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-blue-700 mb-2">?? Key Benefits</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong className="text-slate-900">Infrastructure as Code:</strong> Version-controlled infrastructure</li>
                          <li>• <strong className="text-slate-900">Repeatability:</strong> Consistent deployments every time</li>
                          <li>• <strong className="text-slate-900">Documentation:</strong> Self-documenting infrastructure</li>
                          <li>• <strong className="text-slate-900">Rollback Capability:</strong> Easy to revert changes</li>
                          <li>• <strong className="text-slate-900">Collaboration:</strong> Team-based infrastructure management</li>
                          <li>• <strong className="text-slate-900">Testing:</strong> Validate changes before production</li>
                          <li>• <strong className="text-slate-900">Scalability:</strong> Manage hundreds of servers</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-700 mb-2">?? Playbook Components</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong className="text-slate-900">Plays:</strong> High-level tasks for specific hosts</li>
                          <li>• <strong className="text-slate-900">Tasks:</strong> Individual units of work</li>
                          <li>• <strong className="text-slate-900">Variables:</strong> Dynamic values and configuration</li>
                          <li>• <strong className="text-slate-900">Handlers:</strong> Tasks triggered by changes</li>
                          <li>• <strong className="text-slate-900">Templates:</strong> Dynamic configuration files</li>
                          <li>• <strong className="text-slate-900">Conditionals:</strong> Task execution based on conditions</li>
                          <li>• <strong className="text-slate-900">Loops:</strong> Repeat tasks with different values</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Playbook Structure & Syntax</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4">??? Basic Playbook Structure</h3>
                      <p className="text-slate-900 mb-4">
                        Every playbook starts with a play definition, which maps a group of hosts to tasks.
                        Understanding the structure is crucial for writing effective playbooks.
                      </p>

                      <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          ---<br />
                          # install_nginx.yml<br />
                          - name: Install and configure nginx<br />
                          &nbsp;&nbsp;hosts: web_servers<br />
                          &nbsp;&nbsp;become: yes<br />
                          &nbsp;&nbsp;vars:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;nginx_port: 80<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;nginx_user: www-data<br /><br />
                          &nbsp;&nbsp;tasks:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;- name: Install nginx<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yum:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: nginx<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: present<br /><br />
                          &nbsp;&nbsp;&nbsp;&nbsp;- name: Start nginx service<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;systemd:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: nginx<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: started<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enabled: yes<br /><br />
                          &nbsp;&nbsp;&nbsp;&nbsp;- name: Configure nginx<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;template:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src: nginx.conf.j2<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dest: /etc/nginx/nginx.conf<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;notify: restart nginx<br /><br />
                          &nbsp;&nbsp;handlers:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;- name: restart nginx<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;systemd:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: nginx<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: restarted
                        </code>
                      </div>
                      <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                        <p className="text-sm text-blue-800">
                          <strong>?? Output:</strong><br />
                          <span className="text-slate-800">
                            PLAY [Install and configure nginx] ****************************************<br />
                            <br />
                            TASK [Gathering Facts] **************************************************<br />
                            ok: [web1.example.com]<br />
                            ok: [web2.example.com]<br />
                            <br />
                            TASK [Install nginx] ****************************************************<br />
                            changed: [web1.example.com]<br />
                            changed: [web2.example.com]<br />
                            <br />
                            TASK [Start nginx service] **********************************************<br />
                            changed: [web1.example.com]<br />
                            changed: [web2.example.com]<br />
                            <br />
                            TASK [Configure nginx] *************************************************<br />
                            changed: [web1.example.com]<br />
                            changed: [web2.example.com]<br />
                            <br />
                            RUNNING HANDLER [restart nginx] **************************************<br />
                            changed: [web1.example.com]<br />
                            changed: [web2.example.com]<br />
                            <br />
                            PLAY RECAP<br />
                            web1.example.com : ok=5 changed=4 unreachable=0 failed=0<br />
                            web2.example.com : ok=5 changed=4 unreachable=0 failed=0
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-2xl font-bold text-green-700 mb-4">?? Advanced Playbook Features</h3>
                      <p className="text-slate-900 mb-4">
                        Advanced playbooks use conditionals, loops, error handling, and complex variable
                        structures to handle real-world scenarios and edge cases.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Conditionals & Loops</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              - name: Install packages conditionally<br />
                              &nbsp;&nbsp;yum:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;name: "{'{'}{'{'} item {'}'}{'}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;state: present<br />
                              &nbsp;&nbsp;loop:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;- httpd<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;- php<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;- mysql<br />
                              &nbsp;&nbsp;when: ansible_os_family == "RedHat"<br /><br />
                              - name: Create users<br />
                              &nbsp;&nbsp;user:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;name: "{'{'}{'{'} item.name {'}'}{'}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;groups: "{'{'}{'{'} item.groups {'}'}{'}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;state: present<br />
                              &nbsp;&nbsp;loop:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;- {'{'} name: 'alice', groups: 'wheel' {'}'}<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;- {'{'} name: 'bob', groups: 'users' {'}'}
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                TASK [Install packages conditionally] **********************************<br />
                                ok: [web1.example.com] {'=>'} (item=httpd)<br />
                                changed: [web1.example.com] {'=>'} (item=php)<br />
                                changed: [web1.example.com] {'=>'} (item=mysql)<br />
                                <br />
                                TASK [Create users] *************************************************<br />
                                changed: [web1.example.com] {'=>'} (item={'{'}\'name\': \'alice\', \'groups\': \'wheel\'{'}'}) <br />
                                changed: [web1.example.com] {'=>'} (item={'{'}\'name\': \'bob\', \'groups\': \'users\'{'}'} )
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? Error Handling</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              - name: Try to install package<br />
                              &nbsp;&nbsp;yum:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;name: "{'{'}{'{'} package_name {'}'}{'}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;state: present<br />
                              &nbsp;&nbsp;register: install_result<br />
                              &nbsp;&nbsp;ignore_errors: yes<br /><br />
                              - name: Handle installation failure<br />
                              &nbsp;&nbsp;debug:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;msg: "Package {'{'}{'{'} package_name {'}'}{'}'}  failed to install"<br />
                              &nbsp;&nbsp;when: install_result.failed<br /><br />
                              - name: Retry failed tasks<br />
                              &nbsp;&nbsp;yum:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;name: "{'{'}{'{'} item {'}'}{'}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;state: present<br />
                              &nbsp;&nbsp;retries: 3<br />
                              &nbsp;&nbsp;delay: 10
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-red-100 shadow-sm">
                            <p className="text-sm text-red-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                TASK [Try to install package] ******************************************<br />
                                failed: [web1.example.com] {'=>'} {'{"msg": "Package not found"}'}<br />
                                ...ignoring<br />
                                <br />
                                TASK [Handle installation failure] *************************************<br />
                                ok: [web1.example.com] {'=>'} {'{'}<br />
                                &nbsp;&nbsp;"msg": "Package unknown-package failed to install"<br />
                                {'}'}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">?? Playbook Best Practices</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Do's</h3>
                      <ul className="text-slate-800 space-y-2 text-sm">
                        <li>• <strong className="text-slate-900">Use Descriptive Names:</strong> Clear, meaningful play and task names</li>
                        <li>• <strong className="text-slate-900">Organize with Roles:</strong> Structure complex playbooks using roles</li>
                        <li>• <strong className="text-slate-900">Use Variables:</strong> Make playbooks flexible and reusable</li>
                        <li>• <strong className="text-slate-900">Validate with Check Mode:</strong> Test changes before applying</li>
                        <li>• <strong className="text-slate-900">Use Handlers:</strong> Trigger actions only when changes occur</li>
                        <li>• <strong className="text-slate-900">Version Control:</strong> Keep playbooks in Git repositories</li>
                        <li>• <strong className="text-slate-900">Use Tags:</strong> Organize and selectively run tasks</li>
                        <li>• <strong className="text-slate-900">Document Everything:</strong> Add comments and documentation</li>
                        <li>• <strong className="text-slate-900">Use Vault for Secrets:</strong> Encrypt sensitive data</li>
                        <li>• <strong className="text-slate-900">Test Incrementally:</strong> Start simple and add complexity</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-700 mb-3">? Don'ts</h3>
                      <ul className="text-slate-800 space-y-2 text-sm">
                        <li>• <strong className="text-slate-900">Don't Use Shell Unnecessarily:</strong> Prefer specific modules</li>
                        <li>• <strong className="text-slate-900">Don't Ignore Errors:</strong> Handle failures appropriately</li>
                        <li>• <strong className="text-slate-900">Don't Hardcode Values:</strong> Use variables for flexibility</li>
                        <li>• <strong className="text-slate-900">Don't Skip Validation:</strong> Always test in staging first</li>
                        <li>• <strong className="text-slate-900">Don't Store Secrets in Plain Text:</strong> Use Ansible Vault</li>
                        <li>• <strong className="text-slate-900">Don't Ignore Idempotency:</strong> Ensure repeatable results</li>
                        <li>• <strong className="text-slate-900">Don't Use Root by Default:</strong> Use privilege escalation when needed</li>
                        <li>• <strong className="text-slate-900">Don't Ignore Performance:</strong> Optimize for large inventories</li>
                        <li>• <strong className="text-slate-900">Don't Skip Documentation:</strong> Document complex logic</li>
                        <li>• <strong className="text-slate-900">Don't Ignore Security:</strong> Follow security best practices</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'ansible-roles':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="ansible-roles" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                ?? Ansible Roles - Reusable Automation Components
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Master Ansible roles to create reusable, shareable automation components for complex infrastructure management
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-purple-50 p-8 rounded-2xl border border-purple-200 mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-purple-800 mb-4">?? What are Ansible Roles?</h2>
                  <p className="text-slate-900 text-xl mb-6">
                    Roles are a way of automatically loading certain vars_files, tasks, and handlers based on a
                    known file structure. Grouping content by roles also allows easy sharing of roles with other users.
                  </p>

                  <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3">?? The Role Revolution</h3>
                    <p className="text-slate-800 mb-4">
                      Roles transform complex playbooks into modular, reusable components. They promote
                      code reuse, make playbooks more maintainable, and enable teams to share automation
                      components across projects and organizations.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-purple-700 mb-2">?? Key Benefits</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong className="text-slate-900">Reusability:</strong> Share automation across projects</li>
                          <li>• <strong className="text-slate-900">Modularity:</strong> Break complex tasks into components</li>
                          <li>• <strong className="text-slate-900">Maintainability:</strong> Easier to update and debug</li>
                          <li>• <strong className="text-slate-900">Collaboration:</strong> Team-based role development</li>
                          <li>• <strong className="text-slate-900">Testing:</strong> Test individual components</li>
                          <li>• <strong className="text-slate-900">Documentation:</strong> Self-documenting structure</li>
                          <li>• <strong className="text-slate-900">Version Control:</strong> Track role changes independently</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-700 mb-2">?? Role Components</h4>
                        <ul className="text-slate-800 space-y-2 text-sm">
                          <li>• <strong className="text-slate-900">tasks/main.yml:</strong> Main task list</li>
                          <li>• <strong className="text-slate-900">handlers/main.yml:</strong> Event handlers</li>
                          <li>• <strong className="text-slate-900">vars/main.yml:</strong> Role variables</li>
                          <li>• <strong className="text-slate-900">defaults/main.yml:</strong> Default variables</li>
                          <li>• <strong className="text-slate-900">templates/:</strong> Jinja2 templates</li>
                          <li>• <strong className="text-slate-900">files/:</strong> Static files to copy</li>
                          <li>• <strong className="text-slate-900">meta/main.yml:</strong> Role metadata</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-black mb-6">??? Role Structure & Creation</h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4">?? Role Directory Structure</h3>
                      <p className="text-slate-900 mb-4">
                        Ansible roles follow a specific directory structure that makes them predictable
                        and easy to understand. Each directory has a specific purpose.
                      </p>

                      <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          roles/<br />
                          +-- nginx/<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;+-- tasks/<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;¦&nbsp;&nbsp;&nbsp;&nbsp;+-- main.yml<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;+-- handlers/<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;¦&nbsp;&nbsp;&nbsp;&nbsp;+-- main.yml<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;+-- vars/<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;¦&nbsp;&nbsp;&nbsp;&nbsp;+-- main.yml<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;+-- defaults/<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;¦&nbsp;&nbsp;&nbsp;&nbsp;+-- main.yml<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;+-- templates/<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;¦&nbsp;&nbsp;&nbsp;&nbsp;+-- nginx.conf.j2<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;+-- files/<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;¦&nbsp;&nbsp;&nbsp;&nbsp;+-- index.html<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;+-- meta/<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- main.yml
                        </code>
                      </div>
                      <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                        <p className="text-sm text-blue-800">
                          <strong>?? Role Creation:</strong><br />
                          <span className="text-slate-800">
                            # Create role structure<br />
                            ansible-galaxy init nginx<br />
                            <br />
                            # Role created successfully<br />
                            - nginx was created successfully<br />
                            <br />
                            # Verify structure<br />
                            tree roles/nginx/<br />
                            roles/nginx/<br />
                            +-- defaults<br />
                            +-- files<br />
                            +-- handlers<br />
                            +-- meta<br />
                            +-- tasks<br />
                            +-- templates<br />
                            +-- vars
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-2xl font-bold text-green-700 mb-4">?? Creating a Complete Role</h3>
                      <p className="text-slate-900 mb-4">
                        Let's create a complete nginx role that demonstrates all the key components
                        and best practices for role development.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? tasks/main.yml</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              ---<br />
                              - name: Install nginx<br />
                              &nbsp;&nbsp;package:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;name: "{'{'}{'{'} nginx_package_name {'}'}{'}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;state: present<br /><br />
                              - name: Create nginx user<br />
                              &nbsp;&nbsp;user:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;name: "{'{'}{'{'} nginx_user {'}'}{'}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;system: yes<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;shell: /sbin/nologin<br /><br />
                              - name: Configure nginx<br />
                              &nbsp;&nbsp;template:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;src: nginx.conf.j2<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;dest: "{'{'}{'{'} nginx_config_file {'}'}{'}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;backup: yes<br />
                              &nbsp;&nbsp;notify: restart nginx<br /><br />
                              - name: Start and enable nginx<br />
                              &nbsp;&nbsp;systemd:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;name: "{'{'}{'{'} nginx_service_name {'}'}{'}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;state: started<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;enabled: yes
                            </code>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-3">?? handlers/main.yml</h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              ---<br />
                              - name: restart nginx<br />
                              &nbsp;&nbsp;systemd:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;name: "{'{'}{'{'} nginx_service_name {'}'}{'}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;state: restarted<br /><br />
                              - name: reload nginx<br />
                              &nbsp;&nbsp;systemd:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;name: "{'{'}{'{'} nginx_service_name {'}'}{'}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;state: reloaded<br /><br />
                              - name: stop nginx<br />
                              &nbsp;&nbsp;systemd:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;name: "{'{'}{'{'} nginx_service_name {'}'}{'}'}"<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;state: stopped
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong>?? Output:</strong><br />
                              <span className="text-slate-800">
                                TASK [nginx : Configure nginx] ******************************************<br />
                                changed: [web1.example.com]<br />
                                <br />
                                RUNNING HANDLER [nginx : restart nginx] ******************************<br />
                                changed: [web1.example.com]
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <User className="w-8 h-8 text-blue-600" />
                    Role Best Practices
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Do's
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong className="text-slate-900">Use Descriptive Names:</strong> Clear, meaningful role names</li>
                        <li>• <strong className="text-slate-900">Follow Directory Structure:</strong> Use standard Ansible role layout</li>
                        <li>• <strong className="text-slate-900">Use Variables:</strong> Make roles flexible and configurable</li>
                        <li>• <strong className="text-slate-900">Document Dependencies:</strong> Specify role requirements</li>
                        <li>• <strong className="text-slate-900">Use Defaults:</strong> Provide sensible default values</li>
                        <li>• <strong className="text-slate-900">Test Roles:</strong> Validate roles before sharing</li>
                        <li>• <strong className="text-slate-900">Version Control:</strong> Track role changes in Git</li>
                        <li>• <strong className="text-slate-900">Use Tags:</strong> Organize and selectively run tasks</li>
                        <li>• <strong className="text-slate-900">Handle Errors:</strong> Implement proper error handling</li>
                        <li>• <strong className="text-slate-900">Keep Idempotent:</strong> Ensure roles can run multiple times</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-700 mb-3">? Don'ts</h3>
                      <ul className="text-slate-800 space-y-2 text-sm">
                        <li>• <strong className="text-slate-900">Don't Hardcode Values:</strong> Use variables for flexibility</li>
                        <li>• <strong className="text-slate-900">Don't Ignore Dependencies:</strong> Specify all requirements</li>
                        <li>• <strong className="text-slate-900">Don't Skip Validation:</strong> Test roles thoroughly</li>
                        <li>• <strong className="text-slate-900">Don't Store Secrets:</strong> Use Ansible Vault for sensitive data</li>
                        <li>• <strong className="text-slate-900">Don't Ignore Idempotency:</strong> Ensure repeatable results</li>
                        <li>• <strong className="text-slate-900">Don't Use Root by Default:</strong> Use privilege escalation when needed</li>
                        <li>• <strong className="text-slate-900">Don't Ignore Performance:</strong> Optimize for large inventories</li>
                        <li>• <strong className="text-slate-900">Don't Skip Documentation:</strong> Document complex logic</li>
                        <li>• <strong className="text-slate-900">Don't Ignore Security:</strong> Follow security best practices</li>
                        <li>• <strong className="text-slate-900">Don't Create Monolithic Roles:</strong> Keep roles focused and modular</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'ansible-advanced':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="ansible-advanced" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-800">
                ?? Advanced Ansible - Enterprise Automation
              </h1>
              <p className="text-lg text-slate-800 mb-8 text-center">
                Master advanced Ansible techniques for enterprise-scale automation, optimization, and integration
              </p>

              <div className="max-w-6xl mx-auto">
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">?? Advanced Ansible Concepts</h2>
                  <p className="text-slate-900 text-xl mb-6">
                    Advanced Ansible techniques enable enterprise-scale automation with performance optimization,
                    complex integrations, and sophisticated orchestration patterns.
                  </p>

                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                    <h3 className="text-xl font-bold text-yellow-600 mb-3">?? Enterprise Automation Features</h3>
                    <p className="text-slate-800 mb-4">
                      Advanced Ansible capabilities include performance optimization, complex variable handling,
                      dynamic inventories, and integration with enterprise tools and platforms.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-blue-700 mb-2 flex items-center gap-2">
                          <Settings className="w-5 h-5" />
                          Advanced Features
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong className="text-slate-900">Performance Optimization:</strong> Parallel execution and optimization</li>
                          <li>• <strong className="text-slate-900">Dynamic Inventories:</strong> Cloud and external data sources</li>
                          <li>• <strong className="text-slate-900">Complex Variables:</strong> Advanced variable handling</li>
                          <li>• <strong className="text-slate-900">Custom Modules:</strong> Extend Ansible functionality</li>
                          <li>• <strong className="text-slate-900">Collections:</strong> Organize and share content</li>
                          <li>• <strong className="text-slate-900">AWX/Ansible Tower:</strong> Enterprise automation platform</li>
                          <li>• <strong className="text-slate-900">Integration:</strong> CI/CD and other enterprise tools</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-700 mb-2 flex items-center gap-2">
                          <Briefcase className="w-5 h-5" />
                          Enterprise Use Cases
                        </h4>
                        <ul className="text-slate-700 space-y-2 text-sm">
                          <li>• <strong className="text-slate-900">Large-Scale Deployments:</strong> Thousands of servers</li>
                          <li>• <strong className="text-slate-900">Multi-Cloud Management:</strong> Cross-cloud automation</li>
                          <li>• <strong className="text-slate-900">Compliance Automation:</strong> Security and regulatory compliance</li>
                          <li>• <strong className="text-slate-900">Disaster Recovery:</strong> Automated failover and recovery</li>
                          <li>• <strong className="text-slate-900">Capacity Management:</strong> Resource optimization</li>
                          <li>• <strong className="text-slate-900">Change Management:</strong> Controlled infrastructure changes</li>
                          <li>• <strong className="text-slate-900">Monitoring Integration:</strong> Automated monitoring setup</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Activity className="w-8 h-8 text-blue-600" />
                    Performance Optimization
                  </h2>

                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <Zap className="w-6 h-6" />
                        Parallel Execution
                      </h3>
                      <p className="text-slate-700 mb-4">
                        Optimize Ansible performance by controlling parallel execution, connection pooling,
                        and task optimization for large-scale deployments.
                      </p>

                      <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                        <code className="text-green-400 font-mono text-sm">
                          # ansible.cfg optimization<br />
                          [defaults]<br />
                          forks = 50<br />
                          host_key_checking = False<br />
                          gather_facts = False<br />
                          retry_files_enabled = False<br /><br />
                          [ssh_connection]<br />
                          ssh_args = -o ControlMaster=auto -o ControlPersist=60s<br />
                          pipelining = True<br />
                          control_path = /tmp/ansible-ssh-%%h-%%p-%%r<br /><br />
                          # Run with optimized settings<br />
                          ansible-playbook site.yml -f 20 --ssh-extra-args="-o ControlMaster=auto"
                        </code>
                      </div>
                      <div className="mt-4 p-3 bg-white rounded border border-blue-100 shadow-sm">
                        <p className="text-sm text-blue-800">
                          <strong className="flex items-center gap-2"><Activity className="w-4 h-4" /> Performance Results:</strong><br />
                          <span className="text-slate-800">
                            # Before optimization: 500 servers in 45 minutes<br />
                            # After optimization: 500 servers in 8 minutes<br />
                            <br />
                            PLAY RECAP<br />
                            web1.example.com : ok=15 changed=8 unreachable=0 failed=0<br />
                            web2.example.com : ok=15 changed=8 unreachable=0 failed=0<br />
                            ... (498 more servers)<br />
                            <br />
                            Total execution time: 8 minutes 32 seconds
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
                        <Zap className="w-6 h-6" />
                        Fact Caching & Optimization
                      </h3>
                      <p className="text-slate-700 mb-4">
                        Implement fact caching and selective fact gathering to reduce execution time
                        and improve performance for large inventories.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Database className="w-5 h-5" />
                            Redis Fact Caching
                          </h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # ansible.cfg<br />
                              [defaults]<br />
                              fact_caching = redis<br />
                              fact_caching_connection = localhost:6379<br />
                              fact_caching_timeout = 86400<br /><br />
                              # Install Redis<br />
                              pip install redis<br /><br />
                              # Start Redis server<br />
                              systemctl start redis<br />
                              systemctl enable redis
                            </code>
                          </div>
                          <div className="mt-4 p-3 bg-white rounded border border-green-100 shadow-sm">
                            <p className="text-sm text-green-800">
                              <strong className="flex items-center gap-2"><Monitor className="w-4 h-4" /> Output:</strong><br />
                              <span className="text-slate-800">
                                # Facts cached successfully<br />
                                Redis connection: localhost:6379<br />
                                Cache timeout: 86400 seconds (24 hours)<br />
                                <br />
                                # Subsequent runs use cached facts<br />
                                TASK [Gathering Facts] **************************************************<br />
                                ok: [web1.example.com] (cached)<br />
                                ok: [web2.example.com] (cached)
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Filter className="w-5 h-5" />
                            Selective Fact Gathering
                          </h4>
                          <div className="bg-slate-900 p-4 rounded mb-3 shadow-inner">
                            <code className="text-green-400 font-mono text-sm">
                              # Gather only specific facts<br />
                              - name: Gather only network facts<br />
                              &nbsp;&nbsp;setup:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;gather_subset:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- network<br /><br />
                              # Skip fact gathering entirely<br />
                              - name: Install packages without facts<br />
                              &nbsp;&nbsp;hosts: web_servers<br />
                              &nbsp;&nbsp;gather_facts: no<br />
                              &nbsp;&nbsp;tasks:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;- name: Install nginx<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yum:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: nginx<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: present
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Award className="w-8 h-8 text-blue-600" />
                    Advanced Ansible Best Practices
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Do's
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong className="text-slate-900">Optimize Performance:</strong> Use parallel execution and fact caching</li>
                        <li>• <strong className="text-slate-900">Use Collections:</strong> Organize and share content effectively</li>
                        <li>• <strong className="text-slate-900">Implement Error Handling:</strong> Robust error handling and recovery</li>
                        <li>• <strong className="text-slate-900">Use Dynamic Inventories:</strong> Integrate with cloud providers</li>
                        <li>• <strong className="text-slate-900">Version Control Everything:</strong> Track all automation code</li>
                        <li>• <strong className="text-slate-900">Test Thoroughly:</strong> Implement comprehensive testing</li>
                        <li>• <strong className="text-slate-900">Monitor Performance:</strong> Track execution metrics</li>
                        <li>• <strong className="text-slate-900">Use AWX/Tower:</strong> Enterprise automation platform</li>
                        <li>• <strong className="text-slate-900">Implement Security:</strong> Follow security best practices</li>
                        <li>• <strong className="text-slate-900">Document Everything:</strong> Comprehensive documentation</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
                        <XCircle className="w-5 h-5" />
                        Don'ts
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li>• <strong className="text-slate-900">Don't Ignore Performance:</strong> Optimize for large-scale deployments</li>
                        <li>• <strong className="text-slate-900">Don't Skip Testing:</strong> Test all automation thoroughly</li>
                        <li>• <strong className="text-slate-900">Don't Ignore Security:</strong> Implement proper security measures</li>
                        <li>• <strong className="text-slate-900">Don't Hardcode Values:</strong> Use variables and external data</li>
                        <li>• <strong className="text-slate-900">Don't Ignore Error Handling:</strong> Implement robust error handling</li>
                        <li>• <strong className="text-slate-900">Don't Skip Monitoring:</strong> Monitor automation execution</li>
                        <li>• <strong className="text-slate-900">Don't Ignore Compliance:</strong> Follow regulatory requirements</li>
                        <li>• <strong className="text-slate-900">Don't Skip Documentation:</strong> Document all automation</li>
                        <li>• <strong className="text-slate-900">Don't Ignore Backup:</strong> Implement backup and recovery</li>
                        <li>• <strong className="text-slate-900">Don't Skip Training:</strong> Train team on advanced features</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'docker-basics':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="docker-basics" className="text-4xl md:text-5xl font-extrabold mb-8 text-center flex items-center justify-center gap-4">
                <Box className="w-12 h-12 text-blue-500" />
                Docker Basics
              </h1>

              <div className="max-w-6xl mx-auto">
                {/* Intro */}
                <div className="bg-white/95 p-8 rounded-2xl border border-blue-100 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Info className="w-8 h-8 text-blue-600" />
                    What is Docker?
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    Docker is an open-source platform that enables developers to build, deploy, run, update, and manage containers—standardized, executable components that combine application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.
                  </p>

                  {/* VM vs Containers */}
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Containers vs. Virtual Machines</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg text-slate-800 mb-2">Virtual Machines (VMs)</h4>
                        <p className="text-sm text-slate-800 mb-3">VMs emulate an entire computer system, including the hardware. Each VM runs a full OS kernel.</p>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• Heavyweight (GBs)</li>
                          <li>• Slow startup (minutes)</li>
                          <li>• Low density on host</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-blue-100">
                        <h4 className="font-bold text-lg text-blue-600 mb-2">Containers (Docker)</h4>
                        <p className="text-sm text-slate-700 mb-3">Containers share the host OS kernel and isolate the application processes from the rest of the system.</p>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• Lightweight (MBs)</li>
                          <li>• Fast startup (seconds)</li>
                          <li>• High density on host</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Concepts */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/95 p-6 rounded-2xl border border-indigo-100 shadow-xl">
                    <h3 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
                      <Layers className="w-6 h-6" />
                      Core Concepts
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-indigo-50 rounded-lg">
                        <h4 className="font-bold text-indigo-900 flex items-center gap-2">
                          <ImageIcon className="w-4 h-4" />
                          Image
                        </h4>
                        <p className="text-sm text-indigo-800">A read-only template with instructions for creating a Docker container. It's like a snapshot or a class in OOP.</p>
                      </div>
                      <div className="p-4 bg-indigo-50 rounded-lg">
                        <h4 className="font-bold text-indigo-900 flex items-center gap-2">
                          <Box className="w-4 h-4" />
                          Container
                        </h4>
                        <p className="text-sm text-indigo-800">A runnable instance of an image. It is isolated from other containers and the host machine. It's like an object in OOP.</p>
                      </div>
                      <div className="p-4 bg-indigo-50 rounded-lg">
                        <h4 className="font-bold text-indigo-900 flex items-center gap-2">
                          <FileCode className="w-4 h-4" />
                          Dockerfile
                        </h4>
                        <p className="text-sm text-indigo-800">A text document that contains all the commands a user could call on the command line to assemble an image.</p>
                      </div>
                      <div className="p-4 bg-indigo-50 rounded-lg">
                        <h4 className="font-bold text-indigo-900 flex items-center gap-2">
                          <Cloud className="w-4 h-4" />
                          Registry
                        </h4>
                        <p className="text-sm text-indigo-800">A storage and distribution system for named Docker images (e.g., Docker Hub).</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/95 p-6 rounded-2xl border border-slate-200 shadow-xl">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Terminal className="w-6 h-6" />
                      Essential Commands
                    </h3>
                    <div className="space-y-3">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold text-slate-700 uppercase">Run a container</span>
                        <code className="bg-slate-900 text-green-400 p-2 rounded text-sm">docker run -d -p 80:80 nginx</code>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold text-slate-700 uppercase">List running containers</span>
                        <code className="bg-slate-900 text-green-400 p-2 rounded text-sm">docker ps</code>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold text-slate-700 uppercase">List images</span>
                        <code className="bg-slate-900 text-green-400 p-2 rounded text-sm">docker images</code>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold text-slate-700 uppercase">Build an image</span>
                        <code className="bg-slate-900 text-green-400 p-2 rounded text-sm">docker build -t my-app .</code>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold text-slate-700 uppercase">Stop a container</span>
                        <code className="bg-slate-900 text-green-400 p-2 rounded text-sm">docker stop &lt;container_id&gt;</code>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hands-on */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-xl text-white mb-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Zap className="w-8 h-8 text-yellow-400" />
                    Quick Start: Your First Container
                  </h2>
                  <p className="text-gray-300 mb-6">Let's run a simple Nginx web server using Docker. Open your terminal and try this:</p>

                  <div className="space-y-6">
                    <div className="bg-black/50 p-4 rounded-xl border border-slate-600">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Step 1: Run the container</span>
                      </div>
                      <code className="block font-mono text-green-400 mb-2">docker run --name my-nginx -d -p 8080:80 nginx</code>
                      <p className="text-xs text-gray-500 mt-2">
                        Flags explanation:<br />
                        <span className="text-blue-400">-d</span>: Run in detached mode (background)<br />
                        <span className="text-blue-400">-p 8080:80</span>: Map port 8080 on host to port 80 in container<br />
                        <span className="text-blue-400">--name</span>: Assign a custom name
                      </p>
                    </div>

                    <div className="bg-black/50 p-4 rounded-xl border border-slate-600">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Step 2: Verify it's running</span>
                      </div>
                      <code className="block font-mono text-green-400">docker ps</code>
                    </div>

                    <div className="bg-black/50 p-4 rounded-xl border border-slate-600">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Step 3: Test access</span>
                      </div>
                      <p className="text-sm text-gray-300">Open your browser and visit: <a href="http://localhost:8080" target="_blank" className="text-blue-400 hover:underline">http://localhost:8080</a></p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </main>
        );

      case 'docker-compose':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="docker-compose" className="text-4xl md:text-5xl font-extrabold mb-8 text-center flex items-center justify-center gap-4">
                <Box className="w-12 h-12 text-blue-600" />
                Docker Compose
              </h1>

              <div className="max-w-6xl mx-auto">
                {/* Intro */}
                <div className="bg-white/95 p-8 rounded-2xl border border-blue-100 shadow-xl mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Layers className="w-8 h-8 text-blue-600" />
                    Orchestrating Containers
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application&apos;s services. Then, with a single command, you create and start all the services from your configuration.
                  </p>
                </div>

                {/* Key Features */}
                <div className="bg-white/95 p-8 rounded-2xl border border-purple-100 shadow-xl mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-purple-600" />
                    Why Use Docker Compose?
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <h3 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                        <Workflow className="w-4 h-4" />
                        Simplified Workflow
                      </h3>
                      <p className="text-sm text-slate-700">Define your entire stack (frontend, backend, database) in a single file vs running multiple `docker run` commands.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <h3 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                        <Box className="w-4 h-4" />
                        Isolated Environments
                      </h3>
                      <p className="text-sm text-slate-700">Compose isolates environments using project names, allowing you to run multiple copies of the same environment on a single host.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <h3 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                        <Database className="w-4 h-4" />
                        Preserves Volume Data
                      </h3>
                      <p className="text-sm text-slate-700">Compose preserves volumes used by your services, ensuring data persistence across updates.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <h3 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                        <Copy className="w-4 h-4" />
                        Configuration Reusability
                      </h3>
                      <p className="text-sm text-slate-700">Use variables and overrides to reuse Compose configurations for different environments (dev, test, prod).</p>
                    </div>
                  </div>
                </div>

                {/* Example Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <FileCode className="w-6 h-6" />
                    The docker-compose.yml
                  </h2>
                  <div className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-700">
                    <code className="block font-mono text-sm text-green-400 whitespace-pre">
                      {`version: '3.8'
services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
    depends_on:
      - db
  
  db:
    image: postgres:13
    environment:
      POSTGRES_PASSWORD: example`}
                    </code>
                  </div>
                </div>

                {/* Commands */}
                <div className="bg-white/95 p-8 rounded-2xl border border-slate-200 shadow-xl">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Terminal className="w-8 h-8 text-slate-600" />
                    Essential Commands
                  </h2>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <code className="text-blue-600 font-bold">docker-compose up -d</code>
                      <span className="text-slate-800 text-sm">Start services in detached mode</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <code className="text-blue-600 font-bold">docker-compose down</code>
                      <span className="text-slate-800 text-sm">Stop and remove containers, networks, volumes</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <code className="text-blue-600 font-bold">docker-compose logs -f</code>
                      <span className="text-slate-800 text-sm">View output from containers (follow mode)</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <code className="text-blue-600 font-bold">docker-compose ps</code>
                      <span className="text-slate-800 text-sm">List containers</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </main>
        );

      default:
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="introduction" className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-slate-900 flex items-center justify-center gap-4">
                <Rocket className="w-12 h-12 text-blue-600" />
                DevOps Learning
              </h1>

              <div className="max-w-6xl mx-auto">
                <div className=" mb-8">
                  <div className="bg-white/95 border border-slate-200 p-8 rounded-xl shadow-xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <Target className="w-8 h-8 text-blue-600" />
                      Goal
                    </h2>
                    <p className="text-slate-700 text-xl">Master DevOps practices, tools, and culture for modern software development.</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );
    }
  };

  return (
    <TechLayout onThisPage={pageHeadings} technology="devops" activeSection={activeSection} setActiveSection={setActiveSection} background="white">
      <div
        className="min-h-screen rounded-3xl p-8 text-slate-900 border transition-all duration-300"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderColor: 'rgba(255, 255, 255, 0.5)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
        }}
      >
        {renderContent()}
      </div>
    </TechLayout>
  );
}
