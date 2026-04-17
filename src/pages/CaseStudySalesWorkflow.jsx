import React from 'react'
import { Link } from 'react-router-dom'
import TagChip from '../components/TagChip.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import StatCard from '../components/StatCard.jsx'
import TwoMinuteVersion from '../components/TwoMinuteVersion.jsx'
import DesignNote from '../components/DesignNote.jsx'
import './CaseStudy.css'

export default function CaseStudySalesWorkflow() {
  return (
    <div className="cs">
      {/* Top bar */}
      <div className="cs__topbar">
        <Link to="/" className="cs__back">← Back to portfolio</Link>
        <span className="cs__case-label">Case Study 01</span>
      </div>

      {/* Header */}
      <header className="cs__header">
        <div className="cs__tags">
          {['UI/UX Design', 'Salesforce Lightning', 'Design System', 'Enterprise'].map((t) => (
            <TagChip key={t} label={t} />
          ))}
        </div>

        <h1 className="cs__title">
          Redesigning a Complex Sales Workflow for Scale
        </h1>

        <blockquote className="cs__pullquote">
          <p>"Sales reps weren't slowed down by selling — they were slowed down by everything around it."</p>
        </blockquote>

        <div className="cs__meta-row">
          <div className="cs__meta-item">
            <span className="cs__meta-label">Project</span>
            <span className="cs__meta-value">Scalable GTM Platform · Enterprise Sales · Salesforce</span>
          </div>
          <div className="cs__meta-item">
            <span className="cs__meta-label">Team</span>
            <span className="cs__meta-value">1 Designer (me), 1 PM, 2 AD, 5 Workstream Owners, Partner, MDP</span>
          </div>
        </div>
      </header>

      {/* Hero image — real screenshot */}
      <div className="cs__hero-img">
        <img
          src="/Case Study 1.png"
          alt="Salesforce Lightning — redesigned account and sales workflow"
          style={{
            width: '100%',
            borderRadius: '12px',
            display: 'block',
            boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
          }}
        />
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          fontStyle: 'italic',
          color: 'var(--gray-text)',
          marginTop: '10px',
          paddingLeft: '4px',
        }}>
          Redesigned account view — built in Salesforce Lightning Design System
        </p>
      </div>

      {/* ── 2 Minute Version ── */}
      <TwoMinuteVersion
        role="Sole designer — embedded in a 14-person cross-functional team. Owned the full design process end-to-end: discovery, stakeholder collaboration, Salesforce Lightning design, and exec presentation."
        timeline="Enterprise · GTM Platform"
        problem="Sales reps were losing time to everything around selling — manual account creation, approval bottlenecks, and constant context-switching between tools. The process created friction at every deal stage, slowing velocity and hurting forecasting."
        approach={[
          'Ran discovery sessions with 5 workstream owners to understand each team\'s vision and constraints',
          'Designed the end-to-end flow using Salesforce Lightning Design System (SLDS)',
          'Used designs as a shared language to align workstream owners and define what engineering needed to build',
          'Built the North Star prototype used to secure CTO and CFO buy-in from the client team',
          'Handed off engineering-ready specs that gave the build team a clear, confident starting point',
        ]}
        impact={[
          { stat: '15–25%', label: 'Faster deal progression' },
          { stat: '20–30%', label: 'Reduction in manual effort per deal' },
          { stat: '30–40%', label: 'Standard deals moved to self-service' },
        ]}
      />

      {/* Content sections */}
      <div className="cs__sections" id="cs-content">

        {/* WHERE IT BROKE */}
        <section className="cs__section">
          <div className="cs__section-label">Where It Broke</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">The biggest friction wasn't obvious at first.</h2>
            <p>It showed up in moments that seemed small in isolation — but together, they created constant slowdowns across every deal.</p>
            <ul className="cs__bullets cs__bullets--plain">
              <li>Creating an account before starting a deal</li>
              <li>Waiting on approvals to move a quote forward</li>
              <li>Switching between systems to complete one step</li>
            </ul>
            <div className="cs__img-stack">
              <DesignNote
                type="insight"
                label="Key Insight"
                heading="The friction wasn't in the selling — it was in the system around it."
                body="Through workstream interviews, it became clear that reps weren't blocked by the complexity of their deals. They were blocked by the tools they had to navigate just to log progress, get approvals, or move to the next stage. Every extra step added to the process was a moment where momentum died."
                tags={['Stakeholder interviews', '5 workstream owners', 'Deal lifecycle mapping']}
              />
            </div>
          </div>
        </section>

        {/* THE CHALLENGE */}
        <section className="cs__section">
          <div className="cs__section-label">The Challenge</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">Fixing this wasn't just about improving one screen.</h2>
            <p>As the sole designer, I needed to hold the full picture across multiple workstreams simultaneously — while ensuring the output was grounded enough in Salesforce's platform constraints to be buildable.</p>
            <ul className="cs__bullets cs__bullets--plain">
              <li>Align 5 workstream owners (sales, ops, finance, legal, IT) on one unified workflow</li>
              <li>Simplify a process with real complexity — pricing, approvals, renewals, territory management</li>
              <li>Design within Salesforce Lightning's component system to keep designs feasible to build</li>
              <li>Reduce manual work without losing the controls that compliance and finance depended on</li>
              <li>Create something sellers would trust and use under pressure</li>
            </ul>
            <div className="cs__img-stack">
              <DesignNote
                type="process"
                label="My Approach"
                heading="Design within SLDS from day one — not at the end."
                body="Rather than designing freely and adapting later, I worked inside the Salesforce Lightning Design System from the start. This kept every design decision grounded in what the platform could actually support, and made workstream reviews faster — owners could see exactly what their piece would look like in the real environment."
                tags={['Salesforce Lightning Design System', 'Platform constraints', 'Feasibility-first']}
              />
            </div>
          </div>
        </section>

        {/* MY PROCESS */}
        <section className="cs__section">
          <div className="cs__section-label">My Process</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">I started with listening. Each workstream owner had a piece of the picture — my job was to connect them.</h2>
            <p>I ran individual discovery sessions with each of the 5 workstream owners to understand their current pain points, their vision for how their part of the process should work, and where they were blocked by other teams. No one had seen the full flow end to end — that gap was itself part of the problem.</p>
            <p>From those sessions, I synthesised a unified view of the deal lifecycle and identified where the biggest friction points clustered:</p>
            <ul className="cs__bullets cs__bullets--plain">
              <li>Account setup was a gate before deal creation could even start</li>
              <li>Approvals required manual chasing across teams with no clear ownership</li>
              <li>Quote → contract transition required too many manual steps across systems</li>
              <li>No single place to track where a deal actually stood</li>
            </ul>
            <div className="cs__img-stack">
              <DesignNote
                type="decision"
                label="Design Decision"
                heading="Treat the end-to-end flow as the design surface — not individual screens."
                body="The instinct in enterprise design is to fix screens one at a time. But the real problem was the seams between them — handoffs where ownership became unclear and manual effort crept in. The entire flow from lead to order needed to feel like one continuous experience, not a chain of separate tools."
                tags={['End-to-end mapping', 'Cross-workstream synthesis', 'Deal lifecycle']}
              />
            </div>
          </div>
        </section>

        {/* DESIGNING IN SLDS */}
        <section className="cs__section">
          <div className="cs__section-label">Designing the Solution</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">I designed the end-to-end flow in Salesforce Lightning — so the vision was grounded in what could actually be built.</h2>
            <p>Using the Salesforce Lightning Design System (SLDS), I built out the complete redesigned workflow — from opportunity creation through to contract and order. Designing within SLDS wasn't a constraint; it was a feature. It meant the workstream owners could see exactly what their piece would look like in the real platform, and the engineering team had a clear, feasible target to build to.</p>
            <p>The designs served three purposes simultaneously:</p>
            <ul className="cs__bullets">
              <li>A shared vision for workstream owners to align on and give feedback against</li>
              <li>A specification for engineering — what to build, in what order, with what logic</li>
              <li>A communication tool for leadership — showing the North Star clearly enough to earn buy-in</li>
            </ul>
            {/* Screen 1: Sales Hub */}
            <div className="cs__design-pair">
              <img src="/Case Study 1_1.png" alt="Sales Hub — one-stop dashboard for accounts, whitespace view, forecasts, sales companion, and at-risk deals" className="cs__section-img" />
              <p className="cs__img-caption">Sales Hub — a one-stop solution giving Sales Associates a unified view of all their accounts, whitespace opportunities, pipeline forecasts, the Sales Companion, and at-risk deals</p>
              <DesignNote
                type="decision"
                label="Screen 1 · Sales Hub"
                heading="One place for everything — so reps never have to go looking."
                body="The Sales Hub was designed as the single starting point for a rep's day. Instead of bouncing between tabs and systems, every high-signal piece of information — account health, forecast position, whitespace, and at-risk deals — was surfaced in one view. The Sales Companion gave reps the context they needed before any call or meeting, without having to dig for it."
                tags={['Sales Hub', 'Unified dashboard', 'Whitespace view', 'At-risk deals', 'Sales Companion']}
              />
            </div>

            {/* Screen 2: Relationship Map */}
            <div className="cs__design-pair">
              <img src="/Case Study 1_2.png" alt="Relationship map — stakeholder and account intelligence for more targeted selling" className="cs__section-img" />
              <p className="cs__img-caption">Relationship map — visualises the key stakeholders and buying influences within a prospective account, helping reps understand the client landscape before approaching a deal</p>
              <DesignNote
                type="decision"
                label="Screen 2 · Relationship Map"
                heading="Understand who you're selling to before you sell."
                body="The relationship map gave reps a structured view of the people inside a prospective account — decision-makers, influencers, blockers, and champions. By making the stakeholder landscape visible, reps could approach deals with context: who to prioritise, how relationships connected, and where the real buying power sat. Better intelligence meant more targeted, more credible conversations."
                tags={['Relationship mapping', 'Stakeholder intelligence', 'Account strategy', 'SLDS']}
              />
            </div>

            {/* Screen 3: Opportunity Screen */}
            <div className="cs__design-pair">
              <img src="/Case Study 1_3.png" alt="Opportunity screen — prospective leads with scores and key deal information at a glance" className="cs__section-img" />
              <p className="cs__img-caption">Opportunity screen — a consolidated view of all prospective leads with lead scores, deal stage, value, and other key indicators visible at a glance without opening each record</p>
              <DesignNote
                type="decision"
                label="Screen 3 · Opportunity Screen"
                heading="Everything a rep needs to prioritise their pipeline — without opening a single record."
                body="The opportunity screen was redesigned to surface the right signals immediately: lead score, deal stage, account value, and next action — all in one scannable row. Reps no longer had to click into each opportunity to assess its status. The result was faster triage, more confident prioritisation, and less time spent navigating the CRM just to understand where things stood."
                tags={['Opportunity management', 'Lead scoring', 'Pipeline view', 'SLDS list components']}
              />
            </div>

            {/* Screen 4: CLM / Conga */}
            <div className="cs__design-pair">
              <img src="/Case Study 1_4.png" alt="CLM process — Conga integrated into Salesforce for end-to-end contract lifecycle management" className="cs__section-img" />
              <p className="cs__img-caption">CLM process via Conga in Salesforce — contract lifecycle management integrated directly into the platform, removing the need to switch systems at the quote-to-contract stage</p>
              <DesignNote
                type="decision"
                label="Screen 4 · CLM via Conga"
                heading="Close the loop on the deal — without leaving Salesforce."
                body="The quote-to-contract stage was one of the biggest sources of manual effort and context-switching in the old flow. By integrating Conga directly into Salesforce, the CLM process became a native part of the deal journey. Reps could generate, send, and track contracts without switching systems — and the data stayed live inside the CRM throughout."
                tags={['CLM', 'Conga integration', 'Contract lifecycle', 'Quote-to-order']}
              />
            </div>
          </div>
        </section>

        {/* THE SOLUTION */}
        <section className="cs__section">
          <div className="cs__section-label">The Solution</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">One connected flow — from lead to order — with momentum built in at every step.</h2>
            <ul className="cs__bullets cs__bullets--plain">
              <li>Unified flow: lead → opportunity → quote → contract → order</li>
              <li>Automated account setup, territory assignment, and standard approvals</li>
              <li>Guided, self-service flows for quotes and agreements</li>
              <li>Clear ownership indicators at every deal stage</li>
              <li>Single source of truth for deal progress and forecasting data</li>
            </ul>
            <div className="cs__img-stack">
              <DesignNote
                type="principle"
                label="Design Principle"
                heading="Progress should feel continuous, not earned."
                body="In the old flow, every stage required a rep to do something administrative before they could move forward. The redesign inverted this: the system does the work in the background, and the rep's job is simply to move the deal. The experience shifts from 'navigate the process' to 'move through it with momentum'."
                tags={['Guided flows', 'Reduced cognitive load', 'Progressive disclosure']}
              />
            </div>
          </div>
        </section>

        {/* EXEC BUY-IN */}
        <section className="cs__section">
          <div className="cs__section-label">Executive Buy-In</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">The designs didn't just inform the build — they got leadership aligned.</h2>
            <p>The end-to-end prototype was taken to the client's CTO and CFO as the North Star vision for the platform. Having a complete, Salesforce-native design made it possible for executive stakeholders to see — not just hear — what the reimagined experience would look like for their teams.</p>
            <p>The prototype secured buy-in from both executives, aligning client leadership on the vision and giving the project team the mandate to move forward with confidence. It also gave the engineering team a credible, detailed starting point — one that had been validated at the top.</p>
            <div className="cs__img-stack">
              <DesignNote
                type="insight"
                label="Key Outcome"
                heading="Designs as a decision-making tool, not just a deliverable."
                body="The prototype served a role beyond engineering handoff — it became the artifact that aligned leadership. Because it was built in SLDS and showed the real platform, executives weren't being asked to imagine the future state. They could see it. That made the buy-in conversation fundamentally different."
                tags={['C-suite alignment', 'CTO · CFO', 'North Star prototype', 'Stakeholder buy-in']}
              />
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section className="cs__section">
          <div className="cs__section-label">Impact</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">Results that moved the needle.</h2>
            <div className="cs__stats">
              <StatCard stat="15–25%" label="Faster deal progression" />
              <StatCard stat="20–30%" label="Reduction in manual effort per deal" />
              <StatCard stat="30–40%" label="Standard deals moved to self-service" />
              <StatCard stat="↑" label="Improved forecasting reliability" />
            </div>
          </div>
        </section>

      </div>

      {/* Closing pull quote */}
      <div className="cs__closing-quote">
        <blockquote>
          "The designs didn't just describe what to build — they made the case for why it was worth building."
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
