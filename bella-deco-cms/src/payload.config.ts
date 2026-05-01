import { postgresAdapter } from '@payloadcms/db-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { resendAdapter } from '@payloadcms/email-resend'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { fr } from '@payloadcms/translations/languages/fr'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { SiteSettings } from './collections/SiteSettings'
import { Services } from './collections/Services'
import { Testimonials } from './collections/Testimonials'
import { LearningGallery } from './collections/LearningGallery'
import { Articles } from './collections/Articles'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

/** URL publique du CMS (obligatoire en prod pour les liens des fichiers). Ex. https://xxx.up.railway.app */
function serverURLFromEnv(): string | undefined {
  const explicit =
    process.env.PAYLOAD_PUBLIC_SERVER_URL || process.env.SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL
  if (explicit) return explicit.replace(/\/$/, '')
  const railway = process.env.RAILWAY_PUBLIC_DOMAIN
  if (railway) return railway.startsWith('http') ? railway.replace(/\/$/, '') : `https://${railway}`
  return undefined
}

function smtpPortFromEnv(): number {
  const raw = process.env.SMTP_PORT
  const parsed = Number(raw)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 587
}

function emailAdapterFromEnv() {
  const resendApiKey = process.env.RESEND_API_KEY
  const resendFromAddress = process.env.RESEND_FROM_ADDRESS || process.env.SMTP_FROM_ADDRESS
  if (resendApiKey && resendFromAddress) {
    return resendAdapter({
      apiKey: resendApiKey,
      defaultFromAddress: resendFromAddress,
      defaultFromName: process.env.RESEND_FROM_NAME || process.env.SMTP_FROM_NAME || 'Bellarose Admin',
    })
  }

  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const fromAddress = process.env.SMTP_FROM_ADDRESS

  if (!host || !user || !pass || !fromAddress) return undefined

  return nodemailerAdapter({
    defaultFromAddress: fromAddress,
    defaultFromName: process.env.SMTP_FROM_NAME || 'Bellarose Admin',
    transportOptions: {
      auth: { user, pass },
      host,
      port: smtpPortFromEnv(),
      secure: process.env.SMTP_SECURE === 'true',
    },
  })
}

export default buildConfig({
  serverURL: serverURLFromEnv(),
  email: emailAdapterFromEnv(),
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— Gestion Bellarose',
    },
    components: {
      afterNavLinks: ['@/components/admin/BackToSiteLink'],
      graphics: {
        Logo: '@/components/admin/AdminLogo',
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    SiteSettings,
    Services,
    Testimonials,
    LearningGallery,
    Articles,
  ],
  editor: lexicalEditor(),
  /** Interface d’admin en français (boutons, menus, messages). */
  i18n: {
    fallbackLanguage: 'fr',
    supportedLanguages: { fr },
  },
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
