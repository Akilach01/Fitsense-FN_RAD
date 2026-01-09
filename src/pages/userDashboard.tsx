import React from "react";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  return (
    <div className="relative min-h-screen">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10">
          
          {/* HEADER */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-gray-800">
              Welcome Back 💪
            </h1>
            <p className="text-gray-600 mt-2">
              Let’s continue building your fitness journey
            </p>
          </div>

          {/* ACTION CARDS */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* CREATE PLAN */}
            <div className="rounded-2xl border p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">
                🏋️ Create Fitness Plan
              </h3>
              <p className="text-gray-600 mt-2">
                Design a new personalized fitness plan tailored to your goals.
              </p>
              <Link
                to="/plans/create"
                className="inline-block mt-4 text-indigo-600 font-medium hover:underline"
              >
                Create Plan →
              </Link>
            </div>

            {/* MY PLANS */}
            <div className="rounded-2xl border p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">
                📊 My Plans
              </h3>
              <p className="text-gray-600 mt-2">
                View, track, and manage your submitted fitness plans.
              </p>
              <Link
                to="/plans/me"
                className="inline-block mt-4 text-indigo-600 font-medium hover:underline"
              >
                View My Plans →
              </Link>
            </div>
          </div>

          {/* MOTIVATIONAL FOOTER */}
          <div className="mt-10 text-center text-gray-500 italic">
            “The body achieves what the mind believes.”
          </div>

        </div>
      </div>
    </div>
  );
}
