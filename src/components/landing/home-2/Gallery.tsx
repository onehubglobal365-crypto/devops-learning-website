'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Maximize2 } from 'lucide-react';
const selectedMainImages = [
    "/website-pics/IMG20260208213107.jpg",
    "/website-pics/IMG20260208213343.jpg",
    "/website-pics/IMG_20251222_141442204_HDR.jpg",
    "/website-pics/IMG_20251222_141721729_HDR.jpg",
    "/website-pics/IMG_20251222_162640649_HDR.jpg",
    "/website-pics/IMG_20251223_131932584_HDR.jpg",
    "/website-pics/IMG20251222105938.jpg",
    "/website-pics/IMG20251222163132.jpg",
    "/website-pics/IMG20251222163334.jpg",
    "/website-pics/IMG_20260123_133300356_HDR.jpg",
    "/website-pics/IMG_20260122_114551540_HDR_PORTRAIT.jpg",
    "/website-pics/IMG20260122162123.jpg"
];

const galleryImages = [
    "/website-pics/IMG20251222105938.jpg",
    "/website-pics/IMG20251222105938_Kadpa_District.jpg",
    "/website-pics/IMG20251222105939.jpg",
    "/website-pics/IMG20251222105939_Kadpa_District.jpg",
    "/website-pics/IMG20251222110540.jpg",
    "/website-pics/IMG20251222110540_Kadpa_District.jpg",
    "/website-pics/IMG20251222110544.jpg",
    "/website-pics/IMG20251222110544_Kadpa_District.jpg",
    "/website-pics/IMG20251222111741.jpg",
    "/website-pics/IMG20251222111741_Kadpa_District.jpg",
    "/website-pics/IMG20251222111741_Womens_Degree_College.jpg",
    "/website-pics/IMG20251222111754.jpg",
    "/website-pics/IMG20251222111754_Kadpa_District.jpg",
    "/website-pics/IMG20251222112207.jpg",
    "/website-pics/IMG20251222112207_Kadpa_District.jpg",
    "/website-pics/IMG20251222112212.jpg",
    "/website-pics/IMG20251222112212_Womens_Degree_College.jpg",
    "/website-pics/IMG20251222114808.jpg",
    "/website-pics/IMG20251222114815.jpg",
    "/website-pics/IMG20251222114816.jpg",
    "/website-pics/IMG20251222114816_01.jpg",
    "/website-pics/IMG20251222121438.jpg",
    "/website-pics/IMG20251222121440.jpg",
    "/website-pics/IMG20251222163132.jpg",
    "/website-pics/IMG20251222163313.jpg",
    "/website-pics/IMG20251222163313_01.jpg",
    "/website-pics/IMG20251222163314.jpg",
    "/website-pics/IMG20251222163315.jpg",
    "/website-pics/IMG20251222163332.jpg",
    "/website-pics/IMG20251222163334.jpg",
    "/website-pics/IMG20251223123242.jpg",
    "/website-pics/IMG20260121105704_01.jpg",
    "/website-pics/IMG20260121105740_01.jpg",
    "/website-pics/IMG20260121105759.jpg",
    "/website-pics/IMG20260121110124.jpg",
    "/website-pics/IMG20260121111229.jpg",
    "/website-pics/IMG20260121111343_01.jpg",
    "/website-pics/IMG20260121114517_01.jpg",
    "/website-pics/IMG20260121114536_01.jpg",
    "/website-pics/IMG20260121115238.jpg",
    "/website-pics/IMG20260121115507.jpg",
    "/website-pics/IMG20260121115512.jpg",
    "/website-pics/IMG20260121115537.jpg",
    "/website-pics/IMG20260121115544.jpg",
    "/website-pics/IMG20260121115546.jpg",
    "/website-pics/IMG20260121124932.jpg",
    "/website-pics/IMG20260121124938.jpg",
    "/website-pics/IMG20260121125004_01.jpg",
    "/website-pics/IMG20260121125005_01.jpg",
    "/website-pics/IMG20260121125009.jpg",
    "/website-pics/IMG20260121132509.jpg",
    "/website-pics/IMG20260121132512.jpg",
    "/website-pics/IMG20260121135357.jpg",
    "/website-pics/IMG20260121135402.jpg",
    "/website-pics/IMG20260121135403.jpg",
    "/website-pics/IMG20260121152037.jpg",
    "/website-pics/IMG20260121152044.jpg",
    "/website-pics/IMG20260121152836.jpg",
    "/website-pics/IMG20260121152906.jpg",
    "/website-pics/IMG20260121153257.jpg",
    "/website-pics/IMG20260121153259.jpg",
    "/website-pics/IMG20260121153313.jpg",
    "/website-pics/IMG20260121153337.jpg",
    "/website-pics/IMG20260121153510.jpg",
    "/website-pics/IMG20260121153517.jpg",
    "/website-pics/IMG20260122130143.jpg",
    "/website-pics/IMG20260122130150.jpg",
    "/website-pics/IMG20260122130153.jpg",
    "/website-pics/IMG20260122160519.jpg",
    "/website-pics/IMG20260122160546.jpg",
    "/website-pics/IMG20260122160610.jpg",
    "/website-pics/IMG20260122160622.jpg",
    "/website-pics/IMG20260122160633.jpg",
    "/website-pics/IMG20260122160643.jpg",
    "/website-pics/IMG20260122160657.jpg",
    "/website-pics/IMG20260122160707.jpg",
    "/website-pics/IMG20260122160719.jpg",
    "/website-pics/IMG20260122160736.jpg",
    "/website-pics/IMG20260122160746.jpg",
    "/website-pics/IMG20260122160759.jpg",
    "/website-pics/IMG20260122160801.jpg",
    "/website-pics/IMG20260122160809.jpg",
    "/website-pics/IMG20260122160820.jpg",
    "/website-pics/IMG20260122160829.jpg",
    "/website-pics/IMG20260122160846.jpg",
    "/website-pics/IMG20260122160901.jpg",
    "/website-pics/IMG20260122160914.jpg",
    "/website-pics/IMG20260122160925.jpg",
    "/website-pics/IMG20260122160947.jpg",
    "/website-pics/IMG20260122161003.jpg",
    "/website-pics/IMG20260122161015.jpg",
    "/website-pics/IMG20260122161026.jpg",
    "/website-pics/IMG20260122161028.jpg",
    "/website-pics/IMG20260122161035.jpg",
    "/website-pics/IMG20260122161043.jpg",
    "/website-pics/IMG20260122161048.jpg",
    "/website-pics/IMG20260122161057.jpg",
    "/website-pics/IMG20260122161107.jpg",
    "/website-pics/IMG20260122161114.jpg",
    "/website-pics/IMG20260122161129.jpg",
    "/website-pics/IMG20260122161139.jpg",
    "/website-pics/IMG20260122161141.jpg",
    "/website-pics/IMG20260122161151.jpg",
    "/website-pics/IMG20260122161201.jpg",
    "/website-pics/IMG20260122161202.jpg",
    "/website-pics/IMG20260122161212.jpg",
    "/website-pics/IMG20260122161224.jpg",
    "/website-pics/IMG20260122161231.jpg",
    "/website-pics/IMG20260122161250.jpg",
    "/website-pics/IMG20260122161257.jpg",
    "/website-pics/IMG20260122161311.jpg",
    "/website-pics/IMG20260122161323.jpg",
    "/website-pics/IMG20260122161346.jpg",
    "/website-pics/IMG20260122161359.jpg",
    "/website-pics/IMG20260122161632.jpg",
    "/website-pics/IMG20260122161633.jpg",
    "/website-pics/IMG20260122161635.jpg",
    "/website-pics/IMG20260122161704.jpg",
    "/website-pics/IMG20260122161706.jpg",
    "/website-pics/IMG20260122161708.jpg",
    "/website-pics/IMG20260122161710.jpg",
    "/website-pics/IMG20260122161730.jpg",
    "/website-pics/IMG20260122161732.jpg",
    "/website-pics/IMG20260122161734.jpg",
    "/website-pics/IMG20260122161737.jpg",
    "/website-pics/IMG20260122162123.jpg",
    "/website-pics/IMG20260122162125.jpg",
    "/website-pics/IMG20260122162128.jpg",
    "/website-pics/IMG20260122162135.jpg",
    "/website-pics/IMG20260122162136.jpg",
    "/website-pics/IMG20260208213107.jpg",
    "/website-pics/IMG20260208213107_IQ_Technologies_New_Branch.jpg",
    "/website-pics/IMG20260208213343.jpg",
    "/website-pics/IMG20260208213343_IQ_Technologies_New_Branch.jpg",
    "/website-pics/IMG20260208213345.jpg",
    "/website-pics/IMG20260208213345_IQ_Technologies_New_Branch.jpg",
    "/website-pics/IMG20260208213348.jpg",
    "/website-pics/IMG20260208213348_IQ_Technologies_New_Branch.jpg",
    "/website-pics/IMG_20251105_122900743_HDR.jpg",
    "/website-pics/IMG_20251105_122900743_HDR_Website_Pics.jpg",
    "/website-pics/IMG_20251222_123646296_HDR.jpg",
    "/website-pics/IMG_20251222_123655377_HDR.jpg",
    "/website-pics/IMG_20251222_123656734_HDR.jpg",
    "/website-pics/IMG_20251222_124836363_HDR.jpg",
    "/website-pics/IMG_20251222_124839540_HDR.jpg",
    "/website-pics/IMG_20251222_141439795_HDR.jpg",
    "/website-pics/IMG_20251222_141441153_HDR.jpg",
    "/website-pics/IMG_20251222_141442204_HDR.jpg",
    "/website-pics/IMG_20251222_141703487_HDR.jpg",
    "/website-pics/IMG_20251222_141705274_HDR.jpg",
    "/website-pics/IMG_20251222_141721729_HDR.jpg",
    "/website-pics/IMG_20251222_141722881_HDR.jpg",
    "/website-pics/IMG_20251222_141747464_HDR.jpg",
    "/website-pics/IMG_20251222_141748880_HDR.jpg",
    "/website-pics/IMG_20251222_141752200_HDR.jpg",
    "/website-pics/IMG_20251222_152622136_HDR.jpg",
    "/website-pics/IMG_20251222_152623504_HDR.jpg",
    "/website-pics/IMG_20251222_162640649_HDR.jpg",
    "/website-pics/IMG_20251222_163405239_HDR.jpg",
    "/website-pics/IMG_20251222_163406669_HDR.jpg",
    "/website-pics/IMG_20251222_163408034_HDR.jpg",
    "/website-pics/IMG_20251222_163450148_HDR.jpg",
    "/website-pics/IMG_20251222_163451660_HDR.jpg",
    "/website-pics/IMG_20251223_130500222_HDR.jpg",
    "/website-pics/IMG_20251223_131929025_HDR.jpg",
    "/website-pics/IMG_20251223_131930326_HDR.jpg",
    "/website-pics/IMG_20251223_131932584_HDR.jpg",
    "/website-pics/IMG_20251223_131934048_HDR.jpg",
    "/website-pics/IMG_20251223_131937053_HDR.jpg",
    "/website-pics/IMG_20251224_113950568_HDR.jpg",
    "/website-pics/IMG_20251224_114057338_HDR.jpg",
    "/website-pics/IMG_20251224_114059054_HDR.jpg",
    "/website-pics/IMG_20251224_114101426_HDR.jpg",
    "/website-pics/IMG_20260103_111042835_HDR.jpg",
    "/website-pics/IMG_20260103_111046066.jpg",
    "/website-pics/IMG_20260103_111450526_HDR.jpg",
    "/website-pics/IMG_20260121_105335152_HDR.jpg",
    "/website-pics/IMG_20260121_105341113_HDR.jpg",
    "/website-pics/IMG_20260121_105535034_HDR.jpg",
    "/website-pics/IMG_20260121_105536433_HDR.jpg",
    "/website-pics/IMG_20260121_105537523_HDR.jpg",
    "/website-pics/IMG_20260121_105605379_HDR.jpg",
    "/website-pics/IMG_20260121_105609327_HDR.jpg",
    "/website-pics/IMG_20260121_111028673_HDR.jpg",
    "/website-pics/IMG_20260121_111029990_HDR.jpg",
    "/website-pics/IMG_20260121_112022943_HDR.jpg",
    "/website-pics/IMG_20260121_112023653_HDR.jpg",
    "/website-pics/IMG_20260121_112024942_HDR.jpg",
    "/website-pics/IMG_20260121_114721154_HDR.jpg",
    "/website-pics/IMG_20260121_115750229_HDR.jpg",
    "/website-pics/IMG_20260121_115752567_HDR.jpg",
    "/website-pics/IMG_20260121_115754149_HDR.jpg",
    "/website-pics/IMG_20260121_115758190_HDR.jpg",
    "/website-pics/IMG_20260121_122138686_HDR.jpg",
    "/website-pics/IMG_20260121_124248421_HDR.jpg",
    "/website-pics/IMG_20260121_124253171_HDR.jpg",
    "/website-pics/IMG_20260121_135405025_HDR.jpg",
    "/website-pics/IMG_20260121_135407152_HDR.jpg",
    "/website-pics/IMG_20260121_135407907_HDR.jpg",
    "/website-pics/IMG_20260121_151829240_HDR.jpg",
    "/website-pics/IMG_20260121_151838403_HDR.jpg",
    "/website-pics/IMG_20260122_114106466_HDR.jpg",
    "/website-pics/IMG_20260122_114107627_HDR.jpg",
    "/website-pics/IMG_20260122_114121255_HDR.jpg",
    "/website-pics/IMG_20260122_114122333_HDR.jpg",
    "/website-pics/IMG_20260122_114436675_HDR.jpg",
    "/website-pics/IMG_20260122_114551540_HDR_PORTRAIT.jpg",
    "/website-pics/IMG_20260122_114555069_HDR.jpg",
    "/website-pics/IMG_20260122_114555880.jpg",
    "/website-pics/IMG_20260122_121556529_HDR.jpg",
    "/website-pics/IMG_20260122_121600395_HDR.jpg",
    "/website-pics/IMG_20260122_121601492_HDR.jpg",
    "/website-pics/IMG_20260122_122303766.jpg",
    "/website-pics/IMG_20260122_145537458_HDR.jpg",
    "/website-pics/IMG_20260122_151006931_HDR.jpg",
    "/website-pics/IMG_20260122_160332822_HDR.jpg",
    "/website-pics/IMG_20260122_160338973_HDR.jpg",
    "/website-pics/IMG_20260122_160339805_HDR.jpg",
    "/website-pics/IMG_20260122_160450312_HDR.jpg",
    "/website-pics/IMG_20260122_160452473_HDR.jpg",
    "/website-pics/IMG_20260123_133300356_HDR.jpg",
    "/website-pics/IMG_20260123_133302341_HDR.jpg"
];

// Random subtle rotations for the Polaroid grid
const rotations = [
    '-3deg', '2deg', '-4deg', '3deg', '-2deg', '4deg',
    '3deg', '-4deg', '2deg', '-3deg', '4deg', '-2deg'
];

const Gallery = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (src: string) => {
        setSelectedImage(src);
    };

    return (
        <div className="py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section - Refined & Professional */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-6 border-b border-gray-200 pb-6">
                    <div className="max-w-2xl">
                        <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-2 block">Visual Excellence</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">Our Campus & Infrastructure</h2>
                        <p className="text-gray-600 text-base">A glimpse into the state-of-the-art environment where innovation meets learning.</p>
                    </div>
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg text-sm"
                    >
                        <span>Explore Full Gallery</span>
                        <Maximize2 className="w-4 h-4" />
                    </button>
                </div>

                {/* Unified 7x3 Grid */}
                {/* Featured Section (New Container) */}
                <div className="bg-gray-50 rounded-[2.5rem] p-6 mb-8 border border-gray-200 shadow-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            "/website-pics/IMG20260208213107.jpg",
                            "/website-pics/IMG_20251222_141721729_HDR.jpg",
                            "/website-pics/IMG_20251222_162640649_HDR.jpg",
                            "/website-pics/IMG_20251222_124839540_HDR.jpg",
                            "/website-pics/IMG20251222163132.jpg",
                            "/website-pics/IMG_20260121_135407907_HDR.jpg"
                        ].map((src, index) => (
                            <div
                                key={`featured-${index}`}
                                className="relative group aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-sm bg-white border border-gray-100"
                                onClick={() => handleImageClick(src)}
                            >
                                <Image
                                    src={src}
                                    alt={`Featured highlight ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-7 gap-2 md:gap-3">
                    {[
                        "/website-pics/IMG20260208213107.jpg",
                        "/website-pics/IMG20260208213343.jpg",
                        "/website-pics/IMG_20251222_141442204_HDR.jpg",
                        "/website-pics/IMG_20251222_141721729_HDR.jpg",
                        "/website-pics/IMG_20251222_162640649_HDR.jpg",
                        "/website-pics/IMG_20251223_131932584_HDR.jpg",
                        "/website-pics/IMG20251222105938.jpg",
                        "/website-pics/IMG20251222163132.jpg",
                        "/website-pics/IMG20251222163334.jpg",
                        "/website-pics/IMG_20260123_133300356_HDR.jpg",
                        "/website-pics/IMG_20260122_114551540_HDR_PORTRAIT.jpg",
                        "/website-pics/IMG20260122162123.jpg",
                        "/website-pics/IMG20260121115544.jpg",
                        "/website-pics/IMG20260121152906.jpg",
                        "/website-pics/IMG_20251222_124839540_HDR.jpg",
                        "/website-pics/IMG_20251222_152623504_HDR.jpg",
                        "/website-pics/IMG_20251222_163406669_HDR.jpg",
                        "/website-pics/IMG_20260121_111029990_HDR.jpg",
                        "/website-pics/IMG_20260121_115754149_HDR.jpg",
                        "/website-pics/IMG_20260121_135407907_HDR.jpg",
                        "/website-pics/IMG_20260122_160338973_HDR.jpg"
                    ].map((src, index) => {
                        return (
                            <div
                                key={index}
                                className="relative group aspect-square overflow-hidden rounded-xl cursor-pointer shadow-lg bg-gray-50 border border-gray-200"
                                onClick={() => handleImageClick(src)}
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery photo ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                                />
                                {/* Subtle Border Highlight */}
                                <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/50 transition-colors duration-300 rounded-xl pointer-events-none"></div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Explore All Modal (Grid View) */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[#000010]/95 backdrop-blur-xl" onClick={() => setShowModal(false)}></div>

                    <div className="bg-[#000030]/80 w-full max-w-7xl h-[92vh] rounded-[2.5rem] overflow-hidden relative z-10 border border-white/10 shadow-[0_0_60px_rgba(0,0,100,0.6)] flex flex-col scale-in">
                        <div className="px-10 py-8 border-b border-white/10 flex justify-between items-center bg-white/5 backdrop-blur-md">
                            <h3 className="text-3xl font-bold text-white tracking-tight">Full Gallery Collection</h3>
                            <button onClick={() => setShowModal(false)} className="p-3.5 bg-white/10 hover:bg-red-500/80 text-white rounded-2xl transition-all duration-300">
                                <X className="w-7 h-7" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {galleryImages.map((src, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-2 pb-8 cursor-pointer shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-2 border border-gray-50"
                                        onClick={() => handleImageClick(src)}
                                    >
                                        <div className="aspect-square relative overflow-hidden bg-gray-50">
                                            <Image src={src} alt={`Full item ${index + 1}`} fill className="object-cover" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Lightbox / Single Image Preview */}
            {selectedImage && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
                    <div className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <div className="bg-white p-3 pb-16 md:p-5 md:pb-24 shadow-2xl animate-zoom-in ring-1 ring-black/10">
                            <Image src={selectedImage} alt="Preview" width={1000} height={1000} className="object-contain max-h-[70vh] w-auto" />
                        </div>
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-[-60px] right-0 md:right-[-10px] p-2.5 bg-white/15 hover:bg-white/25 text-white rounded-full transition-all border border-white/20 backdrop-blur-md"
                        >
                            <X className="w-8 h-8" />
                        </button>
                    </div>
                </div>
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

export default Gallery;
