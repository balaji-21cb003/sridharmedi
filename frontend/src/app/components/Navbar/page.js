"use client";
import React, { Fragment, useState } from "react";
import PopupForm from "@/app/popupform/page";
// import Image from "next/image";
// import region from "../../image/region.png";

export default function Navbar() {
  const [showPop, setShowPop] = useState(false);

  return (
    <Fragment>
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold">Logo</div>

        {/* Navigation Links */}
        <div className="flex items-center flex-grow justify-center">
          <ul className="flex space-x-16">
            <li className="cursor-pointer transition ease-out duration-300  hover:text-blue-500 hover:font-semibold hover:scale-105 transform-gpu">
              Home
            </li>
            <li className="cursor-pointer transition ease-out duration-300  hover:text-blue-500 hover:font-semibold hover:scale-105 transform-gpu">
              Services
            </li>
            <li className="cursor-pointer transition ease-out duration-300  hover:text-blue-500 hover:font-semibold hover:scale-105 transform-gpu">
              Products
            </li>
            <li className="cursor-pointer transition ease-out duration-300  hover:text-blue-500 hover:font-semibold hover:scale-105 transform-gpu">
              Artificial Intelligence
            </li>
            <li className="cursor-pointer transition ease-out duration-300  hover:text-blue-500 hover:font-semibold hover:scale-105 transform-gpu">
              About Us
            </li>
            <li className="cursor-pointer transition ease-out duration-300  hover:text-blue-500 hover:font-semibold hover:scale-105 transform-gpu">
              Blog/News
            </li>
          </ul>
        </div>

        {/* Book a Call */}
        <ul>
          <li>
            <button
              type="button"
              onClick={() => setShowPop(true)}
              className="transition ease-in-out duration-300 text-white bg-blue-700 hover:bg-blue-800 hover:ease-out focus:outline-none 
              focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600
               dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Book a call
            </button>
            <PopupForm isVisible={showPop} onClose={() => setShowPop(false)} />
          </li>
        </ul>

       
      </div>
    </Fragment>
  );
}
