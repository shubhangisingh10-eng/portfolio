import React from 'react'

export default function TagChip({ label }) {
  return (
    <span
      style={{
        display: 'inline-block',
        background: 'transparent',
        color: 'var(--ink-mid)',
        border: '1px solid var(--ink-pale)',
        borderRadius: '0',
        padding: '3px 10px',
        fontSize: '0.62rem',
        fontFamily: 'var(--font-label)',
        fontWeight: '400',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        lineHeight: 1.6,
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  )
}
