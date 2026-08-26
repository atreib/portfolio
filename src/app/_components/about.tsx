import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SkillRadarChart } from "../skills";

const aboutImages = [
  {
    src: "/assets/software-developer-building-digital-product.png",
    alt: "Andre Treib building a digital product",
  },
  {
    src: "/assets/andre-treib-lecturing-for-a-classroom.jpg",
    alt: "Andre Treib lecturing for a classroom",
  },
  {
    src: "/assets/software-developer-working-remote.jpg",
    alt: "Andre Treib working remotely",
  },
];

const pillars = [
  {
    title: "Ships AI products end-to-end",
    body: "A real-time voice AI agent shipped solo in 21 days — streaming ASR, speculative RAG, LLM tool-calling over MCP, streaming TTS, ~0.9 s to first audio. Plus 48 production agent workflows running ~115k LLM runs a month.",
  },
  {
    title: "Builds for product impact",
    body: "First engineer hired at a US SaaS, now its de facto tech lead: shaped roadmap and engineering culture, led the investor-demo sprint, and mentored engineers. The AI I design saves 12+ hours per loan processed.",
  },
  {
    title: "Tested + observable by default",
    body: "TDD across the full pyramid with ~1:1 test-to-source coverage. Team's primary code reviewer — 227 peer PRs — with structured logging and telemetry, and production OOMs, leaks and cache stampedes resolved.",
  },
];

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-3xl">
            {aboutImages.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={550}
                height={310}
                className="aspect-video w-full overflow-hidden rounded-2xl object-cover object-center"
              />
            ))}
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Who is Andre Treib?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Full-stack engineer operating at tech-lead / staff level, with
              12 years shipping products end-to-end across Next.js, React,
              and Node. First engineer hired at a US-based startup, where I
              now design and operate the AI platform: autonomous agent
              workflows over event-driven architecture — 48 production
              workflows running ~115k LLM runs a month — RAG pipelines, a
              custom MCP server, and idempotent LLM pipelines guarded by
              cross-vendor LLM-as-judge evals. I pair AI-assisted engineering
              with rigorous unit, integration and E2E coverage to compress
              scopes that used to take 4 weeks into 3 days — without
              sacrificing quality.
            </p>
          </div>
          <div className="w-full">
            <SkillRadarChart />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="flex flex-col h-full">
                <CardContent className="flex-1 p-6 text-left">
                  <h3 className="text-xl font-bold">{pillar.title}</h3>
                  <p className="mt-2 text-muted-foreground">{pillar.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
