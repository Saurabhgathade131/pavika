import Link from "next/link";
import { Search, MapPin, User, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#0b2545] text-white text-xs hidden md:block">
        <div className="container mx-auto px-4 max-w-7xl h-8 flex items-center justify-between">
          <div className="flex gap-4">
            <span>Call us: <span className="font-bold">1800-889-9999</span></span>
            <span>Email: <span className="font-bold">contact@pavika.com</span></span>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:underline">Track Order</Link>
            <Link href="#" className="hover:underline">Sell on PAVIKA</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 max-w-7xl h-20 flex items-center justify-between gap-8">
        {/* Mobile Menu */}
        <button className="md:hidden text-gray-700">
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
          <div className="relative w-36 h-10">
            <Image src="/pavika-logo.jpg" alt="Pavika Logo" fill className="object-contain object-left" priority />
          </div>
        </Link>

        {/* Search Bar (Very prominent in Ditto B2B ecommerce sites) */}
        <div className="hidden md:flex flex-1 max-w-2xl relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          <input 
            type="text" 
            placeholder="Search for Raw Materials, Brands or Categories..." 
            className="w-full h-11 pl-10 pr-4 rounded-sm border border-gray-300 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/50 text-sm"
          />
          <button className="absolute right-0 top-0 h-11 px-6 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold text-sm rounded-r-sm transition-colors">
            Search
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex flex-col items-end">
             <span className="text-xs text-gray-500 font-medium">Deliver to</span>
             <span className="text-sm font-bold text-[#0b2545] flex items-center gap-1 cursor-pointer">
               <MapPin className="w-4 h-4 text-[var(--color-accent)]" /> Add address <ChevronDown className="w-3 h-3" />
             </span>
          </div>
          
          <Link href="/login" className="flex flex-col items-center text-gray-700 hover:text-[var(--color-accent)] transition-colors">
            <User className="w-6 h-6 mb-0.5" />
            <span className="text-xs font-bold">Login / Sign Up</span>
          </Link>
        </div>
      </div>

      {/* Category Nav Menu */}
      <div className="border-t border-gray-200 bg-white hidden md:block">
        <div className="container mx-auto px-4 max-w-7xl flex items-center gap-8 h-12 text-sm font-bold text-[#0b2545]">
          <Link href="/category/mild-steel" className="hover:text-[var(--color-accent)] transition-colors py-3 border-b-2 border-transparent hover:border-[var(--color-accent)]">Mild Steel</Link>
          <Link href="/category/non-ferrous" className="hover:text-[var(--color-accent)] transition-colors py-3 border-b-2 border-transparent hover:border-[var(--color-accent)]">Non-Ferrous</Link>
          <Link href="/category/polymers" className="hover:text-[var(--color-accent)] transition-colors py-3 border-b-2 border-transparent hover:border-[var(--color-accent)]">Polymers</Link>
          <Link href="/category/chemicals" className="hover:text-[var(--color-accent)] transition-colors py-3 border-b-2 border-transparent hover:border-[var(--color-accent)]">Chemicals</Link>
          <Link href="/category/agri" className="hover:text-[var(--color-accent)] transition-colors py-3 border-b-2 border-transparent hover:border-[var(--color-accent)]">Agriculture</Link>
          <Link href="/category/energy" className="hover:text-[var(--color-accent)] transition-colors py-3 border-b-2 border-transparent hover:border-[var(--color-accent)]">Energy & Petroleum</Link>
          <Link href="/category/building" className="hover:text-[var(--color-accent)] transition-colors py-3 border-b-2 border-transparent hover:border-[var(--color-accent)]">Building & Construction</Link>
        </div>
      </div>
    </header>
  );
}
