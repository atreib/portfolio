import ImageUrlBuilder from "@sanity/image-url";
import { createClient, type QueryParams } from "next-sanity";
import clientConfig from "./config/client-config";
import { postQuery, postQueryBySlug } from "./sanity-query";
import { SanityBlogPost } from "./types";
import { BLOG_REVALIDATE_TIME } from "@/lib/constants";

export const client = createClient(clientConfig);

export function imageBuilder(source: string) {
  return ImageUrlBuilder(clientConfig).image(source);
}

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    next: {
      revalidate: BLOG_REVALIDATE_TIME,
      tags,
    },
  });
}

export const getPostsFromSanity = async () => {
  return sanityFetch<SanityBlogPost[]>({
    query: postQuery,
    qParams: {},
    tags: ["post", "author", "category"],
  });
};

export const getPostBySlugFromSanity = async (slug: string) => {
  return sanityFetch<SanityBlogPost>({
    query: postQueryBySlug,
    qParams: { slug },
    tags: ["post", "author", "category"],
  });
};
