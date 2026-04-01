'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { createPortal } from 'react-dom';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { X, Maximize2, Camera } from 'lucide-react';

const selectedMainImages = [
    '/website-pics/17.jpg',
    // '/website-pics/02.webp',
    '/website-pics/03.webp',
    '/website-pics/04.webp',
    '/website-pics/05.webp',
    '/website-pics/06.webp',
    '/website-pics/07.webp',
    '/website-pics/08.webp',
    '/website-pics/13.jpg',
    '/website-pics/14.jpg',
    // '/website-pics/15.jpg',
    '/website-pics/01.webp',
    // '/website-pics/16.jpg',
    '/website-pics/18.jpeg',
    // '/website-pics/09.webp',
    '/website-pics/10.webp',
];

const galleryImages = [
     '/website-pics/01.webp',
    '/website-pics/02.webp',
    '/website-pics/03.webp',
    '/website-pics/04.webp',
    '/website-pics/05.webp',
    '/website-pics/06.webp',
    '/website-pics/07.webp',
    '/website-pics/08.webp',
    '/website-pics/09.webp',
    '/website-pics/10.webp',
    '/website-pics/11.jpg',
    '/website-pics/12.jpg',
    '/website-pics/13.jpg',
    '/website-pics/14.jpg',
    '/website-pics/15.jpg',
    '/website-pics/16.jpg',
    '/website-pics/17.jpg',
    '/website-pics/18.jpeg',
];

function GalleryInner() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
        if (searchParams.get('open') === 'true') {
            setShowModal(true);
        }
    }, [searchParams]);

    const handleImageClick = (src: string) => {
        setSelectedImage(src);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        if (searchParams.get('open') === 'true') {
            router.back();
        }
    };

    return (
        <div className="py-2 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-4 gap-4 md:gap-6 border-b border-gray-200 pb-4">
                    <div className="max-w-2xl">
                        {/* <span className="text-blue-500 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-1 md:mb-2 block">Visual Excellence</span> */}
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">Our Campus & Infrastructure</h2>
                        {/* <p className="text-gray-600 text-sm md:text-base">A glimpse into the state-of-the-art environment where innovation meets learning.</p> */}
                    </div>
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 shadow-lg text-xs md:text-sm w-full md:w-auto justify-center"
                    >
                        <span>Explore Full Gallery</span>
                        <Maximize2 className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 pt-4 pb-8">
                    {selectedMainImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative aspect-square cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                            onClick={() => setShowModal(true)}
                        >
                            <Image
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>

            {isMounted && showModal && createPortal(
                <div className="fixed inset-0 z-[150001] flex items-center justify-center p-2 sm:p-4">
                    <div
                        className="absolute inset-0 bg-white/20 backdrop-blur-2xl transition-all duration-500"
                        onClick={handleCloseModal}
                    ></div>

                    <div className="bg-white/95 w-full max-w-7xl h-full md:h-[85vh] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden relative z-10 border border-white shadow-[0_30px_100px_rgba(0,0,0,0.2)] flex flex-col scale-in">
                        <div className="px-6 md:px-12 py-6 md:py-8 border-b border-gray-100 flex justify-between items-center bg-white/50 backdrop-blur-md">
                            <div>
                                <h3 className="text-2xl md:text-4xl text-gray-900 tracking-tight">Full Gallery</h3>
                                <p className="text-gray-500 text-xs md:text-base font-medium">Campus moments and achievements</p>
                            </div>
                            <button onClick={handleCloseModal} className="p-3 md:p-4 bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-400 rounded-2xl md:rounded-3xl transition-all duration-300 active:scale-90">
                                <X className="w-6 h-6 md:w-8 md:h-8" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-8 custom-scrollbar">
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {galleryImages.map((src, index) => (
                                    <div
                                        key={index}
                                        className="aspect-square relative overflow-hidden rounded-3xl cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] border-2 border-white"
                                        onClick={() => handleImageClick(src)}
                                    >
                                        <Image src={src} alt={`Full item ${index + 1}`} fill className="object-cover" />
                                        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}

            {isMounted && selectedImage && createPortal(
                <div className="fixed inset-0 z-[150005] flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"></div>
                    <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
                        <div className="relative w-full overflow-hidden rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] animate-zoom-in border-4 border-white/20">
                            <Image src={selectedImage} alt="Preview" width={1600} height={1000} className="object-contain max-h-[80vh] w-full" />
                        </div>
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-[-20px] right-[-30px] md:top-4 md:right-4 p-4 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all border border-white/40 backdrop-blur-xl active:scale-90"
                        >
                            <X className="w-8 h-8" />
                        </button>
                    </div>
                </div>,
                document.body
            )}

            <style jsx global>{`
                .scale-in {
                    animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.95) translateY(10px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                .animate-zoom-in {
                    animation: zoomIn 0.3s ease-out;
                }
                @keyframes zoomIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 12px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 12px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
            `}</style>
        </div>
    );
};

export default function Gallery() {
    return (
        <Suspense fallback={<div className="h-96 w-full flex items-center justify-center bg-gray-50/50 rounded-3xl border border-gray-100 italic text-gray-400">Loading Gallery...</div>}>
            <GalleryInner />
        </Suspense>
    );
}
