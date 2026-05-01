import type { CollectionConfig } from 'payload'

export const LearningGallery: CollectionConfig = {
  slug: 'learningGallery',
  labels: {
    singular: 'Diapositive du carrousel apprentissage',
    plural: 'Carrousel apprentissage (page d’accueil)',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', 'isFeatured'],
    group: 'Contenu',
    description:
      'Images du carrousel « apprentissage » sur la page d’accueil. Une ligne = une diapositive.',
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [
      ({ data, operation }) => {
        if (operation === 'delete' || !data || typeof data !== 'object') return data
        const title = typeof data.title === 'string' ? data.title.trim() : ''
        if (title) return data
        const caption = typeof data.caption === 'string' ? data.caption.trim() : ''
        if (caption) {
          const short = caption.length > 70 ? `${caption.slice(0, 70)}…` : caption
          return { ...data, title: short }
        }
        return { ...data, title: 'Diapositive carrousel' }
      },
    ],
    afterRead: [
      ({ doc }) => {
        if (!doc || typeof doc !== 'object') return doc
        const title = typeof doc.title === 'string' ? doc.title.trim() : ''
        if (title) return doc
        const caption = typeof doc.caption === 'string' ? doc.caption.trim() : ''
        if (caption) {
          const short = caption.length > 70 ? `${caption.slice(0, 70)}…` : caption
          return { ...doc, title: short }
        }
        return { ...doc, title: 'Diapositive carrousel' }
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre visible sur la diapositive',
      admin: {
        description:
          'Court titre pour cette image dans le carrousel.',
      },
    },
    {
      name: 'caption',
      type: 'textarea',
      required: true,
      label: 'Texte d’accompagnement',
      admin: {
        description:
          'Phrase ou petit paragraphe qui décrit l’image ou l’activité.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Photo de la diapositive',
      admin: {
        description:
          'Envoyez une nouvelle photo ou choisissez-en une déjà enregistrée.',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      required: true,
      label: 'Ordre dans le carrousel',
      admin: {
        description: 'Les petits nombres apparaissent en premier.',
      },
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Mettre en avant',
      admin: {
        description: 'Permet de signaler une image importante dans la liste admin.',
      },
    },
  ],
}

