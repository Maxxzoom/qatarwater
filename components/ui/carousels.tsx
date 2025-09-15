"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      backgroundImage: "/industrial-water-treatment-facility.jpg",
      title: "Advanced Water Treatment Solutions",
      subtitle: "Industrial Excellence in Water Purification",
      description:
        "State-of-the-art water treatment facilities designed for maximum efficiency and reliability.",
      overlayImages: [
        "/reverse-osmosis-water-treatment-system.jpg",
        "/water-quality-testing-equipment-and-monitors.jpg",
      ],
    },
    {
      id: 2,
      backgroundImage: "/modern-water-treatment-facility.jpg",
      title: "Modern Filtration Technology",
      subtitle: "Next-Generation Water Processing",
      description:
        "Cutting-edge filtration systems that ensure the highest quality water output for all applications.",
      overlayImages: [
        "/water-treatment-equipment.jpg",
        "/filtration-equipment.jpg",
      ],
    },
    {
      id: 3,
      backgroundImage: "/advanced-filtration-plant.jpg",
      title: "Complete Water Management",
      subtitle: "Comprehensive Treatment Solutions",
      description:
        "End-to-end water treatment solutions from consultation to maintenance and support.",
      overlayImages: [
        "/water-processing-facility.jpg",
        "/industrial-water-treatment-facility-with-large-pip.jpg",
      ],
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-110 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${slide.backgroundImage}'), url('/industrial-water-treatment-facility.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div className="text-white space-y-6">
                  <div className="bg-cyan-700/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl">
                    <h2 className="text-xs font-semibold text-cyan-200 uppercase tracking-wider mb-2">
                      {slide.subtitle}
                    </h2>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3 text-balance">
                      {slide.title}
                    </h1>
                    <p className="text-base text-cyan-100 leading-relaxed text-pretty">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <button className="bg-slate-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-slate-700 transition-colors duration-300 shadow-lg">
                        Learn More
                      </button>
                      <button className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-cyan-700 transition-colors duration-300">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>

                {/* Overlay Images */}
                <div className="relative hidden lg:block">
                  <div className="relative">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-300">
                      <img
                        src={slide.overlayImages[0] || "/placeholder.svg"}
                        alt="Water Treatment Equipment"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/water-treatment-equipment.jpg";
                        }}
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 w-36 h-36 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-300">
                      <img
                        src={slide.overlayImages[1] || "/placeholder.svg"}
                        alt="Filtration System"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/water-filtration-system.jpg";
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white shadow-lg scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
