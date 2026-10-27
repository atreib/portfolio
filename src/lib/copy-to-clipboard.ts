export type CopyResult = "copied" | "failed";

/**
 * Writes text to the clipboard and reports the result.
 * The Clipboard API is missing outside secure contexts and can reject the write, so both paths report "failed".
 */
export async function copyToClipboard(
  text: string,
  clipboard: Pick<Clipboard, "writeText"> | undefined,
): Promise<CopyResult> {
  if (!clipboard) {
    return "failed";
  }
  try {
    await clipboard.writeText(text);
    return "copied";
  } catch {
    return "failed";
  }
}
