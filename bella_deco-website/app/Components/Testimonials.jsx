"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Projet salon",
    role: "Ambiance chaleureuse",
    rating: 5,
    text: "Une pièce peut changer totalement quand les couleurs, la lumière et les objets dialoguent ensemble.",
    initials: "S",
  },
  {
    id: 2,
    name: "Projet chambre",
    role: "Repos & harmonie",
    rating: 5,
    text: "La décoration devient plus simple quand chaque choix a une raison et une place dans l'ensemble.",
    initials: "C",
  },
  {
    id: 3,
    name: "Accompagnement",
    role: "Apprentissage des acquis",
    rating: 5,
    text: "L'objectif est aussi de transmettre des repères pour continuer à prendre soin de son intérieur.",
    initials: "A",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="temoignages" className="bg-slate-50">
      <div className="container mx-auto px-4 py-24 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Inspirations
          </span>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900 lg:text-6xl">
            Une experience douce et guidée
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Le site présente Bellarose comme une professionnelle de la décoration :
            attentive aux personnes, aux espaces et aux apprentissages utiles.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full shrink-0">
                  <div className="mx-4 rounded-lg border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
                    <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-md bg-primary/10">
                      <Quote className="text-primary" size={32} />
                    </div>

                    <blockquote className="mb-8 text-center text-xl font-medium leading-9 text-slate-700 lg:text-2xl">
                      &quot;{testimonial.text}&quot;
                    </blockquote>

                    <div className="mb-6 flex justify-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={22}
                          className="fill-current text-amber-400"
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
                        {testimonial.initials}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-slate-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 flex h-12 w-12 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-lg transition-all duration-200 hover:border-primary hover:text-primary lg:-translate-x-6"
            aria-label="Element precedent"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 flex h-12 w-12 -translate-y-1/2 translate-x-2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-lg transition-all duration-200 hover:border-primary hover:text-primary lg:translate-x-6"
            aria-label="Element suivant"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? "w-8 bg-primary" : "w-3 bg-slate-300"
              }`}
              aria-label={`Voir ${testimonial.name}`}
            />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            ["Ecoute", "Un premier echange pour bien cerner les besoins."],
            ["Clarite", "Des propositions simples a comprendre et a appliquer."],
            ["Confiance", "Un contact direct par téléphone ou par email."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg bg-primary/5 p-8 text-center">
              <div className="text-2xl font-semibold text-slate-900">
                {title}
              </div>
              <p className="mt-3 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
