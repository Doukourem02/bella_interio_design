import React from 'react'

export default function AdminLogo() {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
        lineHeight: 1.1,
      }}
    >
      <span
        style={{
          color: 'var(--theme-text)',
          fontSize: '2.6rem',
          fontWeight: 700,
          letterSpacing: '0.01em',
        }}
      >
        Bellarose
      </span>
      <span
        style={{
          color: 'var(--theme-text)',
          fontSize: '0.95rem',
          fontWeight: 600,
          letterSpacing: '0.28em',
          opacity: 0.92,
          textTransform: 'uppercase',
        }}
      >
        admin panel
      </span>
      <span
        style={{
          color: 'var(--theme-text)',
          fontSize: '0.88rem',
          letterSpacing: '0.02em',
          opacity: 0.88,
          textAlign: 'center',
        }}
      >
        Espace reserve aux administrateurs uniquement
      </span>
    </div>
  )
}
