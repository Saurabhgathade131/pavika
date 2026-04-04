import Link from "next/link";
import { ArrowLeft, Building2, Globe2, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-20 pb-32">
      <div className="bg-slate-50 border-b border-slate-200 py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <Image src="https://images.unsplash.com/photo-1504917595217-d4f3b2591e1d?q=80&w=2000&auto=format&fit=crop" fill className="object-cover" alt="Industrial Grid" />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent" />
        </div>
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-[var(--color-accent)] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
              Empowering India's Manufacturing Backbone.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              We are India's leading B2B Raw Materials procurement and credit platform, dedicated to revolutionising the SME sector across 7+ supply chains.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-6">Our Dual Role Advantage</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
              As a dynamic player in over 7 supply chains—including Steel, Aluminium, Agriculture, Petroleum, Polymers, and Chemicals—we aim to add immense value to SMEs.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              By providing high-quality raw materials at the lowest rates and offering structural access to working capital, our unique positioning as both Supplier and Manufacturer sets us apart in the market.
            </p>
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
             <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" fill className="object-cover" alt="Steel Manufacturing" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <Globe2 className="w-10 h-10 text-[var(--color-accent)] mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">100+ Cities</h3>
            <p className="text-slate-600 font-medium text-sm">Nationwide logistics distribution grid.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <Users className="w-10 h-10 text-[var(--color-accent)] mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">50,000+ SMEs</h3>
            <p className="text-slate-600 font-medium text-sm">Trusted by growing businesses across India.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <Building2 className="w-10 h-10 text-[var(--color-accent)] mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">7+ Supply Chains</h3>
            <p className="text-slate-600 font-medium text-sm">Comprehensive material sourcing expertise.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <ShieldCheck className="w-10 h-10 text-[var(--color-accent)] mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">₹2Cr+ Credit</h3>
            <p className="text-slate-600 font-medium text-sm">Collateral-free working capital lines.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
