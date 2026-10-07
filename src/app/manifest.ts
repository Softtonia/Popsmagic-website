import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Popsmagic Store",
    short_name: "Popsmagic",
    description: "Premium handcrafted popsicles and gourmet treats",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ff4785",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
