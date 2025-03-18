import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate(); // ✅ React Router navigation

  // ✅ Navigate to gemini.jsx when button is clicked
  const handleAIButtonPress = () => {
    console.log("AI Button Pressed"); // Debugging log
    navigate("/gemini"); // ✅ Navigate to Gemini AI screen
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      {/* Logo and Welcome Message */}
      <img
        src="/assets/AgriCare-logo1.png"
        alt="AgriCare Logo"
        className="w-32 h-32 mb-4"
      />
      <h1 className="text-3xl font-bold text-green-800">
        Welcome to AgriCare! 🌱
      </h1>
      <p className="text-lg text-green-700 mb-6">
        Your AI-powered plant care assistant
      </p>

      {/* Buttons for Scanning and History */}
      <div className="flex space-x-4 mb-6">
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md">
          📸 Scan Plant
        </button>
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md">
          📂 View History
        </button>
      </div>

      {/* AI Assistance Section */}
      <p className="text-md text-gray-700 mb-2">Need AI Assistance?</p>
      <button
        className="bg-orange-500 text-white px-8 py-3 rounded-lg shadow-md"
        onClick={handleAIButtonPress}
      >
        💬 Ask AgriCare AI
      </button>

      {/* Footer Section */}
      <p className="absolute bottom-5 text-sm text-gray-600">
        🌍 AgriCare | Contact | Version 1.0
      </p>
    </div>
  );
}
