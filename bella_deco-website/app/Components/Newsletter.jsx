import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Newsletter = ({ siteSettings }) => {
  const contacts = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: siteSettings.whatsappDisplay,
      href: siteSettings.whatsappHref,
    },
    {
      icon: Phone,
      label: "Telephone Canada",
      value: siteSettings.secondaryPhoneDisplay,
      href: siteSettings.secondaryPhoneHref,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteSettings.primaryEmail,
      href: siteSettings.primaryEmailHref,
    },
  ];
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[url('/assets/newletter.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-slate-950/75" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(13,71,117,0.92),rgba(15,23,42,0.82))]" />

      <div className="relative container mx-auto px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-white">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Contact
          </span>
          <h2 className="mt-4 text-4xl font-semibold lg:text-6xl">
            Parlons de votre intérieur
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/75">
            Pour une décoration, un conseil couleur, un projet d&apos;agencement
            ou un accompagnement autour des acquis divers, contactez{" "}
            {siteSettings.brandName} directement.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
          {contacts.map((contact) => (
            <a
              key={contact.value}
              href={contact.href}
              className="group rounded-lg border border-white/15 bg-white/10 p-6 text-white backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-white/15"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                <contact.icon size={22} />
              </div>
              <div className="text-sm uppercase tracking-[0.2em] text-white/60">
                {contact.label}
              </div>
              <div className="mt-2 text-xl font-semibold">{contact.value}</div>
            </a>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center gap-4 rounded-lg border border-white/15 bg-white/10 p-6 text-center text-white backdrop-blur-sm sm:flex-row sm:text-left">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-primary">
            <MapPin size={22} />
          </div>
          <p className="text-white/78">
            Accompagnement possible selon le projet, sur place ou à distance
            après un premier échange.
          </p>
          <Button asChild className="shrink-0">
            <a href={siteSettings.primaryEmailHref}>Démarrer</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
