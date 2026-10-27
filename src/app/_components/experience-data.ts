export type CaseStudyStatus = "shipped" | "production" | "rnd";

export type CaseStudy = {
  name: string;
  status: CaseStudyStatus;
  credit?: string;
  heading: string;
  summary: string;
  highlight?: string;
  details: Array<string>;
  detailsNote?: string;
};

export type Role = {
  company: string;
  title: string;
  period: string;
  summary: string;
};

export type FeaturedRole = Omit<Role, "summary"> & {
  lead: string;
  caseStudies: Array<CaseStudy>;
  practice: string;
  stack: Array<string>;
};

export const caseStudyStatusLabel: Record<CaseStudyStatus, string> = {
  shipped: "Shipped",
  production: "In production",
  rnd: "R&D · not in production",
};

export const featuredRole: FeaturedRole = {
  company: "House Numbers",
  title: "Senior → Staff Software Engineer",
  period: "04/2022 — Present",
  lead: "I was the first engineer hired at House Numbers, a US mortgage-software startup, and I’m now the de facto tech lead of its AI platform. Lending is regulated and a wrong answer is costly, so I build LLM systems where code holds the facts, the model reasons over them, and every step is measured.",
  caseStudies: [
    {
      name: "Real-time voice AI agent",
      status: "shipped",
      heading:
        "A real-time voice AI agent that loan processors talk to like a colleague",
      summary:
        "Processors ask about a loan out loud and get a spoken answer, with first audio in about 0.9 s. I built and shipped the agent. Human-in-the-loop guardrails live in code: any change it wants to make to a loan becomes a proposal that a person approves.",
      highlight: "0.9 s",
      details: [
        "Each stage streams into the next. Streaming ASR transcribes while the processor talks, and semantic endpointing reads that live transcript to decide when a sentence is finished. A clear question gets a fast reply, and a trailing “and…” gets more time.",
        "Two-stage barge-in lets a person interrupt. The agent’s voice ducks at once and stops only after sustained speech, which fixed a user complaint that typing cut the agent off.",
        "Speculative RAG starts the vector-database search on the partial transcript. Events from the platform’s event-driven architecture keep that index current.",
        "The LLM calls tools over MCP, and streaming TTS speaks the reply as it arrives.",
      ],
      detailsNote:
        "Automated tests cover the whole pipeline, including LLM evals that catch regressions and A/B tests that decide which changes ship.",
    },
    {
      name: "Core AI agent for loan processing",
      status: "production",
      credit: "Co-designed",
      heading:
        "An AI agent for loan processing that saves 12+ hours of manual work per loan",
      summary:
        "I co-designed the core AI agent: 17 event-driven workflows in production that mix deterministic code with LLM steps. Guardrails gate every action. Only high-confidence, low-risk actions run on their own, and the rest wait for a loan processor’s approval.",
      highlight: "17",
      details: [
        "Workflows react to loan events or run on a schedule.",
        "Each workflow calls a custom MCP server with idempotent tools. An event-driven system can deliver an event twice, so a repeated call must never apply the same change twice.",
        "I researched, tested and introduced the “reason-then-execute” pattern, now the team default. The agent first writes down what should happen and why, and only then calls tools against that plan, so each run can be audited.",
        "Evals track accuracy.",
      ],
    },
    {
      name: "Lending-guide rules pipeline",
      status: "rnd",
      heading: "Deterministic lending rules from a 1,196-page guide",
      summary:
        "Fannie Mae’s Selling Guide sets which loans it will buy and on what terms. I led R&D on a pipeline that turns the guide and its pricing and eligibility matrices into deterministic rules, so a query returns the one table cell that fits a loan instead of handing an LLM the whole table. I measured every iteration to hold zero false positives.",
      highlight: "zero false positives",
      details: [
        "Each table is read from the PDF’s layout, validated and stored as typed conditions and values.",
        "The model only interprets structure, since its output varies between runs. Code copies every value.",
        "Measuring every run that way also let me remove an LLM-review stage that added cost and hurt stability.",
      ],
    },
  ],
  practice:
    "I work closest to the CEO and PM. I take on the loosely defined projects, scope them, and coordinate and mentor the other senior engineers who build them. I step in on production incidents such as OOMs, memory leaks and cache stampedes. Underneath the AI work, I build event-driven microservices in TypeScript, Node.js and MongoDB, tested at unit, integration and E2E level. My own coding agents run through a review workflow I built, which has completed 326 tasks across 8 projects since September 2026.",
  stack: [
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Qdrant",
    "MCP",
    "Vercel AI SDK",
    "Docker",
    "Kubernetes",
    "AWS",
  ],
};

export const pastRoles: Array<Role> = [
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
