"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "Staff Ahli Divisi Medkrtef Kominfo ",
    organization: "Badan Ekseskutif Mahasiswa Universitas Dian Nuswantoro",
    period: "2023 - sekarang",
    description:
      " -	Bertanggung jawab atas produksi 3 Video Micro Content per bulan untuk kanal digital BEM FIK, -	Memproduksi Video Profil BEM FIK dari tahap perancangan konten hingga editing, -    Mendokumentasikan kegiatan organisasi dan mengelola aset kreatif digital BEM FIK    ",
    image: "/staff.webp", // Ganti dengan foto dokumentasi Anda
    link: "#",
  },
  {
    id: 2,
    title: "Koordinator Publikasi",
    organization: "FIK FAIR 2025 UDINUS",
    period: "2025",
    description:
      "-	Mengkoordinasikan 7 anggota tim publikasi selama 1 bulan persiapan dan 2 hari pelaksanaan, -Merancang Key Visual dan Grand Design acara memproduksi Aftermovie" ,
    image: "/fikfair.webp",
    link: "#",
  },
  {
    id: 3,
    title: "Koordinator Publikasi",
    organization: "FIXCUP 6.0",
    period: "2025",
    description:
      "-	Memimpin 10 anggota divisi publikasi selama 3 bulan persiapan dan 2 hari pelaksanaan event, -	Merancang Key Visual, Grand Design, Teaser, Aftermovie, dan Poster acara  ",
    image: "/fixcup.webp",
    link: "#",
  },
   {
    id: 3,
    title: "Tim Publikasi ",
    organization: "LKMM-TD ",
    period: "2025",
    description:
      "-	Memproduksi konten Teaser, Bumper, dan Aftermovie untuk acara pelatihan kepemimpinan    ",
    image: "/org3.webp",
    link: "#",
  },
   {
    id: 3,
    title: "Anggota Dekorasi ",
    organization: "Pembekalan Calon Pengurus BEM FIK 2025",
    period: "2025",
    description:
      "-	Merancang dan mendesain elemen dekorasi MMT dan backdrop untuk kegiatan pentas seni     ",
    image: "/pcp.webp",
    link: "#",
  },
  
];

export default function Experience() {
  return (
    <section id="pengalaman" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="text-sm font-medium text-blue-400">04 / Pengalaman</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 glow-text">
          Pengalaman Organisasi
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl">
          Perjalanan saya dalam berorganisasi dan berkontribusi untuk komunitas.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              boxShadow: "0 0 40px rgba(37, 99, 235, 0.3)",
            }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/40 group"
          >
            {/* Foto Dokumentasi */}
            <div className="relative h-48 overflow-hidden bg-blue-900/20">
              <Image
                src={exp.image}
                alt={exp.title}
                width={600}
                height={400}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay gelap di bawah foto agar teks terbaca */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Tahun/period di pojok */}
              <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-blue-300 text-xs px-3 py-1 rounded-full border border-white/10">
                {exp.period}
              </span>
            </div>

            {/* Konten */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-1">
                {exp.title}
              </h3>
              <p className="text-blue-300 text-sm font-medium mb-3">
                {exp.organization}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </p>
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium transition"
                >
                  Lihat Dokumentasi →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}