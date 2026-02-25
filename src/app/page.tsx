'use client';

import { useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import HeroWithNav from '@/components/landing/home-2/HeroWithNav';
import { useTheme } from '@/hooks/useTheme';

// Dynamic imports for sections below the hero
const CompactTrusted = dynamic(() => import('@/components/landing/home-2/CompactTrusted'), { ssr: false });
const CompactCourses = dynamic(() => import('@/components/landing/home-2/CompactCourses'), { ssr: false });
const CompactCourseCards = dynamic(() => import('@/components/landing/home-2/CompactCourseCards'), { ssr: false });
const VisionRoadmap = dynamic(() => import('@/components/landing/home-2/VisionRoadmap'), { ssr: false });
const ProcessPath = dynamic(() => import('@/components/landing/home-2/ProcessPath'), { ssr: false });
const CompactTechnologies = dynamic(() => import('@/components/landing/home-2/CompactTechnologies'), { ssr: false });
const CompactStats = dynamic(() => import('@/components/landing/home-2/CompactStats'), { ssr: false });
const CompactAlumni = dynamic(() => import('@/components/landing/home-2/CompactAlumni'), { ssr: false });
const CompactFeatures = dynamic(() => import('@/components/landing/home-2/CompactFeatures'), { ssr: false });
const Gallery = dynamic(() => import('@/components/landing/home-2/Gallery'), { ssr: false });
const CompactCertifications = dynamic(() => import('@/components/landing/home-2/CompactCertifications'), { ssr: false });
const CompactWeeklyTests = dynamic(() => import('@/components/landing/home-2/CompactWeeklyTests'), { ssr: false });
const CompactFooter = dynamic(() => import('@/components/landing/home-2/CompactFooter'), { ssr: true });
const ScholarshipPromo = dynamic(() => import('@/components/landing/home-2/ScholarshipPromo'), { ssr: false });
const WelcomeBrief = dynamic(() => import('@/components/landing/home-2/WelcomeBrief'), { ssr: false });
const ScrollAnimate = dynamic(() => import('@/components/landing/home-2/ScrollAnimate'), { ssr: false });
const HiringPartners = dynamic(() => import('@/components/landing/home-2/HiringPartners'), { ssr: false });

export default function HomePage() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = 'OHG 365 - Your Career Journey Starts Here';
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          'Find job opportunities and enhance your skills to achieve your career goals. Learn, grow, and succeed with OHG 365.'
        );
      }
    }
  }, []);

  return (
    <main className="min-h-screen home-2-page home-page-gradient">
      <Suspense fallback={null}>
        <HeroWithNav />
      </Suspense>
      {/* ... other components ... */}
      <ScholarshipPromo /> {/* Floating Promo */}

      <ScrollAnimate animation="fade-up" delay={200} triggerOnce={true}>
        <div className="section-wrapper py-0">
          <CompactTrusted />
        </div>
      </ScrollAnimate>


      <ScrollAnimate animation="fade-up" delay={200} triggerOnce={true}>
        <div className="section-wrapper py-0">
          <WelcomeBrief />
        </div>
      </ScrollAnimate>

      <HiringPartners />

      {/* <ScrollAnimate animation="fade-up" delay={200} triggerOnce={true}>
        <div className="section-wrapper py-0">
          <WelcomeBrief />
        </div>
      </ScrollAnimate> */}



      <ScrollAnimate animation="fade-up" delay={200} triggerOnce={true}>
        <div className="section-wrapper py-0">
          <CompactAlumni />
        </div>
      </ScrollAnimate>




      <ScrollAnimate animation="fade-up" delay={300} triggerOnce={true}>
        <div className="section-wrapper py-0">
          <CompactCourses />
        </div>
      </ScrollAnimate>



      <ScrollAnimate animation="fade-left" delay={200} triggerOnce={true}>
        <div className="section-wrapper py-0">
          <ProcessPath />
        </div>
      </ScrollAnimate>



      <ScrollAnimate animation="fade-up" delay={250} triggerOnce={true}>
        <div className="section-wrapper py-0">
          <CompactCourseCards />
        </div>
      </ScrollAnimate>

      {/* Temporarily hidden 
      <ScrollAnimate animation="fade-scale" delay={300} triggerOnce={true}>
        <div id="vision" className="section-wrapper py-0">
          <VisionRoadmap />
        </div>
      </ScrollAnimate>
      */}

      {/* <ScrollAnimate animation="fade-left" delay={200} triggerOnce={true}>
        <div className="section-wrapper py-0">
          <ProcessPath />
        </div>
      </ScrollAnimate> */}



      {/* <ScrollAnimate animation="fade-up" delay={250} triggerOnce={true}>
        <div className="section-wrapper py-0">
          <CompactTechnologies />
        </div>
      </ScrollAnimate> */}

      {/* <ScrollAnimate animation="fade-scale" delay={200} triggerOnce={true}>
        <div className="section-wrapper py-0">
          <CompactStats />
        </div>
      </ScrollAnimate> */}

      {/* <ScrollAnimate animation="fade-up" delay={200} triggerOnce={true}>
        <div className="section-wrapper py-0">
          <CompactAlumni />
        </div>
      </ScrollAnimate> */}

      <ScrollAnimate animation="fade-right" delay={250} triggerOnce={true}>
        <div className="section-wrapper py-0">
          <CompactFeatures />
        </div>
      </ScrollAnimate>

      <div id="gallery">
        <ScrollAnimate animation="fade-up" delay={200} triggerOnce={true}>
          <Suspense fallback={null}>
            <Gallery />
          </Suspense>
        </ScrollAnimate>
      </div>

      {/* <ScrollAnimate animation="fade-up" delay={200} triggerOnce={true}>
        <div className="section-wrapper py-0">
          <CompactWeeklyTests />
        </div>
      </ScrollAnimate> */}

      {/* <ScrollAnimate animation="fade-scale" delay={250} triggerOnce={true}>
        <div className="section-wrapper py-0">
          <CompactCertifications />
        </div>
      </ScrollAnimate> */}

      <ScrollAnimate animation="fade-up" delay={100} triggerOnce={true}>
        <CompactFooter />
      </ScrollAnimate>
    </main>
  );
}
