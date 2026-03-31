import experience from "@/data/experience";

export default function Experience() {
  return (
    <section className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl mb-8">Experience</h2>

      {experience.map((job, i) => (
        <div key={i} className="mb-10">
          <h3 className="text-xl font-semibold">{job.role}</h3>
          <p className="text-gray-400">
            {job.company} • {job.duration}
          </p>

          <ul className="mt-3 space-y-2">
            {job.points.map((p, idx) => (
              <li key={idx} className="text-gray-300">
                • {p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}