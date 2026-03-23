import React from 'react'
import './TwoMinuteVersion.css'

/**
 * TwoMinuteVersion — always open, no toggle
 *
 * Props:
 *   role        – string
 *   timeline    – string
 *   problem     – string
 *   approach    – string[]
 *   impact      – { stat: string, label: string }[]
 */
export default function TwoMinuteVersion({ role, timeline, problem, approach, impact }) {
  return (
    <div className="tmv">
      {/* Header — static, no toggle */}
      <div className="tmv__header">
        <div className="tmv__header-left">
          <span className="tmv__lightning">⚡</span>
          <div>
            <span className="tmv__title">2 Minute Version</span>
            <span className="tmv__subtitle">Key highlights for a quick read</span>
          </div>
        </div>
      </div>

      {/* Body — always visible */}
      <div className="tmv__body">
        <div className="tmv__grid">

          {/* Col 1 — Context */}
          <div className="tmv__col">
            <span className="tmv__col-label">Context</span>
            <p className="tmv__col-role">{role}</p>
            {timeline && (
              <span className="tmv__pill">{timeline}</span>
            )}
          </div>

          {/* Col 2 — Problem */}
          <div className="tmv__col">
            <span className="tmv__col-label">The Problem</span>
            <p className="tmv__col-body">{problem}</p>
          </div>

          {/* Col 3 — Approach */}
          <div className="tmv__col">
            <span className="tmv__col-label">What I Did</span>
            <ul className="tmv__bullets">
              {approach.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Impact */}
          <div className="tmv__col tmv__col--impact">
            <span className="tmv__col-label">Impact</span>
            <div className="tmv__stats">
              {impact.map((item, i) => (
                <div key={i} className="tmv__stat">
                  <span className="tmv__stat-number">{item.stat}</span>
                  <span className="tmv__stat-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="tmv__footer">
          <span>Want the full story?</span>
          <a href="#cs-content" className="tmv__read-more">Continue reading ↓</a>
        </div>
      </div>
    </div>
  )
}
