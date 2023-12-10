/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'github.com',
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      's3-alpha-sig.figma.com',
    ],
  },
}

module.exports = nextConfig
