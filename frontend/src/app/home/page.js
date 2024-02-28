"use client";
import React, { useState, useEffect } from "react";

export default function ProgressSlider() {
  const videos = [
    { src: "/video1.mp4", desc: "Video 1" },
    { src: "/video2.mp4", desc: "Video 2" },
    { src: "/video3.mp4", desc: "Video 3" },
    { src: "/video4.mp4", desc: "Video 4" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === videos.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change this value to adjust the duration between slides

    return () => clearInterval(intervalId);
  }, [currentSlide, videos.length]); // Include videos.length in the dependency array

  return (
    <div>
      <div className="w-full mx-auto text-center relative">
        {/* Videos */}
        <div className="relative flex flex-col">
          {videos.map((video, index) => (
            <video
              key={index}
              className={` ${index !== currentSlide ? "hidden" : ""}`}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "655px",
                objectFit: "cover", // Change object-fit to cover
                //   borderRadius: "0.5rem", `
              }}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
      </div>
      {/* Description */}
      <div className="bg-gray-100 p-20 rounded-lg shadow-md flex flex-col items-start transition duration-300 hover:shadow-xl">
        <h3 className="text-3xl lg:text-5xl font-semibold mb-6 text-gray-700 hover:text-blue-600 hover:underline">
          Welcome to Sridhar Medi Systems
        </h3>
        <p className="text-base lg:text-lg font-medium leading-relaxed text-gray-700 mb-4">
          Pioneers in Medical Infrastructure. We specialize in state-of-the-art
          Medical Gas Pipeline Systems (MGPS) and Modular Operation Theatres
          (MOT), offering end-to-end solutions for hospitals and medical
          institutions. With expertise honed over years of innovation, we ensure
          seamless integration and adherence to global standards. Leveraging
          cutting-edge technology, including Artificial Intelligence (AI), we
          enhance patient care and safety.
        </p>
        <div className="text-sm lg:text-base lg:text-lg font-medium leading-relaxed text-gray-700 mb-4">
          <h4 className="mb-2 hover:text-blue-600 hover:underline font-semibold">
            Key Offerings:
          </h4>
          <p>
            Our comprehensive range of services includes providing advanced MGPS
            and MOT solutions, offering comprehensive services from design to
            maintenance, supplying ICU & OT systems and equipment, providing
            fully automated oxygen monitoring systems, delivering medical oxygen
            generators, and implementing AI-driven solutions for personalized
            patient care and safety.
          </p>
        </div>
        <p className="text-base font-medium  lg:text-lg text-gray-700">
          Partner with us to elevate your medical facilities and shape the
          future of healthcare.
        </p>
      </div>
      <div className="container p-20 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Card */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">About Us</h2>
            <p className="text-gray-700 text-base">
              Welcome to Sridhar Medi Systems. We specialize in designing,
              supplying, installing, and maintaining Medical Gas Pipeline
              Systems (MGPS) and Modular Operation Theatres (MOT) for medical
              institutions. With years of experience and a commitment to
              innovation, we ensure seamless integration and adherence to global
              standards, ultimately enhancing patient care and safety.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="#"
              className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-blue-700 transition duration-300"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Services Card */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">Services</h2>
            <p className="text-gray-700 text-base">
              Our services include comprehensive solutions for MGPS and MOT,
              maintenance plans, supply of related accessories and equipment, as
              well as turnkey solutions for hospital infrastructure. We also
              specialize in implementing Artificial Intelligence (AI)
              technologies to personalize patient care and optimize operational
              efficiency.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="#"
              className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-blue-700 transition duration-300"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Contact Card */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">Contact</h2>
            <p className="text-gray-700 text-base">
              Have questions or need assistance? Feel free to get in touch with
              us. Our team is here to help you with your medical infrastructure
              needs.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="#"
              className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
