import React from 'react'
import { Link } from 'react-router-dom'
import TagChip from '../components/TagChip.jsx'
import StatCard from '../components/StatCard.jsx'
import TwoMinuteVersion from '../components/TwoMinuteVersion.jsx'
import DesignNote from '../components/DesignNote.jsx'
import './CaseStudy.css'

export default function CaseStudyDTCPatient() {
  return (
    <div className="cs">
      {/* Top bar */}
      <div className="cs__topbar">
        <Link to="/" className="cs__back">← Back to portfolio</Link>
        <span className="cs__case-label">Case Study 02</span>
      </div>

      {/* Header */}
      <header className="cs__header">
        <div className="cs__tags">
          {['UX Strategy', 'Webflow', 'Conversion Optimization', 'Healthcare'].map((t) => (
            <TagChip key={t} label={t} />
          ))}
        </div>

        <h1 className="cs__title">
          Designing a DTC Patient Activation Journey That Drives Action
        </h1>

        <blockquote className="cs__pullquote">
          <p>"Users weren't converting because the experience didn't help them move forward."</p>
        </blockquote>

        <div className="cs__meta-row">
          <div className="cs__meta-item">
            <span className="cs__meta-label">Project</span>
            <span className="cs__meta-value">Healthcare · Direct-to-Consumer · Patient Experience</span>
          </div>
          <div className="cs__meta-item">
            <span className="cs__meta-label">Team</span>
            <span className="cs__meta-value">2 Product Designers, 1 Growth Analyst, 1 PM, 1 Consultant, Leadership Team, Technical Build Team</span>
          </div>
        </div>
      </header>

      {/* ── 2 Minute Version ── */}
      <TwoMinuteVersion
        role="Product Designer — Webflow design variants, Figma build-ready specs, and engineering handoff. Collaborated with a second designer, growth analyst, PM, and consultant."
        timeline="Healthcare · DTC · Patient Activation"
        problem="A healthcare DTC site had traffic but no conversion. Users were reading but not acting — the content explained the product without guiding decisions. Patients and caregivers had different needs, but the experience treated them identically."
        approach={[
          'Built low-code design variants in Webflow to enable rapid content and layout testing',
          'Analyzed test insights from the growth analyst to identify what messaging resonated with each audience',
          'Co-designed final, build-ready Figma specs with the second product designer',
          'Collaborated with the engineering team for accurate implementation',
          'Shifted the journey from content-led to decision-led: Discovery → Intent → Action',
        ]}
        impact={[
          { stat: '~90%', label: 'Higher CTR for caregivers with optimized messaging' },
          { stat: '2×', label: 'Engagement lift from readiness-focused themes' },
          { stat: '103K', label: 'Meta ad impressions in initial campaign' },
        ]}
      />

      {/* Hero image */}
      <div className="cs__hero-img" id="cs-content">
        <img
          src="/Case Study 2.png"
          alt="DTC Patient Activation Journey — project overview"
          style={{
            width: '100%',
            borderRadius: '12px',
            display: 'block',
            boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
          }}
        />
      </div>

      {/* Content sections */}
      <div className="cs__sections">

        {/* WHERE IT BROKE */}
        <section className="cs__section">
          <div className="cs__section-label">Where It Broke</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">The breakdown appeared across different moments, not one single feature.</h2>
            <p>The breakdown wasn't tied to a single feature. It appeared across different moments in the experience — and each part worked in isolation. But together, they made it harder for users to decide what to do next.</p>
            <ul className="cs__bullets cs__bullets--plain">
              <li>Content that explained, but didn't guide</li>
              <li>Pages users could enter from anywhere, without a clear path forward</li>
              <li>Messaging that didn't distinguish between patients and caregivers</li>
              <li>Landing experiences that didn't reflect what users clicked on</li>
              <li>Too many competing actions without a clear starting point</li>
            </ul>
            <div className="cs__img-stack">
              <DesignNote
                type="insight"
                label="Key Insight"
                heading="Users weren't lost — they were just never given a clear next step."
                body="Journey mapping revealed that drop-off wasn't happening at one predictable moment. Users were disengaging at different points depending on how they arrived and what they were looking for. The experience had no logic for guiding someone from curiosity to commitment — it just presented information and hoped users would figure out the rest."
                tags={['Journey mapping', 'Drop-off analysis', 'Patient vs. caregiver behaviour']}
                nda={false}
              />
            </div>
            <p>Over time, this led to drop-off after initial engagement, low progression toward key actions, and weak signals of user intent. The experience wasn't ineffective — it just wasn't structured to support decision-making.</p>
          </div>
        </section>

        {/* THE CHALLENGE */}
        <section className="cs__section">
          <div className="cs__section-label">The Challenge</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">Improving conversion meant rethinking how the journey worked end-to-end.</h2>
            <ul className="cs__bullets cs__bullets--plain">
              <li>Turn informational content into something actionable</li>
              <li>Create continuity between acquisition and the on-site experience</li>
              <li>Account for different user needs (patients vs. caregivers) within the same flow</li>
              <li>Clarify how users move from exploration to a committed action</li>
              <li>Move fast — test design variants before committing to a full redesign</li>
            </ul>
            <div className="cs__img-stack">
              <DesignNote
                type="insight"
                label="Audience Insight"
                heading="Patients and caregivers were using the same experience to answer completely different questions."
                body="Patients wanted to understand readiness — 'Am I a good candidate? What does recovery look like?' Caregivers wanted to evaluate on behalf of someone else — 'Is this safe? What do I need to organise?' The same content structure couldn't serve both well. This shaped every design decision that followed."
                tags={['Audience segmentation', 'Patient needs', 'Caregiver needs', 'Content strategy']}
                nda={false}
              />
            </div>
          </div>
        </section>

        {/* MY APPROACH */}
        <section className="cs__section">
          <div className="cs__section-label">My Approach</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">I built the variants. The team tested them. Together, we found what worked.</h2>
            <p>Rather than committing to a full redesign upfront, I built low-code design variants directly in Webflow — allowing the team to run live tests without engineering overhead. My role was to translate hypotheses into testable experiences, then work with the growth analyst to interpret what the data was telling us about user behaviour.</p>
            <p>Four areas of the experience became the focus:</p>

            <ol className="cs__bullets cs__bullets--numbered">
              <li>
                <strong>Content structure</strong> — I designed FAQ (question-based) and Timeline variants
                for recovery information. The growth analyst's data showed FAQ content drove more consistent
                interaction, with dropdown CTR reaching 7–9% in high-interest sections. Find-a-Doctor
                engagement was meaningfully higher from FAQ pages.
              </li>
            </ol>

            <br />

            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--charcoal)', marginBottom: '16px', fontWeight: 500 }}>
                2. <strong>Messaging tone</strong> — I designed variants across five messaging angles —
                results-oriented, readiness-focused, emotional, technical, and action-driven — to test
                which resonated with each audience. The insights informed how we framed content
                for patients vs. caregivers going forward.
              </p>
              <div className="cs__stats">
                <StatCard stat="~75%" label="Higher CTR for patients" />
                <StatCard stat="~90%" label="Higher CTR for caregivers" />
                <StatCard stat="Top 3" label="Results, readiness & emotional messaging" />
                <StatCard stat="↓" label="Technical messaging underperformed" />
              </div>
            </div>

            <br />

            <ol className="cs__bullets cs__bullets--numbered" start={3}>
              <li>
                <strong>Entry points</strong> — I tested different homepage theme variants.
                Readiness-focused themes drove the strongest initial engagement: ~70% higher
                among patients, up to 2× higher among caregivers.
              </li>
              <li>
                <strong>Acquisition alignment</strong> — Working with the team's insights on ad
                performance, I designed landing experiences that matched the ad creative users
                had clicked on — reducing the disconnect that was causing post-click drop-off.
                'Surgeons &amp; Doctors' queries drove the strongest funnel engagement (CTR ~0.27%,
                CPC ~$2.62). Meta ads delivered 103K impressions and 2,787 clicks at $0.38 CPC.
              </li>
            </ol>

            <div className="cs__img-stack">
              <DesignNote
                type="process"
                label="How I Worked"
                heading="Build in Webflow, test live, interpret with the analyst — then move fast."
                body="Each hypothesis became a Webflow variant — a real, live page I could build and modify quickly without engineering involvement. The growth analyst ran the tests and pulled the data. My job was to translate those results into design decisions: what to keep, what to cut, what to try next. This loop — build, test, interpret, iterate — compressed weeks of design work into days."
                tags={['Webflow', 'Low-code variants', 'Live testing', 'Growth analyst collaboration']}
                nda={false}
              />
            </div>
          </div>
        </section>

        {/* WHAT CHANGED */}
        <section className="cs__section">
          <div className="cs__section-label">What Changed</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">From test insights to build-ready designs.</h2>
            <p>Once the testing phase surfaced clear patterns, I collaborated with the second product designer to translate the winning variants into polished, build-ready Figma specs. We then worked closely with the engineering team to ensure accurate implementation — reviewing builds, flagging inconsistencies, and iterating until the live experience matched the intent.</p>
            <ul className="cs__bullets">
              <li>Reorganized content into question-based, scannable formats → Users found relevant information quickly</li>
              <li>Introduced messaging themes tailored by audience intent → Increased relevance for patients and caregivers</li>
              <li>Aligned ad creative with landing page experience → Reduced post-click drop-off</li>
              <li>Simplified primary actions across the journey → Removed competition between CTAs</li>
              <li>Structured a clear progression from learning to action → Made next steps obvious</li>
            </ul>
            <div className="cs__img-stack">
              <DesignNote
                type="decision"
                label="Design Decision"
                heading="The quiz became the bridge between exploration and action."
                body="The winning pattern across all the testing was that users needed a structured moment to move from passive reading to active intent. I designed a short quiz — built into the Figma specs as a core journey step — that helped users self-identify their situation and get a personalised next step. It removed the ambiguity of 'what do I do now?' and gave users a reason to stay and commit."
                tags={['Figma build-ready specs', 'Engineering handoff', 'Quiz flow', 'Conversion design']}
                nda={false}
              />
            </div>
            <p style={{ marginTop: '24px' }}>
              Instead of navigating disconnected pages, users move through a flow that supports their
              decisions: Discovery → understanding → intent → action. The quiz emerged as a key step
              in capturing and progressing user intent.
            </p>
          </div>
        </section>

        {/* IMPACT */}
        <section className="cs__section">
          <div className="cs__section-label">Impact</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">Results that moved the needle.</h2>
            <div className="cs__stats">
              <StatCard stat="~90%" label="Higher CTR for caregivers with optimized messaging" />
              <StatCard stat="2×" label="Engagement lift from readiness-focused themes" />
              <StatCard stat="7–9%" label="CTR on FAQ dropdown interactions" />
              <StatCard stat="103K" label="Meta ad impressions in initial campaign" />
            </div>
          </div>
        </section>

      </div>

      {/* Closing pull quote */}
      <div className="cs__closing-quote">
        <blockquote>
          "Information alone doesn't drive action. When the experience helps users understand where they are and what to do next, they're far more likely to move forward."
        </blockquote>
      </div>

      {/* Footer CTA */}
      <div className="cs__footer-cta">
        <p className="cs__footer-cta-eyebrow">Shubhangi Singh</p>
        <p className="cs__footer-cta-heading">Interested in working together?</p>
        <div className="cs__footer-cta-buttons">
          <a href="mailto:shubhangisingh10@gmail.com" className="pill-btn">
            Get in touch
          </a>
          <Link to="/" className="pill-btn-ghost">
            View all work
          </Link>
        </div>
      </div>
    </div>
  )
}
