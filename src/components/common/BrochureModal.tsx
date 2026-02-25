'use client';

import React from 'react';
import { X, Download, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle?: string;
  onContinue?: () => void; // Optional: continue to the original destination
}

export default function BrochureModal({ isOpen, onClose, courseTitle = 'Generic Course', onContinue }: BrochureModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100005] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-md shadow-2xl relative overflow-hidden text-center"
        >
          <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>

          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <FileText className="w-10 h-10 text-blue-600" />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">Download Brochure</h2>
          <p className="text-gray-600 mb-8">
            Get the comprehensive curriculum and career guide for <span className="font-semibold text-blue-600">{courseTitle}</span>.
          </p>

          <div className="flex flex-col gap-3">
             <a
                href="/brochures/course-brochure.pdf"
                download
                className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#083D77] to-cyan-600 hover:from-[#062a52] hover:to-cyan-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                onClick={(e) => {
                  e.stopPropagation();
                  // Optional: Close after a delay or let user decide
                }}
             >
                <Download className="w-5 h-5" />
                Download Now
             </a>

             {onContinue && (
               <button
                 onClick={onContinue}
                 className="text-sm font-semibold text-gray-400 hover:text-gray-600 mt-2 hover:underline"
               >
                 No thanks, proceed to course details →
               </button>
             )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
