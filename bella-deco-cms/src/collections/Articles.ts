import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  labels: {
    singular: 'Article',
    plural: 'Articles',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'publishedAt'],
    group: 'Contenu',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug (URL)',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Extrait',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Image de couverture',
      admin: {
        description:
          'Glissez-déposez un fichier ici ou choisissez dans la bibliothèque — pas besoin de passer par Média avant.',
      },
    },
    {
      name: 'priceLabel',
      type: 'text',
      label: 'Prix (optionnel)',
      admin: {
        description: 'Utile si vous publiez une ressource ou un produit.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Contenu',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        {
          label: 'Brouillon',
          value: 'draft',
        },
        {
          label: 'Publié',
          value: 'published',
        },
      ],
      required: true,
      label: 'Statut',
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Date de publication',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'seoTitle',
      type: 'text',
      label: 'Titre SEO',
    },
    {
      name: 'seoDescription',
      type: 'textarea',
      label: 'Description SEO',
    },
  ],
}

