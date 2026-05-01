import { postgresAdapter } from '@payloadcms/db-postgres'
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

export default buildConfig({
  serverURL: serverURLFromEnv(),
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
