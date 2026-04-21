import React from 'react'
import { Link } from 'react-router-dom'
import TagChip from '../components/TagChip.jsx'
import StatCard from '../components/StatCard.jsx'
import TwoMinuteVersion from '../components/TwoMinuteVersion.jsx'
import DesignNote from '../components/DesignNote.jsx'
import './CaseStudy.css'

export default function CaseStudyMia() {
  return (
    <div className="cs">
      {/* Top bar */}
      <div className="cs__topbar">
        <Link to="/" className="cs__back">← Back to portfolio</Link>
        <span className="cs__case-label">Case Study 04</span>
      </div>

      {/* Header */}
      <header className="cs__header">
        <div className="cs__tags">
          {['Multi-Agent AI', 'AI UX Strategy', 'Interaction Design', 'Enterprise'].map((t) => (
            <TagChip key={t} label={t} />
          ))}
        </div>

        <h1 className="cs__title">
          Designing Human–AI Collaboration for Faster Software Delivery
        </h1>

        <blockquote className="cs__pullquote">
          <p>"AI wasn't the bottleneck — understanding how to work with it was."</p>
        </blockquote>

        <div className="cs__meta-row">
          <div className="cs__meta-item">
            <span className="cs__meta-label">Project</span>
            <span className="cs__meta-value">Multi-Agent SDLC Platform · AI-Augmented Software Delivery · Proof of Concept</span>
          </div>
          <div className="cs__meta-item">
            <span className="cs__meta-label">Team</span>
            <span className="cs__meta-value">1 Designer (me), 2 Engineers, 1 AI Lead</span>
          </div>
        </div>
      </header>

      {/* Hero image */}
      <div className="cs__hero-img">
        <img
          src="/Case Study 4.png"
          alt="Mia — multi-agent SDLC platform interaction design"
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
          Mia — interaction architecture for a multi-agent SDLC platform, designed at BCG X
        </p>
      </div>

      {/* ── 2 Minute Version ── */}
      <TwoMinuteVersion
        role="Sole designer on a multi-agent SDLC platform proof-of-concept at BCG X. Owned the full interaction design — from mapping system behavior and agent coordination patterns to prototyping the interface used to pitch the platform to future clients."
        timeline="AI · Multi-Agent Systems · Enterprise · BCG X"
        problem="As users interacted with multiple specialized AI agents across the software delivery lifecycle, the experience broke down. Human–agent–agent interactions became fragmented, chat interfaces collapsed complex workflows into linear conversations, and users had no visibility into how agents were collaborating or where to intervene when things went wrong."
        approach={[
          'Mapped how agents reason, plan, and execute across the SDLC to identify system states and breakdown points',
          'Separated interaction types — conversation, execution, and output — to reduce cognitive overload',
          'Designed an Agent Activity Panel to make agent coordination visible and understandable',
          'Introduced human-in-the-loop controls at planning, execution, and review stages',
          'Shifted the design model from one-off tasks to reusable, evolvable workflows',
        ]}
        impact={[
          { stat: '↗', label: 'Positioned as a strategic product offering for agentic workflows' },
          { stat: '✦', label: 'Became a reference point for future AI-driven product development' },
          { stat: '⬡', label: 'Defined early interaction patterns for scalable human–AI systems' },
        ]}
      />

      {/* Content sections */}
      <div className="cs__sections" id="cs-content">

        {/* CONTEXT */}
        <section className="cs__section">
          <div className="cs__section-label">Context</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">Mia is a multi-agent SDLC platform built to explore how distributed AI agents can accelerate software delivery.</h2>
            <p>Developed at BCG X in December 2024 as an early-stage prototype, Mia explores a system where specialized agents — product, engineering, QA, and data — collaborate to plan, build, test, and deploy software solutions. Instead of relying on a single AI assistant, Mia orchestrates a suite of agents that can coordinate and validate each other's work.</p>
            <p>By distributing tasks across agents that reason, plan, and execute independently, Mia demonstrates the potential for a more structured, reliable, and scalable software delivery pipeline. My role was to design the interaction model that made this possible for human users.</p>
            <div className="cs__img-stack">
              <DesignNote
                type="insight"
                label="What Makes This Different"
                heading="Not a chatbot — a multi-actor system with distributed responsibility."
                body="Most AI tools present a single agent in a single chat window. Mia introduced something fundamentally different: a network of specialized agents working in parallel across a complex, multi-stage process. The design challenge wasn't how to make one agent more helpful — it was how to make a system of agents legible, trustworthy, and controllable for the humans working alongside them."
                tags={['Multi-agent orchestration', 'SDLC automation', 'BCG X', 'Dec 2024']}
              />
            </div>
          </div>
        </section>

        {/* WHERE IT BROKE */}
        <section className="cs__section">
          <div className="cs__section-label">Where It Broke</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">Agents could reason and execute. But as soon as multiple agents were involved, users lost the thread.</h2>
            <p>The core problem wasn't capability — it was interaction. As users engaged with multiple agents across the delivery lifecycle, the experience started to collapse under its own complexity.</p>
            <ul className="cs__bullets cs__bullets--plain">
              <li>Human ↔ agent ↔ agent interactions became fragmented and hard to follow</li>
              <li>Chat interfaces collapsed complex workflows into a single linear thread</li>
              <li>Users couldn't understand how work progressed or where agents were in the process</li>
              <li>There was no clear way to monitor execution or step in when something went wrong</li>
            </ul>
            <div className="cs__img-stack">
              <DesignNote
                type="insight"
                label="Key Insight"
                heading="The challenge wasn't agent capability — it was interaction pattern."
                body="Humans needed to coordinate with multiple agents. Agents needed to coordinate with each other. And the system needed to make both visible and understandable — in real time, without creating new cognitive overhead. That was the design problem."
                tags={['Interaction complexity', 'Multi-agent coordination', 'Cognitive load', 'System visibility']}
              />
            </div>
          </div>
        </section>

        {/* THE CHALLENGE */}
        <section className="cs__section">
          <div className="cs__section-label">The Challenge</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">This wasn't about improving a UI. It was about designing a new interaction model from scratch.</h2>
            <p>The challenge required supporting three fundamentally different types of interaction simultaneously — and making them feel coherent to the user.</p>
            <ul className="cs__bullets cs__bullets--plain">
              <li><strong>Human → Agent</strong> — delegation: giving intent, defining tasks, setting parameters</li>
              <li><strong>Agent → Agent</strong> — collaboration: coordination, validation, handoffs between specialized agents</li>
              <li><strong>Human → System</strong> — monitoring and control: understanding what's happening and intervening when needed</li>
            </ul>
            <div className="cs__img-stack">
              <DesignNote
                type="process"
                label="Design Framing"
                heading="Treat Mia as a multi-actor system — not a chatbot with extra features."
                body="The framing determined everything. If Mia was a chatbot, the instinct was to add more features to the chat window. But as a multi-actor system with distributed responsibility, it needed a different model entirely: one that separated types of interaction, made coordination visible, and gave users meaningful control without requiring them to manage every detail."
                tags={['Interaction architecture', 'System thinking', 'Human-in-the-loop', 'Agent autonomy']}
              />
            </div>
          </div>
        </section>

        {/* MY PROCESS */}
        <section className="cs__section">
          <div className="cs__section-label">My Process</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">I mapped the system before designing the interface — because the interaction model had to match how agents actually behaved.</h2>

            <p><strong>Phase 1 — Understand System Behavior</strong></p>
            <p>Before any screen design, I worked with the engineers and AI lead to map how agents reason, plan, and execute tasks. I identified key system states and transitions — what an agent looks like when it's planning versus executing versus waiting for another agent — and used that to build a shared vocabulary for the design.</p>

            <div className="cs__img-stack">
              <DesignNote
                type="process"
                label="Phase 1 · System Mapping"
                heading="Design the model, then the interface."
                body="The first output wasn't a screen — it was a map of agent states and interaction types. By understanding how the system behaved internally, I could design an interface that reflected reality rather than hiding it. That map became the foundation for every subsequent design decision: what to show, when to show it, and how much control to surface."
                tags={['Agent state mapping', 'System behavior', 'Interaction types', 'Co-design with engineers']}
              />
            </div>

            <p style={{ marginTop: '32px' }}><strong>Phase 2 — Identify Breakdown Points</strong></p>
            <p>Working through the system map, I identified three structural failure points in the existing interaction model: fragmented human–agent–agent interactions with no unifying view, chat overload where everything was compressed into one thread, and a total lack of visibility into how agents were coordinating behind the scenes.</p>

            <div className="cs__img-stack">
              <DesignNote
                type="insight"
                label="Phase 2 · Breakdown Analysis"
                heading="Chat was the symptom. Invisible coordination was the problem."
                body="The chat interface wasn't wrong — it was just being asked to do too much. It tried to serve as the place for intent, execution updates, agent-to-agent handoffs, and output review simultaneously. Separating those functions was the core design move that unlocked everything else."
                tags={['Chat overload', 'Invisible coordination', 'Interaction fragmentation', 'Root cause analysis']}
              />
            </div>

            <p style={{ marginTop: '32px' }}><strong>Phase 3 — Prototype Interaction Models</strong></p>
            <p>With the breakdown points clear, I explored different models for separating interaction types and tested structured workflow views against purely conversational flows. The goal was to find the right balance: enough structure to make the system legible, without making users feel like they were managing a project board instead of working with AI.</p>
          </div>
        </section>

        {/* DESIGNING THE SOLUTION */}
        <section className="cs__section">
          <div className="cs__section-label">Designing the Solution</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">Four design decisions that made a multi-agent system feel understandable and in control.</h2>
            <p>Each decision addressed a specific breakdown point — and together, they created a coherent interaction model for a system that had never been designed for before.</p>

            {/* Decision 1 */}
            <div className="cs__design-pair">
              <img src="/Case Study 4_1.png" alt="Structured interaction types — conversation, execution, and output separated into distinct views" className="cs__section-img" />
              <p className="cs__img-caption">Interaction structure — conversation, execution, and output separated into distinct interface zones, reducing the cognitive load of tracking all three in a single chat thread</p>
              <DesignNote
                type="decision"
                label="Design Decision 1 · Structure Interaction Types"
                heading="Chat alone can't support multiple interaction modes."
                body="I separated the interface into three distinct interaction types: Conversation (intent and planning), Execution (agent activity and coordination), and Output (results, artefacts, and review). Rather than collapsing everything into one thread, each mode had its own surface. This reduced cognitive overload, made it obvious when you were directing the system versus watching it work, and gave users a clear place to review what had been produced."
                tags={['Interaction separation', 'Conversation / Execution / Output', 'Cognitive load', 'Interface architecture']}
              />
            </div>

            {/* Decision 2 */}
            <div className="cs__design-pair">
              <img src="/Case Study 4_2.png" alt="Agent Activity Panel — real-time visibility into agent states, coordination, and task sequencing" className="cs__section-img" />
              <p className="cs__img-caption">Agent Activity Panel — surfaces agent states (planning, executing, waiting, complete), agent-to-agent coordination, and task dependencies in real time so users always know what the system is doing</p>
              <DesignNote
                type="decision"
                label="Design Decision 2 · Make Agent Interactions Visible"
                heading="Making the invisible activity and sequencing of agents visible."
                body="I introduced an Agent Activity Panel that surfaces agent states in real time — planning, executing, waiting, complete — alongside agent-to-agent coordination and task sequencing. Users could see which agent had the baton, what it was doing, and what it was waiting on. The result was a dramatic increase in user confidence: instead of trusting a black box, users could follow the thread of work as it moved through the system."
                tags={['Agent Activity Panel', 'System visibility', 'Agent states', 'Real-time coordination']}
              />
            </div>

            {/* Decision 3 */}
            <div className="cs__design-pair">
              <img src="/Case Study 4_3.png" alt="Human-in-the-loop controls — guidance, monitoring, and review at each stage of the workflow" className="cs__section-img" />
              <p className="cs__img-caption">Human-in-the-loop controls — users can guide agents during planning, monitor execution in real time, and review and refine outputs before anything is committed</p>
              <DesignNote
                type="decision"
                label="Design Decision 3 · Support Human-in-the-Loop Across the Flow"
                heading="Interaction wasn't a single step — it was continuous."
                body="I designed control points at three stages of every workflow: Guide (during planning, where users shape the agent's intent and approach), Monitor (during execution, where users watch progress and can intervene), and Review (at output, where users verify, refine, or redirect before committing). This gave users a meaningful role in the process without requiring them to micromanage every agent action — balancing automation with the oversight that high-stakes workflows require."
                tags={['Human-in-the-loop', 'Guide / Monitor / Review', 'Oversight design', 'High-stakes workflows']}
              />
            </div>

            {/* Decision 4 */}
            <div className="cs__design-pair">
              <img src="/Case Study 4_4.png" alt="Workflow view — reusable, evolvable delivery pipelines replacing one-off task interactions" className="cs__section-img" />
              <p className="cs__img-caption">Workflow view — shifts the interaction model from one-off tasks to structured, reusable delivery pipelines that evolve based on user actions and agent learning</p>
              <DesignNote
                type="decision"
                label="Design Decision 4 · Enable Workflow Thinking"
                heading="Shift from one-off tasks to repeatable, evolvable workflows."
                body="Single-task thinking was the wrong mental model for a system that was meant to run complex, multi-stage delivery processes. I designed a workflow layer that allowed interactions to be structured, saved, and reused — with agents able to learn from each cycle and refine their behavior over time. This moved Mia from a tool you use once to a system that gets more reliable and aligned the more you work with it."
                tags={['Workflow design', 'Reusable pipelines', 'Agent learning', 'SDLC structure']}
              />
            </div>
          </div>
        </section>

        {/* THE SOLUTION */}
        <section className="cs__section">
          <div className="cs__section-label">The Solution</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">A structured interaction model for multi-agent software delivery.</h2>
            <ul className="cs__bullets cs__bullets--plain">
              <li>Chat for intent and requirement gathering — the entry point, not the whole experience</li>
              <li>Agent Activity Panel for real-time system visibility — what every agent is doing, right now</li>
              <li>Workflow view for structure, dependencies, and sequencing across the delivery process</li>
              <li>Outputs separated, traceable, and reviewable — nothing committed without human sign-off</li>
              <li>Human-in-the-loop controls at every meaningful stage of the workflow</li>
            </ul>
            <div className="cs__img-stack">
              <DesignNote
                type="principle"
                label="Design Principle"
                heading="Reliable AI systems require visible coordination, not hidden automation."
                body="The most dangerous failure mode in a multi-agent system isn't an agent making a mistake — it's a human not knowing one was made. Every design decision in Mia was oriented around this: make coordination visible, make state legible, and give humans the right levers at the right moments. Automation earns trust through transparency, not speed."
                tags={['Transparency', 'Trust in AI', 'Visible coordination', 'Interaction architecture']}
              />
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section className="cs__section">
          <div className="cs__section-label">Outcome</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">A proof of concept that became a strategic reference point.</h2>
            <div className="cs__stats">
              <StatCard stat="↗" label="Positioned as a strategic product offering to pitch agentic workflows to future clients" />
              <StatCard stat="✦" label="Became a reference point for future AI-driven product development at BCG X" />
              <StatCard stat="⬡" label="Defined early interaction patterns for scalable human–AI systems" />
              <StatCard stat="0→1" label="Articulated the value of multi-agent orchestration in enterprise contexts" />
            </div>
          </div>
        </section>

        {/* LEARNINGS */}
        <section className="cs__section">
          <div className="cs__section-label">Learnings</div>
          <div className="cs__section-body">
            <h2 className="cs__section-heading">What designing a multi-agent system taught me about the future of AI UX.</h2>
            <ul className="cs__bullets cs__bullets--plain">
              <li><strong>AI UX is about managing interaction patterns, not just outputs.</strong> When multiple agents are involved, the design challenge isn't any single agent's interface — it's the system of relationships between agents, and between agents and humans.</li>
              <li><strong>Chat is an entry point, not a scalable system model.</strong> Conversational UI works well for single-agent, single-task interactions. For complex, multi-stage, multi-agent workflows, it collapses. The interaction model has to grow with the complexity of the system.</li>
              <li><strong>Trust comes from visibility, traceability, and control.</strong> Users didn't need agents to be perfect — they needed to know what agents were doing, why, and how to course-correct. Transparency was the foundation of every trust-building decision.</li>
              <li><strong>Distributed agent systems require strong interaction architecture to be usable.</strong> The agents could reason and execute. The hard part was designing the structure around them — the coordination layer that made their work legible and manageable for the humans alongside them.</li>
            </ul>
          </div>
        </section>

      </div>

      {/* Closing pull quote */}
      <div className="cs__closing-quote">
        <blockquote>
          "The agents could think. The design challenge was making sure the humans could too."
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
