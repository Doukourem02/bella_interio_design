import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Brush,
  GraduationCap,
  Home,
  LampDesk,
  Layers,
  Palette,
} from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Décoration d'intérieur",
    label: "Espaces de vie",
    image: "/assets/collections/sofa.jpg",
    icon: Home,
    description:
      "Création d'ambiances harmonieuses pour salons, chambres, bureaux et espaces familiaux.",
  },
  {
    title: "Choix des couleurs",
    label: "Harmonie",
    image: "/assets/collections/lamp.jpg",
    icon: Palette,
    description:
      "Association des teintes, matières et textures pour donner une identité claire à chaque pièce.",
  },
  {
    title: "Agencement & mise en scene",
    label: "Valorisation",
    image: "/assets/Interior/Interior1.jpg",
    icon: Layers,
    description:
      "Organisation du mobilier, circulation fluide et mise en valeur des volumes existants.",
  },
  {
    title: "Accessoires & lumières",
    label: "Details",
    image: "/assets/collections/lamp2.jpg",
    icon: LampDesk,
    description:
      "Sélection de luminaires, objets décoratifs, textiles et finitions pour signer l'ambiance.",
  },
  {
    title: "Relooking déco",
    label: "Transformation",
    image: "/assets/Interior/Interior4.jpg",
    icon: Brush,
    description:
      "Redonner du caractère à un intérieur sans tout changer, avec des choix pratiques et élégants.",
  },
  {
    title: "Cahiers d'activités & apprentissage",
    label: "Parent-enfant",
    image: "/assets/apprentissage%20/img3.png",
    icon: GraduationCap,
    description:
      "Activités éducatives guidées avec lettres, cahiers, motricité fine et supports créatifs pour apprendre en douceur.",
  },
];

const Collection = () => {
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
            Bellarose création imagination accompagne les particuliers dans la
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
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="h-12 px-8">
            <a href="#contact">Demander un renseignement</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Collection;
