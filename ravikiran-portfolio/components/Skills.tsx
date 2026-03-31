export default function Skills() {
  const skills = ["Angular", "TypeScript", "Node.js", "Spring Boot", "MySQL"];

  return (
    <section className="p-10 text-center">
      <h2 className="text-3xl mb-4">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((s) => (
          <span key={s} className="border px-3 py-1">{s}</span>
        ))}
      </div>
    </section>
  );
}