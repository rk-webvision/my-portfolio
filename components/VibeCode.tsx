export default function VibeCode() {
    const projects = [
        {
            name: "Smart Nearby Places",
            tech: ["React", "TypeScript", "Geolocation API", "Maps"],
            link: "https://smart-nearby-places-five.vercel.app/",
        },
        {
            name: "Virtualized List App",
            tech: ["React", "TypeScript", "Virtualization", "Performance Optimization"],
            link: "https://virtualized-list-app-six.vercel.app/",
        },
    ];

    return (
        <section
            id="vibe-code"
            className="scroll-mt-24 max-w-6xl mx-auto py-20 px-6"
        >
            <h2 className="text-4xl font-bold mb-12 text-center">
                Vibe Coding Projects
            </h2>

            <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Experimental projects built using modern frontend techniques focusing on performance,
                real-time interactions, and user experience.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((p) => (
                    <div
                        key={p.name}
                        className="glass p-6 rounded-2xl 
            hover:scale-105 hover:shadow-lg transition duration-300"
                    >
                        <h3 className="text-xl font-semibold mb-2">{p.name}</h3>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {p.tech.map((t) => (
                                <span
                                    key={t}
                                    className="px-3 py-1 text-sm border border-gray-700 rounded-full"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <a
                            href={p.link}
                            target="_blank"
                            className="text-blue-400 hover:underline"
                        >
                            View Live Project →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}