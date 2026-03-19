import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b2545] text-white pt-16 pb-8 border-t-4 border-[var(--color-accent)]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div>
             <Link href="/" className="flex items-center group w-fit bg-white px-3 py-2 rounded-lg mb-6">
                <div className="relative w-32 h-8">
                   <Image src="/pavika-logo.jpg" alt="Pavika Logo" fill className="object-contain object-left" />
                </div>
             </Link>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              India's Largest B2B Raw Materials Procurement & Credit Platform. Dedicated to revolutionising the SME sector.
            </p>
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] cursor-pointer transition-colors"><Facebook className="w-4 h-4"/></span>
              <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] cursor-pointer transition-colors"><Twitter className="w-4 h-4"/></span>
              <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] cursor-pointer transition-colors"><Linkedin className="w-4 h-4"/></span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-white/20 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-[var(--color-accent)] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-accent)] transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-accent)] transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-accent)] transition-colors">Media & Press</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-accent)] transition-colors">Sell on PAVIKA</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-white/20 pb-2 inline-block">Top Categories</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/category/mild-steel" className="hover:text-[var(--color-accent)] transition-colors">Mild Steel</Link></li>
              <li><Link href="/category/non-ferrous" className="hover:text-[var(--color-accent)] transition-colors">Non-Ferrous</Link></li>
              <li><Link href="/category/polymers" className="hover:text-[var(--color-accent)] transition-colors">Polymers</Link></li>
              <li><Link href="/category/chemicals" className="hover:text-[var(--color-accent)] transition-colors">Chemicals</Link></li>
              <li><Link href="/category/agri" className="hover:text-[var(--color-accent)] transition-colors">Agriculture</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-white/20 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span>Sector 44, Gurugram, Haryana, 122003, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                <span>1800-889-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                <span>contact@pavika.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pavika Distribution Network. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
