"use client";

import Link from "next/link";
import { ArrowLeft, Building2, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f4f5f9] pt-32 pb-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[var(--color-accent)] mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-sm">
          <div className="mb-12 text-center text-[#0b2545]">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 uppercase">Contact Our Team</h1>
            <p className="text-gray-600 font-medium text-lg">Partner with PAVIKA Network. Let's optimize your supply chain.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-8">
               <div>
                 <h3 className="font-bold text-[#0b2545] text-lg flex items-center gap-2 mb-3 tracking-tight"><Building2 className="w-5 h-5 text-[var(--color-accent)]"/> Corporate Office</h3>
                 <p className="text-gray-600 font-medium leading-relaxed">
                   PAVIKA Distribution Network Pvt Ltd.<br/>
                   Block C, Sector 44, Gurugram,<br/>
                   Haryana 122003, India
                 </p>
               </div>
               <div>
                 <h3 className="font-bold text-[#0b2545] text-lg flex items-center gap-2 mb-3 tracking-tight"><Phone className="w-5 h-5 text-[var(--color-accent)]"/> Phone Support</h3>
                 <p className="text-gray-600 font-medium">1800-889-9999 (Toll Free)</p>
               </div>
               <div>
                 <h3 className="font-bold text-[#0b2545] text-lg flex items-center gap-2 mb-3 tracking-tight"><Mail className="w-5 h-5 text-[var(--color-accent)]"/> Email</h3>
                 <p className="text-[var(--color-accent)] font-bold">contact@pavika.com</p>
               </div>
             </div>

             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-[#0b2545] text-xl mb-4 tracking-tight uppercase">Send an Inquiry</h3>
                <form className="space-y-4">
                  <div>
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none text-[#0b2545]" />
                  </div>
                  <div>
                    <input type="email" placeholder="Business Email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none text-[#0b2545]" />
                  </div>
                  <div>
                    <textarea rows={4} placeholder="Your Requirements" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none text-[#0b2545] resize-none"></textarea>
                  </div>
                  <button type="button" className="btn-orange w-full py-4 tracking-wide font-bold uppercase transition-colors">
                    Submit Request
                  </button>
                </form>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
