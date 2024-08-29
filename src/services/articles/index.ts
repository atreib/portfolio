import { Article, articleSchema } from "./types";

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const articles: Array<Article> = [
  {
    id: "1",
    title: "My first article",
    content: "This is the content of my first article",
    thumbnail: "/assets/andre-treib-lecturing-for-a-classroom.jpg",
    author: {
      name: "Andre Treib",
      avatar: "/placeholder.png",
    },
    date: new Date(),
  },
  {
    id: "2",
    title: "My second article",
    content: "This is the content of my second article",
    thumbnail: "/assets/andre-treib-lecturing-for-a-classroom.jpg",
    author: {
      name: "Andre Treib",
      avatar: "/placeholder.png",
    },
    date: new Date(),
  },
  {
    id: "3",
    title: "My third article",
    content: "This is the content of my third article",
    thumbnail: "/assets/andre-treib-lecturing-for-a-classroom.jpg",
    author: {
      name: "Andre Treib",
      avatar: "/placeholder.png",
    },
    date: new Date(),
  },
  {
    id: "4",
    title: "My fourth article",
    content: "This is the content of my fourth article",
    thumbnail: "/assets/andre-treib-lecturing-for-a-classroom.jpg",
    author: {
      name: "Andre Treib",
      avatar: "/placeholder.png",
    },
    date: new Date(),
  },
  {
    id: "5",
    title: "My fifth article",
    content: "This is the content of my fifth article",
    thumbnail: "/assets/andre-treib-lecturing-for-a-classroom.jpg",
    author: {
      name: "Andre Treib",
      avatar: "/placeholder.png",
    },
    date: new Date(),
  },
  {
    id: "6",
    title: "My sixth article",
    content: "This is the content of my sixth article",
    thumbnail: "/assets/andre-treib-lecturing-for-a-classroom.jpg",
    author: {
      name: "Andre Treib",
      avatar: "/placeholder.png",
    },
    date: new Date(),
  },
  {
    id: "7",
    title: "My seventh article",
    content: "This is the content of my seventh article",
    thumbnail: "/assets/andre-treib-lecturing-for-a-classroom.jpg",
    author: {
      name: "Andre Treib",
      avatar: "/placeholder.png",
    },
    date: new Date(),
  },
];

async function getAllArticles(): Promise<Array<Article>> {
  await sleep(1000);
  return articleSchema.array().parse(articles);
}

async function getArticleById(id: string): Promise<Article | null> {
  await sleep(1000);
  const article = articles.find((article) => article.id === id);
  if (!article) return null;
  return articleSchema.parse(article);
}

export { getAllArticles, getArticleById };
