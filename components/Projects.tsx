"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Ranauroadtrip Website",
    year: "2026",
    description:
      "Platform website tour & travel yang menampilkan destinasi wisata, paket perjalanan, dan profile perusahaan",
    tags: ["HTML", "Javascript", "CSS", "Vercel"],
    image: "/ranauroadtrip.webp", // ganti dengan path gambar
    link: "https://ranauroadtrip.vercel.app", // ganti dengan link proyek
  },
  {
    title: "Photorame - Photobooth",
    year: "2026",
    description:
      "Sistem photobooth berbasis web yang memungkinkan pengguna untuk mengambil foto, menambahkan filter, dan mencetaknya secara instan.",
    tags: ["HTML", "Java", "CSS", "Node.js"],
    image: "/photorame.webp", // ganti dengan path gambar
    link: "https://github.com/Danangadh/photorame-system.git",
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
        <span className="text-sm font-medium text-blue-400">04 / Portofolio</span>
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
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/40 group"
          >
            {/* Image */}
            <div className="relative w-full h-48 bg-gray-800/50">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <span className="text-sm text-blue-300/60">{project.year}</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-200 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Lihat Proyek →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}