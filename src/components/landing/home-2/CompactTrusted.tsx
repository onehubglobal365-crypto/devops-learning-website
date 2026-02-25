'use client';

import Image from 'next/image';
import Link from 'next/link';
import CompactSection from './CompactSection';

const isoImages = [
  { id: 1, src: '/images/1.png', alt: 'Certification 1' },
  { id: 2, src: '/images/2.png', alt: 'Certification 2' },
  { id: 3, src: '/images/3.png', alt: 'Certification 3' },
  { id: 4, src: '/images/4.png', alt: 'Certification 4' },
  { id: 5, src: '/images/5.png', alt: 'Certification 5' },
  { id: 6, src: '/images/6.png', alt: 'certification 6' }
];

export default function CompactTrusted() {
  return (
    <CompactSection
      title="Trusted & Certified"
      subtitle="Globally recognized excellence in education and training"
      backgroundColor="#f8fafc"
    >
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 md:gap-12 py-2">
          {[...isoImages, ...isoImages, ...isoImages].map((iso, index) => (
            <div
              key={`${iso.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <div className="relative w-24 h-24 md:w-36 md:h-24">
                <Image
                  src={iso.src}
                  alt={iso.alt}
                  fill
                  className="object-contain mix-blend-multiply drop-shadow-sm"
                  sizes="(max-width: 900px) 128px, 208px"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </CompactSection>
  );
}

