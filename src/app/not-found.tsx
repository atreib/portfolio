import { Button } from "@/components/ui/button";
import { FileQuestionIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <FileQuestionIcon className="mx-auto h-24 w-24 text-accent" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Where is this page?
        </h1>
        <p className="mt-4 text-muted-foreground">
          Looks like the page you were looking for has gone missing, just like
          that bug in your code.
        </p>
        <div className="mt-6">
          <Button variant="accent" asChild>
            <Link href="/" prefetch={false}>
              Take me back to the homepage
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
