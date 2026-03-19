"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Home() {
  const categories = [
    { name: "Mild Steel", icon: "/category/mild-steel" },
    { name: "Non-Ferrous", icon: "/category/non-ferrous" },
    { name: "Polymers & Packaging", icon: "/category/polymers" },
    { name: "Chemicals", icon: "/category/chemicals" },
    { name: "Energy & Petroleum", icon: "/category/energy" },
    { name: "Building & Construction", icon: "/category/building" },
    { name: "Agriculture", icon: "/category/agri" },
    { name: "Apparel", icon: "/category/apparel" },
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
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center py-10 md:py-16 gap-8">
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
            <div className="w-full max-w-md h-72 bg-gray-100 rounded-lg border border-gray-200 relative overflow-hidden flex items-center justify-center">
              {/* Optional Placeholder for Hero Graphic */}
              <div className="text-gray-400 font-bold text-xl uppercase tracking-widest">[Hero Graphic]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid (Very typical B2B style) */}
      <section id="categories" className="container mx-auto px-4 max-w-7xl pt-12">
        <h2 className="text-2xl font-black text-[#0b2545] mb-6">Explore Our Categories</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <Link href={cat.icon} key={idx} className="flat-card p-6 flex flex-col items-center justify-center text-center group bg-white hover:border-[var(--color-accent)]">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#fff7ed] transition-colors">
                <div className="w-8 h-8 rounded-full bg-gray-300" /> {/* Placeholder icon */}
              </div>
              <h3 className="font-bold text-[#0b2545] group-hover:text-[var(--color-accent)] transition-colors">{cat.name}</h3>
              <span className="text-xs text-blue-600 font-bold mt-2 flex items-center">
                View All <ChevronRight className="w-3 h-3 ml-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 max-w-7xl pt-16">
        <h2 className="text-2xl font-black text-[#0b2545] mb-6">Our Services</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-0 flex flex-col md:flex-row overflow-hidden">
          <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-gray-50 transition-colors">
            <h3 className="text-xl font-bold text-[#0b2545] mb-3">Best Rates</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Direct procurement from manufacturers ensures you get the absolute lowest prices on 500+ categories.</p>
            <Link href="#" className="text-[var(--color-accent)] font-bold text-sm flex items-center">Know More <ChevronRight className="w-4 h-4 ml-1" /></Link>
          </div>
          <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-gray-50 transition-colors">
            <h3 className="text-xl font-bold text-[#0b2545] mb-3">Working Capital</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Collateral-free credit up to ₹2 Crores to keep your business moving without cash flow interruptions.</p>
            <Link href="#" className="text-[var(--color-accent)] font-bold text-sm flex items-center">Know More <ChevronRight className="w-4 h-4 ml-1" /></Link>
          </div>
          <div className="flex-1 p-8 hover:bg-gray-50 transition-colors">
            <h3 className="text-xl font-bold text-[#0b2545] mb-3">Delivery Anywhere</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Robust tech-enabled logistics network guaranteeing on-time delivery across 100+ cities in India.</p>
            <Link href="#" className="text-[var(--color-accent)] font-bold text-sm flex items-center">Know More <ChevronRight className="w-4 h-4 ml-1" /></Link>
          </div>
        </div>
      </section>

      {/* About & Trust */}
      <section className="container mx-auto px-4 max-w-7xl pt-16 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flat-card p-8 bg-white border-l-4 border-l-[var(--color-accent)]">
            <h2 className="text-2xl font-black text-[#0b2545] mb-4">About OfBusiness Group</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              We are India's leading B2B Raw Materials procurement and credit platform, dedicated to revolutionising the SME sector. As a dynamic player in over 7 supply chains, including Steel, Aluminium, Agriculture, Petroleum, Energy, Polymers, Chemicals & more, we aim to add value to the SMEs by providing cheap and high quality raw materials, and access to credit.
            </p>
            <Link href="/about" className="btn-outline text-sm px-6 py-2 mt-2">Read More</Link>
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
