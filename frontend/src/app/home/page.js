"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import illustration from "../../../public/illustartion.png";
import Service from "../components/Service/page";
import Testimonial from "../components/Testimonial/page";
import Footer from "../components/Footer/page";
import Link from "next/link";

export default function ProgressSlider() {
  const images = [
    { src: "/1.jpg", desc: "img 1" },
    { src: "/3.jpg", desc: "img 3" },
    { src: "/4.jpg", desc: "img 4" },
    { src: "/6.jpg", desc: "img 6" },
    { src: "/7.jpg", desc: "img 7" },
    { src: "/8.jpg", desc: "img 8" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change this value to adjust the duration between slides

    return () => clearInterval(intervalId);
  }, [images.length]);

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full mx-auto text-center relative overflow-hidden">
      <div className="relative">
        {/* Images */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                minWidth: "100%",
                height: "655px",
                position: "relative",
              }}
            >
              <Image
                src={image.src}
                alt={image.desc}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        {/* Navigation Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-8 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${
                index === currentSlide ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="sm:flex items-center max-w-screen-xl mx-auto p-10">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <Image src={illustration} alt="Illustration" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              Welcome to{" "}
              <span className="text-indigo-600">Sridhar Medi systems</span>
            </h2>
            <p className="text-gray-700 text-left leading-relaxed">
              Pioneers in Medical Infrastructure. We specialize in
              state-of-the-art Medical Gas Pipeline Systems (MGPS) and Modular
              Operation Theatres (MOT), offering end-to-end solutions for
              hospitals and medical institutions. With expertise honed over
              years of innovation, we ensure seamless integration and adherence
              to global standards. Leveraging cutting-edge technology, including
              Artificial Intelligence (AI), we enhance patient care and safety.
            </p>
          </div>
        </div>
      </div>

      <Service />

      <Testimonial />

      <div className="mt-16">
        <Link href="#footer">
          <button
            className="transition ease-in-out duration-300 text-white bg-indigo-900 hover:text-white hover:ease-out focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800"
            onClick={scrollToFooter}
          >
            Contact Us
          </button>
        </Link>
      </div>

      <Footer id="footer" />
    </div>
  );
}
