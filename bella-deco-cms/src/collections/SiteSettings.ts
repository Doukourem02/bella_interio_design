import type { CollectionConfig } from 'payload'

export const SiteSettings: CollectionConfig = {
  slug: 'siteSettings',
  labels: {
    singular: 'Infos générales du site',
    plural: 'Infos générales du site',
  },
  admin: {
    useAsTitle: 'brandName',
    defaultColumns: ['brandName', 'businessName', 'updatedAt'],
    group: 'Contenu',
    description:
      'Coordonnées et marque affichées sur tout le site (en-tête, pied de page, boutons d’appel). Une seule fiche suffit : ouvrez-la et modifiez-la plutôt que d’en créer plusieurs.',
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data || typeof data !== 'object') return data
        const brand =
          typeof data.brandName === 'string' ? data.brandName.trim() : ''
        const business =
          typeof data.businessName === 'string' ? data.businessName.trim() : ''
        if (!business && brand) {
          return { ...data, businessName: brand }
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'businessName',
      type: 'text',
      required: true,
      label: 'Nom complet de la marque',
      admin: {
        description:
          'Nom officiel affiché sur la page d’accueil et dans le pied de page (ex. Bellarose création imagination).',
      },
    },
    {
      name: 'brandName',
      type: 'text',
      required: true,
      label: 'Nom court',
      admin: {
        description:
          'Mot ou courte signature dans le menu du haut (ex. Bellarose).',
      },
    },
    {
      name: 'brandTagline',
      type: 'text',
      label: 'Phrase d’accroche sous le nom',
      admin: {
        description:
          'Petite ligne sous le nom dans le menu (souvent en majuscules discrètes).',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo du site',
      admin: {
        description:
          'Facultatif. Image du logo (PNG ou SVG, fond transparent si possible). Sinon le site affiche le nom en texte.',
      },
    },
    {
      name: 'whatsapp',
      type: 'text',
      required: true,
      label: 'Numéro WhatsApp',
      admin: {
        description:
          'Numéro utilisé pour le bouton « Appeler » et les contacts (indicatif inclus si besoin).',
      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email principal',
      admin: {
        description:
          'Adresse affichée et utilisée pour le lien « Envoyer un email » sur le site.',
      },
    },
    {
      name: 'secondaryPhone',
      type: 'text',
      label: 'Téléphone secondaire',
      admin: {
        description:
          'Autre numéro affiché dans le pied de page (facultatif).',
      },
    },
    {
      name: 'facebookUrl',
      type: 'text',
      label: 'Lien page Facebook',
      admin: {
        description:
          'Adresse complète de la page, qui commence par https://',
      },
    },
    {
      name: 'instagramUrl',
      type: 'text',
      label: 'Lien page Instagram',
      admin: {
        description:
          'Adresse complète du profil ou de la page, qui commence par https://',
      },
    },
  ],
}

