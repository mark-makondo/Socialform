/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

/**
 * @description
 *  check @https://www.npmjs.com/package/@next/bundle-analyzer to check
 *  run in terminal: ANALYZE=true npm run build
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
})

module.exports = withBundleAnalyzer(nextConfig);