"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experience = [
  {
    role: "Experience Designer",
    company: "BCG X",
    location: "New York",
    period: "Jul '23 — Present",
    current: true,
  },
  {
    role: "Experience Designer Intern",
    company: "BCG X",
    location: "New York",
    period: "Jun '22 — Aug '22",
    current: false,
  },
  {
    role: "Design Tutor",
    company: "Pratt Institute",
    location: "New York",
    period: "Jan '22 — May '23",
    current: false,
  },
  {
    role: "Senior UI Designer",
    company: "Fractalink",
    location: "India",
    period: "Jul '18 — Sep '20",
    current: false,
  },
];

const traits = [
  {
    label: "Manager of One",
    desc: "Proactive and self-directed, while staying aligned and collaborative within teams",
  },
  {
    label: "Vision-to-Reality",
    desc: "Turns abstract ideas into clear, high-fidelity, user-centered designs",
  },
  {
    label: "Insightful Solver",
    desc: "Draws meaning from complexity and connects design to purpose",
  },
  {
    label: "Observant & Curious",
    desc: "Picks up on subtle details, patterns, and behaviors others miss",
  },
  {
    label: "End-to-End Owner",
    desc: "Drives projects from research to delivery with autonomy and care",
  },
  {
    label: "Inclusive by Default",
    desc: "Builds thoughtful, usable designs for all — not as a fix, but as a foundation",
  },
];

const expertise = [
  "Product-Driven Design",
  "Designing for Emerging AI Tech",
  "Inclusive & Accessible Design",
  "End-to-End UX Ownership",
  "Enterprise UX",
  "Design Systems",
  "Interactive Prototyping",
  "User Research",
];

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
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

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#F4F0EB]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <FadeIn>
          <p className="text-[12px] font-semibold tracking-widest uppercase text-[#C17A5E] mb-3">
            About
          </p>
          <h2 className="text-[clamp(32px,5vw,52px)] font-semibold text-[#1a1a1a] leading-tight tracking-tight mb-16 max-w-2xl">
            Warm, human design that connects to purpose
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left column */}
          <div className="flex flex-col gap-12">
            {/* Bio */}
            <FadeIn delay={0.05}>
              <p className="text-[16px] text-[#6b6b6b] leading-relaxed">
                I'm a product designer with 5+ years of experience bridging the
                gap between complex systems and the humans who use them. Currently
                at{" "}
                <span className="text-[#1a1a1a] font-medium">BCG X</span> in New
                York, I design AI-powered tools, enterprise platforms, and
                inclusive digital experiences that drive real business outcomes.
              </p>
              <p className="text-[16px] text-[#6b6b6b] leading-relaxed mt-4">
                I believe great design is both rigorous and empathetic — I bring
                structured thinking to ambiguous problems while keeping the focus
                firmly on the people at the center.
              </p>
            </FadeIn>

            {/* Expertise tags */}
            <FadeIn delay={0.1}>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-[#1a1a1a]/40 mb-4">
                Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-[12px] font-medium text-[#1a1a1a] bg-[#FAF8F5] border border-[#E8E3DC]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Experience timeline */}
            <FadeIn delay={0.15}>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-[#1a1a1a]/40 mb-5">
                Experience
              </p>
              <div className="flex flex-col gap-0">
                {experience.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 pb-6 relative"
                  >
                    {/* Timeline line */}
                    {i < experience.length - 1 && (
                      <div className="absolute left-[7px] top-4 bottom-0 w-px bg-[#E8E3DC]" />
                    )}
                    {/* Dot */}
                    <div
                      className={`mt-1 w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 z-10 ${
                        item.current
                          ? "border-[#C17A5E] bg-[#C17A5E]"
                          : "border-[#E8E3DC] bg-[#F4F0EB]"
                      }`}
                    />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[15px] font-medium text-[#1a1a1a]">
                          {item.role}
                        </span>
                        {item.current && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-[#EDD9CE] text-[#C17A5E]">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-[13px] text-[#6b6b6b]">
                        {item.company} · {item.location}
                      </p>
                      <p className="text-[12px] text-[#1a1a1a]/30 mt-0.5">
                        {item.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right column — traits */}
          <FadeIn delay={0.1}>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#1a1a1a]/40 mb-5">
              How I work
            </p>
            <div className="flex flex-col gap-4">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.06,
                  }}
                  className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E3DC] hover:border-[#C17A5E]/30 hover:bg-white transition-all duration-300"
                >
                  <p className="text-[14px] font-semibold text-[#1a1a1a] mb-1">
                    {trait.label}
                  </p>
                  <p className="text-[13px] text-[#6b6b6b] leading-relaxed">
                    {trait.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
