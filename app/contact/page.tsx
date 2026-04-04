"use client";

import Link from "next/link";
import { ArrowLeft, Building2, Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", requirements: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", requirements: "" });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-[var(--color-accent)] mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Contact Our Team</h1>
            <p className="text-slate-600 font-medium text-lg">Partner with PAVIKA Network. Let's optimize your supply chain.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-8">
               <div>
                 <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2 mb-3"><Building2 className="w-5 h-5 text-[var(--color-accent)]"/> Corporate Office</h3>
                 <p className="text-slate-600 font-medium leading-relaxed">
                   PAVIKA Distribution Network Pvt Ltd.<br/>
                   Block C, Sector 44, Gurugram,<br/>
                   Haryana 122003, India
                 </p>
               </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2 mb-3"><Phone className="w-5 h-5 text-[var(--color-accent)]"/> Phone Support</h3>
                  <p className="text-slate-600 font-medium">+91 73000 15127</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2 mb-3"><Mail className="w-5 h-5 text-[var(--color-accent)]"/> Official Emails</h3>
                  <div className="space-y-2">
                    <p className="text-[var(--color-accent)] font-bold text-sm">Sales: sales@pavikadistributionnetwork.com</p>
                    <p className="text-[var(--color-accent)] font-bold text-sm">Director: jay@pavikadistributionnetwork.com</p>
                    <p className="text-[var(--color-accent)] font-bold text-xs opacity-75">Corporate: pavikadistributionnetwork@pavikadistributionnetwork.com</p>
                  </div>
                </div>
             </div>

             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                {isSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in zoom-in-95 duration-500">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">Request Received!</h3>
                    <p className="text-slate-500 text-sm font-medium mb-6">Our procurement specialist will contact you within 24 hours.</p>
                    <button onClick={() => setIsSuccess(false)} className="text-[var(--color-accent)] font-bold text-xs uppercase tracking-widest hover:underline">Send another inquiry</button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-bold text-slate-900 text-xl mb-4">Send an Inquiry</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input 
                          required
                          type="text" 
                          placeholder="Full Name" 
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none text-slate-900" 
                        />
                      </div>
                      <div>
                        <input 
                          required
                          type="email" 
                          placeholder="Business Email" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none text-slate-900" 
                        />
                      </div>
                      <div>
                        <textarea 
                          required
                          rows={4} 
                          placeholder="Your Requirements (Material, Grade, Quantity)" 
                          value={formData.requirements}
                          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none text-slate-900 resize-none"></textarea>
                      </div>
                      <button 
                        disabled={isSubmitting}
                        type="submit" 
                        className="btn-premium w-full py-4 tracking-wide font-bold flex items-center justify-center gap-2 group disabled:opacity-50"
                      >
                        {isSubmitting ? "Processing..." : (
                          <>Submit Request <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                        )}
                      </button>
                    </form>
                  </>
                )}
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
