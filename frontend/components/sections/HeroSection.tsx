import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Decorators */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[100px] -z-10 animate-fade-up"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-primary/20 dark:bg-brand-secondary/10 rounded-full blur-[120px] -z-10 animate-fade-up delay-200"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center pb-20">
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-border-color bg-bg-secondary/50 backdrop-blur-md text-sm font-medium animate-fade-up">
                    <span className="text-brand-secondary mr-2">✦</span>
                    ROC Registered &bull; EST 2026
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-up delay-100 max-w-5xl mx-auto">
                    Powering the Future of <br className="hidden md:block" />
                    <span className="gradient-text">Enterprise Distribution</span>
                </h1>

                <p className="text-xl md:text-2xl text-text-secondary mb-10 max-w-3xl mx-auto animate-fade-up delay-200">
                    We build the most reliable, expansive, and efficient distribution networks, seamlessly connecting products with markets through cutting-edge logistics.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
                    <Link href="#contact" className="btn-primary w-full sm:w-auto text-lg">
                        Partner With Us
                        <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>

                    <Link href="#about" className="group px-8 py-4 w-full sm:w-auto text-lg font-medium text-text-primary bg-bg-secondary border border-border-color rounded-xl hover:border-brand-secondary transition-all flex items-center justify-center">
                        Learn More
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>

            {/* Absolute positioning for bottom scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-text-muted">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
