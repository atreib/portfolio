import { getAllArticles } from "@/services/articles";
import { ArticleCard } from "./components/article-card";
import { BLOG_REVALIDATE_TIME } from "@/lib/constants";

export const revalidate = BLOG_REVALIDATE_TIME;

export default async function Page() {
  const articles = await getAllArticles();

  return (
    <div className="grid gap-8 md:gap-12">
      <div className="grid gap-4 md:gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
