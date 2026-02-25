import Image from 'next/image';
import ScrollAnimate from './ScrollAnimate';

export default function ProcessPath() {
  return (
    <section className="compact-section pt-1 pb-4" style={{ backgroundColor: '#fcfcfc' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-[1400px] mx-auto">
          {/* Left Section - Image and Text */}
          <ScrollAnimate animation="fade-up" triggerOnce={false} className="lg:col-span-5">
            <div className="relative">
              <div className="flex flex-col mb-10">
                <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3 block">Methodology</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  The OHG365 Experience
                </h2>
                <div className="h-1.5 w-24 bg-blue-600 rounded-full mb-8"></div>
                <p className="text-gray-500 text-lg leading-relaxed">
                  We specialize in transforming potential into success through a structured ecosystem of tailored upskilling, corporate internships, and professional workshops.
                </p>
              </div>
              <div className="relative w-full overflow-hidden">
                <Image
                  src="/images/Website Infographic.png"
                  alt="Professional Education Structure"
                  width={1400}
                  height={2100}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </ScrollAnimate>

          {/* Right Section - Professional Vertical Video */}
          <ScrollAnimate animation="fade-up" triggerOnce={false} className="lg:col-span-7 flex justify-center">
            <div className="relative group w-full max-w-[320px] aspect-[9/16] rounded-[30px] overflow-hidden bg-black shadow-2xl border border-gray-100">
              <video
                className="w-full h-full object-contain"
                autoPlay
                loop
                muted
                playsInline
                controls
              >
                <source src="/ohg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Premium Overlay Gradient */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}

