'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock } from 'lucide-react';

export default function ComingSoon() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20 shadow-2xl"
          >
            <Clock className="w-12 h-12 text-blue-400" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 drop-shadow-sm">
            Coming Soon
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 font-light mb-12"
          >
            This content will be available soon
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.back()}
            className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg hover:shadow-blue-500/20"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-0 right-0 text-center text-gray-500 text-sm"
        >
          DevOps Learning Platform &copy; {new Date().getFullYear()}
        </motion.div>
      </div>
    </div>
  );
}
