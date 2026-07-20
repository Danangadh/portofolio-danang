import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danang Ade Hidayat - Frontend Developer & UI/UX Designer",
  description: "Portfolio Danang Ade Hidayat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0e1a] text-gray-200`}>
        {children}
      </body>
    </html>
  );
}