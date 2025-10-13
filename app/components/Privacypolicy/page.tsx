"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 
                    bg-gradient-to-r from-indigo-300 via-pink-200 to-yellow-200 
                    relative overflow-hidden">
      {/* Optional: Animated circles in background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative w-full max-w-3xl bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-sm">
            Please review our Privacy Policy and click <strong>Agree</strong> to continue.
          </p>
        </div>

        {/* Scrollable content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto text-gray-800 space-y-4 bg-white shadow-inner rounded-xl">
          <h2 className="font-semibold text-indigo-700">Last Updated: October 13, 2025</h2>
          <p>
            Welcome to <strong>Zeeza Global</strong>. We value your privacy and are committed to protecting your personal information.
          </p>

          <h3 className="font-semibold text-purple-700">1. Information We Collect</h3>
          <p>We may collect personal info (name, email, phone) and non-personal info (IP, browser type, pages visited).</p>

          <h3 className="font-semibold text-pink-700">2. How We Use Your Information</h3>
          <ul className="list-disc list-inside">
            <li>Provide and manage our services</li>
            <li>Respond to inquiries and project requests</li>
            <li>Send updates or marketing (if opted in)</li>
            <li>Improve website performance</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h3 className="font-semibold text-indigo-700">3. Cookies & Tracking</h3>
          <p>We use cookies to analyze traffic and store preferences. Disabling cookies may affect some features.</p>

          <h3 className="font-semibold text-purple-700">4. Data Security</h3>
          <p>We implement industry-standard security measures to protect your information.</p>

          <h3 className="font-semibold text-pink-700">5. Your Rights</h3>
          <p>You can access, correct, or delete your data and withdraw consent. Contact us to exercise these rights.</p>
        </div>

        {/* Footer with Agree button */}
        <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200 flex items-center justify-end">
          {agreed ? (
            <Link
              href="/"
              className="px-5 py-2 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg transition transform hover:scale-105"
            >
              Agree
            </Link>
          ) : (
            <button
              disabled
              className="px-5 py-2 rounded-xl font-medium bg-gray-300 text-gray-500 cursor-not-allowed"
            >
              Agree
            </button>
          )}

          <label className="ml-4 flex items-center gap-2 text-sm text-gray-700 font-medium">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            I have read
          </label>
        </div>
      </div>
    </div>
  );
}
