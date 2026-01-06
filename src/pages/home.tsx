import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Home() {
  const { user } = useAuth();

  // -------------------------------
  // GUEST LANDING PAGE
  // -------------------------------
  if (!user) {
    return (
      <div className="space-y-10">
        {/* HERO SECTION */}
       <section className="grid md:grid-cols-2 gap-12 items-center">
  {/* LEFT – TEXT */}
  <div className="max-w-xl">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
      Plan Smarter. <br />
      Train Better. <br />
      <span className="text-blue-600">Live Healthier.</span>
    </h1>

    <p className="mt-6 text-gray-600 text-lg">
      FitSense helps you create personalized fitness plans, track
      progress, and stay consistent — all in one place.
    </p>

    <div className="mt-8 flex gap-5">
      <Link
        to="/register"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Get Started
      </Link>
      <Link
        to="/login"
        className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
      >
        Login
      </Link>
    </div>
  </div>

  {/* RIGHT – IMAGE */}
  <div className="flex justify-center">
    <img
      src="https://as1.ftcdn.net/jpg/03/29/60/84/1000_F_329608479_vP9nFK795X8lWmoTa8DPhMgoewQ7U1lG.jpg"
      alt="Fitness"
      className="
        w-full
        max-w-md
        rounded-2xl
        shadow-xl
        object-fit
      "
    />
  </div>
</section>


        {/* ABOUT SECTION */}
        <section className="bg-white rounded-2xl shadow p-10">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose FitSense?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">
                Personalized Plans
              </h3>
              <p className="text-gray-600">
                Create fitness plans tailored to your goals and lifestyle.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">
                AI-Assisted Descriptions
              </h3>
              <p className="text-gray-600">
                Generate smart workout descriptions using AI assistance.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">
                Admin Approval System
              </h3>
              <p className="text-gray-600">
                Ensures quality plans through admin review and approval.
              </p>
            </div>
          </div>
        </section>

        {/* IMAGE GALLERY */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10">
            Train Anywhere
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="https://media.istockphoto.com/id/1265599567/photo/muscular-young-man-training-at-gym-with-smart-phone.jpg?s=612x612&w=0&k=20&c=D4JH0kO7dKEUX_PktjhEp60ctjFNMDJGfc5vfYpgyTs="
              className="rounded-xl shadow"
            />
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
              className="rounded-xl shadow"
            />
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
              className="rounded-xl shadow"
            />
          </div>
        </section>
      </div>
    );
  }

  // -------------------------------
  // LOGGED-IN DASHBOARD
  // -------------------------------
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold">
          Welcome back 
        </h1>
        <p className="text-gray-600 mt-1">
          {user.email} ({user.role})
        </p>
      </div>

      {/* USER DASHBOARD */}
      {user.role === "user" && (
  <div className="grid md:grid-cols-2 gap-8">
    {/* Create Plan */}
    <Link
      to="/plans/create"
      className="group bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
        alt="Create plan"
        className="h-44 w-full object-cover group-hover:scale-105 transition"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          Create Fitness Plan
        </h3>
        <p className="text-gray-600">
          Design and submit a personalized fitness plan for approval.
        </p>
      </div>
    </Link>

    {/* My Plans */}
    <Link
      to="/plans/me"
      className="group bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1550345332-09e3ac987658"
        alt="My plans"
        className="h-44 w-full object-cover group-hover:scale-105 transition"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          My Plans
        </h3>
        <p className="text-gray-600">
          View your submitted plans and track approval status.
        </p>
      </div>
    </Link>
  </div>
)}


      {/* ADMIN DASHBOARD */}
    {user.role === "admin" && (
  <div className="grid md:grid-cols-2 gap-8">
    {/* Manage Plans */}
    <Link
      to="/admin/plans"
      className="group bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
        alt="Admin plans"
        className="h-44 w-full object-cover group-hover:scale-105 transition"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          Manage Fitness Plans
        </h3>
        <p className="text-gray-600">
          Review, approve, or reject submitted fitness plans.
        </p>
      </div>
    </Link>

    {/* Manage Users */}
    <Link
      to="/admin/users"
      className="group bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
        alt="Manage users"
        className="h-44 w-full object-cover group-hover:scale-105 transition"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          Manage Users
        </h3>
        <p className="text-gray-600">
          View users, manage access, and remove accounts.
        </p>
      </div>
    </Link>
  </div>
)}  
    </div>
  );
}
