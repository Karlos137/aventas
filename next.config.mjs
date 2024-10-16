import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.resolve.alias.canvas = false

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aventas.fra1.digitaloceanspaces.com',
      },
      {
        protocol: 'https',
        hostname: 'aventas.fra1.digitaloceanspaces.com',
      },
    ],
  },
}

export default withNextIntl(nextConfig)
