import { siteSettings as fallbackSiteSettings } from "@/app/data/siteSettings";
import { services as fallbackServices } from "@/app/data/services";
import { testimonials as fallbackTestimonials } from "@/app/data/testimonials";
import { learningGallerySlides as fallbackGallery } from "@/app/data/learningGallery";
import { CMS_BASE_URL } from "@/app/lib/payloadClient";

const fallbackServiceImages = fallbackServices.map((service) => service.image);

/** Payload often returns `/api/media/...`; Next/Image must load from the CMS host, not Vercel. */
function resolveCmsMediaUrl(url) {
  if (!url || typeof url !== "string") return url;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/assets/")) return url;
  if (url.startsWith("/")) {
    const base = CMS_BASE_URL.replace(/\/$/, "");
    return `${base}${url}`;
  }
  return url;
}

function mediaUrlFromRelation(media, fallbackUrl = "/assets/banner.jpg") {
  if (!media) return fallbackUrl;
  if (typeof media === "string") return fallbackUrl;
  const raw = media.url || fallbackUrl;
  return resolveCmsMediaUrl(raw) || fallbackUrl;
}

export function mapSiteSettings(settings) {
  if (!settings) return fallbackSiteSettings;

  const whatsappDisplay = settings.whatsapp || fallbackSiteSettings.whatsappDisplay;
  const secondaryPhoneDisplay =
    settings.secondaryPhone || fallbackSiteSettings.secondaryPhoneDisplay;
  const primaryEmail = settings.email || fallbackSiteSettings.primaryEmail;

  return {
    brandName: settings.brandName || fallbackSiteSettings.brandName,
    brandTagline: settings.brandTagline || fallbackSiteSettings.brandTagline,
    businessName: settings.businessName || fallbackSiteSettings.businessName,
    whatsappDisplay,
    whatsappHref: `tel:${whatsappDisplay.replace(/\s+/g, "")}`,
    primaryEmail,
    primaryEmailHref: `mailto:${primaryEmail}`,
    secondaryPhoneDisplay,
    secondaryPhoneHref: `tel:${secondaryPhoneDisplay.replace(/\s+/g, "")}`,
    facebookUrl: settings.facebookUrl || "https://facebook.com",
    instagramUrl: settings.instagramUrl || "https://instagram.com",
  };
}

export function mapServices(docs) {
  if (!docs?.length) return fallbackServices;

  return docs.map((service, index) => ({
    title: service.title,
    label: service.label || "Prestation",
    image: mediaUrlFromRelation(service.image, fallbackServiceImages[index % fallbackServiceImages.length]),
    description: service.description || "",
  }));
}

export function mapTestimonials(docs) {
  if (!docs?.length) return fallbackTestimonials;

  return docs.map((item, index) => {
    const first = item.name?.trim()?.charAt(0)?.toUpperCase() || "C";
    return {
      id: item.id || index + 1,
      name: item.name || "Cliente",
      role: item.role || "Projet décoration",
      rating: Number(item.rating) || 5,
      text: item.text || "",
      initials: first,
    };
  });
}

export function mapLearningGallery(docs) {
  if (!docs?.length) return fallbackGallery;

  return docs.map((item, index) => ({
    src: mediaUrlFromRelation(item.image, fallbackGallery[index % fallbackGallery.length]?.src),
    title: item.title || `Image ${index + 1}`,
    caption: item.caption || "",
  }));
}

export function mapArticles(docs) {
  const safeDocs = (docs || []).filter(Boolean);
  if (!safeDocs.length) return [];

  return safeDocs.map((article) => ({
    id: article.id,
    title: article.title,
    slug: article.slug,
    excerpt: article.excerpt || "",
    coverImage: mediaUrlFromRelation(article.coverImage, "/assets/banner.jpg"),
    publishedAt: article.publishedAt || article.createdAt,
    content: article.content,
  }));
}
