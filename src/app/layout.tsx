import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Archivo } from "next/font/google";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const fontHeading = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Andre Treib | Software Engineer",
  description:
    "An experienced software engineer with a passion for building digital products.",
  keywords: [
    "Andre Treib",
    "Andre Treib Portfolio",
    "Andre Treib Website",
    "Software Engineer",
    "Software Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "Digital product",
    "Web development",
    "Web design",
    "UI/UX",
    "Responsive design",
    "Front-end development",
    "Back-end development",
    "Full-stack development",
    "API development",
    "Database design",
  ],
  authors: [{ name: "Andre Treib" }],
  creator: "Andre Treib",
  publisher: "Andre Treib",
  category: "portfolio",
  robots: "index, follow",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
