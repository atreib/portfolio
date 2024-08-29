import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ChevronDownIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-8 lg:px-6 h-14 flex items-center ">
        <Link
          href="/"
          className="items-center justify-center hidden sm:flex"
          prefetch={false}
        >
          <Image
            className="h-12 w-12 object-contain object-center"
            src="/icons/andre-treib-icon.png"
            width={100}
            height={100}
            alt="Andre Treib"
          />
          <span className="sr-only">Andre Treib</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#about"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#portfolio"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Portfolio
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={true}
          >
            Blog
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 md:py-24 lg:py-32 xl:py-48 from-background to-muted bg-gradient-to-b">
          <div className="container ">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="space-y-8">
                <Image
                  width={300}
                  height={300}
                  priority={true}
                  className="w-[300px] object-center object-contain mx-auto"
                  src="/icons/andre-treib-high-res-logo-transparent.png"
                  alt={"Andre Treib"}
                />
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Experienced web fullstack engineer, building digital products
                  with a taste for coding, marketing and business.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="default" asChild>
                  <Link href="#about" prefetch={false}>
                    Who am I?
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact" prefetch={false}>
                    Contact & Newsletter
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/blog" prefetch={true}>
                    Engineering Blog
                  </Link>
                </Button>
              </div>
              <div className="pt-8">
                <ChevronDownIcon className="w-12 h-12 animate-bounce" />
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container ">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Who is Andre Treib?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hey there! I am an experienced web fullstack engineer who
                  specializes in building digital products with a focus on
                  coding, marketing, and business. I have expertise in
                  technologies like Next.js, Remix, React, and Node, being
                  passionate about creating innovative solutions that solve
                  real-world problems.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <Image
                      src="/assets/software-developer-building-digital-product.png"
                      width="550"
                      height="310"
                      alt="Project 1"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    />
                  </CardHeader>
                  <CardContent className="flex-1">
                    <h3 className="text-xl font-bold">Ownership</h3>
                    <p className="text-muted-foreground">
                      I take ownership of the projects I work on and always
                      deliver high-quality work. I like to be hands-on and
                      always make sure to understand the big picture.
                    </p>
                  </CardContent>
                </Card>
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <Image
                      src="/assets/andre-treib-lecturing-for-a-classroom.jpg"
                      width="550"
                      height="310"
                      alt="Project 2"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    />
                  </CardHeader>
                  <CardContent className="flex-1">
                    <h3 className="text-xl font-bold">
                      Positive Can-Do Attitude
                    </h3>
                    <p className="text-muted-foreground">
                      I am a strong believer in the power of uplifting others. I
                      am always looking for opportunities to help others
                      succeed.
                    </p>
                  </CardContent>
                </Card>
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <Image
                      src="/assets/software-developer-working-remote.jpg"
                      width="550"
                      height="310"
                      alt="Project 3"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    />
                  </CardHeader>
                  <CardContent className="flex-1">
                    <h3 className="text-xl font-bold">Remote Working</h3>
                    <p className="text-muted-foreground">
                      I have plenty of experience working with remote teams.
                      Building a strong team culture is key to a successful
                      project.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container ">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What have Andre Treib built?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some products and side project I have build lately.
                  I try to always keep my skills sharp and build something new,
                  whether it is a side project to learn something new or a
                  product to solve a problem.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <Image
                      src="/assets/tripwise-logo.png"
                      width="550"
                      height="310"
                      alt="Tripwise"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full bg-white"
                    />
                  </CardHeader>
                  <CardContent className="flex-1">
                    <h3 className="text-xl font-bold">Tripwise</h3>
                    <p className="text-muted-foreground">
                      A Next.js project to help you plan your next trip using
                      AI. With all the fuss around LLM, I decided to build my
                      own product.{" "}
                      <span className="font-bold">Still in development.</span>
                    </p>
                  </CardContent>
                  <CardFooter className="space-x-2">
                    <Button variant="outline" asChild>
                      <Link
                        href="https://tripwise-rho.vercel.app/"
                        prefetch={false}
                      >
                        Access
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <Image
                      src="/icons/andre-treib-high-res-logo-transparent.png"
                      width="550"
                      height="310"
                      alt="Andre Treib logo"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full bg-white"
                    />
                  </CardHeader>
                  <CardContent className="flex-1">
                    <h3 className="text-xl font-bold">This portfolio</h3>
                    <p className="text-muted-foreground">
                      This site that you are visiting right now is a Next.js
                      project. I built it to have a portfolio and to show case
                      some of my skills.
                    </p>
                  </CardContent>
                  <CardFooter className="space-x-2">
                    <Button variant="outline" asChild>
                      <Link
                        href="https://github.com/atreib/portfolio"
                        prefetch={false}
                      >
                        Source Code
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <Image
                      src="/assets/cqrs-diagram.png"
                      width="550"
                      height="310"
                      alt="CQRS Study Case"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full bg-white"
                    />
                  </CardHeader>
                  <CardContent className="flex-1">
                    <h3 className="text-xl font-bold">CQRS Study Case</h3>
                    <p className="text-muted-foreground">
                      CQRS pattern example project using Node.js with
                      Typescript, MongoDB (Mongoose), PostgreSQL (Prisma),
                      RabbitMQ and Docker-Compose. A study project to learn more
                      about async architectures.
                    </p>
                  </CardContent>
                  <CardFooter className="space-x-2">
                    <Button variant="outline" asChild>
                      <Link
                        href="https://github.com/atreib/cqrs"
                        prefetch={false}
                      >
                        Source Code
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <Image
                      src="/assets/beasy-logo.png"
                      width="550"
                      height="310"
                      alt="Beasy"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full bg-white"
                    />
                  </CardHeader>
                  <CardContent className="flex-1">
                    <h3 className="text-xl font-bold">Beasy</h3>
                    <p className="text-muted-foreground">
                      {`A B2C product for public transportation. Built with React
                      and Framer Motion. I won't lie, this one is kind of old.
                      But it was pretty fun to use Framer Motion, and look back
                      to see how far I've come.`}
                    </p>
                  </CardContent>
                  <CardFooter className="space-x-2">
                    <Button variant="outline" asChild>
                      <Link
                        href="https://github.com/atreib/beasy"
                        prefetch={false}
                      >
                        Source Code
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <Image
                      src="/assets/screenshot-of-andre-treib-articles.png"
                      width="550"
                      height="310"
                      alt="Personal articles screenshot"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full bg-white"
                    />
                  </CardHeader>
                  <CardContent className="flex-1">
                    <h3 className="text-xl font-bold">Personal Articles</h3>
                    <p className="text-muted-foreground">
                      {`I like to write articles about the stuff I learn. 
                      From my experience, it helps me to really understand 
                      the stuff I am learning. Besides, this is a way to share
                      my knowledge with others.`}
                    </p>
                  </CardContent>
                  <CardFooter className="space-x-2">
                    <Button variant="outline" asChild>
                      <Link
                        href="https://cloudy-marsupial-788.notion.site/Classes-f9cd7e07d2a2468294526640f6f2c963?pvs=74"
                        prefetch={false}
                      >
                        Read More
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container ">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What people say about Andre Treib?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some testimonials from people I have worked with.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12 border">
                        <AvatarFallback>BG</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1 text-left grow">
                        <div className="font-bold">Brian Glynn</div>
                        <div className="text-muted-foreground">IAM Pulse</div>
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      {`"Andre brings a positive can-do attitude to his work,
                      which is refreshing and motivating to be around. In
                      terms of technical capabilities, he is very equipped to
                      handle the work and is a continued advocate to improving
                      the code base and the patterns used within it. He
                      understands that it is appropriate to invest in best
                      practices, but also at times it is best to drive toward
                      near term goals and backfill missing pieces. Andre also
                      appears to be a natural people organizer, getting everyone
                      aligned toward success."`}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12 border">
                        <AvatarFallback>MK</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1 text-left grow">
                        <div className="font-bold">Mario Koller</div>
                        <div className="text-muted-foreground">
                          Eldorado Research Institute
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      {`"Andre is one of the most talented and qualified 
                      professionals I have worked with so far. He does his
                      work extremely well, with dedication and pro activity,
                      and always with a great mood. We briefly worked together
                      at Eldorado Research Institute and he helped me on my
                      first steps there. Someone with high potential to achieve
                      top ranks in any company due his commitment, respect,
                      openness, focus and courage. It's impossible to not
                      recommend his work. He is totally above average."`}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12 border">
                        <AvatarFallback>TS</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1 text-left grow">
                        <div className="font-bold">Thiago Silva</div>
                        <div className="text-muted-foreground">
                          Eldorado Research Institute
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      {`"Andre did a great job at Eldorado Research Institute 
                      where I had the chance to work with him. He's an excellent
                      software developer and delivered all requests with a lot
                      of quality and timely. He also acted as a real facilitator
                      inside the team with his positive attitude and proactive
                      behavior. I strongly recommend Andre for any company
                      looking for an outstanding software developer!"`}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container ">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex flex-col space-y-4 md:w-1/2">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Contact me
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Send me a hello! I am always open to meeting new people.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://github.com/atreib/" prefetch={false}>
                      <GithubIcon className="h-6 w-6" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link
                      href="https://twitter.com/treibthedev"
                      prefetch={false}
                    >
                      <TwitterIcon className="h-6 w-6" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link
                      href="https://www.linkedin.com/in/atreib/"
                      prefetch={false}
                    >
                      <LinkedinIcon className="h-6 w-6" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="mailto:me@andretreib.com" prefetch={false}>
                      <MailIcon className="h-6 w-6" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email (soon)"
                    disabled
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="max-w-min"
                    disabled
                  >
                    Subscribe to my newsletter (soon)
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  Subscribe to get updates from the web development world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center  border-t px-8 lg:px-6">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Andre Treib. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Peak human potential
          </Link>
        </nav>
      </footer>
    </div>
  );
}
