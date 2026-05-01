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
    description: 'Avis clients affichés sur la page d’accueil.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nom ou prénom affiché',
      admin: {
        description:
          'Comme vous souhaitez qu’il apparaisse sur le site (prénom seul, initiales, ou « Famille D. » par exemple).',
      },
    },
    {
      name: 'role',
      type: 'text',
      label: 'Sous-titre ou type de projet',
      admin: {
        description: 'Ex. : Rénovation salon, Couleurs chambre.',
      },
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
      defaultValue: 5,
      required: true,
      label: 'Note sur 5',
    },
    {
      name: 'text',
      type: 'textarea',
      required: true,
      label: 'Message ou citation',
      admin: {
        description:
          'Le témoignage tel qu’il doit être lu par les visiteurs.',
      },
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo de la personne (facultatif)',
      admin: {
        description: 'Portrait ou image libre de droits si vous en avez une.',
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
        description: 'Décochez pour masquer ce témoignage sans le supprimer.',
      },
    },
  ],
}

