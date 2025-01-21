"use client"; // Ensure client-side rendering
import React from "react";
import "./Starfield.css"; // Ensure CSS file is included

const StarField = () => {
  return (
    <>
      {/* Background */}
      <div className="bg"></div>

      {/* Star Field Animation */}
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
    </>
  );
};

export default StarField;
