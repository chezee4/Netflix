// next.config.js
const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.discordapp.com',
      'makshon-netflix-api-bucket.s3.eu-north-1.amazonaws.com',
    ],
  },
}

module.exports = withNextVideo(nextConfig, {
  provider: 'amazon-s3',

  providerConfig: {
    'amazon-s3': {
      accessKeyId: 'AKIA2UC3DSKSD4E75R3K',
      secretAccessKey: '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',
      region: 'eu-north-1',
      bucket: 'makshon-netflix-api-bucket',
      endpoint: 'https://s3.eu-north-1.amazonaws.com',
    },
  },
})
