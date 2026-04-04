import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pavika Distribution Network",
  description: "Seamlessly connecting products with markets through cutting-edge logistics and enterprise-grade service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} flex flex-col min-h-screen antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow pt-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
