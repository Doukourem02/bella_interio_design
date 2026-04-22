"use client";

// import { Button } from "@/components/ui/button";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-[url('/assets/banner.jpg')] bg-cover bg-center h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] 2xl:h-svh flex items-center relative">
          {/* Video in top right corner - Desktop only */}
          <div className="hidden lg:block absolute top-32 lg:top-36 xl:top-44 2xl:top-40 right-8 lg:right-20 xl:right-32 2xl:right-66 z-10 bg-[#777F88]/20 p-3 lg:p-4 xl:p-5 2xl:p-6 rounded-2xl shadow-lg">
              <div className="relative w-[250px] lg:w-[280px] xl:w-[320px] 2xl:w-350px] h-32 lg:h-44 xl:h-48 2xl:h-50 rounded-lg overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/banner video.mp4" type="video/mp4" />
                  Votre navigateur ne prend pas en charge la vidéo.
                </video>
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 lg:p-2.5 xl:p-3 2xl:p-4 hover:bg-white/30 transition-all cursor-pointer">
                    <svg
                      className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Video for mobile - smaller and repositioned */}
            <div className="block lg:hidden absolute top-20 sm:top-24 md:top-28 right-4 sm:right-8 md:right-20 z-10 bg-[#777F88]/20 p-2 rounded-xl shadow-lg">
              <div className="relative w-40 sm:w-48 md:w-52 h-24 sm:h-28 md:h-32 rounded-lg overflow-hidden shadow-xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/banner video.mp4" type="video/mp4" />
                  Votre navigateur ne prend pas en charge la vidéo.
                </video>
                {/* Play button overlay for mobile */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2 hover:bg-white/30 transition-all cursor-pointer">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mx-auto px-4 lg:px-6 xl:px-8 2xl:px-12 pt-20 lg:pt-24 xl:pt-32 2xl:pt-40">
              <div className="grid grid-cols-1 items-center justify-items-center text-white">
                <div className="space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6 2xl:space-y-8 -mt-8 sm:-mt-16 md:-mt-24 lg:-mt-32 xl:-mt-40 2xl:-mt-48 text-center lg:text-left max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
                  <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl flex flex-col lg:flex-row items-center gap-2 lg:gap-3 xl:gap-4 2xl:gap-6 uppercase tracking-[1px] sm:tracking-[2px] md:tracking-[3px] lg:tracking-[4px] xl:tracking-[5px] 2xl:tracking-[6px]">
                    Décoration d&apos;intérieur & apprentissage
                    <img
                      src="/assets/line.png"
                      alt="line"
                      className="h-0.5 lg:h-0.5 xl:h-1 2xl:h-1.5 w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 2xl:w-auto"
                    />
                  </h2>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[12rem] leading-tight font-bold">
                    BELLA
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0 px-2 sm:px-4 lg:px-0">
                    Bella création imagination vous accompagne pour transformer
                    vos espaces avec conseil couleur, agencement et sens du détail.
                  </p>
                </div>
                {/* <Button></Button> */}
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Banner;
