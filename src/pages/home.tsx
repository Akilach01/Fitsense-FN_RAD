import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";


export default function Home() {
  const { user, loading } = useAuth();

  // Wait for auth to load
  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  // Redirect logged-in users to their dashboards
  if (user) {
    if (user.role === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    }
    return <Navigate to="/user/dashboard" replace />;
  }

  // Always show guest landing page if no user
  return (
    <div className="space-y-10">
        {/* HERO SECTION */}
       <section className="relative overflow-hidden rounded-3xl">
  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://as1.ftcdn.net/jpg/03/29/60/84/1000_F_329608479_vP9nFK795X8lWmoTa8DPhMgoewQ7U1lG.jpg')"
    }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

  {/* CONTENT */}
  <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center p-10 md:p-16">
    
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
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="px-6 py-3 border border-black-300 rounded-lg hover:bg-gray-100 transition"
        >
          Login
        </Link>
      </div>
    </div>

    {/* RIGHT – IMAGE CARD */}
    <div className="flex justify-center">
      <img
        src="https://img.freepik.com/premium-photo/sport-bodybuilding-lifestyle-people-concept-young-man-woman-with-barbell-flexing-muscles-gym-trainer-fitness-girl-are-having-workout-gym_116317-18693.jpg"
        alt="Fitness"
        className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
      />
    </div>
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
