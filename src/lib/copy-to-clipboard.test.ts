import { describe, expect, it, vi } from "vitest";
import { copyToClipboard } from "./copy-to-clipboard";

describe("copyToClipboard", () => {
  it("writes the text and reports success", async () => {
    const clipboard = { writeText: vi.fn().mockResolvedValue(undefined) };

    const result = await copyToClipboard("me@andretreib.com", clipboard);

    expect(clipboard.writeText).toHaveBeenCalledWith("me@andretreib.com");
    expect(result).toBe("copied");
  });

  it("reports failure when the browser rejects the write", async () => {
    const clipboard = {
      writeText: vi.fn().mockRejectedValue(new Error("NotAllowedError")),
    };

    const result = await copyToClipboard("me@andretreib.com", clipboard);

    expect(result).toBe("failed");
  });

  it("reports failure when the clipboard API is missing", async () => {
    const result = await copyToClipboard("me@andretreib.com", undefined);

    expect(result).toBe("failed");
  });
});
