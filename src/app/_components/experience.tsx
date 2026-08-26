const roles = [
  {
    company: "House Numbers",
    title: "Senior Software Engineer",
    period: "04/2022 — Present",
    summary:
      "First engineer hired at a US mortgage SaaS — built the product's AI backbone: RAG pipelines, agentic workflows over an event-driven backbone, and a custom MCP server wired to an internal tool-using agent, saving 12+ hours per loan processed across 12 production microservices at 80% test coverage.",
  },
  {
    company: "Avenue Code",
    title: "Senior Software Engineer",
    period: "10/2021 — 03/2022",
    summary:
      "Embedded with a San Francisco client to design and ship a Next.js + serverless SaaS end-to-end (TypeScript, PostgreSQL, MongoDB, Auth0, Lambda) — stood up the CI/CD pipeline on GitHub Actions, onboarded 3 engineers, and delivered my first professional Rust engagement.",
  },
  {
    company: "Eldorado Research Institute",
    title: "Mid → Senior Software Engineer",
    period: "07/2020 — 10/2021",
    summary:
      "Full-stack engineer on a visual-computing and ML product — built the React/Node/Kotlin interface against ML inference modules with TDD and Clean Architecture end-to-end, then took over as Product Owner, owning roadmap, quality and delivery cadence.",
  },
  {
    company: "MachadoTI",
    title: "Mid Software Engineer & Account Manager",
    period: "02/2018 — 07/2020",
    summary:
      "Technical reference helping an IT-infrastructure business break into software delivery — shipped outsourced projects across C#, PHP, React, Node, Ionic and SQL/NoSQL for 10+ clients while owning team, cost and deadline management plus client communication.",
  },
  {
    company: "Digicounter",
    title: "Junior → Mid Software Engineer & Scrum Master",
    period: "04/2014 — 04/2020",
    summary:
      "Drove the full refactor and redesign of the core vehicle-monitoring SaaS, shipped a mobile app — including the ETA algorithm — serving 200+ vehicles and 1,000+ daily passengers, and brought agile methodology into the company.",
  },
];

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
              11 years of full-stack delivery — last 5 on English-first
              remote teams.
            </p>
          </div>
          <ol className="relative w-full max-w-3xl border-l border-border ml-3 sm:ml-0">
            {roles.map((role) => (
              <li key={role.company} className="ml-6 pb-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-background"
                />
                <div className="flex flex-col gap-1 text-left">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-xl font-bold">{role.company}</h3>
                    <time className="text-sm text-muted-foreground font-mono">
                      {role.period}
                    </time>
                  </div>
                  <p className="text-sm font-medium text-foreground/80">
                    {role.title}
                  </p>
                  <p className="mt-2 text-muted-foreground">{role.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
