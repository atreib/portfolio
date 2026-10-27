export type TextSegment = {
  text: string;
  highlighted: boolean;
};

/**
 * Splits text into words and the runs of whitespace between them, in order. Joining the result gives the input back.
 */
export function splitWords(text: string): Array<string> {
  return text.split(/(\s+)/).filter(Boolean);
}

/**
 * Cuts text into plain and highlighted segments, in reading order. Each highlight marks its first occurrence; a highlight that is not found is ignored.
 */
export function highlightSegments(
  text: string,
  highlights: Array<string>,
): Array<TextSegment> {
  const ranges = highlights
    .map((highlight) => ({ start: text.indexOf(highlight), highlight }))
    .filter(({ start }) => start !== -1)
    .sort((a, b) => a.start - b.start);

  const segments: Array<TextSegment> = [];
  let cursor = 0;
  for (const { start, highlight } of ranges) {
    if (start < cursor) {
      continue;
    }
    if (start > cursor) {
      segments.push({ text: text.slice(cursor, start), highlighted: false });
    }
    segments.push({ text: highlight, highlighted: true });
    cursor = start + highlight.length;
  }
  if (cursor < text.length) {
    segments.push({ text: text.slice(cursor), highlighted: false });
  }
  return segments;
}
