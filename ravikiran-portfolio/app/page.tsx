import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Strengths from "@/components/Strengths";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import SystemDesign from "@/components/SystemDesign";
import FadeIn from "@/components/FadeIn";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
    <>
      <Navbar />
      <Hero />
      <About />
      <FadeIn>
        <Experience />
      </FadeIn>
      <FadeIn><Skills /></FadeIn>

      <Strengths />
      <SystemDesign />
      <FadeIn><Projects /></FadeIn>
      <FadeIn><Awards /></FadeIn>
      <Contact />
    </>
    </PageWrapper>
  );
}