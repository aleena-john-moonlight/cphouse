import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "C P House | Private Residence Portal",
  description: "Secure private residence portal for C P House residents and guests.",
  icons: {
    icon: "https://cdn.avrxt.in/assets/logo-02.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans bg-black text-white selection:bg-white/10`}>
        <div className="mesh-gradient" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
