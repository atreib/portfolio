"use client";

import * as React from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { copyToClipboard, type CopyResult } from "@/lib/copy-to-clipboard";

const statusMessage: Record<CopyResult, string> = {
  copied: "Copied to clipboard.",
  failed: "Could not copy. Select the address and copy it by hand.",
};

export interface CopyButtonProps
  extends Omit<ButtonProps, "onClick" | "children" | "asChild"> {
  value: string;
  label: string;
}

/**
 * Copies `value` to the clipboard. A polite live region announces the result, and the label never changes, so focus and layout stay put.
 */
const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(
  ({ value, label, variant = "outline", ...props }, ref) => {
    const [result, setResult] = React.useState<CopyResult | null>(null);

    React.useEffect(() => {
      if (result !== "copied") {
        return;
      }
      const timeout = window.setTimeout(() => setResult(null), 2500);
      return () => window.clearTimeout(timeout);
    }, [result]);

    const Icon = result === "copied" ? CheckIcon : CopyIcon;

    return (
      <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
        <Button
          ref={ref}
          type="button"
          variant={variant}
          {...props}
          onClick={async () =>
            setResult(await copyToClipboard(value, navigator.clipboard))
          }
        >
          <Icon aria-hidden="true" className="mr-2 h-4 w-4" />
          {label}
        </Button>
        <span
          role="status"
          aria-live="polite"
          className="text-sm text-muted-foreground"
        >
          {result ? statusMessage[result] : ""}
        </span>
      </span>
    );
  }
);
CopyButton.displayName = "CopyButton";

export { CopyButton };
