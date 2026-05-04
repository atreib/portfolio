import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center border-t px-8 lg:px-6">
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Andre Treib. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Peak human potential
        </Link>
      </nav>
    </footer>
  );
}
