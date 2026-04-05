import React from 'react'
import './TwoMinuteVersion.css'

export default function TwoMinuteVersion({ role, timeline, problem, approach, impact }) {
  return (
    <div className="tmv">
      <div className="tmv__card">

        {/* Header */}
        <div className="tmv__header">
          <div className="tmv__header-left">
            <span className="tmv__lightning">⚡</span>
            <span className="tmv__title">2 Minute Version</span>
            <span className="tmv__subtitle">— key highlights for a quick read</span>
          </div>
        </div>

        <div className="tmv__grid">

          {/* Context */}
          <div className="tmv__cell">
            <span className="tmv__col-label"><span className="tmv__icon">🧭</span> Context</span>
            <p className="tmv__col-role">{role}</p>
            {timeline && <span className="tmv__pill">{timeline}</span>}
          </div>

          {/* Problem */}
          <div className="tmv__cell">
            <span className="tmv__col-label"><span className="tmv__icon">🔍</span> The Problem</span>
            <p className="tmv__col-body">{problem}</p>
          </div>

          {/* What I Did */}
          <div className="tmv__cell">
            <span className="tmv__col-label"><span className="tmv__icon">🛠️</span> What I Did</span>
            <ul className="tmv__bullets">
              {approach.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="tmv__cell">
            <span className="tmv__col-label"><span className="tmv__icon">📈</span> Impact</span>
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

        {/* Footer */}
        <div className="tmv__footer">
          <span>Want the full story?</span>
          <a href="#cs-content" className="tmv__read-more">Continue reading ↓</a>
        </div>

      </div>
    </div>
  )
}
