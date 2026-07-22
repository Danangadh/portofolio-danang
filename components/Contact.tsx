"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function Contact() {
  return (
    <section id="kontak" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <span className="text-sm font-medium text-blue-400">05 / Kontak</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 glow-text">
          Hubungi Saya
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Tertarik untuk berkolaborasi atau memiliki pertanyaan? Hubungi saya melalui
          formulir di bawah atau media sosial.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Kiri: Info kontak */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition">
            <MdEmail className="text-blue-400 w-6 h-6 mb-3" />
            <h3 className="text-white font-semibold">Email</h3>
            <a href="mailto:danangadehidayat42@gmail.com" className="text-gray-300 hover:text-blue-300 transition">
              danangadehidayat42@gmail.com
            </a>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition">
            <MdPhone className="text-blue-400 w-6 h-6 mb-3" />
            <h3 className="text-white font-semibold">Telepon</h3>
            <a href="tel:+6281368250239" className="text-gray-300 hover:text-blue-300 transition">
              +62 813-6825-0239
            </a>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition">
            <MdLocationOn className="text-blue-400 w-6 h-6 mb-3" />
            <h3 className="text-white font-semibold">Lokasi</h3>
            <p className="text-gray-300">Indonesia</p>
          </div>

          {/* Social media icons */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/danang"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-full p-3 hover:bg-blue-500/20 hover:border-blue-500/40 transition"
            >
              <FaGithub className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/danang"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-full p-3 hover:bg-blue-500/20 hover:border-blue-500/40 transition"
            >
              <FaLinkedin className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
            <a
              href="https://instagram.com/danang"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-full p-3 hover:bg-blue-500/20 hover:border-blue-500/40 transition"
            >
              <FaInstagram className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
          </div>
        </motion.div>

        {/* Kanan: Formulir */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <form className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-300 mb-1">Nama</label>
              <input
                type="text"
                id="name"
                placeholder="Nama lengkap"
                className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                placeholder="email@contoh.com"
                className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-300 mb-1">Pesan</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tulis pesan Anda..."
                className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] transition"
            >
              Kirim Pesan
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}