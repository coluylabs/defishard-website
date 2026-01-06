/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Skip image optimization for faster builds
  images: {
    unoptimized: true,
  },
  
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  
  // Optimize for production
  swcMinify: true,
  
  // Exclude large files from webpack processing
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      type: 'asset/resource',
    })
    return config
  },
}

module.exports = nextConfig
