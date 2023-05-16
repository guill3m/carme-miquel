// @ts-check

const securityHeaders = [
  {
    source: '/:path*',
    headers: [
      {
        key: 'Permissions-Policy',
        value: 'camera=(), geolocation=(), microphone=()',
      },
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains; preload',
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'X-Frame-Options',
        value: 'DENY',
      },
    ],
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  experimental: {
    // typedRoutes: true,
  },
  async headers() {
    return [...securityHeaders]
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
}

module.exports = nextConfig
