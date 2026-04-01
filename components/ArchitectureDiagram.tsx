"use client";

import { motion } from "framer-motion";

export default function ArchitectureDiagram() {
  const box =
    "px-6 py-4 rounded-xl border border-gray-700 text-center min-w-[120px]";

  return (
    <div className="flex flex-col items-center mt-10">

      {/* Flow */}
      <div className="flex items-center gap-6 flex-wrap justify-center">

        {/* Frontend */}
        <motion.div
          className={box}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Frontend <br /> Angular
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          →
        </motion.div>

        {/* Backend */}
        <motion.div
          className={box}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Backend <br /> NestJS
        </motion.div>

        {/* Arrow */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          →
        </motion.div>

        {/* DB */}
        <motion.div
          className={box}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Database <br /> MySQL
        </motion.div>
      </div>
    </div>
  );
}