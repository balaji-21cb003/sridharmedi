"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify"; // Import toast component

const PopupForm = ({ isVisible, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [requirements, setRequirements] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [name, email, phoneNumber, companyName, requirements]);

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

    if (!companyName) {
      errors.companyName = "Company name is required.";
    }

    if (!requirements) {
      errors.requirements = "Requirements are required.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = async () => {
    const formData = { name, email, phoneNumber, companyName, requirements };

    try {
      const response = await axios.post(
        "http://localhost:5000/submit-form",
        formData
      );
      console.log(response.data);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setCompanyName("");
      setRequirements("");
      toast.success("Form submitted successfully!"); // Display success message
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute py-2 px-3 rounded-full bg-red-500 top-3 right-3 text-white"
        >
          x
        </button>
        <div className="mb-2">
          <p className="text-lg mb-1">Enter your full name:</p>
          <input
            className="w-full px-4 py-2 mb-1 border rounded-md text-lg focus:outline-none focus:border-blue-500"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="text-red-500 mb-1">{errors.name}</p>}
        </div>
        <div className="mb-2">
          <p className="text-lg mb-1">Enter your email:</p>
          <input
            className="w-full px-4 py-2 mb-1 border rounded-md text-lg focus:outline-none focus:border-blue-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 mb-1">{errors.email}</p>}
        </div>
        <div className="mb-2">
          <p className="text-lg mb-1">Enter your phone number:</p>
          <input
            className="w-full px-4 py-2 mb-1 border rounded-md text-lg focus:outline-none focus:border-blue-500"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 mb-1">{errors.phoneNumber}</p>
          )}
        </div>
        <div className="mb-2">
          <p className="text-lg mb-1">Enter your company name:</p>
          <input
            className="w-full px-4 py-2 mb-1 border rounded-md text-lg focus:outline-none focus:border-blue-500"
            placeholder="Company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          {errors.companyName && (
            <p className="text-red-500 mb-1">{errors.companyName}</p>
          )}
        </div>
        <div className="mb-2">
          <p className="text-lg mb-1">Enter your requirements:</p>
          <textarea
            className="w-full px-4 py-2 mb-1 border rounded-md text-lg focus:outline-none focus:border-blue-500"
            placeholder="Requirements"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
          />
          {errors.requirements && (
            <p className="text-red-500 mb-1">{errors.requirements}</p>
          )}
        </div>
        <button
          className={`w-full bg-green-500 text-white font-semibold py-2 rounded-md text-lg focus:outline-none ${
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
