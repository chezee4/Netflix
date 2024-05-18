// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.discordapp.com',
      'makshon-netflix-api-bucket.s3.eu-north-1.amazonaws.com',
    ],
  },
}

module.exports = nextConfig
