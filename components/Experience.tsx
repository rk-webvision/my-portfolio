import experience from "@/data/experience";

export default function Experience() {
    return (
        <section id="experience" className="scroll-mt-24 max-w-4xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-bold mb-12">Experience</h2>

            <div className="space-y-10 border-l border-gray-800 pl-6">
                {experience.map((job, i) => (
                    <div
                        key={i}
                        className="p-4 rounded-xl hover:bg-gray-900 transition"
                    >

                        <div className="absolute -left-3 top-2 w-2 h-2 bg-white rounded-full" />

                        <h3 className="text-xl font-semibold">{job.role}</h3>
                        <p className="text-gray-400 text-sm">
                            {job.company} • {job.duration}
                        </p>

                        <ul className="mt-3 space-y-2 text-gray-300">
                            {job.points.map((p, idx) => (
                                <li key={idx}>• {p}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}