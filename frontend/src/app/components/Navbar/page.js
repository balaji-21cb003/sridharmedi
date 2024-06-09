"use client";
import React, { Fragment, useState } from "react";
import PopupForm from "@/app/popupform/page";
import Image from "next/image";
import logo from "../../../../public/logo.png";

export default function Navbar() {
  const [showPop, setShowPop] = useState(false);

  return (
    <Fragment>
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl  font-bold">
          <Image src={logo} alt="Logo" width={150} height={80} />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center flex-grow justify-center">
          <ul className="flex space-x-16">
            <li className="cursor-pointer transition font-semibold ease-out duration-300  hover:text-indigo-600 hover:font-extrabold hover:scale-105 transform-gpu">
              Home
            </li>
            <li className="cursor-pointer transition font-semibold ease-out duration-300  hover:text-indigo-600 hover:font-extrabold hover:scale-105 transform-gpu">
              Products
            </li>
            <li className="cursor-pointer transition font-semibold ease-out duration-300  hover:text-indigo-600 hover:font-extrabold hover:scale-105 transform-gpu">
              About Us
            </li>
          </ul>
        </div>

        {/* Book a Call */}
        <ul>
          <li>
            <button
              type="button"
              onClick={() => setShowPop(true)}
              className="transition ease-in-out duration-300 text-white bg-indigo-900 hover:text-white hover:ease-out focus:outline-none 
              focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-indigo-600
               dark:hover:bg-indigo-700 dark:focus:ring-blue-800"
            >
              Request for quote
            </button>
            <PopupForm isVisible={showPop} onClose={() => setShowPop(false)} />
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
