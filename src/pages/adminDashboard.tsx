import React from "react";

export default function AdminDashboard() {
  return (
    <div className="relative min-h-screen">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10">
          
          {/* HEADER */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-gray-800">
              Admin Dashboard 
            </h1>
            <p className="text-gray-600 mt-2">
              Manage users, review plans, and control the system
            </p>
          </div>

          {/* STATS / ACTION CARDS */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* PLANS */}
            <div className="rounded-2xl border p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">
                 Manage Plans
              </h3>
              <p className="text-gray-600 mt-2">
                Approve or reject user-submitted fitness plans.
              </p>
              <a
                href="/admin/plans"
                className="inline-block mt-4 text-indigo-600 font-medium hover:underline"
              >
                View Plans →
              </a>
            </div>

            {/* USERS */}
            <div className="rounded-2xl border p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">
                 Manage Users
              </h3>
              <p className="text-gray-600 mt-2">
                View registered users and remove unwanted accounts.
              </p>
              <a
                href="/admin/users"
                className="inline-block mt-4 text-indigo-600 font-medium hover:underline"
              >
                View Users →
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
