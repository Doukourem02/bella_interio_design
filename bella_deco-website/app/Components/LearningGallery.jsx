"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const LearningGallery = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((slide) => (slide + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((slide) => (slide - 1 + slides.length) % slides.length);
  };

  const visibleChoices = useMemo(() => {
    return [0, 1, 2].map((offset) => slides[(currentSlide + offset) % slides.length]);
  }, [currentSlide]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextSlide, 3600);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="learning-focus group relative min-h-[420px] overflow-hidden border-t border-white/10 lg:min-h-full lg:border-l lg:border-t-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={`${slide.title} - ${slide.caption}`}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            priority={index === 0}
            className={`object-cover transition-all duration-1000 ease-out ${
              index === currentSlide
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/18 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/28 via-transparent to-transparent" />

      <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between gap-4">
        <div className="rounded-md border border-white/15 bg-slate-950/45 px-4 py-3 text-white backdrop-blur-md">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Proposition {currentSlide + 1}/{slides.length}
          </p>
          <h4 className="mt-1 text-lg font-semibold">
            {slides[currentSlide].title}
          </h4>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={previousSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/45 text-white backdrop-blur-md transition-colors hover:bg-primary"
            aria-label="Image precedente"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/45 text-white backdrop-blur-md transition-colors hover:bg-primary"
            aria-label="Image suivante"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 right-5 z-10">
        <p className="max-w-xl text-sm font-medium leading-6 text-white">
          {slides[currentSlide].caption}
        </p>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {visibleChoices.map((choice) => {
            const slideIndex = slides.findIndex((slide) => slide.src === choice.src);
            const isActive = slideIndex === currentSlide;

            return (
              <button
                type="button"
                key={choice.src}
                onClick={() => setCurrentSlide(slideIndex)}
                className={`group/thumb relative h-20 overflow-hidden rounded-md border text-left transition-all duration-300 ${
                  isActive
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-white/20 opacity-75 hover:opacity-100"
                }`}
                aria-label={`Voir ${choice.title}`}
              >
                <Image
                  src={choice.src}
                  alt={choice.title}
                  fill
                  sizes="150px"
                  className="object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/78 to-transparent" />
                <span className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-white">
                  {choice.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex gap-2">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.src}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-primary" : "w-3 bg-white/35"
              }`}
              aria-label={`Aller à ${slide.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningGallery;
