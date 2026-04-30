import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: {
    singular: 'Témoignage',
    plural: 'Témoignages',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'rating', 'order', 'isActive'],
    group: 'Contenu',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nom affiché',
    },
    {
      name: 'role',
      type: 'text',
      label: 'Contexte',
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
      defaultValue: 5,
      required: true,
      label: 'Note',
    },
    {
      name: 'text',
      type: 'textarea',
      required: true,
      label: 'Texte',
    },
    {
      name: 'avatar',
      type: 'relationship',
      relationTo: 'media',
      label: 'Photo (optionnelle)',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      required: true,
      label: "Ordre d'affichage",
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      label: 'Actif',
    },
  ],
}

