import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Compte éditeur',
    plural: 'Comptes éditeurs',
  },
  admin: {
    useAsTitle: 'email',
    group: 'Accès au tableau de bord',
    description:
      'Ici vous créez les personnes qui peuvent ouvrir le panneau de gestion (connexion avec email et mot de passe). Les visiteurs du site public ne sont pas listés ici.',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
