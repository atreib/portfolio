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
    title: "Ships AI features end-to-end",
    body: "RAG pipelines, agentic workflows over EDA, and a custom MCP server in production — from data ingestion and chunking through reasoning-based orchestration.",
  },
  {
    title: "Builds for product impact",
    body: "First engineer hired at a US SaaS, helped shape the roadmap and engineering culture, and have served as Product Owner before. Comfortable moving between IC depth and product-facing decisions.",
  },
  {
    title: "Tested + observable by default",
    body: "TDD across the full pyramid — unit, integration, E2E. 80% coverage on 12 production microservices, structured logging and telemetry, regression escape rate cut to near zero.",
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
              Senior full-stack engineer with 11 years of experience shipping
              products end-to-end across Next.js, React, and Node. The last
              two years have been a step-change: I leverage AI coding
              assistants and purpose-built internal tooling to compress
              4-week scopes into 3 days, then protect every shipped feature
              with rigorous unit, integration and E2E coverage. I build and
              operate RAG pipelines, agentic workflows over event-driven
              architecture, and a custom MCP server wired into our own
              tool-using AI agent.
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
