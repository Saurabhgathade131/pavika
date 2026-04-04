import Link from "next/link";
import Image from "next/image";
import { ChevronRight, LayoutGrid, BarChart3, ShieldCheck } from "lucide-react";

const categories = [
  { id: "mild-steel", name: "Mild Steel", items: "12+ Products", desc: "TMT Bars, HR/CR Coils, Plates, and more.", img: "/categories/mild-steel.png" },
  { id: "non-ferrous", name: "Non-Ferrous", items: "8+ Products", desc: "Aluminium, Copper, Zinc, and Lead alloys.", img: "/categories/non-ferrous.png" },
  { id: "polymers", name: "Polymers", items: "15+ Products", desc: "PVC Resin, HDPE, LLDPE, and PP Granules.", img: "/categories/polymers.png" },
  { id: "chemicals", name: "Chemicals", items: "20+ Products", desc: "Caustic Soda, Methanol, Soda Ash, and Acids.", img: "/categories/chemicals.png" },
  { id: "agri", name: "Agriculture", items: "10+ Products", desc: "Sugar, Wheat, Maize, and Soya Commodities.", img: "/categories/agriculture.png" },
  { id: "energy", name: "Energy", items: "6+ Products", desc: "Bitumen, Base Oil, and Petroleum Coke.", img: "/categories/energy.png" },
  { id: "building", name: "Building", items: "10+ Products", desc: "Cement, RMC, and Construction Materials.", img: "/categories/building.png" },
  { id: "apparel", name: "Apparel", items: "8+ Products", desc: "Yarns, Fabrics, and Textile Raw Materials.", img: "/categories/apparel.png" },
];

export default function CategoryCatalog() {
  return (
    <main className="min-h-screen bg-[#f4f5f9] pb-32">
      {/* Hero Section */}
      <div className="relative bg-[#0b2545] py-24 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
             <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase mb-6 leading-tight">
               Product <span className="text-[var(--color-accent)] underline decoration-white/20 underline-offset-8">Catalog</span>
             </h1>
             <p className="text-white/80 text-xl font-medium leading-relaxed">
               India's most comprehensive B2B supply chain for raw materials. Source directly from verified manufacturers.
             </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-accent)]/10 to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              href={`/category/${cat.id}`}
              className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src={cat.img} 
                  alt={cat.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-black text-[#0b2545] uppercase tracking-tight">{cat.name}</h3>
                  <span className="text-[10px] font-black text-[var(--color-accent)] bg-orange-50 px-2 py-1 rounded-full uppercase tracking-widest">{cat.items}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 h-12 overflow-hidden italic line-clamp-2">
                   {cat.desc}
                </p>
                <div className="flex items-center gap-2 text-[#0b2545] font-black text-xs uppercase tracking-widest group-hover:text-[var(--color-accent)] transition-colors">
                  Explore Supply Chain <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Trust Ticker */}
      <div className="container mx-auto px-4 max-w-7xl mt-24">
         <div className="bg-white rounded-[40px] border border-gray-100 p-12 flex flex-col md:flex-row items-center justify-around gap-8 text-center md:text-left shadow-sm">
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0b2545]">
                  <LayoutGrid className="w-8 h-8" />
               </div>
               <div>
                  <h4 className="font-black text-[#0b2545] uppercase text-sm tracking-widest">8+ Supply Chains</h4>
                  <p className="text-gray-400 text-xs font-bold uppercase">Diverse Portfolio</p>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-[var(--color-accent)]">
                  <ShieldCheck className="w-8 h-8" />
               </div>
               <div>
                  <h4 className="font-black text-[#0b2545] uppercase text-sm tracking-widest">Verified Sources</h4>
                  <p className="text-gray-400 text-xs font-bold uppercase">Quality Guaranteed</p>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600">
                  <BarChart3 className="w-8 h-8" />
               </div>
               <div>
                  <h4 className="font-black text-[#0b2545] uppercase text-sm tracking-widest">Live Market Rates</h4>
                  <p className="text-gray-400 text-xs font-bold uppercase">Transparent Pricing</p>
               </div>
            </div>
         </div>
      </div>
    </main>
  );
}
