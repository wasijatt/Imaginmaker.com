/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  // Remove the spread operator for testing
  // ...nextConfig,
});
