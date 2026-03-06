'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TechLayout from '@/components/layout/tech-layout';
import { AUTH_SYSTEM_AVAILABLE } from '@/config/authStatus';

export default function WebDevPage() {
  const [activeSection, setActiveSection] = useState('introduction');

  const pageHeadings = [
    { id: 'introduction', title: 'Web Development Learning Hub' },
    { id: 'frontend-fundamentals', title: 'Frontend Fundamentals' }
  ];

  // Get navigation for current section
  const getNavigation = () => {
    const currentIndex = pageHeadings.findIndex(h => h.id === activeSection);
    const previousSection = currentIndex > 0 ? pageHeadings[currentIndex - 1] : null;
    const nextSection = currentIndex < pageHeadings.length - 1 ? pageHeadings[currentIndex + 1] : null;

    return {
      previous: previousSection ? {
        href: `/web-dev/#${previousSection.id}`,
        title: previousSection.title,
        isSection: true
      } : {
        href: '/sql',
        title: 'SQL Tutorial',
        isSection: false
      },
      next: nextSection ? {
        href: `/web-dev/#${nextSection.id}`,
        title: nextSection.title,
        isSection: true
      } : {
        href: '/data-science',
        title: 'Data Science',
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
              <h1 id="introduction" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
                🌐 Web Development Hub
              </h1>
              <p className="text-lg text-gray-400 mb-8 text-center">
                Master modern web development with comprehensive frontend, backend, and full-stack technologies
              </p>

              <div className="max-w-6xl mx-auto">
                {/* Overview */}
                <div id="overview" className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 p-8 rounded-2xl mb-8">
                  <h2 className="text-3xl font-bold text-blue-400 mb-6">🚀 Web Development Overview</h2>

                  <div className="space-y-6">
                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-blue-400 mb-4">What is Web Development?</h3>
                      <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                        Web development is the process of creating websites and web applications that run on the internet or intranet. It encompasses everything from building simple static pages to complex dynamic web applications that can handle millions of users.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Modern web development involves multiple layers of technology working together to deliver fast, secure, and user-friendly experiences across different devices and browsers.
                      </p>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-blue-400 mb-4">Types of Web Development</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gray-800 p-4 rounded-lg border border-blue-500/30">
                          <h4 className="text-lg font-bold text-blue-300 mb-2">🎨 Frontend Development</h4>
                          <p className="text-sm text-gray-300">Client-side development focusing on user interface and user experience</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg border border-blue-500/30">
                          <h4 className="text-lg font-bold text-blue-300 mb-2">⚙️ Backend Development</h4>
                          <p className="text-sm text-gray-300">Server-side development handling data, logic, and server operations</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg border border-blue-500/30">
                          <h4 className="text-lg font-bold text-blue-300 mb-2">🔗 Full-Stack Development</h4>
                          <p className="text-sm text-gray-300">Combined frontend and backend development skills</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Career Paths */}
                <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/20 p-8 rounded-2xl mb-8">
                  <h2 className="text-3xl font-bold text-green-400 mb-6">💼 Career Paths in Web Development</h2>

                  <div className="space-y-6">
                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-green-400 mb-4">Frontend Developer</h3>
                      <p className="text-gray-300 mb-4">
                        Frontend developers focus on creating the visual and interactive elements that users see and interact with. They work with HTML, CSS, JavaScript, and various frameworks to build responsive and engaging user interfaces.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <h4 className="text-lg font-bold text-green-300 mb-2">Key Skills</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• HTML5 & CSS3</li>
                            <li>• JavaScript (ES6+)</li>
                            <li>• React, Vue, or Angular</li>
                            <li>• Responsive Design</li>
                            <li>• UI/UX Principles</li>
                          </ul>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <h4 className="text-lg font-bold text-green-300 mb-2">Responsibilities</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Build user interfaces</li>
                            <li>• Ensure responsive design</li>
                            <li>• Optimize performance</li>
                            <li>• Cross-browser compatibility</li>
                            <li>• Accessibility compliance</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-green-400 mb-4">Backend Developer</h3>
                      <p className="text-gray-300 mb-4">
                        Backend developers focus on server-side logic, databases, and APIs. They ensure that the frontend has the data and functionality it needs by building robust server applications and managing data storage.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <h4 className="text-lg font-bold text-green-300 mb-2">Key Skills</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Node.js, Python, Java, or PHP</li>
                            <li>• Databases (SQL/NoSQL)</li>
                            <li>• API Development</li>
                            <li>• Server Management</li>
                            <li>• Security Best Practices</li>
                          </ul>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <h4 className="text-lg font-bold text-green-300 mb-2">Responsibilities</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Build server applications</li>
                            <li>• Design and manage databases</li>
                            <li>• Create RESTful APIs</li>
                            <li>• Implement security measures</li>
                            <li>• Optimize server performance</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-green-400 mb-4">Full-Stack Developer</h3>
                      <p className="text-gray-300 mb-4">
                        Full-stack developers have expertise in both frontend and backend technologies. They can build complete web applications from the database layer to the user interface, making them valuable for end-to-end development.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <h4 className="text-lg font-bold text-green-300 mb-2">Key Skills</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Frontend & Backend Technologies</li>
                            <li>• Database Management</li>
                            <li>• DevOps & Deployment</li>
                            <li>• Version Control</li>
                            <li>• Project Architecture</li>
                          </ul>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <h4 className="text-lg font-bold text-green-300 mb-2">Responsibilities</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• End-to-end development</li>
                            <li>• System architecture design</li>
                            <li>• Database design and management</li>
                            <li>• API development</li>
                            <li>• Deployment and maintenance</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 p-8 rounded-2xl mb-8">
                  <h2 className="text-3xl font-bold text-purple-400 mb-6">🛠️ Modern Technology Stack</h2>

                  <div className="space-y-6">
                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-purple-400 mb-4">Frontend Technologies</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                            <h4 className="text-lg font-bold text-purple-300 mb-2">Core Technologies</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• HTML5 - Structure and semantics</li>
                              <li>• CSS3 - Styling and layout</li>
                              <li>• JavaScript ES6+ - Interactivity</li>
                              <li>• TypeScript - Type-safe JavaScript</li>
                            </ul>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                            <h4 className="text-lg font-bold text-purple-300 mb-2">CSS Frameworks</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Tailwind CSS - Utility-first</li>
                              <li>• Bootstrap - Component library</li>
                              <li>• Material-UI - Google's design system</li>
                              <li>• Styled Components - CSS-in-JS</li>
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                            <h4 className="text-lg font-bold text-purple-300 mb-2">JavaScript Frameworks</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• React - Component-based UI</li>
                              <li>• Vue.js - Progressive framework</li>
                              <li>• Angular - Full-featured framework</li>
                              <li>• Svelte - Compile-time framework</li>
                            </ul>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                            <h4 className="text-lg font-bold text-purple-300 mb-2">Build Tools</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Webpack - Module bundler</li>
                              <li>• Vite - Fast build tool</li>
                              <li>• Parcel - Zero-config bundler</li>
                              <li>• Rollup - ES module bundler</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-purple-400 mb-4">Backend Technologies</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                            <h4 className="text-lg font-bold text-purple-300 mb-2">Programming Languages</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Node.js - JavaScript runtime</li>
                              <li>• Python - Django/Flask</li>
                              <li>• Java - Spring Boot</li>
                              <li>• C# - ASP.NET Core</li>
                              <li>• PHP - Laravel/Symfony</li>
                            </ul>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                            <h4 className="text-lg font-bold text-purple-300 mb-2">Databases</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• PostgreSQL - Relational</li>
                              <li>• MySQL - Popular relational</li>
                              <li>• MongoDB - Document-based</li>
                              <li>• Redis - In-memory cache</li>
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                            <h4 className="text-lg font-bold text-purple-300 mb-2">Cloud Platforms</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• AWS - Amazon Web Services</li>
                              <li>• Google Cloud - GCP</li>
                              <li>• Microsoft Azure - Cloud platform</li>
                              <li>• Vercel - Frontend deployment</li>
                            </ul>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                            <h4 className="text-lg font-bold text-purple-300 mb-2">DevOps Tools</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Docker - Containerization</li>
                              <li>• Kubernetes - Orchestration</li>
                              <li>• CI/CD Pipelines</li>
                              <li>• Monitoring & Logging</li>
                            </ul>
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

      case 'frontend-fundamentals':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="frontend-fundamentals" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
                🎨 Frontend Fundamentals
              </h1>
              <p className="text-lg text-gray-400 mb-8 text-center">
                Master the core technologies that power modern web interfaces
              </p>

              <div className="max-w-6xl mx-auto">
                {/* HTML Fundamentals */}
                <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 border border-orange-500/20 p-8 rounded-2xl mb-8">
                  <h2 className="text-3xl font-bold text-orange-400 mb-6">📝 HTML5 Fundamentals</h2>

                  <div className="space-y-6">
                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-orange-400 mb-4">What is HTML?</h3>
                      <p className="text-gray-300 mb-4">
                        HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure and content of web pages, defining elements like headings, paragraphs, links, images, and more.
                      </p>
                      <p className="text-gray-300">
                        HTML5 introduced semantic elements, multimedia support, and improved accessibility features, making it the foundation of modern web development.
                      </p>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-orange-400 mb-4">Key HTML5 Features</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="bg-gray-800 p-4 rounded-lg border border-orange-500/30">
                            <h4 className="text-lg font-bold text-orange-300 mb-2">Semantic Elements</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• &lt;header&gt; - Page header</li>
                              <li>• &lt;nav&gt; - Navigation</li>
                              <li>• &lt;main&gt; - Main content</li>
                              <li>• &lt;section&gt; - Content sections</li>
                              <li>• &lt;article&gt; - Self-contained content</li>
                              <li>• &lt;footer&gt; - Page footer</li>
                            </ul>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg border border-orange-500/30">
                            <h4 className="text-lg font-bold text-orange-300 mb-2">Form Elements</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• &lt;input&gt; with new types</li>
                              <li>• &lt;textarea&gt; - Multi-line text</li>
                              <li>• &lt;select&gt; - Dropdown lists</li>
                              <li>• &lt;button&gt; - Interactive buttons</li>
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-gray-800 p-4 rounded-lg border border-orange-500/30">
                            <h4 className="text-lg font-bold text-orange-300 mb-2">Multimedia</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• &lt;video&gt; - Video playback</li>
                              <li>• &lt;audio&gt; - Audio playback</li>
                              <li>• &lt;canvas&gt; - Graphics drawing</li>
                              <li>• &lt;svg&gt; - Vector graphics</li>
                            </ul>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg border border-orange-500/30">
                            <h4 className="text-lg font-bold text-orange-300 mb-2">Accessibility</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• ARIA attributes</li>
                              <li>• Semantic structure</li>
                              <li>• Keyboard navigation</li>
                              <li>• Screen reader support</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CSS Fundamentals */}
                <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 p-8 rounded-2xl mb-8">
                  <h2 className="text-3xl font-bold text-blue-400 mb-6">🎨 CSS3 Fundamentals</h2>

                  <div className="space-y-6">
                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-blue-400 mb-4">What is CSS?</h3>
                      <p className="text-gray-300 mb-4">
                        CSS (Cascading Style Sheets) is the language used to style and layout web pages. It controls the visual appearance of HTML elements, including colors, fonts, spacing, positioning, and responsive design.
                      </p>
                      <p className="text-gray-300">
                        CSS3 introduced advanced features like flexbox, grid, animations, transitions, and media queries, revolutionizing how we create responsive and interactive web designs.
                      </p>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-blue-400 mb-4">CSS Layout Systems</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="bg-gray-800 p-4 rounded-lg border border-blue-500/30">
                            <h4 className="text-lg font-bold text-blue-300 mb-2">Flexbox</h4>
                            <p className="text-sm text-gray-300 mb-2">One-dimensional layout for flexible and responsive designs</p>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• justify-content - Main axis alignment</li>
                              <li>• align-items - Cross axis alignment</li>
                              <li>• flex-direction - Row/column direction</li>
                              <li>• flex-wrap - Wrapping behavior</li>
                            </ul>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg border border-blue-500/30">
                            <h4 className="text-lg font-bold text-blue-300 mb-2">CSS Grid</h4>
                            <p className="text-sm text-gray-300 mb-2">Two-dimensional layout system for complex designs</p>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• grid-template-columns - Column sizing</li>
                              <li>• grid-template-rows - Row sizing</li>
                              <li>• grid-gap - Spacing between items</li>
                              <li>• grid-area - Item placement</li>
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-gray-800 p-4 rounded-lg border border-blue-500/30">
                            <h4 className="text-lg font-bold text-blue-300 mb-2">Responsive Design</h4>
                            <p className="text-sm text-gray-300 mb-2">Adapting layouts to different screen sizes</p>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Media queries - Breakpoint targeting</li>
                              <li>• Fluid typography - Scalable text</li>
                              <li>• Flexible images - Responsive media</li>
                              <li>• Mobile-first approach</li>
                            </ul>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg border border-blue-500/30">
                            <h4 className="text-lg font-bold text-blue-300 mb-2">CSS Animations</h4>
                            <p className="text-sm text-gray-300 mb-2">Creating engaging user experiences</p>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• @keyframes - Animation definition</li>
                              <li>• transition - Smooth property changes</li>
                              <li>• transform - Element transformations</li>
                              <li>• animation - Complex animations</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* JavaScript Fundamentals */}
                <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-500/20 p-8 rounded-2xl mb-8">
                  <h2 className="text-3xl font-bold text-yellow-400 mb-6">⚡ JavaScript Fundamentals</h2>

                  <div className="space-y-6">
                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-4">What is JavaScript?</h3>
                      <p className="text-gray-300 mb-4">
                        JavaScript is a versatile programming language that adds interactivity and dynamic behavior to web pages. It's the only programming language that runs natively in web browsers and has evolved significantly with ES6+ features.
                      </p>
                      <p className="text-gray-300">
                        Modern JavaScript supports object-oriented programming, functional programming, asynchronous operations, and works seamlessly with HTML and CSS to create rich web experiences.
                      </p>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-4">Core JavaScript Concepts</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="bg-gray-800 p-4 rounded-lg border border-yellow-500/30">
                            <h4 className="text-lg font-bold text-yellow-300 mb-2">Variables & Data Types</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• let, const, var - Variable declarations</li>
                              <li>• Primitive types - string, number, boolean</li>
                              <li>• Reference types - object, array, function</li>
                              <li>• Type coercion and conversion</li>
                            </ul>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg border border-yellow-500/30">
                            <h4 className="text-lg font-bold text-yellow-300 mb-2">Functions</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Function declarations and expressions</li>
                              <li>• Arrow functions - ES6 syntax</li>
                              <li>• Higher-order functions</li>
                              <li>• Closures and scope</li>
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-gray-800 p-4 rounded-lg border border-yellow-500/30">
                            <h4 className="text-lg font-bold text-yellow-300 mb-2">DOM Manipulation</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Selecting elements</li>
                              <li>• Modifying content and attributes</li>
                              <li>• Event handling</li>
                              <li>• Creating and removing elements</li>
                            </ul>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg border border-yellow-500/30">
                            <h4 className="text-lg font-bold text-yellow-300 mb-2">Async Programming</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Promises - Asynchronous operations</li>
                              <li>• async/await - Modern async syntax</li>
                              <li>• Fetch API - HTTP requests</li>
                              <li>• Error handling</li>
                            </ul>
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

      default:
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
                🌐 Web Development Hub
              </h1>
              <p className="text-lg text-gray-400 mb-8 text-center">
                Select a topic from the sidebar to start learning
              </p>
            </div>
          </main>
        );
    }
  };

  return (
    <TechLayout onThisPage={pageHeadings} technology="web-dev" activeSection={activeSection} setActiveSection={setActiveSection} background="white">
      <div
        className="min-h-screen rounded-none p-8 text-slate-900 border transition-all duration-300"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderColor: 'black',

        }}
      >
        {renderContent()}
      </div>
    </TechLayout>
  );
}
