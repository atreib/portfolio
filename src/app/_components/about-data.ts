export type About = {
  headline: string;
  paragraphs: Array<string>;
  photos: Array<{ src: string; alt: string; showOnMobile: boolean }>;
  contact: {
    heading: string;
    prompt: string;
    email: string;
    linkedinUrl: string;
    logistics: string;
  };
};

export const about: About = {
  headline: "Who is Andre Treib?",
  paragraphs: [
    "I’m a staff software engineer from Brazil with 12 years of experience. I started in 2014 as a junior engineer at a vehicle-monitoring company, and along the way I took on the product side too: I introduced agile practices as a Scrum Master, owned a roadmap as a Product Owner, and stepped in as the PM on projects when my team had no capacity for one. I ask what a feature is for before I ask how to build it.",
    "For the last five years I have worked remotely on English-speaking teams, mostly at early-stage startups, where I usually own a system from the first design doc to the production rollout. Today that means applied AI, with one rule I keep: the model is never the source of a value. Code holds the facts, and every decision comes from a measurement, also when the answer is no.",
    "I like to teach. I mentor engineers on how to test, and I point them to the code and the docs instead of handing them the answer. I’m also doing a post-graduation in AI engineering.",
  ],
  photos: [
    {
      src: "/assets/software-developer-building-digital-product.png",
      alt: "Andre Treib building a digital product",
      showOnMobile: false,
    },
    {
      src: "/assets/andre-treib-lecturing-for-a-classroom.jpg",
      alt: "Andre Treib lecturing for a classroom",
      showOnMobile: true,
    },
    {
      src: "/assets/andre-treib.jpg",
      alt: "Andre Treib at a mountain lookout",
      showOnMobile: false,
    },
  ],
  contact: {
    heading: "Hiring for an early-stage team or an AI product?",
    prompt:
      "Email me. A few lines about the team and the problem are enough to start.",
    email: "me@andretreib.com",
    linkedinUrl: "https://www.linkedin.com/in/atreib/",
    logistics:
      "Remote from Brazil (UTC−3), which overlaps US working hours. Five years on English-speaking remote teams. Native Portuguese, fluent English, intermediate Spanish.",
  },
};
