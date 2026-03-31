"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold"
      >
        Ravikiran Kotgyale
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-xl text-gray-400 max-w-xl"
      >
        Building scalable systems & high-performance web applications
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-white text-black hover:scale-105 transition"
        >
          View Work
        </a>

        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 rounded-xl border border-gray-700 hover:bg-white hover:text-black transition"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}