import type { MetadataRoute } from "next";
import { getAllArticles } from "@/services/articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();
  return [
    {
      url: "https://andretreib.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://andretreib.com/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...articles.map((article) => ({
      url: `https://andretreib.com/blog/${article.id}`,
      lastModified: article.date,
      changeFrequency: "daily" as const,
      priority: 0.5,
      images: [article.thumbnail],
    })),
  ];
}
