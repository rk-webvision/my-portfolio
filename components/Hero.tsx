"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      
      <motion.h1 className="text-5xl md:text-7xl font-bold">
        Ravikiran Kotgyale
      </motion.h1>

      <p className="mt-4 text-xl text-gray-400 max-w-xl">
        Senior Full Stack Engineer building scalable systems with measurable impact
      </p>

      <p className="mt-2 text-gray-500">
        Improved performance by 35% | Reduced tech debt by 30%
      </p>

      <div className="mt-8 flex gap-4">
        <a href="#projects" className="px-6 py-3 rounded-xl bg-white text-black hover:scale-105 transition">
          View Work
        </a>

        <a href="/resume.pdf" download className="px-6 py-3 rounded-xl border border-gray-700 hover:bg-white hover:text-black transition">
          Download Resume
        </a>
      </div>
    </section>
  );
}