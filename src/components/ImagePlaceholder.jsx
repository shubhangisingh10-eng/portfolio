import React from 'react'

export default function ImagePlaceholder({ bgColor = '#1C2B3A', caption = '', height = 420 }) {
  return (
    <div>
      <div
        style={{
          background: bgColor,
          borderRadius: '12px',
          height: `${height}px`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: `inset 0 0 80px rgba(0,0,0,0.3)`,
        }}
      >
        {/* Subtle vignette overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)',
            borderRadius: '12px',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              border: '2px dashed rgba(255,255,255,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px',
              color: 'rgba(255,255,255,0.35)',
              fontSize: '1.4rem',
            }}
          >
            ⬜
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: '500',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
            }}
          >
            Image Coming Soon
          </p>
        </div>
      </div>
      {caption && (
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            fontStyle: 'italic',
            color: 'var(--gray-text)',
            marginTop: '10px',
            paddingLeft: '4px',
          }}
        >
          {caption}
        </p>
      )}
    </div>
  )
}
