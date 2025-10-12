'use client'
import { useState } from "react";
import img from "@/public/images/aboutus/dash.jpg";

export default function AboutuaPage() {
  const [message, setMessage] = useState(""); // State for the confirmation message

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    setMessage("Thank you! We will contact you soon.");
  };

  return (
    <main
      className="flex flex-col items-center justify-start p-4"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, #c1f0f6 0%, #ffffff 100%)",
      }}
    >
      {/* Headings */}
      <div className="flex flex-col items-center justify-center text-center mt-4 sm:mt-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#007475] leading-snug">
          Advanced software for
        </h1>
        <h1 className="mt-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#007475] leading-snug">
          all business
        </h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg text-black px-4 sm:px-0">
          “Where expertise meets excellence.”
        </p>
      </div>

      {/* Input and Button */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center mt-4 sm:mt-5 w-full max-w-md px-4"
      >
        <input
          id="email"
          name="text"
          type="email"
          required
          placeholder="Enter your email"
          className="w-full sm:flex-1 mb-2 sm:mb-0 sm:mr-2 rounded-md border-2 border-blue-500 hover:border-black bg-black/5 px-3 py-2 text-base text-black transition"
        />
        <button
          type="submit"
          className="w-full sm:w-auto rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition"
        >
          Get free quote
        </button>
      </form>

      {/* Confirmation message */}
      {message && (
        <p className="mt-2 text-green-600 font-medium">{message}</p>
      )}

      {/* Image */}
      <div className="flex justify-center items-center mt-3 sm:mt-5 px-4">
        <img
          src={img.src}
          alt="dash"
          className="rounded-xl w-full max-w-[1000px] sm:max-w-[1200px] h-auto"
        />
      </div>
    </main>
  );
}
