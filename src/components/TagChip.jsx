import React from 'react'

export default function TagChip({ label }) {
  return (
    <span
      style={{
        display: 'inline-block',
        background: 'var(--tag-bg)',
        color: 'var(--tag-text)',
        borderRadius: '999px',
        padding: '4px 12px',
        fontSize: '0.78rem',
        fontFamily: 'var(--font-body)',
        fontWeight: '500',
        lineHeight: 1.6,
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  )
}
