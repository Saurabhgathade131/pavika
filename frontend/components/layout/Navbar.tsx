import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 glass-panel border-0 border-b rounded-none bg-[var(--color-primary)]/80">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between pointer-events-auto">
                <Link href="/" className="flex items-center">
                    <div className="relative w-36 h-10">
                        <Image
                            src="/pavika-logo.jpg"
                            alt="Pavika Distribution Network Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#services" className="text-sm text-zinc-300 font-medium hover:text-[var(--color-accent)] transition-colors">
                        Services
                    </Link>
                    <Link href="#about" className="text-sm text-zinc-300 font-medium hover:text-[var(--color-accent)] transition-colors">
                        About ROC
                    </Link>
                    <Link href="#contact" className="btn-premium py-2 px-6 text-sm">
                        Partner With Us
                    </Link>
                </div>

                {/* Mobile menu button could go here in future */}
                <button className="md:hidden p-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
            </div>
        </nav>
    );
}
