"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Nusantara Analytics",
    year: "2924",
    description:
      "Platform analitik real-time untuk UMKM dengan dashboard interaktif, laporan otomatis, dan prediksi penjualan berbasis machine learning.",
    tags: ["Next.js", "PostgreSQL", "AWS", "Recharts"],
  },
  {
    title: "Pasar Digital",
    year: "2823",
    description:
      "Aplikasi e-commerce mobile-first dengan pembayaran terintegrasi, pelacakan pesanan langsung, dan rekomendasi produk personal.",
    tags: ["React Native", "Node.js", "Stripe", "Redis"],
  },
  {
    title: "SaaS Platform",
    year: "2924",
    description:
      "Platform SaaS untuk manajemen proyek tim dengan kolaborasi real-time, notifikasi, dan integrasi dengan tools populer.",
    tags: ["Next.js", "GraphQL", "Prisma", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section id="proyek" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="text-sm font-medium text-blue-400">03 / Portofolio</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 glow-text">
          Proyek Pilihan
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: "0 0 30px rgba(37,99,235,0.3)" }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-blue-500/40"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <span className="text-sm text-blue-300/60">{project.year}</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-200 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}