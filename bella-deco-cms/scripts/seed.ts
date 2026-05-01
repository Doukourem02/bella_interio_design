/**
 * Seed minimal demo content (idempotent).
 * Run from repo root `bella-deco-cms` with DATABASE_URL + PAYLOAD_SECRET in .env:
 *   npx tsx scripts/seed.ts
 */
import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

const MARKER_SLUG = 'bienvenue-bellarose'

const tinyPng = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
  'base64',
)

const lexicalArticleBody = {
  root: {
    type: 'root',
    format: '',
    indent: 0,
    version: 1,
    children: [
      {
        type: 'paragraph',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            type: 'text',
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text: 'Ceci est un premier article de démonstration. Modifiez-le ou supprimez-le depuis le panneau admin Payload.',
            version: 1,
          },
        ],
        direction: 'ltr',
      },
    ],
    direction: 'ltr',
  },
}

async function ensureMedia(payload: Awaited<ReturnType<typeof getPayload>>) {
  const existing = await payload.find({
    collection: 'media',
    where: { alt: { equals: 'seed-placeholder' } },
    limit: 1,
  })
  if (existing.docs[0]) return existing.docs[0].id

  const created = await payload.create({
    collection: 'media',
    data: { alt: 'seed-placeholder' },
    file: {
      data: tinyPng,
      mimetype: 'image/png',
      name: 'seed.png',
      size: tinyPng.length,
    },
  })
  return created.id
}

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error('Missing DATABASE_URL')
    process.exit(1)
  }
  if (!process.env.PAYLOAD_SECRET) {
    console.error('Missing PAYLOAD_SECRET')
    process.exit(1)
  }

  const payload = await getPayload({ config })

  const articleExists = await payload.find({
    collection: 'articles',
    where: { slug: { equals: MARKER_SLUG } },
    limit: 1,
  })
  if (articleExists.totalDocs > 0) {
    console.log('Seed already applied (article marker found). Exit.')
    process.exit(0)
  }

  const mediaId = await ensureMedia(payload)
  console.log('Media id:', mediaId)

  const servicesRes = await payload.find({ collection: 'services', limit: 0 })
  const testimonialsRes = await payload.find({ collection: 'testimonials', limit: 0 })
  const galleryRes = await payload.find({ collection: 'learningGallery', limit: 0 })

  const siteRes = await payload.find({ collection: 'siteSettings', limit: 0 })
  if (siteRes.totalDocs === 0) {
    await payload.create({
      collection: 'siteSettings',
      data: {
        businessName: 'Bellarose création imagination',
        brandName: 'Bellarose',
        brandTagline: 'création imagination',
        whatsapp: '+2250704225474',
        email: 'karamokojuniorkone52@gmail.com',
        secondaryPhone: '+1 418 295 5936',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
      },
    })
    console.log('Created siteSettings')
  } else {
    console.log('siteSettings already present, skip')
  }

  const servicesSeed = [
    {
      title: "Décoration d'intérieur",
      label: 'Espaces de vie',
      description:
        "Création d'ambiances harmonieuses pour salons, chambres et espaces familiaux.",
      order: 1,
    },
    {
      title: 'Choix des couleurs',
      label: 'Harmonie',
      description:
        'Association des teintes et des matières pour une identité claire à chaque pièce.',
      order: 2,
    },
    {
      title: 'Agencement & mise en scène',
      label: 'Valorisation',
      description:
        'Organisation du mobilier, circulation fluide et mise en valeur des volumes.',
      order: 3,
    },
    {
      title: 'Accessoires & lumières',
      label: 'Détails',
      description:
        'Luminaires, textiles et finitions pour signer une ambiance.',
      order: 4,
    },
    {
      title: 'Relooking déco',
      label: 'Transformation',
      description:
        'Redonner du caractère sans tout changer, avec des choix pratiques.',
      order: 5,
    },
    {
      title: "Cahiers d'activités & apprentissage",
      label: 'Parent-enfant',
      description:
        'Activités guidées : lettres, motricité fine et moments parent-enfant.',
      order: 6,
    },
  ]

  if (servicesRes.totalDocs === 0) {
    for (const s of servicesSeed) {
      await payload.create({
        collection: 'services',
        data: {
          ...s,
          image: mediaId,
          isActive: true,
        },
      })
    }
    console.log('Created', servicesSeed.length, 'services')
  } else {
    console.log('Services already present (', servicesRes.totalDocs, '), skip')
  }

  const testimonialsSeed = [
    {
      name: 'Projet salon',
      role: 'Ambiance chaleureuse',
      rating: 5,
      text: 'Une pièce change quand couleurs, lumière et objets dialoguent ensemble.',
      order: 1,
    },
    {
      name: 'Projet chambre',
      role: 'Repos & harmonie',
      rating: 5,
      text: 'La décoration devient plus simple quand chaque choix a une raison.',
      order: 2,
    },
    {
      name: 'Accompagnement',
      role: 'Apprentissage des acquis',
      rating: 5,
      text: 'Transmettre des repères pour continuer à prendre soin de son intérieur.',
      order: 3,
    },
  ]
  if (testimonialsRes.totalDocs === 0) {
    for (const t of testimonialsSeed) {
      await payload.create({
        collection: 'testimonials',
        data: { ...t, isActive: true },
      })
    }
    console.log('Created', testimonialsSeed.length, 'testimonials')
  } else {
    console.log('Testimonials already present (', testimonialsRes.totalDocs, '), skip')
  }

  const gallerySeed = [
    { title: 'Ateliers variés', caption: 'Lettres, peinture, motricité et activités parent-enfant.', order: 1 },
    { title: 'Lettres à replacer', caption: 'Reconnaître les formes et composer.', order: 2 },
    { title: "Cahiers d'activités", caption: 'Des supports simples pour progresser.', order: 3 },
    { title: 'Motricité fine', caption: 'Manipuler, associer, créer.', order: 4 },
    { title: 'Apprendre en famille', caption: 'Des moments guidés avec un parent.', order: 5 },
  ]
  if (galleryRes.totalDocs === 0) {
    for (let i = 0; i < gallerySeed.length; i++) {
      const g = gallerySeed[i]
      await payload.create({
        collection: 'learningGallery',
        data: {
          ...g,
          image: mediaId,
          isFeatured: i === 0,
        },
      })
    }
    console.log('Created', gallerySeed.length, 'learningGallery items')
  } else {
    console.log('learningGallery already present (', galleryRes.totalDocs, '), skip')
  }

  await payload.create({
    collection: 'articles',
    data: {
      title: 'Bienvenue sur le blog Bellarose',
      slug: MARKER_SLUG,
      excerpt: 'Premier article pour valider la page Conseils sur le site.',
      coverImage: mediaId,
      content: lexicalArticleBody,
      status: 'published',
      publishedAt: new Date().toISOString(),
    },
  })
  console.log('Created marker article:', MARKER_SLUG)

  console.log('Done. Refresh https://bella-interio-design.vercel.app/conseils')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
