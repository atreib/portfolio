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
    siteName: "Andre Treib | AI-native Product Engineer",
    images: [
      {
        url: "/assets/software-developer-building-digital-product.png",
        width: 1200,
        height: 630,
        alt: "Andre Treib | AI-native Product Engineer",
      },
    ],
  },
  applicationName: "Andre Treib",
  title: "Andre Treib | AI-native Product Engineer",
  description:
    "Senior full-stack engineer, 11 years shipping end-to-end. RAG pipelines, agentic workflows over event-driven systems, and a custom MCP server wired to a tool-using AI agent.",
  keywords: [
    "Andre Treib",
    "AI-native Product Engineer",
    "AI-first Engineer",
    "Product Engineer",
    "RAG pipelines",
    "Agentic workflows",
    "Event-driven architecture",
    "MCP server",
    "Model Context Protocol",
    "LLM integration",
    "OpenAI",
    "Anthropic",
    "Vector databases",
    "Embeddings",
    "Senior Software Engineer",
    "Full-stack Engineer",
    "Next.js",
    "React",
    "React Router v7",
    "Remix",
    "TypeScript",
    "Node.js",
    "System design",
    "Clean Architecture",
    "TDD",
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
