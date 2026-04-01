"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageWrapper({ children }: any) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}