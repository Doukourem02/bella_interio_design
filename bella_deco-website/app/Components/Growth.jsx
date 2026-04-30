import { BookOpen, HeartHandshake, HousePlus, Sparkles } from "lucide-react";
import Image from "next/image";
import LearningGallery from "./LearningGallery";
import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    icon: HousePlus,
    title: "Observer l'espace",
    description:
      "Comprendre les volumes, la lumière, les habitudes et les besoins avant de proposer une ambiance.",
  },
  {
    icon: Sparkles,
    title: "Composer l'ambiance",
    description:
      "Construire une direction claire avec couleurs, matières, mobilier, objets et finitions.",
  },
  {
    icon: BookOpen,
    title: "Transmettre les acquis",
    description:
      "Expliquer les choix et partager des bases simples pour rendre la personne plus autonome.",
  },
];

const Growth = () => {
  return (
    <section id="approche" className="bg-slate-50">
      <div className="container mx-auto px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Approche
          </span>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900 lg:text-6xl">
            Une décoration pensée avec vous
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Le travail de Bellarose repose sur l&apos;écoute, la créativité et la
            transmission. L&apos;objectif est de créer un intérieur agréable, mais
            aussi de vous aider a mieux comprendre les choix qui le rendent
            harmonieux.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 py-16 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <ScrollReveal
              as="div"
              key={pillar.title}
              delay={index * 120}
            >
              <div className="h-full rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-md bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white">
                  <pillar.icon size={30} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="overflow-hidden rounded-lg bg-slate-950 text-white">
          <div className="relative min-h-[220px] overflow-hidden border-b border-white/10 sm:min-h-[280px] lg:min-h-[340px]">
            <Image
              src="/assets/apprentissage%20/img2.png"
              alt="Edu Explore, ressources éducatives pour apprendre en s'amusant"
              fill
              sizes="(min-width: 1024px) 1180px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/36 via-transparent to-white/0" />
            <div className="absolute bottom-5 left-5 right-5 max-w-xl rounded-md border border-white/15 bg-slate-950/45 px-5 py-4 text-white backdrop-blur-md lg:bottom-8 lg:left-8">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">
                Apprentissage
              </p>
              <h3 className="mt-2 text-2xl font-semibold lg:text-3xl">
                Des ressources éducatives pour apprendre en s&apos;amusant
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 lg:p-12">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-primary text-white">
                <HeartHandshake size={28} />
              </div>
              <h3 className="text-3xl font-semibold">
                Spécialisée dans la décoration de l&apos;intérieur et
                l&apos;apprentissage des acquis divers
              </h3>
              <p className="mt-6 leading-8 text-white/75">
                L&apos;accompagnement peut aussi prendre la forme de cahiers
                d&apos;activités et de moments parent-enfant : lettres à replacer,
                peinture, motricité fine, jeux d&apos;association et exercices
                simples pour apprendre avec plaisir.
              </p>

              {[
                ["Lettres", "Reconnaître, placer et composer des mots"],
                ["Créativité", "Dessiner, peindre et manipuler les couleurs"],
                ["Motricité", "Utiliser les mains, les formes et les supports"],
                ["Confiance", "Avancer avec un parent dans un cadre rassurant"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="group mt-7 border-l-2 border-primary pl-4 transition-transform duration-300 hover:translate-x-1"
                >
                  <div className="text-2xl font-semibold text-primary">
                    {title}
                  </div>
                  <div className="mt-3 text-sm leading-6 text-white/70">
                    {text}
                  </div>
                </div>
              ))}
            </div>

            <LearningGallery />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Growth;
