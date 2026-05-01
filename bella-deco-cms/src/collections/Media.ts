import path from 'path'
import type { CollectionConfig } from 'payload'

// Forcé en prod Docker via ENV (Dockerfile). En local : ./media à la racine du projet si la variable est absente.
const mediaDir = path.resolve(
  process.env.PAYLOAD_UPLOAD_DIR || path.join(process.cwd(), 'media'),
)

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Fichier (photo, image)',
    plural: 'Bibliothèque — photos et fichiers',
  },
  admin: {
    group: 'Fichiers et images',
    useAsTitle: 'alt',
    defaultColumns: ['alt', 'updatedAt'],
    description:
      'Images uniquement (JPG, PNG, GIF, WebP, SVG…). Les vidéos (MP4, etc.) ne sont pas acceptées ici : elles provoquent une erreur à l’enregistrement. Les fichiers sont enregistrés sur le serveur dans le dossier « media » (pensez à un volume disque en production si besoin).',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Description de l’image',
      admin: {
        description:
          'Décrivez l’image en une courte phrase (ex. : salon bleu avec canapé et plantes). Ce n’est pas le nom du fichier : le nom technique du fichier est créé tout seul à l’envoi. Ce texte aide les personnes malvoyantes et les moteurs de recherche.',
      },
    },
  ],
  upload: {
    staticDir: mediaDir,
    mimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml', 'image/avif'],
  },
}
