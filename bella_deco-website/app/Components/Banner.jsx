import { Button } from "@/components/ui/button";
import { Mail, Phone, Sparkles } from "lucide-react";

const Banner = () => {
  return (
    <section id="accueil" className="relative min-h-[760px] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/banner2.jpeg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(13,71,117,0.94)_0%,rgba(13,71,117,0.72)_42%,rgba(15,23,42,0.35)_100%)]" />

      <div className="relative container mx-auto flex min-h-[760px] items-center px-4 pt-28 lg:px-8">
        <div className="max-w-4xl text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <Sparkles size={18} className="text-primary" />
            Décoration d&apos;intérieur & apprentissage
          </div>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight sm:text-6xl lg:text-8xl">
            Bella création imagination
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/86 lg:text-xl">
            Un accompagnement chaleureux pour imaginer, harmoniser et
            transformer vos espaces intérieurs avec une touche bleue, élégante
            et personnelle.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild className="h-12 px-7">
              <a href="tel:+33605532420">
                <Phone size={18} />
                +33 6 05 53 24 20
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 border-white/50 bg-white/10 px-7 text-white hover:bg-white hover:text-slate-950"
            >
              <a href="mailto:britanie4@hotmail.com">
                <Mail size={18} />
                Envoyer un email
              </a>
            </Button>
          </div>

          <div className="mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {["Décoration", "Conseil couleur", "Apprentissage"].map((item) => (
              <div
                key={item}
                className="border-l-2 border-primary bg-white/8 px-4 py-3 text-sm font-medium text-white/90 backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
