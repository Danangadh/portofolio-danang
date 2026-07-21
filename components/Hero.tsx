"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="tentang" className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen flex items-center">
      <div className="flex flex-col md:flex-row items-center gap-12 w-full">
        
        {/* Kiri: Teks */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex flex-col items-start gap-6"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm font-medium text-blue-300 bg-blue-500/20 px-4 py-1.5 rounded-full border border-blue-500/30 backdrop-blur-sm"
          >
            Tersedia untuk proyek
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Halo, saya <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent glow-text">
              Danang Ade Hidayat
            </span>
          </h1>

          <p className="text-xl text-blue-200/80 font-light">
            Frontend Developer & UI/UX Designer
          </p>

          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Software engineer dengan 2+ tahun pengalaman membangun produk digital
            yang scalable. Fokus pada arsitektur web modern, performa, dan
            pengalaman pengguna yang mulus.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#proyek"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-500 transition shadow-[0_0_25px_rgba(37,99,235,0.6)] flex items-center gap-2"
            >
              Lihat Proyek <ArrowRight size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#kontak"
              className="border border-blue-500/50 text-blue-300 px-8 py-3 rounded-full font-medium hover:bg-blue-500/10 transition backdrop-blur-sm"
            >
              Kontak Saya
            </motion.a>
          </div>
        </motion.div>

         {/* Kanan: Foto dengan efek glow permanen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex justify-center relative"
        >
          {/* 
            ============================================================
            ✨  GLOW TIDAK AKAN HILANG - SELALU BERDENYUT
            ============================================================
            Layer 1: biru redup (konstan, tidak berkedip)
            Layer 2: cyan dengan pulse (terus bergerak)
            Layer 3: biru terang dengan pulse berbeda (agar tidak mati)
            ============================================================
          */}

          {/* Layer 1 - Glow biru lebar & konstan (tidak pernah hilang) */}
          <div className="absolute -inset-24 bg-blue-500/30 rounded-full blur-3xl -z-20" />

          {/* Layer 2 - Glow cyan dengan pulse (terus berdenyut) */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-12 bg-cyan-400/40 rounded-full blur-3xl -z-10"
          />

          {/* Layer 3 - Glow biru terang dengan pulse berbeda (agar tidak pernah mati) */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="absolute -inset-6 bg-blue-400/50 rounded-full blur-2xl -z-5"
          />

          {/* 
            ============================================================
            🖼️  FOTO PROFIL - ATUR UKURAN DI SINI
            ============================================================
          */}
          <Image
            src="/profile.webp"
            alt="Danang Ade Hidayat"
            width={700}
            height={700}
            className="relative z-10 object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}