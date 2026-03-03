"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Building2, Send, CheckCircle2, Globe2, ShieldCheck, Zap } from "lucide-react";
import { useState, useRef } from "react";

// --- Spotlight Card Component ---
function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className={`spotlight-card bento-card ${className}`}
            style={{
                ["--mouse-x" as any]: `${position.x}px`,
                ["--mouse-y" as any]: `${position.y}px`,
            }}
        >
            {children}
        </div>
    );
}

// --- Animated Input Component ---
function AnimatedInput({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className="space-y-2 group">
            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 ml-1 transition-colors group-focus-within:text-accent">{label}</label>
            <div className="relative">
                <input
                    {...props}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="input-premium relative z-10"
                />
                <motion.div
                    initial={false}
                    animate={{ scaleX: isFocused ? 1 : 0, opacity: isFocused ? 1 : 0 }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-light to-accent z-20 origin-left rounded-full"
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
            </div>
        </div>
    );
}

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate premium network latency
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <div className="flex flex-col min-h-screen bg-primary selection:bg-accent/10">
            {/* Ultra Header */}
            <section className="relative pt-40 pb-24 md:pt-60 md:pb-40 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.03)_0%,_transparent_70%)]" />
                <div className="container relative z-10 max-w-5xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                            Scale your <br />
                            <span className="text-gradient-premium">Reach.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium leading-relaxed">
                            Connect with our infrastructure architects to build yours. We're ready to engineer your future distribution grid.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Array */}
            <section className="pb-32 relative z-10">
                <div className="container max-w-7xl px-6">
                    <div className="grid lg:grid-cols-12 gap-10">

                        {/* Node Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-5 space-y-10"
                        >
                            <SpotlightCard className="p-10 md:p-12 bg-primary flex flex-col justify-between group">
                                <div>
                                    <div className="flex items-center gap-5 mb-10">
                                        <div className="w-16 h-16 rounded-3xl bg-primary-dark flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110">
                                            <Building2 className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-black text-white tracking-tighter">Global HQ</h2>
                                            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1"> राजस्थान, भारत</p>
                                        </div>
                                    </div>

                                    <div className="space-y-10">
                                        <div className="flex items-start gap-6 group/item">
                                            <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center shrink-0 transition-colors group-hover/item:bg-primary-light">
                                                <Mail className="w-6 h-6 text-accent" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Comms Node</p>
                                                <a href="mailto:pavikadistributionnetwork@gmail.com" className="text-lg font-bold text-white hover:text-accent transition-colors break-all">
                                                    pavikadistributionnetwork@gmail.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-6 group/item">
                                            <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center shrink-0 transition-colors group-hover/item:bg-sky-100">
                                                <MapPin className="w-6 h-6 text-sky-600" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Physical Node</p>
                                                <p className="text-lg font-bold text-white leading-tight">
                                                    Flat 108, Ground Floor, C-8, <br />
                                                    Parth Enclave, Ram Vihar, <br />
                                                    Jaipur, Rajasthan 302033
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-20 pt-10 border-t border-accent/10 flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-400">
                                                {String.fromCharCode(64 + i)}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Active nodes</p>
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        {/* Form Node */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-7"
                        >
                            <SpotlightCard className="p-10 md:p-14 bg-primary h-full relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    {isSubmitted ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                            className="h-full flex flex-col items-center justify-center py-20 text-center"
                                        >
                                            <div className="relative mb-12">
                                                <motion.div
                                                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                                                    transition={{ duration: 5, repeat: Infinity }}
                                                    className="w-32 h-32 rounded-[2.5rem] bg-emerald-500 flex items-center justify-center shadow-[0_20px_50px_rgba(16,185,129,0.3)]"
                                                >
                                                    <CheckCircle2 className="w-16 h-16 text-white" />
                                                </motion.div>
                                                {/* Celebratory Particles */}
                                                {[Zap, Globe2, ShieldCheck].map((Icon, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, y: 0 }}
                                                        animate={{ opacity: [0, 1, 0], y: [-50, -100], x: (i - 1) * 30 }}
                                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                                        className="absolute top-0 left-1/2"
                                                    >
                                                        <Icon className="w-6 h-6 text-emerald-300" />
                                                    </motion.div>
                                                ))}
                                            </div>
                                            <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">Transmission Successful</h3>
                                            <p className="text-zinc-400 text-xl font-medium max-w-sm mx-auto leading-relaxed">
                                                Your request has been routed to our core engineers. Standby for initialization.
                                            </p>
                                            <button
                                                onClick={() => setIsSubmitted(false)}
                                                className="mt-12 text-sm font-bold text-accent hover:text-accent-dark transition-colors uppercase tracking-widest"
                                            >
                                                Send another packet
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                        >
                                            <div className="mb-14">
                                                <h2 className="text-4xl font-black text-white tracking-tighter mb-4">Initialize Channel</h2>
                                                <p className="text-zinc-400 text-lg font-medium">Define your operational parameters below.</p>
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-8">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <AnimatedInput label="Controller Name" required type="text" placeholder="Full Name" />
                                                    <AnimatedInput label="Entity Reference" required type="text" placeholder="Company Name" />
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <AnimatedInput label="Secure Email" required type="email" placeholder="professional@email.com" />
                                                    <AnimatedInput label="Direct Line" required type="tel" placeholder="+91 XXX XXX XXXX" />
                                                </div>

                                                <div className="space-y-2 group">
                                                    <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 ml-1">Protocol / Requirements</label>
                                                    <div className="relative">
                                                        <textarea
                                                            required
                                                            rows={5}
                                                            className="input-premium resize-none relative z-10"
                                                            placeholder="Describe your scale requirements, volume, and target nodes..."
                                                        />
                                                    </div>
                                                </div>

                                                <div className="pt-6">
                                                    <motion.button
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className="btn-premium w-full py-5 text-lg font-black group overflow-hidden"
                                                    >
                                                        <span className="relative z-10 flex items-center justify-center gap-3">
                                                            {isSubmitting ? (
                                                                <motion.div
                                                                    animate={{ rotate: 360 }}
                                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                                >
                                                                    <Globe2 className="w-5 h-5" />
                                                                </motion.div>
                                                            ) : (
                                                                <>
                                                                    Transmit Data
                                                                    <Send className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                                                </>
                                                            )}
                                                        </span>
                                                    </motion.button>
                                                </div>
                                            </form>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </SpotlightCard>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}
