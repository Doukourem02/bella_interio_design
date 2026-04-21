import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Home, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const InteriorDesign = () => {
  const interiorImages = [
    {
      id: 1,
      src: "/assets/Interior/Interior1.jpg",
      alt: "Modern Living Room Design",
    },
    {
      id: 2,
      src: "/assets/Interior/Interior2.jpg",
      alt: "Contemporary Bedroom Setup",
    },
    {
      id: 3,
      src: "/assets/Interior/Interior3.jpg",
      alt: "Minimalist Kitchen Design",
    },
    {
      id: 4,
      src: "/assets/Interior/Interior4.jpg",
      alt: "Elegant Dining Space",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-10 py-20">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              ✨ Interior Design Excellence
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Our Interior <span className="text-primary">Design</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we follow a structured approach to
            deliver exceptional results that exceed your expectations every step
            of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading Section */}
            <div>
              <h1 className="text-2xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-6">
                Transform Your Space Into a{" "}
                <span className="text-primary">Dream Home</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                From concept to completion, we create stunning interiors that
                perfectly blend style, comfort, and functionality. Let our
                expert designers bring your vision to life with personalized
                solutions tailored to your lifestyle.
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
                    Personalized Design
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tailored solutions that reflect your unique taste and
                    lifestyle preferences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Home className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Complete Service
                  </h3>
                  <p className="text-sm text-gray-600">
                    End-to-end solutions from planning to final installation and
                    styling.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Premium Quality
                  </h3>
                  <p className="text-sm text-gray-600">
                    Only the finest materials and furniture pieces for lasting
                    beauty.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Timely Delivery
                  </h3>
                  <p className="text-sm text-gray-600">
                    Professional project management ensuring on-time completion.
                  </p>
                </div>
              </div>
            </div>

            {/* What We Offer */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">What We Offer:</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Space Planning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">3D Visualization</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Furniture Selection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Color Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Lighting Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Project Management</span>
                </div>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2">
                Schedule Consultation
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 rounded-lg font-semibold border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200"
              >
                View Portfolio
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
                title: "Consultation",
                desc: "Understanding your vision and requirements through detailed discussions and site analysis.",
                color: "bg-blue-50 border-blue-200 text-blue-600",
              },
              {
                step: "02",
                title: "Design",
                desc: "Creating detailed plans and 3D visualizations to bring your ideas to life.",
                color: "bg-green-50 border-green-200 text-green-600",
              },
              {
                step: "03",
                title: "Selection",
                desc: "Choosing the perfect furniture and materials that match your style and budget.",
                color: "bg-purple-50 border-purple-200 text-purple-600",
              },
              {
                step: "04",
                title: "Installation",
                desc: "Professional setup and final styling to complete your dream space transformation.",
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
