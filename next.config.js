/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const path = require('path')

const nextConfig = {
    reactStrictMode: true,
  swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
}

module.exports = withContentlayer(nextConfig)
