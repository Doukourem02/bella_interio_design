import type { CollectionConfig } from 'payload'

export const SiteSettings: CollectionConfig = {
  slug: 'siteSettings',
  labels: {
    singular: 'Paramètre du site',
    plural: 'Paramètres du site',
  },
  admin: {
    useAsTitle: 'businessName',
    group: 'Contenu',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'businessName',
      type: 'text',
      required: true,
      label: 'Nom complet de la marque',
    },
    {
      name: 'brandName',
      type: 'text',
      required: true,
      label: 'Nom court',
    },
    {
      name: 'brandTagline',
      type: 'text',
      label: 'Tagline',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo du site',
      admin: {
        description:
          'Optionnel. PNG ou SVG avec fond transparent recommandé. Sans logo, le nom court et la tagline restent affichés en texte.',
      },
    },
    {
      name: 'whatsapp',
      type: 'text',
      required: true,
      label: 'Numéro WhatsApp',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email principal',
    },
    {
      name: 'secondaryPhone',
      type: 'text',
      label: 'Téléphone secondaire',
    },
    {
      name: 'facebookUrl',
      type: 'text',
      label: 'URL Facebook',
    },
    {
      name: 'instagramUrl',
      type: 'text',
      label: 'URL Instagram',
    },
  ],
}

