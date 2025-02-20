import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slides = [
    {
      image: "/empowering bg.jpg",
      title: "Empowering Businesses DataDuck IT Solutions",
      description:
        "At DataDuck IT Solutions, we specialize in delivering cutting-edge technology solutions tailored to your business needs. From cloud migration to AI-driven insights.",
      cta: "Explore Our Services",
    },
    {
      image: "/transfrom bg.jpg",
      title: "Transforming Data into Actionable Insights",
      description:
        "Leverage our advanced analytics and machine learning solutions to unlock hidden patterns in your data. Make smarter decisions and stay ahead of the competition with DataDuck.",
      cta: "Discover AI Solutions",
    },
    {
      image: "/securebg.jpg",
      title: "Secure and Scalable Cloud Infrastructure",
      description:
        "Build a robust and secure cloud environment with our expertise. We ensure seamless migration, optimization, and 24/7 support for your cloud infrastructure.",
      cta: "Learn More About Cloud",
    },
    {
      image: "/strategic bg.jpg",
      title: "Strategic IT Staffing and Consulting Services",
      description:
        "We offer contract staffing services, providing skilled consultants for leadership, system development, and project management. DataDuck helps businesses find the right talent to support key initiatives.",
      cta: "Discover AI Solutions",
    },
  ];
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div
      className="relative w-full min-h-[500px] bg-gray-200 flex flex-col"
      style={{
        backgroundImage: "url('/bg2.png'), url('/bg1.png')",
        backgroundPosition: "top, bottom",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "100% auto, 100% auto",
      }}
    >
      <div className="hidden md:flex justify-center items-start pt-6">
        <div className="pr-80">
          <div className="w-full max-w-2xl relative">
            <div className="relative overflow-hidden shadow-xl">
              <img
                src={slides[currentSlide].image}
                alt={`Slide ${currentSlide + 1}`}
                className="w-[800px] h-[350px] object-cover" // Fixed width for desktop
              />
            </div>
          </div>
          <div
            className="absolute bottom-28 right-10 lg:right-60 bg-white shadow-2xl p-8 lg:p-12 z-10"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-gray-600 mb-8">{slides[currentSlide].description}</p>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-all duration-300">
              {slides[currentSlide].cta}
            </button>
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full hover:bg-gray-300 transition-all duration-300 shadow-lg z-20"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full hover:bg-gray-300 transition-all duration-300 shadow-lg z-20"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col px-4 pt-6">
        <div className="relative">
          <div className="relative overflow-hidden shadow-xl rounded-lg">
            <img
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-[250px] object-cover" // Full width for mobile
            />
          </div>
        </div>
        <div className="bg-white shadow-2xl rounded-lg p-6 mt-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-sm text-gray-600 mb-6">{slides[currentSlide].description}</p>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm">
            {slides[currentSlide].cta}
          </button>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center mt-auto pb-10">
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`ml-3 w-14 h-1.5 flex items-center justify-center border border-gray-900 rounded-full transition-all duration-300 ${
                i === currentSlide ? "bg-gray-900 w-14" : "bg-white"
              }`}
            />
          ))}
          <button
            onClick={togglePlayPause}
            className="ml-3 w-8 h-8 flex items-center justify-center border border-gray-900 hover:bg-gray-200 transition-all duration-300 shadow-lg"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-gray-800" />
            ) : (
              <Play className="w-5 h-5 text-gray-800" />
            )}
          </button>
        </div>
      </div>
      <div className="md:hidden flex justify-center items-center mt-6 pb-10">
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`ml-3 w-14 h-1.5 flex items-center justify-center border border-gray-900 rounded-full transition-all duration-300 ${
                i === currentSlide ? "bg-gray-900 w-14" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HeroCarousel;