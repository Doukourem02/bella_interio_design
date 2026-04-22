"use client";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail("");

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 500);
  };

  return (
    <div className="relative bg-cover bg-center bg-no-repeat bg-[url('/assets/newletter.jpg')] min-h-[600px]">
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Parlons de votre <span className="text-primary">intérieur</span>
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Pour une décoration, un conseil couleur, un projet d&apos;agencement
            ou un accompagnement autour des acquis divers, contactez Bella
            directement.
          </p>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 p-8 lg:p-12">
            {isSubscribed ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Merci pour votre message !
                </h3>
                <p className="text-gray-600">
                  Bella pourra reprendre contact avec vous pour échanger sur votre projet.
                </p>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact direct avec Bella
                </h3>
                <p className="text-gray-600 mb-8">
                  Laissez votre email pour préparer un premier échange autour
                  de votre intérieur.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Votre adresse email"
                      required
                      className="flex-1 px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 shadow-sm"
                    />
                    <Button
                      type="submit"
                      className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      Démarrer
                      <ArrowRight size={20} />
                    </Button>
                  </div>

                  <p className="text-sm text-gray-500 max-w-md mx-auto">
                    Vous pouvez aussi écrire directement à britanie4@hotmail.com
                    ou appeler Bella selon votre disponibilité.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
