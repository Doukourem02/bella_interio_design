import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  labels: {
    singular: 'Article de blog',
    plural: 'Articles (page Conseils)',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'publishedAt'],
    group: 'Contenu',
    description:
      'Articles du blog « Conseils » sur le site. Enregistrez en « Publié » pour qu’ils apparaissent en ligne.',
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
        const slug = typeof data.slug === 'string' ? data.slug.trim() : ''
        if (slug) {
          const fromSlug = slug.replace(/-/g, ' ')
          const pretty =
            fromSlug.length > 0
              ? fromSlug.charAt(0).toUpperCase() + fromSlug.slice(1)
              : ''
          if (pretty) return { ...data, title: pretty }
        }
        return { ...data, title: 'Article sans titre' }
      },
    ],
    afterRead: [
      ({ doc }) => {
        if (!doc || typeof doc !== 'object') return doc
        const title = typeof doc.title === 'string' ? doc.title.trim() : ''
        if (title) return doc
        const slug = typeof doc.slug === 'string' ? doc.slug.trim() : ''
        if (slug) {
          const fromSlug = slug.replace(/-/g, ' ')
          const pretty =
            fromSlug.length > 0
              ? fromSlug.charAt(0).toUpperCase() + fromSlug.slice(1)
              : ''
          if (pretty) return { ...doc, title: pretty }
        }
        return { ...doc, title: 'Article sans titre' }
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre affiché sur le site',
      admin: {
        description:
          'Grand titre que les visiteurs lisent en haut de l’article.',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Fin du lien web de l’article',
      admin: {
        description:
          'Texte court sans espaces, idéalement avec des tirets (ex. : conseils-couleur-salon). Il apparaît dans l’adresse après /conseils/… Ce n’est pas le titre visible sur la page.',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Résumé court',
      admin: {
        description:
          'Quelques lignes sous le titre sur la liste des articles et pour les aperçus.',
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Image de couverture',
      admin: {
        description:
          'Envoyez une nouvelle image ou reprenez une image déjà enregistrée sous Photos et fichiers.',
      },
    },
    {
      name: 'priceLabel',
      type: 'text',
      label: 'Prix ou mention (facultatif)',
      admin: {
        description:
          'Prix ou texte habituellement affiché (ex. : À partir de 10 000 F, Sur devis). Si vous remplissez aussi « Prix promotionnel », ce texte sera barré sur le site et le prix promo sera mis en avant.',
      },
    },
    {
      name: 'promotionalPriceLabel',
      type: 'text',
      label: 'Prix promotionnel (facultatif)',
      admin: {
        description:
          'Remplissez uniquement en cas d’offre : sur le site, le « Prix ou mention » ci-dessus sera barré et ce texte sera affiché à côté. Laissez vide pour n’afficher qu’un seul prix ou mention, sans barré.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Texte de l’article',
      admin: {
        description:
          'Corps de l’article : paragraphes, listes, etc. Ce que les visiteurs lisent sur la page.',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        {
          label: 'Brouillon (pas visible sur le site)',
          value: 'draft',
        },
        {
          label: 'Publié (visible sur le site)',
          value: 'published',
        },
      ],
      required: true,
      label: 'Visibilité',
      admin: {
        description:
          'Choisissez « Publié » uniquement quand l’article est prêt à être vu par tout le monde.',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Date et heure affichées',
      admin: {
        description:
          'Date montrée sous le titre sur le site. Souvent la date de mise en ligne.',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'seoTitle',
      type: 'text',
      label: 'Titre pour Google (facultatif)',
      admin: {
        description:
          'Si vous laissez vide, le titre de l’article sera utilisé dans les résultats de recherche.',
      },
    },
    {
      name: 'seoDescription',
      type: 'textarea',
      label: 'Court résumé pour Google (facultatif)',
      admin: {
        description:
          'Quelques lignes qui peuvent s’afficher sous le titre dans Google. Sinon Google choisira un extrait tout seul.',
      },
    },
  ],
}

