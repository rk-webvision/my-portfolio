export default function Skills() {
  const skillGroups = [
    {
      title: "Core Expertise",
      highlight: true,
      items: [
        "Angular (v8–v19)",
        "TypeScript",
        "JavaScript (ES6+)",
        "RxJS",
        "NgRx",
      ],
    },
    {
      title: "Backend & APIs",
      items: ["Node.js", "NestJS", "Spring Boot", "REST APIs"],
    },
    {
      title: "Database",
      items: ["MySQL", "MongoDB"],
    },
    {
      title: "Architecture & Practices",
      items: [
        "System Design",
        "Microservices",
        "Performance Optimization",
        "Lazy Loading",
        "OnPush Change Detection",
      ],
    },
    {
      title: "Tools",
      items: ["Git", "Docker", "CI/CD", "JIRA", "Swagger"],
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Technologies & Skills
      </h2>

      <div className="space-y-10">
        {skillGroups.map((group, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold mb-4 text-gray-300">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`px-4 py-2 rounded-full text-sm transition
                  ${
                    group.highlight
                      ? "bg-white text-black font-medium"
                      : "border border-gray-700 text-gray-300 hover:bg-white hover:text-black"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}