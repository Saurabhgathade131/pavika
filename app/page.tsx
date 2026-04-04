"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Home() {
  const categories = [
    { name: "Mild Steel", slug: "mild-steel", image: "/categories/mild-steel.png" },
    { name: "Non-Ferrous", slug: "non-ferrous", image: "/categories/non-ferrous.png" },
    { name: "Polymers", slug: "polymers", image: "/categories/polymers.png" },
    { name: "Chemicals", slug: "chemicals", image: "/categories/chemicals.png" },
    { name: "Energy & Petroleum", slug: "energy", image: "/categories/energy.png" },
    { name: "Building & Construction", slug: "building", image: "/categories/building.png" },
    { name: "Agriculture", slug: "agriculture", image: "/categories/agriculture.png" },
    { name: "Apparel", slug: "apparel", image: "/categories/apparel.png" },
  ];

  return (
    <main className="min-h-screen bg-[#f4f5f9] pb-20">
      
      {/* Simple Ticker */}
      <div className="bg-white border-b border-gray-200 overflow-hidden text-xs py-2 shadow-sm">
        <div className="flex animate-marquee whitespace-nowrap gap-8">
           <span className="font-bold text-[#0b2545]">Aluminium Ingot (Mumbai): <span className="text-[var(--color-accent)]">Contact for Price</span></span>
           <span className="font-bold text-[#0b2545]">Secondary TMT (Delhi): <span className="text-[var(--color-accent)]">Contact for Price</span></span>
           <span className="font-bold text-[#0b2545]">Bitumen VG30 (Kandla): <span className="text-[var(--color-accent)]">Contact for Price</span></span>
           <span className="font-bold text-[#0b2545]">PVC (Mundra): <span className="text-[var(--color-accent)]">Contact for Price</span></span>
           <span className="font-bold text-[#0b2545]">HR Coils (Raipur): <span className="text-[var(--color-accent)]">Contact for Price</span></span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center py-10 md:py-16 gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-black text-[#0b2545] leading-none mb-6 tracking-tighter">
              India's Largest <span className="text-[var(--color-accent)]">B2B Raw Materials</span> Procurement Platform
            </h1>
            <p className="text-lg text-gray-600 mb-8 font-medium">
              Get instant quotes for 500+ Categories across Steel, Aluminium, Agri and more. Partner with PAVIKA to optimize your supply chain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-orange text-base px-10 py-4 shadow-xl">
                Get Instant Quotes
              </Link>
              <Link href="#categories" className="btn-outline text-base px-10 py-4 bg-white shadow-sm">
                Explore Categories
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="w-full max-w-xl h-[450px] bg-gray-100 rounded-3xl border-4 border-white shadow-2xl relative overflow-hidden group">
              <Image 
                src="/hero-industrial.png" 
                alt="Industrial Supply Chain" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/60 to-transparent flex items-end p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                  <p className="text-white font-bold text-xs uppercase tracking-widest mb-1">Global Network</p>
                  <p className="text-white text-lg font-black leading-tight">Empowering 5000+ SMEs Across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categories" className="container mx-auto px-4 max-w-7xl pt-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black text-[#0b2545] tracking-tight">Industrial Categories</h2>
            <p className="text-gray-500 font-medium font-sm mt-1">Direct Procurement from Certified Manufacturers</p>
          </div>
          <Link href="/category" className="text-[var(--color-accent)] font-black text-sm flex items-center gap-1 hover:gap-2 transition-all">
            VIEW ALL CATALOG <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <Link href={`/category/${cat.slug}`} key={idx} className="group relative h-64 overflow-hidden rounded-2xl border border-gray-200 hover:border-[var(--color-accent)] transition-all bg-white shadow-sm hover:shadow-xl">
              <Image 
                src={cat.image} 
                alt={cat.name} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-black text-white text-xl mb-1">{cat.name}</h3>
                <span className="text-[var(--color-accent)] text-xs font-black tracking-widest uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                  Browse Catalog <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 max-w-7xl pt-24">
        <h2 className="text-3xl font-black text-[#0b2545] mb-8 text-center tracking-tight underline h-1 decoration-[var(--color-accent)] underline-offset-8">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-white">
          <div className="p-10 border-b md:border-b-0 md:border-r border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#0b2545]">
               <ArrowRight className="w-6 h-6 transform -rotate-45" />
            </div>
            <h3 className="text-2xl font-black text-[#0b2545] mb-4">Direct Rates</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">Direct procurement from manufacturers ensures you get the absolute lowest prices on 500+ categories.</p>
            <Link href="/contact" className="text-[var(--color-accent)] font-black text-sm flex items-center gap-1 hover:gap-2 transition-all uppercase tracking-wider">Contact Sales <ChevronRight className="w-4 h-4" /></Link>
          </div>
          <div className="p-10 border-b md:border-b-0 md:border-r border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#0b2545]">
               <ArrowRight className="w-6 h-6 transform -rotate-45" />
            </div>
            <h3 className="text-2xl font-black text-[#0b2545] mb-4">Capital Support</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">Collateral-free credit up to ₹2 Crores to keep your business moving without cash flow interruptions.</p>
            <Link href="/contact" className="text-[var(--color-accent)] font-black text-sm flex items-center gap-1 hover:gap-2 transition-all uppercase tracking-wider">Get Funded <ChevronRight className="w-4 h-4" /></Link>
          </div>
          <div className="p-10 hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#0b2545]">
               <ArrowRight className="w-6 h-6 transform -rotate-45" />
            </div>
            <h3 className="text-2xl font-black text-[#0b2545] mb-4">Tech Logistics</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">Robust tech-enabled logistics network guaranteeing on-time delivery across 100+ cities in India.</p>
            <Link href="/contact" className="text-[var(--color-accent)] font-black text-sm flex items-center gap-1 hover:gap-2 transition-all uppercase tracking-wider">Track Shipment <ChevronRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* About & Trust */}
      <section className="container mx-auto px-4 max-w-7xl pt-24 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flat-card p-10 bg-white border-l-8 border-l-[var(--color-accent)] relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-5 -translate-y-1/4 translate-x-1/4">
               <Image src="/pavika-logo.jpg" alt="Watermark" width={300} height={300} unoptimized />
            </div>
            <h2 className="text-3xl font-black text-[#0b2545] mb-6 tracking-tight">Pavika Distribution Network</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-8 font-medium">
              India's leading B2B Raw Materials procurement and credit platform, dedicated to revolutionising the SME sector. As a dynamic player in over 7 supply chains, including Steel, Aluminium, Agriculture, Petroleum, Energy, Polymers, Chemicals & more.
            </p>
            <Link href="/about" className="btn-premium px-10 py-4">Our Full Vision</Link>
          </div>

          <div className="flat-card p-8 bg-white">
            <h2 className="text-2xl font-black text-[#0b2545] mb-4">What Our Customers Say</h2>
            <div className="bg-gray-50 p-6 rounded border border-gray-200 text-sm text-gray-700 italic leading-relaxed">
              "As Managing Director of a renewable materials supplier company serving Indian Railways, solar industry, and commercial sectors, we encountered shipment delays, working capital shortages, and high raw material costs. OfBusiness streamlined procurement, reduced working capital cycles, and helped us cut interest costs significantly."
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <span className="block font-bold text-[#0b2545] text-sm">Managing Director</span>
                <span className="block text-xs text-gray-500">Renewable Materials Supplier</span>
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
