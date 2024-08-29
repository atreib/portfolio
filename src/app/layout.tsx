import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Archivo } from "next/font/google";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  metadataBase: new URL("https://andretreib.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andretreib.com",
    siteName: "Andre Treib | Software Engineer",
    images: [
      {
        url: "/assets/software-developer-building-digital-product.png",
        width: 1200,
        height: 630,
        alt: "Andre Treib | Software Engineer",
      },
    ],
  },
  applicationName: "Andre Treib's Two Cents",
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
  robots: {
    index: true,
    follow: true,
  },
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
        <SpeedInsights />
      </body>
    </html>
  );
}
