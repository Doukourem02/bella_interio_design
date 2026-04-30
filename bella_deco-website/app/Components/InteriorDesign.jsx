import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Eye, MessageCircle, PencilRuler } from "lucide-react";
import Image from "next/image";

const interiorImages = [
  {
    id: 1,
    src: "/assets/Interior/Interior1.jpg",
    alt: "Salon harmonieux en décoration intérieure",
  },
  {
    id: 2,
    src: "/assets/Interior/Interior2.jpg",
    alt: "Chambre contemporaine",
  },
  {
    id: 3,
    src: "/assets/Interior/Interior3.jpg",
    alt: "Espace intérieur lumineux",
  },
  {
    id: 4,
    src: "/assets/Interior/Interior4.jpg",
    alt: "Coin de vie élégant",
  },
];

const steps = [
  {
    step: "01",
    title: "Echange",
    desc: "Comprendre vos envies, vos contraintes, vos couleurs préférées et l'usage de chaque espace.",
  },
  {
    step: "02",
    title: "Direction déco",
    desc: "Proposer une ambiance, une palette et des idées d'agencement faciles à visualiser.",
  },
  {
    step: "03",
    title: "Selection",
    desc: "Choisir les éléments importants : mobilier, textiles, lumière, objets et finitions.",
  },
  {
    step: "04",
    title: "Transmission",
    desc: "Vous laisser des repères clairs pour entretenir l'harmonie et continuer à apprendre.",
  },
];

const benefits = [
  "Décoration personnalisée",
  "Conseil couleurs et matières",
  "Agencement des espaces",
  "Accompagnement à distance possible",
  "Apprentissage des bases utiles",
  "Contact direct et humain",
];

const InteriorDesign = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Savoir-faire
              </span>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 lg:text-6xl">
                Transformer un lieu sans perdre son âme
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Bellarose création imagination aide à faire le lien entre vos idées
                et un résultat concret : un intérieur plus lisible, plus beau,
                plus pratique et plus personnel.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-50 p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Eye size={22} />
                </div>
                <h3 className="font-semibold text-slate-900">
                  Une vision claire
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Des choix cohérents pour éviter les achats dispersés et les
                  espaces qui manquent d&apos;unite.
                </p>
              </div>

              <div className="rounded-lg bg-slate-50 p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <PencilRuler size={22} />
                </div>
                <h3 className="font-semibold text-slate-900">
                  Des conseils applicables
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Des solutions adaptees au budget, au quotidien et a la
                  personnalite de la cliente ou du foyer.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                    <Check size={15} />
                  </span>
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild className="h-12 px-7">
                <a href="#contact">
                  Prendre contact
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 border-slate-300 px-7 text-slate-700"
              >
                <a href="mailto:karamokojuniorkone52@gmail.com">
                  <MessageCircle size={18} />
                  Écrire par email
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {interiorImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-lg bg-slate-100 shadow-sm ${
                  index === 0 ? "row-span-2 min-h-[460px]" : "min-h-[220px]"
                } ${index === 3 ? "col-span-2 min-h-[250px]" : ""}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent opacity-75" />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white">
                  {image.alt}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((process) => (
            <div
              key={process.step}
              className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="mb-5 text-4xl font-semibold text-primary">
                {process.step}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                {process.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {process.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorDesign;
