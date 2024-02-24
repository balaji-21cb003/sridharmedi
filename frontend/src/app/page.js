// page.js
import React from "react";
import Navbar from "./components/Navbar/page";
import HomePage from "@/app/home/page"; // Renamed Home to HomePage

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage /> {/* Updated component name */}
      {/* <PopupForm /> */}
    </div>
  );
}
