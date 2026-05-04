import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-6">
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
                <p className="mt-4 text-muted-foreground text-left">
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
                <p className="mt-4 text-muted-foreground text-left">
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
                <p className="mt-4 text-muted-foreground text-left">
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
  );
}
