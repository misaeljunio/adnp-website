/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/adnp-website',
  assetPrefix: '/adnp-website/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
