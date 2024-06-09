import React from "react";
import Image from "next/image";
import Logo from "../../../../public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#1A1D2B]">
      <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 xl:gap-8">
            <div className="space-y-4 text-white">
              <div className="flex items-center space-x-2 text-2xl font-medium">
                <span>
                  <Image
                    src={Logo}
                    alt="Company Logo"
                    width="150"
                    height="80"
                  />
                </span>
                </div>
              <div className="max-w-md pr-16 text-md">
                Providing high-quality medical gas products for healthcare
                facilities.
              </div>
            </div>
            <div className="space-y-4 text-white">
              <h3 className="text-md font-semibold leading-6">Products</h3>
              <ul role="list" className="mt-2 space-y-2">
                <li>Medical Oxygen</li>
                <li>Nitrous Oxide</li>
                <li>Carbon Dioxide</li>
                <li>Medical Air</li>
                <li>Helium</li>
              </ul>
            </div>
            <div className="space-y-4 text-white">
              <h3 className="text-md font-semibold leading-6">Services</h3>
              <ul role="list" className="mt-2 space-y-2">
                <li>Gas Delivery</li>
                <li>Gas Installation</li>
                <li>Gas Maintenance</li>
                <li>Emergency Support</li>
              </ul>
            </div>
            <div className="space-y-4 text-white">
              <h3 className="text-md font-semibold leading-6">Contact</h3>
              <ul role="list" className="mt-2 space-y-2">
                <li>120 Dhaskend Street, B R Puram,Hopes College, Peelamedu</li>
                <li>Coimbatore - 641004</li>
                <li>Email: sridharmedisystems@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24 text-center text-white">
            &copy; 2024. Designed with <span className="text-gray-50">♥</span>{" "}
            by Sridhar Medi Systems.
          </div>
        </div>
      </div>
    </footer>
  );
}
