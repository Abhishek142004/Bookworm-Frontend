import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";

const Carousal = () => {
  const slides = [
    { url: "/assets/3.jpg" },
    { url: "/assets/2.jpg" },
    { url: "/assets/1.jpg" },
    { url: "/assets/5.jpg" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="relative h-[250px]  md:h-[380px] lg:h-[510px] w-full py-4 my-4 md:mb-8">
      <Link to="/category">
        <div
          style={{ backgroundImage: `url("${slides[currentIndex].url}")` }}
          className="h-full w-full rounded-3xl bg-cover bg-center bg-no-repeat duration-1000 bg-opacity-75"
        ></div>
      </Link>
      <div
        className="absolute left-4 top-[45%] md:top-[35%] bg-[#023047] hover:bg-[#219ebc] rounded cursor-pointer md:px-2 md:py-12 text-white hidden lg:block"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>
      <div
        className="absolute right-4 top-[45%] md:top-[35%] bg-[#023047] hover:bg-[#219ebc] rounded cursor-pointer md:px-2 md:py-12 text-white hidden lg:block"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>
      <div className="flex py-2 justify-center space-x-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`cursor-pointer text-xl md:text-3xl ${
              slideIndex === currentIndex ? "text-[#fb8500]" : "text-[#023047]"
            }`}
            onClick={() => setCurrentIndex(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousal;
