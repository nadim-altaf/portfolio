import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Certificates } from "@/components/certificates";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
