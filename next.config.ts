import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/weather-dashboard",
  assetPrefix: "/weather-dashboard/",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;