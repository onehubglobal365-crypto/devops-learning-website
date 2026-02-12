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
  { title: 'DevOps Tutorial', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg' },
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-4">
        {courses.map((course) => (
          <div
            key={course.title}
            className="group flex flex-col items-center justify-center bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-48 cursor-default"
          >
            <div className="relative w-16 h-16 mb-4">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-contain"
                sizes="64px"
                unoptimized
              />
            </div>
            <h3 className="font-bold text-slate-900 text-center text-sm md:text-base transition-colors">
              {course.title}
            </h3>
          </div>
        ))}
      </div>
    </CompactSection>
  );
}
