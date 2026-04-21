import { BookOpen, HeartHandshake, HousePlus, Sparkles } from "lucide-react";

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
            Le travail de Bella repose sur l&apos;écoute, la créativité et la
            transmission. L&apos;objectif est de créer un intérieur agréable, mais
            aussi de vous aider a mieux comprendre les choix qui le rendent
            harmonieux.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 py-16 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-md bg-primary/10 text-primary">
                <pillar.icon size={30} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                {pillar.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-lg bg-slate-950 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-primary text-white">
                <HeartHandshake size={28} />
              </div>
              <h3 className="text-3xl font-semibold">
                Spécialisée dans la décoration de l&apos;intérieur et
                l&apos;apprentissage des acquis divers
              </h3>
              <p className="mt-6 leading-8 text-white/75">
                Une prestation peut commencer par un simple conseil couleur,
                puis évoluer vers un accompagnement plus complet : ambiance,
                organisation, mobilier, accessoires et repères pour mieux
                s&apos;approprier son espace.
              </p>
            </div>

            <div className="grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:border-l lg:border-t-0">
              {[
                ["Ambiance", "Choix des couleurs et des matières"],
                ["Fonction", "Circulation, rangement et confort"],
                ["Style", "Objets, luminaires et finitions"],
                ["Acquis", "Conseils simples à réutiliser"],
              ].map(([title, text]) => (
                <div key={title} className="border-b border-white/10 p-8">
                  <div className="text-2xl font-semibold text-primary">
                    {title}
                  </div>
                  <div className="mt-3 text-sm leading-6 text-white/70">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
