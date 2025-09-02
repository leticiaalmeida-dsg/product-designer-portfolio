import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisScript from "./components/LenisScript";
import Cursor from "./components/Cursor";

// Initialize font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leticia Almeida - Product Designer",
  description: "Building brands with purpose, products and experiences. Product designer focused on creating meaningful digital solutions.",
  keywords: ["product design", "UX/UI design", "brand design", "digital experiences"],
  authors: [{ name: "Leticia Almeida" }],
  creator: "Leticia Almeida",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leticiadesign.com",
    title: "Leticia Almeida - Product Designer",
    description: "Building brands with purpose, products and experiences",
    siteName: "Leticia Almeida Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body suppressHydrationWarning className="antialiased bg-[#080808] text-white">
        <Cursor />
        {children}
        <LenisScript />
      </body>
    </html>
  );
}