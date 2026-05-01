import React from 'react'

export default function AdminLogo() {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.15rem',
        lineHeight: 1.1,
      }}
    >
      <span
        style={{
          color: 'var(--theme-text)',
          fontSize: '2rem',
          fontWeight: 700,
          letterSpacing: '0.01em',
        }}
      >
        Bellarose
      </span>
      <span
        style={{
          color: 'var(--theme-text)',
          fontSize: '0.72rem',
          letterSpacing: '0.38em',
          opacity: 0.85,
          textTransform: 'uppercase',
        }}
      >
        création imagination
      </span>
    </div>
  )
}
