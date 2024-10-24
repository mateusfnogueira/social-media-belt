/** @type {import('next').NextConfig} */
const nextIntl = require('next-intl/plugin')()
const nextConfig = nextIntl({
  images: {
    domains: []
  }
})

module.exports = nextConfig
