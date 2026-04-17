import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import WorkCard from '../components/WorkCard.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import TagChip from '../components/TagChip.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './HomePage.css'

/* ---------- DATA ---------- */
const projects = [
  {
    number: 'PROJECT 01',
    tags: ['UI/UX Design', 'Design System', 'Interactive Prototyping'],
    title: 'Redesigning a Complex Sales Workflow for Scale',
    category: 'Enterprise Growth · HR Tech',
    description:
      'Sole designer on a 14-person team modernizing a go-to-market platform for enterprise sales. Led end-to-end UX from discovery to engineering-ready specs.',
    impact: [
      'Endorsed by C-suite executives, aligning leadership on the North Star vision',
      'Delivered engineering-ready designs enabling faster build cycles',
      'Positioned to drive higher adoption at launch',
    ],
    bgColor: '#1C2B3A',
    image: '/Case Study 1 Square.png',
    route: '/case-study/sales-workflow-redesign',
    stamp: { emoji: '🏢', label: 'Enterprise\nSaaS' },
  },
  {
    number: 'PROJECT 02',
    tags: ['GenAI', 'UX Strategy', 'Enterprise', 'B2B Sales'],
    title: 'Reimagining Sales Enablement with GenAI for a Global Energy Company',
    category: 'Energy · GenAI · B2B Sales Enablement',
    description:
      'Sole designer on a GenAI-powered sales tool for a major energy company. Spent 3 days embedded in live sales training, then designed a prototype the CEO unveiled at the Annual Sales Conference to 120+ reps.',
    impact: [
      '€100M+ additional margin potential',
      '30% reduction in sales cycle time',
      '50% less time spent on proposal creation',
    ],
    bgColor: '#1A2B1E',
    image: '/Case Study 3 Square.png',
    route: '/case-study/genai-sales-enablement',
    stamp: { emoji: '⚡', label: 'Gen AI\nB2B Sales' },
  },
  {
    number: 'PROJECT 03',
    tags: ['UX Strategy', 'Conversion Optimization', 'A/B Testing'],
    title: 'Designing a DTC Patient Activation Journey That Drives Action',
    category: 'Healthcare · Direct-to-Consumer · Patient Experience',
    description:
      'Redesigned a healthcare DTC experience to drive patient action. Ran A/B tests across content structure, messaging, and entry points to identify what actually moves users forward.',
    impact: [
      '~90% higher CTR for caregivers with optimized messaging',
      '2× engagement lift from readiness-focused themes',
      '7–9% CTR on FAQ dropdown interactions',
    ],
    bgColor: '#1E3028',
    image: '/Case Study 2 Square.png',
    route: '/case-study/dtc-patient-activation',
    stamp: { emoji: '🩺', label: 'Healthcare\nDTC' },
  },
]

const expertiseTags = [
  'Product-Driven Design',
  'AI UX Strategy',
  'Inclusive & Accessible Design',
  'End-to-End UX Ownership',
  'Enterprise UX',
  'Design Systems',
  'Interactive Prototyping',
]

const experience = [
  {
    current: true,
    role: 'Experience Designer',
    tag: 'Current',
    company: 'BCG X · New York',
    period: "Jul '23 — Present",
  },
  {
    current: false,
    role: 'Experience Designer Intern',
    company: 'BCG X · New York',
    period: "Jun '22 — Aug '22",
  },
  {
    current: false,
    role: 'Design Tutor',
    company: 'Pratt Institute · New York',
    period: "Jan '22 — May '23",
  },
  {
    current: false,
    role: 'Senior UI Designer',
    company: 'Fractalink · India',
    period: "Jul '18 — Sep '20",
  },
]

const tickerText =
  'PRODUCT DESIGN ✦ ENTERPRISE UX ✦ AI PRODUCTS ✦ DESIGN SYSTEMS ✦ USER RESEARCH ✦ ACCESSIBILITY ✦ INTERACTION DESIGN ✦ PROTOTYPING ✦ BCG X ✦ 5+ YEARS ✦ '

/* ── Scroll-driven timeline ── */
function ScrollTimeline({ experience }) {
  const containerRef = useRef(null)
  const lineRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current
      const line = lineRef.current
      if (!container || !line) return

      const { top, height } = container.getBoundingClientRect()
      const windowH = window.innerHeight

      // How far we've scrolled into the timeline (0→1)
      const progress = Math.min(1, Math.max(0, (windowH * 0.6 - top) / height))
      line.style.height = `${progress * 100}%`

      // Light up dots
      const items = container.querySelectorAll('.tl-item')
      items.forEach((item, i) => {
        const itemTop = item.getBoundingClientRect().top
        if (itemTop < windowH * 0.65) setActiveIndex(i)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="about__timeline reveal" data-delay="4" ref={containerRef}>
      {/* Track */}
      <div className="tl-track">
        <div className="tl-track__bg" />
        <div className="tl-track__fill" ref={lineRef} />
      </div>

      {/* Items */}
      <div className="tl-items">
        {experience.map((exp, i) => (
          <div key={i} className={`tl-item ${exp.current ? 'tl-item--current' : ''} ${i <= activeIndex ? 'tl-item--active' : ''}`}>
            <span className="tl-dot" />
            <div className="timeline-content">
              <div className="timeline-role">
                {exp.role}
                {exp.current && <span className="timeline-tag">Current</span>}
              </div>
              <div className="timeline-company">{exp.company} · {exp.location}</div>
              <div className="timeline-period">{exp.period}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  useScrollReveal()

  // Magnetic pull on pill buttons — cursor drags them slightly toward itself
  useEffect(() => {
    const buttons = document.querySelectorAll('.pill-btn, .pill-btn-ghost')

    const onMove = (e) => {
      const btn = e.currentTarget
      const rect = btn.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width  / 2) * 0.28
      const y = (e.clientY - rect.top  - rect.height / 2) * 0.28
      btn.style.transition = 'transform 0.08s ease'
      btn.style.transform  = `translate(${x}px, ${y}px)`
    }

    const onLeave = (e) => {
      const btn = e.currentTarget
      btn.style.transition = 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease'
      btn.style.transform  = 'translate(0, 0)'
    }

    buttons.forEach(btn => {
      btn.addEventListener('mousemove',  onMove)
      btn.addEventListener('mouseleave', onLeave)
    })
    return () => {
      buttons.forEach(btn => {
        btn.removeEventListener('mousemove',  onMove)
        btn.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <main className="home">
      {/* ======================== HERO ======================== */}
      <section className="hero">
        <div className="hero__aurora" aria-hidden="true">
          <div className="hero__blob hero__blob--1" />
          <div className="hero__blob hero__blob--2" />
          <div className="hero__blob hero__blob--3" />
          <div className="hero__blob hero__blob--4" />
        </div>
        <div className="hero__grain" aria-hidden="true" />

        <div className="hero__inner">
          {/* Left: text content */}
          <div className="hero__content">
            <h1 className="hero__headline">Hi! I'm Shubhangi</h1>
            <p className="hero__sub">
              <em className="hero__em">Product Designer</em> with <em className="hero__em">5+ Years</em> of experience,
              blending curiosity, human insight, and strategy to shape meaningful digital experiences.
            </p>
            <div className="hero__logos">
              <span className="hero__logo-label">WORK AT</span>
              <img src="/Logos/Logo 1.svg" alt="BCG" className="hero__logo" />
              <span className="hero__logo-divider" />
              <span className="hero__logo-label">STUDIED AT</span>
              <img src="/Logos/Logo 2.svg" alt="Pratt Institute" className="hero__logo" />
              <img src="/Logos/Logo 3.svg" alt="NID" className="hero__logo" />
            </div>
            <div className="hero__tags">
              <span className="badge hero__tag">0 TO 1 PRODUCTS</span>
              <span className="badge hero__tag">AI POWERED UX</span>
              <span className="badge hero__tag">NYC BASED</span>
            </div>
          </div>

          {/* Right: NYC photo as found photograph */}
          <div className="hero__photo-col">
            <div className="hero__photo-frame">
              <img
                src="/hero-nyc.jpg"
                alt="Shubhangi working at BCG X office with NYC skyline view"
                className="hero__image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================== TICKER ======================== */}
      <section className="ticker" aria-hidden="true">
        <div className="ticker__track">
          <span className="ticker__text">{tickerText}</span>
          <span className="ticker__text" aria-hidden="true">{tickerText}</span>
        </div>
      </section>

      {/* ======================== WORK ======================== */}
      <section id="work" className="work">
        <div className="work__header">
          <img src="/Project.svg" className="section-icon reveal" alt="" aria-hidden="true" />
          <h2 className="work__title reveal" data-delay="1">Selected Work</h2>
          <p className="work__sub reveal" data-delay="2">Hover to explore — click to read the full story.</p>
        </div>
        <div className="work__cards">
          {projects.map((p, i) => (
            <div key={p.number} className="reveal" data-delay={String(i)}>
              <WorkCard {...p} />
            </div>
          ))}
        </div>
      </section>

      {/* ======================== ABOUT ======================== */}
      <section id="about" className="about">
        <div className="about__inner">
          {/* Left col */}
          <div className="about__left">
            <img src="/About.svg" className="section-icon reveal" alt="" aria-hidden="true" />
            <p className="about__label reveal" data-delay="1">About</p>
            <h2 className="about__heading reveal" data-delay="2">
              Bridging complex systems and the humans who use them.
            </h2>
            <p className="about__bio reveal" data-delay="3">
              I'm a product designer with 5+ years of experience bridging complex systems and
              the humans who use them. Currently at BCG X in New York, designing AI-powered
              tools, enterprise platforms, and inclusive digital experiences.
            </p>
            <p className="about__bio reveal" data-delay="3">
              I believe great design is both rigorous and empathetic — structured thinking
              applied to ambiguous problems, with the focus firmly on people.
            </p>

            {/* Expertise tags */}
            <div className="about__tags reveal" data-delay="4">
              {expertiseTags.map((t) => (
                <span key={t} className="badge hero__tag">{t}</span>
              ))}
            </div>

            {/* Experience timeline — scroll-driven */}
            <ScrollTimeline experience={experience} />
          </div>

          {/* Right col */}
          <div className="about__right">
            <div className="about__portrait-wrap reveal" data-delay="2">
              <img
                src="/portrait.jpg"
                alt="Shubhangi Singh"
                className="about__portrait"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================== CONTACT ======================== */}
      <section id="contact" className="contact">
        <div className="contact__inner">
          <img src="/Contact.svg" className="section-icon section-icon--center reveal" alt="" aria-hidden="true" />
          <h2 className="contact__headline reveal" data-delay="1">
            Ready to build something <em className="contact__em">amazing?</em>
          </h2>
          <p className="contact__sub reveal" data-delay="2">I'd love to connect with you!</p>

          <div className="contact__cards reveal" data-delay="3">
            <a href="mailto:shubhangisingh10@gmail.com" className="contact__card">
              <span className="contact__card-label">EMAIL</span>
              <span className="contact__card-value">shubhangisingh10@gmail.com</span>
              <span className="contact__card-arrow">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shubhangisingh10/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card"
            >
              <span className="contact__card-label">LINKEDIN</span>
              <span className="contact__card-value">linkedin.com/in/shubhangisingh10</span>
              <span className="contact__card-arrow">↗</span>
            </a>
            <a
              href="https://shubhangisingh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card"
            >
              <span className="contact__card-label">WEBSITE</span>
              <span className="contact__card-value">shubhangisingh.com</span>
              <span className="contact__card-arrow">↗</span>
            </a>
            <a
              href="/Shubhangi Singh_Resume.pdf"
              download="Shubhangi Singh_Resume.pdf"
              className="contact__card"
            >
              <span className="contact__card-label">DOWNLOAD RESUME</span>
              <span className="contact__card-value">Shubhangi Singh — PDF</span>
              <span className="contact__card-arrow">↓</span>
            </a>
          </div>

          <a href="mailto:shubhangisingh10@gmail.com" className="pill-btn reveal" data-delay="4">
            Get Started ↗
          </a>
        </div>
      </section>

      {/* ======================== FOOTER ======================== */}
      <footer className="footer">
        <div className="footer__top">
          <div className="footer__left">
            <span className="footer__name">Shubhangi Singh</span>
            <span className="footer__tagline">Product designer. NYC.</span>
          </div>
          <nav className="footer__nav">
            <a href="#work" className="footer__link">Works</a>
            <a href="#about" className="footer__link">About</a>
            <a href="#contact" className="footer__link">Contact</a>
            <a
              href="https://www.linkedin.com/in/shubhangisingh10/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link footer__link--accent"
            >
              LinkedIn ↗
            </a>
            <a href="mailto:shubhangisingh10@gmail.com" className="footer__link footer__link--accent">
              Email ↗
            </a>
          </nav>
        </div>
        <div className="footer__bottom">
          <span>Designed and vibe coded by Shubhangi Singh</span>
          <span>New York City</span>
        </div>
      </footer>
    </main>
  )
}
