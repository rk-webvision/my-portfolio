export default function SystemDesign() {
  const designs = [
    {
      title: "Enterprise Bidding Platform",
      problem:
        "Handling large datasets with slow filtering and inefficient admin workflows.",
      solution:
        "Designed role-based access system and optimized API filtering with pagination.",
      impact: [
        "Improved workflows by 40%",
        "Reduced data retrieval time by 35%",
      ],
      tech: ["Angular 19", "NestJS", "MySQL", "REST APIs"],
    },
    {
      title: "Community Management Portal",
      problem:
        "Tightly coupled UI components slowing down development and increasing bugs.",
      solution:
        "Introduced reusable modular architecture with directives, pipes, and shared modules.",
      impact: [
        "Improved development speed by 30%",
        "Reduced defects by 20%",
      ],
      tech: ["Angular", "TypeScript", "Component Architecture"],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-12">System Design & Impact</h2>

      <div className="space-y-10">
        {designs.map((d, i) => (
          <div
            key={i}
            className="p-6 border border-gray-800 rounded-2xl hover:border-white transition"
          >
            <h3 className="text-2xl font-semibold mb-4">{d.title}</h3>

            <p className="text-gray-400 mb-2">
              <span className="text-white font-medium">Problem: </span>
              {d.problem}
            </p>

            <p className="text-gray-400 mb-2">
              <span className="text-white font-medium">Solution: </span>
              {d.solution}
            </p>

            <div className="mb-3">
              <span className="text-white font-medium">Impact:</span>
              <ul className="text-gray-300 mt-2">
                {d.impact.map((i, idx) => (
                  <li key={idx}>• {i}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {d.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-sm border border-gray-700 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}