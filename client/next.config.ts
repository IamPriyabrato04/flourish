import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/color/**", // 👈 match your google-logo path
      },
    ],
  },
};

export default nextConfig;
