"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-5xl mx-auto">
      <div className="max-w-3xl">
        {/* Pill badge */}
        <FadeUp delay={0} className="inline-flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#C17A5E] animate-pulse" />
          <span className="text-[13px] text-[#6b6b6b] tracking-widest uppercase">
            Open to opportunities
          </span>
        </FadeUp>

        {/* Name */}
        <FadeUp delay={0.1}>
          <h1 className="text-[clamp(48px,8vw,88px)] font-semibold leading-[1.05] tracking-tight text-[#1a1a1a] mb-6">
            Shubhangi
            <br />
            Singh
          </h1>
        </FadeUp>

        {/* Role line */}
        <FadeUp delay={0.25}>
          <p className="text-[clamp(18px,2.5vw,24px)] text-[#6b6b6b] font-light leading-relaxed max-w-xl mb-10">
            Product designer making complex systems feel human —
            <br className="hidden sm:block" />
            currently at{" "}
            <span className="text-[#1a1a1a] font-medium">BCG X</span>, New York.
          </p>
        </FadeUp>

        {/* Meta tags */}
        <FadeUp delay={0.4}>
          <div className="flex flex-wrap gap-3 mb-14">
            {["5+ years exp.", "NYC based", "AI · Enterprise · Accessibility"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-[#E8E3DC] text-[13px] text-[#6b6b6b] bg-[#F4F0EB]"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.5}>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-[#1a1a1a] text-white text-[14px] font-medium hover:bg-[#C17A5E] transition-colors duration-300"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-[#E8E3DC] text-[14px] font-medium text-[#1a1a1a] hover:border-[#C17A5E] hover:text-[#C17A5E] transition-colors duration-300"
            >
              Get in touch
            </a>
          </div>
        </FadeUp>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-24 flex items-center gap-3 text-[#6b6b6b]"
      >
        <div className="w-px h-12 bg-[#E8E3DC]" />
        <span className="text-[12px] tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
