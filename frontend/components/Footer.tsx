import Link from "next/link";
import { PackageSearch, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#09090b] text-zinc-400 border-t border-white/5 relative overflow-hidden">
            {/* Subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

            <div className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-4 xl:gap-12">

                    {/* Brand & Mission (Spans 2 cols) */}
                    <div className="xl:col-span-2 space-y-8">
                        <Link href="/" className="flex items-center gap-2 group w-fit">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center">
                                <PackageSearch className="h-4 w-4 text-white" />
                            </div>
                            <span className="text-2xl font-black tracking-tight text-white group-hover:text-indigo-400 transition-colors">Pavika</span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-md text-zinc-500 hover:text-zinc-400 transition-colors">
                            Architecting the future of logistics. We provide state-of-the-art enterprise distribution networks engineered for massive scale, reliability, and unparalleled speed.
                        </p>

                        {/* Social Links - Premium Pills */}
                        <div className="flex items-center gap-3">
                            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-zinc-400 hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-zinc-400 hover:text-white">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div>
                            <h3 className="text-xs font-semibold leading-6 text-white uppercase tracking-widest mb-6">Platform</h3>
                            <ul role="list" className="space-y-4">
                                <li>
                                    <Link href="/#services" className="text-sm leading-6 flex items-center group w-fit">
                                        <span className="hover:text-white transition-colors">Core Services</span>
                                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-indigo-400" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/admin" className="text-sm leading-6 flex items-center group w-fit">
                                        <span className="hover:text-white transition-colors">Admin Portal</span>
                                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-indigo-400" />
                                    </Link>
                                </li>
                                <li>
                                    <span className="text-sm leading-6 text-zinc-600 block">System Status: <span className="text-emerald-500 inline-block ml-1">● Operational</span></span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xs font-semibold leading-6 text-white uppercase tracking-widest mb-6">Company</h3>
                            <ul role="list" className="space-y-4">
                                <li><Link href="/contact" className="text-sm leading-6 hover:text-white transition-colors">About Us</Link></li>
                                <li><Link href="/contact" className="text-sm leading-6 hover:text-white transition-colors">Contact Sales</Link></li>
                                <li><span className="text-sm leading-6 text-zinc-600">CIN: U46909RJ2026PTC111559</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs leading-5 text-zinc-500">
                        &copy; {new Date().getFullYear()} Pavika Distribution Network Pvt Ltd. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-zinc-500">
                        <Link href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
