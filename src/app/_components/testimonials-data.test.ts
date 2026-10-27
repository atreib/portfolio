import { describe, expect, it } from "vitest";
import { featuredTestimonial, testimonials } from "./testimonials-data";

const all = [featuredTestimonial, ...testimonials];

function wordCount(text: string) {
  return text.split(/\s+/).filter(Boolean).length;
}

describe("testimonials", () => {
  it("finds every highlight exactly once in its own testimonial", () => {
    for (const { paragraphs, highlights } of all) {
      const text = paragraphs.join(" ");
      for (const highlight of highlights) {
        expect(text.split(highlight)).toHaveLength(2);
      }
    }
  });

  it("highlights at most 30% of the words of each testimonial", () => {
    for (const { paragraphs, highlights } of all) {
      const highlighted = highlights.reduce(
        (sum, highlight) => sum + wordCount(highlight),
        0,
      );

      expect(highlighted / wordCount(paragraphs.join(" "))).toBeLessThanOrEqual(
        0.3,
      );
    }
  });
});
