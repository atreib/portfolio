import { CodeIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Andre Treib's Two Cents | Engineering Blog",
  description:
    "Read my latest articles and thoughts on software development, design, and more.",
  authors: [
    {
      name: "Andre Treib",
      url: "https://andretreib.com",
    },
  ],
  openGraph: {
    images: ["/assets/andre-treib-lecturing-for-a-classroom.jpg"],
  },
  keywords: [
    "Andre Treib",
    "Software Development",
    "Design",
    "Blog",
    "Digital Product",
    "Software Engineering",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
  ],
  robots: {
    index: true,
    follow: true,
  },
  creator: "Andre Treib",
  publisher: "Andre Treib",
};

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-[100dvh] blog">
      <header className="bg-background border-b px-4 md:px-6 flex items-center h-14">
        <div className="flex items-center gap-2">
          <CodeIcon className="h-6 w-6" />
          <span className="font-medium">{`Andre Treib's Two Cents`}</span>
        </div>
        <nav className="ml-auto flex gap-4">
          <Link
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">{children}</div>
      </main>
      <footer className="bg-background border-t px-4 md:px-6 py-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-sm text-muted-foreground">
          &copy;{" "}
          {`${new Date().getFullYear()} Andre Treib's Two Cents. All rights reserved.`}
        </div>
        <nav className="flex gap-4 mt-4 lg:mt-0">
          <Link
            href="/#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  );
}
