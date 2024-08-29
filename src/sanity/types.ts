import { PortableTextBlock } from "sanity";

export type SanityAuthor = {
  name: string;
  image: string;
  bio?: string;
  slug: {
    current: string;
  };
  _id?: number | string;
  _ref?: number | string;
};

export type SanityBlogPost = {
  _id: number;
  title: string;
  slug: any;
  metadata: string;
  body: PortableTextBlock[];
  mainImage: any;
  author: SanityAuthor;
  tags: string[];
  publishedAt: string;
};
