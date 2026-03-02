"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PackageSearch, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/#services" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="fixed w-full z-50 pointer-events-none"
        >
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 origin-left z-50"
                style={{ scaleX }}
            />

            <div className={`w-full transition-all duration-500 pointer-events-auto ${scrolled ? 'py-4' : 'py-8'}`}>
                <div className="container mx-auto max-w-5xl px-4">
                    <div className={`glass-premium rounded-full border transition-all duration-500 px-6 py-2.5 flex items-center justify-between ${scrolled
                        ? 'bg-white/80 border-white/40 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)] backdrop-blur-xl'
                        : 'bg-white/20 border-white/10 hover:bg-white/40 shadow-none'
                        }`}>

                        {/* Brand */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 via-violet-600 to-sky-400 flex items-center justify-center shadow-lg relative overflow-hidden transition-transform duration-500 group-hover:scale-105">
                                <PackageSearch className="w-4.5 h-4.5 text-white relative z-10" />
                            </div>
                            <span className="font-bold tracking-tighter text-lg text-zinc-900">Pavika</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-semibold transition-all duration-300 relative group py-1 ${pathname === link.href ? "text-indigo-600" : "text-zinc-500 hover:text-zinc-900"
                                        }`}
                                >
                                    {link.name}
                                    <motion.div
                                        className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600 rounded-full origin-left transition-transform duration-300 ${pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                                            }`}
                                    />
                                </Link>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="hidden md:flex items-center gap-4">
                            <Link href="/admin" className="btn-premium text-xs tracking-wider uppercase py-2.5 px-6">
                                Dashboard
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-zinc-600 hover:text-indigo-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden absolute top-full left-4 right-4 mt-2 p-6 rounded-[2rem] glass-premium shadow-2xl overflow-hidden bg-white/95 pointer-events-auto"
                    >
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-5 py-4 rounded-2xl text-base font-semibold transition-all ${pathname === link.href
                                        ? "bg-indigo-50 text-indigo-600 shadow-sm"
                                        : "text-zinc-600 hover:bg-zinc-50"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/admin"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 px-5 py-4 rounded-2xl bg-zinc-900 text-white text-base font-semibold text-center hover:bg-black transition-all shadow-xl active:scale-95"
                            >
                                Dashboard
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
