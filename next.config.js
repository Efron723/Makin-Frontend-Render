/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
      },
    ],
    unoptimized: true,
  },
  output: 'export', // ✅ 開啟靜態導出
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://makin-backend.vercel.app/:path*',
      },
    ]
  },
}

module.exports = nextConfig
