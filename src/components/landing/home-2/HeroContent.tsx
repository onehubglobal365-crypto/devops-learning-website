'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TypingText from './TypingText';
import { Mail, Star, Maximize2, X } from 'lucide-react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function HeroContent() {
  const { ref, isVisible, hasBeenVisible } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: false
  });
  const heroImages = [
    "https://res.cloudinary.com/dyuounp0c/image/upload/v1774955787/PHOTO_1-01.jpg_ygenaz.jpg",
    '/hero section/PHOTO 2-02-02.jpg.jpeg'

    // <img
    //     src="https://res.cloudinary.com/dyuounp0c/image/upload/v1774955787/PHOTO_1-01.jpg_ygenaz.jpg"
    //     alt="Cloudinary Image"
    //     style={{
    //       width: "100%",
    //       maxWidth: "720px",
    //       height: "auto",
    //       borderRadius: "10px",
    //       objectFit: "cover"
    //     }}
      // />
    // '/hero section/WhatsApp Image 2026-02-12 at 3.37.35 PM.jpeg',
    // '/hero section/WhatsApp Image 2026-02-12 at 3.37.36 PM (1).jpeg',
    // '/hero section/WhatsApp Image 2026-02-12 at 3.37.36 PM (2).jpeg',
    // '/hero section/WhatsApp Image 2026-02-12 at 3.37.36 PM.jpeg',
    // '/hero section/WhatsApp Image 2026-02-12 at 3.37.37 PM (1).jpeg',
    // '/hero section/WhatsApp Image 2026-02-12 at 3.37.37 PM.jpeg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', location: '', course: '' });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Name: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nLocation: ${formData.location}\nCourse: ${formData.course}`;
    const whatsappUrl = `https://wa.me/919059450707?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowForm(false);
  };

  return (
    <div
      ref={ref}
      className="relative min-h-[70dvh] md:min-h-[100dvh] w-full flex flex-col items-center justify-center pt-[calc(4rem+var(--space-2xl))] pb-[var(--space-xl)] overflow-hidden"
    >
      {/* Background Slideshow - Original Clarity */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-2000 ${currentImageIndex === idx ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image src={img} alt="" fill className="object-cover" priority={idx === 0} />
          </div>
        ))}
      </div>

      {/* Hero CTA Button - Responsive Positioning */}
      {!showForm && (
        <div className="absolute bottom-20 md:bottom-12 left-1/2 md:left-12 -translate-x-1/2 md:translate-x-0 z-[999] w-[90%] md:w-auto flex justify-center md:block">
          <button 
            onClick={() => setShowForm(true)}
            className="w-full md:w-auto px-8 md:px-12 py-4 md:py-6 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg md:text-2xl uppercase tracking-widest rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(249,115,22,0.4)] transition-all hover:scale-105 active:scale-95 border-b-4 border-orange-700 whitespace-nowrap"
          >
            Register Now
          </button>
        </div>
      )}

      {/* WhatsApp Form Modal (Minimal Logic) */}
      {showForm && (
        <div 
          onClick={() => setShowForm(false)}
          className="fixed inset-0 z-[110000] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
        >
          <form 
            onClick={e => e.stopPropagation()}
            onSubmit={handleWhatsAppSubmit} 
            className="bg-white p-8 rounded-3xl w-full max-w-md shadow-2xl space-y-4 relative animate-in zoom-in-95 duration-200"
          >
            {/* Close Icon Button */}
            <button 
              type="button"
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-black text-[#083D77] mb-4">Quick Registration</h2>
            <input required type="text" placeholder="Full Name" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" onChange={e => setFormData({...formData, name: e.target.value})} />
            <input required type="tel" placeholder="Mobile Number" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" onChange={e => setFormData({...formData, mobile: e.target.value})} />
            <input required type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" onChange={e => setFormData({...formData, email: e.target.value})} />
            <input required type="text" placeholder="Location" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" onChange={e => setFormData({...formData, location: e.target.value})} />
            <input required type="text" placeholder="Preferred Course" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" onChange={e => setFormData({...formData, course: e.target.value})} />
            
            <div className="flex gap-4 pt-4">
              <button type="button" onClick={() => setShowForm(false)} className="flex-1 p-4 text-gray-400 font-bold hover:text-gray-600">Cancel</button>
              <button type="submit" className="flex-1 p-4 bg-green-500 text-white font-bold rounded-xl shadow-lg shadow-green-200 hover:bg-green-600 transition-colors">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
