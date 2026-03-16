"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "shubhangisingh10@gmail.com",
    href: "mailto:shubhangisingh10@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shubhangisingh10",
    href: "https://www.linkedin.com/in/shubhangisingh10/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Website",
    value: "shubhangisingh.com",
    href: "https://shubhangisingh.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <FadeIn>
              <p className="text-[12px] font-semibold tracking-widest uppercase text-[#C17A5E] mb-3">
                Contact
              </p>
              <h2 className="text-[clamp(32px,5vw,52px)] font-semibold text-[#1a1a1a] leading-tight tracking-tight mb-6">
                Let's make something worth using.
              </h2>
              <p className="text-[16px] text-[#6b6b6b] leading-relaxed max-w-sm">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello — my inbox is always open.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-10 flex flex-col gap-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-[#E8E3DC] bg-[#F4F0EB] hover:border-[#C17A5E]/40 hover:bg-[#FAF8F5] transition-all duration-300"
                  >
                    <span className="text-[#6b6b6b] group-hover:text-[#C17A5E] transition-colors duration-300">
                      {link.icon}
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold tracking-widest uppercase text-[#1a1a1a]/40 mb-0.5">
                        {link.label}
                      </p>
                      <p className="text-[14px] text-[#1a1a1a] group-hover:text-[#C17A5E] transition-colors duration-300">
                        {link.value}
                      </p>
                    </div>
                    <svg
                      className="ml-auto text-[#1a1a1a]/20 group-hover:text-[#C17A5E]/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right — decorative card */}
          <FadeIn delay={0.15}>
            <div className="rounded-2xl bg-[#F4F0EB] border border-[#E8E3DC] p-8 md:p-10">
              <div className="w-12 h-12 rounded-xl bg-[#EDD9CE] flex items-center justify-center mb-6">
                <span className="text-[20px] font-semibold text-[#C17A5E]">S</span>
              </div>
              <blockquote className="text-[20px] font-medium text-[#1a1a1a] leading-snug tracking-tight mb-6">
                "Great design doesn't just solve problems — it makes people feel
                seen."
              </blockquote>
              <div className="flex items-center gap-3 pt-6 border-t border-[#E8E3DC]">
                <div className="w-9 h-9 rounded-full bg-[#C17A5E] flex items-center justify-center">
                  <span className="text-[12px] font-semibold text-white">SS</span>
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#1a1a1a]">Shubhangi Singh</p>
                  <p className="text-[12px] text-[#6b6b6b]">Experience Designer · BCG X</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
