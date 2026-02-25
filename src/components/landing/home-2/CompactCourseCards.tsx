'use client';

import CompactSection from './CompactSection';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const courses = [
    {
        id: 'java-fullstack',
        mainTitle: 'FullStack',
        category: 'Java',
        categoryColor: 'text-red-600',
        borderColor: 'border-blue-400',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        brochureLink: '/brochures/Full Stack Java Curriculum.pdf',
        techStack: [
            { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'Spring', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
            { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' }
        ]
    },
    {
        id: 'python-fullstack',
        mainTitle: 'FullStack',
        category: 'Python',
        categoryColor: 'text-blue-500',
        borderColor: 'border-yellow-400',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        brochureLink: '/brochures/Full Stack Python Curriculum.pdf',
        techStack: [
            { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
            { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
            { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
        ]
    },
    {
        id: 'web-dev',
        mainTitle: 'Development',
        category: 'Web',
        categoryColor: 'text-cyan-500',
        borderColor: 'border-cyan-400',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        brochureLink: '/brochures/Full Stack Java Curriculum.pdf',
        techStack: [
            { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
            { name: 'NextJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
            { name: 'NodeJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }
        ]
    },
    {
        id: 'azure-data-engineer',
        mainTitle: 'Engineering',
        category: 'Azure Data',
        categoryColor: 'text-blue-600',
        borderColor: 'border-blue-500',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
        brochureLink: '/brochures/Data Engineering.pdf',
        techStack: [
            { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'Spark', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
            { name: 'Databricks', logo: 'data:image/png;base64,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' },
            { name: 'PowerBI', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Power_bi_logo_black.svg' }
        ]
    }
];

export default function CompactCourseCards() {
    return (
        <CompactSection
            title="Our Path-Driven Programs"
            subtitle="Follow the structured learning journey designed by industry experts"
            backgroundColor="#ffffff"
        >
            <div className="flex flex-wrap gap-8 md:gap-12 justify-center max-w-7xl mx-auto px-4 py-8">
                {courses.map((course) => (
                    <a
                        key={course.id}
                        href={course.brochureLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-white p-2 transition-all duration-500 hover:scale-[1.02] w-full max-w-[450px]"
                    >
                        {/* The Image-style Container */}
                        <div className="relative w-full aspect-[16/10] border-2 rounded-[20px] md:rounded-[30px] flex flex-col items-center justify-center p-4 md:p-8 bg-white shadow-sm group-hover:shadow-2xl transition-all duration-500 overflow-visible border-blue-400">

                            {/* Top Left Integrated Header - Centered on Mobile, Left on Desktop */}
                            <div className="absolute top-[-24px] md:top-[-28px] left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0 bg-white px-4 md:px-6 py-2 flex items-center gap-3 md:gap-4 z-10 transition-all group-hover:-translate-y-1 rounded-2xl shadow-md border border-gray-100 w-[max-content]">
                                <div className="w-8 h-8 md:w-10 md:h-10 relative">
                                    <Image src={course.logo} alt={course.category} fill className="object-contain transition-transform group-hover:rotate-12" unoptimized />
                                </div>
                                <div className="flex flex-col">
                                    <span className={`text-[10px] md:text-xs font-black uppercase tracking-[0.2em] ${course.categoryColor}`}>
                                        {course.category}
                                    </span>
                                    <span className="text-lg md:text-xl font-black text-gray-900 tracking-tight whitespace-nowrap">
                                        {course.mainTitle}
                                    </span>
                                </div>
                            </div>

                            {/* Tech Stack Centered Grid - Text on Main Card Hover */}
                            <div className="grid grid-cols-3 gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-6 px-2 md:px-6 py-2 md:py-4 relative z-20">
                                {course.techStack.map((tech, idx) => (
                                    <div key={idx} className="flex flex-col items-center justify-center">
                                        <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 p-3 flex items-center justify-center relative">
                                            <div className="relative w-9 h-9">
                                                <Image src={tech.logo} alt={tech.name} fill className="object-contain" unoptimized />
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-black text-blue-600 mt-2 uppercase tracking-tighter bg-white px-2 py-0.5 rounded shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative Line Path */}
                            <div className="absolute top-0 left-[180px] right-10 h-0.5 bg-blue-400 hidden lg:block opacity-30 group-hover:opacity-100 transition-opacity">
                                <div className="absolute right-0 top-[-3px] w-2 h-2 border-t-2 border-r-2 border-blue-400 rotate-45" />
                                <div className="absolute left-[-2px] bottom-[-2px] w-2 h-2 border-l-2 border-t-2 border-blue-400 -rotate-45" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </CompactSection>
    );
}
