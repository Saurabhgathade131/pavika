"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-light)] to-[var(--color-accent)] origin-left z-50"
                style={{ scaleX }}
            />

            <div className={`w-full transition-all duration-500 pointer-events-auto ${scrolled ? 'py-4' : 'py-8'}`}>
                <div className="container mx-auto max-w-5xl px-4">
                    <div className={`glass-premium rounded-full border transition-all duration-500 px-6 py-2.5 flex items-center justify-between ${scrolled
                        ? 'bg-[var(--color-primary)]/95 border-[var(--color-accent)]/20 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl'
                        : 'bg-[var(--color-primary)]/50 border-[var(--color-accent)]/10 hover:bg-[var(--color-primary)]/80 shadow-none'
                        }`}>

                        {/* Brand */}
                        <Link href="/" className="flex items-center group">
                            <div className="relative w-36 h-10 transition-transform duration-500 group-hover:scale-105">
                                <Image src="/pavika-logo.jpg" alt="Pavika Logo" fill className="object-contain object-left" priority />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-semibold transition-all duration-300 relative group py-1 ${pathname === link.href ? "text-[var(--color-accent)]" : "text-zinc-300 hover:text-[var(--color-accent-light)]"
                                        }`}
                                >
                                    {link.name}
                                    <motion.div
                                        className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-accent)] rounded-full origin-left transition-transform duration-300 ${pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
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
                            className="md:hidden p-2 text-zinc-300 hover:text-[var(--color-accent)] transition-colors"
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
                        className="md:hidden absolute top-full left-4 right-4 mt-2 p-6 rounded-[2rem] glass-premium shadow-2xl overflow-hidden bg-[var(--color-primary-light)]/95 pointer-events-auto"
                    >
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-5 py-4 rounded-2xl text-base font-semibold transition-all ${pathname === link.href
                                        ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)] shadow-sm"
                                        : "text-zinc-300 hover:bg-white/5"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/admin"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 px-5 py-4 rounded-2xl bg-[var(--color-accent)] text-[var(--color-primary-dark)] text-base font-semibold text-center hover:opacity-90 transition-all shadow-xl active:scale-95"
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
