import React from 'react'

function normalizePublicURL(value: string | undefined): string {
  const raw = (value || '').trim().replace(/\/$/, '')
  if (!raw) return ''
  return raw.startsWith('http://') || raw.startsWith('https://') ? raw : `https://${raw}`
}

export default function BackToSiteLink() {
  const siteURL = normalizePublicURL(process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SERVER_URL)
  if (!siteURL) return null

  return (
    <div style={{ marginTop: '0.75rem', padding: '0 0.75rem' }}>
      <a
        href={siteURL}
        rel="noreferrer"
        style={{
          display: 'block',
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: '0.5rem',
          color: 'var(--theme-text)',
          fontSize: '0.92rem',
          padding: '0.6rem 0.75rem',
          textDecoration: 'none',
        }}
        title="Retourner sur le site public pour vérifier les changements"
      >
        Voir le site web
      </a>
    </div>
  )
}
