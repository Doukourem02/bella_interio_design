"use client";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Bella création imagination",
      role: "Décoration intérieure",
      location: "France & Canada",
      rating: 5,
      text: "Une pièce peut changer totalement quand les couleurs, la lumière et les objets dialoguent ensemble.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c9b130d2?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Conseil couleur",
      role: "Palette et matières",
      location: "À distance ou sur place",
      rating: 5,
      text: "La décoration devient plus simple quand chaque choix a une raison et une place dans l'ensemble.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Agencement",
      role: "Organisation des espaces",
      location: "Selon le projet",
      rating: 5,
      text: "L'objectif est aussi de transmettre des repères pour continuer à prendre soin de son intérieur.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Accompagnement",
      role: "Écoute et créativité",
      location: "Projet personnalisé",
      rating: 5,
      text: "Chaque intérieur mérite une ambiance claire, élégante et adaptée aux habitudes de ceux qui y vivent.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Transmission",
      role: "Acquis divers",
      location: "Conseils réutilisables",
      rating: 5,
      text: "Les bons repères permettent de faire évoluer son intérieur avec confiance, même après l'accompagnement.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

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
    <>
      <div className="container mx-auto px-4 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Une expérience <span className="text-primary">douce et guidée</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Le site présente Bella comme une professionnelle de la décoration :
            une approche humaine, sensible et centrée sur l&apos;harmonie de votre
            intérieur.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Slider Container */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full shrink-0">
                  <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 lg:p-12 mx-4">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Quote className="text-primary" size={32} />
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-xl lg:text-2xl text-gray-700 text-center leading-relaxed mb-8 font-medium">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>

                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={24}
                            className="text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Customer Info */}
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-900 text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-all duration-200 group cursor-pointer hover:scale-110"
          >
            <ChevronLeft
              size={24}
              className="group-hover:scale-110 transition-transform duration-200"
            />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-all duration-200 group cursor-pointer hover:scale-110"
          >
            <ChevronRight
              size={24}
              className="group-hover:scale-110 transition-transform duration-200"
            />
          </button>
        </div>

        {/* Slider Indicators */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-primary scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center py-16 bg-primary/5 rounded-2xl">
            <div className="text-3xl font-bold text-gray-900 mb-2">1000 <span className="text-primary">+</span></div>
            <div className="text-gray-600">Idées déco</div>
          </div>
          <div className="text-center py-16 bg-primary/5 rounded-2xl">
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9 <span className="text-primary">★</span></div>
            <div className="text-gray-600">Écoute attentive</div>
          </div>
          <div className="text-center py-16 bg-primary/5 rounded-2xl">
            <div className="text-3xl font-bold text-gray-900 mb-2">98 <span className="text-primary">%</span></div>
            <div className="text-gray-600">Confiance</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
