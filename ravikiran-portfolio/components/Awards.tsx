export default function Awards() {
  const awards = [
    {
      title: "Star of the Quarter — Q3 2025",
      desc: "Recognized for exceptional performance, code quality, and strong problem-solving.",
    },
    {
      title: "Star of the Quarter — Q1 2025",
      desc: "Awarded for proactive attitude, solution-oriented mindset, and QA excellence.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-10">Awards & Recognition</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {awards.map((a, i) => (
          <div
            key={i}
            className="p-6 border border-gray-800 rounded-xl hover:border-white transition"
          >
            <h3 className="font-semibold">{a.title}</h3>
            <p className="text-gray-400 mt-2">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}