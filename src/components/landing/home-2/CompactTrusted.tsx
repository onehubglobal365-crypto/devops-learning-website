'use client';

import Image from 'next/image';
import ScrollAnimate from './ScrollAnimate';

const isoImages = [
  { id: 1, src: '/images/iso1.jpg', alt: 'ISO Certification 1', caption: 'Certified by ISO 9001:2015' },
  { id: 3, src: '/images/iso5.jpg', alt: 'ISO Certification 3', caption: 'Certified by ISO 21001:2018' },
  { id: 4, src: '/WhatsApp Image 2026-01-07 at 10.19.32 PM (1).jpeg', alt: 'Certification 4', caption: 'Globally Recognized' },
  { id: 5, src: '/WhatsApp Image 2026-01-07 at 10.19.32 PM.jpeg', alt: 'Certification 5', caption: 'Expert Led Training' },
  { id: 6, src: '/WhatsApp Image 2026-01-07 at 10.19.31 PM.jpeg', alt: 'Certification 6', caption: 'Career Focused' },
];

export default function CompactTrusted() {
  return (
    <section
      className="compact-section"
      style={{
        backgroundColor: '#f8fafc',
        padding: '2rem 0'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto overflow-hidden">
          <div className="animate-marquee flex items-center gap-16 md:gap-32 py-2">
            {[...isoImages, ...isoImages, ...isoImages].map((iso, index) => (
              <div
                key={`${iso.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="relative w-16 h-16 md:w-24 md:h-16">
                  <Image
                    src={iso.src}
                    alt={iso.alt}
                    fill
                    className="object-contain mix-blend-multiply transition-all duration-300"
                    sizes="(max-width: 768px) 64px, 120px"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

