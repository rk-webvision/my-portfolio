import { projects } from "@/data/projects";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="p-10 text-white">
        Project not found: {slug}
      </div>
    );
  }

  return (
  <PageWrapper>
    <div className="max-w-4xl mx-auto py-20 px-6">
      {/* Close Button */}
      <div className="flex justify-end mb-6">
        <Link
          href="/"
          className="text-xl border px-3 py-1 rounded hover:bg-white hover:text-black transition"
        >
          ✕
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      <p className="text-gray-400 mb-6">{project.description}</p>

      <Section title="Problem" content={project.problem} />
      <Section title="Solution" content={project.solution} />
      <Section title="Architecture" content={project.architecture} />
      <h2 className="text-2xl font-semibold mt-10">Architecture Diagram</h2>
<ArchitectureDiagram />

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Impact</h2>
        <ul className="text-gray-300">
          {project.impact.map((i, idx) => (
            <li key={idx}>• {i}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 border border-gray-700 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
    </PageWrapper>
  );
}

function Section({ title, content }: any) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400">{content}</p>
    </div>
  );
}