import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in touch.
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Building something AI-native? Hiring product engineers? Send a
              hello.
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/atreib/"
                prefetch={false}
                aria-label="GitHub"
              >
                <GithubIcon className="h-6 w-6" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://twitter.com/treibthedev"
                prefetch={false}
                aria-label="Twitter"
              >
                <TwitterIcon className="h-6 w-6" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/atreib/"
                prefetch={false}
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-6 w-6" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="mailto:me@andretreib.com"
                prefetch={false}
                aria-label="Email"
              >
                <MailIcon className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
