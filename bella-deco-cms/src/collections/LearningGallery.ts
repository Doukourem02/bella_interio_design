import type { CollectionConfig } from 'payload'

export const LearningGallery: CollectionConfig = {
  slug: 'learningGallery',
  labels: {
    singular: "Image d'apprentissage",
    plural: "Galerie d'apprentissage",
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', 'isFeatured'],
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
      name: 'caption',
      type: 'textarea',
      required: true,
      label: 'Légende',
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
      name: 'order',
      type: 'number',
      defaultValue: 0,
      required: true,
      label: "Ordre d'affichage",
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Mise en avant',
    },
  ],
}

