import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <div className="home bellarose-home">
      <div className="overlay" />
      <div className="aurora aurora-left" />
      <div className="aurora aurora-right" />
      <div className="content bellarose-content">
        <div className="hero-card">
          <span className="badge">Bellarose - Espace administration</span>
          <h1>Gestion du contenu du site</h1>
          <p className="subtitle">
            Bienvenue {user ? 'dans votre tableau de bord.' : ''} Publiez vos
            services, témoignages, images d&apos;apprentissage et articles en toute
            autonomie.
          </p>
          <div className="links bellarose-links">
            <a className="admin" href={payloadConfig.routes.admin}>
              Ouvrir le panneau admin
            </a>
            <a
              className="docs"
              href="https://payloadcms.com/docs"
              rel="noreferrer"
              target="_blank"
            >
              Documentation Payload
            </a>
          </div>
        </div>
      </div>
      <div className="footer bellarose-footer">
        <p>Bellarose création imagination - CMS</p>
      </div>
    </div>
  )
}
