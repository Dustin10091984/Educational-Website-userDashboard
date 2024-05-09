// next.config.js


import withPWA from 'next-pwa'

// PWA Configuration Options
const pwaConfig = {
  dest: 'public', // Specifies the destination directory for the generated PWA files
  register: true, // Enables service worker registration for offline support and other PWA features
  skipWaiting: true, // Causes the new service worker to take control immediately, bypassing the waiting phase
  disable: process.env.NODE_ENV === 'development', // Disables PWA functionality in development mode to avoid caching issues
}

// Basic Next.js Configuration
const nextConfig = {
  reactStrictMode: true, // Enables React Strict Mode
  // Add any other Next.js configuration options here
  
}

// Combine PWA and Next.js configurations
const combinedConfig = withPWA(pwaConfig)(nextConfig)

export default combinedConfig
