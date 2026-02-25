'use client';

import Image from 'next/image';
import CompactSection from './CompactSection';

const courses = [
  { title: 'Python Tutorial', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { title: 'Java Tutorial', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { title: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { title: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { title: 'HTML Tutorial', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { title: 'CSS Tutorial', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { title: 'SQL Tutorial', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { title: 'Azure Tutorial', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { title: 'DevOps Tutorial', image: 'https://e7.pngegg.com/pngimages/887/314/png-clipart-devops-software-engineering-technology-engineer-blue-text-thumbnail.png' },
  { title: 'AWS Tutorial', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
];

export default function CompactCourses() {
  return (
    <CompactSection
      title="Start Your Learning Journey"
      subtitle="Explore comprehensive tutorials across multiple domains"
      backgroundColor="var(--bg-secondary)"
      stagger={true}
    >
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 max-w-5xl mx-auto px-4">
        {courses.map((course) => (
          <div
            key={course.title}
            className="group flex flex-col items-center justify-center bg-white rounded-2xl p-3 shadow-sm border border-gray-100 aspect-square cursor-default transition-all hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 duration-300"
          >
            <div className={`relative ${course.title === 'DevOps Tutorial' ? 'w-12 h-12 md:w-16 md:h-16' : 'w-8 h-8 md:w-12 md:h-12'} mb-3`}>
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 48px, 64px"
                unoptimized
              />
            </div>
            <h3 className="font-bold text-slate-800 text-center text-[10px] md:text-xs leading-tight transition-colors group-hover:text-blue-600">
              {course.title}
            </h3>
          </div>
        ))}
      </div>
    </CompactSection>
  );
}
