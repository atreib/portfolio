import Image from "next/image";
import Link from "next/link";
import { MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copy-button";
import { cn } from "@/lib/utils";
import { about, type About as AboutContent } from "./about-data";

function ContactCard({ contact }: { contact: AboutContent["contact"] }) {
  return (
    <Card className="border-primary/40 p-6 text-left md:p-8">
      <h3 className="text-balance text-2xl font-bold">{contact.heading}</h3>
      <p className="mt-2 text-muted-foreground md:text-lg">{contact.prompt}</p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button size="lg" asChild>
          <Link href={`mailto:${contact.email}`} prefetch={false}>
            <MailIcon aria-hidden="true" className="mr-2 h-4 w-4" />
            {contact.email}
          </Link>
        </Button>
        <CopyButton size="lg" value={contact.email} label="Copy email address" />
      </div>
      <p className="mt-4 text-muted-foreground">
        Prefer LinkedIn?{" "}
        <Link
          href={contact.linkedinUrl}
          prefetch={false}
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Message me on LinkedIn
        </Link>
        .
      </p>
      <p className="mt-4 border-t pt-4 text-sm text-muted-foreground">
        {contact.logistics}
      </p>
    </Card>
  );
}

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col space-y-12">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-6">
            {about.photos.map((photo) => (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={550}
                height={310}
                sizes="(min-width: 640px) 33vw, 100vw"
                className={cn(
                  "aspect-video w-full rounded-2xl object-cover object-center",
                  !photo.showOnMobile && "hidden sm:block",
                )}
              />
            ))}
          </div>
          <h2 className="text-balance text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {about.headline}
          </h2>
          <div className="space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-justify hyphens-auto text-foreground/90 sm:hyphens-manual md:text-lg/relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <ContactCard contact={about.contact} />
        </div>
      </div>
    </section>
  );
}
