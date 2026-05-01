import React from 'react'
import './styles.css'

export const metadata = {
  description:
    'Accès à l’administration du site Bellarose : connexion et gestion du contenu.',
  title: 'Administration — Bellarose',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="fr">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
