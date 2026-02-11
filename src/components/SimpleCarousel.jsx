import React, { useState, useEffect } from "react";
const images = [
  "/images/outlander-main.jpg",
  "/images/slide-2.jpg",
  "/images/slide-3.jpg",
  "/images/slide-4.jpg",
  "/images/slide-5.jpg",
];
export default function SimpleCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrent(index);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-screen h-[450px] sm:h-[500px] md:h-[650px] lg:h-[745px] overflow-hidden bg-black mt-0">
      {/* Image container */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-contain sm:object-cover transition-all duration-1000"
        />
      </div>
      
      {/* Gradient overlay for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-[1]" />
      
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 md:left-4 transform -translate-y-1/2 text-white z-20 bg-black/40 hover:bg-black/60 active:bg-black/70 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all shadow-lg backdrop-blur-sm"
        aria-label="Previous Slide"
      >
        <span className="text-xl md:text-2xl font-bold">‹</span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 md:right-4 transform -translate-y-1/2 text-white z-20 bg-black/40 hover:bg-black/60 active:bg-black/70 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all shadow-lg backdrop-blur-sm"
        aria-label="Next Slide"
      >
        <span className="text-xl md:text-2xl font-bold">›</span>
      </button>
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-2.5 z-20 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full">
        {images.map((_, i) => (
          <button
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === current 
                ? "bg-white w-6 md:w-8 h-2.5 md:h-3" 
                : "bg-white/60 hover:bg-white/80 w-2.5 md:w-3 h-2.5 md:h-3"
            } cursor-pointer`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
