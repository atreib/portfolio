import { describe, expect, it } from "vitest";
import { about } from "./about-data";
import { featuredRole, pastRoles } from "./experience-data";

const publicCopy = JSON.stringify({ about, featuredRole, pastRoles });

const claims = [
  ...about.paragraphs,
  ...featuredRole.caseStudies.map((caseStudy) =>
    [
      caseStudy.credit,
      caseStudy.heading,
      caseStudy.summary,
      ...caseStudy.details,
    ].join(" "),
  ),
];

describe("public copy", () => {
  it("keeps model IDs, PR numbers and money amounts out", () => {
    expect(publicCopy).not.toMatch(/\b(gpt|claude|gemini|text-embedding)-/i);
    expect(publicCopy).not.toMatch(/#\d{2,}|\bPR\s?\d/i);
    expect(publicCopy).not.toMatch(/\$\s?\d/);
  });

  it("credits the 12+ hours result to an agent that André co-designed", () => {
    const hoursClaims = claims.filter((claim) => /12\+\s?hours/.test(claim));

    expect(hoursClaims.length).toBeGreaterThan(0);
    for (const claim of hoursClaims) {
      expect(claim).toMatch(/co-designed/i);
    }
  });

  it("leaves company names to the experience section", () => {
    const aboutCopy = about.paragraphs.join(" ");
    const companies = [featuredRole, ...pastRoles].map((role) => role.company);

    for (const company of companies) {
      expect(aboutCopy).not.toContain(company);
    }
  });
});
