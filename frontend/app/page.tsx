"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, ShieldCheck, Globe, MapPin, BarChart3, Clock, Link as LinkIcon, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// --- Spotlight Card Component ---
function SpotlightCard({ children, className = "", innerClassName = "" }: { children: React.ReactNode, className?: string, innerClassName?: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-card bento-card ${className}`}
      style={{
        ["--mouse-x" as any]: `${position.x}px`,
        ["--mouse-y" as any]: `${position.y}px`,
      }}
    >
      <div className={innerClassName}>{children}</div>
    </div>
  );
}

// --- Character Reveal Component ---
function CharReveal({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.2em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.8,
                delay: (wordIndex * 0.1) + (charIndex * 0.03),
                ease: [0.16, 1, 0.3, 1]
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <main className="min-h-screen relative overflow-hidden bg-primary selection:bg-accent/10">
      <div className="bg-mesh" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-52 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <motion.div style={{ opacity, scale }} className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/40 border border-black/5 backdrop-blur-md shadow-sm mb-10"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">A New Era of Distribution</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-10 leading-[0.9] flex flex-col items-center">
            <CharReveal text="Distribution," />
            <CharReveal text="Engineered for" className="text-gradient-premium" />
            <CharReveal text="Scale." />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
          >
            Architecting high-velocity supply chains for the next generation of global infrastructure. Ultra-reliable. Hyper-connected.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button className="btn-premium group">
              Start Partnership
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="px-10 py-4 rounded-full font-bold text-white bg-primary border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all">
              Our Infrastructure
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Industry Trust Section */}
      <section className="py-20 border-y border-accent/10 bg-primary/50 backdrop-blur-sm relative z-10 overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-center text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 mb-12">Trusted by Industry Systems</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {["NEXUS", "ORBIT", "QUANTUM", "VORTEX", "APEX"].map((logo) => (
              <span key={logo} className="text-2xl md:text-3xl font-black tracking-tighter text-white">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section V2 */}
      <section className="py-24 bg-primary relative z-10">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 divide-x divide-zinc-100">
            <div className="text-center md:px-4">
              <div className="text-5xl font-black tracking-tighter text-white mb-2">99.9%</div>
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Delivery Success</div>
            </div>
            <div className="text-center md:px-4">
              <div className="text-5xl font-black tracking-tighter text-white mb-2">5K+</div>
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Daily Shipments</div>
            </div>
            <div className="text-center md:px-4">
              <div className="text-5xl font-black tracking-tighter text-white mb-2">100+</div>
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Cities Covered</div>
            </div>
            <div className="text-center md:px-4">
              <div className="text-5xl font-black tracking-tighter text-white mb-2">24/7</div>
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Active Tracking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Box Section V2 */}
      <section id="services" className="py-32 md:py-48 bg-primary relative z-10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">Platform Infrastructure</h2>
              <p className="text-zinc-400 text-xl font-medium leading-relaxed">Everything you need to orchestrate mass-scale logistics, distilled into a single, high-fidelity network.</p>
            </div>
            <div className="pb-2">
              <button className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all duration-300">
                View Full Capabilities <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {/* Main Featured Bento */}
            <SpotlightCard className="md:col-span-2 md:row-span-2 p-10 md:p-14 min-h-[500px] flex flex-col justify-between group">
              <div>
                <div className="w-16 h-16 rounded-3xl bg-primary-light flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-4xl font-black tracking-tighter text-white mb-5">Nationwide Grid</h3>
                <p className="text-zinc-400 text-lg font-medium leading-relaxed max-w-md">Our expansive network covers over 100 cities, providing a seamless pipeline from central hubs to last-mile endpoints.</p>
              </div>
              <div className="mt-12 h-48 bg-primary/50 rounded-[2rem] border border-accent/10 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MapPin className="w-16 h-16 text-accent-light" />
                </motion.div>
                <div className="absolute bottom-6 left-6 right-6 h-1 bg-zinc-200/50 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-accent w-1/3"
                  />
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="md:col-span-2 p-10 bg-primary-dark text-white min-h-[350px]">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-10">
                <ShieldCheck className="w-7 h-7 text-sky-400" />
              </div>
              <h3 className="text-3xl font-black tracking-tighter mb-4">Ironclad Security</h3>
              <p className="text-zinc-400 text-lg font-medium leading-relaxed">Bank-grade security protocols for high-value cargo. Verified custody chains and end-to-end encryption.</p>
            </SpotlightCard>

            <SpotlightCard className="p-10 flex flex-col items-center text-center justify-center">
              <Activity className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">Live Analytics</h3>
              <p className="text-zinc-400 text-sm font-medium">Real-time telemetry and predictive ETAs.</p>
            </SpotlightCard>

            <SpotlightCard className="p-10 flex flex-col items-center text-center justify-center">
              <Clock className="w-10 h-10 text-violet-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">Velocity Focus</h3>
              <p className="text-zinc-400 text-sm font-medium">Optimized routing for maximal speed.</p>
            </SpotlightCard>

            {/* API Bento V2 */}
            <SpotlightCard className="md:col-span-2 p-10 flex items-center justify-between group overflow-hidden">
              <div className="max-w-[60%]">
                <h3 className="text-2xl font-black tracking-tighter text-white mb-3">Seamless Integration</h3>
                <p className="text-zinc-400 text-base font-medium">Connect your ERP via our robust REST APIs in minutes.</p>
              </div>
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-2 border-dashed border-zinc-200 flex items-center justify-center animate-spin-slow group-hover:border-accent/20 transition-colors">
                  <LinkIcon className="w-8 h-8 text-zinc-300 group-hover:text-accent-light transition-colors" />
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="md:col-span-2 p-10 bg-accent text-white group cursor-pointer hover:bg-accent-dark transition-colors">
              <h3 className="text-3xl font-black tracking-tighter mb-4">View All Features</h3>
              <p className="text-accent-light text-lg font-medium mb-8">Discover our full architectural stack.</p>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-accent transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </section>

      {/* Ultra CTA V2 */}
      <section className="py-48 relative overflow-hidden bg-primary z-10">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-6xl md:text-9xl font-black tracking-[ -0.05em] text-white mb-10 leading-[0.8] flex flex-col">
            <span>Ready to</span>
            <span className="text-gradient-premium">Optimize?</span>
          </h2>
          <p className="text-xl md:text-3xl text-zinc-400 mb-14 max-w-3xl mx-auto font-medium leading-relaxed">
            Engineered for the demands of modern scale. Join the network today.
          </p>
          <button className="btn-premium px-12 py-5 text-xl">
            Connect with Enterprise
          </button>
        </div>
      </section>
    </main>
  );
}
