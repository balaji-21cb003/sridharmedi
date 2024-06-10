import React from "react";
import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";
import Image from "next/image";

export default function Products() {
  const products = [
    {
      name: "medical gas outlet terminal unit",
      src: "/product1.jpg",
      desc: "A medical gas outlet terminal unit is essentially a connector point in a hospital room.  It allows medical staff to safely connect devices like ventilators or oxygen masks to the hospital's piped-in supply of gases like oxygen or nitrous oxide.  These units are designed to prevent accidental mix-ups by having specific fittings for each gas type, and they typically shut off the gas flow when disconnected.",
    },
    {
      name: "air hose connectors",
      src: "/product2.jpg",
      desc: "Industrial air hose connectors, or quick disconnects, are lifesavers for compressed air systems. They snap hoses to tools and compressors in seconds, with a secure, leak-proof seal. Made of tough brass or steel, they come in standard sizes for easy interchangeability between brands.",
    },
    {
      name: "copper pipe fittings",
      src: "/product3.jpg",
      desc: "A medical gas outlet terminal unit is a vital wall-mounted connector in a hospital room. It provides a safe and controlled access point for medical staff to connect vital gas supplies like oxygen or nitrous oxide to patient care equipment. These units are color-coded and specifically designed to prevent accidental mix-ups by having unique fittings for each gas type. They also typically shut off the gas flow when disconnected for added safety.",
    },
    {
      name: "medical gas outlet terminal unit",
      src: "/product4.jpg",
      desc: "A medical gas outlet terminal unit is a hospital room's lifeline. Mounted on the wall, it allows staff to safely connect medical gas supplies like oxygen to patient equipment. These color-coded units prevent mix-ups with unique fittings for each gas and often shut off gas flow when disconnected for added safety.",
    },
    {
      name: "single-stage oxygen regulator",
      src: "/product5.jpg",
      desc: "A single-stage oxygen regulator acts as a lifeline in medical settings. It connects directly to compressed oxygen cylinders and brings the high pressure down to a safe, usable level for patient care. This vital piece of equipment ensures a steady flow of oxygen for critical procedures through a simple one-step reduction process.",
    },
    {
      name: "connectors",
      src: "/product6.jpg",
      desc: "A medical gas outlet terminal unit is a wall-mounted connector, essentially a lifeline in a hospital room. It provides a safe and controlled access point for medical staff to connect vital gas supplies like oxygen or nitrous oxide to patient care equipment. These units are color-coded and specifically designed to prevent accidental mix-ups by having unique fittings for each gas type. They also typically shut off the gas flow when disconnected for added safety.",
    },
    {
      name: "oxygen flow meter",
      src: "/product7.jpg",
      desc: "An oxygen flow meter, a key player in medical gas delivery, precisely regulates the flow of oxygen from a cylinder or wall outlet. Mounted on the gas line, it features a variable-area meter that allows healthcare professionals to adjust the oxygen flow rate in liters per minute (LPM) according to the patient's specific needs. This vital piece of equipment ensures patients receive the right amount of oxygen for optimal therapy.",
    },
    {
      name: "Polypropylene Vacsax Disposable Suction",
      src: "/product8.jpg",
      desc: "A disposable suction liner, often made of polypropylene and part of the VacSax system, is a medical workhorse. This single-use plastic bag fits within a reusable canister, creating a sealed system to collect fluids or blood during procedures. These liners promote hygiene by preventing contamination between patients.",
    },
    {
      name: "Ward Vaccum Unit",
      src: "/product9.jpg",
      desc: "A Ward Vacuum Unit is a workhorse for low-pressure suction in medical settings. This portable unit features a collection jar and a regulator knob.  Healthcare professionals use it to remove fluids or blood during procedures. The regulator allows for precise control of suction strength, and the disposable collection jar ensures easy disposal and minimizes contamination risk.",
    },
  ];

  // Function to get a random description
  const getRandomDescription = () => {
    const descriptions = [
      "Empower your business with cutting-edge technology.",
      "Enhance productivity and efficiency with our innovative solutions.",
      "Transform your operations with AI-powered tools.",
      "Unlock new possibilities for your organization.",
      // Add more random descriptions as needed
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  };

  return (
    <div className="justify-center">
      <Navbar />
      <div className="relative text-center overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
        {products.map((product, index) => (
          <div key={index} className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                <div className="flex items-center justify-center rounded-xl h-12 w-12"></div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-purple-500 uppercase">
                    {product.name}
                  </h2>
                  <p className="mt-2 text-lg text-gray-300 font-light">
                    {product.desc}
                  </p>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <Image
                    loading="lazy"
                    width={647}
                    height={486}
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "transparent" }}
                    src={product.src}
                    alt={product.desc}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
