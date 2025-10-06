import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicit Turbopack root helps when multiple lockfiles exist on the system
  // and prevents Next from inferring the wrong workspace root during build.
  turbopack: {
    root: "./",
  },
};

export default nextConfig;
