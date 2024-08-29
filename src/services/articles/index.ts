import { SanityBlogPost } from "@/sanity/types";
import { Article, articleSchema } from "./types";
import {
  getPostBySlugFromSanity,
  getPostsFromSanity,
  imageBuilder,
} from "@/sanity/sanity-utils";
import { z } from "zod";

function mapSanityToDomain(post: SanityBlogPost): Article {
  return {
    id: post.slug.current,
    title: post.title,
    content: post.body,
    thumbnail: imageBuilder(post.mainImage).url(),
    author: {
      name: post.author.name,
      avatar: imageBuilder(post.author.image).url(),
    },
    date: z.coerce.date().parse(post.publishedAt),
  };
}

async function getAllArticles(): Promise<Array<Article>> {
  const posts = await getPostsFromSanity();
  return articleSchema
    .array()
    .parse(posts.map((post) => mapSanityToDomain(post)));
}

async function getArticleById(id: string): Promise<Article | null> {
  const post = await getPostBySlugFromSanity(id);
  if (!post) return null;
  return articleSchema.parse(mapSanityToDomain(post));
}

export { getAllArticles, getArticleById };
