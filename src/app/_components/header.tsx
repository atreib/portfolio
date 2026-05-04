import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="px-8 lg:px-6 h-14 flex items-center fixed w-full bg-gradient-to-b from-background to-transparent backdrop-blur-sm z-50">
      <Link
        href="/"
        className="items-center justify-center hidden sm:flex"
        prefetch={false}
      >
        <Image
          className="h-12 w-12 object-contain object-center"
          src="/icons/andre-treib-icon.png"
          width={100}
          height={100}
          alt="Andre Treib"
        />
        <span className="sr-only">Andre Treib</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#about"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#experience"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Experience
        </Link>
        <Link
          href="#portfolio"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Portfolio
        </Link>
        <Link
          href="#testimonials"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Testimonials
        </Link>
        <Link
          href="#contact"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
        <Link
          href="/blog"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={true}
        >
          Blog
        </Link>
      </nav>
    </header>
  );
}
