"use client";

// import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      {/* <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Ravikiran Kotgyale
      </motion.h1> */}

      <h1>Ravikiran Kotgyale</h1>

      <h2 className="text-2xl mt-4">
        Senior Full Stack Engineer
      </h2>

      <p className="mt-4 text-gray-400">
        Building scalable systems & high-performance web apps
      </p>

      <div className="mt-6 space-x-4">
        <a href="#projects" className="border px-4 py-2">View Work</a>
        <a href="/resume.pdf" download className="bg-white text-black px-4 py-2">
          Download Resume
        </a>
      </div>
    </section>
  );
}