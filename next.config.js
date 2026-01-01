const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Enable compression
  compress: true,

  // Strict mode  
  reactStrictMode: false,

  // Remove powered by header
  poweredByHeader: false,
};

module.exports = nextConfig;
