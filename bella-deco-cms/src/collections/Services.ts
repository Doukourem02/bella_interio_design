import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Prestation',
    plural: 'Prestations',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'label', 'order', 'isActive'],
    group: 'Contenu',
    description: 'Cartes « ce que nous faisons » sur la page d’accueil.',
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
        const label = typeof data.label === 'string' ? data.label.trim() : ''
        if (label) return { ...data, title: label }
        const order = typeof data.order === 'number' ? data.order : ''
        return {
          ...data,
          title: order !== '' ? `Prestation (ordre ${order})` : 'Prestation à nommer',
        }
      },
    ],
    afterRead: [
      ({ doc }) => {
        if (!doc || typeof doc !== 'object') return doc
        const title = typeof doc.title === 'string' ? doc.title.trim() : ''
        if (title) return doc
        const label = typeof doc.label === 'string' ? doc.label.trim() : ''
        if (label) return { ...doc, title: label }
        const order = typeof doc.order === 'number' ? doc.order : ''
        return {
          ...doc,
          title: order !== '' ? `Prestation (ordre ${order})` : 'Prestation à nommer',
        }
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre de la prestation',
      admin: {
        description:
          'Nom principal sous la photo sur la page d’accueil.',
      },
    },
    {
      name: 'label',
      type: 'text',
      label: 'Petit mot sur la photo',
      admin: {
        description:
          'Court texte affiché en badge sur l’image (ex. : Espaces de vie, Harmonie).',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Texte descriptif',
      admin: {
        description:
          'Expliquez ce que vous proposez, en quelques phrases claires pour les visiteurs.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Photo illustrant la prestation',
      admin: {
        description:
          'Envoyez une nouvelle photo ou choisissez-en une déjà enregistrée.',
      },
    },
    {
      name: 'priceLabel',
      type: 'text',
      label: 'Tarif ou formulation',
      admin: {
        description:
          'Texte court affiché sous la description (ex. : Sur devis, À partir de 25 000 FCFA). Laissez vide si vous préférez ne rien montrer.',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      required: true,
      label: 'Ordre sur la page',
      admin: {
        description: 'Les petits nombres apparaissent en premier.',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      label: 'Afficher sur le site',
      admin: {
        description: 'Décochez pour masquer cette prestation sans la supprimer.',
      },
    },
  ],
}

