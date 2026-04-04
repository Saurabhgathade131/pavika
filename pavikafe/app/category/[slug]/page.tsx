import Link from "next/link";
import { ChevronRight } from "lucide-react";

const categoryData = {
  "mild-steel": {
    title: "Mild Steel Price Today",
    range: "Available on Request",
    products: [
      { id: "secondary-tmt", name: "Secondary TMT Fe 500D 12mm", origin: "Delhi" },
      { id: "secondary-tmt-fortune", name: "Secondary TMT Fe 500D 12mm", origin: "Mumbai" },
      { id: "secondary-tmt-550", name: "Secondary TMT Fe 550D 8-32mm", origin: "Wardha" },
      { id: "hr-coils", name: "HR Coils 2.5mm & Above", origin: "Raipur" },
    ],
    news: [
      { title: "AM/NS to start work on mega Andhra plant next week", source: "The Economic Times", time: "3 hours ago" },
      { title: "Iron ore dips as rising freight rates impede steel exports", source: "Infra News", time: "6 hours ago" },
    ]
  },
  "non-ferrous": {
    title: "Non-Ferrous Metals Price Today",
    range: "Available on Request",
    products: [
      { id: "aluminium-ingot", name: "Aluminium Ingot", origin: "Mumbai" },
      { id: "copper-wire", name: "Copper Wire Rod", origin: "Delhi" },
      { id: "zinc-ingot", name: "Zinc Ingot", origin: "Kolkata" },
    ],
    news: [
      { title: "Global copper deficit expected to widen in 2026", source: "Reuters", time: "5 hours ago" },
    ]
  }
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const rawTitle = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  // @ts-ignore
  const data = categoryData[slug] || {
    title: `${rawTitle} Prices Today`,
    range: "Prices Vary | Live Rates",
    products: [
      { id: "sample", name: `${rawTitle} Sample Product`, origin: "Various" },
    ],
    news: [
      { title: `Latest updates in the ${rawTitle} sector`, source: "Market Watch", time: "Just now" }
    ]
  };

  return (
    <main className="min-h-screen bg-[#f4f5f9] pb-20">
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3 text-xs text-gray-500">
        <div className="container mx-auto px-4 max-w-7xl flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--color-accent)]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/category" className="hover:text-[var(--color-accent)]">Category</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#0b2545] font-bold tracking-tight">{rawTitle}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl pt-8 flex flex-col lg:flex-row gap-6">
        
        {/* Main Content Area */}
        <div className="w-full lg:w-3/4">
          <div className="flat-card p-6 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-2xl font-black text-[#0b2545] uppercase tracking-tight">{data.title}</h1>
              <p className="text-[var(--color-accent)] font-bold text-lg mt-1">{data.range}</p>
            </div>
          </div>

          <div className="flat-card overflow-hidden">
            <h2 className="bg-gray-50 p-4 border-b border-gray-200 text-lg font-bold text-[#0b2545] uppercase tracking-tight">
              {rawTitle} Most Viewed Categories
            </h2>
            <div className="divide-y divide-gray-200">
              {data.products.map((p: any, idx: number) => (
                <div key={idx} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                     <Link href={`/prices/${slug}/${p.id}`} className="font-bold text-[#0b2545] hover:text-[var(--color-accent)] text-lg transition-colors">
                       {p.name}
                     </Link>
                     <p className="text-sm text-gray-500 mt-1">Origin: <span className="font-bold text-gray-700">{p.origin}</span></p>
                  </div>
                  <div className="mt-4 sm:mt-0 flex flex-col items-end">
                    <button className="btn-orange flex items-center gap-2">
                      Contact for Price
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
              <Link href="/contact" className="text-[var(--color-accent)] font-bold hover:underline">Contact Us for {rawTitle} Pricing</Link>
            </div>
          </div>
        </div>

        {/* Right Sidebar - News */}
        <div className="w-full lg:w-1/4">
          <div className="flat-card overflow-hidden">
            <h2 className="bg-[#0b2545] text-white p-4 text-base font-bold uppercase tracking-tight">
              Live Market News
            </h2>
            <div className="divide-y divide-gray-200">
              {data.news.map((item: any, idx: number) => (
                <div key={idx} className="p-4 hover:bg-gray-50 group cursor-pointer transition-colors">
                  <h4 className="font-bold text-gray-800 text-sm group-hover:text-[var(--color-accent)] leading-snug mb-2 transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-xs text-gray-500">
                    <span className="text-[#0b2545] font-bold">{item.source}</span> • {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
