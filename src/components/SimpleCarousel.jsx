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
    <div className="relative w-screen h-[700px] overflow-hidden bg-black mt-0">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 z-0"
      />

      {/* Nút điều hướng */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl z-10"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl z-10"
        aria-label="Next Slide"
      >
        &#10095;
      </button>

      {/* Dots điều hướng */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-gray-500"
            } cursor-pointer`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
