/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['v0.blob.com'], // Add any external image domains you're using
    unoptimized: true,
  },
  // For containerized deployments like Heroku
  output: 'standalone',
  // Fix npm install issues in CI/CD environments
  experimental: {
    externalDir: true,
  },
};

export default nextConfig;
