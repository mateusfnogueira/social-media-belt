/** @type {import('next').NextConfig} */
const nextIntl = require('next-intl/plugin')()

const nextConfig = nextIntl({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  typescript: {
    ignoreBuildErrors: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true
          }
        }
      ]
    })
    return config
  }
})

module.exports = nextConfig
