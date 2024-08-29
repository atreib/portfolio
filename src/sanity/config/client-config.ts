import { ClientPerspective } from "next-sanity";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION as string,
  useCdn: process.env.SANITY_USE_CDN === "true",
  perspective: "published" as ClientPerspective,
};

export default config;
