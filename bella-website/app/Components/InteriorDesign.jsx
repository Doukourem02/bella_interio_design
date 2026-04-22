import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Home, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const InteriorDesign = () => {
  const interiorImages = [
    {
      id: 1,
      src: "/assets/Interior/Interior1.jpg",
      alt: "Salon harmonieux en décoration intérieure",
    },
    {
      id: 2,
      src: "/assets/Interior/Interior2.jpg",
      alt: "Chambre contemporaine et apaisante",
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

  return (
    <>
      <div className="container mx-auto px-10 py-20">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              ✨ Décoration intérieure
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Notre <span className="text-primary">accompagnement déco</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            De l&apos;idée de départ aux choix concrets, Bella vous aide à créer
            un intérieur plus lisible, plus beau et plus personnel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading Section */}
            <div>
              <h1 className="text-2xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-6">
                Transformer votre espace en un{" "}
                <span className="text-primary">intérieur qui vous ressemble</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Bella création imagination fait le lien entre vos idées et un
                résultat concret. L&apos;objectif est d&apos;associer couleurs,
                matières, lumière et objets pour créer une ambiance cohérente.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Palette className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Décoration personnalisée
                  </h3>
                  <p className="text-sm text-gray-600">
                    Des propositions adaptées à votre goût, votre rythme et
                    votre façon de vivre.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Home className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Accompagnement complet
                  </h3>
                  <p className="text-sm text-gray-600">
                    Un suivi possible de l&apos;idée jusqu&apos;aux choix de mobilier,
                    textiles, lumière et objets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Choix cohérents
                  </h3>
                  <p className="text-sm text-gray-600">
                    Des repères pour éviter les achats dispersés et garder une
                    harmonie durable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Contact humain
                  </h3>
                  <p className="text-sm text-gray-600">
                    Un échange direct pour avancer simplement, sur place ou à
                    distance selon le projet.
                  </p>
                </div>
              </div>
            </div>

            {/* What We Offer */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Ce que Bella propose :</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Agencement des espaces</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Direction déco</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Choix du mobilier</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Conseil couleurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Ambiance lumière</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Acquis à réutiliser</span>
                </div>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2">
                Écrire par email
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 rounded-lg font-semibold border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200"
              >
                Voir les inspirations
              </Button>
            </div>
          </div>

          {/* Right Content - Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {interiorImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  index === 0 ? "row-span-2" : ""
                } ${index === 3 ? "col-span-2" : ""}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    index === 0 ? "h-full" : index === 3 ? "h-64" : "h-66"
                  }`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Image Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-medium text-sm">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Process */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Écoute",
                desc: "Comprendre vos envies, vos contraintes et l'usage de chaque espace.",
                color: "bg-blue-50 border-blue-200 text-blue-600",
              },
              {
                step: "02",
                title: "Direction déco",
                desc: "Proposer une ambiance, une palette et des idées faciles à visualiser.",
                color: "bg-green-50 border-green-200 text-green-600",
              },
              {
                step: "03",
                title: "Sélection",
                desc: "Choisir les éléments importants : mobilier, textiles, lumière et finitions.",
                color: "bg-purple-50 border-purple-200 text-purple-600",
              },
              {
                step: "04",
                title: "Transmission",
                desc: "Vous laisser des repères clairs pour entretenir l'harmonie au quotidien.",
                color: "bg-orange-50 border-orange-200 text-orange-600",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 p-8 text-center group"
              >
                {/* Step Number */}
                <div className="mb-6">
                  <div
                    className={`w-20 h-20 ${process.color.split(" ")[0]} ${
                      process.color.split(" ")[1]
                    } rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span
                      className={`${
                        process.color.split(" ")[2]
                      } font-bold text-2xl`}
                    >
                      {process.step}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {process.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {process.desc}
                </p>

                {/* Decorative line */}
                <div className="mt-6 w-12 h-1 bg-gray-200 group-hover:bg-primary rounded-full mx-auto transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InteriorDesign;
