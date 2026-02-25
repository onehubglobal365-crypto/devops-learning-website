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
    <main className="min-h-screen py-20 relative transition-colors duration-300">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[70%] rounded-full bg-violet-400/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-blue-400/10 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#083D77] dark:text-white tracking-tight">{pageData.h1}</h1>
            {pageData.difficulty && (
              <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${difficultyColors[pageData.difficulty as keyof typeof difficultyColors] || difficultyColors.beginner}`}>
                {pageData.difficulty.charAt(0).toUpperCase() + pageData.difficulty.slice(1)}
              </span>
            )}
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Last updated: {pageData.lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="space-y-6 mb-12 bg-white/40 dark:bg-black/10 backdrop-blur-md p-8 rounded-3xl border border-white/60 dark:border-white/10 shadow-xl">
          {pageData.placeholderParagraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white mb-6">Featured Content</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {pageData.samples.map((sample, index) => (
              <Link
                key={index}
                href={`#${sample.slug}`}
                className="block p-6 bg-white/60 dark:bg-[#1a1a1a] border border-white dark:border-gray-800 rounded-2xl hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {sample.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Explore lesson →</p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#083D77] to-[#0A569E] rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Ready to Get Started?</h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto relative z-10">
            {pageData.cta.text}
          </p>
          <Link
            href={pageData.cta.link}
            className="inline-block px-10 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/20 active:scale-95 relative z-10"
          >
            {pageData.cta.text}
          </Link>
        </div>
      </div>
    </main>
  );
}

