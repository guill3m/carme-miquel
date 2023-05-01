/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
