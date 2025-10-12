"use client";
import Lottie from "lottie-react";
import successAnimation from "@/public/lottie/success.json";
import { useState } from "react";
import Questions, { type Question } from "../components/Questions/Questions";
import { useRouter } from "next/navigation"; 

const questions: Question[] = [
  { id: "q1", prompt: "What type of project do you want?", type: "radio", options: ["Website", "Mobile app", "E-commerce", "Other"] },
  { id: "q2", prompt: "When do you plan to start the project", type: "radio", options: ["Immediately", "Within a week", "Within a month", "Just exploring for now"] },
  { id: "q3", prompt: "Do you already have a domain and hosting", type: "radio", options: ["Yes", "No", "Not sure"] },
  { id: "q4", prompt: "Do you need us to handle website design, develpoment, or both", type: "radio", options: ["Design only", "Development only", "Both design and development"] },
  { id: "q5", prompt: "Any must-have features?", type: "text" },
  { id: "q6", prompt: "How shall we contact you? (Email / Phone)", type: "text" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  return (
    <main
      className="min-h-screen p-4 flex flex-col items-center justify-start"
      style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #c1f0f6 0%, #ffffff 100%)' }}
    >
      {/* Hero Section */}
      {!success && (
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl mt-8 p-8 flex flex-col items-center justify-center text-center max-w-2xl animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 drop-shadow-md">
            Welcome to Your Project Wizard
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mt-4">
            Click <span className="font-semibold text-indigo-600">Get Started</span> to answer 6 quick questions and let us know about your project.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-6 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-10 py-3 text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Get Started
          </button>
        </div>
      )}

      {/* Success Message */}
{success && (
  <div className="mt-10 bg-green-100 border border-green-400 text-green-800 px-6 py-6 rounded-xl max-w-xl text-center animate-fade-in flex flex-col items-center">
    {/* Lottie Animation */}
    <div className="w-32 h-32 mx-auto">
      <Lottie animationData={successAnimation} loop={false} />
    </div>

    <h3 className="text-2xl font-bold mb-2">Success!</h3>
    <p className="text-lg mb-4">Your answers have been submitted. Thank you!</p>

    {/* Home Button */}
    <button
      onClick={() => router.push("/")}
      className="mt-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 shadow-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      Back to Home
    </button>
  </div>
)}

      {/* Question Wizard */}
      <Questions
        questions={questions}
        open={open}
        onClose={() => setOpen(false)}
        onFinish={() => {
          setOpen(false);
          setSuccess(true);
          console.log("Wizard completed");
        }}
      />
    </main>
  );
}
