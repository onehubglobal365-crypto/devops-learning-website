'use client';

import CompactSection from './CompactSection';
import { Globe, Coffee, Terminal, Database, ArrowRight, Code, Layout, Server, Database as DatabaseIcon, FileCode, Layers, Cloud, BarChart, HardDrive, Warehouse } from 'lucide-react';

const courses = [
    {
        id: 'web-dev',
        title: 'Web Development',
        description: 'Master modern web technologies including React, Next.js, and Node.js to build scalable applications.',
        icon: <Globe className="w-8 h-8 text-blue-500" />,
        color: 'bg-blue-50',
        borderColor: 'group-hover:border-blue-200',
        brochureLink: '/brochures/Full Stack Java Curriculum.pdf',
        subCards: [
            { name: 'HTML', icon: <Layout />, color: 'text-orange-600 bg-orange-50' },
            { name: 'CSS', icon: <FileCode />, color: 'text-blue-600 bg-blue-50' },
            { name: 'JS', icon: <Code />, color: 'text-yellow-600 bg-yellow-50' },
            { name: 'Node', icon: <Server />, color: 'text-green-600 bg-green-50' },
            { name: 'SQL', icon: <DatabaseIcon />, color: 'text-slate-600 bg-slate-50' }
        ]
    },
    {
        id: 'java-fullstack',
        title: 'Java Full Stack',
        description: 'Comprehensive curriculum covering Core Java, Spring Boot, Microservices, and Cloud deployment.',
        icon: <Coffee className="w-8 h-8 text-orange-600" />,
        color: 'bg-orange-50',
        borderColor: 'group-hover:border-orange-200',
        brochureLink: '/brochures/Full Stack Java Curriculum.pdf',
        subCards: [
            { name: 'HTML', icon: <Layout />, color: 'text-orange-600 bg-orange-50' },
            { name: 'CSS', icon: <FileCode />, color: 'text-blue-600 bg-blue-50' },
            { name: 'JS', icon: <Code />, color: 'text-yellow-600 bg-yellow-50' },
            { name: 'React/Angular', icon: <Layers />, color: 'text-cyan-600 bg-cyan-50' },
            { name: 'Core Java', icon: <Coffee />, color: 'text-red-600 bg-red-50' },
            { name: 'Adv Java', icon: <Coffee />, color: 'text-red-700 bg-red-100' },
            { name: 'Spring Ecosystem', icon: <Server />, color: 'text-green-600 bg-green-50' }
        ]
    },
    {
        id: 'python-fullstack',
        title: 'Python Full Stack',
        description: 'Expert-led training in Python, Django/Flask, REST APIs, and front-end integration.',
        icon: <Terminal className="w-8 h-8 text-yellow-600" />,
        color: 'bg-yellow-50',
        borderColor: 'group-hover:border-yellow-200',
        brochureLink: '/brochures/Full Stack Python Curriculum.pdf',
        subCards: [
            { name: 'HTML', icon: <Layout />, color: 'text-orange-600 bg-orange-50' },
            { name: 'CSS', icon: <FileCode />, color: 'text-blue-600 bg-blue-50' },
            { name: 'JS', icon: <Code />, color: 'text-yellow-600 bg-yellow-50' },
            { name: 'React', icon: <Layers />, color: 'text-cyan-600 bg-cyan-50' },
            { name: 'Django', icon: <Terminal />, color: 'text-green-800 bg-green-100' }
        ]
    },
    {
        id: 'azure-data-engineer',
        title: 'Azure Data Engineer',
        description: 'Learn Big Data technologies on Azure with a focus on real-world implementation.',
        icon: <Database className="w-8 h-8 text-blue-600" />,
        color: 'bg-blue-50',
        borderColor: 'group-hover:border-blue-200',
        brochureLink: '/brochures/Data Engineering.pdf',
        subCards: [
            { name: 'SQL', icon: <DatabaseIcon />, color: 'text-slate-600 bg-slate-50' },
            { name: 'PySpark', icon: <Terminal />, color: 'text-orange-500 bg-orange-50' },
            { name: 'Python', icon: <Code />, color: 'text-yellow-600 bg-yellow-50' },
            { name: 'Azure', icon: <Cloud />, color: 'text-blue-600 bg-blue-50' },
            { name: 'Power BI', icon: <BarChart />, color: 'text-yellow-600 bg-yellow-100' }
        ]
    },
    {
        id: 'microsoft-fabric',
        title: 'Microsoft Fabric Analytics',
        description: 'Master the next generation of data analytics with Microsoft Fabric.',
        icon: <Layers className="w-8 h-8 text-purple-600" />,
        color: 'bg-purple-50',
        borderColor: 'group-hover:border-purple-200',
        brochureLink: '/brochures/Data Engineering.pdf',
        subCards: [
            { name: 'OneLake', icon: <HardDrive />, color: 'text-blue-600 bg-blue-50' },
            { name: 'Data Warehouse', icon: <Warehouse />, color: 'text-slate-600 bg-slate-50' },
            { name: 'Lakehouse', icon: <DatabaseIcon />, color: 'text-cyan-600 bg-cyan-50' }
        ]
    }
];

export default function CompactCourseCards() {
    return (
        <CompactSection
            title="Our Top Programs"
            subtitle="Industry-aligned intensive programs designed to launch your career"
            backgroundColor="#f8fafc"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center">
                {courses.map((course) => (
                    <a
                        key={course.id}
                        href={course.brochureLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${course.borderColor} flex flex-col h-full`}
                    >
                        {/* Icon header */}
                        <div className={`w-14 h-14 ${course.color} rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 shrink-0`}>
                            {course.icon}
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                            {course.title}
                        </h3>
                        {/* Content or Sub Cards */}
                        {course.subCards ? (
                            <div className="grid grid-cols-2 gap-3 mb-6 flex-grow content-start">
                                {course.subCards.map((sub, idx) => (
                                    <div key={idx} className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300 cursor-default group/sub text-center h-full">
                                        <div className={`p-2 rounded-lg mb-2 ${sub.color} transition-transform group-hover/sub:scale-110`}>
                                            <div className="[&>svg]:w-5 [&>svg]:h-5">{sub.icon}</div>
                                        </div>
                                        <span className="text-xs font-bold text-gray-800 leading-tight">{sub.name}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                {course.description}
                            </p>
                        )}

                        {/* Link/Action */}
                        <div className="flex items-center text-blue-600 font-semibold text-sm group/link mt-auto pt-4 border-t border-gray-50">
                            <span className="mr-2">Download Brochure</span>
                            <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                        </div>

                        {/* Decorative bottom line */}
                        <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gray-100 group-hover:bg-blue-600 transition-colors duration-300" />
                    </a>
                ))}
            </div>
        </CompactSection>
    );
}
