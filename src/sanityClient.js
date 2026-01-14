import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "lvj6k2t7",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true // fast + safe
});
