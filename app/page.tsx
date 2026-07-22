import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience"; // ← import baru
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e1a]">
      <Header />
      <Hero />
      <TechStack />
      <About />
      <Skills />
      <Experience />    {/* ← tambahkan di sini */}
      <Projects />
      <Footer />
    </main>
  );
}