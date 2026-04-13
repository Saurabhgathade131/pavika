import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pavika Distribution Network | India's B2B Raw Materials Platform",
    template: "%s | Pavika Distribution"
  },
  description: "Seamlessly connecting products with markets through cutting-edge logistics and enterprise-grade service. India's largest procurement platform for Steel, Agriculture, and Chemicals.",
  keywords: ["B2B Raw Materials", "Steel Procurement", "Industrial Supplies", "SME Credit Platform India", "Pavika Distribution", "Mild Steel Prices Today", "Agriculture Supply Chain"],
  authors: [{ name: "Pavika Team" }],
  creator: "Pavika Distribution Network",
  publisher: "Pavika Distribution Network",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/pavika-logo.jpg",
    shortcut: "/pavika-logo.jpg",
    apple: "/pavika-logo.jpg",
  },
  openGraph: {
    title: "Pavika Distribution Network | B2B Raw Materials Excellence",
    description: "Empowering 5000+ SMEs across India with direct manufacturing rates and collateral-free credit.",
    url: "https://pavikadistributionnetwork.com",
    siteName: "Pavika Distribution",
    images: [
      {
        url: "/hero-industrial.png",
        width: 1200,
        height: 630,
        alt: "Pavia Industrial Supply Chain",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavika Distribution Network",
    description: "India's Largest B2B Raw Materials Procurement Platform.",
    images: ["/hero-industrial.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
