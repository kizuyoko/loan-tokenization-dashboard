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
  title: "Loan Tokenization Dashboard",
  description: "A dashboard for managing and visualizing loan tokenization processes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <div className="grid items-center min-h-screen gap-4 p-2 pb-20 justify-items-center sm:p-4">
          <Header /> 
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
