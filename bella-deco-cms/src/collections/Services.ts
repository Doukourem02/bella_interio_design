import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Service',
    plural: 'Services',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'label', 'order', 'isActive'],
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
      name: 'label',
      type: 'text',
      label: 'Label',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Image',
      admin: {
        description: 'Upload direct ou sélection dans la bibliothèque.',
      },
    },
    {
      name: 'priceLabel',
      type: 'text',
      label: 'Prix / mention tarifaire',
      admin: {
        description: 'Exemple: "Sur devis", "A partir de 25 000 FCFA"',
      },
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

