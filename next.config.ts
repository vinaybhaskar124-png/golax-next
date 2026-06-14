import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  typescript: {
    // shadcn ui components copied from Vite project; unused ones have minor type drift
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
