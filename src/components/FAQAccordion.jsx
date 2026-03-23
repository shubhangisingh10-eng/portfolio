import React, { useState } from 'react'
import './FAQAccordion.css'

const faqs = [
  {
    q: 'What kind of problems do you like working on?',
    a: 'Complex, high-stakes systems where clarity, usability, and business outcomes intersect — especially AI products and enterprise platforms.',
  },
  {
    q: "What's it like working with you?",
    a: "Collaborative and direct. I come with opinions grounded in research, but I know when to listen and when to push back. I care a lot about the craft and even more about getting the right outcome.",
  },
  {
    q: "What's your typical design process?",
    a: "I start by deeply understanding the problem space — stakeholders, users, constraints. Then I move fast: rough concepts, early feedback, progressive refinement. I try to make decisions visible so teams can debate the right things.",
  },
  {
    q: "Do you prefer 0 to 1 or optimization work?",
    a: "Both, honestly. 0 to 1 is exciting because everything is still possible. Optimization is satisfying because the feedback loop is tight and you can see impact quickly. My sweet spot is somewhere in between — shaping a product that already has traction but needs a stronger foundation.",
  },
  {
    q: "How technical are you?",
    a: "Comfortable in Figma, code-literate enough to QA implementations and have credible engineering conversations. I prototype in Figma and occasionally in code for complex interactions.",
  },
  {
    q: "Outside of work?",
    a: "Hiking, reading, and thinking too hard about movie endings.",
  },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="faq">
      <p className="faq__label">FAQ</p>
      {faqs.map((item, i) => (
        <div
          key={i}
          className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
        >
          <button className="faq__question" onClick={() => toggle(i)}>
            <span>{item.q}</span>
            <span className="faq__icon">{openIndex === i ? '−' : '+'}</span>
          </button>
          <div className="faq__answer">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
