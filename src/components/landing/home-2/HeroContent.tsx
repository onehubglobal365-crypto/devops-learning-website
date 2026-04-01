'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TypingText from './TypingText';
import { Mail, Star, Maximize2, X, ArrowRight } from 'lucide-react';
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
    <>
      <div
        ref={ref}
        className="relative min-h-auto aspect-video md:h-[80vh] md:aspect-none w-full flex flex-col items-center justify-center py-4 md:py-0 overflow-hidden"
      >
      {/* Background Slideshow - Original Clarity */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-2000 ${currentImageIndex === idx ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image 
              src={img} 
              alt="" 
              fill 
              className="object-cover object-top sm:object-center" 
              priority={idx === 0} 
            />
          </div>
        ))}
      </div>

      {/* Hero CTA Button - Responsive Positioning with Premium Effect */}
      {!showForm && (
        <div className="absolute bottom-6 md:bottom-8 left-6 md:left-12 z-[999] w-auto flex md:block animate-in fade-in slide-in-from-bottom-4 duration-700">
          <button 
            onClick={() => setShowForm(true)}
            className="register-btn-premium active:scale-95 group transition-all"
          >
            <div className="register-btn-icon">
              <ArrowRight className="w-full h-full" />
            </div>
            <span>Register Now</span>
          </button>
        </div>
      )}

      </div>

      {/* WhatsApp Form Modal (Minimal Logic) */}
      {showForm && (
        <div 
          onClick={() => setShowForm(false)}
          className="fixed inset-0 z-[200000] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6"
        >
          <form 
            onClick={e => e.stopPropagation()}
            onSubmit={handleWhatsAppSubmit} 
            className="bg-white p-5 sm:p-8 rounded-[2rem] w-full max-w-lg shadow-[0_32px_64px_rgba(0,0,0,0.3)] space-y-4 relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Icon Button */}
            <button 
              type="button"
              onClick={() => setShowForm(false)}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-1">
              <h2 className="text-3xl font-bold text-[#083D77]">Quick Registration</h2>
              <p className="text-gray-500 font-medium">Join our next batch today!</p>
            </div>

            <div className="space-y-4">
              <input required type="text" placeholder="Full Name" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-400 font-medium" onChange={e => setFormData({...formData, name: e.target.value})} />
              <input required type="tel" placeholder="Mobile Number" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-400 font-medium" onChange={e => setFormData({...formData, mobile: e.target.value})} />
              <input required type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-400 font-medium" onChange={e => setFormData({...formData, email: e.target.value})} />
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="Location" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-400 font-medium" onChange={e => setFormData({...formData, location: e.target.value})} />
                <input required type="text" placeholder="Course" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-400 font-medium" onChange={e => setFormData({...formData, course: e.target.value})} />
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <button type="button" onClick={() => setShowForm(false)} className="flex-1 p-5 text-gray-400 font-bold hover:text-gray-600 transition-colors">Cancel</button>
              <button type="submit" className="flex-1 p-5 bg-green-500 text-white font-bold rounded-2xl shadow-xl shadow-green-200 hover:bg-green-600 active:scale-95 transition-all">Submit Now</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
