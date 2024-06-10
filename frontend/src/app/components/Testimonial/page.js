import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Dr. Arun Kumar",
    text: "The medical gas products I bought from this store are of excellent quality. They have played a crucial role in ensuring the safety and well-being of our patients. Highly recommended!",
    image: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
  },
  {
    name: "Dr. Deepa Srinivasan",
    text: "As a healthcare professional, I always prioritize quality when it comes to medical supplies. The medical gas products from this store have consistently met my expectations. Great service!",
    image: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
  },
  {
    name: "Dr. Prakash Raj",
    text: "I recently purchased medical gas products from this store, and I'm impressed with the reliability and efficiency of their products. The timely delivery was an added bonus. Will definitely buy again!",
    image: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
  },
  {
    name: "Dr. Nithya Venkatesh",
    text: "The medical gas products I ordered from this store have been instrumental in our healthcare facility. They are of superior quality and have significantly improved our patient care standards.",
    image: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
  },
  {
    name: "Dr. Karthik Subramanian",
    text: "I've been purchasing medical gas products from this store for years, and I've never been disappointed. The products are reliable, and the customer service is exceptional. Keep up the good work!",
    image: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
  },
  {
    name: "Dr. Priya Murugan",
    text: "I highly recommend this store for anyone in need of quality medical gas products. Their range of products is extensive, and the prices are competitive. A trusted source for healthcare supplies!",
    image: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
  },
  {
    name: "Dr. Senthil Kumar",
    text: "The medical gas products from this store have become an essential part of our healthcare operations. The ease of ordering and the prompt delivery make them our go-to supplier for medical supplies.",
    image: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
  },
  {
    name: "Dr. Anjali Sundaram",
    text: "I'm thoroughly impressed with the quality and reliability of the medical gas products I purchased from this store. They have exceeded my expectations in terms of performance and durability.",
    image: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
  },
  {
    name: "Dr. Manoj Krishnan",
    text: "The medical gas products offered by this store are top-notch. They have helped streamline our medical processes and have contributed to the efficient delivery of healthcare services.",
    image: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
  },
  {
    name: "Dr. Deepika Rajan",
    text: "I've been a loyal customer of this store for years, and they have never disappointed me. The medical gas products are of the highest quality, and the customer service is excellent. Highly recommended!",
    image: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
  },
  {
    name: "Dr. Rahul Patel",
    text: "This store has been my go-to supplier for medical gas products for quite some time now. Their reliability and consistency in delivering high-quality products are commendable. A trusted partner in healthcare!",
    image: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
  },
  {
    name: "Dr. Kavitha Raman",
    text: "I recently purchased medical gas products from this store, and I'm extremely satisfied with the experience. The products were delivered promptly, and the quality exceeded my expectations. Will definitely buy again!",
    image: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
  },
  {
    name: "Dr. Aravindan Nair",
    text: "The medical gas products I received from this store have been a game-changer for our healthcare facility. They are of superior quality and have helped enhance the efficiency of our operations. Highly recommended!",
    image: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
  },
  {
    name: "Dr. Priyanka Devi",
    text: "I'm extremely pleased with the medical gas products I purchased from this store. They are of excellent quality and have significantly improved our patient care standards. Thank you for providing such reliable products!",
    image: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
  },
  {
    name: "Dr. Vishal Saxena",
    text: "The medical gas products offered by this store have been indispensable for our healthcare facility. They are of superior quality and have helped streamline our medical processes. A trustworthy supplier!",
    image: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
  },
];

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="my-6 font-sans text-gray-700">
      <div className="max-w-full mx-auto relative">
        <div className="mx-auto text-center">
          <h2 className="text-center font-bold text-3xl sm:text-4xl leading-7 text-indigo-600">
            Testimonials
          </h2>
        </div>

        <div className="mt-16 px-8">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={testimonial.image}
                    className="w-28 h-28 rounded-full shadow-[0_2px_22px_-4px_rgba(93,96,127,0.6)] border-2 border-white"
                    alt={testimonial.name}
                  />
                  <div className="mt-4">
                    <h4 className="text-sm font-extrabold">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-400 font-bold mt-1">
                      Customer
                    </p>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="flex justify-center space-x-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 fill-${
                          i < 4 ? "[#facc15]" : "[#CED5D8]"
                        }`}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
