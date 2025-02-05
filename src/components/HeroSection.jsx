import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Elevate Your Style",
    subtitle: "Discover our latest collection",
  },
  {
    image:
      "https://images.pexels.com/photos/581339/pexels-photo-581339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Summer Collection",
    subtitle: "Fresh arrivals for the season",
  },
  {
    image:
      "https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Luxury Suits",
    subtitle: "Tailored for perfection",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[60vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Semi-transparent black overlay */}
            <div className="absolute inset-0 bg-black opacity-30 z-10" />
          </div>
          <div className="relative z-20 h-full flex items-center justify-center text-center text-white">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
              <a
                href="#products"
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all transform hover:scale-105 cursor-pointer"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default HeroSection;
