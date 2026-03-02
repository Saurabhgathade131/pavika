import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 glass-panel border-0 border-b rounded-none bg-white/80 dark:bg-slate-900/80">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between pointer-events-auto">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-10 h-10">
                        {/* The generated logo pavika_logo.png will be used here */}
                        <Image
                            src="/pavika_logo_1772426701948.png"
                            alt="Pavika Distribution Network Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">
                        Pavika <span className="text-brand-secondary">Distribution</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#services" className="text-sm font-medium hover:text-brand-secondary transition-colors">
                        Services
                    </Link>
                    <Link href="#about" className="text-sm font-medium hover:text-brand-secondary transition-colors">
                        About ROC
                    </Link>
                    <Link href="#contact" className="btn-primary py-2 px-6 text-sm">
                        Partner With Us
                    </Link>
                </div>

                {/* Mobile menu button could go here in future */}
                <button className="md:hidden p-2 text-text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
            </div>
        </nav>
    );
}
