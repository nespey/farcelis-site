import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Farcelis | Control Layer System",
    short_name: "Farcelis",
    description:
      "Farcelis builds AI-powered Control Layers that organize workflows, data, and decisions into one structured system.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1ea",
    theme_color: "#111827",
    icons: [
      {
        src: "/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icons/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

