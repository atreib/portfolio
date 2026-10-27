import { describe, expect, it } from "vitest";
import { featuredRole } from "./experience-data";

describe("experience copy", () => {
  it("never calls R&D work shipped or in production", () => {
    const researchProjects = featuredRole.caseStudies.filter(
      (caseStudy) => caseStudy.status === "rnd",
    );

    const claims = researchProjects.map((caseStudy) =>
      [caseStudy.heading, caseStudy.summary, ...caseStudy.details].join(" "),
    );

    expect(researchProjects.length).toBeGreaterThan(0);
    for (const claim of claims) {
      expect(claim).not.toMatch(/\bship|\bproduction\b/i);
    }
  });

  it("finds each highlight exactly once in its summary", () => {
    const highlighted = featuredRole.caseStudies.filter(
      (caseStudy) => caseStudy.highlight !== undefined,
    );

    expect(highlighted.length).toBeGreaterThan(0);
    for (const { summary, highlight } of highlighted) {
      expect(summary.split(highlight ?? "")).toHaveLength(2);
    }
  });
});
