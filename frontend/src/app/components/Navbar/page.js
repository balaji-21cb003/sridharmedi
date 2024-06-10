"use client";
import React, { Fragment, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {
    const handleRequestQuoteClick = () => {
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSc3qE3tVcQVv1KlKZ9r9ZQULmb1aF61GY009qsGmFbGV8vmBw/viewform?usp=sf_link",
        "_blank"
      );
    };
    const button = document.getElementById("requestQuoteButton");
    button.addEventListener("click", handleRequestQuoteClick);
    return () => {
      button.removeEventListener("click", handleRequestQuoteClick);
    };
  }, []);

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fragment>
      <div className="flex flex-col sm:flex-row justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold mb-4 sm:mb-0">
          <Link href="/">
            <Image src={logo} alt="Logo" width={150} height={80} />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center flex-grow justify-center mb-4 sm:mb-0">
          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-16">
            <li className="cursor-pointer transition font-semibold ease-out duration-300 hover:text-indigo-600 hover:font-extrabold hover:scale-105 transform-gpu">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer transition font-semibold ease-out duration-300 hover:text-indigo-600 hover:font-extrabold hover:scale-105 transform-gpu">
              <Link href="/Products">Products</Link>
            </li>
            <li
              className="cursor-pointer transition font-semibold ease-out duration-300 hover:text-indigo-600 hover:font-extrabold hover:scale-105 transform-gpu"
              onClick={scrollToFooter}
            >
              Contact Us
            </li>
          </ul>
        </div>

        {/* Book a Call */}
        <ul>
          <li>
            <button
              id="requestQuoteButton"
              type="button"
              className="transition ease-in-out duration-300 text-white bg-indigo-900 hover:text-white hover:ease-out focus:outline-none 
              focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-indigo-600
               dark:hover:bg-indigo-700 dark:focus:ring-blue-800"
            >
              Request for quote
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
