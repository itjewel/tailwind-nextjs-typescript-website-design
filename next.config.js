/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['rb.gy', 'image.tmdb.org','cdn.pixabay.com','localhost'],
  },
}

module.exports = nextConfig
