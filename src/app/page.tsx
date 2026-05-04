import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Experience } from "./_components/experience";
import { Portfolio } from "./_components/portfolio";
import { Testimonials } from "./_components/testimonials";
import { Contact } from "./_components/contact";
import { Footer } from "./_components/footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
