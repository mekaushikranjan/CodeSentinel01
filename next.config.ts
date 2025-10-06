import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Ensure Turbopack (and Vercel) resolves the project root correctly when
	// multiple lockfiles or workspace layouts exist.
	turbopack: {
		root: "./",
	},
};

export default nextConfig;
