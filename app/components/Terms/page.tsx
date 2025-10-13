"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function TermsConditionsPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 
                    bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 
                    relative overflow-hidden">
      {/* Optional blurred circles for effect */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative w-full max-w-3xl bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white">
          <h1 className="text-3xl font-bold">Terms & Conditions</h1>
          <p className="mt-2 text-sm">
            Please read these Terms & Conditions carefully and click <strong>Agree</strong> to continue.
          </p>
        </div>

        {/* Scrollable content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto text-gray-800 space-y-4 bg-white shadow-inner rounded-xl">
          <h2 className="font-semibold text-green-700">Last Updated: October 13, 2025</h2>
          <p>
            Welcome to <strong>Zeeza Global</strong>. By using our website or services, you agree to comply with the following terms and conditions.
          </p>

          <h3 className="font-semibold text-blue-700">1. Use of Services</h3>
          <p>You agree to use our services only for lawful purposes and not to violate any local or international laws.</p>

          <h3 className="font-semibold text-purple-700">2. Account Responsibility</h3>
          <p>Users are responsible for maintaining the confidentiality of any accounts or passwords used on our website.</p>

          <h3 className="font-semibold text-green-700">3. Intellectual Property</h3>
          <p>All content on this site, including text, graphics, and logos, is the property of Your Company or its licensors.</p>

          <h3 className="font-semibold text-blue-700">4. Limitation of Liability</h3>
          <p>We are not liable for any damages arising from the use of our website or services.</p>

          <h3 className="font-semibold text-purple-700">5. Termination</h3>
          <p>We reserve the right to terminate or suspend access to our services at any time without notice.</p>

          <h3 className="font-semibold text-green-700">6. Governing Law</h3>
          <p>These terms are governed by the laws of the country in which Your Company operates.</p>
        </div>

        {/* Footer with Agree button */}
        <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 flex items-center justify-end">
          {agreed ? (
            <Link
              href="/"
              className="px-5 py-2 rounded-xl font-medium text-white bg-green-600 hover:bg-green-700 shadow-lg transition transform hover:scale-105"
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
              className="h-4 w-4 text-green-600 border-gray-300 rounded"
            />
            I have read
          </label>
        </div>
      </div>
    </div>
  );
}
