import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**',
      },
    ],
  },
  // Environment variables for the integrated setup
  env: {
    NEXTAUTH_URL: process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001'
      : 'https://www.ohg365.com',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    JWT_SECRET: process.env.JWT_SECRET,
    MONGO_URI: process.env.MONGO_URI,
    // Use integrated backend instead of external Railway
    JOBCY_BACKEND_URL: process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001'
      : 'https://www.ohg365.com',
    JOBCY_API_URL: process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001/api/jobcy-backend'
      : 'https://www.ohg365.com/api/jobcy-backend',
    // Socket.io is disabled - using REST API only
    // NEXT_PUBLIC_SOCKET_URL: undefined, // No Socket.io server available
  },
  // Rewrites for integrated Jobcy backend
  async rewrites() {
    return [
      {
        source: '/api/jobcy/:path*',
        destination: '/api/jobcy/:path*',
      },
      {
        source: '/jobcy/api/:path*',
        destination: '/api/jobcy/:path*',
      },
    ];
  },
};

export default nextConfig;
