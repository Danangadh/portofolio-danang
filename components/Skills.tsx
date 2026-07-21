"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Frontend",
    skills: ["HTML", "Next.js", "Javascript", "Tailwind CSS", "Java", ""],
  },
  {
    name: "Tools & Lainnya",
    skills: ["Git", "Figma", "Vercel", "Adobe Premier Pro", "Capcut", "Adobe Illustrator"],
  },
];

export default function Skills() {
  return (
    <section id="keahlian" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="text-sm font-medium text-blue-400">02 / Keahlian</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 glow-text">
          Tech Stack & Keahlian
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-blue-300 mb-4">
              {category.name}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="text-gray-300 text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}