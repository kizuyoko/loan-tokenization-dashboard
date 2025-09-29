import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'], 
});

export const metadata: Metadata = {
  title: "Boilerplate React Next.js TypeScript TailwindCSS",
  description: "Simple starter set of React.js, Next.js, TypeScript, and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <div className="grid items-center justify-items-center min-h-screen p-4 pb-20 gap-20 sm:p-20">
          <Header /> 
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
