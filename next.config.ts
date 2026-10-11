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
      { source: "/home", destination: "/", permanent: true },
      { source: "/ada", destination: "/accessibility", permanent: true },
      { source: "/tos", destination: "/terms", permanent: true },
      { source: "/caconsumer", destination: "/ca-consumer", permanent: true },
      { source: "/costsreduced", destination: "/results", permanent: true },
      { source: "/performanceincreased", destination: "/results", permanent: true },
      { source: "/timesaved", destination: "/results", permanent: true },
      { source: "/industries/education-training-enablement", destination: "/industries/education-enablement", permanent: true },
      { source: "/industries/government-contractors", destination: "/industries/government-contractors-public-sector", permanent: true },
    ];
  },
};

export default nextConfig;
