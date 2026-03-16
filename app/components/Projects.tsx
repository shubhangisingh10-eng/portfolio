"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    number: "01",
    title: "Scalable GTM Platform",
    subtitle: "Enterprise Growth for an HR Tech Company",
    tags: ["UI/UX Design", "Design System", "Interactive Prototyping"],
    description:
      "Sole designer on a 14-person team modernizing a go-to-market platform for enterprise sales. Led end-to-end UX from discovery to engineering-ready specs. Designs are in production and scheduled for the next release.",
    impact: [
      "Endorsed by C-suite executives, aligning leadership on the platform's North Star vision",
      "Delivered technically feasible, engineering-ready designs enabling faster build cycles",
      "Positioned to drive higher adoption and clearer pipeline management at launch",
    ],
    color: "#E8DDD5",
    accentColor: "#C17A5E",
  },
  {
    number: "02",
    title: "AI-Powered B2B Sales Tool",
    subtitle: "Modernizing Energy Sales Through Automation",
    tags: ["UI/UX Design", "AI Product", "Interactive Prototyping"],
    description:
      "Sole designer on a senior team (PM, Partner, four MDs) creating an AI-driven sales tool for a leading energy company. Translated complex ML capabilities into intuitive sales workflows with smart coaching nudges and auto-generated proposals.",
    impact: [
      "CEO personally presented the tool at the annual sales conference",
      "120+ sales reps expressed immediate enthusiasm for the simplified workflow",
      "Targeted €100M+ in margin growth through smarter deal prioritization",
      "Aimed to reduce sales cycle time by 30% and cut proposal effort by 50%",
    ],
    color: "#DDE4DC",
    accentColor: "#5E8A6E",
  },
  {
    number: "03",
    title: "Digital Checking Redesign",
    subtitle: "Better Engagement & Retention for a Financial Institution",
    tags: ["Research", "Concept Testing", "User Interviews"],
    description:
      "Led UX design, concepting, and prototyping for a financial institution looking to modernize its checking product. Created personalized tools tailored to different life stages — from irregular income support to financial wellness nudges.",
    impact: [
      "Validated features through user feedback confirming strong demand",
      "Targeted 100K+ new account openings by making checking more relevant",
      "Aimed to unlock $100M+ in lifetime customer value through improved retention",
    ],
    color: "#DDD8E8",
    accentColor: "#7A6EA8",
  },
  {
    number: "04",
    title: "Transit Innovation Platform",
    subtitle: "User-Led Product Design for a Regional Transit Authority",
    tags: ["User Co-Design", "UI/UX Design", "MVP Prototyping"],
    description:
      "From 100+ frontline ideas, 10 were pitched to transit leadership — I designed 5 of them. Two were greenlit for MVP build. My prototypes helped maintenance crews visualize digital workflows, driving clarity and executive buy-in.",
    impact: [
      "Two prototypes moved to MVP development, directly influencing maintenance operations",
      "Earned leadership buy-in by translating field pain points into tangible product concepts",
      "User-driven designs tested with technicians in real conditions",
    ],
    color: "#E5DDD4",
    accentColor: "#A07850",
  },
  {
    number: "05",
    title: "Digital Accessibility at BCG",
    subtitle: "Advancing Inclusion Across Marketing Channels",
    tags: ["Accessibility Audit", "WCAG", "Design Strategy"],
    description:
      "Partnered with DEI, brand, and product teams at BCG to assess digital assets, identify gaps, and align on best practices. Translated audit findings into actionable design guidance across web, social, and multimedia content.",
    impact: [
      "Informed the foundation of BCG's first marketing-wide accessibility strategy",
      "Created tactical design recommendations now being implemented across channels",
      "Contributed to the first draft of BCG's digital accessibility statement",
    ],
    color: "#E4DDE8",
    accentColor: "#8A6E9E",
  },
  {
    number: "06",
    title: "Skills Over Degrees",
    subtitle: "Design for Economic Mobility in Texas",
    tags: ["UI/UX Design", "User Testing", "Social Impact"],
    description:
      "Designed a prototype helping students and job seekers without four-year degrees discover high-potential, skill-based career paths. The experience guided users through training options, wage outcomes, and support resources.",
    impact: [
      "Positioned non-degree pathways as credible, navigable, and desirable",
      "Prototype became a catalyst for stakeholder engagement and decision-making",
      "Advanced the case for equitable, user-centered workforce solutions at scale",
    ],
    color: "#DDEADF",
    accentColor: "#4E8A6A",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className="group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[#E8E3DC] hover:border-[#C17A5E]/40 transition-all duration-500 hover:shadow-lg hover:shadow-[#C17A5E]/5"
    >
      {/* Image placeholder */}
      <div
        className="relative h-56 md:h-auto min-h-[220px] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: project.color }}
      >
        <div className="flex flex-col items-center gap-3 opacity-40 group-hover:opacity-60 transition-opacity duration-300">
          <div
            className="w-16 h-16 rounded-2xl"
            style={{ backgroundColor: project.accentColor }}
          />
          <div
            className="w-10 h-2 rounded-full"
            style={{ backgroundColor: project.accentColor }}
          />
          <div
            className="w-14 h-2 rounded-full"
            style={{ backgroundColor: project.accentColor }}
          />
        </div>
        <span className="absolute top-5 left-5 text-[12px] font-medium tracking-widest text-[#1a1a1a]/40">
          {project.number}
        </span>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col justify-between bg-[#FAF8F5] group-hover:bg-[#F7F3EF] transition-colors duration-300">
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide text-[#6b6b6b] bg-[#F0EBE5] border border-[#E8E3DC]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-[20px] font-semibold text-[#1a1a1a] leading-snug mb-1">
            {project.title}
          </h3>
          <p className="text-[13px] text-[#C17A5E] font-medium mb-4">
            {project.subtitle}
          </p>
          <p className="text-[14px] text-[#6b6b6b] leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Impact */}
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#1a1a1a]/40 mb-3">
              Impact
            </p>
            <ul className="space-y-2">
              {project.impact.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: project.accentColor }}
                  />
                  <span className="text-[13px] text-[#6b6b6b] leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-[12px] font-semibold tracking-widest uppercase text-[#C17A5E] mb-3">
            Selected Work
          </p>
          <h2 className="text-[clamp(32px,5vw,52px)] font-semibold text-[#1a1a1a] leading-tight tracking-tight max-w-lg">
            Projects that shaped my craft
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
