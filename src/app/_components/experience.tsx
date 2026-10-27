import { ChevronDownIcon } from "lucide-react";
import { Badge, type BadgeProps } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  caseStudyStatusLabel,
  featuredRole,
  pastRoles,
  type CaseStudy,
  type CaseStudyStatus,
  type FeaturedRole,
  type Role,
} from "./experience-data";

const statusBadgeVariant: Record<CaseStudyStatus, BadgeProps["variant"]> = {
  shipped: "soft",
  production: "soft",
  rnd: "outline",
};

function Highlighted({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight) {
    return <>{text}</>;
  }
  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <strong className="font-semibold text-foreground">{highlight}</strong>
      {after}
    </>
  );
}

function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Card className="p-4 text-left sm:p-5">
      <div className="flex flex-wrap gap-1.5">
        <Badge variant={statusBadgeVariant[caseStudy.status]}>
          {caseStudyStatusLabel[caseStudy.status]}
        </Badge>
        {caseStudy.credit ? (
          <Badge variant="outline" className="text-muted-foreground">
            {caseStudy.credit}
          </Badge>
        ) : null}
      </div>
      <h4 className="mt-3 text-lg font-bold leading-snug text-foreground">
        {caseStudy.heading}
      </h4>
      <p className="mt-2 text-muted-foreground">
        <Highlighted text={caseStudy.summary} highlight={caseStudy.highlight} />
      </p>
      <details className="group mt-3">
        <summary className="-mx-1 inline-flex min-h-8 cursor-pointer list-none items-center gap-1.5 rounded-sm px-1 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card [&::-webkit-details-marker]:hidden">
          <ChevronDownIcon
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
          />
          How it works
          <span className="sr-only"> ({caseStudy.name})</span>
        </summary>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] text-muted-foreground marker:text-border">
          {caseStudy.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        {caseStudy.detailsNote ? (
          <p className="mt-3 text-[15px] text-muted-foreground">
            {caseStudy.detailsNote}
          </p>
        ) : null}
      </details>
    </Card>
  );
}

function FeaturedRoleItem({ role }: { role: FeaturedRole }) {
  return (
    <li className="ml-6 pb-12">
      <span
        aria-hidden="true"
        className="absolute -left-[9px] mt-[7px] h-[18px] w-[18px] rounded-full bg-primary ring-2 ring-primary/40 ring-offset-4 ring-offset-background"
      />
      <div className="flex flex-col gap-1 text-left">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-2xl font-bold">{role.company}</h3>
          <Badge variant="soft" className="gap-1.5">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
            Current
          </Badge>
          <time className="text-sm text-muted-foreground font-mono">
            {role.period}
          </time>
        </div>
        <p className="text-sm font-medium text-foreground/80">{role.title}</p>
        <p className="mt-2 max-w-prose text-foreground/90 md:text-lg/relaxed">
          {role.lead}
        </p>
      </div>
      <ul className="mt-6 grid gap-3">
        {role.caseStudies.map((caseStudy) => (
          <li key={caseStudy.name}>
            <CaseStudyCard caseStudy={caseStudy} />
          </li>
        ))}
      </ul>
      <div className="mt-8 text-left">
        <h4 className="text-base font-bold">How I work</h4>
        <p className="mt-1.5 max-w-prose text-muted-foreground">
          {role.practice}
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          <span className="mr-2 font-mono text-xs uppercase tracking-wider text-foreground">
            Stack
          </span>
          {role.stack.join(" · ")}
        </p>
      </div>
    </li>
  );
}

function PastRoleItem({ role }: { role: Role }) {
  return (
    <li className="ml-6 pb-10 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute -left-[5px] mt-[9px] h-2.5 w-2.5 rounded-full bg-muted-foreground ring-4 ring-background"
      />
      <div className="flex flex-col gap-1 text-left">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <h3 className="text-xl font-bold">{role.company}</h3>
          <time className="text-sm text-muted-foreground font-mono">
            {role.period}
          </time>
        </div>
        <p className="text-sm font-medium text-foreground/80">{role.title}</p>
        <p className="mt-2 text-muted-foreground">{role.summary}</p>
      </div>
    </li>
  );
}

export function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-12">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Where Andre Treib has been.
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              12 years of full-stack delivery — last 5 on English-first
              remote teams.
            </p>
          </div>
          <ol className="relative w-full max-w-3xl border-l border-border ml-3 sm:ml-0">
            <FeaturedRoleItem role={featuredRole} />
            {pastRoles.map((role) => (
              <PastRoleItem key={role.company} role={role} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
