/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  experimental: {
    typedRoutes: true,
  },
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
