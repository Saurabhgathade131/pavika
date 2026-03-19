import Link from "next/link";
import { Lock, TrendingUp, TrendingDown, ChevronRight, Building2, MapPin } from "lucide-react";
import { auth } from "../../../../auth";

export default async function ProductPricingPage({ params }: { params: { category: string, slug: string } }) {
  const { category, slug } = await params;
  const session = await auth();
  const isAuthenticated = !!session;
  
  const catTitle = category.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const productTitle = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  const mockPrices = [
    { location: "Delhi", supplier: "NEXUS Core", price: "₹50,900/MT", change: "+0.5%", up: true, locked: false },
    { location: "Delhi", supplier: "VORTEX Metals", price: "₹50,100/MT", change: "0%", up: true, locked: false },
    { location: "Gurugram", supplier: "B Index", price: "₹51,500/MT", change: "-0.2%", up: false, locked: true },
    { location: "Ahmedabad", supplier: "Vibrant Core", price: "₹52,100/MT", change: "+0.8%", up: true, locked: true },
    { location: "Mumbai", supplier: "Jai Balaji", price: "₹53,000/MT", change: "-1.1%", up: false, locked: true },
    { location: "Wardha", supplier: "Sangam Steel", price: "₹52,400/MT", change: "+0.4%", up: true, locked: true },
  ];

  return (
    <main className="min-h-screen bg-[#f4f5f9] pb-32">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-3 text-xs text-gray-500">
        <div className="container mx-auto px-4 max-w-7xl flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--color-accent)]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={`/category/${category}`} className="hover:text-[var(--color-accent)]">{catTitle}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#0b2545] font-bold">{productTitle}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl pt-8">
        
        <div className="flat-card p-6 mb-6">
          <h1 className="text-2xl font-black text-[#0b2545] mb-2">
            {productTitle} Prices Today
          </h1>
          <p className="text-sm text-gray-500 font-bold mb-4">
            Live rates across Indian industrial hubs. All prices Ex-warehouse.
          </p>
        </div>

        <div className="flat-card overflow-hidden">
          <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-bold text-[#0b2545]">Live Market Prices</h2>
            <span className="text-xs font-bold bg-green-100 text-green-800 px-2 py-1 rounded">Updated Recently</span>
          </div>
          
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 bg-white text-xs font-bold text-gray-500 uppercase tracking-wider">
            <div className="col-span-6 md:col-span-5">Location & Supplier</div>
            <div className="col-span-6 md:col-span-7 text-right">Price/MT (INR)</div>
          </div>

          <div className="divide-y divide-gray-200">
            {mockPrices.map((item, idx) => {
              const isLocked = item.locked && !isAuthenticated;
              return (
                <div key={idx} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-gray-50">
                  <div className="col-span-6 md:col-span-5 flex items-start gap-3">
                    <div className="hidden sm:flex w-8 h-8 bg-gray-100 items-center justify-center border border-gray-200 shrink-0">
                      <MapPin className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0b2545] text-sm">{item.location}</h3>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><Building2 className="w-3 h-3" /> {item.supplier}</p>
                    </div>
                  </div>

                  <div className="col-span-6 md:col-span-7 flex justify-end">
                    {isLocked ? (
                      <Link href="/login" className="btn-orange text-xs flex items-center gap-1.5 py-1.5 px-3">
                        <Lock className="w-3 h-3" /> Login To View
                      </Link>
                    ) : (
                      <div className="text-right">
                        <span className="font-black text-gray-800 text-base block">{item.price}</span>
                        <span className={`text-xs font-bold flex items-center justify-end mt-0.5 ${item.up ? 'text-green-600' : 'text-red-500'}`}>
                          {item.up ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                          {item.change}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          {!isAuthenticated && (
            <div className="p-6 bg-gray-50 border-t border-gray-200 text-center">
              <Link href="/login" className="text-[var(--color-accent)] font-bold text-sm hover:underline block mb-2">
                Login Now to Get Free Access to 4,00,000+ Prices
              </Link>
              <p className="text-xs text-gray-500">Join 50,000+ businesses making data-driven procurement decisions.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
