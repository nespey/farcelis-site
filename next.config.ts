import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/timeleak",
        destination: "/time-leak-test",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
