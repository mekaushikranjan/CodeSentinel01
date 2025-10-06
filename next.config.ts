import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  distDir: '.next',
  turbopack: {
    root: "./",
  },
  // Ensure trailing slashes are handled consistently
  trailingSlash: false,
  // Ensure we're not using experimental features that might cause issues
  experimental: {
    serverActions: false,
  }
};

export default nextConfig;