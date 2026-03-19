"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Box, Cuboid, Package, FlaskConical, Zap, HardHat, Sprout, Shirt, Banknote, ShieldCheck, Truck } from "lucide-react";

export default function Home() {
  const categories = [
    { name: "Mild Steel", icon: "/category/mild-steel", Logo: Box },
    { name: "Non-Ferrous", icon: "/category/non-ferrous", Logo: Cuboid },
    { name: "Polymers & Packaging", icon: "/category/polymers", Logo: Package },
    { name: "Chemicals", icon: "/category/chemicals", Logo: FlaskConical },
    { name: "Energy & Petroleum", icon: "/category/energy", Logo: Zap },
    { name: "Building & Construction", icon: "/category/building", Logo: HardHat },
    { name: "Agriculture", icon: "/category/agri", Logo: Sprout },
    { name: "Apparel", icon: "/category/apparel", Logo: Shirt },
  ];

  return (
    <main className="min-h-screen bg-[#f4f5f9] pb-20">
      
      {/* Simple Ticker */}
      <div className="bg-white border-b border-gray-200 overflow-hidden text-xs py-2 shadow-sm">
        <div className="flex animate-marquee whitespace-nowrap gap-8">
           <span className="font-bold text-gray-800">Aluminium Ingot (Mumbai): <span className="text-red-500">₹220/Kg</span></span>
           <span className="font-bold text-gray-800">Secondary TMT (Delhi): <span className="text-green-600">₹50,900/MT</span></span>
           <span className="font-bold text-gray-800">Bitumen VG30 (Kandla): <span className="text-green-600">₹45,500/MT</span></span>
           <span className="font-bold text-gray-800">PVC (Mundra): <span className="text-green-600">₹85/Kg</span></span>
           <span className="font-bold text-gray-800">HR Coils (Raipur): <span className="text-red-500">₹55,000/MT</span></span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 relative overflow-hidden">
        {/* Subtle background industrial watermark */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
           <Image src="https://images.unsplash.com/photo-1504917595217-d4f3b2591e1d?q=80&w=1200&auto=format&fit=crop" alt="Industrial Grid pattern" fill className="object-cover" />
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center py-10 md:py-16 gap-8 relative z-10">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-black text-[#0b2545] leading-tight mb-4">
              India's Largest B2B Raw Materials Procurement & Credit Platform
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Get latest raw materials prices, news and instant quotes for 500+ Categories across Steel, Aluminium, Agri and more.
            </p>
            <div className="flex gap-4">
              <Link href="/login" className="btn-orange text-base px-8 py-3">
                Get Instant Quotes
              </Link>
              <Link href="#categories" className="btn-outline text-base px-8 py-3 bg-white">
                Explore Categories
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="w-full max-w-lg h-80 rounded-lg shadow-lg border-4 border-white relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" alt="Steel Manufacturing Plant" fill className="object-cover hover:scale-105 transition-transform duration-700" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid (Very typical B2B style) */}
      <section id="categories" className="container mx-auto px-4 max-w-7xl pt-12">
        <h2 className="text-2xl font-black text-[#0b2545] mb-6">Explore Our Categories</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => {
            const Icon = cat.Logo;
            return (
            <Link href={cat.icon} key={idx} className="flat-card p-6 flex flex-col items-center justify-center text-center group bg-white hover:border-[var(--color-accent)]">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#fff7ed] transition-colors border border-blue-100 group-hover:border-[var(--color-accent)]/30">
                <Icon className="w-8 h-8 text-[#0b2545] group-hover:text-[var(--color-accent)] transition-colors" />
              </div>
              <h3 className="font-bold text-[#0b2545] group-hover:text-[var(--color-accent)] transition-colors">{cat.name}</h3>
              <span className="text-xs text-blue-600 font-bold mt-2 flex items-center">
                View All <ChevronRight className="w-3 h-3 ml-0.5" />
              </span>
            </Link>
          )})}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 max-w-7xl pt-16">
        <h2 className="text-2xl font-black text-[#0b2545] mb-6">Our Services</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-0 flex flex-col md:flex-row overflow-hidden shadow-sm">
          <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-gray-50 transition-colors group">
            <div className="w-12 h-12 bg-gray-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-4 border border-gray-200 transition-colors">
               <Banknote className="w-6 h-6 text-[#0b2545] group-hover:text-[var(--color-accent)]" />
            </div>
            <h3 className="text-xl font-bold text-[#0b2545] mb-3">Best Rates</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Direct procurement from manufacturers ensures you get the absolute lowest prices on 500+ categories.</p>
            <Link href="#" className="text-[var(--color-accent)] font-bold text-sm flex items-center">Know More <ChevronRight className="w-4 h-4 ml-1" /></Link>
          </div>
          <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-gray-50 transition-colors group">
            <div className="w-12 h-12 bg-gray-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-4 border border-gray-200 transition-colors">
               <ShieldCheck className="w-6 h-6 text-[#0b2545] group-hover:text-[var(--color-accent)]" />
            </div>
            <h3 className="text-xl font-bold text-[#0b2545] mb-3">Working Capital</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Collateral-free credit up to ₹2 Crores to keep your business moving without cash flow interruptions.</p>
            <Link href="#" className="text-[var(--color-accent)] font-bold text-sm flex items-center">Know More <ChevronRight className="w-4 h-4 ml-1" /></Link>
          </div>
          <div className="flex-1 p-8 hover:bg-gray-50 transition-colors group">
            <div className="w-12 h-12 bg-gray-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-4 border border-gray-200 transition-colors">
               <Truck className="w-6 h-6 text-[#0b2545] group-hover:text-[var(--color-accent)]" />
            </div>
            <h3 className="text-xl font-bold text-[#0b2545] mb-3">Delivery Anywhere</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Robust tech-enabled logistics network guaranteeing on-time delivery across 100+ cities in India.</p>
            <Link href="#" className="text-[var(--color-accent)] font-bold text-sm flex items-center">Know More <ChevronRight className="w-4 h-4 ml-1" /></Link>
          </div>
        </div>
      </section>

      {/* About & Trust */}
      <section className="container mx-auto px-4 max-w-7xl pt-16 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flat-card bg-[#0b2545] border-l-4 border-l-[var(--color-accent)] relative overflow-hidden group">
            <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" alt="Corporate" fill className="object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
            <div className="p-8 relative z-10 text-white">
              <h2 className="text-2xl font-black mb-4">About PAVIKA Group</h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-6 font-medium">
                We are India's leading B2B Raw Materials procurement and credit platform, dedicated to revolutionising the SME sector. As a dynamic player in over 7 supply chains, including Steel, Aluminium, Agriculture, Petroleum, Energy, Polymers, Chemicals & more, we aim to add value to the SMEs by providing cheap and high quality raw materials, and access to credit.
              </p>
              <Link href="/about" className="btn-orange border border-[var(--color-accent)] text-sm px-6 py-2">Read More</Link>
            </div>
          </div>

          <div className="flat-card p-8 bg-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-0"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-black text-[#0b2545] mb-4">What Our Customers Say</h2>
              <div className="bg-gray-50/80 p-6 rounded-lg border border-gray-200 text-sm text-gray-700 italic leading-relaxed shadow-inner">
                "As Managing Director of a renewable materials supplier company serving Indian Railways, solar industry, and commercial sectors, we encountered shipment delays, working capital shortages, and high raw material costs. PAVIKA streamlined procurement, reduced working capital cycles, and helped us cut interest costs significantly."
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 relative overflow-hidden">
                     <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop" alt="Customer Profile" fill className="object-cover" />
                  </div>
                  <div>
                    <span className="block font-bold text-[#0b2545] text-base">Jayprakash Thakur</span>
                    <span className="block text-xs text-gray-500 font-medium tracking-wide">Director</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </main>
  );
}
