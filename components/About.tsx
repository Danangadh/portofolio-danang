"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Tahun Pengalaman" },
  { value: "5+", label: "Proyek Selesai" },
  { value: "5", label: "Klien Puas" },
  { value: "4", label: "Sertifikasi " },
];

export default function About() {
  return (
    <section id="tentang" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-16 items-start"
      >
        <div>
          <span className="text-sm font-medium text-blue-400">01 / Tentang</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-6 glow-text">
            Membangun produk digital yang bermakna.
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Software engineer dengan 2+ tahun pengalaman membangun produk digital
            yang scalable. Fokus pada arsitektur web modern, performa, dan
            pengalaman pengguna yang mulus. Terbiasa memproduksi website yang responsif, cepat, dan SEO-friendly.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Saya percaya website yang baik adalah website yang mudah digunakan dan ramah user journey.
            Dengan pengalaman di berbagai proyek, saya selalu berusaha untuk memberikan solusi yang inovatif dan efisien.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-blue-400 glow-text">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 flex flex-wrap gap-6 text-gray-400"
      >
        <span className="hover:text-blue-300 transition" ><a href="https://instagram.com/danangargh">@danangargh</a></span>
        <span>|</span>
        <a href="#" className="hover:text-blue-300 transition">
          in/danangargh
        </a>
          <span>|</span>
         <a href="https://github.com/DanangAdh" className="hover:text-blue-300 transition">
          github
        </a>
       
      </motion.div>
    </section>
  );
}