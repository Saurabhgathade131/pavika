import Link from "next/link";
import { ChevronRight, BarChart3, Truck, ShieldCheck, Banknote, Briefcase, Zap } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Procurement & Sourcing",
      desc: "Direct access to primary and secondary manufacturers across India. We source high-quality raw materials at scale.",
      icon: <Briefcase className="w-8 h-8" />,
      points: ["Verified Manufacturers", "Quality Assurance", "Bulk Discounts", "Vast Inventory"]
    },
    {
      title: "Supply Chain Finance",
      desc: "Unlock your working capital with our specialized credit solutions for SMEs. Grow your business without financial friction.",
      icon: <Banknote className="w-8 h-8" />,
      points: ["Flexible Credit", "Low interest rates", "Quick Approval", "Scale with Ease"]
    },
    {
      title: "Logistics & Delivery",
      desc: "Efficient pan-India logistics network. We ensure your raw materials reach your factory floor on time, every time.",
      icon: <Truck className="w-8 h-8" />,
      points: ["Real-time Tracking", "Safe Handling", "Pan-India Network", "On-time Delivery"]
    },
    {
      title: "Market Insights",
      desc: "Real-time pricing data and market reports to help you make informed procurement decisions based on global trends.",
      icon: <BarChart3 className="w-8 h-8" />,
      points: ["Live Market Rates", "Trend Analysis", "Expert Reports", "Price Intelligence"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#f4f5f9] pb-32">
      {/* Hero Section */}
      <div className="bg-[#0b2545] py-24 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 leading-tight">
                Our <span className="text-[var(--color-accent)] underline decoration-white/20 underline-offset-8">Solutions</span>
              </h1>
              <p className="text-white/80 text-xl font-medium leading-relaxed">
                Empowering Indian MSMEs through streamlined procurement, logistics, and supply chain financing.
              </p>
           </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl -mt-16 relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-[40px] border border-gray-200 p-8 md:p-12 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                 <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0b2545] mb-8">
                    {service.icon}
                 </div>
                 <h2 className="text-3xl font-black text-[#0b2545] uppercase tracking-tight mb-4 leading-tight">{service.title}</h2>
                 <p className="text-gray-500 text-lg leading-relaxed mb-8 italic">{service.desc}</p>
                 <ul className="grid grid-cols-2 gap-4 mb-10">
                    {service.points.map((p, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400">
                         <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" /> {p}
                      </li>
                    ))}
                 </ul>
                 <Link href="/contact" className="btn-orange flex items-center gap-2 w-fit uppercase font-black tracking-widest text-xs px-8">
                    Book Consultation <ChevronRight className="w-4 h-4" />
                 </Link>
              </div>
            ))}
         </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 max-w-7xl mt-32">
         <div className="bg-[#0b2545] rounded-[60px] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
               <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-8 leading-tight">
                 Ready to <span className="text-[var(--color-accent)]">Scale</span> Your Business?
               </h2>
               <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12 font-medium italic leading-relaxed">
                 Partner with Pavika for end-to-end supply chain excellence. From raw material sourcing to expert financing.
               </p>
               <button className="bg-white text-[#0b2545] px-12 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-[var(--color-accent)] hover:text-white transition-all shadow-xl">
                 Get Started Today
               </button>
            </div>
            {/* Design Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full -ml-32 -mb-32 blur-3xl" />
         </div>
      </div>
    </main>
  );
}
