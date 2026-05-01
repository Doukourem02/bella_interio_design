import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Fichier (photo, image)',
    plural: 'Bibliothèque — photos et fichiers',
  },
  admin: {
    group: 'Fichiers et images',
    description:
      'Toutes les images envoyées ici sont rangées au même endroit pour les réutiliser. Vous pouvez aussi envoyer une image directement depuis un article, une prestation ou la galerie.',
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
  upload: true,
}
