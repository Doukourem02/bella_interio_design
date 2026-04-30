import Banner from "./Components/Banner";
import Collection from "./Components/Collection";
import Growth from "./Components/Growth";
import InteriorDesign from "./Components/InteriorDesign";
import Newsletter from "./Components/Newsletter";
import Testimonials from "./Components/Testimonials";
import {
  getLearningGallery,
  getServices,
  getSiteSettings,
  getTestimonials,
} from "./lib/payloadClient";
import {
  mapLearningGallery,
  mapServices,
  mapSiteSettings,
  mapTestimonials,
} from "./lib/cmsMappers";

export default async function Home() {
  const [siteSettingsDoc, servicesDocs, testimonialsDocs, galleryDocs] =
    await Promise.all([
      getSiteSettings(),
      getServices(),
      getTestimonials(),
      getLearningGallery(),
    ]);

  const siteSettings = mapSiteSettings(siteSettingsDoc);
  const services = mapServices(servicesDocs);
  const testimonials = mapTestimonials(testimonialsDocs);
  const learningGallerySlides = mapLearningGallery(galleryDocs);

  return (
    <>
      <Banner siteSettings={siteSettings} />
      <Collection siteSettings={siteSettings} services={services} />
      <Growth
        siteSettings={siteSettings}
        learningGallerySlides={learningGallerySlides}
      />
      <InteriorDesign siteSettings={siteSettings} />
      <Testimonials siteSettings={siteSettings} testimonials={testimonials} />
      <Newsletter siteSettings={siteSettings} />
    </>
  );
}
