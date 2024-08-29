import { getAllArticles } from "@/services/articles";
import { ArticleCard } from "./components/article-card";

export const revalidate = 3600; // 1 hour

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
