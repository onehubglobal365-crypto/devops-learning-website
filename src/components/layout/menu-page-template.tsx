import Link from 'next/link';
import { Metadata } from 'next';

interface MenuPageProps {
  pageData: {
    slug: string;
    metaTitle: string;
    metaDesc: string;
    h1: string;
    placeholderParagraphs: string[];
    samples: Array<{ title: string; slug: string }>;
    cta: { text: string; link: string };
    lastUpdated: string;
    difficulty?: string;
  };
}

export function generateMetadata(pageData: MenuPageProps['pageData']): Metadata {
  return {
    title: pageData.metaTitle,
    description: pageData.metaDesc,
  };
}

export default function MenuPageTemplate({ pageData }: MenuPageProps) {
  const difficultyColors = {
    beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
    intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    advanced: 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  return (
    <main className="min-h-screen pt-[calc(var(--space-xl)+60px)] pb-[var(--space-xl)] relative transition-colors duration-300">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[70%] rounded-full bg-violet-400/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-blue-400/10 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-[var(--space-sm)] max-w-5xl">
        {/* Header */}
        <div className="mb-[var(--space-lg)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-[var(--space-sm)] mb-[var(--space-sm)]">
            <h1 className="font-extrabold text-[#083D77] dark:text-white tracking-tight leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>{pageData.h1}</h1>
            {pageData.difficulty && (
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold border uppercase tracking-wider h-fit w-fit ${difficultyColors[pageData.difficulty as keyof typeof difficultyColors] || difficultyColors.beginner}`}>
                {pageData.difficulty}
              </span>
            )}
          </div>
          <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-[0.1em]" style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)' }}>Last updated: {pageData.lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="space-y-[var(--space-md)] mb-[var(--space-xl)] bg-white/40 dark:bg-black/10 backdrop-blur-md p-[var(--space-md)] md:p-[var(--space-lg)] rounded-[2.5rem] border border-white/60 dark:border-white/10">
          {pageData.placeholderParagraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-800 dark:text-gray-200 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mb-[var(--space-xl)]">
          <h2 className="font-extrabold text-gray-800 dark:text-white mb-[var(--space-md)]" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>Featured Content</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)]">
            {pageData.samples.map((sample, index) => (
              <Link
                key={index}
                href={`#${sample.slug}`}
                className="block p-[var(--space-md)] bg-white/60 dark:bg-[#1a1a1a] border border-white dark:border-gray-800 rounded-[2rem] hover:border-orange-500 transition-all duration-300 group"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.25rem)' }}>
                  {sample.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider" style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)' }}>Explore lesson →</p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#083D77] to-[#0A569E] rounded-[3rem] p-[var(--space-lg)] md:p-[var(--space-xl)] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <h2 className="font-bold text-white mb-[var(--space-sm)] relative z-10" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}>Ready to Get Started?</h2>
          <p className="text-white/80 mb-[var(--space-lg)] max-w-lg mx-auto relative z-10 font-medium" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
            {pageData.cta.text}
          </p>
          <Link
            href={pageData.cta.link}
            className="inline-block px-12 py-4 bg-orange-500 text-white font-black rounded-2xl hover:bg-orange-600 transition-all duration-300 active:scale-95 relative z-10 uppercase tracking-widest"
            style={{ fontSize: 'clamp(0.8125rem, 2vw, 0.875rem)' }}
          >
            {pageData.cta.text}
          </Link>
        </div>
      </div>
    </main>
  );
}
