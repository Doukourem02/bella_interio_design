const CMS_BASE_URL =
  process.env.CMS_URL ||
  process.env.NEXT_PUBLIC_CMS_URL ||
  "http://localhost:3000";

async function payloadFetch(path, { revalidate = 60 } = {}) {
  const response = await fetch(`${CMS_BASE_URL}${path}`, {
    next: { revalidate },
  });

  if (!response.ok) {
    throw new Error(`Payload request failed (${response.status}) for ${path}`);
  }

  return response.json();
}

export async function getSiteSettings() {
  try {
    const data = await payloadFetch(
      "/api/siteSettings?limit=1&sort=-updatedAt&depth=1",
      { revalidate: 30 }
    );
    return data.docs?.[0] ?? null;
  } catch {
    return null;
  }
}

export async function getServices() {
  try {
    const data = await payloadFetch(
      "/api/services?where[isActive][equals]=true&sort=order&limit=20&depth=1"
    );
    return data.docs ?? [];
  } catch {
    return [];
  }
}

export async function getTestimonials() {
  try {
    const data = await payloadFetch(
      "/api/testimonials?where[isActive][equals]=true&sort=order&limit=20&depth=1"
    );
    return data.docs ?? [];
  } catch {
    return [];
  }
}

export async function getLearningGallery() {
  try {
    const data = await payloadFetch(
      "/api/learningGallery?sort=order&limit=20&depth=1"
    );
    return data.docs ?? [];
  } catch {
    return [];
  }
}

export async function getArticles() {
  try {
    const data = await payloadFetch(
      "/api/articles?where[status][equals]=published&sort=-publishedAt&limit=50&depth=1"
    );
    return data.docs ?? [];
  } catch {
    return [];
  }
}

export async function getArticleBySlug(slug) {
  try {
    const data = await payloadFetch(
      `/api/articles?where[slug][equals]=${encodeURIComponent(
        slug
      )}&where[status][equals]=published&limit=1&depth=1`
    );
    return data.docs?.[0] ?? null;
  } catch {
    return null;
  }
}

export { CMS_BASE_URL };
