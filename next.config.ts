import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 90],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
