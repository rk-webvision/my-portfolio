import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`}>
            <div className="p-6 rounded-2xl border border-gray-800 
              hover:border-white hover:scale-105 hover:shadow-lg 
              transition duration-300 cursor-pointer">
              
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400">{p.description}</p>
              
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}