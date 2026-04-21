import { Globe,Plus, Users, Award, Star } from "lucide-react";
import React from "react";

const Growth = () => {
  const growthStats = [
    {
      number: "42",
      icon: Globe,
      title: "Countries Worldwide",
      description: "Delivering premium furniture across the globe with excellence and reliability."
    },
    {
      number: "50K",
      icon: Users,
      title: "Happy Customers",
      description: "Satisfied clients who trust our quality and craftsmanship in every piece."
    },
    {
      number: "15",
      icon: Award,
      title: "Years of Excellence",
      description: "Decades of expertise in creating beautiful, functional living spaces."
    }
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-primary">Growth</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to global recognition, our journey reflects our commitment 
            to delivering exceptional furniture that transforms homes worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {growthStats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100 hover:border-gray-200 cursor-pointer hover:scale-105"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                    <stat.icon 
                      className="text-primary group-hover:scale-110 transition-transform duration-300" 
                      strokeWidth={2} 
                      size={32} 
                    />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 w-20 h-20 border-2 border-gray-200 rounded-full group-hover:border-primary/20 transition-colors duration-300"></div>
                </div>
              </div>

              {/* Number */}
              <div className="mb-4">
                <h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {stat.number}
                  <Plus className="inline-block text-primary ml-2" strokeWidth={3} size={28} />
                </h1>
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                {stat.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {stat.description}
              </p>

              {/* Decorative line */}
              <div className="mt-6 w-12 h-1 bg-gray-200 group-hover:bg-primary rounded-full mx-auto transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section with Achievement Highlights */}
        <div className="mt-16 bg-primary/4 rounded-2xl p-8 lg:p-12 cursor-pointer hover:scale-102 transition-transform duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="">
              <h3 className="text-4xl font-semibold text-gray-800">
                Building Trust Through Quality
              </h3>
              <p className="text-gray-600 py-8 leading-relaxed">
                Our growth isn't just about numbers—it's about the relationships we've built 
                and the homes we've helped create. Every piece tells a story of craftsmanship, 
                durability, and timeless design.
              </p>
              <div className="flex items-center gap-2 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-current" />
                ))}
                <span className="text-gray-700 font-semibold ml-2">4.9/5 Customer Rating</span>
              </div>
            </div>

            {/* Right Content - Mini Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-600">Customer Support</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-gray-600">Unique Designs</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-primary mb-2">Free</div>
                <div className="text-sm text-gray-600">Global Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Growth;
