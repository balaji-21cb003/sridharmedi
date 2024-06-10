import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#1A1D2B]">
      <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl  pb-10 pt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 xl:gap-8">
            <div className="space-y-4 text-white">
              <div className="max-w-md pr-16 text-md">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d592.1122536763543!2d77.02186368744852!3d11.024948618590786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSridhar%20Medi%20Systems%20116%2C%20Valluvar%20Nagar%2C%20Aerodrome.%5C015%5C012%20Coimbatore%20Tamil%20Nadu%20641014%20India!5e0!3m2!1sen!2sin!4v1718010087224!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
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
