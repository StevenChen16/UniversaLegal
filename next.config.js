/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/universalegal',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/universalegal/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig
