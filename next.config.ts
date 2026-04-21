import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    turbopack: {
      root: process.cwd(),
    },
  },
};

export default nextConfig;
