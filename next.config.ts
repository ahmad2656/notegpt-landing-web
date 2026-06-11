import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  reactStrictMode: false,
};

export default withNextVideo(nextConfig, { folder: "assets" });
