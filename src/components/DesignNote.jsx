import React from 'react'
import './DesignNote.css'

/**
 * DesignNote — replaces image placeholders for NDA-protected work.
 * Shows the design thinking / decision at each stage instead of a screenshot.
 *
 * Props:
 *   type        – 'decision' | 'insight' | 'principle' | 'process'
 *   label       – small eyebrow label e.g. "Design Decision"
 *   heading     – the main point
 *   body        – supporting detail
 *   tags        – optional string[] of short attribute chips
 *   nda         – bool, show NDA note (default true)
 */
export default function DesignNote({ type = 'decision', label, heading, body, tags = [], nda = true }) {
  const icons = {
    decision: '◆',
    insight:  '✦',
    principle:'◎',
    process:  '→',
  }

  return (
    <div className={`dn dn--${type}`}>
      <div className="dn__inner">
        <div className="dn__top">
          <span className="dn__icon">{icons[type]}</span>
          <span className="dn__label">{label}</span>
          {nda && <span className="dn__nda">NDA · Visuals redacted</span>}
        </div>

        <h3 className="dn__heading">{heading}</h3>

        {body && <p className="dn__body">{body}</p>}

        {tags.length > 0 && (
          <div className="dn__tags">
            {tags.map((t, i) => (
              <span key={i} className="dn__tag">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
