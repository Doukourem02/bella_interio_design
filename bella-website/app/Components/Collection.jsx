import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Handbag, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const Collection = () => {
  const ProductsCollection = [
    {
      id: 1,
      name: "Décoration d'intérieur",
      price: 299.99,
      originalPrice: 399.99,
      image: "/assets/collections/chair.jpg",
      colors: [
        { name: "Bleu profond", color: "#1a1a1a" },
        { name: "Gris doux", color: "#4a4a4a" },
        { name: "Bleu lumière", color: "#2563eb" },
        { name: "Vert naturel", color: "#059669" },
      ],
      rating: 4.8,
      badge: "Service",
      category: "Décoration",
    },
    {
      id: 2,
      name: "Conseil couleurs",
      price: 159.99,
      originalPrice: 199.99,
      image: "/assets/collections/chair2.jpg",
      colors: [
        { name: "Blanc pur", color: "#ffffff" },
        { name: "Beige chaud", color: "#f5f5dc" },
        { name: "Gris clair", color: "#d1d5db" },
      ],
      rating: 4.6,
      badge: "Nouveau",
      category: "Couleurs",
    },
    {
      id: 3,
      name: "Accessoires & lumières",
      price: 89.99,
      originalPrice: 129.99,
      image: "/assets/collections/lamp.jpg",
      colors: [
        { name: "Laiton doré", color: "#d4af37" },
        { name: "Rose poudré", color: "#e8b4a6" },
        { name: "Argent lumineux", color: "#c0c0c0" },
        { name: "Noir mat", color: "#2d2d2d" },
        { name: "Cuivre doux", color: "#b87333" },
      ],
      rating: 4.9,
      badge: "Conseil",
      category: "Ambiance",
    },
    {
      id: 4,
      name: "Relooking déco",
      price: 199.99,
      originalPrice: 249.99,
      image: "/assets/collections/lamp2.jpg",
      colors: [
        { name: "Noir classique", color: "#000000" },
        { name: "Blanc nordique", color: "#fafafa" },
      ],
      rating: 4.7,
      badge: "Sur mesure",
      category: "Relooking",
    },
    {
      id: 5,
      name: "Agencement intérieur",
      price: 1299.99,
      originalPrice: 1599.99,
      image: "/assets/collections/sofa.jpg",
      colors: [
        { name: "Bleu royal", color: "#1e3a8a" },
        { name: "Vert émeraude", color: "#10b981" },
        { name: "Rouge profond", color: "#991b1b" },
        { name: "Brun chaleureux", color: "#78350f" },
        { name: "Gris perle", color: "#9ca3af" },
        { name: "Crème doux", color: "#fef3c7" },
      ],
      rating: 4.9,
      badge: "Populaire",
      category: "Agencement",
    },
    {
      id: 6,
      name: "Acquis & apprentissage",
      price: 79.99,
      originalPrice: 99.99,
      image: "/assets/collections/stool.jpg",
      colors: [
        { name: "Bois naturel", color: "#deb887" },
        { name: "Noir ébène", color: "#1c1c1c" },
        { name: "Gris cendré", color: "#6b7280" },
      ],
      rating: 4.5,
      badge: "Atelier",
      category: "Transmission",
    },
  ];

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Service":
        return "bg-red-500 text-white";
      case "Nouveau":
        return "bg-green-500 text-white";
      case "Conseil":
        return "bg-orange-500 text-white";
      case "Sur mesure":
        return "bg-blue-500 text-white";
      case "Populaire":
        return "bg-purple-500 text-white";
      case "Atelier":
        return "bg-gray-700 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-30">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl lg:text-6xl font-semibold text-gray-800 mb-4">
            Nos <span className="text-primary">Prestations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bella création imagination accompagne les particuliers dans la
            décoration de leurs intérieurs et dans l&apos;apprentissage de repères
            utiles au quotidien.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20">
          {ProductsCollection.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 cursor-pointer"
            >
              {/* Product Image Container */}
              <div className="relative overflow-hidden bg-gray-50 ">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full  object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Clean Badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`${getBadgeColor(
                      product.badge
                    )} flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-md`}
                  >
                    {product.badge}
                  </Badge>
                </div>

                {/* Colors Display */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm border border-gray-200">
                    <div className="text-xs text-gray-600 mb-1 text-center">
                      {product.colors.length} couleurs
                    </div>
                    <div className="flex gap-1">
                      {product.colors.slice(0, 3).map((colorItem, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border-2 border-white shadow-sm hover:scale-110 transition-transform duration-200"
                          style={{ backgroundColor: colorItem.color }}
                          title={colorItem.name}
                        />
                      ))}
                      {product.colors.length > 3 && (
                        <div className="w-4 h-4 rounded-full bg-gray-200 border-2 border-white shadow-sm flex items-center justify-center">
                          <span className="text-[8px] font-medium text-gray-600">
                            +{product.colors.length - 3}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Rating and Category */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${
                            i < Math.floor(product.rating)
                              ? "text-amber-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-1">
                      ({product.rating})
                    </span>
                  </div>

                  <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                    {product.category}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {product.name}
                </h3>

                {/* Color Options */}
                <div className="mb-4">
                  <p className="text-sm text-gray-700 mb-2 font-medium">
                    Couleurs proposées
                  </p>
                  <div className="flex gap-2">
                    {product.colors.slice(0, 5).map((colorItem, index) => (
                      <div key={index} className="group/color relative">
                        <div
                          className="w-8 h-8 rounded-full border-2 border-gray-200 hover:border-gray-400 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                          style={{ backgroundColor: colorItem.color }}
                          title={colorItem.name}
                        />
                      </div>
                    ))}
                    {product.colors.length > 5 && (
                      <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-xs text-gray-600 font-medium">
                        +{product.colors.length - 5}
                      </div>
                    )}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>

                  <button className="bg-gray-100 hover:text-primary p-3 rounded-full transition-colors duration-200 cursor-pointer hover:scale-105 hover:shadow-sm hover:shadow-primary/40 hover:transition-all hover:duration-500">
                    <Handbag size={20} />
                  </button>
                </div>

                {/* Discount and Features */}
                <div className="space-y-3">
                  <div className="inline-flex items-center">
                    <span className="bg-green-50 text-green-700 text-sm font-medium px-3 py-1 rounded-full border border-green-200">
                      Économisez{" "}
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      %
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Premier échange offert
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Suivi personnalisé
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button className="px-8 h-12 font-normal tracking-wide">
            Voir toutes les prestations
          </Button>
        </div>
      </div>
    </>
  );
};

export default Collection;
