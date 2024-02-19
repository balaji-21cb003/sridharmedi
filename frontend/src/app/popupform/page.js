"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const PopupForm = ({ isVisible, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [name, email, phoneNumber]);

  const validateForm = () => {
    let errors = {};

    if (!name) {
      errors.name = "Name is required.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    if (!phoneNumber) {
      errors.phoneNumber = "Phone number is required.";
    } else if (phoneNumber.length !== 10) {
      errors.phoneNumber = "Phone number must be of 10 digits.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = async () => {
    const formData = { name, email, phoneNumber };

    try {
      const response = await axios.post(
        "http://localhost:5000/submit-form", // Corrected endpoint URL
        formData
      );
      console.log(response.data);
      setName("");
      setEmail("");
      setPhoneNumber("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute  py-1 px-1.5 rounded-full  bg-red-500 top-2 right-2 text-white"
        >
          x
        </button>
        <input
          className="  mt-10 w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="text-red-500 mb-4">{errors.name}</p>}
        <input
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500 mb-4">{errors.email}</p>}
        <input
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 mb-4">{errors.phoneNumber}</p>
        )}
        <button
          className={`w-full bg-green-500 text-white font-semibold py-2 rounded-md focus:outline-none ${
            isFormValid ? "opacity-100" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!isFormValid}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PopupForm;
