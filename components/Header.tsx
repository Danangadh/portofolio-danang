"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const navItems = ["Tentang", "Keahlian", "Proyek", "Kontak"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0a0e1a]/80 backdrop-blur-xl border-b border-blue-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold text-blue-400 glow-text">DNG.</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <a
              href="https://wa.me/6281368250239"
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-500 transition shadow-[0_0_15px_rgba(37,99,235,0.5)]"
            >
              Hubungi
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-500/10 text-gray-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0a0e1a]/95 backdrop-blur-xl border-b border-blue-500/20 py-4 px-4"
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-300 hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#https://wa.me/6281368250239"
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium text-center hover:bg-blue-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Hubungi
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}