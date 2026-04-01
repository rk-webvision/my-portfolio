export default function Strengths() {
  const strengths = [
    "Frontend architecture & performance optimization",
    "Full stack development with end-to-end ownership",
    "Scalable system design & clean coding practices",
    "Mentorship and cross-functional team collaboration",
  ];

  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-10">Key Strengths</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {strengths.map((s, i) => (
          <div
            key={i}
            className="p-5 border border-gray-800 rounded-xl hover:scale-105 transition"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}