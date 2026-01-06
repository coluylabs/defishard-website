/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Skip image optimization for faster builds
  images: {
    unoptimized: true,
  },
  
  // Reduce build output size
  output: 'standalone',
  
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  
  // Optimize for production
  swcMinify: true,
  
  // Ignore large files during build
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|apk|zip)$/,
      type: 'asset/resource',
    })
    return config
  },
}

module.exports = nextConfig
