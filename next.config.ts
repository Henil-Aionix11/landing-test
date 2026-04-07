import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.medwriter.ai",
      },
      {
        protocol: "https",
        hostname: "app.medwriter.ai",
      },
    ],
  },
};

export default nextConfig;
