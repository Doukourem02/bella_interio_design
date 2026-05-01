import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const Collection = ({ services, siteSettings }) => {
  return (
    <section id="prestations" className="bg-white">
      <div className="container mx-auto px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Prestations
          </span>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900 lg:text-6xl">
            Des espaces qui vous ressemblent
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {siteSettings.businessName} accompagne les particuliers dans la
            décoration de leurs intérieurs et dans des temps d&apos;apprentissage
            pensés pour les enfants, les parents et le quotidien familial.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal
              as="div"
              key={service.title}
              delay={index * 90}
            >
              <article className="service-card group h-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/35 hover:shadow-2xl">
                <div className="shine-hover relative h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="image-breathe object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent" />
                  <Badge className="float-soft absolute left-4 top-4 bg-primary text-white">
                    {service.label}
                  </Badge>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                  {service.priceLabel ? (
                    <p className="mt-4 text-sm font-semibold text-primary">
                      {service.priceLabel}
                    </p>
                  ) : null}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="h-12 px-8">
            <a href="/#contact">Demander un renseignement</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Collection;
