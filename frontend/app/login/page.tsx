"use client";

import Link from "next/link";
import { Lock } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f4f5f9] flex flex-col items-center justify-center p-4">
      
      <Link href="/" className="mb-8">
         <div className="relative w-48 h-12">
            <Image src="/pavika-logo.jpg" alt="Pavika" fill className="object-contain" />
         </div>
      </Link>

      <div className="w-full max-w-md flat-card p-8 text-center border-t-4 border-t-[var(--color-accent)]">
        <Lock className="w-12 h-12 text-[#0b2545] mx-auto mb-4" />
        <h1 className="text-xl font-black text-[#0b2545] mb-2">Login / Register</h1>
        <p className="text-sm text-gray-600 mb-8">Access 4,00,000+ Raw Material Prices Instantly</p>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Proceeding to Mock OTP."); }}>
          <div className="text-left">
            <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Number</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm font-bold text-gray-900 bg-gray-100 border border-r-0 border-gray-300 rounded-l">
                +91
              </span>
              <input
                type="tel"
                className="flex-1 min-w-0 block w-full px-3 py-2 text-sm border border-gray-300 focus:ring-1 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] rounded-r outline-none"
                placeholder="Enter 10 digit mobile number"
                maxLength={10}
                required
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-[#0b2545] hover:bg-gray-800 text-white font-bold py-3 px-4 rounded transition-colors text-sm">
            Get OTP
          </button>
        </form>

        <p className="text-[10px] text-gray-500 mt-6 leading-relaxed">
          By continuing, you agree to PAVIKA's <Link href="#" className="underline hover:text-[#0b2545]">Terms of Use</Link> and <Link href="#" className="underline hover:text-[#0b2545]">Privacy Policy</Link>
        </p>
      </div>

      <div className="mt-12 flex gap-8 text-sm font-bold text-gray-500">
         <div className="flex flex-col items-center"><span className="text-[#0b2545] text-lg">500+</span> Categories</div>
         <div className="flex flex-col items-center"><span className="text-[#0b2545] text-lg">100+</span> Cities</div>
         <div className="flex flex-col items-center"><span className="text-[#0b2545] text-lg">50k+</span> SMEs</div>
      </div>
    </main>
  );
}
