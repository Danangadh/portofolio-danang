"use client";

import { motion } from "framer-motion";

const techs = [
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "Go",
  "Next.js",
  "GraphQL",
  "Terraform",
  "Redis",
  "React",
];

export default function TechStack() {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3 justify-center md:justify-start"
      >
        {techs.map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(37,99,235,0.5)" }}
            className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-200 rounded-full text-sm font-medium backdrop-blur-sm transition-all duration-300"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}