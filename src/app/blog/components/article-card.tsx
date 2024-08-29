import { Article } from "@/services/articles/types";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.id}`}
      className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 md:gap-6 group"
      prefetch={false}
    >
      <div className="aspect-video overflow-hidden rounded-lg">
        <Image
          src={article.thumbnail}
          width={480}
          height={320}
          alt={article.title}
          className="object-cover object-center aspect-square"
        />
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-bold tracking-tight group-hover:underline">
          {article.title}
        </h2>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Avatar className="w-8 h-8 border">
            <AvatarImage
              src={article.author.avatar}
              alt={article.author.name}
            />
            <AvatarFallback>
              {article.author.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span>{article.author.name}</span>
          <span>·</span>
          <span>{formatDate(article.date)}</span>
        </div>
      </div>
    </Link>
  );
}

export { ArticleCard };
