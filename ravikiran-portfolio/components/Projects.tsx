import projects from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-3xl mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="border p-4">
            <h3 className="font-bold">{p.title}</h3>
            <p className="text-gray-400">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}