import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Farcelis AI Consulting",
    short_name: "Farcelis",
    description:
      "Farcelis is an AI operational systems firm focused on workflow architecture, execution systems, and flagship Control Layer implementations.",
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
