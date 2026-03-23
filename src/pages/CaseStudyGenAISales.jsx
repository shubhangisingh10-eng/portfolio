import React from 'react'
import { Link } from 'react-router-dom'
import TagChip from '../components/TagChip.jsx'
import StatCard from '../components/StatCard.jsx'
import TwoMinuteVersion from '../components/TwoMinuteVersion.jsx'
import DesignNote from '../components/DesignNote.jsx'
import './CaseStudy.css'

export default function CaseStudyGenAISales() {
  return (
    <div className="cs">
      {/* Top bar */}
      <div className="cs__topbar">
        <Link to="/" className="cs__back">← Back to portfolio</Link>
        <span className="cs__case-label">Case Study 03</span>
      </div>

      {/* Header */}
      <header className="cs__header">
        <div className="cs__tags">
          {['GenAI', 'UX Strategy', 'Enterprise', 'B2B Sales Enablement'].map((t) => (
            <TagChip key={t} label={t} />
          ))}
        </div>

        <h1 className="cs__title">
          Reimagining Sales Enablement for a Global Energy Company Through a GenAI-Powered Tool
        </h1>

        <blockquote className="cs__pullquote">
          <p>"The response to the prototype today has been amazing. Clients have been so engaged and impressed."</p>
        </blockquote>

        <div className="cs__meta-row">
          <div className="cs__meta-item">
            <span className="cs__meta-label">Project</span>
            <span className="cs__meta-value">Energy · GenAI · B2B Sales Enablement</span>
          </div>
          <div className="cs__meta-item">
            <span className="cs__meta-label">Team</span>
            <span className="cs__meta-value">1 Designer (me), 1 Principal PM, Partner, 4 MDPs, CEO (UK), CEO (US), Program Manager</span>
          </div>
        </div>
      </header>

      {/* ── 2 Minute Version ── */}
      <TwoMinuteVersion
        role="Sole Experience Designer — embedded in a senior cross-functional team. Owned all design from initial stakeholder workshops through prototype delivery. Spent 3 days personally in the field during live sales training to ground the work in real behavior."
        timeline="Energy · GenAI · B2B Sales Enablement"
        problem="B2B energy sales reps at a major global energy company spent too much time on low-value activities — manually prioritising leads by gut feel, building proposals from scratch, and working without structured coaching. The result was inconsistent performance, slow sales cycles, and lost revenue at scale."
        approach={[
          'Led stakeholder workshops with the CEO, senior advisors, and sales leaders to map the end-to-end sales journey and surface pain points',
          'Spent 3 days embedded in live client sales training — personally shadowing pitches, observing role-play exercises, and conducting contextual inquiries with reps',
          'Developed 10+ initial concepts, refined through real-time feedback from stakeholders and sales managers',
          'Built an interactive AI-powered sales tool prototype with lead scoring, next-best-action recommendations, and automated proposal generation',
          'Prototype unveiled by the CEO at the Annual Sales Conference — demoed to 120+ top sales associates and the leadership board',
        ]}
        impact={[
          { stat: '€100M+', label: 'Additional margin potential' },
          { stat: '30%', label: 'Reduction in sales cycle time' },
          { stat: '50%', label: 'Less time spent on proposal creation' },
        ]}
      />

      {/* Hero image */}
      <div className="cs__hero-img" id="cs-content">
        <img
          src="/Case Study 3.png"
          alt="GenAI-powered sales enablement tool — energy sector"
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
          AI-powered sales enablement prototype — designed for a global energy company's B2B sales team
        </p>
      </div>

      {/* Content sections */}
      <div className="cs__sections">

        {/* WHERE IT BROKE */}
        <section className="cs__section">
          <div className="cs__section-label">Where It Broke</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">The reps weren't bad at selling. The system around them made it hard to sell consistently.</h2>
            <p>Across interviews and workflow reviews, the same friction points kept surfacing — not in the sales conversations themselves, but in everything surrounding them.</p>
            <ul className="cs__bullets cs__bullets--plain">
              <li>Leads were prioritised by instinct, not data — meaning high-value opportunities were regularly missed</li>
              <li>Proposals were assembled manually each time, eating hours that should have been spent with customers</li>
              <li>Coaching was inconsistent — top performers' approaches weren't being captured or shared</li>
              <li>Reps had data available, but no guidance on what to do with it next</li>
            </ul>
            <div className="cs__img-stack">
              <DesignNote
                type="insight"
                label="Key Insight"
                heading="The problem wasn't a lack of data — it was a lack of guidance."
                body="Sales reps had access to CRM data, customer history, and pipeline metrics. But the tools stopped there. Nothing told them which lead to call first, what to say when they got there, or how to close faster. The gap was between data and decision — and that's exactly where AI could help."
                tags={['Stakeholder workshops', 'Sales rep interviews', 'Workflow mapping']}
              />
            </div>
          </div>
        </section>

        {/* THE CHALLENGE */}
        <section className="cs__section">
          <div className="cs__section-label">The Challenge</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">Design AI that feels like a trusted advisor — not a surveillance system.</h2>
            <p>As sole designer, I had to hold together a solution that served multiple stakeholders with very different needs: sales reps who wanted speed and simplicity, managers who needed visibility and coaching tools, and senior leadership who needed confidence in the AI's recommendations.</p>
            <ul className="cs__bullets cs__bullets--plain">
              <li>Make AI recommendations feel like guidance, not directives — reps needed to feel in control</li>
              <li>Reduce friction in proposal creation without removing the personalisation reps relied on</li>
              <li>Design for adoption: a tool reps would actually open and trust under the pressure of a live sales cycle</li>
              <li>Integrate with existing CRM and pricing systems — not replace them</li>
            </ul>
            <div className="cs__img-stack">
              <DesignNote
                type="process"
                label="Design Principle"
                heading="AI as co-pilot, not autopilot."
                body="From the earliest concepts, the design philosophy was clear: AI should surface the right information at the right moment and suggest the best next move — but never take the wheel. Sales reps needed to feel that the tool was amplifying their judgement, not replacing it. Every recommendation was framed as a suggestion, with the reasoning visible."
                tags={['Human-AI interaction', 'Trust in AI', 'Explainable recommendations']}
              />
            </div>
          </div>
        </section>

        {/* MY PROCESS */}
        <section className="cs__section">
          <div className="cs__section-label">My Process</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">I started in the boardroom and ended on the sales floor — because both perspectives were essential.</h2>

            <p><strong>Phase 1 — Understanding the Sales Vision</strong></p>
            <p>I ran stakeholder workshops with the CEO, senior advisors, and sales leaders to align on business objectives and map the end-to-end sales journey. From those sessions, I identified three structural pain points: inefficient lead prioritisation, lack of structured sales coaching, and time-consuming proposal generation. I developed 10+ initial concept directions and presented wireframes and user flows to refine the vision before any detailed design began.</p>

            <div className="cs__img-stack">
              <DesignNote
                type="process"
                label="Phase 1 · Stakeholder Workshops"
                heading="Map the full sales journey before designing a single screen."
                body="The initial workshops weren't about features — they were about understanding the shape of the problem. By mapping the end-to-end sales journey with leadership, I could identify where the biggest drops in efficiency happened and what the business most needed to move. That map became the backbone of every design decision that followed."
                tags={['CEO workshops', 'Sales journey mapping', 'Concept ideation', '10+ concepts']}
                nda={false}
              />
            </div>

            <p style={{ marginTop: '32px' }}><strong>Phase 2 — Immersive Field Research</strong></p>
            <p>I spent three days personally embedded in the client's live sales training — sitting alongside reps during pitches, observing role-play exercises, and conducting contextual inquiries with sales managers. This wasn't research from a distance. I saw firsthand how reps thought through a lead, where they hesitated, and what they reached for when they needed support.</p>

            <div className="cs__img-stack">
              <DesignNote
                type="insight"
                label="Phase 2 · Field Research"
                heading="Three days in the field changed what I thought the tool needed to do."
                body="The initial concept was built around efficiency — faster proposals, better lead scoring. What I observed in the field added a layer I hadn't anticipated: reps were also struggling with confidence. Knowing what to say, how to position an offer, when to escalate. The design needed to address not just speed, but the quality of judgement in the moment. That reframe shaped the next-best-action and coaching features significantly."
                tags={['3-day field immersion', 'Live sales training', 'Contextual inquiry', 'Role-play observation']}
                nda={false}
              />
            </div>

            <p style={{ marginTop: '32px' }}><strong>Phase 3 — Iterative Prototype Refinement</strong></p>
            <p>Back from the field, I iterated the prototype in real time with sales reps and managers — refining the information architecture, decision-support features, and the way AI recommendations were surfaced and explained. Each round of feedback sharpened both the design and the underlying logic of how the tool responded to different deal stages.</p>
          </div>
        </section>

        {/* DESIGNING THE SOLUTION */}
        <section className="cs__section">
          <div className="cs__section-label">Designing the Solution</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">Four interconnected capabilities — each solving a distinct failure point in the existing sales workflow.</h2>
            <p>The solution wasn't one screen or one feature. It was a cohesive tool built around the actual shape of a sales rep's day — from deciding who to call, to knowing what to say, to sending a proposal, to learning from what worked.</p>

            <div className="cs__img-row">
              <DesignNote
                type="decision"
                label="Feature 1 · Lead Prioritisation"
                heading="Stop guessing who to call. Let data make the case."
                body="Automated lead scoring ranked prospects by conversion likelihood and deal profitability, surfacing the highest-value opportunities at the top of every rep's view. Dynamic segmentation meant reps were always targeting the right client with the right offering — without having to dig through a CRM to figure out where to start."
                tags={['AI lead scoring', 'Conversion likelihood', 'Dynamic segmentation', 'CRM integration']}
                nda={true}
              />
              <DesignNote
                type="decision"
                label="Feature 2 · Sales Guidance"
                heading="Personalised next-best-action — grounded in what actually works."
                body="AI-driven recommendations showed each rep their best next move, based on past success patterns across the sales team. Playbooks for different customer profiles gave structure to consultative conversations, while a knowledge base surfaced the behaviours and approaches that top performers used most. The best rep in the room became everyone's co-pilot."
                tags={['Next-best-action', 'AI playbooks', 'Personalised coaching', 'Peer learning']}
                nda={true}
              />
            </div>
            <div className="cs__img-row" style={{ marginTop: '16px' }}>
              <DesignNote
                type="insight"
                label="Feature 3 · Proposal Generation"
                heading="From hours to minutes — without sacrificing personalisation."
                body="AI-generated proposal drafts pulled from CRM data, pricing systems, and customer history to pre-fill templates with accurate, contextual content. Reps could customise within a structured framework, ensuring every proposal felt personal without starting from a blank page. Proposal creation went from a multi-hour task to a final check before sending."
                tags={['AI generation', 'CRM + pricing integration', 'Template customisation', 'Faster turnaround']}
                nda={true}
              />
              <DesignNote
                type="principle"
                label="Feature 4 · Continuous Learning"
                heading="The tool gets smarter as the team does."
                body="Real-time feedback loops refined AI recommendations based on outcomes — deals won, deals lost, and what changed in between. A best-practices repository captured and shared insights from top-performing reps, creating a living knowledge base that improved over time. The tool didn't just support the sales process; it got better at supporting it with every cycle."
                tags={['Feedback loops', 'AI refinement', 'Best-practice capture', 'Performance insights']}
                nda={true}
              />
            </div>
          </div>
        </section>

        {/* THE CONFERENCE MOMENT */}
        <section className="cs__section">
          <div className="cs__section-label">The Conference Moment</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">The CEO unveiled the prototype at the Annual Sales Conference. 120+ sales reps saw it for the first time.</h2>
            <p>The final prototype was introduced by the company's CEO at their Annual Sales Conference — the company's most visible internal stage, in front of the top 120+ sales associates and the full leadership board. I had built the prototype; the CEO demoed it live.</p>
            <p>The reaction from the room was overwhelmingly positive. Sales reps were immediately engaged — they could see how it would change their day-to-day. Leadership saw the business case land in real time. The feedback after the demo directly shaped the next round of refinements before final implementation.</p>
            <div className="cs__img-stack">
              <DesignNote
                type="insight"
                label="Key Outcome"
                heading="A prototype that could hold its own in front of the entire company."
                body="Designing something that could survive a live demo in a high-stakes setting required a different standard of craft. Every interaction needed to be intuitive to a cold audience. Every AI recommendation needed to feel credible. The overwhelmingly positive reception — and the direct feedback loop it created — validated that the design was grounded in real need, not assumptions."
                tags={['CEO demo', '120+ sales reps', 'Annual Sales Conference', 'Live prototype', 'Leadership board']}
                nda={false}
              />
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section className="cs__section">
          <div className="cs__section-label">Impact</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">Results built into the design from day one.</h2>
            <div className="cs__stats">
              <StatCard stat="€100M+" label="Additional margin potential through optimised pipeline" />
              <StatCard stat="30%" label="Reduction in sales cycle time" />
              <StatCard stat="50%" label="Less time spent on proposal creation" />
              <StatCard stat="15–20%" label="Increase in conversion rates" />
            </div>
          </div>
        </section>

        {/* LEARNINGS */}
        <section className="cs__section">
          <div className="cs__section-label">Learnings</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">What this project taught me about designing AI for high-stakes environments.</h2>
            <ul className="cs__bullets cs__bullets--plain">
              <li><strong>AI needs to feel like a helpful assistant, not a replacement.</strong> Sales reps valued recommendations but wanted control over decisions. Framing AI suggestions as guidance — with visible reasoning — made adoption significantly easier than presenting them as directives.</li>
              <li><strong>Real-world workflows matter more than ideal flows.</strong> The initial design was grounded in best practices and stakeholder input. Three days in the field surfaced unexpected pain points that none of that had captured. The tool got sharper the closer I got to actual behaviour.</li>
              <li><strong>Quick wins drive stakeholder buy-in.</strong> Prototyping high-impact features early — like AI-generated proposals — proved value quickly. That early proof created momentum and earned trust from both leadership and end users before the full tool was complete.</li>
            </ul>
          </div>
        </section>

      </div>

      {/* Closing pull quote */}
      <div className="cs__closing-quote">
        <blockquote>
          "Designing AI tools isn't just about the intelligence of the system — it's about the confidence it gives the person using it."
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
