import React from "react";
import {
  FaTools,
  FaWrench,
  FaBoxOpen,
  FaHospitalAlt,
  FaCogs,
  FaHandsHelping,
} from "react-icons/fa";
import "../Styles/styles.css";

export default function Service() {
  return (
    <div>
      <div>
        <div>
          <p class="text-center font-bold text-3xl sm:text-4xl leading-7 text-indigo-600">
            Service
          </p>
          <p className="mt-8">
            We provide comprehensive solutions to enhance healthcare facilities,
            combining unmatched expertise, <br></br> cutting-edge technology,
            and a steadfast commitment to quality and safety.
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap p-8">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 card">
            <div className="h-full mb-9 rounded-xl py-6 px-7 shadow-md transition-all hover:shadow-lg hover:transition duration-300 sm:p-9 lg:px-6 xl:px-9">
              <div className="mx-auto mb-5 text-3xl text-indigo-600 inline-block icon">
                <FaTools />
              </div>
              <div className="content">
                <h3 className="mb-2 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Design & Installation
                </h3>
                <p className="text-base font-medium text-body-color leading-relaxed">
                  Tailored solutions for Medical Gas Pipeline Systems & Modular
                  Operation Theatres, ensuring safety and compliance.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-1/3 card">
            <div className="h-full mb-9 rounded-xl py-6 px-7 shadow-md transition-all hover:shadow-lg hover:transition duration-300 sm:p-9 lg:px-6 xl:px-9">
              <div className="mx-auto mb-5 text-3xl text-indigo-600 inline-block icon">
                <FaWrench />
              </div>
              <div className="content">
                <h3 className="mb-2 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Maintenance Contracts
                </h3>
                <p className="text-base font-medium text-body-color leading-relaxed">
                  Proactive AMC & periodical plans, backed by 24/7 support for
                  uninterrupted operations.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-1/3 card">
            <div className="h-full mb-9 rounded-xl py-6 px-7 shadow-md transition-all hover:shadow-lg hover:transition duration-300 sm:p-9 lg:px-6 xl:px-9">
              <div className="mx-auto mb-5 text-3xl text-indigo-600 inline-block icon">
                <FaBoxOpen />
              </div>
              <div className="content">
                <h3 className="mb-2 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Supply of Accessories
                </h3>
                <p className="text-base font-medium text-body-color leading-relaxed">
                  High-quality parts & equipment for MGPS & MOT, delivered
                  promptly for your convenience.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-1/3 card">
            <div className="h-full mb-9 rounded-xl py-6 px-7 shadow-md transition-all hover:shadow-lg hover:transition duration-300 sm:p-9 lg:px-6 xl:px-9">
              <div className="mx-auto mb-5 text-3xl text-indigo-600 inline-block icon">
                <FaHospitalAlt />
              </div>
              <div className="content">
                <h3 className="mb-2 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Hospital Building Solutions
                </h3>
                <p className="text-base font-medium text-body-color leading-relaxed">
                  Turnkey project management, collaborating with experts to meet
                  your facility needs.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-1/3 card">
            <div className="h-full mb-9 rounded-xl py-6 px-7 shadow-md transition-all hover:shadow-lg hover:transition duration-300 sm:p-9 lg:px-6 xl:px-9">
              <div className="mx-auto mb-5 text-3xl text-indigo-600 inline-block icon">
                <FaCogs />
              </div>
              <div className="content">
                <h3 className="mb-2 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Advanced Technology Integration
                </h3>
                <p className="text-base font-medium text-body-color leading-relaxed">
                  AI-driven solutions optimizing patient care and operational
                  efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-1/3 card">
            <div className="h-full mb-9 rounded-xl py-6 px-7 shadow-md transition-all hover:shadow-lg hover:transition duration-300 sm:p-9 lg:px-6 xl:px-9">
              <div className="mx-auto mb-5 text-3xl text-indigo-600 inline-block icon">
                <FaHandsHelping />
              </div>
              <div className="content">
                <h3 className="mb-2 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Emergency Support
                </h3>
                <p className="text-base font-medium text-body-color leading-relaxed">
                  24/7 emergency services, providing immediate assistance for
                  critical issues, ensuring continuous operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
