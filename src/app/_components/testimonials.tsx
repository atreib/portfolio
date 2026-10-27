import { Fragment, type CSSProperties } from "react";
import { QuoteIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { highlightSegments, splitWords } from "@/lib/quote-text";
import { cn } from "@/lib/utils";
import {
  featuredTestimonial,
  testimonials,
  type Testimonial,
} from "./testimonials-data";

function ReadWords({ text }: { text: string }) {
  return (
    <>
      {splitWords(text).map((token, index) =>
        token.trim() === "" ? (
          <Fragment key={index}>{token}</Fragment>
        ) : (
          <span key={index} className="scroll-read-word">
            {token}
          </span>
        ),
      )}
    </>
  );
}

function HighlightedText({
  text,
  highlights,
  animated,
}: {
  text: string;
  highlights: Array<string>;
  animated: boolean;
}) {
  return (
    <>
      {highlightSegments(text, highlights).map((segment, index) => {
        const words = animated ? <ReadWords text={segment.text} /> : segment.text;
        return segment.highlighted ? (
          <mark
            key={index}
            className="bg-transparent font-semibold text-foreground"
          >
            {words}
          </mark>
        ) : (
          <Fragment key={index}>{words}</Fragment>
        );
      })}
    </>
  );
}

function Attribution({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <p className={cn("flex flex-col", className)}>
      <span className="font-semibold text-foreground">{testimonial.name}</span>
      <span className="text-sm text-muted-foreground">
        {testimonial.affiliation}
      </span>
    </p>
  );
}

/**
 * The long recommendation, set large. Each word lights up as it passes the reading line, and a rail fills alongside.
 * Screen readers get the plain text once; the split copy is hidden from them.
 */
function FeaturedTestimonial({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative pt-16">
      <div
        aria-hidden="true"
        className="scroll-lamp pointer-events-none absolute inset-x-0 top-0 mx-auto flex w-2/3 flex-col items-center"
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="-mt-px h-24 w-3/4 rounded-full bg-primary/20 blur-3xl" />
      </div>
      <div className="scroll-read relative grid grid-cols-[auto_minmax(0,1fr)] gap-6 md:gap-10">
        <div aria-hidden="true" className="relative w-px bg-border/40">
          <div className="scroll-read-rail absolute inset-0 origin-top bg-primary" />
        </div>
        <div>
          <QuoteIcon aria-hidden="true" className="h-10 w-10 text-primary" />
          <blockquote className="mt-6 space-y-6">
            {testimonial.paragraphs.map((paragraph) => (
              <Fragment key={paragraph}>
                <p className="sr-only">{paragraph}</p>
                <p
                  aria-hidden="true"
                  className="text-pretty text-xl/relaxed text-foreground/75 md:text-2xl/relaxed"
                >
                  <HighlightedText
                    text={paragraph}
                    highlights={testimonial.highlights}
                    animated
                  />
                </p>
              </Fragment>
            ))}
          </blockquote>
          <Attribution testimonial={testimonial} className="mt-8 text-lg" />
        </div>
      </div>
    </div>
  );
}

/**
 * The short recommendations as a deck. Each card sticks below the header, and the next card slides over it while it recedes.
 */
function TestimonialStack({ items }: { items: Array<Testimonial> }) {
  return (
    <ul
      role="list"
      className="scroll-stack relative mx-auto w-full max-w-3xl space-y-8 motion-safe:space-y-0"
      style={{ "--stack-count": items.length } as CSSProperties}
    >
      {items.map((testimonial, index) => (
        <li
          key={testimonial.name}
          className="top-[calc(6rem+var(--stack-index)*1.5rem)] motion-safe:sticky motion-safe:pb-[22vh] motion-safe:last:pb-0"
          style={{ "--stack-index": index } as CSSProperties}
        >
          <Card
            className={cn(
              "relative origin-top p-6 text-left shadow-xl shadow-black/40 md:p-8",
              index < items.length - 1 && "scroll-stack-recede",
            )}
          >
            <QuoteIcon aria-hidden="true" className="h-6 w-6 text-primary" />
            <blockquote className="mt-4 space-y-3 text-muted-foreground md:text-lg/relaxed">
              {testimonial.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-pretty">
                  <HighlightedText
                    text={paragraph}
                    highlights={testimonial.highlights}
                    animated={false}
                  />
                </p>
              ))}
            </blockquote>
            <Attribution testimonial={testimonial} className="mt-6 border-t pt-4" />
          </Card>
        </li>
      ))}
    </ul>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-4xl flex-col">
          <div className="scroll-reveal space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What people say about Andre Treib?
            </h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some testimonials from people I have worked with.
            </p>
          </div>
          <div className="mt-16 text-left">
            <FeaturedTestimonial testimonial={featuredTestimonial} />
          </div>
          <div className="mt-24 md:mt-32">
            <TestimonialStack items={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
}
