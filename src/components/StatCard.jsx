import React from 'react'

export default function StatCard({ stat, label }) {
  return (
    <div
      style={{
        background: 'var(--tag-bg)',
        borderRadius: '12px',
        padding: '28px 20px',
        textAlign: 'center',
        flex: '1 1 180px',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2rem',
          fontWeight: '600',
          color: 'var(--rust)',
          lineHeight: 1.2,
          marginBottom: '8px',
        }}
      >
        {stat}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.85rem',
          color: 'var(--gray-text)',
          lineHeight: 1.5,
        }}
      >
        {label}
      </div>
    </div>
  )
}
