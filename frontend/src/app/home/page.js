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
    <div className="w-full  mx-auto text-center relative">
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
              //   borderRadius: "0.5rem",
            }}
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </div>
  );
}
