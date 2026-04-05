import React from 'react'

export default function TagChip({ label }) {
  return (
    <span
      style={{
        display: 'inline-block',
        background: '#EBF3FC',
        color: '#3B72B0',
        border: '1px solid #93BBDA',
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
