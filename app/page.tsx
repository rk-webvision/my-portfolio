import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Strengths from "@/components/Strengths";
import SystemDesign from "@/components/SystemDesign";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import PageWrapper from "@/components/PageWrapper";
import VibeCode from "@/components/VibeCode";

export default function Home() {
  return (
    <PageWrapper>
      <Navbar />
      <Hero />

      {/* Impact Summary */}
      <section className="text-center py-10">
        <div className="flex justify-center gap-10 text-lg font-semibold">
          <div>🚀 6+ Years Experience</div>
          <div>⚡ 40% Workflow Improvement</div>
          <div>📈 35% Performance Boost</div>
        </div>
      </section>

      <Experience />
      <Skills />
      <Strengths />
      <SystemDesign />
      <Projects />
      <VibeCode />
      <Awards />

      {/* Currently Working */}
      <section className="text-center py-10 text-gray-400">
        Currently exploring System Design, scalable architectures, and performance optimization
      </section>

      <Contact />
    </PageWrapper>
  );
}