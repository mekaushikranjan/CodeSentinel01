import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  distDir: '.next',
  // Ensure trailing slashes are handled consistently
  trailingSlash: false,
  reactStrictMode: true,
  swcMinify: true
};

export default nextConfig;