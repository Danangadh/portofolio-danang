"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="kontak" className="py-12 px-4 border-t border-blue-500/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Danang Ade Hidayat.
        </p>
      </motion.div>
    </footer>
  );
}