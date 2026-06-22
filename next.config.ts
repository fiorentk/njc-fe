import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "staging.mahara.web.id",
    "api-staging.mahara.web.id",
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
