import { describe, expect, it } from "vitest";
import { highlightSegments, splitWords } from "./quote-text";

describe("splitWords", () => {
  it("returns words and the spaces between them, in order", () => {
    expect(splitWords("He ships  fast.")).toEqual(["He", " ", "ships", "  ", "fast."]);
  });

  it("keeps leading and trailing spaces, so segments join back seamlessly", () => {
    expect(splitWords(" a natural ")).toEqual([" ", "a", " ", "natural", " "]);
  });

  it("returns nothing for empty text", () => {
    expect(splitWords("")).toEqual([]);
  });
});

describe("highlightSegments", () => {
  it("marks each highlight and keeps the text around it", () => {
    const segments = highlightSegments(
      "He is a natural people organizer, getting everyone aligned.",
      ["a natural people organizer"],
    );

    expect(segments).toEqual([
      { text: "He is ", highlighted: false },
      { text: "a natural people organizer", highlighted: true },
      { text: ", getting everyone aligned.", highlighted: false },
    ]);
  });

  it("marks several highlights in reading order", () => {
    const segments = highlightSegments("one two three four", ["three", "one"]);

    expect(segments).toEqual([
      { text: "one", highlighted: true },
      { text: " two ", highlighted: false },
      { text: "three", highlighted: true },
      { text: " four", highlighted: false },
    ]);
  });

  it("returns the text unchanged when no highlight is found", () => {
    const segments = highlightSegments("Plain text.", ["missing"]);

    expect(segments).toEqual([{ text: "Plain text.", highlighted: false }]);
  });
});
