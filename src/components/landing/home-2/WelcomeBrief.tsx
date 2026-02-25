'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WelcomeBrief() {
    return (
        <section className="py-6 bg-white relative overflow-hidden">
            {/* Decorative Geometric Shapes (matching the image style) */}
            <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10 pointer-events-none">
                <svg viewBox="0 0 200 200" className="w-full h-full text-blue-100">
                    <path fill="currentColor" d="M45,-78.2C58.1,-70.3,68.4,-57.4,75.4,-43.3C82.4,-29.2,86.1,-14.6,85.1,-0.6C84.1,13.4,78.3,26.8,70.1,38.8C61.9,50.8,51.3,61.4,38.8,69.1C26.3,76.8,11.9,81.6,-2.4,85.8C-16.7,90,-33.4,93.6,-47.1,87.6C-60.8,81.6,-71.5,66,-78.6,49.8C-85.7,33.6,-89.2,16.8,-88.9,0.2C-88.6,-16.4,-84.5,-32.8,-76.3,-47.2C-68.1,-61.6,-55.8,-74,-41.2,-81.1C-26.6,-88.2,-13.3,-90,1.3,-92.3C15.9,-94.6,31.9,-86.1,45,-78.2Z" transform="translate(100 100)" />
                </svg>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none transform translate-x-20 rotate-45">
                {/* Decorative blocks/hexagons */}
                <div className="w-16 h-16 bg-blue-200 mb-4 ml-8 rounded-2xl"></div>
                <div className="w-24 h-24 bg-blue-100 mb-4 rounded-3xl"></div>
                <div className="w-12 h-12 bg-blue-300 ml-12 rounded-xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

                    {/* Left Side: Image Container */}
                    <div className="w-full lg:w-[55%] relative">
                        <div className="relative h-[300px] md:h-[500px] lg:h-[650px] w-full rounded-2xl overflow-hidden shadow-2xl z-20">
                            <Image
                                src="/hero section/ohg image.jpeg"
                                alt="Students learning at One Hub Global"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Subtle floating accent under image */}
                        <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-1/2 h-1/2 bg-blue-600/10 rounded-3xl -z-10"></div>
                    </div>

                    {/* Right Side: Content Container */}
                    <div className="w-full lg:w-[45%] flex flex-col items-start pt-4 lg:pt-0">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                            About <span className="text-orange-500">OHG 365</span>
                        </h2>

                        <div className="space-y-6 text-gray-600 leading-relaxed text-base">
                            <p>
                                <span className="text-orange-500 font-semibold underline decoration-orange-200">
                                    OHG 365 is one of the leading EdTech and software training institutes located in KPHB, Hyderabad.
                                </span> We are committed to delivering high-quality, industry-oriented training along with real-time project exposure, placement assistance, and consultancy services. Our goal is to help students and working professionals build strong technical foundations and achieve successful careers in today’s competitive job market.
                            </p>

                            <p>
                                We offer a wide range of in-demand technologies including <span className="text-orange-500 font-medium">Java Full Stack Development, Python Full Stack Development, Data Engineering (AWS, Azure, GCP, Oracle, and Snowflake), Data Science, Data Analytics, Artificial Intelligence (AI), and Medical Coding.</span> Our training programs are designed to meet current industry standards and are delivered by experienced professionals with practical knowledge.
                            </p>

                            <p>
                                At <span className="text-orange-500 font-medium">OHG 365</span>, we focus on real-time learning with hands-on practice and live project experience. We provide complete career support services, including personalized career guidance, structured learning paths, and access to our own tutorials covering multiple technologies. Students also benefit from weekly coding challenges, AI-powered mock interviews, and regular communication and soft skills sessions.
                            </p>

                            <p>
                                Our mission is to empower learners with advanced technical skills, practical exposure, and strong career mentorship so they can confidently step into the IT and healthcare industries. We strive to bridge the gap between academic education and industry requirements by offering comprehensive training, continuous support, and placement-focused programs.
                            </p>
                        </div>

                        <Link href="/about" className="mt-8 inline-block">
                            <button className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 active:scale-95">
                                Know More
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
