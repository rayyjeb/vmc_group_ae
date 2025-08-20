import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "images.pexels.com",
      "images.unsplash.com",
      "wallpapers.com",
      "c1.wallpaperflare.com",
      "images.ctfassets.net",
      "blogstudio.s3.theshoppad.net",
      "localhost", // Add localhost for development
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "localhost",
        port: "8000",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
