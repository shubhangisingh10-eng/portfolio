import React from 'react'

export default function TagChip({ label }) {
  return (
    <span
      style={{
        display: 'inline-block',
        background: 'var(--blue-soft)',
        color: 'var(--blue)',
        border: '1px solid var(--blue-light)',
        borderRadius: '100px',
        padding: '4px 12px',
        fontSize: '0.68rem',
        fontFamily: 'var(--font-body)',
        fontWeight: '400',
        letterSpacing: '0.02em',
        lineHeight: 1.6,
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  )
}
