/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/ThiruDigitalResume',
  assetPrefix: '/ThiruDigitalResume/',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
}

module.exports = nextConfig 