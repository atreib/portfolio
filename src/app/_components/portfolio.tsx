import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Project = {
  name: string;
  image: string;
  description: string;
  liveUrl?: string;
  sourceUrl?: string;
};

const projects: Array<Project> = [
  {
    name: "Tripwise",
    image: "/assets/tripwise-logo.png",
    description:
      "Next.js 15 trip planner powered by an LLM. Plan a trip end-to-end — destinations, itinerary, packing — through a single conversational flow.",
    liveUrl: "https://tripwise.andretreib.com/",
    sourceUrl: "https://github.com/atreib/tripwise",
  },
  {
    name: "Jerry",
    image: "/assets/jerry-logo.jpg",
    description:
      "AI-powered 3D character built with Next.js, Three.js and OpenAI. Open-source experiment exploring real-time voice interaction with a rigged 3D model.",
    liveUrl: "https://jerry.andretreib.com/",
    sourceUrl: "https://github.com/atreib/talk-to-jerry-2",
  },
  {
    name: "E-book Factory",
    image: "/assets/ebook-factory-logo.png",
    description:
      "One-shot ebook generator on top of an LLM with an image-generation pipeline. Type a topic, get a fully-illustrated ebook back.",
    liveUrl: "https://ebook-factory.vercel.app/",
  },
  {
    name: "Nutri SaaS",
    image: "/assets/nutrisaas-logo.png",
    description:
      "End-to-end SaaS for nutritionists with patient management, smart calendar, meal planning, anthropometric assessment, and an embedded per-patient AI assistant.",
    liveUrl: "https://nutri-saas-web-app.vercel.app/",
  },
  {
    name: "Easypack",
    image: "/assets/easypack.png",
    description:
      "Travel packing assistant that takes the trip details and returns the packing list — never forget what to bring again.",
    liveUrl: "https://easypack.andretreib.com/",
  },
  {
    name: "Bairro Aberto",
    image: "/assets/bairro-aberto.png",
    description:
      "Glassdoor for neighborhoods. Reviews, ratings, and lived-in signal for places before you move there.",
    liveUrl: "https://bairroaberto.com.br/",
  },
  {
    name: "Cloudret",
    image: "/assets/cloudret-logo.png",
    description:
      "Open-source visual cloud-infrastructure builder. Swap between diagrams and a human-friendly DSL, then export Terraform — fully client-side so user data never leaves the browser.",
    liveUrl: "https://dret.andretreib.com/",
    sourceUrl: "https://github.com/atreib/dret",
  },
  {
    name: "The Background Text",
    image: "/assets/thebackgroundtext-logo.png",
    description:
      "Open-source browser-side image editor. Uses a WASM model to extract foreground, then composes text behind the subject. Runs entirely client-side.",
    liveUrl: "https://thebackgroundtext.andretreib.com/",
    sourceUrl: "https://github.com/atreib/thebackgroundtext",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Shipping AI products in public.
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of products I&apos;ve shipped — the AI work I keep
              sharpening on, plus the side projects that came before it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.name} className="flex flex-col h-full">
                <CardHeader>
                  <Image
                    src={project.image}
                    width={550}
                    height={310}
                    alt={project.name}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full bg-white"
                  />
                </CardHeader>
                <CardContent className="flex-1">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="space-x-2">
                  {project.liveUrl ? (
                    <Button asChild>
                      <Link href={project.liveUrl} prefetch={false}>
                        Try it out
                      </Link>
                    </Button>
                  ) : null}
                  {project.sourceUrl ? (
                    <Button variant="outline" asChild>
                      <Link href={project.sourceUrl} prefetch={false}>
                        Source code
                      </Link>
                    </Button>
                  ) : null}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
